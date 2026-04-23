import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Abstract organic forms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Somatic Psychotherapy in Marin County
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground mb-8 text-balance">
            Pain, Shame & Change
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Specialized therapy for women navigating life transitions, chronic pain, and the profound journey of embodied healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Begin Your Journey
            </Link>
            <Link
              href="#approach"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground text-sm tracking-widest uppercase hover:bg-foreground/5 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
