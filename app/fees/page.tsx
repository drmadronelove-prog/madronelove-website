import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Fees | Dr. Madrone Love, PsyD",
  description:
    "Out-of-network fee information and options for insurance reimbursement, including Reimbursify and Mentaya.",
}

// Drop a logo at public/images/logos/<slug>.(svg|png|webp) and the card picks
// it up automatically; until then the card falls back to the wordmark.
function logoFor(slug: string): string | null {
  for (const ext of ["svg", "png", "webp"]) {
    const file = `/images/logos/${slug}.${ext}`
    if (fs.existsSync(path.join(process.cwd(), "public", file))) return file
  }
  return null
}

const reimbursementOptions = [
  {
    slug: "reimbursify",
    name: "Reimbursify",
    href: "https://reimbursify.com",
  },
  {
    slug: "mentaya",
    name: "Mentaya",
    href: "https://mentaya.com",
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
            <h1 className="font-[var(--font-classic)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight">
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
                  I am an out-of-network provider, and my fees are commensurate with my training and experience. Fee specifics are discussed during the consultation.
                </p>
                <p className="text-lg text-[var(--ink-light)] leading-relaxed">
                  I currently have low-fee spots available in my assessment practice &mdash; you are welcome to{" "}
                  <Link
                    href="mailto:therapy@madronelove.com"
                    className="text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300"
                  >
                    email me
                  </Link>{" "}
                  for more information.
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

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {reimbursementOptions.map((option) => {
                const logo = logoFor(option.slug)
                return (
                <Link
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fee-card p-10 flex flex-col"
                >
                  <h2 className="flex-1 font-serif text-2xl font-light text-[var(--ink)]">
                    {logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logo}
                        alt={option.name}
                        className="h-7 w-auto max-w-[70%] object-contain object-left"
                      />
                    ) : (
                      option.name
                    )}
                  </h2>
                  <span className="fee-card-cta mt-8 self-start text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1">
                    Visit <span className="fee-card-arrow">&rarr;</span>
                  </span>
                </Link>
                )
              })}
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
                <h2 className="font-[var(--font-classic)] text-3xl md:text-4xl text-[var(--ink)] font-light">
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
