import type { Metadata } from "next"
import { GlowUpPageClient } from "@/components/glow-up/glow-up-page-client"

export const metadata: Metadata = {
  title: "Glow Up",
  robots: { index: false, follow: false },
}

export default function GlowUpPage() {
  return <GlowUpPageClient />
}
