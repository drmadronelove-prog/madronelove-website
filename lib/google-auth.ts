// Shared OAuth plumbing for the Google integrations. Needs three environment
// variables, obtained once via a manual setup step:
//   GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET — from a Google Cloud OAuth
//     client (type "Web application") with the Tasks and Calendar APIs
//     enabled and https://<your-domain>/api/auth/google/callback as an
//     authorized redirect URI.
//   GOOGLE_TASKS_REFRESH_TOKEN — obtained by visiting /api/auth/google
//     while logged into the dashboard; the callback page shows the refresh
//     token once so it can be copied into this env var.
const TOKEN_URL = "https://oauth2.googleapis.com/token"

/** Everything the dashboard reads from Google, requested in one consent. */
export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/tasks",
  "https://www.googleapis.com/auth/calendar.readonly",
].join(" ")

export function requireGoogleEnv() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_TASKS_REFRESH_TOKEN
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Google isn't connected yet. Visit /api/auth/google (while logged into the dashboard) to finish setup."
    )
  }
  return { clientId, clientSecret, refreshToken }
}

// Google explains refusals in the response body; surface that instead of a
// bare status code, which leaves no way to tell a disabled API from a scope
// problem or an expired grant.
export async function describeFailure(res: Response, action: string): Promise<string> {
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

export async function getAccessToken(): Promise<string> {
  const { clientId, clientSecret, refreshToken } = requireGoogleEnv()
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
