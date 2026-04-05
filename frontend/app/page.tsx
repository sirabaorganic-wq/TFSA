import type { Metadata } from 'next'
import Link from 'next/link'
import { PremiumButton, PremiumButtonInline } from '@/components/PremiumButton'
import { PremiumCard, FrameworkShowcase, SectionCard } from '@/components/PremiumCard'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'The Freedom Startup Architect™ | TFSA Consulting',
  description: 'Strategic architecture consulting for startup founders. We eliminate founder dependency and architect sustainable growth systems for India market entry and scale.',
  openGraph: {
    title: 'The Freedom Startup Architect™ | TFSA Consulting',
    description: 'Strategic architecture consulting for startup founders.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="bg-[#0F1419]">
      {/* Hero Section */}
      <section className="bg-[#0F1419] min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Text Block (70% width equivalent) */}
            <div className="lg:col-span-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FAFAF8] leading-tight mb-2">
                Design Your Business.
              </h1>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#B8956A] leading-tight mb-8 sm:mb-10">
                Build Your Freedom.
              </h2>
              <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Strategic architecture for founders who want to build lasting, independent, scalable businesses. From market entry to execution to freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PremiumButton href="/about" className="text-center">
                  Explore Our Approach
                </PremiumButton>
                <PremiumButton href="/contact" variant="secondary" className="text-center">
                  Book a Strategic Call
                </PremiumButton>
              </div>
            </div>

            {/* Right: Premium Framework Graphic (Abstract Lines) */}
            <div className="lg:col-span-1 flex items-center justify-center h-80 lg:h-full">
              <svg className="w-full h-full max-w-sm" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Abstract framework lines - premium geometric design */}
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#B8956A', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#4B9B8E', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>

                {/* Base foundation structure */}
                <path d="M 50 350 L 350 350" stroke="#374151" strokeWidth="2" fill="none" />

                {/* Vertical pillars */}
                <path d="M 100 350 L 100 100" stroke="#B8956A" strokeWidth="3" opacity="0.8" />
                <path d="M 200 350 L 200 80" stroke="url(#grad1)" strokeWidth="3" opacity="0.9" />
                <path d="M 300 350 L 300 120" stroke="#4B9B8E" strokeWidth="3" opacity="0.7" />

                {/* Horizontal layers */}
                <path d="M 50 280 L 350 280" stroke="#1F2937" strokeWidth="1" opacity="0.5" strokeDasharray="5,5" />
                <path d="M 50 210 L 350 210" stroke="#1F2937" strokeWidth="1" opacity="0.5" strokeDasharray="5,5" />
                <path d="M 50 140 L 350 140" stroke="#1F2937" strokeWidth="1" opacity="0.5" strokeDasharray="5,5" />

                {/* Top capstone */}
                <circle cx="200" cy="50" r="15" stroke="#B8956A" strokeWidth="2" fill="none" />
                <path d="M 200 35 L 200 20" stroke="#B8956A" strokeWidth="2" />

                {/* Connecting lines for network effect */}
                <path d="M 100 200 L 200 150" stroke="#4B9B8E" strokeWidth="1.5" opacity="0.4" />
                <path d="M 200 150 L 300 180" stroke="#4B9B8E" strokeWidth="1.5" opacity="0.4" />
                <path d="M 100 120 L 300 150" stroke="#B8956A" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Problem Section */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1419] mb-4 sm:mb-6">
            The Founder Dependency Problem
          </h2>
          <p className="text-[#1F2937] text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Most startups grow but don&apos;t scale. They depend entirely on their founder for decisions, execution, and vision. When scaling hits, everything breaks.
          </p>
          <p className="text-[#374151] text-lg leading-relaxed">
            Market entry, especially in India, adds complexity: navigating regulations, building distribution, understanding local dynamics, and maintaining strategic clarity—all while building a company that works without you.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Solution Section */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
            How TFSA Bridges Strategy and Execution
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-[#B8956A] font-semibold text-lg mb-2">We architect, we don&apos;t advise.</h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                Every recommendation is operational, executable, and tied to business outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-[#B8956A] font-semibold text-lg mb-2">We eliminate founder dependency through systems.</h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                You remain the visionary. We build the structure that lets your team execute without you.
              </p>
            </div>
            <div>
              <h3 className="text-[#B8956A] font-semibold text-lg mb-2">We specialize in market entry and scale.</h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                India market complexity, GTM strategy, and execution architecture are our core domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 3-Phase Architecture Model */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1419] mb-8 sm:mb-12 text-center">
            The TFSA 3-Phase Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Phase 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1419] mb-3 sm:mb-4">Market Entry Architecture</h3>
              <p className="text-[#374151] text-sm sm:text-base mb-5 sm:mb-6">
                Understand your market, position your offering, design your GTM strategy.
              </p>
              <ul className="space-y-2 text-sm text-[#374151]">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Market analysis and competitive positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>India-specific regulatory and operational setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Initial org structure and team design</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-4">GTM & Distribution Design</h3>
              <p className="text-[#374151] mb-6">
                Build repeatable, scalable distribution channels and go-to-market systems.
              </p>
              <ul className="space-y-2 text-sm text-[#374151]">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Distribution strategy and channel design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Sales and customer acquisition systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Leadership team and delegation framework</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-4">Execution & Scale</h3>
              <p className="text-[#374151] mb-6">
                Eliminate founder dependency and build systems that scale without breaking.
              </p>
              <ul className="space-y-2 text-sm text-[#374151]">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Execution systems and decision frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Team scaling and operational structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span>Founder freedom and strategic positioning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Framework Teaser */}
      <section className="bg-[#0F1419] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FrameworkShowcase
            title="The Founder Architecture Framework™"
            description="Rajesh Thakur&apos;s proprietary framework for building founder-independent, scalable startups."
            ctaLabel="Explore the Framework"
            ctaHref="/insights"
          >
            <div className="space-y-4">
              <p className="text-[#D1D5DB] text-base">
                A structured approach to startup architecture covering:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-sm text-[#9CA3AF]">
                  <strong className="text-[#B8956A]">Model:</strong> Founder Architecture Model
                </div>
                <div className="text-sm text-[#9CA3AF]">
                  <strong className="text-[#B8956A]">Momentum:</strong> GTM & Distribution
                </div>
                <div className="text-sm text-[#9CA3AF]">
                  <strong className="text-[#B8956A]">Money:</strong> Financial Architecture
                </div>
                <div className="text-sm text-[#9CA3AF]">
                  <strong className="text-[#B8956A]">Freedom:</strong> Founder Independence
                </div>
              </div>
            </div>
          </FrameworkShowcase>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Closing CTA */}
      <section className="bg-[#0F1419] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-6">
            Ready to Transform Your Startup?
          </h2>
          <p className="text-[#D1D5DB] text-lg mb-8">
            Let&apos;s discuss your growth challenges and explore how TFSA can help you build a truly independent, scalable business.
          </p>
          <PremiumButton href="/contact" className="justify-center">
            Book a Strategic Consultation
          </PremiumButton>
        </div>
      </section>
    </div>
  )
}
