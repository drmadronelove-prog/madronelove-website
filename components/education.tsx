import { GraduationCap, Palette, Heart, Award } from "lucide-react"

export function Education() {
  const credentials = [
    {
      icon: GraduationCap,
      institution: "California Institute of Integral Studies",
      degree: "M.A. in Counseling Psychology",
      focus: "Somatic Psychology Specialization",
    },
    {
      icon: Award,
      institution: "Brown University",
      degree: "Bachelor of Arts",
      focus: "Interdisciplinary Studies",
    },
    {
      icon: Palette,
      institution: "Professional Background",
      degree: "Fine Art Practice",
      focus: "Studio Art & Visual Expression",
    },
    {
      icon: Heart,
      institution: "Clinical Training",
      degree: "Marriage & Family Therapy",
      focus: "California Licensed MFT",
    },
  ]

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Education & Training
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
              A Foundation of Rigorous Training
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                My educational journey reflects my commitment to an integrative, embodied approach to healing. From the rigorous academic foundation at Brown University to the depth-oriented training at CIIS, I&apos;ve cultivated a practice that honors both intellectual understanding and somatic wisdom.
              </p>
              <p>
                My background as a practicing artist informs everything I do—bringing creativity, presence, and an appreciation for the non-linear nature of healing into each session.
              </p>
              <p>
                I continue to deepen my training through ongoing professional development in somatic therapies, women&apos;s health, and chronic pain management.
              </p>
            </div>
          </div>

          {/* Right Column - Credentials */}
          <div className="space-y-6">
            {credentials.map((credential) => (
              <div
                key={credential.institution}
                className="flex gap-6 p-6 bg-card border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {credential.institution}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-1">
                    {credential.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {credential.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
