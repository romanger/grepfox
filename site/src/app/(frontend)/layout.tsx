import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { MotionRuntime } from '@/components/site/MotionRuntime'
import '@/styles/grepfox.scss'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://grepfox.com'),
  title: { default: 'Grepfox — Technical Maintenance', template: '%s · Grepfox' },
  description:
    'Grepfox provides technical maintenance and reliability engineering for modern operations.',
  icons: { icon: '/assets/logo-mark.svg' },
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motion='on'}catch(e){}",
          }}
        />
      </head>
      <body>
        <div className="site-frame">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <MotionRuntime />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
