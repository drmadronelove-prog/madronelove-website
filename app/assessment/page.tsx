import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Assessment | Dr. Madrone Love, PsyD",
  description:
    "ADHD and autism assessment for adults. Reach out to schedule an assessment consultation.",
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />

      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h1 className="font-[var(--font-classic)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight">
              Assessment
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                  ADHD &amp; Autism
                </p>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg text-[var(--ink-light)] leading-relaxed">
                  I conduct ADHD and autism assessments for adults.
                </p>
                <p className="text-lg text-[var(--ink-light)] leading-relaxed">
                  Most people arrive at assessment after years of sensing that something about how they focus, connect, or move through the world has never quite matched the explanations on offer. Maybe you have been called careless, or too intense, or too sensitive. Maybe you have compensated so well for so long that the effort itself has become the problem.
                </p>
                <p className="text-lg text-[var(--ink-light)] leading-relaxed">
                  An assessment is a structured way to take that question seriously. The point is not to sort you into a category. It is to give you an accurate account of how your mind actually works, and language precise enough to do something with.
                </p>
                <p className="text-lg text-[var(--ink-light)] leading-relaxed">
                  Whether or not it ends in a diagnosis, the aim is the same: a clearer understanding of yourself, and recommendations you can put to use at work, in school, in your relationships, and in how you treat yourself.
                </p>
              </div>
            </div>
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
                  Please reach out to schedule an <em className="text-[var(--gold)]">assessment</em> consult
                </h2>
              </div>
              <Link
                href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block shrink-0 text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300"
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
