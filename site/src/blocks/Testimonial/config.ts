import type { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  labels: { singular: 'Testimonial', plural: 'Testimonials' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'e.g. "TESTIMONIAL / 007".' } },
    { name: 'quote', type: 'textarea', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media', admin: { description: 'Portrait (left column). Omit for stacked variant.' } },
    { name: 'imageUrl', type: 'text', admin: { description: 'External image URL (overrides upload).' } },
  ],
}
