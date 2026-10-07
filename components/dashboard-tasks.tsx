"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
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

// How long a checked-off task stays on screen, struck through, before it
// disappears. Long enough to see what you did and to click again to undo it.
const CLEAR_DELAY_MS = 2500

export function DashboardTasks() {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [lists, setLists] = useState<TaskList[]>([])
  const [listId, setListId] = useState<string>("@default")
  const [error, setError] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [adding, setAdding] = useState(false)
  const clearTimers = useRef(new Map<string, ReturnType<typeof setTimeout>>())

  function cancelClear(id: string) {
    const timer = clearTimers.current.get(id)
    if (timer) {
      clearTimeout(timer)
      clearTimers.current.delete(id)
    }
  }

  function scheduleClear(id: string) {
    cancelClear(id)
    clearTimers.current.set(
      id,
      setTimeout(() => {
        clearTimers.current.delete(id)
        setTasks((prev) => prev?.filter((t) => t.id !== id) ?? null)
      }, CLEAR_DELAY_MS)
    )
  }

  // Drop every pending timer when the component goes away, so a fired timer
  // can't call setTasks on an unmounted component.
  useEffect(() => {
    const timers = clearTimers.current
    return () => {
      timers.forEach((timer) => clearTimeout(timer))
      timers.clear()
    }
  }, [])

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
    clearTimers.current.forEach((timer) => clearTimeout(timer))
    clearTimers.current.clear()
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
    // Checking it off starts the countdown to it leaving the list; clicking it
    // again during that window puts it back.
    if (nextCompleted) {
      scheduleClear(task.id)
    } else {
      cancelClear(task.id)
    }
    const res = await fetch(`/api/tasks/${encodeURIComponent(task.id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: nextCompleted, listId }),
    })
    if (!res.ok) {
      cancelClear(task.id)
      load(listId) // revert by re-fetching on failure
    }
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
                className={`flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-all duration-500 hover:bg-[var(--background)] ${
                  task.status === "completed" ? "opacity-40" : "opacity-100"
                }`}
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
