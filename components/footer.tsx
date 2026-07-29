import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-1">
              <p className="font-serif text-lg text-[var(--ink)]">
                Dr. Madrone Love, PsyD
              </p>
              <p className="text-sm text-[var(--ink-muted)]">
                Licensed Clinical Psychologist
              </p>
              <p className="text-sm text-[var(--ink-muted)]">
                PSY35899
              </p>
            </div>
            
            <div className="flex flex-col md:items-end gap-1 text-sm text-[var(--ink-muted)]">
              <Link 
                href="mailto:therapy@madronelove.com" 
                className="hover:text-[var(--ink)] transition-colors duration-300"
              >
                therapy@madronelove.com
              </Link>
              <Link 
                href="tel:415-484-3302" 
                className="hover:text-[var(--ink)] transition-colors duration-300"
              >
                415-484-3302
              </Link>
              <p className="mt-2">
                Berkeley, CA
              </p>
              <p>
                Telehealth throughout California
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--ink-muted)]">
              This site does not provide crisis services. If you are in crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
