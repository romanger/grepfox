import type { MetadataRoute } from 'next'

const ORIGIN = process.env.NEXT_PUBLIC_SERVER_URL || 'https://grepfox.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api'] },
    sitemap: `${ORIGIN}/sitemap.xml`,
  }
}
