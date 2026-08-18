import { NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"
import { listTaskLists } from "@/lib/google-tasks"

export async function GET() {
  if (!(await hasDashboardSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }
  try {
    return NextResponse.json({ lists: await listTaskLists() })
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "unknown error" }, { status: 500 })
  }
}
