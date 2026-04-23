"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [disclosuresOpen, setDisclosuresOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ivory)]">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)] mb-6">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight">
              Contact
            </h1>
            <div className="mt-12">
              <Link
                href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13px] font-medium tracking-wide uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info - Clean grid */}
        <section className="py-16 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)] mb-4">
                  Location
                </p>
                <p className="text-[var(--ink)]">
                  Berkeley, Oakland, San Francisco
                </p>
                <p className="text-[var(--ink-muted)] mt-1">
                  Telehealth throughout California
                </p>
              </div>
              
              <div>
                <p className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)] mb-4">
                  Email
                </p>
                <Link
                  href="mailto:therapy@madronelove.com"
                  className="text-[var(--ink)] hover:text-[var(--clay)] transition-colors duration-300"
                >
                  therapy@madronelove.com
                </Link>
              </div>
              
              <div>
                <p className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)] mb-4">
                  Phone
                </p>
                <Link
                  href="tel:415-484-3302"
                  className="text-[var(--ink)] hover:text-[var(--clay)] transition-colors duration-300"
                >
                  415-484-3302
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclosures - Refined accordion */}
        <section className="py-16 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <button
              onClick={() => setDisclosuresOpen(!disclosuresOpen)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <span className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors duration-300">
                Required Legal Disclosures
              </span>
              <span className={`text-[var(--ink-muted)] transition-transform duration-300 ${disclosuresOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${disclosuresOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pt-8 pb-4 space-y-12 text-sm">
                {/* License Information */}
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)]">
                      License Information
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-2 text-[var(--ink-light)]">
                    <p><span className="text-[var(--ink)]">Name:</span> Jerlina Love</p>
                    <p><span className="text-[var(--ink)]">Title:</span> Licensed Clinical Psychologist</p>
                    <p><span className="text-[var(--ink)]">License Number:</span> PSY35899</p>
                    <p><span className="text-[var(--ink)]">State:</span> California</p>
                    <p><span className="text-[var(--ink)]">Board:</span> California Board of Psychology</p>
                    <p><span className="text-[var(--ink)]">Status:</span> Active</p>
                  </div>
                </div>

                {/* Notice to Consumers */}
                <div className="grid lg:grid-cols-12 gap-6 pt-8 border-t border-[var(--border)]">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)]">
                      Notice to Consumers
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>The California Board of Psychology protects consumers by licensing and regulating psychologists.</p>
                    <p>
                      Verify license:{" "}
                      <Link href="https://www.psychology.ca.gov" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:text-[var(--clay)] transition-colors">
                        psychology.ca.gov
                      </Link>
                    </p>
                    <div>
                      <p className="text-[var(--ink)]">To file a complaint:</p>
                      <p className="mt-2">California Board of Psychology</p>
                      <p>1625 North Market Blvd., Suite N-215</p>
                      <p>Sacramento, CA 95834</p>
                      <p>(916) 574-7720 | (866) 503-3221</p>
                    </div>
                  </div>
                </div>

                {/* Privacy */}
                <div className="grid lg:grid-cols-12 gap-6 pt-8 border-t border-[var(--border)]">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)]">
                      Privacy (HIPAA & CMIA)
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>I am required by law to protect the privacy of your protected health information (PHI). You have the right to access and request amendments to your records.</p>
                    <p>Disclosures without consent are only allowed for mandated reporting, duty to warn/protect, emergencies, and court orders.</p>
                    <p>Full HIPAA Notice of Privacy Practices available upon request.</p>
                  </div>
                </div>

                {/* Good Faith Estimate */}
                <div className="grid lg:grid-cols-12 gap-6 pt-8 border-t border-[var(--border)]">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)]">
                      Good Faith Estimate
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>You have the right to receive a Good Faith Estimate explaining how much your care will cost. Uninsured or self-pay patients will receive an estimate at least 1 business day before the first session.</p>
                    <p>If your bill is at least $400 more than the estimate, you can dispute it.</p>
                    <p>
                      More information:{" "}
                      <Link href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:text-[var(--clay)] transition-colors">
                        cms.gov/nosurprises
                      </Link>
                    </p>
                  </div>
                </div>

                {/* CalOPPA */}
                <div className="grid lg:grid-cols-12 gap-6 pt-8 border-t border-[var(--border)]">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)]">
                      CalOPPA
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>Information collected through this site (name, phone, email) is used only to respond to inquiries. Information is not sold or shared with third parties. You may request deletion of your personal data.</p>
                    <p>Privacy policy effective: July 1, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
