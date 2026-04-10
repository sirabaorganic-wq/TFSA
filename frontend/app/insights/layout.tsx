import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | TFSA Global — India Market & Architecture Thinking',
  description:
    'Deep dives into India market entry, startup architecture, case breakdowns, and founder mistakes. Authority content from TFSA Global.',
  openGraph: {
    title: 'Insights | TFSA Global',
    description:
      'Analysis on India expansion, startup architecture, and execution systems from TFSA Global.',
    type: 'website',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
