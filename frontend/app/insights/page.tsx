'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SectionDivider } from '@/components/SectionDivider'
import { ArticleCard, FeaturedArticleBlock } from '@/components/PremiumCard'
import { articles, getFeatured, getNonFeatured, ALL_CATEGORIES, type CategoryFilter } from '@/lib/insights-data'

// Note: This is a client component to support category filtering.
// For Phase 2B CMS integration: swap the articles import with a fetch call.

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All Insights')

  const featured = getFeatured()
  const nonFeatured = getNonFeatured()

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All Insights') return nonFeatured
    return nonFeatured.filter((a) => a.category === activeCategory)
  }, [activeCategory, nonFeatured])

  return (
    <div className="bg-[#0F1419] min-h-screen">

      {/* PAGE HERO */}
      <section className="bg-gradient-to-b from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Authority Engine</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#FAFAF8] mb-6">
            Execution Insights
          </h1>
          <p className="text-xl md:text-2xl text-[#D1D5DB] max-w-2xl mx-auto leading-relaxed">
            Deep analysis on India market entry, startup architecture, and the execution systems that determine whether companies scale or stall.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-[#6B7280] text-sm uppercase tracking-widest">
            <span>India Market</span>
            <span className="text-[#374151]">·</span>
            <span>Architecture Thinking</span>
            <span className="text-[#374151]">·</span>
            <span>Case Breakdowns</span>
            <span className="text-[#374151]">·</span>
            <span className="text-[#B68817]">Founder Mistakes</span>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* CATEGORY FILTER */}
      <section className="py-10 bg-[#0F1419] border-b border-[#1F2937] sticky top-[64px] z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 ${
                  cat === activeCategory
                    ? 'bg-[#B68817] text-white shadow-md'
                    : 'bg-[#1F2937] text-[#9CA3AF] border border-[#374151] hover:bg-[#374151] hover:text-[#FAFAF8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featured && activeCategory === 'All Insights' && (
        <section className="py-16 md:py-20 bg-[#0F1419]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-[#1F2937]" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                Editor&apos;s Perspective
              </p>
              <div className="h-px flex-1 bg-[#1F2937]" />
            </div>
            <FeaturedArticleBlock article={featured} />
          </div>
        </section>
      )}

      {/* ARTICLE GRID */}
      <section className="py-12 md:py-20 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto px-6">

          {filteredArticles.length > 0 ? (
            <>
              {activeCategory !== 'All Insights' && (
                <div className="mb-10">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#FAFAF8] mb-2">
                    {activeCategory}
                  </h2>
                  <p className="text-[#9CA3AF]">
                    {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} in this category
                  </p>
                </div>
              )}

              {activeCategory === 'All Insights' && (
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-[#1F2937]" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                    All Articles
                  </p>
                  <div className="h-px flex-1 bg-[#1F2937]" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    variant="dark"
                  />
                ))}
              </div>
            </>
          ) : (
            /* Empty state — editorial, not a developer note */
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 border border-[#374151] rounded-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-[#374151]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#FAFAF8] mb-4">
                No articles in this category yet.
              </h3>
              <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto mb-8">
                Detailed breakdowns on this topic are being prepared. Return to read the full analysis when published.
              </p>
              <button
                onClick={() => setActiveCategory('All Insights')}
                className="inline-flex items-center gap-2 text-[#B68817] font-semibold text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                ← View All Insights
              </button>
            </div>
          )}
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* SECTOR PROOF — Where This Thinking Has Been Applied */}
      <section className="bg-[#1F2937] py-16 md:py-20 border-y border-[#374151]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">Application Environments</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#FAFAF8] mb-4">
            Where This Architecture Has Been Applied
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-10 max-w-2xl mx-auto">
            The thinking behind these articles has been built from real execution contexts — not from theoretical frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'India Market Entry',
              'B2B SaaS Distribution',
              'Consumer Brand GTM',
              'Logistics Systems',
              'EdTech Compliance',
              'Manufacturing Networks',
              'Professional Services',
              'Startup Architecture',
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 bg-[#0F1419] text-[#9CA3AF] border border-[#374151] text-sm font-medium rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-6">Ready to Apply This Thinking?</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FAFAF8] mb-6">
            Move from reading to execution.
          </h2>
          <p className="text-[#9CA3AF] text-xl mb-12 max-w-2xl mx-auto">
            The frameworks in these articles are the same ones used with clients entering India and founders redesigning their businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B68817] text-white font-semibold text-base tracking-wide hover:bg-[#A07814] transition-colors rounded-sm"
            >
              Start India Entry Assessment
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/tfsa-framework"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#374151] text-[#D1D5DB] font-semibold text-base tracking-wide hover:border-[#B68817] hover:text-[#B68817] transition-colors rounded-sm"
            >
              Explore TFSA Framework
            </Link>
          </div>
          <p className="text-[#6B7280] text-sm mt-8">
            Or{' '}
            <Link href="/contact" className="text-[#B68817] hover:underline">
              book a strategy call
            </Link>{' '}
            to discuss your specific context.
          </p>
        </div>
      </section>
    </div>
  )
}
