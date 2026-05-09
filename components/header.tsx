"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const navigation = [
  { name: "About", href: "/#about" },
  { name: "Specialties", href: "/specialties" },
  { name: "Get in Touch", href: "/contact" },
  { name: "Blog", href: "https://www.oliveclinical.com/blog", external: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#D1D5D5]/70 backdrop-blur-md"
          : "bg-[#D1D5D5]/70"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Dr. Madrone Love">
          <img
            src="/logo.png"
            alt="Dr. Madrone Love logo"
            className="block h-[3.6rem] w-[3.6rem] object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-[var(--font-classic)] text-lg md:text-xl text-[var(--ink)] tracking-tight">
              Madrone Love, PsyD
            </span>
            <span
              className="block text-[11px] font-medium uppercase text-[var(--ink-muted)] mt-1"
              style={{
                textAlign: "justify",
                textAlignLast: "justify",
                textJustify: "inter-character",
              }}
            >
              Clinical Psychologist
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[13px] font-medium tracking-wide uppercase text-[var(--ink)] hover:text-[var(--ink-muted)] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://www.oliveclinical.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium tracking-wide uppercase text-[var(--ink)] hover:text-[var(--ink-muted)] transition-colors duration-300"
          >
            Olive Clinical
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-[var(--ink)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[var(--background)] border-t border-[var(--border)] px-6 py-8 space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block text-sm font-medium tracking-wide uppercase text-[var(--ink)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://www.oliveclinical.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium tracking-wide uppercase text-[var(--ink)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Olive Clinical
          </Link>
        </div>
      </div>
    </header>
  )
}
