import { NextRequest, NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"

// One-time setup: visit this route while logged into /dashboard to grant
// this app access to your Google Tasks. The callback route shows a
// refresh token to copy into GOOGLE_TASKS_REFRESH_TOKEN.
export async function GET(req: NextRequest) {
  if (!(await hasDashboardSession())) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  const clientId = process.env.GOOGLE_CLIENT_ID
  if (!clientId) {
    return new NextResponse("GOOGLE_CLIENT_ID is not set in the environment.", { status: 500 })
  }

  const redirectUri = new URL("/api/auth/google/callback", req.url).toString()
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "https://www.googleapis.com/auth/tasks",
    access_type: "offline",
    prompt: "consent",
  })

  return NextResponse.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`)
}
