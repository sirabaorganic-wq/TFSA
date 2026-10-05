import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Execution Insights | India Market Entry & Architecture Analysis — TFSA Global',
  description:
    'Read strategic insights on India market entry, startup architecture, GTM breakdowns, and common founder execution pitfalls from TFSA Global.',
  alternates: {
    canonical: '/insights',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
