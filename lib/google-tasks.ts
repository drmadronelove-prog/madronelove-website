// Server-only helper for the Google Tasks API. Needs three environment
// variables, obtained once via a manual OAuth setup step:
//   GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET — from a Google Cloud OAuth
//     client (type "Web application") with the Tasks API enabled and
//     https://<your-domain>/api/auth/google/callback as an authorized
//     redirect URI.
//   GOOGLE_TASKS_REFRESH_TOKEN — obtained by visiting /api/auth/google
//     while logged into the dashboard; the callback page shows the
//     refresh token once so it can be copied into this env var.
const TOKEN_URL = "https://oauth2.googleapis.com/token"
const TASKS_BASE = "https://www.googleapis.com/tasks/v1"

export type DashboardTask = {
  id: string
  title: string
  notes?: string
  due?: string
  status: "needsAction" | "completed"
}

function requireEnv() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_TASKS_REFRESH_TOKEN
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Google Tasks isn't connected yet. Visit /api/auth/google (while logged into the dashboard) to finish setup."
    )
  }
  return { clientId, clientSecret, refreshToken }
}

// Google explains refusals in the response body; surface that instead of a
// bare status code, which leaves no way to tell a disabled API from a scope
// problem or an expired grant.
async function describeFailure(res: Response, action: string): Promise<string> {
  let detail = ""
  try {
    const body = await res.text()
    try {
      const parsed = JSON.parse(body)
      detail = parsed?.error?.message || parsed?.error_description || parsed?.error || ""
    } catch {
      detail = body.slice(0, 300)
    }
  } catch {
    // fall through to the bare status
  }
  const base = `${action} (${res.status})`
  return detail ? `${base}: ${detail}` : base
}

async function getAccessToken() {
  const { clientId, clientSecret, refreshToken } = requireEnv()
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error(await describeFailure(res, "Failed to refresh Google access token"))
  }
  const data = await res.json()
  return data.access_token as string
}

export async function listTasks(): Promise<DashboardTask[]> {
  const token = await getAccessToken()
  const res = await fetch(
    `${TASKS_BASE}/lists/@default/tasks?showCompleted=true&showHidden=false&maxResults=100`,
    { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
  )
  if (!res.ok) throw new Error(await describeFailure(res, "Failed to list tasks"))
  const data = await res.json()
  const items: DashboardTask[] = (data.items || []).map((t: any) => ({
    id: t.id,
    title: t.title || "(untitled)",
    notes: t.notes,
    due: t.due,
    status: t.status,
  }))
  return items.sort((a, b) => (a.status === b.status ? 0 : a.status === "completed" ? 1 : -1))
}

export async function setTaskStatus(id: string, completed: boolean) {
  const token = await getAccessToken()
  const res = await fetch(`${TASKS_BASE}/lists/@default/tasks/${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ status: completed ? "completed" : "needsAction" }),
  })
  if (!res.ok) throw new Error(await describeFailure(res, "Failed to update task"))
  return res.json()
}

export async function addTask(title: string) {
  const token = await getAccessToken()
  const res = await fetch(`${TASKS_BASE}/lists/@default/tasks`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  })
  if (!res.ok) throw new Error(await describeFailure(res, "Failed to add task"))
  return res.json()
}
