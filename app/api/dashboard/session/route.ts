import { NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"

export async function GET() {
  return NextResponse.json({ unlocked: await hasDashboardSession() })
}
