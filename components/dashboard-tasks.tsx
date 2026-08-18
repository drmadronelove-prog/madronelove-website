"use client"

import { useEffect, useState, type FormEvent } from "react"
import { CircleCheck, Circle, Plus } from "lucide-react"

type Task = {
  id: string
  title: string
  notes?: string
  due?: string
  status: "needsAction" | "completed"
}

type TaskList = {
  id: string
  title: string
}

const LIST_STORAGE_KEY = "dashboard-task-list-id"

export function DashboardTasks() {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [lists, setLists] = useState<TaskList[]>([])
  const [listId, setListId] = useState<string>("@default")
  const [error, setError] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [adding, setAdding] = useState(false)

  async function load(forListId: string) {
    setError("")
    const res = await fetch(`/api/tasks?listId=${encodeURIComponent(forListId)}`)
    const data = await res.json()
    if (!res.ok) {
      setError(data.error || "Couldn't load tasks.")
      setTasks(null)
      return
    }
    setTasks(data.tasks)
  }

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(LIST_STORAGE_KEY) : null
    const initialListId = stored || "@default"
    setListId(initialListId)
    load(initialListId)

    fetch("/api/tasks/lists")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.lists)) setLists(data.lists)
      })
      .catch(() => {})
  }, [])

  function handleListChange(newListId: string) {
    setListId(newListId)
    window.localStorage.setItem(LIST_STORAGE_KEY, newListId)
    setTasks(null)
    load(newListId)
  }

  async function toggle(task: Task) {
    const nextCompleted = task.status !== "completed"
    setTasks((prev) =>
      prev?.map((t) => (t.id === task.id ? { ...t, status: nextCompleted ? "completed" : "needsAction" } : t)) ?? null
    )
    const res = await fetch(`/api/tasks/${encodeURIComponent(task.id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: nextCompleted, listId }),
    })
    if (!res.ok) load(listId) // revert by re-fetching on failure
  }

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    const title = newTitle.trim()
    if (!title) return
    setAdding(true)
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, listId }),
    })
    setAdding(false)
    if (res.ok) {
      setNewTitle("")
      load(listId)
    }
  }

  if (error) {
    const notConnected = error.toLowerCase().includes("not connected") || error.toLowerCase().includes("isn't connected")
    return (
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-6 text-center text-sm text-[var(--ink-muted)] shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm">
        {notConnected ? (
          <>
            Google Tasks isn&rsquo;t connected yet.{" "}
            <a href="/api/auth/google" className="font-medium text-[var(--olive)] underline">
              Connect Google Tasks
            </a>
          </>
        ) : (
          error
        )}
      </div>
    )
  }

  if (!tasks) {
    return (
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-6 text-center text-sm text-[var(--ink-muted)] shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm">
        Loading tasks&hellip;
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-5 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-3px_8px_rgba(59,31,61,0.12),0_20px_40px_-14px_rgba(59,31,61,0.4)] backdrop-blur-sm">
      {lists.length > 1 && (
        <select
          value={listId}
          onChange={(e) => handleListChange(e.target.value)}
          className="mb-3 w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        >
          {lists.map((list) => (
            <option key={list.id} value={list.id}>
              {list.title}
            </option>
          ))}
        </select>
      )}
      <form onSubmit={handleAdd} className="mb-4 flex gap-2">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a task"
          className="flex-1 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        />
        <button
          type="submit"
          disabled={adding}
          className="flex items-center gap-1 rounded-md bg-[var(--ink)] px-3 py-2 text-sm text-[var(--primary-foreground)] transition hover:opacity-90 disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="text-center text-sm text-[var(--ink-muted)]">No tasks. Nice.</p>
      ) : (
        <ul className="flex flex-col gap-1">
          {tasks.map((task) => (
            <li key={task.id}>
              <button
                onClick={() => toggle(task)}
                className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-[var(--background)]"
              >
                {task.status === "completed" ? (
                  <CircleCheck className="h-5 w-5 shrink-0 text-[var(--olive)]" />
                ) : (
                  <Circle className="h-5 w-5 shrink-0 text-[var(--ink-muted)]" />
                )}
                <span
                  className={`text-sm ${
                    task.status === "completed" ? "text-[var(--ink-muted)] line-through" : "text-[var(--ink)]"
                  }`}
                >
                  {task.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
