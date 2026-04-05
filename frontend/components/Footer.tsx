'use client'

import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F1419] border-t border-[#1F2937]/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[#FAFAF8] mb-2">
              TFSA
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] mb-2">
              The Freedom Startup Architect™
            </p>
            <p className="text-xs text-[#9CA3AF] italic">
              Design Your Business. Build Your Freedom.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-[#FAFAF8] text-sm mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-[#FAFAF8] text-sm mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/founder" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  Founder
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#6B7280] hover:text-[#FAFAF8] transition-colors duration-150">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-[#FAFAF8] text-sm mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:rajeshthakur2006@gmail.com"
                  className="text-[#6B7280] hover:text-[#B68817] transition-colors duration-150 flex items-center gap-2"
                  aria-label="Email"
                >
                  <Mail size={16} />
                  rajeshthakur2006@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919116633119"
                  className="text-[#6B7280] hover:text-[#B68817] transition-colors duration-150"
                  aria-label="Phone"
                >
                  +91 9116633119
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rajesh-thakur-entrepreneur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B7280] hover:text-[#B68817] transition-colors duration-150 flex items-center gap-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2937]/30 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-[#6B7280]">
            © {currentYear} The Freedom Startup Architect™. All rights reserved. | Privacy & Confidentiality Focused
          </p>
        </div>
      </div>
    </footer>
  )
}
