import type { Block } from 'payload'
import { iconOptions } from '@/blocks/_shared/iconOptions'

export const HeroFullbleedBlock: Block = {
  slug: 'heroFullbleed',
  labels: { singular: 'Hero — Fullbleed', plural: 'Heroes — Fullbleed' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Top-left mono label (e.g. "CASE · 014 / LEAD ROUTING").' } },
    { name: 'meta', type: 'text', admin: { description: 'Top-right mono label (e.g. "2026.Q1").' } },
    { name: 'statValue', type: 'text', admin: { description: 'Large hazard-size number (e.g. "28×").' } },
    { name: 'description', type: 'textarea', required: true },
    {
      name: 'background',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Full-bleed background image (DS filters applied).' },
    },
    { name: 'backgroundUrl', type: 'text', admin: { description: 'External image URL (overrides upload).' } },
    {
      name: 'tags',
      type: 'array',
      fields: [
        { name: 'icon', type: 'select', options: iconOptions },
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
}
