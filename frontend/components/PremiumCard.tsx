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
