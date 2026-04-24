import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Editorial asymmetric layout */}
        <section className="min-h-screen flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 py-32">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              {/* Text - Left side */}
              <div className="lg:col-span-5 lg:pr-8">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--gold)] mb-8">
                  Clinical Psychology
                </p>
                <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-light text-[var(--ink)] leading-[1.1] tracking-tight">
                  The <em>process</em><br />
                  behind<br />
                  the solution
                </h1>
                <div className="mt-16">
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
              
              {/* Image - Right side, larger */}
              <div className="lg:col-span-7 lg:pl-8">
                <div className="relative scale-90 origin-top">
                  <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[var(--sage-muted)]">
                    <Image
                      src="/images/headshot.jpg"
                      alt="Dr. Madrone Love"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  {/* Subtle frame accent */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--sage)] -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Section - Lead with credentials */}
        <section className="py-32 bg-[var(--sage-muted)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)]">
                  Training
                </p>
              </div>
              <div className="lg:col-span-8">
                <ul className="space-y-4 text-[var(--ink)]">
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] mt-2.5 shrink-0" />
                    <span>PsyD, Clinical Psychology, The Wright Institute</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] mt-2.5 shrink-0" />
                    <span>Predoctoral Internship, University of Wisconsin-Madison</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] mt-2.5 shrink-0" />
                    <span>Postdoctoral Fellowship, UCSF</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] mt-2.5 shrink-0" />
                    <span>Specialty Training in ERP, IOCDF</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] mt-2.5 shrink-0" />
                    <span>Inference-Based CBT (I-CBT), I-CBT Institute</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties - Minimal, text-focused */}
        <section className="py-32 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-16">
              Areas of Focus
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
              <div className="group">
                <Link href="/specialties#ocd-anxiety" className="block">
                  <span className="text-xs font-medium tracking-wide text-[var(--ink-muted)]">01</span>
                  <h3 className="mt-3 font-serif text-2xl text-[var(--ink)] group-hover:text-[var(--clay)] transition-colors duration-300">
                    OCD & Anxiety
                  </h3>
                  <p className="mt-4 text-[var(--ink-muted)] leading-relaxed">
                    Building a different relationship to uncertainty, where you can let a thought be there without needing to solve it.
                  </p>
                </Link>
              </div>
              
              <div className="group">
                <Link href="/specialties#complex-trauma" className="block">
                  <span className="text-xs font-medium tracking-wide text-[var(--ink-muted)]">02</span>
                  <h3 className="mt-3 font-serif text-2xl text-[var(--ink)] group-hover:text-[var(--clay)] transition-colors duration-300">
                    Complex Trauma
                  </h3>
                  <p className="mt-4 text-[var(--ink-muted)] leading-relaxed">
                    Understanding what you built to survive, then discovering what else becomes possible.
                  </p>
                </Link>
              </div>
              
              <div className="group">
                <Link href="/specialties#neurodivergence" className="block">
                  <span className="text-xs font-medium tracking-wide text-[var(--ink-muted)]">03</span>
                  <h3 className="mt-3 font-serif text-2xl text-[var(--ink)] group-hover:text-[var(--clay)] transition-colors duration-300">
                    Neurodivergence
                  </h3>
                  <p className="mt-4 text-[var(--ink-muted)] leading-relaxed">
                    Working with how you actually work, rather than how far you are from a standard that was never yours.
                  </p>
                </Link>
              </div>
              
              <div className="group">
                <Link href="/specialties#relationships" className="block">
                  <span className="text-xs font-medium tracking-wide text-[var(--ink-muted)]">04</span>
                  <h3 className="mt-3 font-serif text-2xl text-[var(--ink)] group-hover:text-[var(--clay)] transition-colors duration-300">
                    Relationships
                  </h3>
                  <p className="mt-4 text-[var(--ink-muted)] leading-relaxed">
                    Seeing the patterns that run quietly in how you fight, how you pull back, what you can&apos;t bring yourself to ask for.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-[var(--stone)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-4">
                  Next step
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--ink)] font-light">
                  Begin with a consultation
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
