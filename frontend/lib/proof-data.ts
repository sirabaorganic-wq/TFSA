// ============================================================
// PROOF DATA — Testimonials & Success Stories
// TFSA Global | Phase 2A
// ============================================================
// TO REPLACE WITH REAL CLIENT CONTENT:
// Update the arrays below. TypeScript will enforce the schema.
// Do NOT change the interface shapes — they are used by PremiumCard components.
// ============================================================

export type EngagementType =
  | 'India Expansion'
  | 'Startup Architecture'
  | 'Growth Execution'
  | 'TFSA Framework'

export type StoryTag =
  | 'India Expansion'
  | 'Startup Architecture'
  | 'GTM'
  | 'Growth Execution'
  | 'TFSA Framework'

// ── TESTIMONIALS ──────────────────────────────────────────────

export interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  company: string
  engagementType: EngagementType
  // REPLACE: set to true and provide real name/company when live
  isPlaceholder?: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'T001',
    quote:
      'We had the idea, the funding, and the intent. What we didn\'t have was a business that could run without us in the room. TFSA rebuilt the architecture from the ground up. Within six months, I was no longer the bottleneck. The systems did what I used to do.',
    name: 'Arjun Mehta',
    title: 'Co-Founder & CEO',
    company: 'Early-Stage SaaS Venture',
    engagementType: 'TFSA Framework',
    isPlaceholder: true, // REPLACE WITH CLIENT CONTENT
  },
  {
    id: 'T002',
    quote:
      'Every advisor we spoke to gave us a report. TFSA gave us a distribution system, a sales playbook, and two enterprise accounts before our official India launch. The difference between strategy and execution is everything.',
    name: 'Marcus van der Berg',
    title: 'Managing Director, Asia Pacific',
    company: 'European B2B Technology Company',
    engagementType: 'India Expansion',
    isPlaceholder: true, // REPLACE WITH CLIENT CONTENT
  },
  {
    id: 'T003',
    quote:
      'We were scaling, but it felt like we were scaling chaos. The TFSA Framework forced us to confront the structural gaps — not with theory, but with a working execution plan. Margins improved. Clarity improved. The business started feeling like a business.',
    name: 'Priya Sharma',
    title: 'Founder',
    company: 'Growth-Stage Professional Services',
    engagementType: 'Growth Execution',
    isPlaceholder: true, // REPLACE WITH CLIENT CONTENT
  },
  {
    id: 'T004',
    quote:
      'Entering India felt impossible until we had a structured architecture for it. TFSA mapped the regulatory terrain, built the GTM from the ground up, and stayed in the execution. Not a slide deck. A functioning market presence.',
    name: 'James Whitfield',
    title: 'Chief Growth Officer',
    company: 'Global EdTech Platform',
    engagementType: 'India Expansion',
    isPlaceholder: true, // REPLACE WITH CLIENT CONTENT
  },
]

// ── SUCCESS STORIES ───────────────────────────────────────────

export interface SuccessStory {
  id: string
  clientRef: string      // Use anonymized ref until full case study is approved
  industry: string
  sector: string         // Short descriptor tag
  challenge: string
  solution: string
  outcome: string
  tag: StoryTag
  comingSoon: boolean    // Set to false when full case study is published
  isPlaceholder?: boolean
}

export const successStories: SuccessStory[] = [
  {
    id: 'SS001',
    clientRef: 'B2B SaaS Platform',
    industry: 'Enterprise Software',
    sector: 'Technology',
    challenge:
      'A product-market fit–validated SaaS company attempting India entry had no ground-level distribution architecture. They had completed 3 failed pilot partnerships and were burning runway without traction.',
    solution:
      'TFSA mapped the enterprise buyer landscape, redesigned the GTM for Indian procurement cycles, and built a channel partnership framework targeting IT decision-makers in mid-market firms.',
    outcome:
      'Three anchor enterprise accounts secured within 90 days of TFSA engagement. Pipeline qualified and distribution architecture handed over as an operational playbook.',
    tag: 'India Expansion',
    comingSoon: true,
    isPlaceholder: true,
  },
  {
    id: 'SS002',
    clientRef: 'European Consumer Brand',
    industry: 'Consumer Goods',
    sector: 'FMCG / Retail',
    challenge:
      'A premium European brand entered India at a price point misaligned with the actual addressable market. They had invested in brand presence with near-zero revenue return after 12 months.',
    solution:
      'TFSA conducted a full market repositioning analysis, rebuilt the pricing architecture for two distinct SKU tiers, and executed a phased metro-first launch across Mumbai and Delhi with local distributor partnerships.',
    outcome:
      'Successful relaunch in two metro markets within the first quarter. Distribution partnerships established with two regional networks.',
    tag: 'GTM',
    comingSoon: true,
    isPlaceholder: true,
  },
  {
    id: 'SS003',
    clientRef: 'Logistics Startup',
    industry: 'Logistics & Operations',
    sector: 'Supply Chain',
    challenge:
      'A logistics venture growing at 40% YoY was completely founder-dependent. Every decision flowed through one person. The team could not execute independently. Scale was creating fragility, not strength.',
    solution:
      'TFSA applied the full TFSA Framework architecture — rebuilt the operating model, documented delegation playbooks, designed tiered decision authorities, and created a management operating system the founder could step back from.',
    outcome:
      'Founder successfully stepped out of day-to-day operations. Team assumed autonomous execution within 4 months. Business continued scaling without founder dependency.',
    tag: 'Startup Architecture',
    comingSoon: true,
    isPlaceholder: true,
  },
  {
    id: 'SS004',
    clientRef: 'Global EdTech Platform',
    industry: 'Education Technology',
    sector: 'EdTech',
    challenge:
      'A global EdTech company attempted India market entry and was blocked by regulatory friction around content licensing and data localization. Two prior consultants had failed to navigate it.',
    solution:
      'TFSA mapped the regulatory landscape with on-ground legal integration, restructured the product delivery architecture for India compliance, and negotiated two strategic partnerships with regulated education distributors.',
    outcome:
      'Fully compliant India market entry executed. Two strategic distribution partnerships closed. Content licensing framework established for long-term operation.',
    tag: 'India Expansion',
    comingSoon: true,
    isPlaceholder: true,
  },
  {
    id: 'SS005',
    clientRef: 'Manufacturing Company',
    industry: 'Manufacturing',
    sector: 'Industrial / B2B',
    challenge:
      'A mid-size manufacturer had fragmented distribution across 6 states with inconsistent pricing, no unified channel management, and declining margins due to distributor conflict.',
    solution:
      'TFSA designed and implemented a national distribution architecture — unified pricing policy, tiered distributor agreements, and a channel governance framework. Executed a migration from fragmented to structured distribution over two quarters.',
    outcome:
      'Unified national distribution network operational. Distributor conflict reduced. Margin recovery of 18% within the first quarter post-restructure.',
    tag: 'Growth Execution',
    comingSoon: true,
    isPlaceholder: true,
  },
  {
    id: 'SS006',
    clientRef: 'Professional Services Firm',
    industry: 'Professional Services',
    sector: 'Consulting / Advisory',
    challenge:
      'A professional services firm had strong revenue but deteriorating margins — a symptom of an unscalable service delivery model where senior time was consumed on low-value tasks and pricing was inconsistent.',
    solution:
      'TFSA restructured the service delivery model, implemented tiered pricing architecture, built a productized service framework for lower-margin offerings, and redesigned the resource allocation model.',
    outcome:
      '40% gross margin improvement within two quarters. Revenue per senior hour increased. The firm moved from reactive project delivery to a structured, proposal-driven model.',
    tag: 'TFSA Framework',
    comingSoon: false,
    isPlaceholder: true,
  },
]
