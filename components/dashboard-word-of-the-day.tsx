"use client"

import { useEffect, useState } from "react"
import { Feather } from "lucide-react"
import { wordForDate, type VocabWord } from "@/lib/word-of-the-day"

export function DashboardWordOfTheDay() {
  // Resolved after mount so the statically prerendered HTML can't freeze a
  // stale word or mismatch the client's local date.
  const [entry, setEntry] = useState<VocabWord | null>(null)

  useEffect(() => {
    setEntry(wordForDate(new Date()))
  }, [])

  return (
    <div className="mb-6 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm">
      <div className="mb-2 flex items-center gap-2 px-1">
        <Feather className="h-3.5 w-3.5 shrink-0 text-[var(--olive)]" />
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">
          Word of the Day
        </p>
      </div>

      {!entry ? (
        <div className="px-1 py-2">
          <div className="h-5 w-2/3 animate-pulse rounded bg-[var(--sage-muted)]" />
        </div>
      ) : (
        <div className="px-1">
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-serif text-xl leading-tight text-[var(--ink)]">{entry.word}</span>
            <span className="text-[11px] italic text-[var(--ink-muted)]">{entry.partOfSpeech}</span>
          </p>

          <dl className="mt-2 flex flex-col gap-1.5 text-[13px] leading-snug">
            <div>
              <dt className="sr-only">Definition</dt>
              <dd className="text-[var(--ink)]">{entry.definition}</dd>
            </div>

            <div>
              <dt className="sr-only">Example</dt>
              <dd className="text-[var(--ink-muted)]">&ldquo;{entry.example}&rdquo;</dd>
            </div>

            <div className="flex gap-1.5">
              <dt className="shrink-0 font-semibold text-[var(--olive)]">Synonyms</dt>
              <dd className="text-[var(--ink-muted)]">{entry.synonyms.join(", ")}</dd>
            </div>

            <div className="flex gap-1.5 border-t border-[var(--border)] pt-1.5">
              <dt className="shrink-0 font-semibold text-[var(--olive)]">Remember</dt>
              <dd className="text-[var(--ink-muted)]">{entry.remember}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  )
}
