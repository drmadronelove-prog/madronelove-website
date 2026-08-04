"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Plus, X, Download } from "lucide-react"

type Item = { id: string; text: string; done: boolean }

type ChecklistProps = {
  title: string
  storageKey: string
  pdfFileName: string
  placeholder: string
  emptyLabel: string
  variant?: "default" | "sticky"
}

function DashboardChecklist({
  title,
  storageKey,
  pdfFileName,
  placeholder,
  emptyLabel,
  variant = "default",
}: ChecklistProps) {
  const [items, setItems] = useState<Item[]>([])
  const [text, setText] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]")
      if (Array.isArray(saved)) setItems(saved)
    } catch {
      // ignore
    }
    setLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(storageKey, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items, loaded, storageKey])

  function addItem(e: FormEvent) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text: trimmed, done: false }])
    setText("")
  }

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  async function downloadPdf() {
    const { jsPDF } = await import("jspdf")
    const doc = new jsPDF({ unit: "pt", format: "letter" })
    const marginX = 56
    let y = 64

    doc.setFont("helvetica", "bold")
    doc.setFontSize(20)
    doc.text(title, marginX, y)
    y += 20

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.setTextColor(120)
    doc.text(new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }), marginX, y)
    y += 28

    doc.setFontSize(12)
    if (items.length === 0) {
      doc.setTextColor(120)
      doc.text(emptyLabel, marginX, y)
    } else {
      for (const item of items) {
        doc.setTextColor(item.done ? 150 : 30)
        doc.rect(marginX, y - 10, 12, 12)
        if (item.done) {
          doc.line(marginX, y - 10, marginX + 12, y + 2)
          doc.line(marginX, y + 2, marginX + 12, y - 10)
        }
        doc.text(item.text, marginX + 20, y)
        y += 22
      }
    }

    doc.save(pdfFileName)
  }

  const isSticky = variant === "sticky"

  const containerClass = isSticky
    ? "relative z-10 rounded-sm border border-[#E8D25A]/60 bg-gradient-to-b from-[#FFF9C4] to-[#FCE988] p-4 shadow-[2px_6px_14px_rgba(59,31,61,0.25)]"
    : "mt-8 overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-4 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm"

  const labelClass = isSticky
    ? "text-xs font-semibold uppercase tracking-widest text-[#7A6A1E]"
    : "text-xs font-semibold uppercase tracking-widest text-[var(--olive)]"

  const pdfButtonClass = isSticky
    ? "flex shrink-0 items-center gap-1 rounded-md border border-[#E8D25A]/70 px-2 py-1 text-[10px] uppercase tracking-wide text-[#7A6A1E] transition-colors hover:text-[var(--ink)]"
    : "flex shrink-0 items-center gap-1 rounded-md border border-[var(--border)] px-2 py-1 text-[10px] uppercase tracking-wide text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"

  const inputClass = isSticky
    ? "min-w-0 flex-1 rounded-md border border-[#E8D25A]/70 bg-white/70 px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
    : "min-w-0 flex-1 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"

  const hoverBgClass = isSticky ? "hover:bg-black/5" : "hover:bg-[var(--background)]"

  return (
    <div className={isSticky ? "relative mt-8" : ""}>
      {isSticky && (
        <div
          aria-hidden
          className="absolute inset-0 -rotate-1 rounded-sm border border-[#E8D25A]/60 bg-gradient-to-b from-[#FFF9C4] to-[#FCE988] shadow-[2px_6px_14px_rgba(59,31,61,0.25)]"
        />
      )}
      <div className={containerClass}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className={labelClass}>{title}</p>
        <button
          onClick={downloadPdf}
          className={pdfButtonClass}
          aria-label={`Download ${title} as PDF`}
        >
          <Download className="h-3 w-3" />
          PDF
        </button>
      </div>

      <form onSubmit={addItem} className="mb-3 flex min-w-0 items-center gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
        <button
          type="submit"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-[var(--primary-foreground)] transition hover:opacity-90"
          aria-label={`Add to ${title}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </form>

      {items.length === 0 ? (
        <p className="text-sm text-[var(--ink-muted)]">{emptyLabel}</p>
      ) : (
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.id} className={`group flex items-center gap-2 rounded-md px-1 py-1.5 ${hoverBgClass}`}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
                className="h-4 w-4 shrink-0 accent-[var(--olive)]"
              />
              <span
                className={`flex-1 text-sm ${item.done ? "text-[var(--ink-muted)] line-through" : "text-[var(--ink)]"}`}
              >
                {item.text}
              </span>
              <button
                onClick={() => remove(item.id)}
                className="shrink-0 text-[var(--ink-muted)] opacity-0 transition-opacity hover:text-[var(--clay)] group-hover:opacity-100"
                aria-label={`Remove ${item.text}`}
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  )
}

export function DashboardShoppingList() {
  return (
    <DashboardChecklist
      title="Shopping List"
      storageKey="madrone_dashboard_shopping_list"
      pdfFileName="shopping-list.pdf"
      placeholder="Add an item"
      emptyLabel="Nothing on the list."
    />
  )
}

export function DashboardNotes() {
  return (
    <DashboardChecklist
      title="Notes"
      storageKey="madrone_dashboard_notes"
      pdfFileName="notes.pdf"
      placeholder="Add a note"
      emptyLabel="No notes yet."
      variant="sticky"
    />
  )
}
