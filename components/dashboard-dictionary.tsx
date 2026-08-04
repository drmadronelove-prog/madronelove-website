"use client"

import { useState, type FormEvent } from "react"
import { BookA, Loader2, Volume2 } from "lucide-react"

type Definition = {
  definition: string
  example?: string
}

type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
}

type DictionaryEntry = {
  word: string
  phonetic?: string
  meanings: Meaning[]
}

export function DashboardDictionary() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [entry, setEntry] = useState<DictionaryEntry | null>(null)

  async function lookup(e: FormEvent) {
    e.preventDefault()
    const word = query.trim()
    if (!word) return

    setLoading(true)
    setError(null)
    setEntry(null)

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
      if (!res.ok) {
        setError(`No definition found for "${word}".`)
        return
      }
      const data = await res.json()
      const first = Array.isArray(data) ? data[0] : null
      if (!first) {
        setError(`No definition found for "${word}".`)
        return
      }
      setEntry({
        word: first.word,
        phonetic: first.phonetic || first.phonetics?.find((p: { text?: string }) => p.text)?.text,
        meanings: first.meanings || [],
      })
    } catch {
      setError("Couldn't reach the dictionary. Check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-4 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-2">
        <BookA className="h-3.5 w-3.5 text-[var(--olive)]" />
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">Dictionary</p>
      </div>

      <form onSubmit={lookup} className="mb-3 flex min-w-0 items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Look up a word"
          className="min-w-0 flex-1 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        />
        <button
          type="submit"
          disabled={loading}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-[var(--primary-foreground)] transition hover:opacity-90 disabled:opacity-60"
          aria-label="Look up word"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <BookA className="h-4 w-4" />}
        </button>
      </form>

      {error && <p className="text-sm text-[var(--ink-muted)]">{error}</p>}

      {entry && (
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <p className="text-sm font-semibold text-[var(--ink)]">{entry.word}</p>
            {entry.phonetic && (
              <span className="flex items-center gap-1 text-xs text-[var(--ink-muted)]">
                <Volume2 className="h-3 w-3" />
                {entry.phonetic}
              </span>
            )}
          </div>

          {entry.meanings.slice(0, 3).map((meaning, i) => (
            <div key={i}>
              <p className="text-xs font-semibold italic text-[var(--ink-muted)]">{meaning.partOfSpeech}</p>
              <ol className="mt-1 flex list-decimal flex-col gap-1 pl-4">
                {meaning.definitions.slice(0, 2).map((def, j) => (
                  <li key={j} className="text-sm text-[var(--ink)]">
                    {def.definition}
                    {def.example && <span className="block text-xs text-[var(--ink-muted)]">“{def.example}”</span>}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {!entry && !error && !loading && (
        <p className="text-sm text-[var(--ink-muted)]">Type a word to see its definition.</p>
      )}
    </div>
  )
}
