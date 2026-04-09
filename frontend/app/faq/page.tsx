'use client'

import { SectionDivider } from '@/components/SectionDivider'
import { useState } from 'react'

function FaqItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[#374151]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#FAFAF8] group-hover:text-[#B68817] transition-colors duration-200 pr-6">
          {question}
        </h3>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full border border-[#374151] flex items-center justify-center text-[#B68817] transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-6 text-[#D1D5DB] text-lg leading-relaxed space-y-4">
          {answer}
        </div>
      </div>
    </div>
  )
}

function FaqCategory({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2 className="font-serif text-3xl font-bold text-[#B68817] mb-2">{title}</h2>
      <div className="border-t border-[#B68817]/30">
        {children}
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="bg-[#0F1419] min-h-screen">
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#B68817]">
            Understanding our process, paradigms, and timelines.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      <section className="py-12 md:py-24 bg-[#0F1419]">
        <div className="max-w-4xl mx-auto px-6">

          {/* General / Positioning */}
          <FaqCategory title="General">
            <FaqItem
              question="What exactly is TFSA?"
              answer={
                <p>
                  TFSA (The Freedom Startup Architect) is a business architecture and execution firm that helps companies design, build, and scale structured growth systems. Unlike traditional consulting, TFSA does not just provide advice — we architect and execute market entry, go-to-market, and scaling systems.
                </p>
              }
            />
            <FaqItem
              question="How is TFSA different from traditional consulting firms?"
              answer={
                <>
                  <p>Traditional consultants supply strategy reports and step away. TFSA bridges strategy with execution across three dimensions:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Architecture</strong> — how the business is designed</li>
                    <li><strong>Execution</strong> — how it actually runs</li>
                    <li><strong>Systems</strong> — how it scales without chaos</li>
                  </ul>
                  <p>We don't stop at recommendations — we build the system and own the outcome alongside you.</p>
                </>
              }
            />
            <FaqItem
              question="Who is TFSA for?"
              answer={
                <ul className="list-disc pl-5 space-y-2">
                  <li>International companies entering India</li>
                  <li>Startups preparing to scale</li>
                  <li>Founders facing execution challenges</li>
                  <li>Firms looking to build structured growth systems</li>
                </ul>
              }
            />
            <FaqItem
              question="Who is TFSA NOT for?"
              answer={
                <ul className="list-disc pl-5 space-y-2">
                  <li>Very early-stage, idea-only founders</li>
                  <li>Companies looking only for marketing services</li>
                  <li>Businesses unwilling to implement structured systems</li>
                </ul>
              }
            />
            <FaqItem
              question="Who is behind TFSA?"
              answer={
                <p>
                  Rajesh Thakur is the founder of TFSA, focused on building structured, scalable business systems and enabling founder independence. TFSA is built on structured architecture frameworks, an execution-first methodology, and clear systems with measurable outcomes — real businesses, not theoretical strategies.
                </p>
              }
            />
          </FaqCategory>

          {/* Services */}
          <FaqCategory title="Services">
            <FaqItem
              question="What services does TFSA provide?"
              answer={
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Market Entry Architecture</strong></li>
                  <li><strong>GTM &amp; Distribution Design</strong></li>
                  <li><strong>Execution &amp; Scale</strong></li>
                </ul>
              }
            />
            <FaqItem
              question="What are the three phases, and what does TFSA do in each?"
              answer={
                <>
                  <p>TFSA operates through a structured 3-phase architecture model:</p>
                  <div className="mt-4 space-y-6">
                    <div>
                      <p className="font-bold text-[#FAFAF8]">Phase 1 — Market Entry Architecture</p>
                      <p className="text-sm text-[#B68817] mb-2">Objective: Define where and how you should enter India</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Market validation &amp; opportunity assessment</li>
                        <li>Customer segmentation (ICP)</li>
                        <li>India-specific positioning &amp; pricing strategy</li>
                        <li>Entry model design (B2B, partnerships, hybrid)</li>
                        <li>Risk &amp; feasibility analysis</li>
                      </ul>
                      <p className="mt-2 text-[#B68817]">→ Outcome: A clear, data-backed strategy to enter India with minimal risk</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#FAFAF8]">Phase 2 — GTM &amp; Distribution Design</p>
                      <p className="text-sm text-[#B68817] mb-2">Objective: Build a structured customer acquisition and distribution system</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Go-to-market (GTM) strategy design</li>
                        <li>Channel selection (digital, partnerships, B2B)</li>
                        <li>Distribution pathway architecture</li>
                        <li>Sales funnel design</li>
                        <li>Local partnership strategy</li>
                      </ul>
                      <p className="mt-2 text-[#B68817]">→ Outcome: A complete growth engine ready for execution</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#FAFAF8]">Phase 3 — Execution &amp; Scale</p>
                      <p className="text-sm text-[#B68817] mb-2">Objective: Turn strategy into real traction and scalable operations</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Pilot execution (60–90 days)</li>
                        <li>Sales process implementation</li>
                        <li>Partner onboarding &amp; management</li>
                        <li>KPI dashboards &amp; performance tracking</li>
                        <li>Continuous optimization</li>
                      </ul>
                      <p className="mt-2 text-[#B68817]">→ Outcome: Initial traction, real customers, and a scalable execution system</p>
                    </div>
                  </div>
                </>
              }
            />
            <FaqItem
              question="Do you only provide strategy or also execution?"
              answer={
                <p>
                  Both. TFSA is built on Strategy + Systems + Execution. We ensure ideas are implemented, not just discussed. We <em>architect</em> the foundation, then remain on the ground to implement GTM, build distribution pipelines, and drive sales.
                </p>
              }
            />
            <FaqItem
              question="Do you implement technology, or just business processes?"
              answer={
                <p>
                  We architect the business systems, which strongly informs your technical requirements. While we do not operate as an IT development agency, we align your tech stack directly to your distribution and execution methodologies — ensuring your engineering scaling matches your business scaling.
                </p>
              }
            />
            <FaqItem
              question="Do you only work with global companies entering India?"
              answer={
                <p>
                  No. While India expansion is a major pillar (TFSA Global), our broader practice supports growth-stage startups and founders who are hitting scaling ceilings worldwide and require structural business redesign to continue expanding profitably.
                </p>
              }
            />
            <FaqItem
              question="Do you provide local partnerships in India?"
              answer={
                <p>
                  TFSA helps identify and structure partnerships as part of the GTM and distribution strategy, depending on the engagement scope.
                </p>
              }
            />
          </FaqCategory>

          {/* Pricing */}
          <FaqCategory title="Pricing">
            <FaqItem
              question="What is your pricing structure?"
              answer={
                <>
                  <p>Our compensation is aligned with the depth of execution. TFSA follows a phase-based pricing model.</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="font-bold text-[#FAFAF8]">For International Clients (USD)</p>
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Phase 1:</strong> $5,000 – $10,000 (flat-fee)</li>
                        <li><strong>Phase 2:</strong> $8,000 – $20,000 (flat + milestone-based)</li>
                        <li><strong>Phase 3:</strong> $15,000+ (retainer with performance-aligned incentives)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-[#FAFAF8]">For Indian Clients (INR)</p>
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Phase 1:</strong> ₹2,00,000 – ₹5,00,000 (fixed project-based)</li>
                        <li><strong>Phase 2:</strong> ₹3,00,000 – ₹7,00,000 (fixed + milestone-based)</li>
                        <li><strong>Phase 3:</strong> ₹5,00,000 – ₹15,00,000+ (retainer or project-based)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">Pricing depends on scope and execution depth.</p>
                </>
              }
            />
            <FaqItem
              question="Can we start with a smaller engagement?"
              answer={
                <p>
                  Yes. Most clients start with Phase 1 (Market Entry Architecture) before moving to deeper execution. This gives you clarity and confidence before committing to larger phases.
                </p>
              }
            />
            <FaqItem
              question="Do you offer performance-based pricing?"
              answer={
                <p>
                  In select cases, TFSA may include performance-based or success-linked components for execution-heavy engagements. Execution and scaling retainers (Phases 2 &amp; 3) often intertwine flat fees with growth-aligned incentives dependent on the size of the systemic build-out.
                </p>
              }
            />
          </FaqCategory>

          {/* Results */}
          <FaqCategory title="Results">
            <FaqItem
              question="What results can we expect?"
              answer={
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clear market entry strategy</li>
                  <li>Structured GTM system</li>
                  <li>Faster traction</li>
                  <li>Reduced execution risk</li>
                  <li>Scalable growth framework</li>
                </ul>
              }
            />
            <FaqItem
              question="How do you measure success?"
              answer={
                <ul className="list-disc pl-5 space-y-2">
                  <li>Market validation clarity</li>
                  <li>Customer acquisition</li>
                  <li>Revenue traction</li>
                  <li>System implementation</li>
                </ul>
              }
            />
            <FaqItem
              question="Will TFSA guarantee results?"
              answer={
                <p>
                  No credible firm guarantees outcomes. However, TFSA significantly reduces risk by ensuring structured strategy, validated execution, and system-driven scaling — measurable gates at every phase.
                </p>
              }
            />
          </FaqCategory>

          {/* Strategic Questions */}
          <FaqCategory title="Strategic Questions">
            <FaqItem
              question="Why is India a difficult market to enter?"
              answer={
                <p>India is not a single market — it is highly diverse in terms of pricing sensitivity, customer behavior, and distribution channels. Most companies fail due to incorrect execution, not product.</p>
              }
            />
            <FaqItem
              question="What are the biggest mistakes global companies make in India?"
              answer={
                <ul className="list-disc pl-5 space-y-2">
                  <li>Copying global pricing models without localisation</li>
                  <li>Misunderstanding customer segments</li>
                  <li>Weak distribution strategy</li>
                  <li>Lack of local execution systems</li>
                </ul>
              }
            />
            <FaqItem
              question="Why shouldn't we just try entering India ourselves?"
              answer={
                <>
                  <p>You can. But most companies lose:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Time</strong> — 6–12 months of missteps</li>
                    <li><strong>Capital</strong> — burnt on wrong execution</li>
                    <li><strong>Market opportunity</strong> — competitors move faster</li>
                  </ul>
                  <p className="mt-2">TFSA reduces this risk through structured entry and execution.</p>
                </>
              }
            />
            <FaqItem
              question="What happens if we don't build systems early?"
              answer={
                <>
                  <p>Without systems:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Growth becomes chaotic</li>
                    <li>Founder dependency increases</li>
                    <li>Scaling becomes inefficient and expensive</li>
                  </ul>
                  <p className="mt-2">TFSA ensures structure before scale.</p>
                </>
              }
            />
            <FaqItem
              question="What is the first step to get started?"
              answer={
                <p>
                  Start with <strong>Phase 1 — Market Entry Architecture</strong>. This gives you clarity before committing to execution, with a clear, data-backed entry strategy at the end.
                </p>
              }
            />
          </FaqCategory>

        </div>
      </section>
    </div>
  )
}