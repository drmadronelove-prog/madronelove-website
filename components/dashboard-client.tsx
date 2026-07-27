"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
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
  Gem,
  Bot,
  Radio,
  BookOpen,
  Search,
  Microscope,
  ChevronDown,
  FolderKanban,
  Star,
  Mountain,
  Wallet,
  Book,
  PawPrint,
} from "lucide-react"
import { DashboardTasks } from "@/components/dashboard-tasks"
import { DashboardShoppingList, DashboardNotes } from "@/components/dashboard-shopping-list"

type SubLink = {
  label: string
  href: string
  external?: boolean
}

type Tile = {
  label: string
  href?: string
  icon: typeof Bike
  configured: boolean
  external?: boolean
  items?: SubLink[]
  trigger?: "click" | "hover"
}

type TileSection = {
  title: string
  tiles: Tile[]
}

const TILE_SECTIONS: TileSection[] = [
  {
    title: "Morning",
    tiles: [
      { label: "Peloton", href: "https://members.onepeloton.com/login", icon: Bike, configured: true, external: true },
      { label: "Meditation", href: "https://www.audiodharma.org/series/22033", icon: Flower2, configured: true, external: true },
      {
        label: "Radio",
        icon: Radio,
        configured: true,
        trigger: "click",
        items: [
          { label: "KALX", href: "https://www.kalx.berkeley.edu/live-streaming", external: true },
          { label: "KALW", href: "https://www.kalw.org/listen-to-kalw", external: true },
          { label: "KFJC", href: "https://kfjc.org/listen/", external: true },
          { label: "KPOO", href: "https://kpoo.com/stream", external: true },
          { label: "Spotify", href: "https://open.spotify.com/", external: true },
        ],
      },
    ],
  },
  {
    title: "Work",
    tiles: [
      { label: "Flow Club", href: "https://www.flow.club/", icon: Users, configured: true, external: true },
      {
        label: "Email",
        icon: Mail,
        configured: true,
        trigger: "hover",
        items: [
          { label: "Work Email", href: "https://mail.google.com/mail/?authuser=madrone@madronelove.com", external: true },
          { label: "Personal Email", href: "https://mail.google.com/mail/?authuser=drmadrone.love@gmail.com", external: true },
        ],
      },
      { label: "SimplePractice", href: "https://account.simplepractice.com/", icon: Stethoscope, configured: true, external: true },
      {
        label: "Work Tools",
        icon: Briefcase,
        configured: true,
        trigger: "click",
        items: [
          { label: "Kagi", href: "https://kagi.com/", external: true },
          { label: "Claude", href: "https://claude.ai/", external: true },
          { label: "Open Evidence", href: "https://www.openevidence.com/", external: true },
        ],
      },
      {
        label: "Current Projects",
        icon: FolderKanban,
        configured: true,
        trigger: "click",
        items: [
          { label: "Sati Dashboard", href: "https://drmadronelove-prog.github.io/Satistudies/#", external: true },
          { label: "Olive Dashboard", href: "https://www.oliveclinical.com/assessmentplatform", external: true },
        ],
      },
    ],
  },
  {
    title: "Personal Life",
    tiles: [
      { label: "Glow Up", href: "/dashboard/glow-up", icon: Gem, configured: true, external: false },
      { label: "neil.fun", href: "https://neil.fun/", icon: Sparkles, configured: true, external: true },
      { label: "Libby", href: "https://libbyapp.com/", icon: BookOpen, configured: true, external: true },
      { label: "Book Club", href: "https://madronelove.com/bookclub", icon: Book, configured: true, external: false },
      {
        label: "Dog Friend",
        icon: PawPrint,
        configured: true,
        trigger: "click",
        items: [{ label: "Petfinder", href: "https://www.petfinder.com/", external: true }],
      },
      {
        label: "Judaism",
        icon: Star,
        configured: true,
        trigger: "click",
        items: [
          { label: "Kehilla", href: "https://kehillasynagogue.org/", external: true },
          { label: "Chochmat HaLev", href: "https://chochmat.org/", external: true },
          { label: "Wilderness Torah", href: "https://wildernesstorah.org/", external: true },
          { label: "SVARA", href: "https://svara.org/", external: true },
        ],
      },
      {
        label: "Buddhism",
        icon: Mountain,
        configured: true,
        trigger: "click",
        items: [
          { label: "Insight Meditation Center", href: "https://www.insightmeditationcenter.org/", external: true },
          { label: "Insight Retreat Center", href: "https://www.insightretreatcenter.org/", external: true },
        ],
      },
    ],
  },
  {
    title: "Finance",
    tiles: [
      { label: "Bank of America", href: "https://www.bankofamerica.com/", icon: Landmark, configured: true, external: true },
      { label: "Coinbase", href: "https://www.coinbase.com/", icon: Wallet, configured: true, external: true },
      { label: "Robinhood", href: "https://robinhood.com/", icon: Wallet, configured: true, external: true },
    ],
  },
]

const KEY_CLASS =
  "rounded-full border border-white/10 bg-gradient-to-b from-[var(--clay)] to-[var(--olive)] px-4 py-2 text-xs font-semibold text-white shadow-[0_3px_0_rgba(0,0,0,0.4),0_6px_12px_-2px_rgba(0,0,0,0.4)] transition-all duration-100 hover:brightness-110 active:translate-y-[3px] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)]"

const KEY_CLASS_PRESSED =
  "translate-y-[3px] rounded-full border border-white/10 bg-gradient-to-b from-[var(--olive)] to-[var(--clay)] px-4 py-2 text-xs font-semibold text-white shadow-[inset_0_2px_5px_rgba(0,0,0,0.55)]"

const PANEL_SHADOW =
  "shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)]"

const PANEL_CLASS = `rounded-2xl border border-white/50 bg-white/80 p-3 ${PANEL_SHADOW} backdrop-blur-sm`

const TILE_CLASS =
  "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left shadow-[0_1px_0_rgba(255,255,255,0.6)] transition-all duration-150 hover:bg-white hover:shadow-[0_4px_12px_-4px_rgba(194,38,110,0.35)] active:scale-[0.98] active:bg-[var(--olive)]/10"

function DashboardTile({ tile }: { tile: Tile }) {
  const Icon = tile.icon

  if (tile.items) {
    return <DashboardDropdownTile tile={tile} />
  }

  return (
    <a
      href={tile.href}
      target={tile.configured && tile.external ? "_blank" : undefined}
      rel={tile.configured && tile.external ? "noopener noreferrer" : undefined}
      title={tile.configured ? tile.label : `${tile.label} — link not set yet`}
      onClick={tile.configured ? undefined : (e) => e.preventDefault()}
      className={`${TILE_CLASS} ${tile.configured ? "" : "opacity-60 cursor-not-allowed"}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--olive)] to-[var(--clay)] shadow-sm transition-transform duration-150 group-hover:scale-110">
        <Icon className="h-4 w-4 text-white" />
      </span>
      <span className="text-sm font-medium text-[var(--ink)]">{tile.label}</span>
      {!tile.configured && (
        <span className="ml-auto text-[10px] uppercase tracking-wide text-[var(--ink-muted)]">link needed</span>
      )}
    </a>
  )
}

function DashboardDropdownTile({ tile }: { tile: Tile }) {
  const Icon = tile.icon
  const isHover = tile.trigger === "hover"
  const [open, setOpen] = useState(false)
  const showOpen = isHover ? undefined : open

  return (
    <div
      className={isHover ? "group/drop" : undefined}
      onMouseEnter={isHover ? () => setOpen(true) : undefined}
      onMouseLeave={isHover ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        onClick={isHover ? undefined : () => setOpen((v) => !v)}
        className={TILE_CLASS}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--olive)] to-[var(--clay)] shadow-sm">
          <Icon className="h-4 w-4 text-white" />
        </span>
        <span className="text-sm font-medium text-[var(--ink)]">{tile.label}</span>
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-[var(--ink-muted)] transition-transform duration-150 ${
            isHover ? "group-hover/drop:rotate-180" : showOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`${isHover ? "hidden group-hover/drop:flex" : showOpen ? "flex" : "hidden"} mt-2 flex-col gap-2 pl-4`}
      >
        {tile.items!.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="rounded-lg bg-[var(--olive)]/5 px-3 py-2 text-sm text-[var(--ink)] transition-colors hover:bg-[var(--olive)]/15 hover:text-[var(--clay)]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function TimeTimerWidget() {
  const [minutes, setMinutes] = useState(20)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (!running) return
    if (remaining <= 0) {
      setRunning(false)
      setDone(true)
      beep()
      return
    }
    const id = setTimeout(() => setRemaining((r) => r - 1), 1000)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, remaining])

  function beep() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      const ctx = audioCtxRef.current ?? new AudioCtx()
      audioCtxRef.current = ctx
      const playTone = (startTime: number) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = "sine"
        osc.frequency.value = 880
        gain.gain.setValueAtTime(0.0001, startTime)
        gain.gain.exponentialRampToValueAtTime(0.3, startTime + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.35)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(startTime)
        osc.stop(startTime + 0.4)
      }
      const now = ctx.currentTime
      playTone(now)
      playTone(now + 0.5)
      playTone(now + 1)
    } catch {
      // audio unavailable — fail silently
    }
  }

  function start() {
    setDone(false)
    const secs = minutes * 60
    setTotalSeconds(secs)
    setRemaining(secs)
    setRunning(true)
  }

  function reset() {
    setRunning(false)
    setDone(false)
    setRemaining(0)
    setTotalSeconds(0)
  }

  const isActive = running || (remaining > 0 && !done)
  const percentRemaining = totalSeconds > 0 ? (remaining / totalSeconds) * 100 : 100
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0")
  const ss = String(remaining % 60).padStart(2, "0")

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">Timer</p>

      <div
        className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-[#D9481F]/30 shadow-inner"
        style={{
          background:
            isActive || done
              ? `conic-gradient(#D9481F ${percentRemaining}%, #F0E6DC ${percentRemaining}% 100%)`
              : "#F0E6DC",
        }}
      >
        <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[var(--card)]">
          <span className="font-mono text-base font-semibold text-[var(--ink)]">
            {isActive || done ? `${mm}:${ss}` : `${String(minutes).padStart(2, "0")}:00`}
          </span>
        </div>
      </div>

      {done ? (
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[var(--clay)]">Time&rsquo;s up!</span>
          <button
            onClick={reset}
            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            Reset
          </button>
        </div>
      ) : isActive ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            {running ? "Pause" : "Resume"}
          </button>
          <button
            onClick={reset}
            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={60}
            value={minutes}
            onChange={(e) => setMinutes(Math.min(60, Math.max(1, Number(e.target.value) || 1)))}
            className="w-12 rounded border border-[var(--border)] bg-[var(--background)] px-1 py-1 text-center text-xs text-[var(--ink)] outline-none"
          />
          <span className="text-xs text-[var(--ink-muted)]">min</span>
          <button
            onClick={start}
            className="rounded-full bg-[var(--ink)] px-2.5 py-1 text-xs font-medium text-[var(--primary-foreground)] hover:opacity-90"
          >
            Start
          </button>
        </div>
      )}
    </div>
  )
}

function BouncingTitle({ text }: { text: string }) {
  const boxRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const posRef = useRef({ x: 12, y: 8 })
  const velRef = useRef({ x: 1.105, y: 0.85 })

  useEffect(() => {
    let frameId: number

    function tick() {
      const box = boxRef.current
      const el = textRef.current
      if (box && el) {
        const maxX = Math.max(0, box.clientWidth - el.offsetWidth)
        const maxY = Math.max(0, box.clientHeight - el.offsetHeight)
        let { x, y } = posRef.current
        let { x: vx, y: vy } = velRef.current

        x += vx
        y += vy

        if (x <= 0) {
          x = 0
          vx = Math.abs(vx)
        } else if (x >= maxX) {
          x = maxX
          vx = -Math.abs(vx)
        }

        if (y <= 0) {
          y = 0
          vy = Math.abs(vy)
        } else if (y >= maxY) {
          y = maxY
          vy = -Math.abs(vy)
        }

        posRef.current = { x, y }
        velRef.current = { x: vx, y: vy }
        el.style.transform = `translate(${x}px, ${y}px)`
      }
      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={boxRef} className="relative h-28 w-full overflow-hidden rounded-xl sm:h-32">
      <h1
        ref={textRef}
        className="absolute left-0 top-0 whitespace-nowrap font-serif text-3xl text-white [text-shadow:0_2px_12px_rgba(59,31,61,0.35)] md:text-4xl"
      >
        {text}
      </h1>
    </div>
  )
}

const STREAMS = [
  { id: "CXYr04BWvmc", label: "Bay Bridge" },
  { id: "vytmBNhc9ig", label: "Outer Space" },
  { id: "9tS32adLk28", label: "New York" },
  { id: "iMqrD-HBDGo", label: "Norway" },
  { id: "CijNX_Wsdbo", label: "San Francisco" },
  { id: "ydYDqZQpim8", label: "Namibia" },
]

type HeaderStation = { id: string; label: string; kind: "audio" | "iframe"; src: string }

const HEADER_RADIO_STATIONS: HeaderStation[] = [
  { id: "kalx", label: "KALX", kind: "audio", src: "https://stream.kalx.berkeley.edu:8443/kalx-128.mp3.m3u" },
  { id: "kpoo", label: "KPOO", kind: "audio", src: "https://kpoo.streamguys1.com/xstream" },
  { id: "kfjc", label: "KFJC", kind: "iframe", src: "https://kfjc.org/player/" },
]

function SidebarSectionPanel({ section }: { section: TileSection }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${PANEL_CLASS} mb-6`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 px-1"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">{section.title}</p>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-[var(--olive)] transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <nav className="mt-2 flex flex-col gap-1">
          {section.tiles.map((tile) => (
            <DashboardTile key={tile.label} tile={tile} />
          ))}
        </nav>
      )}
    </div>
  )
}

function DashboardContent() {
  const [streamId, setStreamId] = useState(STREAMS[0].id)
  const [headerStationId, setHeaderStationId] = useState(HEADER_RADIO_STATIONS[0].id)
  const headerStation = HEADER_RADIO_STATIONS.find((s) => s.id === headerStationId)!

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <div
      className="dashboard-theme min-h-screen bg-[var(--background)] bg-cover bg-center bg-fixed px-6 py-12"
      style={{ backgroundImage: "url('/pixelpro-vibes-wPwkjUNkR5I-unsplash.jpg')" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto lg:pr-1">
            {TILE_SECTIONS.map((section) => (
              <SidebarSectionPanel key={section.title} section={section} />
            ))}

            <DashboardShoppingList />
            <DashboardNotes />
          </aside>

          <div className="min-w-0">
            <div className="mb-8 flex flex-col items-stretch justify-center gap-6 lg:flex-row">
              <header className="flex w-full flex-col justify-center rounded-2xl bg-gradient-to-br from-[var(--olive)] via-[var(--clay)] to-[var(--gold)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-3px_8px_rgba(59,31,61,0.2),0_25px_50px_-15px_rgba(194,38,110,0.55)] lg:flex-[4_4_0%]">
                <p className="mb-2 text-sm text-white/80">{today}</p>
                <BouncingTitle text="Madrone’s Dashboard" />
              </header>

              <div className="flex w-full max-w-[90vw] flex-col gap-4 lg:w-auto lg:min-w-[220px] lg:flex-[1_1_0%]">
                <div
                  className={`overflow-hidden rounded-2xl border border-white/50 bg-white/80 ${PANEL_SHADOW} backdrop-blur-sm`}
                >
                  <div className="flex">
                    {HEADER_RADIO_STATIONS.map((station) => (
                      <button
                        key={station.id}
                        onClick={() => setHeaderStationId(station.id)}
                        className={`flex-1 whitespace-nowrap px-2 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                          headerStationId === station.id
                            ? "bg-[var(--olive)] text-white"
                            : "bg-[var(--background)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
                        }`}
                      >
                        {station.label}
                      </button>
                    ))}
                  </div>
                  {headerStation.kind === "audio" ? (
                    <div className="flex flex-col items-center gap-3 p-4">
                      <p className="font-serif text-lg text-[var(--ink)]">{headerStation.label}</p>
                      <audio key={headerStation.id} controls autoPlay className="w-full" src={headerStation.src}>
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  ) : (
                    <div className="aspect-video">
                      <iframe
                        key={headerStation.id}
                        className="h-full w-full"
                        src={headerStation.src}
                        title={`${headerStation.label} live stream`}
                        allow="autoplay"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`flex-1 overflow-hidden rounded-2xl border border-white/50 bg-white/80 ${PANEL_SHADOW} backdrop-blur-sm`}
                >
                  <TimeTimerWidget />
                </div>
              </div>
            </div>

            <section className="mt-10">
              <div className={PANEL_CLASS}>
                <h2 className="mb-4 text-center font-serif text-xl text-[var(--ink)]">Live Streams</h2>
                <div className="mb-4 flex flex-wrap justify-center gap-3">
                  {STREAMS.map((stream) => (
                    <button
                      key={stream.id}
                      onClick={() => setStreamId(stream.id)}
                      className={streamId === stream.id ? KEY_CLASS_PRESSED : KEY_CLASS}
                    >
                      {stream.label}
                    </button>
                  ))}
                </div>
                <div className="aspect-video overflow-hidden rounded-xl border border-white/10 shadow-sm">
                  <iframe
                    key={streamId}
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${streamId}?autoplay=1&mute=1&playsinline=1`}
                    title="Live stream"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
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
      <div
        className="dashboard-theme flex min-h-screen items-center justify-center bg-[var(--background)] bg-cover bg-center bg-fixed px-6"
        style={{ backgroundImage: "url('/pixelpro-vibes-wPwkjUNkR5I-unsplash.jpg')" }}
      >
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-sm overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-8 text-center backdrop-blur-sm ${PANEL_SHADOW}`}
        >
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

  return <DashboardContent />
}
