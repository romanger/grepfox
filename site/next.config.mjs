import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: false,
  },
  async redirects() {
    return [
      // Legacy query-based category links → path-based category pages.
      // Previously handled at runtime in /blog; moved here so /blog can be static.
      {
        source: '/blog',
        has: [{ type: 'query', key: 'category', value: '(?<category>.+)' }],
        destination: '/blog/category/:category',
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig)
