import type { Metadata } from "next"
import { RadioPageClient } from "@/components/radio/radio-page-client"

export const metadata: Metadata = {
  title: "Radio",
  robots: { index: false, follow: false },
}

export default function RadioPage() {
  return <RadioPageClient />
}
