import type { Metadata } from "next"
import { ThriveClient } from "@/components/thrive/thrive-client"

export const metadata: Metadata = {
  title: "Thrive Guide",
  robots: { index: false, follow: false },
}

export default function ThrivePage() {
  return <ThriveClient />
}
