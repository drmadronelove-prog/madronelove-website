// Server-only helper for the Google Calendar API. Auth lives in ./google-auth.
import { describeFailure, getAccessToken } from "@/lib/google-auth"

const CALENDAR_BASE = "https://www.googleapis.com/calendar/v3"

/** Which calendar to show. "primary" is the signed-in account's own. */
const CALENDAR_ID = "primary"

export type CalendarEvent = {
  id: string
  title: string
  /** RFC3339 for timed events, YYYY-MM-DD for all-day ones. */
  start: string
  end?: string
  allDay: boolean
  location?: string
  htmlLink?: string
}

export async function listUpcomingEvents(maxResults = 25): Promise<CalendarEvent[]> {
  const token = await getAccessToken()

  const params = new URLSearchParams({
    timeMin: new Date().toISOString(),
    maxResults: String(maxResults),
    // Expand recurring events into individual occurrences rather than
    // returning the rule; orderBy=startTime requires this.
    singleEvents: "true",
    orderBy: "startTime",
  })

  const res = await fetch(
    `${CALENDAR_BASE}/calendars/${encodeURIComponent(CALENDAR_ID)}/events?${params}`,
    { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" },
  )
  if (!res.ok) throw new Error(await describeFailure(res, "Failed to list calendar events"))

  const data = await res.json()
  return (data.items || [])
    .filter((e: any) => e.status !== "cancelled")
    .map((e: any) => ({
      id: e.id,
      title: e.summary || "(no title)",
      start: e.start?.dateTime || e.start?.date,
      end: e.end?.dateTime || e.end?.date,
      allDay: Boolean(e.start?.date && !e.start?.dateTime),
      location: e.location,
      htmlLink: e.htmlLink,
    }))
    .filter((e: CalendarEvent) => Boolean(e.start))
}
