"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "@/app/dashboard/glow-up/glow-up.module.css"
import { GlowUpChecklist } from "@/components/glow-up/glow-up-checklist"

export function GlowUpPageClient() {
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
      <div className={styles.page}>
        <div className={styles.gateNote}>
          This page is part of Madrone&rsquo;s private dashboard.
          <br />
          <Link href="/dashboard">Unlock the dashboard →</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Link href="/dashboard" className={styles.backLink}>
        ← Back to dashboard
      </Link>

      <div className={styles.siteHeader}>
        <div className={styles.eyebrow}>Private · Wardrobe &amp; Beauty</div>
        <h1>
          Glow <em>Up</em>
        </h1>
        <p className={styles.subtitle}>Quiet luxury wardrobe &amp; beauty checklist. Warm tones only. No black. Gold not silver.</p>
        <div className={styles.headerRule} />
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <GlowUpChecklist />
        </div>
      </div>
    </div>
  )
}
