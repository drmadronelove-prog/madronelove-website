"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [disclosuresOpen, setDisclosuresOpen] = useState(false)
  const [noSurprisesOpen, setNoSurprisesOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h1 className="font-[var(--font-classic)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight">
              Get in Touch
            </h1>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="relative aspect-[3/4] max-w-[24rem] w-full border-[6px] border-[var(--gold)] p-2 bg-white shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/office-couch.jpg"
                    alt="Therapy office interior with grey couch and enso painting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div className="border border-[var(--border)] p-8">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-4">
                    Oakland
                  </p>
                  <p className="text-[var(--ink)]">Olive Clinical</p>
                  <p className="text-[var(--ink-muted)] mt-1">541 Athol</p>
                  <p className="text-[var(--ink-muted)]">Oakland, CA 94606</p>
                </div>

                <div className="border border-[var(--border)] p-8">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-4">
                    Berkeley
                  </p>
                  <p className="text-[var(--ink)]">Anam Cara Therapy Center</p>
                  <p className="text-[var(--ink-muted)] mt-1">2915 Martin Luther King Junior Way</p>
                  <p className="text-[var(--ink-muted)]">Berkeley, CA 94703</p>
                </div>

                <div className="border border-[var(--border)] p-8 space-y-4">
                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-2">
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
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-2">
                      Phone
                    </p>
                    <Link
                      href="tel:415-484-3302"
                      className="text-[var(--ink)] hover:text-[var(--clay)] transition-colors duration-300"
                    >
                      415-484-3302
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300"
                    >
                      Book a consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* No Surprises Act */}
        <section className="py-4 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <button
              onClick={() => setNoSurprisesOpen(!noSurprisesOpen)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors duration-300">
                No Surprises Act
              </span>
              <span className={`text-[var(--ink-muted)] transition-transform duration-300 ${noSurprisesOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${noSurprisesOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pt-4 pb-8 space-y-8 text-sm">
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                      Your Rights
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>
                      Under the No Surprises Act (effective January 1, 2022), you have the right to receive a &ldquo;Good Faith Estimate&rdquo; explaining how much your medical care will cost.
                    </p>
                    <p>
                      Under the law, health care providers need to give patients who don&apos;t have insurance or who are not using insurance an estimate of the bill for medical items and services.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 pt-4 border-t border-[var(--border)]">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                      Good Faith Estimate
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>
                      You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.
                    </p>
                    <p>
                      Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 pt-4 border-t border-[var(--border)]">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                      Dispute Process
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>
                      If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
                    </p>
                    <p>
                      Make sure to save a copy or picture of your Good Faith Estimate. For questions or more information about your right to a Good Faith Estimate, visit{" "}
                      <Link href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:text-[var(--clay)] transition-colors">
                        cms.gov/nosurprises
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Required Legal Disclosures */}
        <section className="py-4 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <button
              onClick={() => setDisclosuresOpen(!disclosuresOpen)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] group-hover:text-[var(--ink)] transition-colors duration-300">
                Required Legal Disclosures
              </span>
              <span className={`text-[var(--ink-muted)] transition-transform duration-300 ${disclosuresOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${disclosuresOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pt-4 pb-8 space-y-12 text-sm">
                {/* License Information */}
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
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
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
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
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                      Privacy (HIPAA & CMIA)
                    </h3>
                  </div>
                  <div className="lg:col-span-9 space-y-4 text-[var(--ink-light)]">
                    <p>I am required by law to protect the privacy of your protected health information (PHI). You have the right to access and request amendments to your records.</p>
                    <p>Disclosures without consent are only allowed for mandated reporting, duty to warn/protect, emergencies, and court orders.</p>
                    <p>Full HIPAA Notice of Privacy Practices available upon request.</p>
                  </div>
                </div>

                {/* CalOPPA */}
                <div className="grid lg:grid-cols-12 gap-6 pt-8 border-t border-[var(--border)]">
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
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
