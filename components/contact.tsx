import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
              Contact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-balance">
              Begin Your Healing Journey
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-10">
              I offer a free 20-minute consultation to discuss your needs and see if we&apos;re a good fit. Therapy sessions are available in-person in Marin County and via telehealth throughout California.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-primary-foreground/70">Marin County, California</p>
                  <p className="text-sm text-primary-foreground/60">Telehealth available statewide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:hello@embodiedhealing.com"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    hello@embodiedhealing.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-primary-foreground/70" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+14151234567"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    (415) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card text-card-foreground p-8 md:p-10">
            <h3 className="font-serif text-2xl mb-6">Request a Consultation</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Tell me a little about what brings you here
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
