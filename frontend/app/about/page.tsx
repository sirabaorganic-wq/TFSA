import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'
import { PremiumButton } from '@/components/PremiumButton'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About | TFSA Global & Rajesh Thakur',
  description: 'Startup Architect & India Expansion Architect. Execution over perfection. Systems over chaos.',
}

export default function About() {
  return (
    <div className="bg-[#0F1419]">
      {/* 1. HERO - FIRM PHILOSOPHY & WHY WE EXIST */}
      <section className="bg-gradient-to-b from-[#0F1419] to-[#1F2937] py-20 md:py-32">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Philosophy &amp; Foundation</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Startup Architecture meets
            <br />
            <span className="text-[#B68817]">India Expansion.</span>
          </h1>
          <p className="text-[#D1D5DB] text-xl leading-relaxed mb-6">
            TFSA Global is a strategy and execution firm built on the premise that businesses solve complex scaling problems with <strong className="text-white">structure</strong>, not just hustle.
          </p>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-3xl mx-auto">
            We exist because execution is where companies fail. A brilliant strategy without an operational footprint is merely a hallucination. We don't just advise; we engineer the internal systems and external distribution required for sustainable growth.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 2. THE TFSA GLOBAL NARRATIVE (FRAMEWORK TO GLOBAL) */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-12 text-center">
            From Architecture to Expansion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-[#374151]">
            <div>
              <h3 className="font-bold text-[#0F1419] mb-4">The Foundation</h3>
              <p className="mb-4">
                It started with <strong>The Freedom Startup Architect (TFSA) Framework</strong>. Built from real founder challenges, the framework focused on structure, execution, and creating founder-independent businesses across three pillars: Model, Momentum, and Money.
              </p>
              <div className="p-6 bg-[#1F2937] border-l-4 border-[#B68817] text-[#D1D5DB] text-sm md:text-base italic shadow-md">
                "Most startups scale operationally until the founder breaks. We built the architecture to ensure the systems scale, creating true founder freedom."
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#0F1419] mb-4">The Commercial Evolution</h3>
              <p className="mb-4">
                As we engineered these sustainable growth systems, a glaring market gap emerged: <strong>India Expansion</strong>. Global companies and growth-stage startups were attempting to enter India with theoretical strategies, but failing at the operational layer.
              </p>
              <p>
                This led to our commercial evolution: <strong>TFSA Global</strong>. We applied our structural methodologies to the complex, fragmented reality of India market entry. We moved from organizing the internal foundation to architecting the external conquest—GTM, distribution, and business development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* 3. RAJESH THAKUR & CREDIBILITY */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

            <div className="lg:w-2/3">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAF8] leading-tight mb-2">
                Rajesh Thakur
              </h2>
              <p className="font-serif text-2xl text-[#B68817] mb-8">
                Startup Architect | India Expansion Architect
              </p>

              <div className="space-y-6 text-[#D1D5DB] text-lg leading-relaxed mb-8">
                <p>
                  With <strong className="text-white">over 20 years of experience</strong> architecting startups for independent growth, Rajesh has helped <strong className="text-white">15+ founders</strong> construct truly scalable organizations.
                </p>
                <p>
                  He observed founders struggling with the same problems repeatedly: building unscalable chaos instead of systematic clarity. He founded TFSA to bring a different philosophy: execution-backed strategy, founder-centric thinking, and the absolute belief that sustainable freedom comes from systems, not heroics.
                </p>
                <p>
                  As the mind behind the TFSA Framework and the driving force of TFSA Global, Rajesh bridges the gap between chaotic startup innovation and the disciplined execution required to conquer the Indian market.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="border border-[#374151] p-6 bg-[#0F1419] rounded-sm">
                  <h4 className="text-[#FAFAF8] font-bold mb-2">India Market Mastery</h4>
                  <p className="text-[#9CA3AF] text-sm">Deep understanding of local dynamics, regulatory pipelines, and distribution networks necessary for success.</p>
                </div>
                <div className="border border-[#374151] p-6 bg-[#0F1419] rounded-sm">
                  <h4 className="text-[#FAFAF8] font-bold mb-2">Execution Over Perfection</h4>
                  <p className="text-[#9CA3AF] text-sm">A good plan executed today beats a perfect plan executed never. Strategy operationalized.</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/rajesh-thakur-entrepreneur/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-[#B68817] text-[#B68817] rounded-sm font-medium hover:bg-[#B68817] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            <div className="lg:w-1/3 w-full max-w-sm mx-auto">
              <div className="aspect-[4/5] bg-[#0F1419] rounded-sm relative overflow-hidden border-2 border-[#374151] shadow-2xl group">
                <Image
                  src="/profileimage.png"
                  alt="Rajesh Thakur"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

          {/* Books Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Authorship</p>
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8]">
                Books by Rajesh Thakur
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Book 1 */}
              <div className="flex flex-col sm:flex-row gap-8 bg-[#0F1419] p-8 border border-[#374151] rounded-sm group hover:border-[#B68817] transition-colors">
                <div className="w-full sm:w-40 flex-shrink-0 relative aspect-[2/3] overflow-hidden rounded-sm shadow-xl">
                  <Image src="/breakingfree.jpg" alt="Breaking Free" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-[#FAFAF8] font-serif text-2xl font-bold mb-1">
                      Breaking Free
                    </h4>
                    <p className="text-[#B68817] text-sm font-semibold mb-4 uppercase tracking-wide">Mindset, Clarity &amp; Personal Transformation</p>
                    <p className="text-[#D1D5DB] text-base leading-relaxed mb-4">
                      A perspective on personal growth, clarity, and transformation — focused on breaking limiting patterns and building a mindset aligned with growth.
                    </p>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                      This represents the foundational philosophy behind decision-making, execution, and long-term business thinking.
                    </p>
                  </div>
                  <div>
                    <a href="#" className="inline-flex items-center px-4 py-2 border border-[#B68817] text-[#B68817] rounded-sm text-sm font-medium hover:bg-[#B68817] hover:text-white transition-colors">
                      Buy Book
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Book 2 */}
              <div className="flex flex-col sm:flex-row gap-8 bg-[#0F1419] p-8 border border-[#374151] rounded-sm group hover:border-[#B68817] transition-colors">
                <div className="w-full sm:w-40 flex-shrink-0 relative aspect-[2/3] overflow-hidden rounded-sm shadow-xl">
                  <Image src="/let'sstartup.png" alt="Let's Startup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-[#FAFAF8] font-serif text-2xl font-bold mb-1">
                      Let's Startup
                    </h4>
                    <p className="text-[#B68817] text-sm font-semibold mb-4 uppercase tracking-wide">Entrepreneurship &amp; Business Building Framework</p>
                    <p className="text-[#D1D5DB] text-base leading-relaxed mb-4">
                      A practical perspective on entrepreneurship, business design, and building scalable ventures.
                    </p>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                      This book reflects the foundational thinking behind TFSA — focused on structure, execution, and long-term sustainability in business.
                    </p>
                  </div>
                  <div>
                    <a href="#" className="inline-flex items-center px-4 py-2 border border-[#B68817] text-[#B68817] rounded-sm text-sm font-medium hover:bg-[#B68817] hover:text-white transition-colors">
                      Buy Book
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
            Work with Rajesh directly
          </h2>
          <p className="text-xl text-[#9CA3AF] mb-12">
            For global companies attempting to unlock India and founders attempting to unlock their freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <PremiumButton href="/contact" className="px-8 py-4 justify-center">
              Start India Entry Assessment
            </PremiumButton>
            <PremiumButton href="/contact" variant="secondary" className="px-8 py-4 justify-center">
              Schedule Strategy Session
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
