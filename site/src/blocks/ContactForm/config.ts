import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  labels: { singular: 'Contact Form', plural: 'Contact Forms' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'e.g. "TRANSMIT".' } },
    { name: 'title', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    // Optional sidebar beside the form (e.g. "Prefer to talk? Book a call").
    { name: 'asideEyebrow', type: 'text' },
    { name: 'asideTitle', type: 'text' },
    { name: 'asideText', type: 'textarea' },
    { name: 'callLabel', type: 'text' },
    { name: 'callUrl', type: 'text', admin: { description: 'Booking link, e.g. cal.com.' } },
    { name: 'accent', type: 'checkbox', admin: { description: 'Orange (hazard) section background.' } },
  ],
}
