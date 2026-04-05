import type { Metadata } from 'next'
import { FrameworkShowcase } from '@/components/PremiumCard'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Insights & Frameworks | TFSA Knowledge Hub',
  description: 'The Freedom Startup Architect™ thought leadership. Strategic frameworks, insights on founder independence, India market entry, and startup scaling systems.',
}

export default function Insights() {
  return (
    <div className="bg-[#0F1419]">
      {/* Hub Hero Section */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FAFAF8] leading-tight mb-6 sm:mb-8">
            The Freedom Startup Architect™ Framework Hub
          </h1>
          <div className="h-1 w-20 bg-[#B68817] mb-8 sm:mb-10"></div>
          <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            Premium strategic frameworks, proprietary methodologies, and thought leadership on founder independence, India market entry strategy, and building truly scalable organizations. Everything you need to architect your startup&apos;s freedom.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Featured Framework */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1419] mb-4">
              The Founder Architecture Framework™
            </h2>
            <p className="text-[#374151] text-lg sm:text-xl font-medium">
              Rajesh Thakur&apos;s proprietary methodology for building founder-independent, scalable startups
            </p>
          </div>
          
          <div className="bg-white border border-[#E5E7EB] rounded-sm p-8 sm:p-10 md:p-12 mb-12">
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              The complete methodology that powers TFSA consulting. This framework has helped 50+ founders build truly independent organizations. It&apos;s designed to move you from being the bottleneck to architecting the systems that scale.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1419] mb-3 text-[#B68817]">Model</h3>
                <p className="text-[#374151] text-sm sm:text-base leading-relaxed">
                  Founder Architecture Model — designing organizations that scale without founder involvement.
                </p>
              </div>
              
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1419] mb-3 text-[#B68817]">Momentum</h3>
                <p className="text-[#374151] text-sm sm:text-base leading-relaxed">
                  GTM and Distribution Architecture — building repeatable, scalable customer acquisition systems.
                </p>
              </div>
              
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1419] mb-3 text-[#B68817]">Money</h3>
                <p className="text-[#374151] text-sm sm:text-base leading-relaxed">
                  Financial Architecture and Revenue Design — aligning finance with strategic growth goals.
                </p>
              </div>
              
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1419] mb-3 text-[#B68817]">Freedom</h3>
                <p className="text-[#374151] text-sm sm:text-base leading-relaxed">
                  Founder Independence Index — measuring your path to true strategic and operational freedom.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#"
                className="px-6 py-3 bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-all duration-150 shadow-sm hover:shadow-md text-center"
              >
                Download Full Framework (PDF)
              </a>
              <a 
                href="/contact"
                className="px-6 py-3 border border-[#B68817] text-[#B68817] rounded-sm font-medium hover:bg-[#B68817]/10 transition-all duration-150 text-center"
              >
                Schedule a Framework Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* FDRI Score Section */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-6 sm:p-4 sm:p-6 md:p-8 md:p-10">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-4">
              Founder Dependency Risk Index™
            </h2>
            <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4 sm:mb-6">
              A proprietary scoring framework that measures how dependent your startup is on you as the founder. Understanding your FDRI is the first step toward independence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 sm:mb-8">
              <div className="bg-slate-800 rounded-sm p-6">
                <p className="text-[#9CA3AF] text-sm mb-2">FDRI Score Range</p>
                <p className="text-[#FAFAF8] font-serif text-3xl">0 - 100</p>
              </div>
              <div className="bg-slate-800 rounded-sm p-6">
                <p className="text-[#9CA3AF] text-sm mb-2">Ideal Target</p>
                <p className="text-[#B68817] font-serif text-3xl">25 or Below</p>
              </div>
              <div className="bg-slate-800 rounded-sm p-6">
                <p className="text-[#9CA3AF] text-sm mb-2">Assessment</p>
                <p className="text-[#FAFAF8] text-sm">Diagnostic framework included</p>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-sm">
              Higher score indicates greater founder dependency risk. We measure this in your initial diagnostic and track progress throughout our engagement.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Books Section */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
            Published & Upcoming Books
          </h2>
          <div className="h-1 w-20 bg-[#B68817] mb-12 sm:mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Published Book */}
            <div className="flex flex-col">
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F1419] border border-[#374151]/50 rounded-sm p-8 sm:p-10 mb-6 flex-grow flex flex-col">
                <div className="h-72 bg-gradient-to-br from-[#374151] to-[#1F2937] rounded-sm mb-8 flex items-center justify-center border border-[#374151]">
                  <div className="text-center">
                    <p className="text-[#B68817] font-serif text-5xl mb-2">📖</p>
                    <p className="text-[#D1D5DB] text-lg font-serif">Book Cover</p>
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAFAF8] mb-3 sm:mb-4">
                  Founder Independence: The Architecture Way
                </h3>
                <p className="text-[#D1D5DB] text-base leading-relaxed mb-6 flex-grow">
                  A comprehensive guide to eliminating founder dependency through organizational architecture, systems design, and execution excellence.
                </p>
                <div className="mb-8 space-y-3">
                  <p className="text-[#B68817] font-semibold text-sm uppercase tracking-wide">Key Topics:</p>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Diagnosing founder dependency patterns</span></li>
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Building systems-first organizations</span></li>
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Leadership team architecture</span></li>
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Scaling playbooks and execution frameworks</span></li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="w-full text-center px-6 py-3 bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-all duration-150 shadow-sm hover:shadow-md"
                >
                  Download Chapter Preview
                </a>
              </div>
            </div>

            {/* Upcoming Book */}
            <div className="flex flex-col relative">
              <div className="absolute top-6 right-6 z-10 bg-[#B68817] text-white text-xs font-bold px-4 py-2 rounded-sm uppercase tracking-wider">
                Coming 2026
              </div>
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F1419] border border-[#374151]/50 rounded-sm p-8 sm:p-10 mb-6 flex-grow flex flex-col">
                <div className="h-72 bg-gradient-to-br from-[#374151] to-[#1F2937] rounded-sm mb-8 flex items-center justify-center border border-[#374151] opacity-60">
                  <div className="text-center">
                    <p className="text-[#B68817] font-serif text-5xl mb-2">📚</p>
                    <p className="text-[#6B7280] text-lg font-serif">Coming Soon</p>
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAFAF8] mb-3 sm:mb-4">
                  India Market Mastery: The Founder&apos;s Guide
                </h3>
                <p className="text-[#D1D5DB] text-base leading-relaxed mb-6 flex-grow">
                  Deep insights into India market dynamics, entry strategies, regulatory navigation, and building distribution networks in complex emerging markets.
                </p>
                <div className="mb-8 space-y-3">
                  <p className="text-[#B68817] font-semibold text-sm uppercase tracking-wide">Expected Topics:</p>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Market analysis frameworks</span></li>
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Regulatory landscape and complexity</span></li>
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Distribution channel design</span></li>
                    <li className="flex gap-2"><span className="text-[#B68817]">→</span><span>Case studies and playbooks</span></li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="w-full text-center px-6 py-3 border border-[#B68817] text-[#B68817] rounded-sm font-medium hover:bg-[#B68817]/10 transition-all duration-150"
                >
                  Notify Me at Launch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Strategic Insights */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1419] mb-8 sm:mb-12 text-center">
            Strategic Insights & Frameworks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8">
            {/* Insight 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                Why Startups Fail in India
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4 sm:mb-6">
                Analysis of the top reasons startups fail in the Indian market and how to architect your business to avoid these pitfalls.
              </p>
              <div className="bg-slate-100 rounded-sm p-4 mb-4 sm:mb-6">
                <p className="text-[#0F1419] font-semibold text-sm mb-2">Key Insights:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Market entry mistakes</li>
                  <li>• Distribution challenges</li>
                  <li>• Founder dependency traps</li>
                  <li>• Execution failures</li>
                </ul>
              </div>
              <a
                href="#"
                className="text-[#B68817] font-semibold text-sm hover:underline"
              >
                Read Full Insight →
              </a>
            </div>

            {/* Insight 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                Market Entry Architecture
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4 sm:mb-6">
                Strategic framework for entering new markets successfully. Covers positioning, regulatory navigation, and initial team setup.
              </p>
              <div className="bg-slate-100 rounded-sm p-4 mb-4 sm:mb-6">
                <p className="text-[#0F1419] font-semibold text-sm mb-2">Framework Covers:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Market research methodology</li>
                  <li>• Competitive positioning</li>
                  <li>• Regulatory requirements</li>
                  <li>• Go-to-market strategy</li>
                </ul>
              </div>
              <a
                href="#"
                className="text-[#B68817] font-semibold text-sm hover:underline"
              >
                Read Full Framework →
              </a>
            </div>

            {/* Insight 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                The Founder Dependency Problem
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4 sm:mb-6">
                Deep dive into how founder dependency emerges, why it&apos;s dangerous, and the systematic approach to eliminating it.
              </p>
              <div className="bg-slate-100 rounded-sm p-4 mb-4 sm:mb-6">
                <p className="text-[#0F1419] font-semibold text-sm mb-2">Topics:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Dependency diagnosis</li>
                  <li>• Organizational architecture</li>
                  <li>• Systems design</li>
                  <li>• Scaling without founder</li>
                </ul>
              </div>
              <a
                href="#"
                className="text-[#B68817] font-semibold text-sm hover:underline"
              >
                Read Full Analysis →
              </a>
            </div>

            {/* Insight 4 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                GTM Strategy for India Scale
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4 sm:mb-6">
                Proven GTM strategy framework for scaling in India. Covers distribution channels, sales systems, and customer acquisition.
              </p>
              <div className="bg-slate-100 rounded-sm p-4 mb-4 sm:mb-6">
                <p className="text-[#0F1419] font-semibold text-sm mb-2">Strategy Includes:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Channel strategy selection</li>
                  <li>• Sales process design</li>
                  <li>• Revenue model alignment</li>
                  <li>• Growth metrics framework</li>
                </ul>
              </div>
              <a
                href="#"
                className="text-[#B68817] font-semibold text-sm hover:underline"
              >
                Read Full Strategy →
              </a>
            </div>

            {/* Insight 5 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                Building a Scalable Organization
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4 sm:mb-6">
                Framework for building organizations that scale 10x without breaking. Team architecture, processes, and systems design.
              </p>
              <div className="bg-slate-100 rounded-sm p-4 mb-4 sm:mb-6">
                <p className="text-[#0F1419] font-semibold text-sm mb-2">Coverage:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Team structure evolution</li>
                  <li>• Process documentation</li>
                  <li>• Leadership development</li>
                  <li>• Cultural scaling</li>
                </ul>
              </div>
              <a
                href="#"
                className="text-[#B68817] font-semibold text-sm hover:underline"
              >
                Read Full Framework →
              </a>
            </div>

            {/* Insight 6 */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                Startup Operating System
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4 sm:mb-6">
                Blueprint for implementing an operating system that enables execution without founder micromanagement.
              </p>
              <div className="bg-slate-100 rounded-sm p-4 mb-4 sm:mb-6">
                <p className="text-[#0F1419] font-semibold text-sm mb-2">Framework Components:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Decision-making frameworks</li>
                  <li>• Execution rhythms</li>
                  <li>• Accountability systems</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>
              <a
                href="#"
                className="text-[#B68817] font-semibold text-sm hover:underline"
              >
                Read Full Blueprint →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Newsletter CTA */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-4 sm:mb-6">
            Stay Connected to Strategic Insights
          </h2>
          <p className="text-[#D1D5DB] text-lg mb-6 sm:mb-8">
            Get the latest frameworks, case studies, and thought leadership on founder independence and startup scaling—delivered directly to you.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-slate-900 border border-[#1F2937]/30 rounded-sm text-[#FAFAF8] placeholder-gray-500 focus:outline-none focus:border-amber-600"
              required
            />
            <button
              type="submit"
              className="px-4 sm:px-6 lg:px-8 py-3 bg-[#B68817] text-[#FAFAF8] rounded-sm font-medium hover:bg-[#A08560] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
