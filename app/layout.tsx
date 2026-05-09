import type { Metadata } from 'next'
import { Playfair_Display, Lora, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-classic"
});

export const metadata: Metadata = {
  title: 'Dr. Madrone Love, PsyD | Clinical Psychology | Berkeley, San Francisco',
  description: 'Clinical psychology for high-achieving professionals navigating complexity. Evidence-based treatment integrating Buddhist psychology. OCD, anxiety, trauma, neurodivergent adults.',
  keywords: ['clinical psychologist', 'Berkeley therapist', 'OCD treatment', 'anxiety therapy', 'complex trauma', 'neurodivergent adults', 'Buddhist psychology'],
  icons: {
    icon: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${playfair.variable} ${lora.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
