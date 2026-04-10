// ============================================================
// INSIGHTS DATA — Article Model & Seed Content
// TFSA Global | Phase 2A
// ============================================================
// ALL ARTICLES ARE PLACEHOLDER CONTENT IN BRAND VOICE.
// To publish real articles: update the array below.
// The `featured: true` item renders as the hero on /insights.
// Only one article should have `featured: true` at a time.
// ============================================================

export type InsightCategory =
  | 'India Market Insights'
  | 'Startup Architecture Thinking'
  | 'Case Breakdowns'
  | 'Founder Mistakes'

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: InsightCategory
  author: string
  date: string           // ISO date string e.g. '2026-03-15'
  readingTime: number    // estimated minutes
  featured: boolean      // only one true at a time
  tags: string[]
  accentColor: string    // Tailwind bg class for visual placeholder treatment
  image?: string         // Path to image for featured article
  isPlaceholder: boolean // REPLACE WITH REAL CONTENT: set to false when live
}

export const articles: Article[] = [
  {
    id: 'A001',
    slug: 'why-most-companies-enter-india-too-early',
    title: 'Why Most Companies Enter India Too Early — And How to Know When You\'re Ready',
    excerpt:
      'India is a high-opportunity market. It is also a high-complexity one. The companies that fail in India rarely fail because their product is wrong. They fail because they entered before the execution infrastructure was ready. Here is the diagnostic framework we use to assess market-entry readiness — before a single rupee is committed.',
    category: 'India Market Insights',
    author: 'Rajesh Thakur',
    date: '2026-03-20',
    readingTime: 8,
    featured: true,
    tags: ['India Entry', 'Market Readiness', 'Execution'],
    accentColor: '#B68817',
    image: '/Why Most Companies Enter India Too Early — And How to Know When You\'re Ready.png',
    isPlaceholder: true,
  },
  {
    id: 'A002',
    slug: 'the-execution-stack-india-market-entry',
    title: 'The Execution Stack: What Successful India Market Entry Actually Requires',
    excerpt:
      'Most India entry plans account for GTM, pricing, and partnerships. Very few account for the execution stack underneath — the operational layer that determines whether the strategy ever makes contact with reality. We break down all five layers.',
    category: 'India Market Insights',
    author: 'Rajesh Thakur',
    date: '2026-03-05',
    readingTime: 9,
    featured: false,
    tags: ['GTM', 'India Entry', 'Execution Architecture'],
    accentColor: '#1F2937',
    isPlaceholder: true,
  },
  {
    id: 'A003',
    slug: 'founder-dependency-architecture-problem',
    title: 'Founder Dependency Is Not a People Problem. It\'s an Architecture Problem.',
    excerpt:
      'When a founder cannot step away from daily operations, the instinct is to hire better talent or delegate more effectively. Both are wrong. The real issue is structural — and until the architecture is redesigned, delegation will always fail.',
    category: 'Startup Architecture Thinking',
    author: 'Rajesh Thakur',
    date: '2026-02-18',
    readingTime: 7,
    featured: false,
    tags: ['Founder Independence', 'Systems', 'TFSA Framework'],
    accentColor: '#374151',
    isPlaceholder: true,
  },
  {
    id: 'A004',
    slug: 'distribution-before-traction-india',
    title: 'Distribution Before Traction: The Sequencing Mistake That Kills India Expansion',
    excerpt:
      'Global companies entering India consistently get the sequence wrong. They build traction first, then attempt to build distribution infrastructure. By the time the distribution system is ready, the traction window has closed. The correct order is counter-intuitive — and most advisors won\'t tell you this.',
    category: 'India Market Insights',
    author: 'Rajesh Thakur',
    date: '2026-02-02',
    readingTime: 6,
    featured: false,
    tags: ['Distribution', 'India GTM', 'Sequencing'],
    accentColor: '#0F1419',
    isPlaceholder: true,
  },
  {
    id: 'A005',
    slug: 'why-startups-fail-at-scale-tfsa-framework',
    title: 'Why Startups Fail at Scale — And What the TFSA Framework Fixes First',
    excerpt:
      'The moment a startup crosses ₹5 crore or $1M revenue, the same things that made it successful begin working against it. This is not a growth problem. It is a structural failure of the original business design. The TFSA Framework addresses the root, not the symptoms.',
    category: 'Startup Architecture Thinking',
    author: 'Rajesh Thakur',
    date: '2026-01-22',
    readingTime: 10,
    featured: false,
    tags: ['Scale', 'TFSA Framework', 'Business Architecture'],
    accentColor: '#B68817',
    isPlaceholder: true,
  },
  {
    id: 'A006',
    slug: '3-signals-business-model-needs-redesigning',
    title: 'The 3 Signals That Tell You Your Business Model Needs Redesigning Before Funding',
    excerpt:
      'Founders approach fundraising as a validation event. Investors approach it as a stress test. There are three structural signals that, if present, will derail any funding round — and no amount of traction can mask them. Most founders discover this too late.',
    category: 'Founder Mistakes',
    author: 'Rajesh Thakur',
    date: '2026-01-10',
    readingTime: 6,
    featured: false,
    tags: ['Fundraising', 'Business Model', 'Investor Readiness'],
    accentColor: '#374151',
    isPlaceholder: true,
  },
  {
    id: 'A007',
    slug: 'case-breakdown-saas-distribution-india-enterprise',
    title: 'Case Breakdown: How We Rebuilt a SaaS Distribution Architecture for Indian Enterprise',
    excerpt:
      'A B2B SaaS company had validated product-market fit globally but could not crack Indian enterprise. Three failed pilots. Runway burning. This is the breakdown of exactly what we found, what we changed, and what happened in the 90 days after.',
    category: 'Case Breakdowns',
    author: 'Rajesh Thakur',
    date: '2025-12-15',
    readingTime: 12,
    featured: false,
    tags: ['Case Study', 'SaaS', 'India Enterprise'],
    accentColor: '#1F2937',
    isPlaceholder: true,
  },
  {
    id: 'A008',
    slug: 'entering-india-without-execution-architecture',
    title: 'Entering India Without an Execution Architecture: A Costly Lesson',
    excerpt:
      'The biggest mistake in India expansion is not choosing the wrong market or wrong product. It is entering without an execution architecture — the operational backbone that turns a market entry strategy into a functioning business. This is what that mistake looks like, and how to avoid it.',
    category: 'Founder Mistakes',
    author: 'Rajesh Thakur',
    date: '2025-12-01',
    readingTime: 7,
    featured: false,
    tags: ['India Entry', 'Execution', 'Common Mistakes'],
    accentColor: '#0F1419',
    isPlaceholder: true,
  },
]

// Helper: Get all articles by category
export function getByCategory(category: InsightCategory): Article[] {
  return articles.filter((a) => a.category === category)
}

// Helper: Get featured article
export function getFeatured(): Article | undefined {
  return articles.find((a) => a.featured)
}

// Helper: Get non-featured articles
export function getNonFeatured(): Article[] {
  return articles.filter((a) => !a.featured)
}

// Helper: Get all unique categories present in data
export function getCategories(): InsightCategory[] {
  return [...new Set(articles.map((a) => a.category))]
}

export const ALL_CATEGORIES = [
  'All Insights',
  'India Market Insights',
  'Startup Architecture Thinking',
  'Case Breakdowns',
  'Founder Mistakes',
] as const

export type CategoryFilter = (typeof ALL_CATEGORIES)[number]
