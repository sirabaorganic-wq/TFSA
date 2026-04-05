import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'The Freedom Startup Architect™ | Design Your Business. Build Your Freedom',
  description: 'Strategic architecture consulting for startup founders. Design Your Business. Build Your Freedom. We eliminate founder dependency and architect sustainable growth systems for India market entry and scale.',
  generator: 'v0.app',
  openGraph: {
    title: 'The Freedom Startup Architect™ | Design Your Business. Build Your Freedom',
    description: 'Strategic architecture consulting for startup founders. Design Your Business. Build Your Freedom.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Freedom Startup Architect™',
    description: 'Design Your Business. Build Your Freedom.',
  },
  icons: {
    icon: '/tfsa-logo.png',
    apple: '/tfsa-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_playfair.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#0F1419] text-[#FAFAF8] dark">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
