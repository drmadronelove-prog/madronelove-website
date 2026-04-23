import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Approach } from "@/components/approach"
import { Services } from "@/components/services"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Approach />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
