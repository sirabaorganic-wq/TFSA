import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'The TFSA Architecture System | How It Works',
  description: 'Understand the proprietary TFSA Architecture System™: Diagnose, Architect, Build, Scale, Freedom. Our five-pillar methodology for founder-independent startups.',
}

export default function HowItWorks() {
  return (
    <div className="bg-[#0F1419]">
      {/* Hero/Methodology Intro */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-2xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
            The TFSA Architecture System™
          </h1>
          <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
            Our proprietary, research-backed methodology for building founder-independent startups.
          </p>
          <p className="text-[#9CA3AF] text-lg leading-relaxed">
            Every engagement follows these five strategic pillars, tailored to your specific growth stage and market.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Five-Step Process */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-8 sm:mb-12 text-center">
            The Five Pillars of Startup Architecture
          </h2>

          <div className="space-y-12">
            {/* Step 1 - Left aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8 items-center">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-[#B68817] text-[#FAFAF8] px-4 py-2 rounded-sm text-sm font-semibold mb-2">
                    PILLAR 1
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#FAFAF8]">
                    Diagnose
                  </h3>
                </div>
                <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4 sm:mb-6">
                  We begin by understanding your current state. Where are you now? What are your strategic blind spots? How dependent is the organization on you?
                </p>
                <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-6 mb-4 sm:mb-6">
                  <h4 className="text-[#B68817] font-semibold text-sm mb-3">Diagnostic Framework</h4>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li>• TFSA Radar™ assessment</li>
                    <li>• Founder Dependency Risk Index (FDRI)</li>
                    <li>• Market and competitive analysis</li>
                    <li>• Current team and org assessment</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-serif text-[#B68817] mb-4">1</div>
                  <p className="text-[#D1D5DB]">Foundation Understanding</p>
                </div>
              </div>
            </div>

            <SectionDivider variant="spacing" />

            {/* Step 2 - Right aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8 items-center">
              <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8 h-full flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <div className="text-5xl font-serif text-[#B68817] mb-4">2</div>
                  <p className="text-[#D1D5DB]">Strategic Blueprint</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4">
                  <span className="inline-block bg-[#B68817] text-[#FAFAF8] px-4 py-2 rounded-sm text-sm font-semibold mb-2">
                    PILLAR 2
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#FAFAF8]">
                    Architect
                  </h3>
                </div>
                <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4 sm:mb-6">
                  Based on your diagnosis, we design your optimal architecture. This covers market strategy, organizational structure, execution systems, and founder independence roadmap.
                </p>
                <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-6">
                  <h4 className="text-[#B68817] font-semibold text-sm mb-3">Architecture Deliverables</h4>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li>• Market entry or scaling strategy</li>
                    <li>• Org and team structure design</li>
                    <li>• Execution and decision frameworks</li>
                    <li>• 12-month strategic roadmap</li>
                  </ul>
                </div>
              </div>
            </div>

            <SectionDivider variant="spacing" />

            {/* Step 3 - Left aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8 items-center">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-[#B68817] text-[#FAFAF8] px-4 py-2 rounded-sm text-sm font-semibold mb-2">
                    PILLAR 3
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#FAFAF8]">
                    Build
                  </h3>
                </div>
                <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4 sm:mb-6">
                  We operationalize the architecture. This means building systems, processes, and frameworks that enable your team to execute without founder micromanagement.
                </p>
                <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-6 mb-4 sm:mb-6">
                  <h4 className="text-[#B68817] font-semibold text-sm mb-3">Implementation</h4>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li>• Startup Operating System (SOS™)</li>
                    <li>• Team training and alignment</li>
                    <li>• Process documentation</li>
                    <li>• Metrics and accountability framework</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-serif text-[#B68817] mb-4">3</div>
                  <p className="text-[#D1D5DB]">Operational Reality</p>
                </div>
              </div>
            </div>

            <SectionDivider variant="spacing" />

            {/* Step 4 - Right aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8 items-center">
              <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8 h-full flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <div className="text-5xl font-serif text-[#B68817] mb-4">4</div>
                  <p className="text-[#D1D5DB]">Sustainable Growth</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4">
                  <span className="inline-block bg-[#B68817] text-[#FAFAF8] px-4 py-2 rounded-sm text-sm font-semibold mb-2">
                    PILLAR 4
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#FAFAF8]">
                    Scale
                  </h3>
                </div>
                <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4 sm:mb-6">
                  With systems in place, you scale confidently. We support you in expanding operations, entering new markets, and building a truly founder-independent organization.
                </p>
                <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-6">
                  <h4 className="text-[#B68817] font-semibold text-sm mb-3">Scaling Support</h4>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li>• Team expansion and hiring</li>
                    <li>• Multi-market scaling</li>
                    <li>• Process refinement</li>
                    <li>• Leadership development</li>
                  </ul>
                </div>
              </div>
            </div>

            <SectionDivider variant="spacing" />

            {/* Step 5 - Left aligned, final */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8 items-center">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-[#B68817] text-[#FAFAF8] px-4 py-2 rounded-sm text-sm font-semibold mb-2">
                    PILLAR 5
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#FAFAF8]">
                    Freedom
                  </h3>
                </div>
                <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4 sm:mb-6">
                  The ultimate outcome. You are strategically free. Your team executes without you. Your business is built on systems, not your effort. You have achieved founder independence.
                </p>
                <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-6 mb-4 sm:mb-6">
                  <h4 className="text-[#B68817] font-semibold text-sm mb-3">Your Freedom Includes</h4>
                  <ul className="space-y-2 text-[#9CA3AF] text-sm">
                    <li>• Strategic decision-making authority</li>
                    <li>• Operational independence</li>
                    <li>• Time for vision and growth</li>
                    <li>• Lasting competitive advantage</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-b from-amber-600/20 to-transparent border border-amber-600/30 rounded-sm p-4 sm:p-6 md:p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-serif text-[#B68817] mb-4">5</div>
                  <p className="text-amber-200 font-semibold">Founder Independence Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Diagnostic Tools Section */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1419] mb-8 sm:mb-12 text-center">
            Strategic Diagnostic Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8">
            {/* TFSA Radar */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                TFSA Radar™
              </h3>
              <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                Comprehensive assessment of your startup&apos;s foundational health across 8 key dimensions.
              </p>
              <div className="space-y-2 text-sm text-[#4B5563] mb-4 sm:mb-6">
                <p>• Market positioning</p>
                <p>• Team capability</p>
                <p>• Execution excellence</p>
                <p>• Financial health</p>
                <p>• Customer satisfaction</p>
                <p>• Growth trajectory</p>
                <p>• Competitive advantage</p>
                <p>• Founder dependency</p>
              </div>
              <p className="text-[#A08560] font-semibold text-sm">Outcome: 360° startup health assessment</p>
            </div>

            {/* FDRI */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                FDRI Score™
              </h3>
              <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                Founder Dependency Risk Index. A proprietary scoring system that measures how dependent your organization is on you.
              </p>
              <div className="bg-amber-100 rounded-sm p-4 mb-4 sm:mb-6 text-center">
                <p className="text-[#0F1419] font-mono text-2xl font-bold">Score: 0-100</p>
                <p className="text-slate-700 text-xs mt-2">Higher score = greater dependency risk</p>
              </div>
              <p className="text-[#A08560] font-semibold text-sm">Outcome: Clear founder dependency baseline</p>
            </div>

            {/* Maturity Stage */}
            <div className="bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-3">
                Startup Maturity Stage
              </h3>
              <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                Assessment of your startup&apos;s stage of operational maturity and readiness for next-phase growth.
              </p>
              <div className="space-y-2 text-sm text-[#4B5563] mb-4 sm:mb-6">
                <p><strong>Stages:</strong></p>
                <p>• Idea / MVP</p>
                <p>• Early Growth</p>
                <p>• Scaling</p>
                <p>• Mature / Optimization</p>
              </div>
              <p className="text-[#A08560] font-semibold text-sm">Outcome: Stage-specific growth roadmap</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Execution & Scaling Tools */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-8 sm:mb-12 text-center">
            Execution Architecture & Scaling Systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8">
            {/* SOS */}
            <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-4">
                Startup Operating System (SOS™)
              </h3>
              <p className="text-[#D1D5DB] text-sm mb-4 sm:mb-6 leading-relaxed">
                The foundational operating system for your startup. SOS encompasses decision-making frameworks, accountability structures, and execution rhythms.
              </p>
              <div className="space-y-3 text-[#9CA3AF] text-sm mb-4 sm:mb-6">
                <div className="border-l-2 border-amber-600 pl-4">
                  <p className="font-semibold text-[#FAFAF8]">Decision Frameworks</p>
                  <p>How your leadership makes strategic decisions</p>
                </div>
                <div className="border-l-2 border-amber-600 pl-4">
                  <p className="font-semibold text-[#FAFAF8]">Execution Rhythms</p>
                  <p>Weekly, monthly, quarterly planning cadence</p>
                </div>
                <div className="border-l-2 border-amber-600 pl-4">
                  <p className="font-semibold text-[#FAFAF8]">Accountability</p>
                  <p>Clear ownership and performance tracking</p>
                </div>
              </div>
            </div>

            {/* Scaling Tools */}
            <div className="bg-slate-900 border border-[#1F2937]/30 rounded-sm p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-4">
                Scaling & Leadership Systems
              </h3>
              <p className="text-[#D1D5DB] text-sm mb-4 sm:mb-6 leading-relaxed">
                Tools and frameworks for scaling your team and building a leadership-driven organization.
              </p>
              <div className="space-y-3 text-[#9CA3AF] text-sm mb-4 sm:mb-6">
                <div className="border-l-2 border-amber-600 pl-4">
                  <p className="font-semibold text-[#FAFAF8]">Team Architecture</p>
                  <p>Org design and hiring roadmap</p>
                </div>
                <div className="border-l-2 border-amber-600 pl-4">
                  <p className="font-semibold text-[#FAFAF8]">Leadership Development</p>
                  <p>Building strong functional leaders</p>
                </div>
                <div className="border-l-2 border-amber-600 pl-4">
                  <p className="font-semibold text-[#FAFAF8]">Process Documentation</p>
                  <p>Systematizing knowledge and execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Closing CTA */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-4 sm:mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-[#D1D5DB] text-lg mb-6 sm:mb-8">
            Let&apos;s start with understanding where you are today. Book a diagnostic consultation to explore your startup&apos;s architecture.
          </p>
          <a
            href="/contact"
            className="inline-block px-4 sm:px-6 lg:px-8 py-3 bg-[#B68817] text-[#FAFAF8] rounded-sm font-medium hover:bg-[#A08560] transition-colors duration-150"
          >
            Schedule Your Diagnostic
          </a>
        </div>
      </section>
    </div>
  )
}
