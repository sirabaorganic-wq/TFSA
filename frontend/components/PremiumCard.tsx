import React from 'react'

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

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  company: string
  className?: string
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  className = '',
}: TestimonialCardProps) {
  return (
    <div className={`bg-[#FAFAF8] border border-[#E5E7EB] p-8 rounded-sm relative ${className}`}>
      <div className="absolute top-6 left-6 text-[#E5E7EB] opacity-50">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <div className="pt-6 relative z-10">
        <p className="text-[#374151] text-lg sm:text-xl font-medium leading-relaxed mb-6">
          "{quote}"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1F2937] rounded-full flex items-center justify-center text-white font-bold text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-[#0F1419]">{name}</p>
            <p className="text-sm text-[#4B5563]">{title}, <span className="text-[#B68817]">{company}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SuccessStoryCardProps {
  clientName: string
  industry: string
  challenge: string
  solution: string
  outcome: string
  className?: string
}

export function SuccessStoryCard({
  clientName,
  industry,
  challenge,
  solution,
  outcome,
  className = '',
}: SuccessStoryCardProps) {
  return (
    <div className={`bg-[#1F2937] border border-[#374151] rounded-sm p-8 ${className}`}>
      <div className="mb-6 border-b border-[#374151] pb-4">
        <p className="text-[#B68817] font-semibold text-sm uppercase tracking-wider mb-2">{industry}</p>
        <h4 className="font-serif text-2xl font-bold text-[#FAFAF8]">{clientName}</h4>
      </div>
      
      <div className="space-y-5">
        <div>
          <p className="text-[#9CA3AF] text-xs uppercase tracking-wide font-semibold mb-1">The Challenge</p>
          <p className="text-[#D1D5DB] text-sm leading-relaxed">{challenge}</p>
        </div>
        <div>
          <p className="text-[#9CA3AF] text-xs uppercase tracking-wide font-semibold mb-1">The Architecture (Solution)</p>
          <p className="text-[#D1D5DB] text-sm leading-relaxed">{solution}</p>
        </div>
        <div>
          <p className="text-[#4B9B8E] text-xs uppercase tracking-wide font-semibold mb-1">The Outcome</p>
          <p className="text-[#FAFAF8] font-medium text-sm leading-relaxed">{outcome}</p>
        </div>
      </div>
    </div>
  )
}
