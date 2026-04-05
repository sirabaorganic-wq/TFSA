interface SectionDividerProps {
  variant?: 'thin' | 'spacing'
  className?: string
}

export function SectionDivider({ variant = 'spacing', className = '' }: SectionDividerProps) {
  if (variant === 'thin') {
    return <div className={`border-t border-[#E5E7EB] dark:border-[#374151] ${className}`} />
  }

  // spacing variant - just adds generous vertical spacing
  return <div className={`py-6 md:py-8 ${className}`} />
}
