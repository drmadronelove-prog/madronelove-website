import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Specialties | Dr. Madrone Love, PsyD",
  description: "Specialized treatment for OCD, anxiety, complex trauma, neurodivergent adults, and relationships. Evidence-based therapy with ketamine-assisted options available.",
}

const specialties = [
  {
    id: "ocd-anxiety",
    title: "OCD & Anxiety",
    description: "Evidence-based exposure therapy and response prevention. Specialized training through the International OCD Foundation and I-CBT Institute.",
    details: [
      "Obsessive-compulsive disorder (OCD)",
      "Generalized anxiety",
      "Social anxiety",
      "Panic disorder",
      "Health anxiety",
    ],
  },
  {
    id: "complex-trauma",
    title: "Complex Trauma",
    description: "Attachment injury, dissociation, relational patterns rooted in early wounding or systemic harm.",
    details: [
      "Developmental trauma",
      "Attachment difficulties",
      "Dissociative experiences",
      "Relational patterns",
      "Systemic & intergenerational harm",
    ],
  },
  {
    id: "neurodivergent",
    title: "Neurodivergent Adults",
    description: "ADHD, autism, giftedness, twice-exceptional. An approach that helps you work with your mind rather than against it.",
    details: [
      "ADHD in adults",
      "Autism spectrum",
      "Giftedness",
      "Twice-exceptional (2e)",
      "Executive function support",
    ],
  },
  {
    id: "relationships",
    title: "Relationships",
    description: "Relational patterns, intimacy, communication, conflict and connection.",
    details: [
      "Attachment styles",
      "Communication patterns",
      "Intimacy & vulnerability",
      "Conflict resolution",
      "Boundaries",
    ],
  },
]

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[var(--warm-ivory)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] leading-tight max-w-3xl">
              Areas of Specialization
            </h1>
            <p className="mt-6 text-lg text-[var(--muted-foreground)] max-w-2xl">
              I provide evidence-based treatment tailored to the unique needs of each client, integrating rigorous clinical practice with contemplative approaches.
            </p>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12">
              {specialties.map((specialty, index) => (
                <div
                  key={specialty.id}
                  id={specialty.id}
                  className={`grid lg:grid-cols-2 gap-8 items-start scroll-mt-24 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)]">
                      {specialty.title}
                    </h2>
                    <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                  <div className={`bg-[var(--soft-grey)]/50 p-6 rounded-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-sm font-medium text-[var(--muted-olive)] uppercase tracking-wide mb-4">
                      Areas Addressed
                    </h3>
                    <ul className="space-y-3">
                      {specialty.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-3 text-[var(--charcoal)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--adobe-clay)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ketamine Section */}
        <section className="py-16 bg-[var(--muted-olive)]/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)] mb-6">
                Ketamine-Assisted Psychotherapy
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                Ketamine-assisted psychotherapy available for transformational work. This approach can be particularly helpful for treatment-resistant depression, anxiety, and facilitating deeper therapeutic breakthroughs.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-[var(--adobe-clay)] font-medium hover:gap-3 transition-all"
              >
                Contact me to learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--sage-green)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)] mb-6">
              Find the support you need
            </h2>
            <p className="text-lg text-[var(--charcoal)]/80 max-w-2xl mx-auto mb-10">
              Schedule a consultation to discuss your unique situation and how we might work together.
            </p>
            <Link
              href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--charcoal)] px-8 py-4 text-base font-medium text-white hover:bg-[var(--charcoal)]/90 transition-colors"
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
