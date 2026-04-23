"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, MapPin, Mail, Phone, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [disclosuresOpen, setDisclosuresOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[var(--warm-ivory)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] leading-tight">
              Book a consultation
            </h1>
            <div className="mt-8">
              <Link
                href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--adobe-clay)] px-6 py-3 text-base font-medium text-white hover:bg-[var(--adobe-clay)]/90 transition-colors"
              >
                Schedule Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-[var(--sage-green)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[var(--charcoal)]">
                    Berkeley, Oakland, San Francisco
                  </p>
                  <p className="text-[var(--muted-foreground)]">
                    Telehealth throughout California
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-[var(--sage-green)] mt-1 flex-shrink-0" />
                <Link
                  href="mailto:therapy@madronelove.com"
                  className="text-[var(--adobe-clay)] hover:underline"
                >
                  therapy@madronelove.com
                </Link>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-[var(--sage-green)] mt-1 flex-shrink-0" />
                <Link
                  href="tel:415-484-3302"
                  className="text-[var(--adobe-clay)] hover:underline"
                >
                  415-484-3302
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclosures */}
        <section className="py-12 bg-[var(--soft-grey)]/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <button
              onClick={() => setDisclosuresOpen(!disclosuresOpen)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
            >
              <span className="font-medium text-[var(--charcoal)]">
                Required Legal Disclosures
              </span>
              <ChevronDown
                className={`h-5 w-5 text-[var(--muted-foreground)] transition-transform ${
                  disclosuresOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {disclosuresOpen && (
              <div className="mt-4 p-6 md:p-8 bg-white rounded-lg shadow-sm space-y-8 text-sm">
                {/* License Information */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-3">
                    License Information
                  </h3>
                  <div className="space-y-1 text-[var(--muted-foreground)]">
                    <p><span className="font-medium text-[var(--charcoal)]">Name:</span> Jerlina Love</p>
                    <p><span className="font-medium text-[var(--charcoal)]">Title:</span> Licensed Clinical Psychologist</p>
                    <p><span className="font-medium text-[var(--charcoal)]">License Number:</span> PSY35899</p>
                    <p><span className="font-medium text-[var(--charcoal)]">State of Licensure:</span> California</p>
                    <p><span className="font-medium text-[var(--charcoal)]">Licensing Board:</span> California Board of Psychology</p>
                    <p><span className="font-medium text-[var(--charcoal)]">Status:</span> Active</p>
                  </div>
                </div>

                {/* Notice to Consumers */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-3">
                    Notice to Consumers
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-3">
                    The California Board of Psychology protects consumers by licensing and regulating psychologists.
                  </p>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    <li>
                      Verify my license:{" "}
                      <Link href="https://www.psychology.ca.gov" target="_blank" rel="noopener noreferrer" className="text-[var(--adobe-clay)] hover:underline">
                        www.psychology.ca.gov
                      </Link>
                    </li>
                    <li>To file a complaint, contact:</li>
                  </ul>
                  <div className="mt-2 ml-4 text-[var(--muted-foreground)]">
                    <p>California Board of Psychology</p>
                    <p>1625 North Market Blvd., Suite N-215</p>
                    <p>Sacramento, CA 95834</p>
                    <p>Phone: (916) 574-7720</p>
                    <p>Toll Free: (866) 503-3221</p>
                  </div>
                </div>

                {/* Privacy Practices */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-3">
                    Privacy Practices (HIPAA & CMIA)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-[var(--muted-foreground)]">
                    <li>I am required by law to protect the privacy of your protected health information (PHI).</li>
                    <li>You have the right to access and request amendments to your records.</li>
                    <li>Disclosures without consent are only allowed under:
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>Mandated reporting of suspected child, elder, or dependent adult abuse.</li>
                        <li>Duty to warn/protect if you make a serious threat of harm to an identifiable person.</li>
                        <li>Emergencies to prevent serious harm.</li>
                        <li>Court orders or other legal requirements.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mt-3 text-[var(--muted-foreground)]">
                    Full HIPAA Notice of Privacy Practices available upon request.
                  </p>
                </div>

                {/* Informed Consent */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-3">
                    Informed Consent
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-2">
                    Before treatment begins, you will receive written informed consent covering:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-[var(--muted-foreground)]">
                    <li>Nature, purpose, risks, and benefits of psychotherapy.</li>
                    <li>Alternatives to treatment.</li>
                    <li>Fees, billing, and cancellation/no-show policies.</li>
                    <li>Telehealth-specific risks and procedures (if applicable).</li>
                  </ul>
                </div>

                {/* Good Faith Estimate */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-3">
                    Good Faith Estimate (No Surprises Act)
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-2">
                    You have the right to receive a &quot;Good Faith Estimate&quot; explaining how much your medical or mental health care will cost.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-[var(--muted-foreground)]">
                    <li>Providers must give uninsured or self-pay patients an estimate of expected charges.</li>
                    <li>You will receive a Good Faith Estimate in writing at least 1 business day before your first session or upon request.</li>
                    <li>You may request an estimate before scheduling.</li>
                    <li>If your bill is at least $400 more than the estimate, you can dispute it.</li>
                    <li>Save a copy of your Good Faith Estimate.</li>
                  </ul>
                  <p className="mt-3 text-[var(--muted-foreground)]">
                    For more information:{" "}
                    <Link href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-[var(--adobe-clay)] hover:underline">
                      www.cms.gov/nosurprises
                    </Link>
                    {" "}or 1-800-985-3059.
                  </p>
                </div>

                {/* Advertising */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-3">
                    Advertising and Representation
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    All information on this website is accurate and not misleading. I identify myself using my legal name, professional title, and license number as required by law.
                  </p>
                </div>

                {/* CalOPPA */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-3">
                    California Online Privacy Protection Act (CalOPPA)
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-2">
                    If you submit personal information (e.g., through a contact form):
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-[var(--muted-foreground)]">
                    <li>Collected information may include name, phone, and email.</li>
                    <li>Information is used only to respond to inquiries.</li>
                    <li>Information is not sold or shared with third parties.</li>
                    <li>You may request deletion of your personal data.</li>
                    <li>This site may use cookies or analytics tools.</li>
                  </ul>
                  <p className="mt-3 text-[var(--muted-foreground)]">
                    Privacy policy effective date: 7/1/2025
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
