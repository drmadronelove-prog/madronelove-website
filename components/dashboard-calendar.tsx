"use client"

import { useCallback, useEffect, useState } from "react"
import { CalendarDays, Loader2, MapPin, RefreshCw } from "lucide-react"
import type { CalendarEvent } from "@/lib/google-calendar"

/** Not connected, or connected with a token that predates the calendar scope. */
function needsReconnect(error: string): boolean {
  const lower = error.toLowerCase()
  return (
    lower.includes("not connected") ||
    lower.includes("isn't connected") ||
    lower.includes("insufficient") ||
    lower.includes("scope")
  )
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

/** All-day dates are plain YYYY-MM-DD and must not be shifted by timezone. */
function parseStart(e: CalendarEvent): Date {
  if (e.allDay) {
    const [y, m, d] = e.start.split("-").map(Number)
    return new Date(y, m - 1, d)
  }
  return new Date(e.start)
}

function dayHeading(d: Date): string {
  const today = startOfDay(new Date())
  const target = startOfDay(d)
  const diff = Math.round((target.getTime() - today.getTime()) / 86_400_000)
  if (diff === 0) return "Today"
  if (diff === 1) return "Tomorrow"
  return d.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })
}

function timeLabel(e: CalendarEvent): string {
  if (e.allDay) return "All day"
  const start = new Date(e.start)
  const label = start.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
  if (!e.end) return label
  const end = new Date(e.end)
  return `${label} – ${end.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}`
}

export function DashboardCalendar() {
  const [events, setEvents] = useState<CalendarEvent[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/calendar", { cache: "no-store" })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Couldn't load the calendar.")
        setEvents(null)
      } else {
        setEvents(data.events)
      }
    } catch {
      setError("Couldn't reach the calendar.")
      setEvents(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  // Group into day buckets so the list reads like a schedule.
  const days: { key: string; heading: string; items: CalendarEvent[] }[] = []
  for (const e of events ?? []) {
    const d = parseStart(e)
    const key = startOfDay(d).toDateString()
    const last = days[days.length - 1]
    if (last && last.key === key) last.items.push(e)
    else days.push({ key, heading: dayHeading(d), items: [e] })
  }

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-4 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-2">
        <CalendarDays className="h-3.5 w-3.5 shrink-0 text-[var(--olive)]" />
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">Upcoming</p>
        <button
          type="button"
          onClick={load}
          disabled={loading}
          aria-label="Refresh calendar"
          className="ml-auto text-[var(--ink-muted)] transition hover:text-[var(--ink)] disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <RefreshCw className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {error && (
        <p className="py-2 text-sm text-[var(--clay)]">
          {needsReconnect(error) ? (
            <>
              Google Calendar isn&rsquo;t connected yet.{" "}
              <a href="/api/auth/google" className="font-medium underline">
                Connect Google Calendar
              </a>
            </>
          ) : (
            error
          )}
        </p>
      )}

      {!error && loading && events === null && (
        <p className="py-2 text-sm text-[var(--ink-muted)]">Loading…</p>
      )}

      {!error && events !== null && days.length === 0 && (
        <p className="py-2 text-sm text-[var(--ink-muted)]">Nothing on the calendar coming up.</p>
      )}

      <div className="flex flex-col gap-4">
        {days.map((day) => (
          <div key={day.key}>
            <p className="mb-1.5 text-xs font-semibold text-[var(--ink)]">{day.heading}</p>
            <ul className="flex flex-col gap-1.5">
              {day.items.map((e) => (
                <li key={e.id} className="flex gap-3 border-l-2 border-[var(--gold)] pl-3">
                  <span className="w-28 shrink-0 text-xs text-[var(--ink-muted)]">{timeLabel(e)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-[var(--ink)]">
                      {e.htmlLink ? (
                        <a
                          href={e.htmlLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--clay)] hover:underline"
                        >
                          {e.title}
                        </a>
                      ) : (
                        e.title
                      )}
                    </span>
                    {e.location && (
                      <span className="mt-0.5 flex items-center gap-1 text-xs text-[var(--ink-muted)]">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="truncate">{e.location}</span>
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
