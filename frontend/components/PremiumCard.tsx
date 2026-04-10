import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { EngagementType, StoryTag } from '@/lib/proof-data'
import type { Article, InsightCategory } from '@/lib/insights-data'

// ──────────────────────────────────────────────────────────────
// PremiumCard — Generic container
// ──────────────────────────────────────────────────────────────
interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark'
}

export function PremiumCard({
  children,
  className = '',
  variant = 'dark',
}: PremiumCardProps) {
  const variantClasses = {
    light: 'bg-amber-50 border border-amber-100',
    dark: 'bg-slate-900 border border-slate-800',
  }

  return (
    <div className={`rounded-sm p-6 md:p-8 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// FrameworkShowcase
// ──────────────────────────────────────────────────────────────
interface FrameworkShowcaseProps {
  title: string
  description?: string
  children: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export function FrameworkShowcase({
  title,
  description,
  children,
  ctaLabel,
  ctaHref,
  className = '',
}: FrameworkShowcaseProps) {
  return (
    <div className={`rounded-sm border border-[#374151] bg-[#1F2937] p-8 md:p-10 ${className}`}>
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#FAFAF8] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-[#9CA3AF] text-sm md:text-base mb-6">
          {description}
        </p>
      )}
      <div className="mb-6">
        {children}
      </div>
      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="inline-block px-6 py-3 bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-colors duration-150 shadow-sm hover:shadow-md"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// SectionCard
// ──────────────────────────────────────────────────────────────
interface SectionCardProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function SectionCard({
  title,
  description,
  children,
  className = '',
}: SectionCardProps) {
  return (
    <div className={`p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-sm ${className}`}>
      <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-gray-400 text-sm md:text-base mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// TestimonialCard — UPGRADED
// Premium, editorial. Gold vertical accent. No giant quote marks.
// ──────────────────────────────────────────────────────────────
const engagementTagColors: Record<EngagementType, string> = {
  'India Expansion': 'bg-[#B68817]/10 text-[#B68817] border border-[#B68817]/30',
  'Startup Architecture': 'bg-[#4B9B8E]/10 text-[#4B9B8E] border border-[#4B9B8E]/30',
  'Growth Execution': 'bg-[#374151] text-[#9CA3AF] border border-[#4B5563]/40',
  'TFSA Framework': 'bg-[#1F2937] text-[#D1D5DB] border border-[#374151]',
}

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  company: string
  engagementType?: EngagementType
  variant?: 'light' | 'dark'
  className?: string
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  engagementType,
  variant = 'light',
  className = '',
}: TestimonialCardProps) {
  const isLight = variant === 'light'

  return (
    <div
      className={`relative flex rounded-sm overflow-hidden ${
        isLight
          ? 'bg-white border border-[#E5E7EB] shadow-sm'
          : 'bg-[#1F2937] border border-[#374151]'
      } ${className}`}
    >
      {/* Gold vertical accent bar */}
      <div className="w-1 shrink-0 bg-[#B68817]" />

      <div className="flex flex-col p-8 gap-6">
        {/* Engagement tag */}
        {engagementType && (
          <span
            className={`self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-sm ${engagementTagColors[engagementType]}`}
          >
            {engagementType}
          </span>
        )}

        {/* Quote */}
        <p
          className={`text-lg leading-relaxed font-medium ${
            isLight ? 'text-[#374151]' : 'text-[#D1D5DB]'
          }`}
        >
          &ldquo;{quote}&rdquo;
        </p>

        {/* Attribution */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-dashed border-current/10"
          style={{ borderColor: isLight ? '#E5E7EB' : '#374151' }}
        >
          {/* Monogram avatar */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
              isLight ? 'bg-[#0F1419] text-white' : 'bg-[#B68817] text-white'
            }`}
          >
            {name.charAt(0)}
          </div>
          <div>
            <p className={`font-bold text-sm ${isLight ? 'text-[#0F1419]' : 'text-[#FAFAF8]'}`}>
              {name}
            </p>
            <p className={`text-xs ${isLight ? 'text-[#6B7280]' : 'text-[#6B7280]'}`}>
              {title} &middot; <span className="text-[#B68817]">{company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// SuccessStoryCard — UPGRADED
// Structured proof block with tag, sector, comingSoon indicator.
// ──────────────────────────────────────────────────────────────
const storyTagColors: Record<StoryTag, { bg: string; text: string }> = {
  'India Expansion': { bg: 'bg-[#B68817]', text: 'text-white' },
  'Startup Architecture': { bg: 'bg-[#4B9B8E]', text: 'text-white' },
  'GTM': { bg: 'bg-[#374151]', text: 'text-[#FAFAF8]' },
  'Growth Execution': { bg: 'bg-[#1F2937]', text: 'text-[#D1D5DB]' },
  'TFSA Framework': { bg: 'bg-[#0F1419]', text: 'text-[#D1D5DB]' },
}

interface SuccessStoryCardProps {
  clientRef: string
  industry: string
  sector: string
  challenge: string
  solution: string
  outcome: string
  tag: StoryTag
  comingSoon?: boolean
  className?: string
}

export function SuccessStoryCard({
  clientRef,
  industry,
  sector,
  challenge,
  solution,
  outcome,
  tag,
  comingSoon = false,
  className = '',
}: SuccessStoryCardProps) {
  const tagStyle = storyTagColors[tag]

  return (
    <div className={`bg-[#0F1419] border border-[#374151] rounded-sm flex flex-col ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-[#374151]">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${tagStyle.bg} ${tagStyle.text}`}
          >
            {tag}
          </span>
          <span className="text-xs text-[#6B7280] font-medium uppercase tracking-wide">
            {sector}
          </span>
        </div>
        <h4 className="font-serif text-xl font-bold text-[#FAFAF8] leading-tight">
          {clientRef}
        </h4>
        <p className="text-[#9CA3AF] text-xs mt-1">{industry}</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5 flex-1">
        <div>
          <p className="text-[#6B7280] text-xs uppercase tracking-widest font-semibold mb-2">
            The Challenge
          </p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">{challenge}</p>
        </div>
        <div>
          <p className="text-[#6B7280] text-xs uppercase tracking-widest font-semibold mb-2">
            The Architecture
          </p>
          <p className="text-[#D1D5DB] text-sm leading-relaxed">{solution}</p>
        </div>
        <div>
          <p className="text-[#4B9B8E] text-xs uppercase tracking-widest font-semibold mb-2">
            The Outcome
          </p>
          <p className="text-[#FAFAF8] text-sm font-medium leading-relaxed">{outcome}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        {comingSoon ? (
          <p className="text-xs text-[#6B7280] italic border-t border-[#1F2937] pt-4">
            Full case study — coming soon
          </p>
        ) : (
          <div className="border-t border-[#374151] pt-4">
            <span className="text-xs font-semibold text-[#B68817] uppercase tracking-wide">
              Full Case Study Available
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// ArticleCard — NEW
// Used in Insights grid layout
// ──────────────────────────────────────────────────────────────
const categoryColors: Record<InsightCategory, string> = {
  'India Market Insights': 'text-[#B68817] border-[#B68817]/40',
  'Startup Architecture Thinking': 'text-[#4B9B8E] border-[#4B9B8E]/40',
  'Case Breakdowns': 'text-[#D1D5DB] border-[#374151]',
  'Founder Mistakes': 'text-[#EF4444] border-[#EF4444]/40',
}

interface ArticleCardProps {
  article: Article
  variant?: 'dark' | 'light'
  className?: string
}

export function ArticleCard({ article, variant = 'dark', className = '' }: ArticleCardProps) {
  const catColor = categoryColors[article.category]
  const isLight = variant === 'light'
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div
      className={`group flex flex-col rounded-sm border transition-colors duration-200 ${
        isLight
          ? 'bg-white border-[#E5E7EB] hover:border-[#B68817]/50'
          : 'bg-[#0F1419] border-[#374151] hover:border-[#B68817]/40'
      } ${className}`}
    >
      {/* Visual accent block */}
      <div
        className="h-2 w-full rounded-t-sm"
        style={{ backgroundColor: article.accentColor }}
      />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Category tag */}
        <span
          className={`self-start text-xs font-semibold uppercase tracking-widest border px-2 py-1 rounded-sm ${catColor}`}
        >
          {article.category}
        </span>

        {/* Title */}
        <h3
          className={`font-serif text-lg font-bold leading-snug group-hover:text-[#B68817] transition-colors ${
            isLight ? 'text-[#0F1419]' : 'text-[#FAFAF8]'
          }`}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`text-sm leading-relaxed line-clamp-3 flex-1 ${
            isLight ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
          }`}
        >
          {article.excerpt}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-dashed"
          style={{ borderColor: isLight ? '#E5E7EB' : '#1F2937' }}
        >
          <div className={`text-xs ${isLight ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            <span>{formattedDate}</span>
            <span className="mx-2">·</span>
            <span>{article.readingTime} min read</span>
          </div>
          <span className="text-xs font-semibold text-[#B68817] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// FeaturedArticleBlock — NEW
// Editorial hero layout for the featured article on /insights
// ──────────────────────────────────────────────────────────────
interface FeaturedArticleBlockProps {
  article: Article
  className?: string
}

export function FeaturedArticleBlock({ article, className = '' }: FeaturedArticleBlockProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div
      className={`group grid grid-cols-1 lg:grid-cols-5 rounded-sm border border-[#374151] overflow-hidden hover:border-[#B68817]/50 transition-colors duration-300 ${className}`}
    >
      {/* Visual panel */}
      <div
        className="lg:col-span-2 min-h-[220px] lg:min-h-0 relative flex items-end p-8"
        style={{
          background: article.image 
            ? 'none' 
            : `linear-gradient(135deg, ${article.accentColor}22 0%, #0F1419 100%)`,
          borderRight: '1px solid #374151',
        }}
      >
        {article.image && (
          <Image 
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
          />
        )}
        {/* Decorative marks */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-[#B68817]/20 rounded-sm" />
        <div className="absolute top-12 left-12 w-16 h-16 border border-[#B68817]/10 rounded-sm" />

        <div className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B68817] border border-[#B68817]/40 px-3 py-1 rounded-sm">
            Featured
          </span>
          <p className="text-[#6B7280] text-xs mt-4 uppercase tracking-widest">
            {article.category}
          </p>
        </div>
      </div>

      {/* Content panel */}
      <div className="lg:col-span-3 p-8 md:p-10 bg-[#0F1419] flex flex-col gap-5">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#FAFAF8] leading-tight group-hover:text-[#B68817] transition-colors">
          {article.title}
        </h2>

        <p className="text-[#9CA3AF] leading-relaxed text-base">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#6B7280] bg-[#1F2937] border border-[#374151] px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#1F2937]">
          <div className="text-xs text-[#6B7280]">
            <span className="text-[#9CA3AF] font-medium">{article.author}</span>
            <span className="mx-2">·</span>
            <span>{formattedDate}</span>
            <span className="mx-2">·</span>
            <span>{article.readingTime} min read</span>
          </div>
          <span className="text-sm font-semibold text-[#B68817] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read Article <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </div>
  )
}
