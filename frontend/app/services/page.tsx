import type { Metadata } from 'next'
import { PremiumButton } from '@/components/PremiumButton'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Services | TFSA - Strategic Consulting',
  description: 'High-ticket consulting services: Market Entry Architecture, GTM & Distribution Design, Execution & Scale. Phase-based, end-to-end, and retainer partnerships.',
}

export default function Services() {
  return (
    <div className="bg-[#0F1419]">
      {/* Hero/Intro */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-2xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
            Strategic Consulting Services
          </h1>
          <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed">
            High-ticket consulting engagements designed for founder-led startups ready to architect their growth. Every engagement is outcome-focused, operationalized, and tailored to your specific market and stage.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Three Core Services - Varied Layout */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAF8] mb-12 sm:mb-16 text-center">
            Our Core Services
          </h2>

          {/* Service 1 - Text left, visual right */}
          <div className="mb-16 sm:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAFAF8] mb-4 sm:mb-6">
                Market Entry Architecture
              </h3>
              <div className="h-1 w-16 bg-[#B8956A] mb-6 sm:mb-8"></div>
              <p className="text-[#D1D5DB] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Strategic clarity for entering new markets, especially India. We help you understand market dynamics, navigate regulatory complexity, and design your initial go-to-market approach with confidence.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-[#B8956A] font-semibold text-sm uppercase tracking-wide mb-3">Strategic Outcomes</h4>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>Market dynamics and competitive positioning</span></li>
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>Regulatory and operational setup</span></li>
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>Initial team structure and org design</span></li>
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>6-month market entry roadmap</span></li>
                  </ul>
                </div>
              </div>
              <p className="text-[#9CA3AF] text-xs uppercase tracking-wide">
                <strong>Timeline:</strong> 4-8 weeks, phase-based or ongoing
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1F2937] to-[#0F1419] border border-[#374151]/50 rounded-sm p-8 sm:p-10 h-full flex items-center justify-center min-h-80">
              <svg className="w-full h-full max-w-xs" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="service1grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#B8956A', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#4B9B8E', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="120" fill="none" stroke="url(#service1grad)" strokeWidth="2" opacity="0.4" />
                <circle cx="150" cy="150" r="80" fill="none" stroke="#B8956A" strokeWidth="2" opacity="0.6" />
                <circle cx="150" cy="150" r="40" fill="none" stroke="#4B9B8E" strokeWidth="2" opacity="0.8" />
                <circle cx="150" cy="150" r="10" fill="#B8956A" />
                <path d="M150 140 L150 50" stroke="#B8956A" strokeWidth="1" opacity="0.5" />
                <path d="M160 150 L240 150" stroke="#4B9B8E" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* Service 2 - Text right, visual left */}
          <div className="mb-16 sm:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <div className="lg:order-2">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAFAF8] mb-4 sm:mb-6">
                GTM & Distribution Design
              </h3>
              <div className="h-1 w-16 bg-[#B8956A] mb-6 sm:mb-8"></div>
              <p className="text-[#D1D5DB] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Build repeatable, scalable distribution channels. We design your go-to-market strategy, sales systems, and customer acquisition framework to drive sustainable growth and market penetration.
              </p>
              <div className="space-y-5 mb-8">
                <div>
                  <h4 className="text-[#B8956A] font-semibold text-sm uppercase tracking-wide mb-3">Strategic Focus</h4>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>Distribution channels and partnerships</span></li>
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>Sales process and team structure</span></li>
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>Customer acquisition and retention</span></li>
                    <li className="flex gap-2"><span className="text-[#B8956A]">→</span><span>Revenue model and pricing strategy</span></li>
                  </ul>
                </div>
              </div>
              <p className="text-[#9CA3AF] text-xs uppercase tracking-wide">
                <strong>Timeline:</strong> 8-12 weeks, phase-based or ongoing
              </p>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-[#1F2937] to-[#0F1419] border border-[#374151]/50 rounded-sm p-8 sm:p-10 h-full flex items-center justify-center min-h-80">
              <svg className="w-full h-full max-w-xs" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="service2grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#4B9B8E', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#B8956A', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M 50 250 L 250 250" stroke="#374151" strokeWidth="2" />
                <path d="M 80 250 L 80 150" stroke="url(#service2grad)" strokeWidth="3" />
                <path d="M 150 250 L 150 100" stroke="#B8956A" strokeWidth="3" />
                <path d="M 220 250 L 220 180" stroke="#4B9B8E" strokeWidth="3" />
                <circle cx="80" cy="140" r="8" fill="#B8956A" />
                <circle cx="150" cy="90" r="8" fill="#B8956A" />
                <circle cx="220" cy="170" r="8" fill="#B8956A" />
              </svg>
            </div>
          </div>

          <SectionDivider variant="spacing" />

          {/* Service 3 - Different composition entirely */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-4">
                Execution & Scale
              </h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4 sm:mb-6">
                Eliminate founder dependency and build systems that scale. We architect your execution framework, leadership structure, and operational processes for sustainable growth without founder bottlenecks.
              </p>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6 sm:mb-8">
                This is our deepest engagement—we work with you to fundamentally transform how your organization executes, makes decisions, and scales without breaking under growth.
              </p>
            </div>
            <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4 mb-4 sm:mb-6">
                <div>
                  <p className="text-[#B8956A] font-semibold text-sm mb-2">Core Focus</p>
                  <p className="text-[#FAFAF8] text-sm">Founder independence through architecture</p>
                </div>
                <div>
                  <p className="text-[#B8956A] font-semibold text-sm mb-2">Timeline</p>
                  <p className="text-[#FAFAF8] text-sm">Ongoing (3-6 month+ retainer)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8">
            <h4 className="text-[#FAFAF8] font-semibold mb-4">What You Get</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="text-[#9CA3AF] text-sm flex items-start gap-2">
                <span className="text-[#B8956A] mt-1">→</span>
                <span>Execution framework and systems</span>
              </li>
              <li className="text-[#9CA3AF] text-sm flex items-start gap-2">
                <span className="text-[#B8956A] mt-1">→</span>
                <span>Leadership team architecture</span>
              </li>
              <li className="text-[#9CA3AF] text-sm flex items-start gap-2">
                <span className="text-[#B8956A] mt-1">→</span>
                <span>Decision frameworks and accountability</span>
              </li>
              <li className="text-[#9CA3AF] text-sm flex items-start gap-2">
                <span className="text-[#B8956A] mt-1">→</span>
                <span>Scaling playbook and metrics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Engagement Models */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1419] mb-8 sm:mb-12 text-center">
            How We Work Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8">
            {/* Phase-based */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-[#0F1419] mb-4">Phase-Based</h3>
              <p className="text-[#374151] text-sm mb-4 sm:mb-6 leading-relaxed">
                Project-focused engagement for specific strategic outcomes.
              </p>
              <div className="space-y-3 mb-4 sm:mb-6">
                <div>
                  <p className="font-medium text-[#0F1419] text-sm">Best for</p>
                  <p className="text-[#4B5563] text-sm">Market entry, GTM design, specific challenges</p>
                </div>
                <div>
                  <p className="font-medium text-[#0F1419] text-sm">Duration</p>
                  <p className="text-[#4B5563] text-sm">4-12 weeks</p>
                </div>
              </div>
              <p className="text-[#A08560] font-semibold text-sm">Outcome-focused delivery</p>
            </div>

            {/* End-to-end */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-[#0F1419] mb-4">End-to-End</h3>
              <p className="text-[#374151] text-sm mb-4 sm:mb-6 leading-relaxed">
                Complete architectural redesign of your startup operations.
              </p>
              <div className="space-y-3 mb-4 sm:mb-6">
                <div>
                  <p className="font-medium text-[#0F1419] text-sm">Best for</p>
                  <p className="text-[#4B5563] text-sm">Holistic startup transformation</p>
                </div>
                <div>
                  <p className="font-medium text-[#0F1419] text-sm">Duration</p>
                  <p className="text-[#4B5563] text-sm">3-6 months intensive</p>
                </div>
              </div>
              <p className="text-[#A08560] font-semibold text-sm">Complete transformation</p>
            </div>

            {/* Retainer */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-[#0F1419] mb-4">Retainer Partnership</h3>
              <p className="text-[#374151] text-sm mb-4 sm:mb-6 leading-relaxed">
                Ongoing strategic advisory and execution support.
              </p>
              <div className="space-y-3 mb-4 sm:mb-6">
                <div>
                  <p className="font-medium text-[#0F1419] text-sm">Best for</p>
                  <p className="text-[#4B5563] text-sm">Long-term strategic growth</p>
                </div>
                <div>
                  <p className="font-medium text-[#0F1419] text-sm">Duration</p>
                  <p className="text-[#4B5563] text-sm">6+ months</p>
                </div>
              </div>
              <p className="text-[#A08560] font-semibold text-sm">Sustained partnership</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Closing CTA */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-4 sm:mb-6">
            Ready to Architect Your Growth?
          </h2>
          <p className="text-[#D1D5DB] text-lg mb-6 sm:mb-8">
            Let&apos;s discuss your specific challenges and find the right engagement model for your startup.
          </p>
          <PremiumButton href="/contact" className="justify-center">
            Schedule a Strategic Consultation
          </PremiumButton>
        </div>
      </section>
    </div>
  )
}
