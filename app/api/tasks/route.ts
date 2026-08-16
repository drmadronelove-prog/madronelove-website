import { NextRequest, NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"
import { addTask, listTasks } from "@/lib/google-tasks"

export async function GET(req: NextRequest) {
  if (!(await hasDashboardSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }
  const listId = req.nextUrl.searchParams.get("listId") || undefined
  try {
    return NextResponse.json({ tasks: await listTasks(listId) })
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "unknown error" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  if (!(await hasDashboardSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }
  const body = await req.json().catch(() => ({}))
  const title = typeof body.title === "string" ? body.title.trim() : ""
  const listId = typeof body.listId === "string" && body.listId ? body.listId : undefined
  if (!title) {
    return NextResponse.json({ error: "title required" }, { status: 400 })
  }
  try {
    return NextResponse.json({ task: await addTask(title, listId) })
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "unknown error" }, { status: 500 })
  }
}
