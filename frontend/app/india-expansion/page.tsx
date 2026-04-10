import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'
import { PremiumButton } from '@/components/PremiumButton'
import { TestimonialCard, SuccessStoryCard } from '@/components/PremiumCard'
import { testimonials, successStories } from '@/lib/proof-data'

export const metadata: Metadata = {
  title: 'India Market Expansion | TFSA Global',
  description: 'Your gateway to India. Complete execution architecture for market entry and scalable growth.',
}

export default function IndiaExpansion() {
  return (
    <div className="bg-[#0F1419] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Global Expansion Partners</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#FAFAF8] mb-6">
            Your Gateway to India
          </h1>
          <p className="text-2xl text-[#D1D5DB] mb-4">
            We don't advise market entry. <br /><span className="text-[#B68817]">We architect and execute it.</span>
          </p>
          <p className="text-[#9CA3AF] text-lg">Structured Market Entry &amp; Scalable Growth for India Expansion</p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* The Opportunity */}
      <section className="py-20 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">The Opportunity</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
              A High-Complexity, High-Reward Engine
            </h2>
            <p className="text-[#4B5563] text-lg max-w-3xl mx-auto">
              India's rapidly expanding economy presents an unprecedented opportunity for global businesses. With a young workforce, digital infrastructure, and favorable reforms, the time to enter is now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-8 border border-[#E5E7EB] text-center shadow-sm">
              <div className="text-4xl font-bold text-[#B68817] mb-2">$4.5T</div>
              <div className="text-[#0F1419] font-medium">GDP Economy</div>
              <div className="text-[#9CA3AF] text-sm mt-1">2026 Projected</div>
            </div>
            <div className="bg-white p-8 border border-[#E5E7EB] text-center shadow-sm">
              <div className="text-4xl font-bold text-[#B68817] mb-2">1.4B+</div>
              <div className="text-[#0F1419] font-medium">Population Market</div>
            </div>
            <div className="bg-white p-8 border border-[#E5E7EB] text-center shadow-sm">
              <div className="text-4xl font-bold text-[#B68817] mb-2">Digital</div>
              <div className="text-[#0F1419] font-medium">Rapid digital adoption</div>
            </div>
            <div className="bg-white p-8 border border-[#E5E7EB] text-center shadow-sm">
              <div className="text-4xl font-bold text-[#B68817] mb-2">Rising</div>
              <div className="text-[#0F1419] font-medium">Expanding middle class</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-serif font-bold text-[#374151] italic">
              Most companies don't fail because of product — they fail because of execution.
            </p>
          </div>
        </div>
      </section>

      {/* The Real Problem + Market Gap */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#EF4444] font-semibold tracking-widest uppercase mb-4">India is not a market-entry problem.</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8]">
              It's an Execution Architecture Problem.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#FAFAF8] mb-6">
                The Real Problem
              </h3>
              <p className="text-[#D1D5DB] text-lg mb-6">
                Global companies entering India face:
              </p>
              <ul className="space-y-4">
                {[
                  'Misaligned positioning',
                  'Ineffective GTM strategies',
                  'Weak distribution systems',
                  'Lack of on-ground execution',
                ].map((item) => (
                  <li key={item} className="flex items-start text-[#FAFAF8]">
                    <span className="text-[#EF4444] mr-3 font-bold">×</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#FAFAF8] mb-6">
                The Market Gap
              </h3>
              <p className="text-[#D1D5DB] text-lg mb-6">
                Current options fail to solve this:
              </p>
              <div className="space-y-4">
                <div className="bg-[#0F1419] border border-[#374151] p-4 rounded-sm">
                  <span className="font-bold text-[#B68817]">01 · Consultants</span>
                  <p className="text-[#D1D5DB] mt-1">Strategy without execution.</p>
                </div>
                <div className="bg-[#0F1419] border border-[#374151] p-4 rounded-sm">
                  <span className="font-bold text-[#B68817]">02 · Agencies</span>
                  <p className="text-[#D1D5DB] mt-1">Execution without structure.</p>
                </div>
                <div className="bg-[#0F1419] border border-[#374151] p-4 rounded-sm">
                  <span className="font-bold text-[#B68817]">03 · Internal Teams</span>
                  <p className="text-[#D1D5DB] mt-1">No India-specific expertise.</p>
                </div>
                <div className="bg-[#B68817] p-4 rounded-sm font-bold text-[#0F1419] shadow-md text-center">
                  No one owns end-to-end execution.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TFSA Solution */}
      <section className="bg-[#0F1419] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">TFSA Solution</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
              Full Execution Architecture
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              At TFSA Global, we design and implement the business architecture required for successful India expansion. We operate at the intersection of:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Market Entry',
                desc: 'De-risked structure, compliance, localization, and pricing alignment engineered specifically for Indian market dynamics.',
              },
              {
                num: '02',
                title: 'Business Development',
                desc: 'Enterprise access, strategic alliance formation, network integration, and high-value B2B introductions.',
              },
              {
                num: '03',
                title: 'Sales & Growth',
                desc: 'Scalable distribution, repeatable sales playbooks, localized marketing engines, and revenue systems.',
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-slate-900 border border-slate-800 p-8">
                <div className="text-[#B68817] text-3xl font-bold mb-4">{num}</div>
                <h3 className="font-bold text-[#FAFAF8] text-xl mb-4 border-b border-slate-800 pb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The TFSA Architecture Model — 3 Phases */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">The TFSA Architecture Model</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-4">
              No guesswork. Only structured execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                phase: 'Phase 1',
                title: 'Diagnose',
                color: 'border-[#1F2937]',
                accent: 'text-[#1F2937]',
                items: ['Market validation', 'ICP & positioning', 'Risk assessment'],
              },
              {
                phase: 'Phase 2',
                title: 'Architect',
                color: 'border-[#B68817]',
                accent: 'text-[#B68817]',
                items: ['GTM system design', 'Distribution strategy', 'Pricing & channel alignment'],
              },
              {
                phase: 'Phase 3',
                title: 'Execute & Scale',
                color: 'border-[#4B9B8E]',
                accent: 'text-[#4B9B8E]',
                items: ['Pilot execution', 'Sales systems', 'Traction & optimization'],
              },
            ].map(({ phase, title, color, accent, items }) => (
              <div key={phase} className={`bg-white border-t-4 ${color} p-8 shadow-sm`}>
                <p className={`text-sm font-semibold tracking-widest uppercase mb-1 ${accent}`}>{phase}</p>
                <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-6">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center text-[#4B5563]">
                      <span className={`mr-3 font-bold ${accent}`}>›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Without vs With TFSA */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-4">
              We reduce execution risk and accelerate market traction.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#0F1419] border border-[#374151] p-10 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-[#9CA3AF] mb-6 border-b border-[#374151] pb-4">Without TFSA</h3>
              <ul className="space-y-4">
                {['Trial & error', 'Slow growth', 'High burn'].map((item) => (
                  <li key={item} className="flex items-center text-[#9CA3AF]">
                    <span className="text-[#EF4444] mr-3 font-bold">×</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#B68817] p-10 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-6 border-b border-[#0F1419]/20 pb-4">With TFSA</h3>
              <ul className="space-y-4">
                {['Structured entry', 'Faster traction', 'Scalable system'].map((item) => (
                  <li key={item} className="flex items-center text-[#0F1419] font-semibold">
                    <span className="mr-3 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#0F1419] p-10 border border-[#374151] rounded-sm text-center">
            <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-8">The TFSA Outcomes</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['Faster Traction', 'Lower Risk', 'Structured Growth', 'Capital-Efficient Scaling'].map((item) => (
                <div key={item} className="px-6 py-3 bg-[#B68817]/10 text-[#B68817] font-semibold rounded-sm">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="bg-[#0F1419] py-20 md:py-32 border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Execution Evidence</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-4">
              What Clients Experience on the Ground
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              Not strategy decks. Not advisory reports. Structured execution with measurable outcomes.
            </p>
          </div>

          {/* Testimonials - 2 India Expansion voices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <TestimonialCard
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              title={testimonials[1].title}
              company={testimonials[1].company}
              engagementType={testimonials[1].engagementType}
              variant="dark"
            />
            <TestimonialCard
              quote={testimonials[3].quote}
              name={testimonials[3].name}
              title={testimonials[3].title}
              company={testimonials[3].company}
              engagementType={testimonials[3].engagementType}
              variant="dark"
            />
          </div>

          {/* 2 India Expansion success stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SuccessStoryCard
              clientRef={successStories[0].clientRef}
              industry={successStories[0].industry}
              sector={successStories[0].sector}
              challenge={successStories[0].challenge}
              solution={successStories[0].solution}
              outcome={successStories[0].outcome}
              tag={successStories[0].tag}
              comingSoon={successStories[0].comingSoon}
            />
            <SuccessStoryCard
              clientRef={successStories[3].clientRef}
              industry={successStories[3].industry}
              sector={successStories[3].sector}
              challenge={successStories[3].challenge}
              solution={successStories[3].solution}
              outcome={successStories[3].outcome}
              tag={successStories[3].tag}
              comingSoon={successStories[3].comingSoon}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#1a222a] to-[#0F1419] py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#9CA3AF] text-lg mb-4">India is a high-opportunity market. But success depends on execution.</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Don&apos;t enter India through trial &amp; error.
          </h2>
          <p className="text-[#B68817] text-xl font-semibold mb-10">Architect it right from the start.</p>
          <PremiumButton href="/contact" className="px-8 py-4 justify-center mt-4 text-lg">
            Start with Phase 1 — Market Entry Architecture
          </PremiumButton>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-[#9CA3AF] text-sm">
            <a href="https://www.tfsaglobal.com" className="hover:text-[#B68817] transition-colors">www.tfsaglobal.com</a>
            <span className="hidden md:block text-[#374151]">·</span>
            <a href="mailto:contact@tfsaglobal.com" className="hover:text-[#B68817] transition-colors">contact@tfsaglobal.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}