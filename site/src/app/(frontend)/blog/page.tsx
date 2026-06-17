import type { Metadata } from 'next'
import { BlogListing } from '@/components/site/BlogListing'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Engineering notes on AI agents, automation and the systems behind them — written by the crew that ships them.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog',
    description:
      'Engineering notes on AI agents, automation and the systems behind them — written by the crew that ships them.',
  },
}

export const dynamic = 'force-static'

export default async function BlogPage() {
  return <BlogListing page={1} />
}
