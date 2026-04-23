import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About | Dr. Madrone Love, PsyD",
  description: "Dr. Madrone Love is a licensed clinical psychologist in California. Education from UPenn, UC Berkeley, Wright Institute, and UCSF. Specialized in OCD, anxiety, trauma, and neurodivergent adults.",
}

const education = [
  { institution: "University of Pennsylvania", degree: "BA" },
  { institution: "UC Berkeley", degree: "MA" },
  { institution: "Wright Institute", degree: "PsyD, Clinical Psychology" },
  { institution: "University of Wisconsin-Madison", degree: "Predoctoral Internship" },
  { institution: "UCSF", degree: "Postdoctoral Fellowship" },
  { institution: "International OCD Foundation", degree: "ERP Training" },
  { institution: "I-CBT Institute", degree: "Inference-Based CBT" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero - Asymmetric editorial layout */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Image - Left, with artistic treatment */}
              <div className="lg:col-span-5">
                <div className="relative sticky top-32">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/headshot.jpg"
                      alt="Dr. Madrone Love"
                      fill
                      className="object-cover object-top grayscale-[20%]"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-full h-full border border-[var(--sage)] -z-10" />
                </div>
              </div>
              
              {/* Content - Right */}
              <div className="lg:col-span-7 lg:pl-8">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-6">
                  About
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--ink)] leading-[1.15] tracking-tight">
                  Dr. Madrone Love, PsyD
                </h1>
                
                <div className="mt-12 space-y-6 text-[var(--ink-light)] leading-relaxed">
                  <p className="font-serif text-xl text-[var(--ink)]">
                    There&apos;s a version of therapy that works like advice with credentials behind it. This isn&apos;t that.
                  </p>
                  
                  <p>
                    What I do is closer to joint investigation. Something keeps happening that you&apos;d prefer didn&apos;t, or there&apos;s a gap between the life you&apos;re building and how it actually feels to live it. We work on what&apos;s underneath, paying attention to how your mind moves when it encounters something it doesn&apos;t understand or would prefer to avoid.
                  </p>
                  
                  <p>
                    For OCD and anxiety, I use ERP and I-CBT, two evidence-based approaches focused on building a different relationship to intrusive thoughts. More broadly, I draw from Acceptance and Commitment Therapy, which has roots in Buddhist psychology and centers on careful observation of inner experience and clarifying what you actually value. I also work with trauma, neurodivergence, and relationship concerns.
                  </p>
                  
                  <p>
                    I teach graduate courses in multicultural psychology and ethics at CIIS and direct the certificate program at the Sati Center for Buddhist Studies. My research focuses on psychedelic-assisted therapy. The teaching sharpens my clinical work and the clinical work inspires my teaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education - Refined list */}
        <section className="py-24 bg-white border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-4">
                  Education & Training
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-0">
                  {education.map((item, index) => (
                    <div
                      key={item.institution}
                      className={`py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 ${
                        index !== education.length - 1 ? "border-b border-[var(--border)]" : ""
                      }`}
                    >
                      <span className="text-[var(--ink)]">{item.institution}</span>
                      <span className="text-sm text-[var(--ink-muted)]">{item.degree}</span>
                    </div>
                  ))}
                </div>
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
                  Ready to begin?
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
