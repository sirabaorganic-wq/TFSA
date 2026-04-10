import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'
import { PremiumButton } from '@/components/PremiumButton'

export const metadata: Metadata = {
  title: 'Who We Work With | TFSA Global',
  description: 'Qualification-oriented execution frameworks for global companies, growth startups, and founders.',
}

export default function WhoWeWorkWith() {
  return (
    <div className="bg-[#0F1419] min-h-screen">
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Client Fit</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Who We Work With
          </h1>
          <p className="text-xl md:text-2xl text-[#D1D5DB] mb-10 max-w-3xl mx-auto">
            We partner with businesses facing critical execution challenges that require structural architecture, not standard advice.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      <section className="py-20 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Persona 1 */}
            <div className="bg-white border-t-4 border-[#B68817] shadow-sm p-10 relative">
              <h2 className="font-serif text-3xl font-bold text-[#0F1419] mb-4">Global Companies</h2>
              <p className="text-[#B68817] font-semibold uppercase tracking-wider text-sm mb-6">Entering the India Market</p>
              <p className="text-[#4B5563] text-lg mb-6">
                You have a proven business model globally but recognize that India is a fundamentally different ecosystem. Copy-pasting your global strategy won't work.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex text-[#4B5563]"><strong className="text-[#0F1419] mr-2">Critical Capability:</strong> Localized product pricing matrices.</li>
                <li className="flex text-[#4B5563]"><strong className="text-[#0F1419] mr-2">Critical Capability:</strong> Native distribution alliances.</li>
                <li className="flex text-[#4B5563]"><strong className="text-[#0F1419] mr-2">Critical Capability:</strong> High-trust enterprise business development.</li>
              </ul>
            </div>

            {/* Persona 2 */}
            <div className="bg-[#1F2937] border-t-4 border-[#4B9B8E] shadow-sm p-10 text-white relative">
              <h2 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-4">Growth-Stage Startups</h2>
              <p className="text-[#4B9B8E] font-semibold uppercase tracking-wider text-sm mb-6">Expanding &amp; Organizing Matrix</p>
              <p className="text-[#D1D5DB] text-lg mb-6">
                You have achieved initial product-market fit. Now, operations are breaking as team size balloons. You need to transition from "hustle" to "system."
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex text-[#D1D5DB]"><strong className="text-[#FAFAF8] mr-2">Structural Imperative:</strong> Scalable organizational structures.</li>
                <li className="flex text-[#D1D5DB]"><strong className="text-[#FAFAF8] mr-2">Operational Imperative:</strong> Systematic GTM playbooks.</li>
                <li className="flex text-[#D1D5DB]"><strong className="text-[#FAFAF8] mr-2">Leadership Imperative:</strong> Leadership delegation mechanics.</li>
              </ul>
            </div>

            {/* Persona 3 */}
            <div className="bg-[#1F2937] border-t-4 border-[#FAFAF8] shadow-sm p-10 text-white relative">
              <h2 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-4">Founders</h2>
              <p className="text-[#9CA3AF] font-semibold uppercase tracking-wider text-sm mb-6">Seeking Tactical Freedom</p>
              <p className="text-[#D1D5DB] text-lg mb-6">
                You are the bottleneck. Every decision routes through you. To build a highly profitable, investor-ready business, the dependency on your heroics must end.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex text-[#D1D5DB]"><strong className="text-[#FAFAF8] mr-2">Needed:</strong> Founder dependency elimination.</li>
                <li className="flex text-[#D1D5DB]"><strong className="text-[#FAFAF8] mr-2">Needed:</strong> Decentralized decision frameworks.</li>
                <li className="flex text-[#D1D5DB]"><strong className="text-[#FAFAF8] mr-2">Needed:</strong> True operational independence.</li>
              </ul>
            </div>

            {/* Persona 4 */}
            <div className="bg-white border-t-4 border-[#374151] shadow-sm p-10 relative">
              <h2 className="font-serif text-3xl font-bold text-[#0F1419] mb-4">Investors / Platforms</h2>
              <p className="text-[#374151] font-semibold uppercase tracking-wider text-sm mb-6">Protecting Capital &amp; Trajectory</p>
              <p className="text-[#4B5563] text-lg mb-6">
                You've funded incredible visionaries, but they lack the operational chops to deploy that capital safely within complex environments like India.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex text-[#4B5563]"><strong className="text-[#0F1419] mr-2">Needed:</strong> Portfolio health stabilization.</li>
                <li className="flex text-[#4B5563]"><strong className="text-[#0F1419] mr-2">Needed:</strong> Structuring unit economics.</li>
                <li className="flex text-[#4B5563]"><strong className="text-[#0F1419] mr-2">Needed:</strong> Execution oversight and tracking.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#0F1419] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-8">
            Are we the right fit?
          </h2>
          <p className="text-xl text-[#9CA3AF] mb-12">
            Initiate our phase-one assessment. We will diagnose your architectural integrity before determining if a partnership is viable.
          </p>
          <PremiumButton href="/contact">
            Start the Assessment
          </PremiumButton>
        </div>
      </section>
    </div>
  )
}
