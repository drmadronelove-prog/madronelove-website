import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const specialties = [
  {
    title: "OCD & Anxiety",
    href: "/specialties#ocd-anxiety",
  },
  {
    title: "Complex Trauma",
    href: "/specialties#complex-trauma",
  },
  {
    title: "Neurodivergence",
    href: "/specialties#neurodivergence",
  },
  {
    title: "Relationship Concerns",
    href: "/specialties#relationships",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--charcoal)] leading-tight text-balance">
                  The question behind the question
                </h1>
                <p className="mt-6 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                  Clinical psychology that takes the problem seriously enough to understand it
                </p>
                <div className="mt-10">
                  <Link
                    href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--adobe-clay)] px-6 py-3 text-base font-medium text-white hover:bg-[var(--adobe-clay)]/90 transition-colors"
                  >
                    Book a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  src="/images/headshot.jpg"
                  alt="Dr. Madrone Love"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl object-cover w-full aspect-[4/5]"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[var(--sage-green)]/20 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Brief Intro Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-[var(--charcoal)] leading-relaxed">
                You probably already have a theory about what&apos;s wrong. Most people do by the time they call. The theory is usually close but not quite right. What changes things isn&apos;t a better theory. It&apos;s learning to see how the pattern actually works: what sustains it, what it costs, what would have to shift.
              </p>
            </div>
          </div>
        </section>

        {/* Specialties Preview */}
        <section className="py-20 bg-[var(--soft-grey)]/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((specialty) => (
                <Link
                  key={specialty.title}
                  href={specialty.href}
                  className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--adobe-clay)] transition-colors">
                    {specialty.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--adobe-clay)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[var(--muted-olive)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-8">
              Schedule a consultation
            </h2>
            <Link
              href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-medium text-[var(--muted-olive)] hover:bg-white/90 transition-colors"
            >
              Book
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
