'use client';

import { useState } from 'react';
import { SectionDivider } from '@/components/SectionDivider';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    market: '',
    stage: '',
    goal: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit the form.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', market: '', stage: '', goal: '' });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-[#0F1419] min-h-screen">
      <section className="bg-gradient-to-t from-[#0F1419] to-[#1a222a] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#B68817] font-semibold tracking-widest uppercase mb-4">India Entry Assessment</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF8] mb-6">
            Start Your India Entry Right
          </h1>
          <p className="text-xl text-[#D1D5DB] max-w-2xl mx-auto">
            Before entering the market, we evaluate structural alignment, economic readiness, and organizational gaps. Fill out the assessment to begin.
          </p>
        </div>
      </section>

      <SectionDivider variant="thin" />

      <section className="py-20 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Form Section */}
            <div className="lg:w-3/5">
              <div className="bg-white p-8 md:p-12 border border-[#E5E7EB] shadow-sm rounded-sm">
                
                {status === 'success' ? (
                  <div className="text-center py-10 bg-[#ECFDF5] border border-[#10B981] rounded-sm">
                    <h3 className="text-2xl font-bold text-[#065F46] mb-4">Request Submitted Successfully</h3>
                    <p className="text-[#047857]">Our team will review your alignment and get back to you within 48 hours.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2 bg-[#10B981] text-white rounded-sm font-medium hover:bg-[#059669] transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <div className="p-4 mb-6 text-sm text-[#B91C1C] bg-[#FEF2F2] border border-[#F87171] rounded-sm">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" 
                          placeholder="Jane Doe" 
                          required 
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" 
                          placeholder="jane@company.com" 
                          required 
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" 
                        placeholder="Company Inc." 
                        required 
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Current Market</label>
                        <input 
                          type="text" 
                          name="market"
                          value={formData.market}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" 
                          placeholder="e.g. USA, UK, Singapore" 
                          required 
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Business Stage</label>
                        <select 
                          name="stage"
                          value={formData.stage}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" 
                          required
                          disabled={status === 'loading'}
                        >
                          <option value="" disabled>Select Stage</option>
                          <option value="seed">Seed / Validating</option>
                          <option value="seriesA">Series A / Early Scaling</option>
                          <option value="growth">Growth Stage (Series B+)</option>
                          <option value="enterprise">Established Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0F1419] mb-2 uppercase">Primary Goal in India</label>
                      <textarea 
                        name="goal"
                        rows={4} 
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#E5E7EB] p-3 text-[#0F1419] rounded-sm focus:outline-none focus:border-[#B68817] transition-colors" 
                        placeholder="Briefly describe what you are looking to execute or achieve..." 
                        required
                        disabled={status === 'loading'}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full inline-flex justify-center items-center px-6 py-4 bg-[#B68817] text-white rounded-sm font-medium hover:bg-[#A08560] transition-colors duration-150 shadow-sm text-center text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Assessment Request'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Strategic Framing Section */}
            <div className="lg:w-2/5">
              <div className="bg-[#1F2937] p-10 rounded-sm border-t-4 border-[#B68817] text-white h-full">
                <h3 className="font-serif text-3xl font-bold text-[#FAFAF8] mb-6">Execution Readiness</h3>
                <div className="space-y-6 text-[#D1D5DB] mb-10">
                  <p>
                    TFSA Global engagements are reserved for organizations who have global market fit and are willing to embrace a structured architectural overhaul for their India GTM.
                  </p>
                  <p>
                    <strong>What happens next?</strong><br />
                    After receiving your details, our team will review your alignment within 48 hours. If viable, we will schedule a Phase 1 Consultation to map out the architectural gaps in your expansion model.
                  </p>
                </div>

                <div className="border-t border-[#374151] pt-8">
                  <h4 className="font-bold text-[#FAFAF8] mb-4">Looking for general advice?</h4>
                  <p className="text-[#9CA3AF] text-sm mb-6">
                    If you are not ready for a structural assessment but want to consult with Rajesh Thakur directly on market conditions:
                  </p>
                  <a href="mailto:thefreedomstartuparchitect@gmail.com" className="block w-full py-3 border border-[#B68817] text-[#B68817] text-center font-bold font-sm hover:bg-[#B68817] hover:text-[#FAFAF8] transition-colors rounded-sm">
                    Book General Strategy Call
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
