'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Mail, Linkedin, PhoneIcon } from 'lucide-react'
import { SectionDivider } from '@/components/SectionDivider'
import { PremiumButtonInline } from '@/components/PremiumButton'

// Note: Metadata export moved to layout-like handling due to form state
export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    challenge: '',
    preferredContact: 'email',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setFormSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          stage: '',
          challenge: '',
          preferredContact: 'email',
        })
        setTimeout(() => setFormSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="bg-[#0F1419]">
      {/* Hero Section */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-2xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1419] mb-4 sm:mb-6">
            Let&apos;s Architect Your Startup&apos;s Future
          </h1>
          <p className="text-[#374151] text-lg leading-relaxed">
            Ready to transform your startup into a founder-independent, scalable business? Let&apos;s start a conversation about your specific challenges and opportunities.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Form and Info */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-4 sm:gap-6 lg:gap-4 sm:p-6 md:p-8 lg:gap-12">
            {/* Form - spans 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
                Start the Conversation
              </h2>

              {formSubmitted ? (
                <div className="bg-emerald-900/20 border border-emerald-700 rounded-sm p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-emerald-400 font-semibold text-lg mb-2">Thank You!</h3>
                  <p className="text-emerald-300">
                    We&apos;ve received your message and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[#FAFAF8] font-medium text-xs sm:text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm bg-[#1F2937] border border-[#1F2937]/30 rounded-sm text-sm text-[#FAFAF8] placeholder-[#6B7280] px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-[#B68817] focus:ring-1 focus:ring-[#B68817]/30 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#FAFAF8] font-medium text-xs sm:text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1F2937] border border-[#1F2937]/30 rounded-sm text-sm text-[#FAFAF8] placeholder-[#6B7280] px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-[#B68817] focus:ring-1 focus:ring-[#B68817]/30 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[#FAFAF8] font-medium text-xs sm:text-sm mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1F2937] border border-[#1F2937]/30 rounded-sm text-sm text-[#FAFAF8] placeholder-[#6B7280] px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-[#B68817] focus:ring-1 focus:ring-[#B68817]/30 transition-colors"
                      placeholder="Your Startup"
                    />
                  </div>

                  {/* Stage */}
                  <div>
                    <label className="block text-[#FAFAF8] font-medium text-xs sm:text-sm mb-2">
                      Current Stage
                    </label>
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1F2937] border border-[#1F2937]/30 rounded-sm text-[#FAFAF8] focus:outline-none focus:border-[#B68817] focus:ring-1 focus:ring-[#B68817]/30 transition-colors"
                    >
                      <option value="">Select your stage</option>
                      <option value="idea">Idea / MVP</option>
                      <option value="early">Early Growth</option>
                      <option value="scaling">Scaling</option>
                      <option value="mature">Mature</option>
                    </select>
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className="block text-[#FAFAF8] font-medium text-xs sm:text-sm mb-2">
                      What&apos;s Your Primary Challenge?
                    </label>
                    <textarea
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#1F2937] border border-[#1F2937]/30 rounded-sm text-sm text-[#FAFAF8] placeholder-[#6B7280] px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-[#B68817] focus:ring-1 focus:ring-[#B68817]/30 transition-colors resize-none"
                      placeholder="Tell us about your current challenges, market, and growth goals..."
                    />
                  </div>

                  {/* Preferred Contact */}
                  <div>
                    <label className="block text-[#FAFAF8] font-medium text-xs sm:text-sm mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="w-4 h-4 accent-amber-600"
                        />
                        <span className="text-[#D1D5DB] text-sm">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="w-4 h-4 accent-amber-600"
                        />
                        <span className="text-[#D1D5DB] text-sm">Phone</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 sm:px-6 lg:px-8 py-3 bg-[#B68817] text-[#FAFAF8] rounded-sm font-medium hover:bg-[#A08560] transition-colors duration-150 text-lg"
                  >
                    Schedule a Strategic Consultation
                  </button>

                  <p className="text-[#9CA3AF] text-xs text-center">
                    We typically respond within 24 hours. Your information is confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info - Right Column */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-6 sm:mb-8">
                How to Reach Us
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <Mail className="text-[#B68817] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-[#FAFAF8] mb-1">Email</h3>
                      <a
                        href="mailto:rajeshthakur2006@gmail.com"
                        className="text-[#9CA3AF] hover:text-[#B68817] transition-colors text-sm"
                      >
                        rajeshthakur2006@gmail.com
                      </a>
                    </div>
                  </div>
                  <p className="text-[#9CA3AF] text-xs ml-10">
                    For strategic consultation requests
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <PhoneIcon className="text-[#B68817] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-[#FAFAF8] mb-1">Phone</h3>
                      <a
                        href="tel:+919116633119"
                        className="text-[#9CA3AF] hover:text-[#B68817] transition-colors text-sm"
                      >
                        +91 9116633119
                      </a>
                    </div>
                  </div>
                  <p className="text-[#9CA3AF] text-xs ml-10">
                    Available for strategic calls
                  </p>
                </div>

                {/* LinkedIn */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <Linkedin className="text-[#B68817] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-[#FAFAF8] mb-1">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/rajesh-thakur-entrepreneur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9CA3AF] hover:text-[#B68817] transition-colors text-sm"
                      >
                        Connect with Rajesh
                      </a>
                    </div>
                  </div>
                  <p className="text-[#9CA3AF] text-xs ml-10">
                    For professional networking
                  </p>
                </div>

                {/* Response Time */}
                <div className="border-t border-[#1F2937]/30 pt-8">
                  <h4 className="text-[#FAFAF8] font-semibold mb-3">Response Time</h4>
                  <p className="text-[#9CA3AF] text-sm">
                    We typically respond to inquiries within 24 hours. For urgent matters, please mention it in your message.
                  </p>
                </div>

                {/* Confidentiality */}
                <div>
                  <h4 className="text-[#FAFAF8] font-semibold mb-3">Confidentiality</h4>
                  <p className="text-[#9CA3AF] text-sm">
                    All inquiries and consultations are completely confidential. We never share founder or startup information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* FAQ Section */}
      <section className="bg-[#FAFAF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1419] mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: 'What does an initial strategic consultation include?',
                a: 'An initial consultation includes a 60-90 minute strategic discussion about your startup, challenges, and goals. We discuss your current state, market dynamics, and potential TFSA engagement. No fees for the initial call.',
              },
              {
                q: 'How long does the diagnostic phase typically take?',
                a: 'The diagnostic phase usually takes 2-3 weeks depending on complexity. We assess your current state, founder dependency level, market position, and organizational maturity. The output is a comprehensive diagnostic report and recommendations.',
              },
              {
                q: 'What are your engagement models?',
                a: 'We offer three models: Phase-based engagements (4-12 weeks for specific outcomes), End-to-end transformations (3-6 months), and Retainer partnerships (6+ months for ongoing strategic support).',
              },
              {
                q: 'How do you work with early-stage vs. scaling founders?',
                a: 'Our methodology adapts to your stage. Early-stage founders get market entry and foundational architecture support. Scaling founders get execution systems and founder independence focus. We tailor every engagement to your specific needs.',
              },
              {
                q: 'What&apos;s the typical investment range for your services?',
                a: 'Engagement fees vary based on scope, duration, and model. Phase-based engagements start at ₹3-5L. Retainer partnerships typically range ₹5-15L+ monthly depending on scope. We discuss specific fees during the initial consultation.',
              },
              {
                q: 'Do you offer retainer partnerships?',
                a: 'Yes. Retainer partnerships are ideal for founders committed to long-term strategic transformation. We typically work on 6-month minimum commitments with ongoing strategic advisory, execution support, and quarterly business reviews.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-[#E5E7EB] rounded-sm p-6 md:p-4 sm:p-6 md:p-8">
                <h3 className="font-serif text-lg font-bold text-[#0F1419] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[#374151] text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="thin" />

      {/* Final CTA */}
      <section className="bg-[#0F1419] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAF8] mb-4 sm:mb-6">
            Ready to Transform Your Startup?
          </h2>
          <p className="text-[#D1D5DB] text-lg mb-6 sm:mb-8">
            Let&apos;s have a strategic conversation about your growth challenges and opportunities. No commitment, just clarity.
          </p>
          <a
            href="#contact"
            className="inline-block px-4 sm:px-6 lg:px-8 py-3 bg-[#B68817] text-[#FAFAF8] rounded-sm font-medium hover:bg-[#A08560] transition-colors"
          >
            Back to Contact Form
          </a>
        </div>
      </section>
    </div>
  )
}
