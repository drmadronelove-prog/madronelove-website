import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4]">
            <Image
              src="/images/about.jpg"
              alt="Therapist portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
              Where Art Meets Healing
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                As a Marriage and Family Therapist with a background in fine art, I bring a unique lens to the therapeutic process. My approach honors the body&apos;s wisdom and the creative spirit that lives within each of us.
              </p>
              <p>
                I specialize in working with women across the lifespan who are navigating significant transitions—whether that&apos;s entering motherhood, facing midlife changes, processing grief, or finding their way through chronic pain.
              </p>
              <p>
                My training at the California Institute of Integral Studies (CIIS) and my undergraduate work at Brown University have shaped my integrative, somatic approach. I believe the body holds our stories, and through gentle, embodied work, we can release what no longer serves us.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-serif text-xl italic text-foreground">
                &ldquo;The body remembers what the mind forgets. My work is about listening to its wisdom.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
