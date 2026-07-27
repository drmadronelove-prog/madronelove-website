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
}

function DashboardChecklist({ title, storageKey, pdfFileName, placeholder, emptyLabel }: ChecklistProps) {
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

  return (
    <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">{title}</p>
        <button
          onClick={downloadPdf}
          className="flex shrink-0 items-center gap-1 rounded-md border border-[var(--border)] px-2 py-1 text-[10px] uppercase tracking-wide text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
          aria-label={`Download ${title} as PDF`}
        >
          <Download className="h-3 w-3" />
          PDF
        </button>
      </div>

      <form onSubmit={addItem} className="mb-3 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        />
        <button
          type="submit"
          className="flex shrink-0 items-center justify-center rounded-md bg-[var(--ink)] px-3 py-2 text-[var(--primary-foreground)] transition hover:opacity-90"
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
            <li key={item.id} className="group flex items-center gap-2 rounded-md px-1 py-1.5 hover:bg-[var(--background)]">
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
    />
  )
}
