import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Areas of Focus | Dr. Madrone Love, PsyD",
  description: "Specialized treatment for OCD, anxiety, complex trauma, neurodivergent adults, and relationships. Evidence-based therapy with ketamine-assisted options available.",
}

const specialties = [
  {
    id: "ocd-anxiety",
    number: "01",
    title: "OCD & Anxiety",
    description: "The problem isn't the intrusive thought. It's everything you've arranged around it: the checking, the reassurance, the quiet avoidance that made your world smaller so gradually you didn't notice. I use ERP and inference-based CBT to help you build a different relationship to uncertainty, one where you can let a thought be there without needing to solve it.",
  },
  {
    id: "complex-trauma",
    number: "02",
    title: "Complex Trauma",
    description: "What people call \"overreacting\" is usually a precise response to conditions that no longer exist. You learned what was dangerous, what had to be hidden, what would get you left. Those lessons became automatic. The work is understanding what you built to survive, then discovering what else becomes possible.",
  },
  {
    id: "neurodivergence",
    number: "03",
    title: "Neurodivergence",
    description: "Most advice about attention, organization, and emotional regulation assumes a particular kind of nervous system. If yours is different, the advice isn't slightly off. It's for someone else. I work with ADHD, autism, giftedness, and their overlaps, oriented toward how you actually work rather than how far you are from a standard that was never yours. In addition to supporting neurodivergent individuals, I also work with their partners and family members to help them navigate their neurodiverse relationships.",
  },
  {
    id: "relationships",
    number: "04",
    title: "Relationships",
    description: "What repeats in your relationships isn't random. It usually traces back to what you learned early about what connection requires and what has to be sacrificed to keep it. Those strategies run quietly. They show up in how you fight, how you pull back, what you can't bring yourself to ask for. Seeing them clearly is what opens up room.",
  },
]

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="pt-8 md:pt-12 pb-6 md:pb-9">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h1 className="font-[family-name:var(--font-classic)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.1] tracking-tight max-w-3xl">
                  Areas of Focus
                </h1>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-square max-w-md mx-auto border-[6px] border-[var(--gold)] p-2 bg-white shadow-xl">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/illustration-woman.jpg"
                      alt="Illustration of a woman seated reading"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties - Editorial long-form */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="space-y-0">
              {specialties.map((specialty, index) => (
                <div
                  key={specialty.id}
                  id={specialty.id}
                  className={`scroll-mt-32 ${
                    index === 0
                      ? "pt-9 lg:pt-12 pb-16 lg:pb-20"
                      : "py-16 lg:py-20 border-t border-[var(--border)]"
                  }`}
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-4">
                      <span className="text-xs font-medium tracking-wide uppercase text-[var(--ink-muted)]">
                        {specialty.number}
                      </span>
                      <h2 className="mt-3 font-serif text-3xl text-[var(--ink)] font-light">
                        {specialty.title}
                      </h2>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-lg text-[var(--ink-light)] leading-relaxed">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
                <h2 className="font-serif text-3xl text-[var(--ink)] font-light">
                  Schedule a consultation
                </h2>
              </div>
              <Link
                href="https://calendar.app.google/wXJjtG5EBW9ZDy2R9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--clay)] hover:border-[var(--clay)] transition-colors duration-300"
              >
                Book
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
