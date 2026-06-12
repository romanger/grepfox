import { permanentRedirect } from 'next/navigation'
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

type Search = { category?: string; page?: string }

export default async function BlogPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { category, page: pageParam } = await searchParams
  if (category) permanentRedirect(`/blog/category/${category}`)
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1)
  return <BlogListing page={page} />
}

export const revalidate = 60
