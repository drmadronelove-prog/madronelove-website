import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Dr. Madrone Love, PsyD | Clinical Psychology | Berkeley, Oakland, San Francisco',
  description: 'Clinical psychology for high-achieving professionals navigating complexity. Evidence-based treatment integrating Buddhist psychology. OCD, anxiety, trauma, neurodivergent adults.',
  keywords: ['clinical psychologist', 'Berkeley therapist', 'OCD treatment', 'anxiety therapy', 'complex trauma', 'neurodivergent adults', 'Buddhist psychology'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
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
      <body className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
