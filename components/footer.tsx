import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="font-serif text-xl tracking-wide">
              Embodied Healing
            </Link>
            <p className="text-sm text-background/60 mt-2">
              Somatic Psychotherapy in Marin County
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <span className="text-background/60">
              Licensed Marriage & Family Therapist
            </span>
            <span className="hidden md:inline text-background/40">|</span>
            <span className="text-background/60">
              California License #XXXXX
            </span>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
          <p>© {new Date().getFullYear()} Embodied Healing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background/70 transition-colors">
              Good Faith Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
