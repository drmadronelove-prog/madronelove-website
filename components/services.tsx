export function Services() {
  const services = [
    {
      title: "Life Transitions",
      description:
        "Support through major life changes—becoming a mother, navigating relationship shifts, career transitions, loss, and the profound changes of perimenopause and menopause.",
    },
    {
      title: "Chronic Pain & Illness",
      description:
        "Somatic approaches to understanding and working with chronic pain, fibromyalgia, autoimmune conditions, and the emotional weight of living with persistent physical challenges.",
    },
    {
      title: "Body Image & Shame",
      description:
        "Healing the relationship with your body, releasing internalized shame, and cultivating embodied self-compassion and acceptance across all life stages.",
    },
    {
      title: "Trauma & Anxiety",
      description:
        "Gentle, body-based approaches to processing trauma and regulating the nervous system, creating felt safety and resilience.",
    },
    {
      title: "Perinatal Mental Health",
      description:
        "Specialized support for the profound physical and emotional transformation of pregnancy, postpartum, and early motherhood.",
    },
    {
      title: "Creative Exploration",
      description:
        "For those drawn to non-verbal expression, incorporating art, movement, and other creative modalities into the therapeutic process.",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Areas of Focus
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I work with women at every stage of life, specializing in the unique challenges that arise in women&apos;s bodies and lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 md:p-10 hover:bg-background transition-colors"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
