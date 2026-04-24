"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Specialties", href: "/specialties" },
  { name: "Contact", href: "/contact" },
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
          ? "bg-[#6B7678]/70 backdrop-blur-md"
          : "bg-[#6B7678]/70"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Dr. Madrone Love"
            width={48}
            height={48}
            className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
            style={{ filter: "brightness(0) saturate(100%) invert(72%) sepia(34%) saturate(471%) hue-rotate(359deg) brightness(90%) contrast(85%)" }}
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-medium tracking-wide uppercase text-[var(--ink)] hover:text-[var(--ink-muted)] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-[13px] font-medium tracking-wide uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:border-[var(--clay)] hover:text-[var(--clay)] transition-colors duration-300"
          >
            Book
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-[var(--ink)]"
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
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[var(--background)] border-t border-[var(--border)] px-6 py-8 space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-sm font-medium tracking-wide uppercase text-[var(--ink)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium tracking-wide uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-0.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  )
}
