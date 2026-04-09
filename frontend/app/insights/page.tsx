import type { Metadata } from 'next'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Insights | TFSA Authority Engine',
  description: 'India Market Insights, Startup Architecture Thinking, Case Breakdowns, and Founder Mistakes.',
}

export default function Insights() {
  // Empty state data prep for Phase 2 integration
  const activeCategory = 'All Insights'
  const categories = [
    'All Insights',
    'India Market Insights',
    'Startup Architecture Thinking',
    'Case Breakdowns',
    'Founder Mistakes'
  ]
  const hasPosts = false // Set to false to show the empty CMS states for Phase 2 styling

  return (
    <div className="bg-[#0F1419] min-h-screen">
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Authority Engine</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Execution Insights
          </h1>
          <p className="text-xl text-[#D1D5DB] max-w-2xl mx-auto">
            Deep dives into architectural strategy, India market metrics, and the execution required to navigate scaling limits.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      <section className="py-12 bg-[#0F1419] border-b border-[#374151]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === activeCategory 
                    ? 'bg-[#B68817] text-white' 
                    : 'bg-[#1F2937] text-[#9CA3AF] hover:bg-[#374151] hover:text-[#FAFAF8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          
          {hasPosts ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Render mapped UI articles here in Phase 2 */}
             </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-24 h-24 mx-auto mb-6 opacity-20 text-[#0F1419]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0F1419] mb-4">No content published yet.</h3>
              <p className="text-[#4B5563] text-lg max-w-xl mx-auto">
                Detailed breakdowns on market entry patterns, startup architecture pitfalls, and execution case studies are currently being drafted.
              </p>
              
              <div className="mt-12 p-8 border border-dashed border-[#B68817] bg-[#B68817]/5 inline-block text-left rounded-sm max-w-md w-full">
                <p className="text-xs uppercase tracking-widest text-[#B68817] font-bold mb-2">Internal Note (CMS Ready)</p>
                <p className="text-[#374151] text-sm">
                  This page has been structured to function as an index for dynamically managed content routing via <code>/blog</code> architecture in Phase 2. The layout utilizes category tagging and featured post slots.
                </p>
              </div>
            </div>
          )}
          
        </div>
      </section>
    </div>
  )
}
