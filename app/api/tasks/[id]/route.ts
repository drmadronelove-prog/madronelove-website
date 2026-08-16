import { NextRequest, NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"
import { setTaskStatus } from "@/lib/google-tasks"

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await hasDashboardSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json().catch(() => ({}))
  const completed = Boolean(body.completed)
  const listId = typeof body.listId === "string" && body.listId ? body.listId : undefined
  try {
    return NextResponse.json({ task: await setTaskStatus(id, completed, listId) })
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "unknown error" }, { status: 500 })
  }
}
