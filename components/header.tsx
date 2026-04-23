"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Specialties", href: "/specialties" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--warm-ivory)]/95 backdrop-blur-sm border-b border-[var(--soft-grey)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Dr. Madrone Love"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="font-serif text-xl font-medium text-[var(--charcoal)]">
            Dr. Madrone Love
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--adobe-clay)] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[var(--adobe-clay)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--adobe-clay)]/90 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden -m-2.5 p-2.5 text-[var(--charcoal)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--warm-ivory)] border-t border-[var(--soft-grey)]">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-[var(--charcoal)] hover:text-[var(--adobe-clay)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-md bg-[var(--adobe-clay)] px-5 py-2.5 text-sm font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
