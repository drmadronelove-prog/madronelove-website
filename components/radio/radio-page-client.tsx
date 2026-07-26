"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Radio as RadioIcon, Music } from "lucide-react"

type Station = {
  call: string
  freq: string
  city: string
  desc: string
  href: string
  icon?: typeof RadioIcon
}

const STATIONS: Station[] = [
  {
    call: "KALX",
    freq: "90.7 FM",
    city: "Berkeley",
    desc: "UC Berkeley's freeform college radio station.",
    href: "https://www.kalx.berkeley.edu/live-streaming",
  },
  {
    call: "KALW",
    freq: "91.7 FM",
    city: "San Francisco",
    desc: "Public radio — news, talk, and local storytelling.",
    href: "https://www.kalw.org/listen-to-kalw",
  },
  {
    call: "KFJC",
    freq: "89.7 FM",
    city: "Los Altos Hills",
    desc: "Foothill College's freeform station — deep, weird, and eclectic.",
    href: "https://kfjc.org/listen/",
  },
  {
    call: "KPOO",
    freq: "89.5 FM",
    city: "San Francisco",
    desc: "Independent community radio since 1971.",
    href: "https://kpoo.com/stream",
  },
  {
    call: "Spotify",
    freq: "Streaming",
    city: "Anywhere",
    desc: "Playlists and podcasts, on demand.",
    href: "https://open.spotify.com/",
    icon: Music,
  },
]

export function RadioPageClient() {
  const [checked, setChecked] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    fetch("/api/dashboard/session")
      .then((res) => res.json())
      .then((data) => setUnlocked(Boolean(data.unlocked)))
      .catch(() => setUnlocked(false))
      .finally(() => setChecked(true))
  }, [])

  if (!checked) return null

  if (!unlocked) {
    return (
      <div className="dashboard-theme flex min-h-screen items-center justify-center bg-[var(--background)] px-6 text-center">
        <p className="text-[var(--ink-muted)]">
          This page is part of Madrone&rsquo;s private dashboard.
          <br />
          <Link href="/dashboard" className="font-medium text-[var(--ink)] underline">
            Unlock the dashboard &rarr;
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="dashboard-theme min-h-screen bg-[var(--background)] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/dashboard" className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]">
          &larr; Back to dashboard
        </Link>

        <header className="mb-8 mt-4 text-center">
          <h1 className="font-serif text-3xl text-[var(--ink)] md:text-4xl">Radio</h1>
          <p className="mt-1 text-[var(--ink-muted)]">Bay Area stations, one tap away.</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {STATIONS.map((station) => {
            const Icon = station.icon ?? RadioIcon
            return (
              <a
                key={station.call}
                href={station.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-[var(--olive)] transition-colors group-hover:text-[var(--clay)]">
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">{station.freq}</span>
                </div>
                <div className="font-serif text-2xl text-[var(--ink)]">{station.call}</div>
                <p className="text-xs uppercase tracking-wide text-[var(--ink-muted)]">{station.city}</p>
                <p className="text-sm text-[var(--ink-muted)]">{station.desc}</p>
                <span className="mt-2 text-sm font-medium text-[var(--olive)] group-hover:text-[var(--clay)]">
                  Listen live &rarr;
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
