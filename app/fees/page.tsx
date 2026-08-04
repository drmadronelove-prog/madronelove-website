import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Fees | Dr. Madrone Love, PsyD",
  description:
    "Out-of-network fee information and options for insurance reimbursement, including Reimbursify, Thrizer, and Mentaya.",
}

const reimbursementOptions = [
  {
    name: "Reimbursify",
    href: "https://reimbursify.com",
    surface: "fee-card-champagne",
    description:
      "File your own claims from your phone. You submit each superbill through the app and your insurer reimburses you directly.",
  },
  {
    name: "Thrizer",
    href: "https://www.thrizer.com",
    surface: "fee-card-rose",
    description:
      "Pay only your portion at the time of session. Thrizer covers the rest of the fee upfront and handles the claim with your insurer on your behalf.",
  },
  {
    name: "Mentaya",
    href: "https://mentaya.com",
    surface: "fee-card-silver",
    description:
      "Claims are submitted for you automatically after each session. You pay the full fee upfront and your reimbursement is sent to you directly.",
  },
]

export default function FeesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />

      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h1 className="font-[family-name:var(--font-classic)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight">
              Fees
            </h1>
          </div>
        </section>

        {/* Statement */}
        <section className="py-16 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                  Out of Network
                </p>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg text-[var(--ink-light)] leading-relaxed">
                  I am an out-of-network provider, and my fee is commensurate with my training and experience.
                </p>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Fee specifics are discussed during the consultation, and you will receive a{" "}
                  <Link
                    href="/contact"
                    className="text-[var(--ink)] hover:text-[var(--clay)] transition-colors duration-300"
                  >
                    Good Faith Estimate
                  </Link>{" "}
                  in writing before we begin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reimbursement options */}
        <section className="py-16 lg:py-24 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-6">
              Reimbursement Options
            </p>

            <p className="text-lg text-[var(--ink-light)] leading-relaxed max-w-3xl mb-16">
              Many clients with out-of-network benefits are reimbursed for a meaningful portion of the cost of care. I provide a monthly superbill you can submit to your insurer, and the services below can handle much of that process for you.
            </p>

            <div className="grid md:grid-cols-3 gap-x-12 gap-y-12">
              {reimbursementOptions.map((option) => (
                <Link
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fee-card ${option.surface} p-8 flex flex-col`}
                >
                  <h2 className="font-[family-name:var(--font-classic)] text-[1.9rem] leading-none tracking-[0.02em] text-[var(--fee-ink)]">
                    {option.name}
                  </h2>
                  <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-[var(--fee-ink-soft)]">
                    {option.description}
                  </p>
                  <span className="mt-7 text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--fee-ink)]">
                    Visit <span className="fee-card-arrow">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-16 text-sm text-[var(--ink-muted)] leading-relaxed max-w-3xl">
              These are independent services, offered here for convenience rather than as endorsements. Coverage varies by plan, and reimbursement is never guaranteed. Checking your out-of-network benefits with your insurer directly is always worthwhile.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[var(--stone)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-4">
                  Next step
                </p>
                <h2 className="font-[family-name:var(--font-classic)] text-3xl md:text-4xl text-[var(--ink)] font-light">
                  Begin with a <em className="text-[var(--gold)]">free</em> consultation
                </h2>
              </div>
              <Link
                href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300"
              >
                Schedule
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
