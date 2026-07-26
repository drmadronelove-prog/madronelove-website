import { cookies } from "next/headers"

// SHA-256 of the dashboard password. Override with DASHBOARD_PASSWORD_HASH
// in the environment to change the password without touching code:
//   node -e "console.log(require('crypto').createHash('sha256').update('newpassword').digest('hex'))"
export const DASHBOARD_PASSWORD_HASH =
  process.env.DASHBOARD_PASSWORD_HASH ||
  "66ab65a4b7267dddd8be7fcd0c0cffe4a7354d0c38f97cca9552c09773a797c6"

export const DASHBOARD_COOKIE_NAME = "madrone_dashboard_session"

export async function hasDashboardSession() {
  const store = await cookies()
  return store.get(DASHBOARD_COOKIE_NAME)?.value === DASHBOARD_PASSWORD_HASH
}
