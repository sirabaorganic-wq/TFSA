import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PremiumButton } from '@/components/PremiumButton'
import { PremiumCard, FrameworkShowcase, SectionCard, TestimonialCard, SuccessStoryCard } from '@/components/PremiumCard'
import { SectionDivider } from '@/components/SectionDivider'
import { testimonials, successStories } from '@/lib/proof-data'

export const metadata: Metadata = {
  title: 'TFSA Global | India Market Entry & Scalable Growth',
  description: 'We architect and execute market entry — not just strategy. For global companies expanding into India.',
}

export default function Home() {
  return (
    <div className="bg-[#0F1419]">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0F1419] to-[#1a222a] min-h-screen flex items-center pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FAFAF8] leading-tight mb-6">
              India Market Entry &amp; <span className="text-[#B68817]">Scalable Growth</span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl text-[#D1D5DB]">for Global Companies</span>
            </h1>
            <h2 className="text-[#FAFAF8] text-xl sm:text-2xl font-medium tracking-wide mb-4">
              We architect and execute market entry &mdash; not just strategy.
            </h2>
            <p className="text-[#9CA3AF] text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              So you don&apos;t lose time, capital, or momentum.<br />
              <span className="text-[#D1D5DB] font-semibold mt-4 block">Most companies don&apos;t fail in India because of product. They fail because of execution.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PremiumButton href="/contact" className="text-center w-full sm:w-auto">
                Start India Entry Assessment
              </PremiumButton>
              <PremiumButton href="/india-expansion" variant="secondary" className="text-center w-full sm:w-auto">
                Explore Our Approach
              </PremiumButton>
            </div>

            <div className="mt-12 text-[#9CA3AF] text-sm uppercase tracking-widest font-semibold flex flex-wrap justify-center gap-4 sm:gap-8">
              <span>Market Entry</span>
              <span className="hidden sm:inline">•</span>
              <span>GTM</span>
              <span className="hidden sm:inline">•</span>
              <span>Distribution</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-[#B68817]">Execution</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 2. CORE INSIGHT */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
            India is not a market-entry problem.
          </h2>
          <h3 className="font-serif text-2xl md:text-4xl font-bold text-[#B68817] mb-8">
            It&apos;s an execution architecture problem.
          </h3>
          <p className="text-[#374151] text-xl md:text-2xl leading-relaxed">
            Most companies enter India with strategy.
            <br />
            <strong>But without structured execution, growth breaks.</strong>
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 3. THE PROBLEM */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
                India is a high-opportunity market.
              </h2>
              <p className="text-xl text-[#B68817] font-semibold mb-8">
                But execution is where companies fail.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-[#D1D5DB] text-lg">
                  <span className="text-[#B68817] mr-3 mt-1">→</span> Misaligned positioning
                </li>
                <li className="flex items-start text-[#D1D5DB] text-lg">
                  <span className="text-[#B68817] mr-3 mt-1">→</span> Ineffective GTM strategies
                </li>
                <li className="flex items-start text-[#D1D5DB] text-lg">
                  <span className="text-[#B68817] mr-3 mt-1">→</span> Fragmented distribution systems
                </li>
                <li className="flex items-start text-[#D1D5DB] text-lg">
                  <span className="text-[#B68817] mr-3 mt-1">→</span> Lack of on-ground execution
                </li>
              </ul>
              <div className="bg-[#B68817]/10 border-l-4 border-[#B68817] p-6">
                <p className="text-[#FAFAF8] font-medium text-lg">
                  Result: Slow traction, high burn, and missed market potential.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-sm border border-[#374151] bg-[#0F1419] overflow-hidden relative">
                <Image
                  src="/indiaopportunity.png"
                  alt="India Opportunity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE GAP */}
      <section className="bg-[#0F1419] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
              The Execution Gap
            </h2>
            <p className="text-[#D1D5DB] text-xl">
              Why current approaches fail in the Indian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#1F2937] border border-[#374151] p-8 rounded-sm">
              <h3 className="text-xl font-bold text-[#FAFAF8] mb-4 border-b border-[#374151] pb-4">Consultants</h3>
              <p className="text-[#B68817] font-semibold mb-4">Strategy without execution</p>
              <p className="text-[#9CA3AF]">They provide thick reports and high-level advice, but leave you to figure out the messy reality of on-ground implementation.</p>
            </div>

            <div className="bg-[#1F2937] border border-[#374151] p-8 rounded-sm">
              <h3 className="text-xl font-bold text-[#FAFAF8] mb-4 border-b border-[#374151] pb-4">Agencies</h3>
              <p className="text-[#B68817] font-semibold mb-4">Execution without structure</p>
              <p className="text-[#9CA3AF]">They execute specific tasks (marketing, PR) but lack the overarching business architecture and strategic alignment.</p>
            </div>

            <div className="bg-[#1F2937] border border-[#374151] p-8 rounded-sm">
              <h3 className="text-xl font-bold text-[#FAFAF8] mb-4 border-b border-[#374151] pb-4">Internal Teams</h3>
              <p className="text-[#B68817] font-semibold mb-4">No India-specific expertise</p>
              <p className="text-[#9CA3AF]">Your core team is exceptionally talented but lacks deeply rooted market insight and execution frameworks specific to India.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-serif font-bold text-[#FAFAF8] bg-[#B68817] inline-block px-8 py-4 rounded-sm shadow-lg">
              No one owns end-to-end execution.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 5. THE TFSA GLOBAL SOLUTION */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
              We Architect and Execute Market Entry
            </h2>
            <p className="text-[#374151] text-xl max-w-3xl mx-auto">
              At TFSA Global, we design and implement the complete business architecture required for successful India expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0F1419] rounded-full flex items-center justify-center mx-auto mb-6 text-[#B68817]">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-4">Market Entry</h3>
              <p className="text-[#4B5563]">Structural framing, localization, and regulatory alignment engineered for sustainable traction.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0F1419] rounded-full flex items-center justify-center mx-auto mb-6 text-[#B68817]">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-4">Business Development</h3>
              <p className="text-[#4B5563]">Strategic partnerships, local vendor ecosystems, and key enterprise account penetration.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0F1419] rounded-full flex items-center justify-center mx-auto mb-6 text-[#B68817]">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-4">Sales &amp; Growth</h3>
              <p className="text-[#4B5563]">Repeatable go-to-market systems and scalable distribution networks delivering revenue momentum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BRIDGE SECTION TO TFSA FRAMEWORK & FROM ARCHITECTURE TO EXPANSION */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#B68817] font-semibold tracking-wider uppercase mb-2">From Architecture to Expansion</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-8">
                Built on Proven Startup Architecture
              </h2>

              <div className="space-y-6 text-[#D1D5DB] text-lg">
                <p>
                  <strong className="text-white block mb-1">What we used to do:</strong>
                  We built the architecture, systems, business clarity, and operating foundations for startups looking to scale.
                </p>
                <p>
                  <strong className="text-white block mb-1">What we are doing now:</strong>
                  We are actively applying those principles to India market entry and commercial execution for global companies.
                </p>
                <p>
                  Before global expansion, businesses must be structurally strong. Our approach is powered by the foundational <strong className="text-white">TFSA Framework</strong>:
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <span className="bg-[#B68817] text-white text-xs px-2 py-1 rounded-sm mr-4 mt-1 font-bold">MODEL</span>
                  <span className="text-[#FAFAF8]">(Architecture) &rarr; <span className="text-[#9CA3AF]">Business clarity &amp; unit economics</span></span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#B68817] text-white text-xs px-2 py-1 rounded-sm mr-4 mt-1 font-bold">MOMENTUM</span>
                  <span className="text-[#FAFAF8]">(Systems) &rarr; <span className="text-[#9CA3AF]">Execution &amp; operations</span></span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#B68817] text-white text-xs px-2 py-1 rounded-sm mr-4 mt-1 font-bold">MONEY</span>
                  <span className="text-[#FAFAF8]">(Capital) &rarr; <span className="text-[#9CA3AF]">Scale &amp; investor readiness</span></span>
                </li>
              </ul>

              <div className="mt-10">
                <Link href="/tfsa-framework" className="inline-flex items-center text-[#B68817] hover:text-[#FAFAF8] font-bold text-lg transition-colors">
                  Explore TFSA Framework <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="bg-[#0F1419] p-8 md:p-12 border border-[#374151] rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-white mb-6 border-b border-[#374151] pb-4">The Evolution</h3>
              <p className="text-[#9CA3AF] mb-8 italic">
                "TFSA Framework came first. TFSA Global is the applied execution layer for India expansion."
              </p>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-[#374151]">
                  <div className="absolute w-3 h-3 bg-[#374151] rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-white font-bold">Foundation</h4>
                  <p className="text-sm text-[#6B7280]">Startup Architecture Systems</p>
                </div>
                <div className="relative pl-6 border-l-2 border-[#B68817]">
                  <div className="absolute w-3 h-3 bg-[#B68817] rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-white font-bold">Application</h4>
                  <p className="text-sm text-[#6B7280]">India Expansion Execution</p>
                </div>
                <div className="relative pl-6 border-l-2 border-[#4B9B8E] border-dashed">
                  <div className="absolute w-3 h-3 bg-[#4B9B8E] rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-white font-bold">Scale</h4>
                  <p className="text-sm text-[#6B7280]">Scalable Global Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 7. HOW IT WORKS */}
      <section className="bg-[#0F1419] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
              A Structured Approach to India Expansion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1F2937] p-10 rounded-sm border-t-4 border-[#B68817]">
              <div className="text-4xl font-bold text-[#374151] mb-4">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Diagnose</h3>
              <p className="text-[#9CA3AF]">
                Market validation, positioning, and risk mapping. We analyze the terrain before committing capital.
              </p>
            </div>

            <div className="bg-[#1F2937] p-10 rounded-sm border-t-4 border-[#B68817]">
              <div className="text-4xl font-bold text-[#374151] mb-4">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Architect</h3>
              <p className="text-[#9CA3AF]">
                GTM systems, distribution design, and pricing alignment. We build the structural blueprint.
              </p>
            </div>

            <div className="bg-[#1F2937] p-10 rounded-sm border-t-4 border-[#B68817]">
              <div className="text-4xl font-bold text-[#374151] mb-4">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Execute &amp; Scale</h3>
              <p className="text-[#9CA3AF]">
                Pilot execution, traction validation, and wide-scale optimization. We drive the growth momentum.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl font-serif text-[#D1D5DB] italic">
              No guesswork. Only structured execution.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHAT WE DESIGN */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
                We don&apos;t just advise.
                <br />
                <span className="text-[#B68817]">We build execution systems.</span>
              </h2>
            </div>

            <div>
              <div className="bg-white p-8 border border-[#E5E7EB] shadow-sm rounded-sm">
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center mr-4 text-white">✓</div>
                    <span className="text-xl font-medium text-[#0F1419]">Market entry architecture</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center mr-4 text-white">✓</div>
                    <span className="text-xl font-medium text-[#0F1419]">GTM &amp; distribution systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center mr-4 text-white">✓</div>
                    <span className="text-xl font-medium text-[#0F1419]">Business development engines</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center mr-4 text-white">✓</div>
                    <span className="text-xl font-medium text-[#0F1419]">Sales &amp; growth execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BEFORE VS AFTER TFSA */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-center text-[#FAFAF8] mb-16">
            The Execution Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Without TFSA */}
            <div className="bg-[#0F1419] border border-[#EF4444]/30 rounded-sm p-10">
              <h3 className="text-2xl font-bold text-[#EF4444] mb-8 pb-4 border-b border-[#374151]">Without TFSA</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-[#9CA3AF] text-lg">
                  <span className="mr-4 text-[#EF4444]">×</span> Trial &amp; error positioning
                </li>
                <li className="flex items-center text-[#9CA3AF] text-lg">
                  <span className="mr-4 text-[#EF4444]">×</span> Slow, painful traction
                </li>
                <li className="flex items-center text-[#9CA3AF] text-lg">
                  <span className="mr-4 text-[#EF4444]">×</span> High cash burn rate
                </li>
                <li className="flex items-center text-[#9CA3AF] text-lg">
                  <span className="mr-4 text-[#EF4444]">×</span> Fragmented, chaotic execution
                </li>
              </ul>
            </div>

            {/* With TFSA */}
            <div className="bg-[#0F1419] border border-[#4B9B8E]/50 rounded-sm p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4B9B8E] opacity-5 rounded-bl-full"></div>
              <h3 className="text-2xl font-bold text-[#4B9B8E] mb-8 pb-4 border-b border-[#374151]">With TFSA</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-[#FAFAF8] text-lg">
                  <span className="mr-4 text-[#4B9B8E] font-bold">✓</span> Structured, de-risked entry
                </li>
                <li className="flex items-center text-[#FAFAF8] text-lg">
                  <span className="mr-4 text-[#4B9B8E] font-bold">✓</span> Faster market adoption
                </li>
                <li className="flex items-center text-[#FAFAF8] text-lg">
                  <span className="mr-4 text-[#4B9B8E] font-bold">✓</span> Capital-optimized execution
                </li>
                <li className="flex items-center text-[#FAFAF8] text-lg">
                  <span className="mr-4 text-[#4B9B8E] font-bold">✓</span> Scalable growth system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 10. TESTIMONIALS */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Client Voice</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-4">
              What Founders & Operators Say
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">From architecture to execution — the voices of those who went through it.</p>
          </div>

          {/* Featured testimonial — large format */}
          <div className="mb-8">
            <TestimonialCard
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              title={testimonials[1].title}
              company={testimonials[1].company}
              engagementType={testimonials[1].engagementType}
              variant="light"
            />
          </div>

          {/* Secondary testimonials — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[testimonials[0], testimonials[2], testimonials[3]].map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                name={t.name}
                title={t.title}
                company={t.company}
                engagementType={t.engagementType}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 11. CLIENT SUCCESS STORIES */}
      <section className="bg-[#0F1419] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Selected Engagements</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-4">
              Real Execution. Real Outcomes.
            </h2>
            <p className="text-[#9CA3AF] text-lg">Six distinct business contexts. One consistent methodology. Structured architecture over trial and error.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <SuccessStoryCard
                key={story.id}
                clientRef={story.clientRef}
                industry={story.industry}
                sector={story.sector}
                challenge={story.challenge}
                solution={story.solution}
                outcome={story.outcome}
                tag={story.tag}
                comingSoon={story.comingSoon}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 12. PROOF / APPLICATION */}
      <section className="bg-[#1F2937] py-20 md:py-24 border-y border-[#374151]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-6">
            Built through real execution
          </h2>
          <p className="text-[#D1D5DB] text-lg mb-10 max-w-2xl mx-auto">
            TFSA architecture has been applied across diverse, complex sectors:
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <span className="px-6 py-3 bg-[#0F1419] text-[#B68817] rounded-sm font-medium border border-[#374151]">Business consulting &amp; advisory</span>
            <span className="px-6 py-3 bg-[#0F1419] text-[#B68817] rounded-sm font-medium border border-[#374151]">Logistics &amp; operations businesses</span>
            <span className="px-6 py-3 bg-[#0F1419] text-[#B68817] rounded-sm font-medium border border-[#374151]">Digital and infrastructure ventures</span>
          </div>
        </div>
      </section>

      {/* 13. WHO THIS IS FOR */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-16">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 border-b-4 border border-[#E5E7EB] border-b-[#B68817] bg-white rounded-sm">
              <h3 className="font-bold text-lg text-[#0F1419]">Global Companies</h3>
              <p className="text-sm text-[#4B5563] mt-2">Entering the complex Indian market</p>
            </div>
            <div className="p-8 border-b-4 border border-[#E5E7EB] border-b-[#B68817] bg-white rounded-sm">
              <h3 className="font-bold text-lg text-[#0F1419]">Startups</h3>
              <p className="text-sm text-[#4B5563] mt-2">Expanding into new, unfamiliar markets</p>
            </div>
            <div className="p-8 border-b-4 border border-[#E5E7EB] border-b-[#B68817] bg-white rounded-sm">
              <h3 className="font-bold text-lg text-[#0F1419]">Businesses</h3>
              <p className="text-sm text-[#4B5563] mt-2">Facing critical execution challenges</p>
            </div>
            <div className="p-8 border-b-4 border border-[#E5E7EB] border-b-[#B68817] bg-white rounded-sm">
              <h3 className="font-bold text-lg text-[#0F1419]">Founders</h3>
              <p className="text-sm text-[#4B5563] mt-2">Scaling, but lacking operational structure</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Don&apos;t enter India through trial and error.
          </h2>
          <p className="text-2xl text-[#B68817] font-medium mb-12">
            Architect it right from the start.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <PremiumButton href="/services" className="px-8 py-4 text-center justify-center">
              Phase 1 — Market Entry Architecture
            </PremiumButton>
            <PremiumButton href="/contact" variant="secondary" className="px-8 py-4 text-center justify-center">
              Book Strategy Call
            </PremiumButton>
          </div>
        </div>
      </section>

    </div>
  )
}
