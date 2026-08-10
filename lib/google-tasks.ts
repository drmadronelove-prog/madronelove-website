// Server-only helper for the Google Tasks API. Auth lives in ./google-auth.
import { describeFailure, getAccessToken } from "@/lib/google-auth"

const TASKS_BASE = "https://www.googleapis.com/tasks/v1"

export type DashboardTask = {
  id: string
  title: string
  notes?: string
  due?: string
  status: "needsAction" | "completed"
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
