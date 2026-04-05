import React from 'react'
import Link from 'next/link'

interface PremiumButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function PremiumButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: PremiumButtonProps) {
  const baseClasses = 'inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-sm font-medium transition-all duration-150'

  const variantClasses = {
    primary: 'bg-[#B8956A] text-white hover:bg-[#A08560] focus:outline-none focus:ring-2 focus:ring-[#B8956A] focus:ring-offset-2 focus:ring-offset-[#0F1419]',
    secondary: 'border border-[#B8956A] text-[#B8956A] hover:bg-[#B8956A] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B8956A]',
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  )
}

interface PremiumButtonInlineProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function PremiumButtonInline({
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
}: PremiumButtonInlineProps) {
  const baseClasses = 'px-6 py-3 rounded-sm font-medium transition-all duration-150 cursor-pointer'

  const variantClasses = {
    primary: 'bg-[#B8956A] text-white hover:bg-[#A08560] focus:outline-none focus:ring-2 focus:ring-[#B8956A] focus:ring-offset-2 focus:ring-offset-[#0F1419]',
    secondary: 'border border-[#B8956A] text-[#B8956A] hover:bg-[#B8956A] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B8956A]',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
