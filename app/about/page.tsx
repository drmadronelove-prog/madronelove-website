import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, GraduationCap, BookOpen, Heart } from "lucide-react"

export const metadata = {
  title: "About | Dr. Madrone Love, PsyD",
  description: "Dr. Madrone Love is a licensed clinical psychologist in California. Education from UPenn, UC Berkeley, Wright Institute, and UCSF. Specialized in OCD, anxiety, trauma, and neurodivergent adults.",
}

const education = [
  "University of Pennsylvania",
  "UC Berkeley",
  "Wright Institute (PsyD)",
  "UCSF (Postdoctoral Fellowship)",
  "International OCD Foundation (ERP)",
  "I-CBT Institute",
]

const approach = [
  { label: "Evidence-based & rigorous", icon: BookOpen },
  { label: "Buddhist psychology informed", icon: Heart },
  { label: "Integrative", icon: GraduationCap },
  { label: "Short or long term", icon: ArrowRight },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/headshot.jpg"
                  alt="Dr. Madrone Love"
                  width={600}
                  height={750}
                  className="rounded-lg shadow-xl object-cover w-full aspect-[4/5]"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[var(--sage-green)]/20 rounded-full -z-10" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--adobe-clay)]/20 rounded-full -z-10" />
              </div>
              
              <div className="order-1 lg:order-2">
                <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] leading-tight">
                  Dr. Madrone Love, PsyD
                </h1>
                <p className="mt-2 text-[var(--adobe-clay)] font-medium">
                  Licensed Clinical Psychologist
                </p>
                
                <div className="mt-8 space-y-6 text-[var(--charcoal)] leading-relaxed">
                  <p>
                    My clients are people whose intelligence has been both an asset and a complication. They think fast, notice everything, and often feel ahead of the room and alone in it.
                  </p>
                  <p>
                    Many come during overwhelm, major transitions, or when old strategies have stopped working. Our work creates space to slow down enough to think clearly about what you want, rather than just surviving what&apos;s in front of you.
                  </p>
                  <p>
                    My approach integrates evidence-based treatment with Buddhist psychology. I help people understand how their minds work so they can work with them rather than against them. When people can think about their experience instead of just surviving it, they find choice about how they want to live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)] mb-10">
              Education & Training
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {education.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-[var(--warm-ivory)] rounded-lg"
                >
                  <GraduationCap className="h-5 w-5 text-[var(--sage-green)] flex-shrink-0" />
                  <span className="text-[var(--charcoal)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching & Leadership */}
        <section className="py-16 bg-[var(--soft-grey)]/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)] mb-10">
              Teaching & Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-medium text-[var(--charcoal)]">
                  Assistant Professor
                </h3>
                <p className="mt-2 text-[var(--muted-foreground)]">
                  California Institute of Integral Studies
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-medium text-[var(--charcoal)]">
                  Director
                </h3>
                <p className="mt-2 text-[var(--muted-foreground)]">
                  Sati Center for Buddhist Studies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)] mb-10">
              My Approach
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center p-6 bg-[var(--warm-ivory)] rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--sage-green)]/20 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-[var(--muted-olive)]" />
                  </div>
                  <span className="text-[var(--charcoal)] font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--sage-green)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)] mb-6">
              Ready to begin?
            </h2>
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
