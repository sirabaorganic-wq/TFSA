import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact TFSA Global | Schedule an India Entry Assessment',
  description:
    'Connect with TFSA Global to schedule a strategic India entry or business architecture assessment. Start your structured commercial execution.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
