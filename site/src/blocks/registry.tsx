import type { ComponentType } from 'react'
import { HeroSplit } from './HeroSplit/Component'
import { HeroFullbleed } from './HeroFullbleed/Component'
import { SectionHead } from './SectionHead/Component'
import { FeatureGrid } from './FeatureGrid/Component'
import { Numbers } from './NumbersBlock/Component'
import { ProcessTimeline } from './ProcessTimeline/Component'
import { CTABanner } from './CTABanner/Component'
import { LogoWall } from './LogoWall/Component'
import { Testimonial } from './Testimonial/Component'
import { PricingGrid } from './PricingGrid/Component'
import { SplitLayout } from './SplitLayout/Component'
import { AccordionFAQ } from './AccordionFAQ/Component'
import { RichTextBlockComponent } from './RichText/Component'
import { Marquee } from './Marquee/Component'
import { AccentBlock } from './AccentBlock/Component'
import { ContactFormSection } from './ContactForm/Component'

export const blockRegistry: Record<string, ComponentType<any>> = {
  heroSplit: HeroSplit,
  heroFullbleed: HeroFullbleed,
  sectionHead: SectionHead,
  featureGrid: FeatureGrid,
  numbers: Numbers,
  processTimeline: ProcessTimeline,
  ctaBanner: CTABanner,
  logoWall: LogoWall,
  testimonial: Testimonial,
  pricingGrid: PricingGrid,
  splitLayout: SplitLayout,
  accordionFaq: AccordionFAQ,
  richText: RichTextBlockComponent,
  marquee: Marquee,
  accentBlock: AccentBlock,
  contactForm: ContactFormSection,
}
