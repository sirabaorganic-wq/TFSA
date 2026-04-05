import type { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionDivider } from '@/components/SectionDivider'
import { PremiumButton } from '@/components/PremiumButton'
import { ChevronRight, MapPin, CheckCircle2 } from 'lucide-react'

const faqs = [
  // General / Positioning FAQs
  {
    group: 'General',
    q: 'What exactly is TFSA?',
    a: `TFSA (The Freedom Startup Architect) is a business architecture and execution firm that helps companies design, build, and scale structured growth systems.\n\nUnlike traditional consulting, TFSA does not just provide advice — we architect and execute market entry, go-to-market, and scaling systems.`
  },
  {
    group: 'General',
    q: 'How is TFSA different from traditional consulting firms?',
    a: `Traditional consulting focuses on strategy and reports.\n\nTFSA focuses on:\n• Architecture (how the business is designed)\n• Execution (how it actually runs)\n• Systems (how it scales without chaos)\n\nWe don't stop at recommendations — we build the system.`
  },
  {
    group: 'General',
    q: 'Who is TFSA for?',
    a: `TFSA works with:\n• International companies entering India\n• Startups preparing to scale\n• Founders facing execution challenges\n• Firms looking to build structured growth systems`
  },
  {
    group: 'General',
    q: 'Who is TFSA NOT for?',
    a: `TFSA is not suitable for:\n• Very early-stage idea-only founders\n• Companies looking only for marketing services\n• Businesses unwilling to implement structured systems`
  },
  // Market Entry & India FAQs
  {
    group: 'Market Entry',
    q: 'Why is India a difficult market to enter?',
    a: `India is not a single market — it is highly diverse in terms of:\n• Pricing sensitivity\n• Customer behavior\n• Distribution channels\n\nMost companies fail due to incorrect execution, not product.`
  },
  {
    group: 'Market Entry',
    q: 'What are the biggest mistakes global companies make in India?',
    a: `• Copying global pricing models\n• Misunderstanding customer segments\n• Weak distribution strategy\n• Lack of local execution systems`
  },
  {
    group: 'Market Entry',
    q: 'Do you provide local partnerships in India?',
    a: `TFSA helps identify and structure partnerships as part of the GTM and distribution strategy, depending on the engagement scope.`
  },
  // Services & Process FAQs
  {
    group: 'Services',
    q: 'What services does TFSA provide?',
    a: `TFSA works across three core areas:\n• Market Entry Architecture\n• GTM & Distribution Design\n• Execution & Scale`
  },
  {
    group: 'Services',
    q: 'How does your engagement process work?',
    a: `We follow a structured approach:\n1. Diagnose\n2. Architect\n3. Build\n4. Scale\n\nEach phase builds on the previous one to ensure stability and scalability.`
  },
  {
    group: 'Services',
    q: 'Do you only provide strategy or also execution?',
    a: `We do both.\n\nTFSA is built on:\nStrategy + Systems + Execution\n\nWe ensure ideas are implemented, not just discussed.`
  },
  {
    group: 'Services',
    q: 'What is the typical duration of engagement?',
    a: `• Phase 1: 2–4 weeks\n• Phase 2: 3–6 weeks\n• Phase 3: 6–12 weeks\n\nTimelines vary based on scope and complexity.`
  },
  // Pricing & Engagement FAQs
  {
    group: 'Pricing',
    q: 'What is your pricing structure?',
    a: `TFSA follows a phase-based pricing model.\n\nFor international clients:\n• Phase 1: $5K–$10K\n• Phase 2: $8K–$20K\n• Phase 3: $15K+\n\nPricing depends on scope and execution depth.`
  },
  {
    group: 'Pricing',
    q: 'Can we start with a smaller engagement?',
    a: `Yes.\nMost clients start with Phase 1 (Market Entry Architecture) before moving to deeper execution.`
  },
  {
    group: 'Pricing',
    q: 'Do you offer performance-based pricing?',
    a: `In select cases, TFSA may include performance-based or success-linked components for execution-heavy engagements.`
  },
  {
    group: 'Pricing',
    q: 'What is the pricing for Indian clients (phase-wise)?',
    a: `🇮🇳 Indian Client Pricing\n\nPhase 1: Market Entry Architecture\n• ₹2,00,000 – ₹5,00,000\n• Fixed project-based\n👉 Ideal for companies exploring India entry\n\nPhase 2: GTM & Distribution Design\n• ₹3,00,000 – ₹7,00,000\n• Fixed + milestone-based\n👉 Ideal for companies ready to build a growth system\n\nPhase 3: Execution & Scale\n• ₹5,00,000 – ₹15,00,000+\n• Retainer or project-based\n👉 Ideal for companies focused on traction and scaling`
  },
  // Outcome & Results + Conversion FAQs
  {
    group: 'Outcomes',
    q: 'What results can we expect?',
    a: `Clients typically gain:\n• Clear market entry strategy\n• Structured GTM system\n• Faster traction\n• Reduced execution risk\n• Scalable growth framework`
  },
  {
    group: 'Outcomes',
    q: 'Who is behind TFSA?',
    a: `Rajesh Thakur is the founder of TFSA, focused on building structured, scalable business systems and enabling founder independence.`
  },
  {
    group: 'Outcomes',
    q: `What are the three phases, and what does TFSA do in each?`,
    a: `TFSA operates through a structured 3-phase architecture model designed to ensure successful market entry and scalable growth.\n\n**Phase 1: Market Entry Architecture**\nObjective: Define where and how you should enter India\nWhat TFSA does:\n• Market validation & opportunity assessment\n• Customer segmentation (ICP)\n• India-specific positioning & pricing strategy\n• Entry model design (B2B, partnerships, hybrid)\n• Risk & feasibility analysis\n👉 **Outcome:** A clear, data-backed strategy to enter India with minimal risk\n\n**Phase 2: GTM & Distribution Design**\nObjective: Build a structured customer acquisition and distribution system\nWhat TFSA does:\n• Go-to-market (GTM) strategy design\n• Channel selection (digital, partnerships, B2B)\n• Distribution pathway architecture\n• Sales funnel design\n• Local partnership strategy\n👉 **Outcome:** A complete growth engine ready for execution\n\n**Phase 3: Execution & Scale**\nObjective: Turn strategy into real traction and scalable operations\nWhat TFSA does:\n• Pilot execution (60–90 days)\n• Sales process implementation\n• Partner onboarding & management\n• KPI dashboards & performance tracking\n• Continuous optimization\n👉 **Outcome:** Initial traction, real customers, and a scalable execution system`
  },
  {
    group: 'Strategic',
    q: `Why shouldn't we just try entering India ourselves?`,
    a: `You can.\nBut most companies lose:\n• Time (6–12 months)\n• Capital (wrong execution)\n• Market opportunity\n\nTFSA reduces this risk through structured entry and execution.`
  },
  {
    group: 'Strategic',
    q: `What happens if we don't build systems early?`,
    a: `Without systems:\n• Growth becomes chaotic\n• Founder dependency increases\n• Scaling becomes inefficient\n\nTFSA ensures structure before scale.`
  },
  {
    group: 'Strategic',
    q: `What is the first step to get started?`,
    a: `Start with:\n**Phase 1 — Market Entry Architecture**\n\nThis gives you clarity before committing to execution.`
  }
]

export const metadata: Metadata = {
  title: 'FAQs | TFSA - The Freedom Startup Architect',
  description: 'Comprehensive FAQ covering TFSA services, India market entry, pricing for Indian/international clients, 3-phase process, and strategic consulting for startups.',
}

export default function FAQ() {
  const groups = faqs.reduce((acc: Record<string, typeof faqs[number][]>, faq) => {
    if (!acc[faq.group]) acc[faq.group] = []
    acc[faq.group].push(faq)
    return acc
  }, {}) as Record<string, typeof faqs[number][]>

  return (
    <div className="bg-[#0F1419]">
      {/* Hero */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1419] mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about TFSA consulting, our 3-phase process, India market entry, pricing, and how we help founders build scalable startups.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* FAQ Groups */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groups).map(([groupName, groupFaqs]) => (
            <div key={groupName} className="mb-12 sm:mb-16 last:mb-0">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0F1419] mb-8 sm:mb-10 border-b border-[#E5E7EB] pb-4">
                {groupName.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {groupFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="mb-3 last:mb-0 border border-[#E5E7EB] bg-white rounded-sm">
                    <AccordionTrigger className="px-6 sm:px-8 py-5 sm:py-6 text-left hover:no-underline h-auto">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F1419]">{(faq as any).q}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 sm:px-8 pb-6 sm:pb-8 text-sm sm:text-base text-[#374151] leading-relaxed">
                      <div className="whitespace-pre-wrap">
                        {(faq as any).a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* CTA */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-4 sm:mb-6">
            Questions Still Remain?
          </h2>
          <p className="text-[#D1D5DB] text-lg mb-8">
            Let&apos;s discuss your specific situation and how TFSA can help architect your growth.
          </p>
          <PremiumButton href="/contact" className="justify-center">
            Schedule Strategic Consultation
          </PremiumButton>
        </div>
      </section>
    </div>
  )
}

