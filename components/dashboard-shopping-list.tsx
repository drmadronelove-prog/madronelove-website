"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Plus, X } from "lucide-react"

type Item = { id: string; text: string; done: boolean }

const STORAGE_KEY = "madrone_dashboard_shopping_list"

export function DashboardShoppingList() {
  const [items, setItems] = useState<Item[]>([])
  const [text, setText] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
      if (Array.isArray(saved)) setItems(saved)
    } catch {
      // ignore
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items, loaded])

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

  return (
    <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--olive)]">Shopping List</p>

      <form onSubmit={addItem} className="mb-3 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add an item"
          className="flex-1 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        />
        <button
          type="submit"
          className="flex shrink-0 items-center justify-center rounded-md bg-[var(--ink)] px-3 py-2 text-[var(--primary-foreground)] transition hover:opacity-90"
          aria-label="Add item"
        >
          <Plus className="h-4 w-4" />
        </button>
      </form>

      {items.length === 0 ? (
        <p className="text-sm text-[var(--ink-muted)]">Nothing on the list.</p>
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
