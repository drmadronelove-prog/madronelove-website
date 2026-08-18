"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import {
  BOOK_LISTS,
  sfplSearchUrl,
  oaklandSearchUrl,
  type Book,
  type BookList,
} from "@/lib/bookclub-books"

// Checkmarks are namespaced per list, since ranks restart at 1 in each one and
// a flat map would tie book #1 to thriller #1.
const STORAGE_KEY = "bookclub-checked-by-list"
const LEGACY_KEY = "bookclub-reading-list-checked"
const LEGACY_LIST_ID = "nyt-100-best"

type CheckedByList = Record<string, Record<number, boolean>>

/** Author, plus year and genre when the source list carried them. */
function meta(book: Book): string {
  return [book.author, book.year, book.genre].filter(Boolean).join(" · ")
}

export default function BookclubPage() {
  const [checked, setChecked] = useState<CheckedByList>({})
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        setChecked(JSON.parse(raw))
      } else {
        // Carry over marks saved before the page held more than one list.
        const legacy = window.localStorage.getItem(LEGACY_KEY)
        if (legacy) setChecked({ [LEGACY_LIST_ID]: JSON.parse(legacy) })
      }
    } catch {
      // ignore malformed storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
  }, [checked, hydrated])

  function toggle(listId: string, rank: number) {
    setChecked((prev) => ({
      ...prev,
      [listId]: { ...prev[listId], [rank]: !prev[listId]?.[rank] },
    }))
  }

  const lists = BOOK_LISTS.filter((l) => l.books.length > 0)

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <main className="flex-1 print:pt-0">
        <section className="py-16 md:py-20 print:py-4">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-4 print:hidden">
              Book Club
            </p>
            <h1 className="font-[var(--font-classic)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight">
              Book Club Reading List
            </h1>
            <button
              onClick={() => window.print()}
              className="mt-8 inline-block text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300 print:hidden"
            >
              Print / Save as PDF
            </button>
          </div>
        </section>

        {lists.map((list) => (
          <BookListSection
            key={list.id}
            list={list}
            checked={checked[list.id] ?? {}}
            onToggle={(rank) => toggle(list.id, rank)}
          />
        ))}
      </main>
    </div>
  )
}

function BookListSection({
  list,
  checked,
  onToggle,
}: {
  list: BookList
  checked: Record<number, boolean>
  onToggle: (rank: number) => void
}) {
  const [genre, setGenre] = useState("All")

  // Only lists whose source carried genres get filter pills.
  const genres = useMemo(() => {
    const found = Array.from(
      new Set(list.books.map((b) => b.genre).filter((g): g is string => Boolean(g))),
    ).sort()
    return found.length > 0 ? ["All", ...found] : []
  }, [list.books])

  const visible = useMemo(
    () => (genre === "All" ? list.books : list.books.filter((b) => b.genre === genre)),
    [genre, list.books],
  )

  const readCount = list.books.filter((b) => checked[b.rank]).length

  return (
    <>
      <section className="border-t border-[var(--border)] pt-12 pb-8 print:pt-6 print:pb-2 print:border-0">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-[var(--font-classic)] text-2xl md:text-3xl font-light text-[var(--ink)]">
            {list.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-light)] leading-relaxed max-w-2xl print:text-base">
            {list.blurb}
          </p>
          <p className="mt-3 text-xs text-[var(--ink-muted)]">
            Source:{" "}
            <Link
              href={list.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--clay)] transition-colors duration-300"
            >
              {list.sourceLabel}
            </Link>
          </p>

          <div className="mt-8 max-w-xs print:hidden">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-2">
              {readCount} of {list.books.length} read
            </p>
            <div className="h-1.5 w-full bg-[var(--stone)] overflow-hidden">
              <div
                className="h-full bg-[var(--clay)] transition-all duration-500"
                style={{ width: `${(readCount / list.books.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 print:hidden">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`text-[11px] font-medium tracking-[0.1em] uppercase px-3 py-1.5 border transition-colors duration-300 ${
                  genre === g
                    ? "bg-[var(--ink)] text-[var(--background)] border-[var(--ink)]"
                    : "border-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 print:pb-0">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="divide-y divide-[var(--border)] print:divide-none">
            {visible.map((book) => (
              <BookRow
                key={book.rank}
                book={book}
                isChecked={!!checked[book.rank]}
                onToggle={() => onToggle(book.rank)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function BookRow({
  book,
  isChecked,
  onToggle,
}: {
  book: Book
  isChecked: boolean
  onToggle: () => void
}) {
  return (
    <div className="py-3 print:py-1 flex items-start gap-4">
      <button
        onClick={onToggle}
        aria-pressed={isChecked}
        aria-label={`Mark "${book.title}" as ${isChecked ? "unread" : "read"}`}
        className="flex items-start gap-4 flex-1 text-left group print:hidden"
      >
        <span
          className={`mt-1 flex-shrink-0 w-4 h-4 border flex items-center justify-center transition-colors duration-300 ${
            isChecked
              ? "bg-[var(--ink)] border-[var(--ink)]"
              : "border-[var(--ink-muted)] group-hover:border-[var(--ink)]"
          }`}
        >
          {isChecked && (
            <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 fill-none stroke-[var(--background)] stroke-[2]">
              <path d="M3 8l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>

        <span className="flex-1">
          <span className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-xs text-[var(--ink-muted)] tabular-nums">{book.rank}.</span>
            <span
              className={`text-[var(--ink)] transition-colors duration-300 ${
                isChecked ? "line-through text-[var(--ink-muted)]" : ""
              }`}
            >
              {book.title}
            </span>
          </span>
          <span className="block text-sm text-[var(--ink-muted)] mt-0.5">
            {meta(book)}
          </span>
        </span>
      </button>

      {/* Print-only plain row */}
      <div className="hidden print:flex items-baseline gap-2 flex-1">
        <span className="text-xs">{isChecked ? "[x]" : "[ ]"}</span>
        <span className="text-xs text-[var(--ink-muted)] tabular-nums">{book.rank}.</span>
        <span className="text-sm">
          {book.title} — {meta(book)}
        </span>
      </div>

      <div className="flex flex-col items-end gap-1 pt-0.5 flex-shrink-0 print:hidden">
        <Link
          href={sfplSearchUrl(book)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--ink-muted)] hover:text-[var(--clay)] transition-colors duration-300"
        >
          SFPL
        </Link>
        <Link
          href={oaklandSearchUrl(book)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--ink-muted)] hover:text-[var(--clay)] transition-colors duration-300"
        >
          Oakland
        </Link>
      </div>
    </div>
  )
}
