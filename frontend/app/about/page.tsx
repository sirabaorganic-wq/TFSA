import type { Metadata } from 'next'
import { SectionCard } from '@/components/PremiumCard'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'About TFSA | The Freedom Startup Architect',
  description: 'Learn about the TFSA operating model: Strategy, Systems, and Execution. Understanding Rajesh Thakur&apos;s approach to founder-independent startup architecture.',
}

export default function About() {
  return (
    <div className="bg-[#0F1419]">
      {/* Intro Section */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-2xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
            Who We Are
          </h1>
          <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
            TFSA is not a traditional consulting firm. We are a founder-led strategy practice dedicated to helping startup founders build independent, sustainable, scalable businesses.
          </p>
          <p className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed">
            We combine strategic thinking with execution-first mentality. Every recommendation is operationalized, tested, and aligned to real business outcomes.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Three Pillars Section */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1419] mb-12 sm:mb-16 text-center">
            The TFSA Operating Model
          </h2>
          
          <div className="space-y-8 sm:space-y-12">
            {/* Pillar 1 - Strategy */}
            <div className="pb-8 sm:pb-10 border-b border-[#E5E7EB]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="md:w-1/3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1419] mb-3 sm:mb-4">Strategy</h3>
                  <div className="h-1 w-16 bg-[#B8956A]"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[#374151] text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                    Market-specific, founder-independent strategy that positions your startup for sustainable growth. We dig deep into India market dynamics, competitive landscapes, and build GTM clarity that scales.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-[#374151]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>India market dynamics expertise and competitive positioning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>Go-to-market clarity and customer acquisition strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>Strategic outcomes focus with measurable KPIs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 2 - Systems */}
            <div className="pb-8 sm:pb-10 border-b border-[#E5E7EB]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="md:w-1/3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1419] mb-3 sm:mb-4">Systems</h3>
                  <div className="h-1 w-16 bg-[#B8956A]"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[#374151] text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                    Operational systems and frameworks that enable your team to execute without founder micromanagement. We build decision frameworks, accountability structures, and delegation models that scale.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-[#374151]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>Decision frameworks and accountability structures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>Scalable processes and organizational design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>Team alignment, clarity, and leadership delegation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 3 - Execution */}
            <div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="md:w-1/3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1419] mb-3 sm:mb-4">Execution</h3>
                  <div className="h-1 w-16 bg-[#B8956A]"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[#374151] text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                    Implementation excellence and accountability that turns strategy into results. We guide on-ground execution, manage iteration cycles, and ensure founder independence becomes structural reality.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-[#374151]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>On-ground delivery, iteration, and course correction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>Founder dependency elimination through delegation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B8956A] font-bold">→</span>
                      <span>Measurable business outcomes and sustainable scaling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Philosophy Section */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
            Our Philosophy
          </h2>
          <div className="space-y-4 sm:space-y-6 text-[#D1D5DB] text-lg leading-relaxed">
            <p>
              <strong className="text-[#FAFAF8]">Founder independence is the ultimate outcome.</strong> We don&apos;t build consultant dependencies. We build systems that make you strategically free.
            </p>
            <p>
              <strong className="text-[#FAFAF8]">Execution beats strategy.</strong> A mediocre strategy executed brilliantly outperforms a brilliant strategy poorly executed. We emphasize the operational side of growth.
            </p>
            <p>
              <strong className="text-[#FAFAF8]">Markets matter more than startups.</strong> India is a complex, opportunity-rich market. Understanding it deeply is non-negotiable for success.
            </p>
            <p>
              <strong className="text-[#FAFAF8]">Scale without breaking requires architecture.</strong> Most startups plateau because they grow as individuals, not as systems. We architect systems-first growth.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Comparison Table */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-8 sm:mb-12 text-center">
            Why TFSA is Different
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#374151]">
                  <th className="text-left py-4 px-4 text-[#FAFAF8] font-semibold">Aspect</th>
                  <th className="text-left py-4 px-4 text-[#9CA3AF] font-medium">Traditional Consulting</th>
                  <th className="text-left py-4 px-4 text-[#B8956A] font-medium">TFSA Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1F2937]">
                  <td className="py-4 px-4 text-[#FAFAF8] font-medium">Focus</td>
                  <td className="py-4 px-4 text-[#9CA3AF]">Strategy and reports</td>
                  <td className="py-4 px-4 text-[#FAFAF8]">Execution and outcomes</td>
                </tr>
                <tr className="border-b border-[#1F2937]">
                  <td className="py-4 px-4 text-[#FAFAF8] font-medium">Dependency</td>
                  <td className="py-4 px-4 text-[#9CA3AF]">Creates consultant dependency</td>
                  <td className="py-4 px-4 text-[#FAFAF8]">Eliminates founder dependency</td>
                </tr>
                <tr className="border-b border-[#1F2937]">
                  <td className="py-4 px-4 text-[#FAFAF8] font-medium">Timeline</td>
                  <td className="py-4 px-4 text-[#9CA3AF]">6-12 month engagements</td>
                  <td className="py-4 px-4 text-[#FAFAF8]">Long-term strategic partnerships</td>
                </tr>
                <tr className="border-b border-[#1F2937]">
                  <td className="py-4 px-4 text-[#FAFAF8] font-medium">Expertise</td>
                  <td className="py-4 px-4 text-[#9CA3AF]">General business frameworks</td>
                  <td className="py-4 px-4 text-[#FAFAF8]">India market + founder dynamics</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-[#FAFAF8] font-medium">Ownership</td>
                  <td className="py-4 px-4 text-[#9CA3AF]">Consultant owns the plan</td>
                  <td className="py-4 px-4 text-[#FAFAF8]">Founder owns the future</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Vision & Mission */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0F1419] mb-4">
                Our Vision
              </h2>
              <p className="text-[#374151] text-lg leading-relaxed">
                A thriving ecosystem of founder-independent startups building meaningful products for India and the world. Founders who are strategically free to focus on vision and innovation, not operations and crisis management.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0F1419] mb-4">
                Our Mission
              </h2>
              <p className="text-[#374151] text-lg leading-relaxed">
                To architect startup growth systems that eliminate founder dependency, enable sustainable scaling, and create lasting competitive advantages. We measure success by founder freedom and business resilience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
