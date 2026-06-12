'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const REVEAL_SELECTOR = [
  '.hero-split__content > *',
  '.hero-split__image',
  '.hero-fullbleed__content > *',
  '.section-head',
  '.feature-grid__item',
  '.numbers-block__item',
  '.process-timeline',
  '.process-step',
  '.split-layout > *',
  '.accent-block__body > *',
  '.accent-block__image',
  '.testimonial',
  '.pricing-grid__item',
  '.logo-wall__item',
  '.accordion-item',
  '.cta-banner__inner > *',
].join(', ')

const STAGGER_MS = 70
const STAGGER_CAP = 6

function animateValue(el: HTMLElement) {
  if (el.dataset.counted) return
  el.dataset.counted = '1'
  const original = el.textContent || ''
  if (!/\d/.test(original)) return
  const numberRe = /\d+(?:[.,]\d+)?/g
  const duration = 1100
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    const k = 1 - Math.pow(1 - t, 4)
    el.textContent = original.replace(numberRe, (m) => {
      const decimals = (m.split(/[.,]/)[1] || '').length
      const target = parseFloat(m.replace(',', '.'))
      const value = (target * k).toFixed(decimals)
      return m.includes(',') ? value.replace('.', ',') : value
    })
    if (t < 1) requestAnimationFrame(tick)
    else el.textContent = original
  }
  requestAnimationFrame(tick)
}

export function MotionRuntime() {
  const pathname = usePathname()

  useEffect(() => {
    if (document.documentElement.dataset.motion !== 'on') return

    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (el) => !el.classList.contains('is-in'),
    )

    const io = new IntersectionObserver(
      (entries, observer) => {
        const hits = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
        hits.forEach((el, i) => {
          el.style.transitionDelay = `${Math.min(i, STAGGER_CAP) * STAGGER_MS}ms`
          el.classList.add('is-in')
          observer.unobserve(el)
          el.querySelectorAll<HTMLElement>('.numbers-block__value').forEach(animateValue)
          el.addEventListener(
            'transitionend',
            () => {
              el.style.transitionDelay = ''
            },
            { once: true },
          )
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    targets.forEach((el) => io.observe(el))

    const nav = document.querySelector<HTMLElement>('.top-nav')
    const onScroll = () => nav?.classList.toggle('top-nav--scrolled', window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return null
}
