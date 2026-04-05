import type { Metadata } from 'next'
import Link from 'next/link'
import { PremiumButton } from '@/components/PremiumButton'
import { FrameworkShowcase } from '@/components/PremiumCard'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Rajesh Thakur | TFSA Founder - Strategic Consulting',
  description: 'Meet Rajesh Thakur, founder of TFSA. 20+ years of expertise in startup architecture, India market entry, and founder-independent growth systems.',
}

export default function Founder() {
  return (
    <div className="bg-[#0F1419]">
      {/* Hero - Authority Statement */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FAFAF8] leading-tight mb-6 sm:mb-8">
            Rajesh Thakur
          </h1>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#B68817] leading-tight mb-8 sm:mb-10">
            Architect of Founder Freedom
          </p>
          <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 max-w-2xl">
            Strategic architect and founder advisor. 20+ years architecting startups for independent growth. Helped 50+ founders build truly scalable, founder-free organizations that stand the test of market forces and scaling pressure.
          </p>
          <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            After observing founders struggle with the same problems repeatedly, Rajesh founded TFSA to bring a different philosophy: execution-backed strategy, founder-centric thinking, and the belief that sustainable freedom comes from systems, not heroics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://www.linkedin.com/in/rajesh-thakur-entrepreneur/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-all duration-150 shadow-sm hover:shadow-md text-center"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="mailto:srajesh2006@gmail.com"
              className="px-6 py-3 border border-[#B68817] text-[#B68817] rounded-sm font-medium hover:bg-[#B68817]/10 transition-all duration-150 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Featured Framework Section */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1419] mb-6 sm:mb-8">
            The TFSA Framework
          </h2>
          <div className="h-1 w-20 bg-[#B68817] mb-10 sm:mb-12"></div>
          <div className="bg-white border border-[#E5E7EB] rounded-sm p-8 sm:p-10 md:p-12 mb-8">
            <p className="text-[#374151] text-lg leading-relaxed mb-6">
              Rajesh&apos;s proprietary methodology, refined over two decades and 50+ founder engagements, focuses on three interconnected pillars: <strong>Strategic Clarity, Operational Systems, and Founder Independence</strong>.
            </p>
            <p className="text-[#374151] text-lg leading-relaxed">
              Unlike traditional consulting that leaves you with recommendations, TFSA stays hands-on during implementation to ensure every strategy becomes embedded in your organization&apos;s DNA. The framework moves founders from doing everything to architecting everything.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Core Expertise */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
            Areas of Specialization
          </h2>
          <div className="h-1 w-20 bg-[#B68817] mb-12 sm:mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-[#FAFAF8] mb-4">Market Entry & Expansion</h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">
                Deep expertise in India market entry, navigating regulatory complexity, and building distribution networks in emerging markets.
              </p>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li>• Market research and positioning</li>
                <li>• Regulatory navigation</li>
                <li>• Local team building</li>
                <li>• Distribution design</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-[#FAFAF8] mb-4">Founder Dependency Elimination</h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">
                Specialized in diagnosing founder bottlenecks and building organizational systems that scale without founder involvement.
              </p>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li>• Organizational design</li>
                <li>• Decision frameworks</li>
                <li>• Team scaling systems</li>
                <li>• Execution architecture</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-[#FAFAF8] mb-4">GTM & Distribution Strategy</h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">
                Built repeatable go-to-market systems and sales architectures that drive sustainable customer acquisition.
              </p>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li>• Channel strategy</li>
                <li>• Sales system design</li>
                <li>• Revenue model optimization</li>
                <li>• Growth metrics</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-[#FAFAF8] mb-4">Startup Scaling Systems</h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">
                Expertise in architecting startups to scale 10x-100x without breaking operationally or culturally.
              </p>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li>• Team structure evolution</li>
                <li>• Process systemization</li>
                <li>• Scaling playbooks</li>
                <li>• Multi-market operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Philosophy Section */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-8 sm:mb-12 text-center">
            The Rajesh Philosophy
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-3">
                Founder Independence is the Goal
              </h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                My work succeeds when you don&apos;t need me. Every strategic decision I make is designed to build your independence, not my consulting dependency.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-3">
                Execution Over Perfection
              </h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                A good plan executed today beats a perfect plan executed never. We focus on operationalizing strategy and learning from real-world implementation.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-3">
                India Market Mastery
              </h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                India is complex, dynamic, and full of opportunity. Deep understanding of local dynamics, regulations, and distribution is non-negotiable for lasting success here.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-3">
                Build Systems, Not People Dependencies
              </h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                Lasting businesses are built on systems, not people. Your organization should work brilliantly without you—that&apos;s true scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Featured Framework Block */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FrameworkShowcase
            title="The Founder Architecture Framework™"
            description="Rajesh's proprietary framework for building founder-independent startups"
            ctaLabel="Explore the Complete Framework"
            ctaHref="/insights"
          >
            <p className="text-[#D1D5DB] text-base mb-4">
              A comprehensive methodology covering founder independence, market architecture, GTM systems, and scaling playbooks.
            </p>
            <div className="bg-slate-800 rounded-sm p-6 mb-4">
              <p className="text-[#FAFAF8] font-semibold text-sm mb-4">Framework Components</p>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li>• Founder Architecture Model</li>
                <li>• Market Entry Strategy</li>
                <li>• GTM & Distribution Design</li>
                <li>• Execution & Scaling Systems</li>
                <li>• Founder Independence Index</li>
              </ul>
            </div>
          </FrameworkShowcase>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Connect Section */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1419] mb-6 sm:mb-8">
            Connect With Rajesh
          </h2>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <div>
              <p className="text-slate-700 text-lg mb-3">
                Rajesh is available for strategic consultations with founders ready to transform their startups.
              </p>
              <p className="text-slate-600">
                20+ years of startup architecture expertise | 50+ portfolio companies advised | India market specialist
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
            <PremiumButton href="/contact">
              Book a Strategic Call
            </PremiumButton>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-6 lg:px-8 py-3 border border-amber-600 text-[#B68817] rounded-sm font-medium hover:bg-[#B68817] hover:text-[#FAFAF8] transition-colors duration-150"
            >
              Connect on LinkedIn
            </a>
          </div>

          <p className="text-slate-600 text-sm">
            Follow for insights on startup architecture, founder independence, and India market strategy.
          </p>
        </div>
      </section>
    </div>
  )
}
