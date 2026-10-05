import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.tfsaglobal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Current public indexable routes in the application
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/insights',
    '/tfsa-framework',
    '/india-expansion',
    '/who-we-work-with',
    '/faq',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }))
}
