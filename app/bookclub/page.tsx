"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { books, sfplSearchUrl, oaklandSearchUrl } from "@/lib/bookclub-books"

const STORAGE_KEY = "bookclub-reading-list-checked"

export default function BookclubPage() {
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const [hydrated, setHydrated] = useState(false)
  const [genre, setGenre] = useState<string>("All")

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setChecked(JSON.parse(raw))
    } catch {
      // ignore malformed storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
  }, [checked, hydrated])

  const genres = useMemo(() => {
    const unique = Array.from(new Set(books.map((b) => b.genre))).sort()
    return ["All", ...unique]
  }, [])

  const visibleBooks = useMemo(() => {
    if (genre === "All") return books
    return books.filter((b) => b.genre === genre)
  }, [genre])

  const readCount = useMemo(
    () => books.filter((b) => checked[b.rank]).length,
    [checked],
  )

  function toggle(rank: number) {
    setChecked((prev) => ({ ...prev, [rank]: !prev[rank] }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <div className="print:hidden">
        <Header />
      </div>

      <main className="flex-1 pt-24 print:pt-0">
        {/* Header */}
        <section className="py-16 md:py-20 print:py-4">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-4 print:hidden">
              Book Club
            </p>
            <h1 className="font-[var(--font-classic)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight">
              Book Club Reading List
            </h1>
            <p className="mt-6 text-lg text-[var(--ink-light)] leading-relaxed max-w-2xl">
              A checklist of the 100 Best Books of the 21st Century, as ranked in the New York Times&rsquo; 2024 poll of 503 novelists, critics, and other literary figures. Tap a title to mark it read.
            </p>
            <p className="mt-4 text-xs text-[var(--ink-muted)]">
              Source:{" "}
              <Link
                href="https://www.nytimes.com/interactive/2024/books/best-books-21st-century.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--clay)] transition-colors duration-300"
              >
                The 100 Best Books of the 21st Century, The New York Times (2024)
              </Link>
            </p>
          </div>
        </section>

        {/* Controls */}
        <section className="pb-8 border-t border-[var(--border)] pt-8 print:hidden">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1 max-w-xs">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-2">
                  {readCount} of {books.length} read
                </p>
                <div className="h-1.5 w-full bg-[var(--stone)] overflow-hidden">
                  <div
                    className="h-full bg-[var(--clay)] transition-all duration-500"
                    style={{ width: `${(readCount / books.length) * 100}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="inline-block text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300 self-start md:self-auto"
              >
                Print / Save as PDF
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
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

        {/* List */}
        <section className="pb-24 border-t border-[var(--border)] print:border-0 print:pb-0">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="divide-y divide-[var(--border)] print:divide-none">
              {visibleBooks.map((book) => {
                const isChecked = !!checked[book.rank]
                return (
                  <div
                    key={book.rank}
                    className="py-3 print:py-1 flex items-start gap-4"
                  >
                    <button
                      onClick={() => toggle(book.rank)}
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
                          <span className="text-xs text-[var(--ink-muted)] tabular-nums">
                            {book.rank}.
                          </span>
                          <span
                            className={`text-[var(--ink)] transition-colors duration-300 ${
                              isChecked ? "line-through text-[var(--ink-muted)]" : ""
                            }`}
                          >
                            {book.title}
                          </span>
                        </span>
                        <span className="block text-sm text-[var(--ink-muted)] mt-0.5">
                          {book.author} &middot; {book.year} &middot; {book.genre}
                        </span>
                      </span>
                    </button>

                    {/* Print-only plain row */}
                    <div className="hidden print:flex items-baseline gap-2 flex-1">
                      <span className="text-xs">{isChecked ? "[x]" : "[ ]"}</span>
                      <span className="text-xs text-[var(--ink-muted)] tabular-nums">{book.rank}.</span>
                      <span className="text-sm">
                        {book.title} — {book.author} ({book.year}, {book.genre})
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
              })}
            </div>
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  )
}
