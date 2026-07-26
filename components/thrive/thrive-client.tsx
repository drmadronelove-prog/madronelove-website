"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import styles from "@/app/dashboard/thrive/thrive.module.css"
import { RelationshipTimeline } from "@/components/thrive/relationship-timeline"
import { GlowUpChecklist } from "@/components/thrive/glow-up-checklist"

interface Card {
  id: string
  emoji: string
  className: "relationship" | "glowUp" | "nesting" | "fun"
  title: string
  desc: string
  badge: "interactive" | "soon"
  eyebrow: string
  component: ReactNode | null
}

const CARDS: Card[] = [
  {
    id: "relationship",
    emoji: "💛",
    className: "relationship",
    title: "Relationship",
    desc: "Your healthy relationship timeline — experiences, milestones, and what to notice along the way.",
    badge: "interactive",
    eyebrow: "2026 Thrive Guide",
    component: <RelationshipTimeline />,
  },
  {
    id: "glow-up",
    emoji: "✨",
    className: "glowUp",
    title: "Glow Up",
    desc: "Quiet luxury wardrobe & beauty checklist. Warm tones only. No black. Gold not silver.",
    badge: "interactive",
    eyebrow: "Wardrobe & Beauty",
    component: <GlowUpChecklist />,
  },
  {
    id: "nesting",
    emoji: "🏡",
    className: "nesting",
    title: "Nesting",
    desc: "Making your home feel like you — warmth, intention, and the small things that make a space yours.",
    badge: "soon",
    eyebrow: "Home & Space",
    component: null,
  },
  {
    id: "fun",
    emoji: "🌴",
    className: "fun",
    title: "Fun",
    desc: "What you're doing for pure pleasure this year — trips, moments, things that are just for you.",
    badge: "soon",
    eyebrow: "Joy & Adventure",
    component: null,
  },
]

export function ThriveClient() {
  const [checked, setChecked] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch("/api/dashboard/session")
      .then((res) => res.json())
      .then((data) => setUnlocked(Boolean(data.unlocked)))
      .catch(() => setUnlocked(false))
      .finally(() => setChecked(true))
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (!checked) return null

  if (!unlocked) {
    return (
      <div className={styles.page}>
        <div className={styles.gateNote}>
          This page is part of Madrone&rsquo;s private dashboard.
          <br />
          <Link href="/dashboard">Unlock the dashboard →</Link>
        </div>
      </div>
    )
  }

  const card = CARDS.find((c) => c.id === open)

  return (
    <div className={styles.page}>
      <Link href="/dashboard" className={styles.backLink}>
        ← Back to dashboard
      </Link>

      <div className={styles.siteHeader}>
        <div className={styles.eyebrow}>Private · 2026</div>
        <h1>
          Madrone&rsquo;s
          <br />
          <em>Thrive Guide</em>
        </h1>
        <p className={styles.subtitle}>Four pillars for the year ahead — choose a card to explore.</p>
        <div className={styles.headerRule} />
      </div>

      <div className={styles.cardsGrid}>
        {CARDS.map((c) => (
          <div
            key={c.id}
            className={`${styles.heroCard} ${styles[c.className]}`}
            onClick={() => setOpen(c.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setOpen(c.id)}
          >
            <span className={`${styles.cardBadge} ${styles[c.badge]}`}>
              {c.badge === "interactive" ? "Interactive" : "Coming soon"}
            </span>
            <span className={styles.cardEmoji}>{c.emoji}</span>
            <div className={styles.cardTitle}>{c.title}</div>
            <div className={styles.cardDesc}>{c.desc}</div>
            <div className={styles.cardMeta}>
              <span>Open</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.siteFooter}>Madrone &amp; Thaniel · 2026</div>

      {open && card && (
        <div
          className={styles.modalOverlay}
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) setOpen(null)
          }}
        >
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalEyebrow}>{card.eyebrow}</div>
                <div className={styles.modalTitle}>
                  {card.emoji} {card.title}
                </div>
              </div>
              <button className={styles.modalClose} onClick={() => setOpen(null)} aria-label="Close">
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              {card.component ? (
                card.component
              ) : (
                <div className={styles.comingSoon}>
                  <div className={styles.bigEmoji}>{card.emoji}</div>
                  <h3>{card.title}</h3>
                  <p>
                    This section is being built.
                    <br />
                    Check back soon — it&rsquo;ll be worth the wait.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
