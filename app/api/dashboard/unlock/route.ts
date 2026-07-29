import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { DASHBOARD_COOKIE_NAME, DASHBOARD_PASSWORD_HASH } from "@/lib/dashboard-auth"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const password = typeof body.password === "string" ? body.password : ""
  const hash = crypto.createHash("sha256").update(password).digest("hex")

  if (hash !== DASHBOARD_PASSWORD_HASH) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(DASHBOARD_COOKIE_NAME, DASHBOARD_PASSWORD_HASH, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.delete(DASHBOARD_COOKIE_NAME)
  return res
}
