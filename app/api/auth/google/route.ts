import { NextRequest, NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"
import { setupPage } from "@/lib/google-setup-page"

// One-time setup: visit this route while logged into /dashboard to grant
// this app access to your Google Tasks. The callback route shows a
// refresh token to copy into GOOGLE_TASKS_REFRESH_TOKEN.
export async function GET(req: NextRequest) {
  if (!(await hasDashboardSession())) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const redirectUri = new URL("/api/auth/google/callback", req.url).toString()

  // Both are needed before Google can hand back a refresh token, so check
  // them together rather than failing one at a time.
  if (!clientId || !clientSecret) {
    return setupPage({ redirectUri })
  }

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
