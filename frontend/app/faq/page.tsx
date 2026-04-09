import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'FAQ | TFSA Consulting',
  description: 'Frequently asked questions regarding our startup architecture process, India expansion execution, and engagement models.',
}

function FaqItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  return (
    <div className="border-b border-[#374151] py-8">
      <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-4">{question}</h3>
      <div className="text-[#D1D5DB] text-lg leading-relaxed space-y-4">
        {answer}
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
          <FaqItem 
            question="How is TFSA Global different from a traditional strategic consulting firm?"
            answer={<p>Traditional consultants supply strategy reports and step away. TFSA Global bridges strategy with execution. We <em>architect</em> the foundation, then remain on the ground to implement GTM, build distribution pipelines, and drive sales. We own the outcome alongside you.</p>}
          />
          <FaqItem 
            question="What exactly is the 'TFSA Framework'?"
            answer={<p>The Freedom Startup Architect (TFSA) Framework is our proprietary methodology utilized to eliminate founder dependency and instill systemic growth. It is divided into three pillars: <strong>Model</strong> (Architecture &amp; Economics), <strong>Momentum</strong> (Systems &amp; Distribution), and <strong>Money</strong> (Scale &amp; Readiness).</p>}
          />
          <FaqItem 
            question="Do you only work with global companies entering India?"
            answer={<p>No. While India expansion is a major pillar (TFSA Global), our broader practice (TFSA Framework) supports growth-stage startups and founders who are hitting scaling ceilings worldwide, requiring structural business redesign to continue expanding profitability.</p>}
          />
          <FaqItem 
            question="What does an engagement timeline look like?"
            answer={
              <>
                <p>Engagements are completely structured around the phase of involvement:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li><strong>Phase 1 (diagnose/architect):</strong> Typically 4-8 weeks.</li>
                  <li><strong>Phase 2 &amp; 3 (execute/scale):</strong> Often structured as 3 to 6-month intensive retainers targeting measurable performance gates.</li>
                </ul>
              </>
            }
          />
          <FaqItem 
            question="Do you implement technology, or just business processes?"
            answer={<p>We architect the business systems, which strongly informs your technical requirements. While we do not operate as an IT development agency, we align your tech stack directly to your distribution and execution methodologies, ensuring your engineering scaling matches your business scaling.</p>}
          />
          <FaqItem 
            question="What are your pricing paradigms?"
            answer={<p>Our compensation is aligned with the depth of execution. Phase 1 architecture engagements are flat-fee structures. Execution and scaling retainers (Phase 2 &amp; 3) intertwine flat fees with performance/growth-aligned incentives dependent on the size of the systemic build-out.</p>}
          />
        </div>
      </section>
    </div>
  )
}
