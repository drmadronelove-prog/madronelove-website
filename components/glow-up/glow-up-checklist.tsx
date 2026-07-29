"use client"

import { useState } from "react"

interface GlowItem {
  name: string
  color: string
  qty: number
  search: string
  brands?: string
}

interface GlowCategory {
  title: string
  icon: string
  items: GlowItem[]
}

const CATEGORIES: GlowCategory[] = [
  {
    title: "Tops",
    icon: "👚",
    items: [
      { name: "Crew neck sweater", color: "cream", qty: 1, search: "cream cashmere crew neck sweater" },
      { name: "Crew neck sweater", color: "camel", qty: 1, search: "camel crew neck sweater" },
      { name: "Crew neck sweater", color: "olive", qty: 1, search: "olive crew neck sweater women" },
      { name: "Good tee", color: "oatmeal or tan", qty: 1, search: "oatmeal cotton tee women" },
      { name: "Good tee", color: "warm gray or sage", qty: 1, search: "sage green tee women" },
      { name: "Striped long sleeve", color: "warm tones", qty: 1, search: "striped long sleeve top women" },
      { name: "Slouchy sweatshirt", color: "warm gray", qty: 1, search: "oversized sweatshirt gray women" },
      { name: "Slouchy sweatshirt", color: "navy", qty: 1, search: "oversized navy sweatshirt women" },
      { name: "Button down shirt", color: "cream or chambray", qty: 1, search: "cream button down shirt women" },
    ],
  },
  {
    title: "Bottoms",
    icon: "👖",
    items: [
      { name: "Dark wash straight leg jeans", color: "", qty: 2, search: "Agolde dark wash straight leg jeans women", brands: "Agolde, Citizens of Humanity" },
      { name: "Wide leg trouser", color: "cream or tan", qty: 1, search: "wide leg cream trouser women", brands: "Vince, COS" },
      { name: "Full length skirt", color: "navy or olive", qty: 1, search: "maxi skirt navy women", brands: "6397, Eileen Fisher" },
    ],
  },
  {
    title: "Layers",
    icon: "🧥",
    items: [
      { name: "Oversized camel coat", color: "camel", qty: 1, search: "oversized camel coat women", brands: "The Row, Mango, COS" },
      { name: "Blazer", color: "warm brown or olive", qty: 1, search: "brown blazer women oversized", brands: "Aritzia, Vince" },
      { name: "Cardigan", color: "oatmeal or rust", qty: 1, search: "oversized cardigan oatmeal women", brands: "Jenni Kayne, Everlane" },
    ],
  },
  {
    title: "Shoes",
    icon: "👟",
    items: [
      { name: "Brown leather loafers", color: "warm brown", qty: 1, search: "brown leather loafers women", brands: "Madewell, Everlane" },
      { name: "New Balance sneakers", color: "warm neutral tones", qty: 1, search: "New Balance 327 or 574 women warm tone", brands: "New Balance 327, 574, 2002R" },
      { name: "Brown leather ankle boots", color: "warm brown", qty: 1, search: "brown leather ankle boots women", brands: "Madewell, La Canadienne" },
      { name: "Flat sandal", color: "tan leather", qty: 1, search: "tan leather flat sandal women", brands: "Nisolo, Ancient Greek Sandals" },
    ],
  },
  {
    title: "Bags",
    icon: "👜",
    items: [
      { name: "Structured leather tote", color: "tan or cognac", qty: 1, search: "cognac leather tote bag women", brands: "Madewell, Cuyana" },
      { name: "Small crossbody", color: "brown or warm tone", qty: 1, search: "brown leather crossbody bag women", brands: "Polene, A.P.C." },
    ],
  },
  {
    title: "Gold jewelry",
    icon: "✨",
    items: [
      { name: "Layering chain, short (16in)", color: "gold", qty: 1, search: "gold chain necklace 16 inch women" },
      { name: "Layering chain, mid (18in)", color: "gold", qty: 1, search: "gold chain necklace 18 inch women" },
      { name: "Pendant necklace (20in)", color: "gold", qty: 1, search: "gold pendant necklace women minimal" },
      { name: "Small gold hoops", color: "gold", qty: 1, search: "small gold hoop earrings women", brands: "Mejuri, Automic Gold" },
      { name: "Medium gold hoops", color: "gold", qty: 1, search: "medium gold hoop earrings women" },
      { name: "Gold cuff bracelet", color: "gold", qty: 1, search: "gold cuff bracelet women minimal" },
      { name: "Stacking rings (set of 2+)", color: "gold", qty: 1, search: "gold stacking rings women" },
    ],
  },
  {
    title: "Accessories",
    icon: "🧣",
    items: [
      { name: "Silk scarf", color: "terracotta/cream/olive tones", qty: 1, search: "silk scarf warm tones women" },
      { name: "Leather belt", color: "cognac or tan", qty: 1, search: "cognac leather belt women" },
    ],
  },
  {
    title: "Makeup",
    icon: "💄",
    items: [
      { name: "Tinted moisturizer", color: "warm undertone match", qty: 1, search: "tinted moisturizer warm undertone", brands: "ILIA, Tower 28, Kosas" },
      { name: "Cream bronzer", color: "warm bronze", qty: 1, search: "cream bronzer warm skin tone", brands: "Tower 28, Saie, Fenty" },
      { name: "Cream blush", color: "warm peach or coral", qty: 1, search: "cream blush warm peach", brands: "Rare Beauty, Tower 28" },
      { name: "Warm highlighter", color: "gold shimmer", qty: 1, search: "gold highlighter warm skin", brands: "Fenty, Danessa Myricks" },
      { name: "Tinted brow gel", color: "warm brown", qty: 1, search: "tinted brow gel warm brown", brands: "Boy Brow, NYX, Elf" },
      { name: "Warm brown mascara", color: "warm brown", qty: 1, search: "brown mascara warm", brands: "Maybelline, Tower 28" },
      { name: "Lip color: warm berry", color: "warm berry", qty: 1, search: "warm berry lipstick", brands: "Tower 28, Rare Beauty" },
      { name: "Lip color: brick red", color: "brick red", qty: 1, search: "brick red lipstick warm", brands: "MAC Chili, NARS" },
      { name: "Lip color: warm nude", color: "warm nude", qty: 1, search: "warm nude lipstick brown skin", brands: "Fenty, Ilia" },
      { name: "Gold shimmer lip gloss", color: "gold shimmer", qty: 1, search: "gold shimmer lip gloss", brands: "Fenty Gloss Bomb, Tower 28" },
      { name: "Concealer", color: "warm undertone match", qty: 1, search: "concealer warm undertone medium", brands: "NARS, Fenty, Kosas" },
      { name: "Setting spray or powder", color: "translucent", qty: 1, search: "setting spray dewy finish", brands: "Charlotte Tilbury, NYX" },
    ],
  },
  {
    title: "Skincare (TJ's run)",
    icon: "🧴",
    items: [
      { name: "Vitamin C Serum", color: "", qty: 1, search: "Trader Joe's Vitamin C Serum", brands: "Trader Joe's ($9.99)" },
      { name: "Ultra Hydrating Gel Moisturizer", color: "", qty: 1, search: "Trader Joe's Ultra Hydrating Gel Moisturizer", brands: "Trader Joe's" },
      { name: "Daily Facial Sunscreen (invisible)", color: "", qty: 1, search: "Trader Joe's Daily Facial Sunscreen", brands: "Trader Joe's" },
      { name: "Dewy Skin Serum", color: "", qty: 1, search: "Trader Joe's Dewy Skin Serum", brands: "Trader Joe's ($9.99)" },
    ],
  },
  {
    title: "Grooming",
    icon: "🪒",
    items: [
      { name: "Dermaplaning tool", color: "", qty: 1, search: "dermaplaning razor women face", brands: "Tinkle, Schick, Kitsch" },
      { name: "Self tanner (face)", color: "warm tone", qty: 1, search: "self tanner face natural", brands: "Isle of Paradise, Coco & Eve, St. Tropez" },
      { name: "Root touch up", color: "match current shade", qty: 1, search: "Madison Reed root touch up", brands: "Madison Reed" },
      { name: "Gua sha stone", color: "", qty: 1, search: "gua sha facial tool", brands: "Mount Lai, Wildling, Sacheu" },
    ],
  },
]

export function GlowUpChecklist() {
  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("madrone_thrive_glowup") || "[]"))
    } catch {
      return new Set()
    }
  })

  function toggle(key: string) {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      localStorage.setItem("madrone_thrive_glowup", JSON.stringify([...next]))
      return next
    })
  }

  function reset() {
    setChecked(new Set())
    localStorage.removeItem("madrone_thrive_glowup")
  }

  const totalItems = CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0)
  const progress = totalItems > 0 ? (checked.size / totalItems) * 100 : 0

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: "#8B7B68", marginBottom: 8 }}>Warm tones only. No black. Gold not silver.</div>
        <div style={{ background: "#E8DFD4", borderRadius: 20, height: 8, overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(90deg,#C75B3A,#8B6B2F)", height: "100%", width: `${progress}%`, borderRadius: 20, transition: "width 0.4s ease" }} />
        </div>
        <div style={{ fontSize: 12, color: "#A89880", marginTop: 6 }}>{checked.size} of {totalItems} found</div>
      </div>

      {CATEGORIES.map((cat) => {
        const count = cat.items.filter((_, i) => checked.has(`${cat.title}-${i}`)).length
        const allDone = count === cat.items.length
        return (
          <div key={cat.title} style={{ marginBottom: 20, background: "#FFFCF7", borderRadius: 12, border: "1px solid #E8DFD4", overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                background: allDone ? "#F0EBE2" : "#F7F0E6",
                borderBottom: "1px solid #E8DFD4",
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 18, fontWeight: 600, color: "#3A2E22" }}>
                {cat.icon} {cat.title}
              </div>
              <div style={{ fontSize: 12, color: "#8B7B68", background: "#FFFCF7", padding: "2px 10px", borderRadius: 20 }}>
                {count}/{cat.items.length}
              </div>
            </div>
            {cat.items.map((item, i) => {
              const key = `${cat.title}-${i}`
              const isChecked = checked.has(key)
              return (
                <div
                  key={i}
                  onClick={() => toggle(key)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 16px",
                    borderBottom: "1px solid #E8DFD4",
                    cursor: "pointer",
                    opacity: isChecked ? 0.5 : 1,
                    background: isChecked ? "#FAF7F2" : "transparent",
                    transition: "opacity 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      minWidth: 20,
                      borderRadius: "50%",
                      border: isChecked ? "none" : "2px solid #C4A882",
                      background: isChecked ? "#8B6B2F" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                      transition: "all 0.2s",
                    }}
                  >
                    {isChecked && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond',Georgia,serif",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#3A2E22",
                        textDecoration: isChecked ? "line-through" : "none",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.qty > 1 ? `${item.name} (x${item.qty})` : item.name}
                    </div>
                    {item.color && <div style={{ fontSize: 12, color: "#8B7B68", marginTop: 2 }}>{item.color}</div>}
                    {item.brands && <div style={{ fontSize: 11, color: "#A89880", marginTop: 2 }}>Try: {item.brands}</div>}
                    <div style={{ fontSize: 11, color: "#B8A898", marginTop: 3, fontStyle: "italic" }}>Search: &ldquo;{item.search}&rdquo;</div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}

      <div style={{ textAlign: "center", marginTop: 8, marginBottom: 24 }}>
        <button
          onClick={reset}
          style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#A89880", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
        >
          Reset checklist
        </button>
      </div>

      <div style={{ padding: "16px 20px", background: "#F7F0E6", borderRadius: 12, border: "1px solid #E8DFD4" }}>
        <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 18, fontWeight: 600, color: "#3A2E22", marginBottom: 8 }}>
          Shopping rules
        </div>
        <div style={{ fontSize: 13, color: "#5A4A38", lineHeight: 1.8 }}>
          1. Set a monthly budget. Stick to it.
          <br />
          2. Only buy what&rsquo;s on this list.
          <br />
          3. Save it, wait 24 hours, then decide.
          <br />
          4. Check off items as you find them.
          <br />
          5. When the list is done, stop shopping.
        </div>
      </div>
    </div>
  )
}
