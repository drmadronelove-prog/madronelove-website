import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[var(--soft-grey)] border-t border-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-[var(--charcoal)]">
            Dr. Madrone Love, PsyD | PSY35899 |{" "}
            <Link 
              href="mailto:therapy@madronelove.com" 
              className="hover:text-[var(--adobe-clay)] transition-colors"
            >
              therapy@madronelove.com
            </Link>{" "}
            |{" "}
            <Link 
              href="tel:415-484-3302" 
              className="hover:text-[var(--adobe-clay)] transition-colors"
            >
              415-484-3302
            </Link>
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            Berkeley, Oakland, San Francisco | Telehealth throughout California
          </p>
        </div>
      </div>
    </footer>
  )
}
