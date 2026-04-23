import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, GraduationCap } from "lucide-react"

export const metadata = {
  title: "About | Dr. Madrone Love, PsyD",
  description: "Dr. Madrone Love is a licensed clinical psychologist in California. Education from UPenn, UC Berkeley, Wright Institute, and UCSF. Specialized in OCD, anxiety, trauma, and neurodivergent adults.",
}

const education = [
  "University of Pennsylvania (BA)",
  "UC Berkeley (MA)",
  "Wright Institute (PsyD, Clinical Psychology)",
  "University of Wisconsin-Madison (Predoctoral Internship, University Health Services)",
  "UCSF (Postdoctoral Fellowship)",
  "International OCD Foundation (ERP)",
  "I-CBT Institute",
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
                
                <div className="mt-8 space-y-6 text-[var(--charcoal)] leading-relaxed">
                  <p>
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

        {/* Education Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-[var(--charcoal)] mb-10">
              Education & Training
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
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
