'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Founder', href: '/founder' },
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
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
            title="Design Your Business. Build Your Freedom"
          >
            <Image 
              src="/tfsa-logo.png" 
              alt="The Freedom Startup Architect™ Logo" 
              width={140}
              height={50}
              priority
              className="h-8 sm:h-10 w-auto"
            />
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
              className="px-4 lg:px-6 py-2 text-sm lg:text-base bg-[#B8956A] text-white rounded-sm font-medium hover:bg-[#A08560] transition-all duration-150 shadow-sm hover:shadow-md"
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
              className="block px-4 sm:px-6 py-2 text-xs sm:text-sm bg-[#B8956A] text-white rounded-sm font-medium hover:bg-[#A08560] transition-colors text-center mt-3"
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
