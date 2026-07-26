import { Cormorant_Garamond, DM_Sans } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-thrive-serif",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-thrive-sans",
})

export default function ThriveLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${cormorant.variable} ${dmSans.variable}`}>{children}</div>
}
