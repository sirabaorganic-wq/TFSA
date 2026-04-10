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
      'We had strong inbound metrics globally. India looked like low-hanging fruit on paper. Twelve months later, near-zero traction. No local distribution, global pricing, no enterprise sales motion. India B2B is not a self-serve market — it is relationship and trust-driven. We learned that the hard way.',
    name: 'Head of International Growth',
    title: 'VP of Growth',
    company: 'European B2B SaaS Company',
    engagementType: 'India Expansion',
    isPlaceholder: true, // REPLACE WITH CLIENT CONTENT
  },
  {
    id: 'T002',
    quote:
      'We positioned as premium, spent heavily on brand, and assumed urban India would respond the way Western Europe did. It did not. Weak retail distribution and misaligned positioning burned the marketing budget with no meaningful movement. India does not reject premium — it rejects misaligned premium.',
    name: 'Director of Emerging Markets',
    title: 'Director',
    company: 'Western European Consumer FMCG Brand',
    engagementType: 'TFSA Framework',
    isPlaceholder: true, // REPLACE WITH CLIENT CONTENT
  },
  {
    id: 'T003',
    quote:
      'We ran our global playbook. No regional adaptation, no on-ground partnerships, no account for local competition. Within eighteen months, better-adapted local competitors had taken the ground we thought we owned. What happened to us in India is what happened to some of the most well-funded global companies — execution gaps are unforgiving here.',
    name: 'Chief Strategy Officer',
    title: 'CSO',
    company: 'US-Based Tech Platform',
    engagementType: 'India Expansion',
    isPlaceholder: true, // REPLACE WITH CLIENT CONTENT
  },
  {
    id: 'T004',
    quote:
      'The pattern is documented and repeatable — Walmart India, eBay India, Kellogg\'s early India push. Global capital and global brand are not sufficient. The companies that win here earn it through structural execution: local distribution, relationship-led sales, and a product or price point built for this market.',
    name: 'Market Entry Analyst',
    title: 'Principal',
    company: 'India Strategy Practice',
    engagementType: 'Growth Execution',
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
    clientRef: 'MoversTrip Digital Services LLP',
    industry: 'Logistics Tech',
    sector: 'Startup Architecture',
    challenge:
      'A digital-first relocation platform with strong intent but weak backend structure. Customer acquisition was inconsistent, vendor onboarding was unstructured, and operations depended heavily on manual coordination.',
    solution:
      'Structured a two-sided marketplace (customer + vendor model), designed a lead-to-conversion funnel with defined stages, built a vendor onboarding & quality control system, and aligned pricing with service tiers and margins.',
    outcome:
      'Improved lead-to-conversion consistency, structured vendor network with better service reliability, reduced operational chaos, and a shift from reactive operations to a scalable platform model.',
    tag: 'Startup Architecture',
    comingSoon: false,
  },
  {
    id: 'SS002',
    clientRef: 'VFL Marketing',
    industry: 'Marketing & Growth Services',
    sector: 'GTM',
    challenge:
      'A capable marketing firm struggling with positioning clarity and inconsistent client acquisition. Revenue depended heavily on referrals without a structured growth engine.',
    solution:
      'Implemented a clear ICP & positioning strategy, structured service packaging & pricing tiers, a predictable lead generation + conversion system, and a defined sales process instead of ad-hoc pitching.',
    outcome:
      'More consistent client acquisition, higher-value deal closures, clear brand positioning in the market, and a transition from random growth to a repeatable GTM engine.',
    tag: 'GTM',
    comingSoon: false,
  },
  {
    id: 'SS003',
    clientRef: 'Aakash Deep Packers & Movers',
    industry: 'Logistics Operations',
    sector: 'Supply Chain',
    challenge:
      'A traditional logistics business with strong demand but low operational efficiency. Margins were inconsistent, and growth was limited by manual coordination.',
    solution:
      'Restructured route planning & job allocation systems, standardized pricing based on distance, load & service level, defined operational SOPs for execution teams, and introduced performance tracking metrics.',
    outcome:
      'Improved operational efficiency, better margin visibility, reduced dependency on owner decisions, and the ability to scale operations across multiple locations.',
    tag: 'Growth Execution',
    comingSoon: false,
  },
  {
    id: 'SS004',
    clientRef: 'Khushi Relocation & Logistics',
    industry: 'Local Logistics',
    sector: 'Supply Chain',
    challenge:
      'High operational workload with no structured system. Business was running, but growth was unpredictable and difficult to manage.',
    solution:
      'Implemented a structured inquiry-to-booking workflow, defined service packages & pricing logic, a vendor coordination system, and a daily operations dashboard for tracking.',
    outcome:
      'Improved booking consistency, reduced operational confusion, faster execution turnaround, and a transition from informal operations to a structured logistics business.',
    tag: 'Growth Execution',
    comingSoon: false,
  },
  {
    id: 'SS005',
    clientRef: 'LifeBoat RMS Pvt. Ltd.',
    industry: 'Risk & Compliance Services',
    sector: 'Startup Architecture',
    challenge:
      'A niche service business with strong expertise but an unclear scalability path. Growth was limited due to lack of structured positioning and a defined sales system.',
    solution:
      'Defined core service verticals & target industries, structured enterprise-focused service packages, built a B2B sales pipeline system, and aligned the delivery model with scalable execution.',
    outcome:
      'Improved clarity in market positioning, more structured enterprise client acquisition, better alignment between sales and delivery, and an evolution from service provider to scalable consulting model.',
    tag: 'Startup Architecture',
    comingSoon: false,
  },
  {
    id: 'SS006',
    clientRef: 'Kapsan Logistics India Pvt. Ltd.',
    industry: 'Enterprise Logistics',
    sector: 'Supply Chain',
    challenge:
      'An expanding logistics company facing coordination inefficiencies across operations. Scaling created complexity without corresponding systems.',
    solution:
      'Introduced a multi-layer operational structure, defined roles & decision-making hierarchy, a process-driven logistics execution model, and performance tracking across locations.',
    outcome:
      'Improved coordination across operations, reduced execution delays, stronger organizational structure, and a business that became scalable beyond founder dependency.',
    tag: 'Growth Execution',
    comingSoon: false,
  },
  {
    id: 'SS007',
    clientRef: 'Hi-Tech IT Infrastructure Solutions & Security',
    industry: 'Technology | B2B Services',
    sector: 'GTM + Architecture',
    challenge:
      'A technically strong company that lacked clear market positioning and a scalable sales approach. Growth was limited to network-driven opportunities.',
    solution:
      'Defined enterprise-focused positioning, structured service offerings (AMC, security, infra solutions), built a B2B sales pipeline system, and aligned technical delivery with a scalable service model.',
    outcome:
      'Improved deal quality and ticket size, more predictable sales pipeline, stronger positioning in the IT infrastructure space, and a shift from service execution to structured business growth.',
    tag: 'GTM',
    comingSoon: false,
  },
]