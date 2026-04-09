'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'TFSA Framework', href: '/tfsa-framework' },
    { label: 'India Expansion', href: '/india-expansion' },
    { label: 'Services', href: '/services' },
    { label: 'Who We Work With', href: '/who-we-work-with' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'FAQ', href: '/faq' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0F1419] backdrop-blur-md border-b border-[#1F2937]/20 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200 flex-shrink-0 group"
            title="Design Your Business. Build Your Freedom"
          >
            {/* Compass / Building Icon — matches the logo mark */}
            <svg
              width="38"
              height="38"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              {/* Buildings / columns */}
              <rect x="20" y="55" width="10" height="28" rx="1" fill="#FAFAF8" />
              <rect x="33" y="45" width="10" height="38" rx="1" fill="#FAFAF8" />
              <rect x="46" y="38" width="10" height="45" rx="1" fill="#FAFAF8" />
              <rect x="59" y="45" width="10" height="38" rx="1" fill="#FAFAF8" />
              <rect x="72" y="55" width="10" height="28" rx="1" fill="#FAFAF8" />
              {/* Book / base arc */}
              <path d="M14 83 Q50 95 86 83" stroke="#FAFAF8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              {/* Compass arrow */}
              <line x1="50" y1="33" x2="50" y2="10" stroke="#C9973A" strokeWidth="3" strokeLinecap="round" />
              <polygon points="50,4 46,14 54,14" fill="#C9973A" />
              {/* Compass center diamond */}
              <rect x="46" y="33" width="8" height="8" rx="1" fill="#C9973A" transform="rotate(45 50 37)" />
            </svg>

            {/* Vertical divider */}
            <div className="w-px h-10 bg-[#FAFAF8]/25 mx-1 flex-shrink-0" aria-hidden="true" />

            {/* Text mark */}
            <div className="flex flex-col leading-none select-none">
              <span
                style={{ fontWeight: 300, letterSpacing: '0.12em', fontSize: '0.65rem' }}
                className="text-[#FAFAF8]/70 uppercase tracking-widest"
              >
                The
              </span>
              <span
                style={{ fontWeight: 800, letterSpacing: '0.08em', fontSize: '1.15rem', lineHeight: 1 }}
                className="text-[#FAFAF8] uppercase"
              >
                FREEDOM
              </span>
              <span
                style={{ fontWeight: 400, letterSpacing: '0.06em', fontSize: '0.62rem' }}
                className="text-[#FAFAF8]/70 uppercase tracking-wider"
              >
                Startup Architect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs lg:text-sm text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="px-4 lg:px-6 py-2 text-sm lg:text-base bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-all duration-150 shadow-sm hover:shadow-md"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#6B7280] hover:text-[#FAFAF8] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#1F2937]/20 pt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-xs sm:text-sm text-[#6B7280] hover:text-[#FAFAF8] transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 sm:px-6 py-2 text-xs sm:text-sm bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-colors text-center mt-3"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
