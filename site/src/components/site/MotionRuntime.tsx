'use client'

import { useEffect } from 'react'

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
  '.accordion',
  '.cta-banner__inner > *',
  '.post-card',
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
  useEffect(() => {
    if (document.documentElement.dataset.motion !== 'on') return

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

    const matches = (node: Node): HTMLElement[] => {
      if (!(node instanceof Element)) return []
      const found = node.matches(REVEAL_SELECTOR) ? [node as HTMLElement] : []
      return found.concat(Array.from(node.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)))
    }

    const observe = (node: Node) =>
      matches(node).forEach((el) => {
        if (!el.classList.contains('is-in')) io.observe(el)
      })

    observe(document.body)

    // Soft navigations that only change query params (e.g. /blog?category=…)
    // swap DOM without a pathname change; watch for the new nodes directly.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach(observe)
        m.removedNodes.forEach((node) => matches(node).forEach((el) => io.unobserve(el)))
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    const nav = document.querySelector<HTMLElement>('.top-nav')
    const onScroll = () => nav?.classList.toggle('top-nav--scrolled', window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      mo.disconnect()
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
