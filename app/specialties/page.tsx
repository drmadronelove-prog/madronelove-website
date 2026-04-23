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
    description: "The problem isn't the intrusive thought. It's everything you've arranged around it: the checking, the reassurance, the quiet avoidance that made your world smaller so gradually you didn't notice. I use ERP and inference-based CBT to help you build a different relationship to uncertainty, one where you can let a thought be there without needing to solve it.",
  },
  {
    id: "complex-trauma",
    title: "Complex Trauma",
    description: "What people call \"overreacting\" is usually a precise response to conditions that no longer exist. You learned what was dangerous, what had to be hidden, what would get you left. Those lessons became automatic. The work is understanding what you built to survive, then discovering what else becomes possible.",
  },
  {
    id: "neurodivergence",
    title: "Neurodivergence",
    description: "Most advice about attention, organization, and emotional regulation assumes a particular kind of nervous system. If yours is different, the advice isn't slightly off. It's for someone else. I work with ADHD, autism, giftedness, and their overlaps, oriented toward how you actually work rather than how far you are from a standard that was never yours.",
  },
  {
    id: "relationships",
    title: "Relationship Concerns",
    description: "What repeats in your relationships isn't random. It usually traces back to what you learned early about what connection requires and what has to be sacrificed to keep it. Those strategies run quietly. They show up in how you fight, how you pull back, what you can't bring yourself to ask for. Seeing them clearly is what opens up room.",
  },
]

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Specialties */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-16">
              {specialties.map((specialty) => (
                <div
                  key={specialty.id}
                  id={specialty.id}
                  className="scroll-mt-24 max-w-3xl"
                >
                  <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)]">
                    {specialty.title}
                  </h2>
                  <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ketamine Section */}
        <section className="py-16 bg-[var(--soft-grey)]/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-lg text-[var(--charcoal)] italic">
                Ketamine-assisted psychotherapy available for selected clients.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--sage-green)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
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
