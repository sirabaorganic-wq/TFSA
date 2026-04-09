import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'
import { PremiumButton } from '@/components/PremiumButton'

export const metadata: Metadata = {
  title: 'Start India Entry Assessment | TFSA Global',
  description: 'Initiate your market entry assessment and architect your expansion strategy before committing capital.',
}

export default function Contact() {
  return (
    <div className="bg-[#0F1419] min-h-screen">
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">India Entry Assessment</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Start Your India Entry Right
          </h1>
          <p className="text-xl text-[#D1D5DB] max-w-2xl mx-auto">
            Before entering the market, we evaluate structural alignment, economic readiness, and organizational gaps. Fill out the assessment to begin.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      <section className="py-20 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Form Section */}
            <div className="lg:w-3/5">
              <div className="bg-white p-8 md:p-12 border border-[#E5E7EB] shadow-sm rounded-sm">
                <form className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Full Name</label>
                      <input type="text" className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" placeholder="Jane Doe" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Email Address</label>
                      <input type="email" className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" placeholder="jane@company.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Company Name</label>
                    <input type="text" className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" placeholder="Company Inc." required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Current Market</label>
                      <input type="text" className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" placeholder="e.g. USA, UK, Singapore" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Business Stage</label>
                      <select className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" required>
                        <option value="" disabled selected>Select Stage</option>
                        <option value="seed">Seed / Validating</option>
                        <option value="seriesA">Series A / Early Scaling</option>
                        <option value="growth">Growth Stage (Series B+)</option>
                        <option value="enterprise">Established Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Primary Goal in India</label>
                    <textarea rows={4} className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" placeholder="Briefly describe what you are looking to execute or achieve..." required></textarea>
                  </div>

                  <button type="submit" className="w-full inline-block px-6 py-4 bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-colors duration-150 shadow-sm text-center text-lg">
                    Submit Assessment Request
                  </button>
                </form>
              </div>
            </div>

            {/* Strategic Framing Section */}
            <div className="lg:w-2/5">
              <div className="bg-[#1F2937] p-10 rounded-sm border-t-4 border-[#B68817] text-white h-full">
                <h3 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-6">Execution Readiness</h3>
                <div className="space-y-6 text-[#D1D5DB] mb-10">
                  <p>
                    TFSA Global engagements are reserved for organizations who have global market fit and are willing to embrace a structured architectural overhaul for their India GTM.
                  </p>
                  <p>
                    <strong>What happens next?</strong><br />
                    After receiving your details, our team will review your alignment within 48 hours. If viable, we will schedule a Phase 1 Consultation to map out the architectural gaps in your expansion model.
                  </p>
                </div>

                <div className="border-t border-[#374151] pt-8">
                  <h4 className="font-bold text-[#FAFAF8] mb-4">Looking for general advice?</h4>
                  <p className="text-[#9CA3AF] text-sm mb-6">
                    If you are not ready for a structural assessment but want to consult with Rajesh Thakur directly on market conditions:
                  </p>
                  <a href="mailto:thefreedomstartuparchitect@gmail.com" className="block w-full py-3 border border-[#B68817] text-[#B68817] text-center font-bold font-sm hover:bg-[#B68817] hover:text-[#FAFAF8] transition-colors rounded-sm">
                    Book General Strategy Call
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
