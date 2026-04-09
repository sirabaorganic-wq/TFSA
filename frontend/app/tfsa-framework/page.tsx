import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'
import { PremiumButton } from '@/components/PremiumButton'

export const metadata: Metadata = {
  title: 'The TFSA Framework | Startup Architecture',
  description: 'Design Your Business. Build Your Freedom. The foundational architecture methodology behind successful scaling.',
}

export default function TFSAFramework() {
  return (
    <div className="bg-[#0F1419] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Methodology</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#FAFAF8] mb-6">
            The Foundation Behind Scalable Businesses
          </h1>
          <p className="text-xl md:text-2xl text-[#D1D5DB] font-serif italic mb-4">
            Design Your Business. Build Your Freedom.
          </p>
          <p className="text-[#B68817] text-lg font-semibold tracking-wide">
            Model → Momentum → Money
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">The Problem</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
                Startups Don't Fail Because of Bad Ideas.
                <br />
                <span className="text-[#EF4444]">They Fail Because of Bad Architecture.</span>
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                Most founders build themselves a high-paying, high-stress job — not a business. The moment scaling demands increase, the structural weaknesses in the organization break the founder.
              </p>
              <div className="flex flex-col gap-3 text-[#4B5563]">
                <p className="flex items-start gap-2"><span className="text-[#EF4444] font-bold mt-1">↘</span> Growth without structure collapses.</p>
                <p className="flex items-start gap-2"><span className="text-[#EF4444] font-bold mt-1">↘</span> Funding without clarity fails.</p>
              </div>
            </div>

            <div className="bg-[#1F2937] p-10 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-6 border-b border-[#374151] pb-4">
                Most founders struggle with:
              </h3>
              <ul className="space-y-4">
                {[
                  'Unscalable business models',
                  'Broken unit economics',
                  'Chaotic operations',
                  'Weak investor narratives',
                  'Founder dependency & burnout',
                ].map((item) => (
                  <li key={item} className="flex items-center text-[#FAFAF8]">
                    <span className="text-[#EF4444] mr-3 font-bold">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap in the Market */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-[#0F1419] p-10 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-6 border-b border-[#374151] pb-4">
                Traditional Consulting Is Broken
              </h3>
              <ul className="space-y-4">
                {[
                  'Advice without execution',
                  'Templates without context',
                  'Strategy separated from operations',
                  'Growth disconnected from capital',
                ].map((item) => (
                  <li key={item} className="flex items-center text-[#D1D5DB]">
                    <span className="text-[#EF4444] mr-3 font-bold">✗</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-[#B68817] p-4 rounded-sm">
                <p className="text-[#0F1419] font-bold text-center">
                  Founders are left with plans — not systems.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">The Gap in the Market</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
                Startup Architecture Is an Emerging Category.
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed">
                The market is flooded with advisors who hand over slide decks and leave. What founders actually need is someone who stays in the trenches — building systems, not writing reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">The Solution</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
                The Freedom Startup Architect (TFSA)
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                A startup architecture &amp; execution firm that designs businesses to be built for long-term freedom — not short-term survival.
              </p>
              <p className="text-xl font-bold text-[#0F1419] italic">We don't consult. We architect businesses.</p>
            </div>

            <div className="bg-[#1F2937] p-10 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-6 border-b border-[#374151] pb-4">
                Designed to be:
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'S', rest: 'calable' },
                  { label: 'P', rest: 'rofitable' },
                  { label: 'I', rest: 'nvestor-trusted' },
                  { label: 'F', rest: 'ounder-independent' },
                ].map(({ label, rest }) => (
                  <li key={label + rest} className="flex items-center text-[#FAFAF8]">
                    <span className="text-[#4B9B8E] mr-3 font-bold">✓</span>
                    <span><span className="text-[#B68817] font-bold">{label}</span>{rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Core Philosophy</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
            Our Belief
          </h2>
          <p className="text-[#9CA3AF] text-lg italic mb-16 max-w-3xl mx-auto">
            "Freedom in business is achieved when growth, impact, and capital work together — not against each other."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="p-8 border border-[#374151] bg-[#0F1419] rounded-sm">
              <div className="text-[#B68817] text-xl font-bold mb-4 uppercase tracking-wider">Strategy</div>
              <h3 className="text-2xl text-white mb-2">Before Scale</h3>
              <p className="text-[#9CA3AF]">Scaling a broken model just accelerates failure.</p>
            </div>
            <div className="p-8 border border-[#374151] bg-[#0F1419] rounded-sm">
              <div className="text-[#B68817] text-xl font-bold mb-4 uppercase tracking-wider">Economics</div>
              <h3 className="text-2xl text-white mb-2">Before Expansion</h3>
              <p className="text-[#9CA3AF]">Ensure unit economics work before pouring capital into new markets.</p>
            </div>
            <div className="p-8 border border-[#374151] bg-[#0F1419] rounded-sm">
              <div className="text-[#B68817] text-xl font-bold mb-4 uppercase tracking-wider">Systems</div>
              <h3 className="text-2xl text-white mb-2">Before Speed</h3>
              <p className="text-[#9CA3AF]">Operational velocity without a systemic structure is just chaos.</p>
            </div>
          </div>
          <p className="text-[#B68817] font-bold tracking-wider uppercase">Freedom as the End Goal</p>
        </div>
      </section>

      {/* TFSA Framework — 3 Pillars + 5-Layer Stack */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">TFSA Framework</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
              The 3 Strategic Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white border-t-4 border-[#1F2937] p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-2">1. Model</h3>
              <p className="text-[#B68817] text-sm uppercase tracking-wider font-semibold mb-6">Architecture</p>
              <p className="text-[#4B5563]">Business clarity, positioning, and unit economics. Establishing pure business clarity, refining the value proposition, and locking down sustainable unit economics.</p>
            </div>
            <div className="bg-white border-t-4 border-[#1F2937] p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-2">2. Momentum</h3>
              <p className="text-[#B68817] text-sm uppercase tracking-wider font-semibold mb-6">Systems</p>
              <p className="text-[#4B5563]">GTM, execution, team &amp; operations. Driving operational execution on the ground, building the internal systems that deliver the product reliably.</p>
            </div>
            <div className="bg-white border-t-4 border-[#1F2937] p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0F1419] mb-2">3. Money</h3>
              <p className="text-[#B68817] text-sm uppercase tracking-wider font-semibold mb-6">Capital</p>
              <p className="text-[#4B5563]">Investor readiness, metrics, scale strategy. Preparing the organization for scale by organizing financial data and ensuring true investor readiness.</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
              The 5-Layer Architecture
            </h2>
            <p className="text-[#4B5563] text-lg mb-12">Each layer unlocks the next stage of growth.</p>
          </div>

          <div className="bg-[#1F2937] rounded-sm p-8 text-center max-w-4xl mx-auto relative shadow-2xl mb-12">
            <div className="space-y-4 relative z-10 w-full max-w-[60%] mx-auto">
              {[
                { label: 'FREEDOM', sub: 'Automation & founder independence', bg: 'bg-[#B68817]', text: 'text-[#FAFAF8]' },
                { label: 'SCALE', sub: 'Capital & growth readiness', bg: 'bg-slate-400', text: 'text-[#0F1419]' },
                { label: 'BUILD', sub: 'Execute with structure', bg: 'bg-slate-500', text: 'text-[#FAFAF8]' },
                { label: 'DESIGN', sub: 'Architect scalable systems', bg: 'bg-slate-600', text: 'text-[#FAFAF8]' },
                { label: 'FOUNDATION', sub: 'Validate the model', bg: 'bg-slate-700', text: 'text-[#FAFAF8]' },
              ].map(({ label, sub, bg, text }) => (
                <div key={label} className={`${bg} ${text} py-3 px-4`}>
                  <div className="font-bold">{label}</div>
                  <div className={`text-xs mt-1 opacity-80 ${text}`}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-2xl font-serif font-bold text-[#374151] mb-6">Process Transformation</p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xl font-bold text-[#0F1419]">
              <span className="text-[#EF4444]">Chaos</span>
              <span className="text-[#9CA3AF]">&rarr;</span>
              <span>Clarity</span>
              <span className="text-[#9CA3AF]">&rarr;</span>
              <span>Scale</span>
              <span className="text-[#9CA3AF]">&rarr;</span>
              <span className="text-[#4B9B8E]">Freedom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-[#0F1419] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-4">
              From Chaos → Clarity → Scale → Freedom
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Diagnose', desc: 'Audit & scorecard' },
              { step: '02', title: 'Architect', desc: 'Model, systems, economics' },
              { step: '03', title: 'Build', desc: 'Execution & operations' },
              { step: '04', title: 'Scale', desc: 'GTM, capital, partnerships' },
              { step: '05', title: 'Automate', desc: 'Dashboards & delegation' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#1F2937] p-6 rounded-sm border-t-4 border-[#B68817] text-center">
                <div className="text-[#B68817] text-3xl font-bold mb-3">{step}</div>
                <h3 className="text-[#FAFAF8] font-serif text-xl font-bold mb-2">{title}</h3>
                <p className="text-[#9CA3AF] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Who We Serve</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
              Our Core Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Startups (Seed → Series A)',
              'Founders / CEOs scaling without chaos',
              'Growth-stage companies preparing for funding',
              'Accelerators & investment platforms',
            ].map((item) => (
              <div key={item} className="bg-white border border-[#E5E7EB] p-6 shadow-sm flex items-center gap-4">
                <span className="text-[#4B9B8E] text-2xl font-bold">›</span>
                <p className="text-[#0F1419] font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-[#B68817]">Founders who want growth + control + freedom</p>
          </div>
        </div>
      </section>

      {/* What Makes TFSA Different */}
      <section className="bg-[#1F2937] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Differentiation</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
              What Makes TFSA Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0F1419] p-8 rounded-sm border border-[#374151]">
              <h3 className="text-[#9CA3AF] font-serif text-xl font-bold mb-6 border-b border-[#374151] pb-4">Traditional Consulting</h3>
              <ul className="space-y-4">
                {[
                  'Advice-focused',
                  'Generic templates',
                  'Siloed thinking',
                  'Short-term fixes',
                  'Ends with reports',
                ].map((item) => (
                  <li key={item} className="flex items-center text-[#9CA3AF]">
                    <span className="text-[#EF4444] mr-3 font-bold">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#B68817] p-8 rounded-sm">
              <h3 className="text-[#0F1419] font-serif text-xl font-bold mb-6 border-b border-[#0F1419]/20 pb-4">TFSA</h3>
              <ul className="space-y-4">
                {[
                  'Architecture + execution',
                  'Custom-built systems',
                  'Integrated strategy',
                  'Long-term scalability',
                  'Ends with results',
                ].map((item) => (
                  <li key={item} className="flex items-center text-[#0F1419] font-semibold">
                    <span className="text-[#0F1419] mr-3 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Core Value Proposition</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-6">
              What Clients Actually Gain
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Scalable business architecture',
              'Strong unit economics before growth',
              'Investor-ready narrative & metrics',
              'Reduced founder dependency',
              'Capital-efficient scaling',
              'Absolute clarity on "what to do next"',
            ].map((item) => (
              <div key={item} className="bg-white border border-[#E5E7EB] p-6 shadow-sm">
                <span className="text-[#4B9B8E] text-2xl font-bold block mb-3">✓</span>
                <p className="text-[#0F1419] font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="bg-[#0F1419] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Market Opportunity</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-4">
              Why TFSA Scales
            </h2>
            <p className="text-[#B68817] italic text-lg">Startup Architecture is an emerging category.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🚀', title: 'Explosion of startups globally', desc: 'New ventures are launching at an unprecedented rate, all needing architectural clarity.' },
              { icon: '🔥', title: 'Founder burnout at all-time high', desc: 'Founders are exhausted running businesses that were never designed for them to be free.' },
              { icon: '📊', title: 'Investors demand structure & metrics', desc: 'Capital follows clarity. Investors now expect operational proof, not just vision decks.' },
              { icon: '🏗️', title: 'Consulting market lacks execution depth', desc: 'The gap between strategy and results has never been wider — TFSA bridges it.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#1F2937] p-8 rounded-sm border border-[#374151]">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#FAFAF8] mb-3">{title}</h3>
                <p className="text-[#9CA3AF]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="bg-[#FAFAF8] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">The Founder</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1419] mb-2">
                Rajesh Thakur
              </h2>
              <p className="text-[#4B5563] text-lg mb-6 italic">Founder &amp; Startup Architect</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Built TFSA from real founder pain',
                  'Combines strategy, systems & capital thinking',
                  'Architect mindset — not operator mindset',
                  'Focused on freedom, clarity & long-term value',
                ].map((item) => (
                  <li key={item} className="flex items-center text-[#4B5563]">
                    <span className="text-[#4B9B8E] mr-3 font-bold">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1F2937] p-10 rounded-sm text-center">
              <p className="text-[#B68817] text-xl font-serif italic leading-relaxed">
                "Think like an architect. Build like a leader."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#1a222a] to-[#0F1419] py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-6">We Don't Build Startups</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            We Architect Businesses That Create Freedom.
          </h2>
          <p className="text-[#9CA3AF] text-lg italic mb-10">
            Where clarity becomes systems, systems become scale, and scale creates freedom.
          </p>
          <PremiumButton href="/contact" className="px-8 py-4 justify-center mt-8">
            Book Architecture Call
          </PremiumButton>
        </div>
      </section>
    </div>
  )
}