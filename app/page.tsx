import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const specialties = [
  {
    title: "OCD & Anxiety",
    description: "Evidence-based exposure therapy and response prevention.",
    href: "/specialties#ocd-anxiety",
  },
  {
    title: "Complex Trauma",
    description: "Attachment injury, dissociation, and relational patterns.",
    href: "/specialties#complex-trauma",
  },
  {
    title: "Neurodivergent Adults",
    description: "ADHD, autism, giftedness, twice-exceptional.",
    href: "/specialties#neurodivergent",
  },
  {
    title: "Relationships",
    description: "Relational patterns, intimacy, communication, and conflict.",
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
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--charcoal)] leading-tight text-balance">
                Therapy for adults who think deeply
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                Clinical psychology for high-achieving professionals navigating complexity
              </p>
              <div className="mt-10">
                <Link
                  href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--adobe-clay)] px-6 py-3 text-base font-medium text-white hover:bg-[var(--adobe-clay)]/90 transition-colors"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 hidden lg:block">
            <div className="w-full h-full bg-[var(--sage-green)]/20 rounded-l-full" />
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/headshot.jpg"
                  alt="Dr. Madrone Love"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg object-cover w-full aspect-[4/5]"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--sage-green)]/30 rounded-full -z-10" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-[var(--charcoal)] leading-relaxed">
                  My clients are high-achieving professionals whose intelligence has been both an asset and a complication. They think fast, notice patterns others miss, and often feel ahead of the room and alone in it.
                </p>
                <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
                  Our work creates space to think clearly about what you actually want.
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-[var(--adobe-clay)] font-medium hover:gap-3 transition-all"
                >
                  Learn more about my approach
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Preview */}
        <section className="py-20 bg-[var(--soft-grey)]/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--charcoal)] text-center mb-12">
              Areas of Focus
            </h2>
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
                  <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                    {specialty.description}
                  </p>
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
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
              Ready to work together?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Schedule a free consultation to discuss how we might work together.
            </p>
            <Link
              href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-medium text-[var(--muted-olive)] hover:bg-white/90 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
