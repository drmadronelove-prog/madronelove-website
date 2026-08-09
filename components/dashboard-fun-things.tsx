"use client"

import { useCallback, useEffect, useState } from "react"
import { Shuffle, MapPin, CalendarDays } from "lucide-react"
import {
  CATEGORY_LABEL,
  dateKey,
  pickForDate,
  FUN_THINGS,
  type FunCategory,
  type FunThing,
} from "@/lib/fun-things"

const STORAGE_KEY = "dashboard-fun-things"

const TAG_CLASS: Record<FunCategory, string> = {
  outdoors: "bg-[#e5f1e6] text-[#3a6b3f]",
  arts: "bg-[#f0e7f7] text-[#6b3f8c]",
  community: "bg-[#fdeee0] text-[#a05a1c]",
}

export function DashboardFunThings() {
  const [picks, setPicks] = useState<FunThing[] | null>(null)
  const [dateLabel, setDateLabel] = useState("")

  useEffect(() => {
    const today = new Date()
    setDateLabel(
      today.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }),
    )

    const key = dateKey(today)
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw) as { date: string; ids: string[] }
        if (saved.date === key) {
          const restored = saved.ids
            .map((id) => FUN_THINGS.find((t) => t.id === id))
            .filter((t): t is FunThing => Boolean(t))
          if (restored.length) {
            setPicks(restored)
            return
          }
        }
      }
    } catch {
      // ignore malformed storage
    }

    const fresh = pickForDate(today)
    setPicks(fresh)
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: key, ids: fresh.map((t) => t.id) }),
    )
  }, [])

  const shuffle = useCallback(() => {
    const today = new Date()
    const fresh = pickForDate(today, Math.random)
    setPicks(fresh)
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: dateKey(today), ids: fresh.map((t) => t.id) }),
    )
  }, [])

  return (
    <section className="mb-6 mt-10">
      <h2 className="mb-1 text-center font-serif text-xl text-[var(--ink)]">
        3 fun things to do today
      </h2>
      <p className="mb-4 text-center text-xs text-[var(--ink-muted)]">
        Outdoors &amp; nature · arts &amp; culture · concerts &amp; Jewish community
        {dateLabel && <> &middot; {dateLabel}</>}
      </p>

      <div className="flex flex-col gap-3">
        {(picks ?? []).map((thing) => (
          <div
            key={thing.id}
            className="rounded-2xl border border-white/50 bg-white/80 p-4 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm"
          >
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${TAG_CLASS[thing.cat]}`}
            >
              {CATEGORY_LABEL[thing.cat]}
            </span>
            <h3 className="mt-2 font-serif text-lg text-[var(--ink)]">{thing.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">{thing.desc}</p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
              {thing.link && (
                <a
                  href={thing.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--clay)] hover:underline"
                >
                  <CalendarDays className="h-3.5 w-3.5" />
                  What&rsquo;s on
                </a>
              )}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(thing.place)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--olive)] hover:underline"
              >
                <MapPin className="h-3.5 w-3.5" />
                Map
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="text-xs text-[var(--ink-muted)]">
          Same three picks all day. Shuffle for different ones.
        </span>
        <button
          type="button"
          onClick={shuffle}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-[var(--primary-foreground)] transition hover:opacity-90 active:scale-[0.98]"
        >
          <Shuffle className="h-3.5 w-3.5" />
          Shuffle
        </button>
      </div>
    </section>
  )
}
