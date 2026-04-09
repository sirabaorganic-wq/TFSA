import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Services | TFSA Global & TFSA Framework',
  description: 'Our core services: Market Entry Architecture, GTM Strategy, Distribution Setup, Business Development, and Sales Systems.',
}

function ServiceBlock({ title, problem, whatWeBuild, outcome, delayClassName }: { title: string, problem: string, whatWeBuild: React.ReactNode, outcome: string, delayClassName?: string }) {
  return (
    <div className={`p-8 bg-[#1F2937] border border-[#374151] rounded-sm mb-8 ${delayClassName || ''}`}>
      <h3 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-6 border-b border-[#374151] pb-4">{title}</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#EF4444] mb-2">The Problem</h4>
          <p className="text-[#D1D5DB] text-lg leading-relaxed">{problem}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#B68817] mb-2">What We Build</h4>
          <div className="text-[#FAFAF8] text-lg leading-relaxed">
            {whatWeBuild}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#4B9B8E] mb-2">The Outcome</h4>
          <p className="text-[#FAFAF8] font-medium text-lg leading-relaxed">{outcome}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className="bg-[#0F1419]">
      <section className="bg-gradient-to-b from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Execution Breakdown
          </h1>
          <p className="text-xl text-[#B68817] mb-8">
            The distinct architectural components of a successful India expansion.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      <section className="py-20 md:py-32 bg-[#0F1419]">
        <div className="max-w-5xl mx-auto px-6">
          <ServiceBlock 
            title="Market Entry Architecture"
            problem="Companies attempt to copy-paste their global model into India. They misunderstand pricing tolerance, regulatory nuance, and competitive dynamics, leading to immense capital burn before realizing product-market fit."
            whatWeBuild={
              <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF]">
                <li>Comprehensive risk mapping and regulatory compliance framework.</li>
                <li>Localized pricing and product-positioning strategies.</li>
                <li>Initial team structure and talent acquisition blueprints.</li>
              </ul>
            }
            outcome="A de-risked, structurally sound market entry model that prevents early cash-bleed and aligns perfectly with local expectations."
          />
          
          <ServiceBlock 
            title="GTM Strategy"
            problem="Brilliant products fail to find an audience because the go-to-market plan relies heavily on standard digital ads without deeply penetrating key local demographics or enterprise networks."
            whatWeBuild={
              <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF]">
                <li>Hybrid GTM blueprints combining high-touch B2B channels and massive B2C digital reach.</li>
                <li>Acquisition models tailored for Indian unit economics.</li>
                <li>Value-proposition localization.</li>
              </ul>
            }
            outcome="Faster time-to-traction with reduced customer acquisition costs (CAC) specific to the geography."
          />

          <ServiceBlock 
            title="Distribution Setup"
            problem="India's geography is highly fragmented. Navigating tier-1 versus tier-2 networks, logistics, and multi-layered vendor channels is notoriously difficult for outsiders."
            whatWeBuild={
              <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF]">
                <li>Physical and digital distribution channel mapping.</li>
                <li>Partnership networks with regional distributors.</li>
                <li>Operational logistics and supply chain optimization.</li>
              </ul>
            }
            outcome="An asset-light, highly scalable distribution network that operates efficiently across multiple regional zones."
          />

          <ServiceBlock 
            title="Business Development"
            problem="Cold outreach yields exceptionally low conversion in India. Trust operates on relationships, referrals, and localized networks."
            whatWeBuild={
              <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF]">
                <li>Direct introductions to high-value enterprise accounts.</li>
                <li>Strategic alliance formation and joint venture exploration.</li>
                <li>On-ground representation during the early phase zero.</li>
              </ul>
            }
            outcome="Accelerated trust acquisition and immediate pipeline generation within previously inaccessible enterprise tiers."
          />

          <ServiceBlock 
            title="Sales Systems"
            problem="You hire a local sales team but fail to give them a replicable system, turning scaling into a game of individual heroics rather than predictable revenue."
            whatWeBuild={
              <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF]">
                <li>Standardized sales playbooks explicitly designed for the Indian buyer psyche.</li>
                <li>CRM architectures, negotiation frameworks, and performance metrics.</li>
                <li>Sales team training and operational management protocols.</li>
              </ul>
            }
            outcome="A predictable, independently functioning revenue engine that scales independently of the founding team."
          />
        </div>
      </section>
    </div>
  )
}
