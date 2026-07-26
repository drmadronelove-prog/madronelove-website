"use client"

import { useEffect, useState, type FormEvent } from "react"
import {
  Bike,
  Flower2,
  Users,
  Mail,
  Briefcase,
  Stethoscope,
  ClipboardCheck,
  Sparkles,
  Landmark,
  Lock,
  Gem,
  Bot,
  Radio,
} from "lucide-react"
import { DashboardTasks } from "@/components/dashboard-tasks"

type Tile = {
  label: string
  href: string
  icon: typeof Bike
  configured: boolean
  external?: boolean
}

const TILES: Tile[] = [
  { label: "Peloton", href: "https://members.onepeloton.com/login", icon: Bike, configured: true, external: true },
  { label: "Meditation", href: "https://www.audiodharma.org/series/22033", icon: Flower2, configured: true, external: true },
  { label: "Flow Club", href: "https://www.flow.club/", icon: Users, configured: true, external: true },
  { label: "Claude", href: "https://claude.ai/", icon: Bot, configured: true, external: true },
  { label: "Work Email", href: "https://mail.google.com/mail/?authuser=madrone@madronelove.com", icon: Briefcase, configured: true, external: true },
  { label: "Personal Email", href: "https://mail.google.com/mail/?authuser=drmadrone.love@gmail.com", icon: Mail, configured: true, external: true },
  { label: "SimplePractice", href: "https://account.simplepractice.com/", icon: Stethoscope, configured: true, external: true },
  { label: "Olive Clinical Assessment Dashboard", href: "https://www.oliveclinical.com/assessmentplatform", icon: ClipboardCheck, configured: true, external: true },
  { label: "Bank of America", href: "https://www.bankofamerica.com/", icon: Landmark, configured: true, external: true },
  { label: "Glow Up", href: "/dashboard/glow-up", icon: Gem, configured: true, external: false },
  { label: "Radio", href: "/dashboard/radio", icon: Radio, configured: true, external: false },
  { label: "neil.fun", href: "https://neil.fun/", icon: Sparkles, configured: true, external: true },
]

function DashboardTile({ tile }: { tile: Tile }) {
  const Icon = tile.icon
  return (
    <a
      href={tile.href}
      target={tile.configured && tile.external ? "_blank" : undefined}
      rel={tile.configured && tile.external ? "noopener noreferrer" : undefined}
      title={tile.configured ? tile.label : `${tile.label} — link not set yet`}
      onClick={tile.configured ? undefined : (e) => e.preventDefault()}
      className={`group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md ${
        tile.configured ? "" : "opacity-60 cursor-not-allowed"
      }`}
    >
      <Icon className="h-5 w-5 shrink-0 text-[var(--olive)] transition-colors group-hover:text-[var(--clay)]" />
      <span className="text-sm font-medium text-[var(--ink)]">{tile.label}</span>
      {!tile.configured && (
        <span className="ml-auto text-[10px] uppercase tracking-wide text-[var(--ink-muted)]">link needed</span>
      )}
    </a>
  )
}

function DashboardContent({ onLock }: { onLock: () => void }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-[var(--background)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">Quicklinks</p>
            <nav className="flex flex-col gap-2.5">
              {TILES.map((tile) => (
                <DashboardTile key={tile.label} tile={tile} />
              ))}
            </nav>
          </aside>

          <div className="min-w-0">
            <header className="mb-8 flex items-start justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-8">
              <div>
                <h1 className="font-serif text-3xl text-[var(--ink)] md:text-4xl">Madrone&rsquo;s Dashboard</h1>
                <p className="mt-1 text-[var(--ink-muted)]">{today}</p>
              </div>
              <button
                onClick={onLock}
                className="flex shrink-0 items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
              >
                <Lock className="h-3.5 w-3.5" />
                Lock
              </button>
            </header>

            <section className="mt-10">
              <h2 className="mb-4 text-center font-serif text-xl text-[var(--ink)]">Bay Bridge Live Cam</h2>
              <div className="mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl border border-[var(--border)] shadow-sm">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/CXYr04BWvmc?autoplay=1&mute=1&playsinline=1"
                  title="San Francisco–Oakland Bay Bridge live cam"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </section>

            <section className="mt-10">
              <h2 className="mb-4 text-center font-serif text-xl text-[var(--ink)]">Calendar</h2>
              <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[var(--border)] shadow-sm">
                <iframe
                  className="h-[600px] w-full"
                  src="https://calendar.google.com/calendar/embed?src=madrone%40madronelove.com&ctz=America%2FLos_Angeles"
                  title="Calendar"
                  loading="lazy"
                />
              </div>
              <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-[var(--ink-muted)]">
                Showing the calendar for madrone@madronelove.com. If it looks empty, open that calendar in Google
                Calendar &rarr; Settings and sharing &rarr; Access permissions &rarr; check &ldquo;Make available to
                public,&rdquo; or swap in a different calendar&rsquo;s ID in the code.
              </p>
            </section>

            <section className="mb-6 mt-10">
              <h2 className="mb-4 text-center font-serif text-xl text-[var(--ink)]">Tasks</h2>
              <DashboardTasks />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardClient() {
  const [checked, setChecked] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("/api/dashboard/session")
      .then((res) => res.json())
      .then((data) => setUnlocked(Boolean(data.unlocked)))
      .catch(() => setUnlocked(false))
      .finally(() => setChecked(true))
  }, [])

  async function lock() {
    await fetch("/api/dashboard/unlock", { method: "DELETE" })
    setUnlocked(false)
    setPassword("")
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/dashboard/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      setUnlocked(true)
      setError("")
    } else {
      setError("That password isn't right. Please try again.")
      setPassword("")
    }
  }

  if (!checked) return null

  if (!unlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-sm text-center">
          <p className="font-serif text-2xl text-[var(--ink)]">Madrone&rsquo;s Dashboard</p>
          <p className="mb-6 mt-2 text-[var(--ink-muted)]">Enter the password to continue.</p>
          <input
            type="password"
            autoFocus
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-[var(--ink)] py-3 font-medium text-[var(--primary-foreground)] transition hover:opacity-90"
          >
            Enter
          </button>
          {error && <p className="mt-4 text-sm text-[var(--clay)]">{error}</p>}
        </form>
      </div>
    )
  }

  return <DashboardContent onLock={lock} />
}
