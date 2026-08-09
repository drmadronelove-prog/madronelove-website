import { NextRequest, NextResponse } from "next/server"
import { hasDashboardSession } from "@/lib/dashboard-auth"
import { tokenPage } from "@/lib/google-setup-page"

export async function GET(req: NextRequest) {
  if (!(await hasDashboardSession())) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  const code = req.nextUrl.searchParams.get("code")
  const error = req.nextUrl.searchParams.get("error")
  if (error) {
    return new NextResponse(`Google returned an error: ${error}`, { status: 400 })
  }
  if (!code) {
    return new NextResponse("Missing authorization code.", { status: 400 })
  }

  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    return new NextResponse("GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET are not set in the environment.", {
      status: 500,
    })
  }

  const redirectUri = new URL("/api/auth/google/callback", req.url).toString()

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  })
  const data = await tokenRes.json()

  if (!tokenRes.ok || !data.refresh_token) {
    return new NextResponse(
      "Didn't get a refresh token back from Google.\n\n" +
        `Response: ${JSON.stringify(data, null, 2)}\n\n` +
        "If you've authorized this app before, Google may skip issuing a new refresh token. " +
        "Remove the app's access at https://myaccount.google.com/permissions and try again.",
      { status: 400, headers: { "Content-Type": "text/plain" } }
    )
  }

  return tokenPage(data.refresh_token as string)
}
