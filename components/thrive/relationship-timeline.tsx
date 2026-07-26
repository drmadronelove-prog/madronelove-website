"use client"

import { useState } from "react"

type Tag = "core" | "intimacy" | "self" | "social"

interface TimelineItem {
  tag: Tag
  text: string
}

interface TimelinePhase {
  color: string
  title: string
  sub: string
  youAreHere?: boolean
  items: TimelineItem[]
}

const PHASES: TimelinePhase[] = [
  {
    color: "#1D9E75",
    title: "week 1 — month 1",
    sub: "the spark and early data",
    youAreHere: true,
    items: [
      { tag: "core", text: "You feel a real spark — something clicked and you know it" },
      { tag: "core", text: "He keeps showing up — he texts, he makes plans, he follows through" },
      { tag: "core", text: "When you are together it feels easy and good" },
      { tag: "intimacy", text: "Physical chemistry is present — touch feels charged, proximity feels good" },
      { tag: "intimacy", text: "First kisses. The physical beginning." },
      { tag: "self", text: "You notice you are thinking about him a lot. That is new information about you." },
      { tag: "self", text: "Your inner world has a new person in it. It reorganizes slightly around that." },
      { tag: "social", text: "You tell one or two close people about him — someone in your world knows he exists" },
    ],
  },
  {
    color: "#378ADD",
    title: "month 1–2",
    sub: "first real intimacy and early integration",
    items: [
      { tag: "intimacy", text: "Sex happens for the first time. It is new territory together." },
      { tag: "intimacy", text: "You notice how he is with you — present, attentive, not performing" },
      { tag: "intimacy", text: "The vulnerability of being physically seen lands. It is a lot. That is normal." },
      { tag: "self", text: "You notice you are softer, more open — someone mattering to you does that" },
      { tag: "self", text: "You start to see yourself a little through his eyes — and it is gentler than your usual view" },
      { tag: "social", text: "Your close friends know about him. You talk about him." },
      { tag: "social", text: "You do something social together — a friend group, an event, the beginning of shared social life" },
      { tag: "core", text: "You start to know his rhythms — when he reaches out, how he moves through his week" },
    ],
  },
  {
    color: "#D85A30",
    title: "month 2–3",
    sub: "friction, repair, and comfort deepening",
    items: [
      { tag: "core", text: "Something gets bumped — a miscommunication, a missed thing, a small tension" },
      { tag: "core", text: "He comes back toward you. He does not disappear." },
      { tag: "core", text: "You learn the bond can hold something imperfect" },
      { tag: "intimacy", text: "Sex starts feeling more comfortable — less performance, more presence" },
      { tag: "intimacy", text: "You can say what you want or do not want. He can too." },
      { tag: "self", text: "You notice you are becoming a slightly different version of yourself — expanded, not erased" },
      { tag: "self", text: "Being cared for by someone starts to feel less foreign and more possible" },
      { tag: "social", text: "You meet someone meaningful in his life — a close friend, a sibling, someone who matters to him" },
      { tag: "social", text: "He meets someone meaningful in yours. They see what you see in him." },
    ],
  },
  {
    color: "#7F77DD",
    title: "month 2–4",
    sub: "the relationship gets named",
    items: [
      { tag: "core", text: "The conversation happens — what are we, where is this going" },
      { tag: "core", text: "The category uncertainty closes. You can breathe." },
      { tag: "social", text: "You introduce him as your boyfriend. Out loud. To someone." },
      { tag: "social", text: "Your friends start to know him as a real presence in your life, not just someone you are seeing" },
      { tag: "self", text: "You have a partner now. That is part of who you are. It settles something." },
      { tag: "intimacy", text: "Sex carries more meaning now — there is a named context around it" },
    ],
  },
  {
    color: "#854F0B",
    title: "month 3–5",
    sub: "knowing each other under pressure",
    items: [
      { tag: "core", text: "He has a hard week. You watch how he carries stress." },
      { tag: "core", text: "You have a hard week. It starts to feel safe to tell him." },
      { tag: "core", text: "He shows up when you need something — not perfectly, but genuinely" },
      { tag: "intimacy", text: "Physical closeness starts to include comfort, not just desire — being held when something is hard" },
      { tag: "self", text: "You notice you are letting someone in in a way you may not have before. That is significant." },
      { tag: "self", text: "Your sense of yourself starts to include being someone who is loved. That is new." },
      { tag: "social", text: "Your worlds are starting to overlap — shared events, shared people, a small shared life" },
    ],
  },
  {
    color: "#639922",
    title: "month 4–6",
    sub: "settling into security",
    items: [
      { tag: "core", text: "The body has started to trust the pattern. He keeps showing up." },
      { tag: "core", text: "You stop bracing when he goes quiet. You know what it means now." },
      { tag: "intimacy", text: "Sex has its own rhythm now — it belongs to the two of you specifically" },
      { tag: "intimacy", text: "You feel attractive to him not because you performed it but because he knows you" },
      { tag: "self", text: "Your excitability and his calm have found their rhythm — your difference feels like a fit, not a problem" },
      { tag: "self", text: "You are still fully yourself — and also someone in a relationship. Both are true at once." },
      { tag: "social", text: "He is woven into your social life now — not an addition, part of the fabric" },
      { tag: "social", text: "Your friends like him. He fits." },
    ],
  },
  {
    color: "#D4537E",
    title: "month 4–8",
    sub: "love begins to form",
    items: [
      { tag: "core", text: "He is responding to you specifically — not an impression, a person he knows" },
      { tag: "core", text: "His face when he looks at you has changed. It is particular now." },
      { tag: "intimacy", text: "Physical and emotional intimacy are no longer separate things" },
      { tag: "self", text: "You feel known. Not performed for — known. That changes something in you." },
      { tag: "self", text: "Being loved by a specific person starts to heal something general. You notice it quietly." },
      { tag: "core", text: "The words come — from one of you, then the other" },
      { tag: "social", text: "People in your life think of you as a pair now — that is new and it feels right" },
    ],
  },
  {
    color: "#1D9E75",
    title: "month 6–12",
    sub: "building something real",
    items: [
      { tag: "core", text: "You have navigated something genuinely hard together and come through it" },
      { tag: "intimacy", text: "Physical intimacy has deepened into something that is entirely yours — a language between two people" },
      { tag: "self", text: "You have seen yourself through his eyes long enough that some of what he sees has stuck" },
      { tag: "self", text: "The feared self is quieter. Not gone — quieter. The real self has more ground." },
      { tag: "social", text: "You have been to things together — family, friends, occasions that matter" },
      { tag: "social", text: "He knows your people and your people know him — not just as your boyfriend but as himself" },
      { tag: "self", text: "You have a future you are both oriented toward — and you are still fully you inside it" },
      { tag: "core", text: "The instruction manual no longer feels necessary. You just know." },
    ],
  },
]

const TAG_COLORS: Record<Tag, { bg: string; color: string }> = {
  core: { bg: "#F0EBE2", color: "#5A4A38" },
  intimacy: { bg: "#FBF0ED", color: "#C75B3A" },
  self: { bg: "#EBF3FB", color: "#378ADD" },
  social: { bg: "#FAF3E4", color: "#8B6B2F" },
}

export function RelationshipTimeline() {
  const totalItems = PHASES.reduce((sum, phase) => sum + phase.items.length, 0)
  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("madrone_thrive_relationship") || "[]"))
    } catch {
      return new Set()
    }
  })

  function toggle(key: string) {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      localStorage.setItem("madrone_thrive_relationship", JSON.stringify([...next]))
      return next
    })
  }

  const pct = totalItems > 0 ? Math.round((checked.size / totalItems) * 100) : 0

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#8B7B68", marginBottom: 6 }}>
          <span>{checked.size} of {totalItems} experiences</span>
          <span>{pct}%</span>
        </div>
        <div style={{ height: 6, background: "#E8DFD4", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: "#378ADD", borderRadius: 99, transition: "width 0.3s" }} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
        {(Object.entries(TAG_COLORS) as [Tag, { bg: string; color: string }][]).map(([tag, c]) => (
          <span key={tag} style={{ fontSize: 11, fontWeight: 500, padding: "2px 8px", borderRadius: 99, background: c.bg, color: c.color }}>
            {tag}
          </span>
        ))}
      </div>

      {PHASES.map((phase, pi) => (
        <div key={pi} style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: phase.color, flexShrink: 0 }} />
            <span style={{ fontSize: 15, fontWeight: 500, color: "#3A2E22" }}>{phase.title}</span>
            {phase.youAreHere && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "2px 10px",
                  borderRadius: 99,
                  fontSize: 11,
                  fontWeight: 500,
                  background: "#FBF0ED",
                  color: "#C75B3A",
                  border: "0.5px solid #D4537E",
                }}
              >
                📍 you are here
              </span>
            )}
            <span style={{ fontSize: 12, color: "#8B7B68", marginLeft: "auto" }}>{phase.sub}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {phase.items.map((item, ii) => {
              const key = `${pi}-${ii}`
              const isChecked = checked.has(key)
              const tc = TAG_COLORS[item.tag]
              return (
                <div
                  key={ii}
                  onClick={() => toggle(key)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `0.5px solid ${isChecked ? "#C4A882" : "#E8DFD4"}`,
                    background: isChecked ? "#F0EBE2" : "#FFFCF7",
                    cursor: "pointer",
                    transition: "background 0.1s",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      flexShrink: 0,
                      marginTop: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: isChecked ? "none" : "0.5px solid #C4A882",
                      background: isChecked ? "#639922" : "transparent",
                      transition: "all 0.1s",
                    }}
                  >
                    {isChecked && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 500, padding: "2px 7px", borderRadius: 99, flexShrink: 0, marginTop: 1, background: tc.bg, color: tc.color }}>
                    {item.tag}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: isChecked ? "#8B7B68" : "#3A2E22",
                      lineHeight: 1.5,
                      textDecoration: isChecked ? "line-through" : "none",
                      textDecorationColor: "#C4A882",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>
          {pi < PHASES.length - 1 && <div style={{ height: 1, background: "#E8DFD4", margin: "20px 0 0" }} />}
        </div>
      ))}
    </div>
  )
}
