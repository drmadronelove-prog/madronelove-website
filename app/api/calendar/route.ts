import { NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"
import { listUpcomingEvents } from "@/lib/google-calendar"

export async function GET() {
  if (!(await hasDashboardSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }
  try {
    return NextResponse.json({ events: await listUpcomingEvents() })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "unknown error" },
      { status: 500 },
    )
  }
}
