export function Approach() {
  const pillars = [
    {
      number: "01",
      title: "Somatic Awareness",
      description:
        "We begin by tuning into the body—noticing sensations, breath patterns, and the physical manifestations of emotion. This foundation allows for deep, lasting transformation.",
    },
    {
      number: "02",
      title: "Embodied Processing",
      description:
        "Rather than analyzing experiences solely through the mind, we work with the body's innate intelligence to process and release held trauma, tension, and pain.",
    },
    {
      number: "03",
      title: "Creative Integration",
      description:
        "Drawing from my background as an artist, I incorporate creative and expressive elements into our work, allowing for non-verbal exploration and integration.",
    },
    {
      number: "04",
      title: "Relational Healing",
      description:
        "The therapeutic relationship itself becomes a space for healing attachment wounds, practicing new ways of being, and experiencing authentic connection.",
    },
  ]

  return (
    <section id="approach" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            A Somatic Path to Wholeness
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            My approach is grounded in the understanding that our bodies carry our histories. Through somatic psychotherapy, we access deeper layers of healing than talk therapy alone can reach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group p-8 md:p-10 bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-xs tracking-[0.3em] text-primary mb-4 block">
                {pillar.number}
              </span>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
