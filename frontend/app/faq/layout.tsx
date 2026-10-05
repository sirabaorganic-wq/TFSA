import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Engagement & Advisory FAQ — TFSA Global',
  description:
    'Get direct answers to common questions about TFSA Global engagements, advisory scope, India expansion timelines, deliverables, and working models.',
  alternates: {
    canonical: '/faq',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
