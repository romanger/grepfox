import { doc, h, p, ul } from './lexical'

const link = (label: string, url: string, appearance?: string, newTab = false) => ({
  link: {
    type: 'external' as const,
    url,
    label,
    appearance,
    newTab,
  },
})

export const services = [
  {
    title: 'AI Agents & Assistants',
    slug: 'ai-agents',
    icon: 'bot',
    tier: 'pro',
    summary:
      'Production-grade chatbots, knowledge assistants and autonomous agents built on OpenAI, Claude and LangChain.',
    body: doc(
      p('We design, build and operate LLM-powered agents that ship real work — not demos.'),
      h('h2', 'What we build'),
      ul([
        'Customer support bots grounded in your knowledge base',
        'Internal assistants that answer questions from scattered docs',
        'Autonomous workflow agents (research, outreach, triage)',
        'Content generators tuned to your brand voice',
        'AI search across CRM, wikis and help centers',
      ]),
      h('h2', 'How we work'),
      p(
        'Pilot first. We ship a scoped prototype in 2–4 weeks, measure impact with you, then harden it into a production service with monitoring, evals and guardrails.',
      ),
    ),
    heroImage: 'svc-ai-agents',
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '2–4 wk', label: 'PILOT', sublabel: 'first working agent' },
          { value: '24/7', label: 'UPTIME', sublabel: 'monitored in production' },
          { value: '3', label: 'LLM PROVIDERS', sublabel: 'OpenAI · Anthropic · self-host' },
        ],
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Discovery', description: 'Define the task, data sources and success metrics.' },
          { title: 'Prototype', description: '2-week spike with the smallest useful scope.' },
          { title: 'Harden', description: 'Evals, guardrails, logging, retries, observability.' },
          { title: 'Ship', description: 'Deploy, integrate with existing tools, train the team.' },
          { title: 'Operate', description: 'Ongoing tuning, model upgrades, monitoring.' },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        title: 'Have a repetitive task? We can automate it with AI.',
        action: link('Start a pilot', '/contact', 'secondary'),
      },
    ],
  },
  {
    title: 'Automation & Integrations',
    slug: 'automation-integrations',
    heroImage: 'svc-automation',
    icon: 'zap',
    tier: 'core',
    summary:
      'Wire your stack together. CRM, analytics, email, billing, Slack — fewer spreadsheets, more signal.',
    body: doc(
      p(
        'We build resilient automations on Make, Zapier, n8n and custom code — whichever fits the job. Every flow ships with monitoring, error alerts and a clear owner.',
      ),
      h('h2', 'Typical work'),
      ul([
        'Lead routing across HubSpot, Salesforce and outbound tools',
        'Revenue reporting pipelines from ad platforms into your warehouse',
        'Incident alerts into Slack with full context',
        'Customer lifecycle automations across email, CRM and product',
        'Data sync between systems that were never meant to talk',
      ]),
    ),
    layout: [
      {
        blockType: 'logoWall',
        heading: 'TOOLS WE CONNECT',
        logos: [
          { name: 'HubSpot' },
          { name: 'Salesforce' },
          { name: 'Marketo' },
          { name: 'Zapier' },
          { name: 'Make' },
          { name: 'n8n' },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: false,
        title: 'Stop gluing systems with spreadsheets.',
        action: link('Book an audit', '/contact', 'primary'),
      },
    ],
  },
  {
    title: 'Web Platforms',
    slug: 'web-platforms',
    icon: 'layout',
    tier: 'core',
    heroImage: 'svc-web',
    summary:
      'Fast, SEO-ready marketing sites and portals on Next.js or headless WordPress — with CMS your team can actually use.',
    body: doc(
      p(
        'We build the marketing surface your growth team deserves: fast, measurable, editable, and integrated with the rest of your stack.',
      ),
      h('h2', 'Stack'),
      ul([
        'Next.js + TypeScript for product-led sites and portals',
        'Headless WordPress where the editorial team is already fluent',
        'Payload, Sanity or Contentful for custom content models',
        'Vercel + Cloudflare for edge performance',
        'Deep integration with GA4, Mixpanel, HubSpot, Wistia',
      ]),
    ),
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '<1.2s', label: 'LCP', sublabel: 'median, on real devices' },
          { value: '100', label: 'LIGHTHOUSE', sublabel: 'typical SEO score' },
          { value: '6 wk', label: 'LAUNCH', sublabel: 'median project delivery' },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        title: 'Launching a marketing site? Let us build the one that scales.',
        action: link('Start a project', '/contact', 'secondary'),
      },
    ],
  },
  {
    title: 'Analytics & Reporting',
    slug: 'analytics-reporting',
    icon: 'bar-chart',
    tier: 'core',
    heroImage: 'svc-analytics',
    summary:
      'Consolidated dashboards that tell the truth. Looker Studio, Metabase or custom — with AI summaries on top.',
    body: doc(
      p(
        'Marketing data is everywhere and nowhere. We unify it, clean it, and give leadership one place to look — with automated narrative summaries so the numbers tell a story.',
      ),
      h('h2', 'What you get'),
      ul([
        'One executive dashboard, not ten',
        'CRM + ad platforms + product events in one model',
        'Automated weekly narrative reports, AI-drafted',
        'Anomaly alerts in Slack when something breaks',
        'Full audit trail of how every number is calculated',
      ]),
    ),
    layout: [
      {
        blockType: 'ctaBanner',
        accent: false,
        title: 'Ready to see your funnel in one place?',
        action: link('Get in touch', '/contact', 'primary'),
      },
    ],
  },
  {
    title: 'Technical Maintenance',
    slug: 'technical-maintenance',
    icon: 'shield',
    tier: 'enterprise',
    heroImage: 'svc-maintenance',
    summary:
      'SLA-backed retainers for the marketing stack you already run. We keep it fast, secure and up-to-date.',
    body: doc(
      p(
        'A retainer with Grepfox replaces the fractional CTO you never hired. We own the uptime, the updates, the on-call, and the boring-but-critical work that keeps your marketing stack compounding.',
      ),
      h('h2', 'Included'),
      ul([
        'Monitoring and alerting across your web, CRM and automation layers',
        'Security updates, dependency upgrades, vulnerability scanning',
        'Quarterly performance and architecture reviews',
        'Dedicated engineer with named backup',
        'Monthly report with what shipped, what broke, what is next',
      ]),
    ),
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '24/7', label: 'COVERAGE', sublabel: 'on-call rotation' },
          { value: '<15 min', label: 'RESPONSE', sublabel: 'for P1 incidents' },
          { value: '20–100h', label: 'RETAINER', sublabel: 'monthly envelope' },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        title: 'Keep what you built compounding.',
        action: link('Discuss a retainer', '/contact', 'secondary'),
      },
    ],
  },
]

// ---------- PAGES ----------

export const pages = [
  {
    title: 'Home',
    slug: 'home',
    metaTitle: 'Grepfox — Your tech partner for AI, automation and growth',
    metaDescription:
      'We build AI agents, automation pipelines and web platforms for marketing teams and enterprise clients. Maintenance included.',
    layout: [
      {
        blockType: 'heroSplit',
        eyebrow: 'TECH PARTNER · AI · AUTOMATION',
        title: 'Your tech partner for AI and automation.',
        subtitle:
          'We design, ship and maintain AI agents, integrations and web platforms for marketing teams and enterprise clients. No internal IT department required.',
        actions: [link('Start a project', '/contact', 'primary'), link('Explore services', '/services', 'outline')],
        image: 'home-hero',
        imageCaption: 'FIELD // ENGINEERING · RELIABILITY · AI',
      },
      {
        blockType: 'marquee',
        items: [
          { text: 'AI AGENTS' },
          { text: 'AUTOMATION' },
          { text: 'WEB PLATFORMS' },
          { text: 'ANALYTICS' },
          { text: 'MAINTENANCE' },
          { text: 'RELIABILITY' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'WHAT WE DO.',
        subtitle:
          'Five practices. One team. We ship — and then we keep it running.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'bot',
            image: 'card-ai-agents',
            title: 'AI Agents',
            description:
              'Chatbots, knowledge assistants and autonomous workflow agents. Built on OpenAI, Claude and LangChain.',
            tag: 'FLAGSHIP',
          },
          {
            icon: 'zap',
            image: 'card-automation',
            title: 'Automation',
            description:
              'Make, Zapier, n8n and custom code. CRMs, ad platforms and analytics wired together with monitoring.',
          },
          {
            icon: 'sparkles',
            image: 'card-assistants',
            title: 'AI Assistants',
            description:
              'Internal copilots and search agents grounded in your docs, tickets and CRM. Secure by default.',
            tag: 'NEW',
          },
          {
            icon: 'layout',
            image: 'card-web',
            title: 'Web Platforms',
            description:
              'Next.js and headless WordPress. Fast, SEO-ready, fully integrated with the marketing stack.',
          },
          {
            icon: 'bar-chart',
            image: 'card-analytics',
            title: 'Analytics',
            description:
              'Looker Studio, Metabase and custom dashboards — with AI-drafted narrative reports for the C-suite.',
          },
          {
            icon: 'shield',
            image: 'card-maintenance',
            title: 'Technical Maintenance',
            description:
              'SLA-backed retainers. Monitoring, updates, on-call and quarterly reviews for the stack you already run.',
          },
        ],
      },
      {
        blockType: 'numbers',
        items: [
          { value: '2–4 wk', label: 'FIRST SHIP', sublabel: 'pilot to production' },
          { value: '24/7', label: 'ON-CALL', sublabel: 'for retainer clients' },
          { value: '<1.2s', label: 'MEDIAN LCP', sublabel: 'sites we build' },
          { value: '100%', label: 'CUSTOM-BUILT', sublabel: 'no white-label resellers' },
        ],
      },
      {
        blockType: 'splitLayout',
        imageSide: 'right',
        eyebrow: 'WHY AI — WHY NOW',
        title: 'AI is not a feature. It is a layer.',
        image: 'ai-layer',
        content: doc(
          p(
            'Every process your team touches — support, reporting, outreach, QA — has an AI-native version waiting. The winners will not be the companies that bought AI; they will be the companies that integrated it.',
          ),
          p(
            'We build the glue. Agents that do the repetitive work. Pipelines that carry the data. Dashboards that read themselves. Systems that keep running when you are asleep.',
          ),
        ),
        action: link('See AI solutions', '/ai-solutions', 'outline-accent'),
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'HOW WE WORK.',
        subtitle: 'Pilot in weeks. Production in months. Partnership for years.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Discover', description: 'We map your systems, data and goals in one working session.' },
          { title: 'Scope', description: 'A pilot scope small enough to ship, big enough to matter.' },
          { title: 'Build', description: '2–4 weeks. Weekly demos. No dark workshops.' },
          { title: 'Harden', description: 'Monitoring, tests, evals, guardrails, docs.' },
          { title: 'Operate', description: 'Retainer kicks in. We own uptime and iteration.' },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'WHO WE ARE / 01',
        title: 'From a 5-person marketing team\nto a 500-person enterprise.',
        description:
          'We replace the fractional CTO you never hired. Flexible enough for startups, rigorous enough for enterprise procurement.',
        footnote: '— EST. 2025 · US + IL',
        image: 'about-hero',
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 007',
        quote:
          'They shipped our AI support agent in three weeks. It now handles 40% of tier-one tickets. The rest of our stack got calmer as a side-effect.',
        name: 'MAYA LENSKY',
        role: 'DIRECTOR OF GROWTH · ACME SAAS',
        image: 'about-mission',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'QUESTIONS.',
        subtitle: 'Some of the ones we hear on first calls.',
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'Do you replace an in-house engineering team?',
            answer:
              'For marketing and ops workloads, yes. Most of our clients either have no internal engineering capacity for their marketing stack, or their engineers are busy with the product. We are the dedicated partner for that surface.',
          },
          {
            question: 'Which LLM providers do you work with?',
            answer:
              'OpenAI, Anthropic Claude, and self-hosted open-source models via vLLM or Ollama when data residency requires it. We pick per project, not per vendor relationship.',
          },
          {
            question: 'Can you work with our existing vendors and tools?',
            answer:
              'Always. We rarely rip-and-replace. Our job is to make what you already own work harder — by connecting it, automating it and adding AI on top.',
          },
          {
            question: 'How do engagements typically start?',
            answer:
              'A one-hour discovery call, then a scoped pilot (fixed fee, 2–4 weeks). If the pilot works, we move to a retainer or a larger project.',
          },
          {
            question: 'Do you sign NDAs and DPAs?',
            answer:
              'Yes. We work with enterprise procurement regularly, including SOC 2 vendor reviews and data processing addenda.',
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        eyebrow: 'NEXT STEP',
        title: "Let's figure out what to ship first.",
        action: link('Start a conversation', '/contact', 'secondary'),
        contacts: [
          { icon: 'mail', value: 'HELLO@GREPFOX.IO' },
          { icon: 'phone', value: '+1 (415) 555 0123' },
          { icon: 'map-pin', value: 'TEL AVIV · NYC' },
          { icon: 'clock', value: '24H REPLY · NO BOTS' },
        ],
      },
    ],
  },

  // ---------- SERVICES overview ----------
  {
    title: 'Services',
    slug: 'services',
    metaTitle: 'Services — Grepfox',
    metaDescription: 'Five practices: AI agents, automation, web platforms, analytics and technical maintenance.',
    layout: [
      {
        blockType: 'heroSplit',
        eyebrow: 'SERVICES',
        title: 'Five practices. One team.',
        subtitle:
          'Every engagement is custom, but the work falls into five patterns. Pick your entry point — we often run several in parallel.',
        actions: [link('Talk to us', '/contact', 'primary')],
        image: 'services-hero',
        imageCaption: 'PRACTICES · OVERVIEW',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          { icon: 'bot', image: 'svc-ai-agents', title: 'AI Agents', description: 'Production chatbots and autonomous agents.', linkedService: 'ai-agents' },
          { icon: 'zap', image: 'svc-automation', title: 'Automation', description: 'CRM, ads, analytics — wired together.', linkedService: 'automation-integrations' },
          { icon: 'layout', image: 'svc-web', title: 'Web Platforms', description: 'Next.js and headless WordPress.', linkedService: 'web-platforms' },
          { icon: 'bar-chart', image: 'svc-analytics', title: 'Analytics', description: 'Dashboards with AI-drafted reports.', linkedService: 'analytics-reporting' },
          { icon: 'shield', image: 'svc-maintenance', title: 'Maintenance', description: 'SLA-backed retainers.', linkedService: 'technical-maintenance' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'HOW THEY COMBINE.',
        subtitle:
          'Most clients start with a pilot in one practice and expand as trust compounds.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Pilot', description: 'Scoped engagement in one practice — 2 to 6 weeks.' },
          { title: 'Integrate', description: 'Connect the pilot to the rest of your stack.' },
          { title: 'Retain', description: 'Move to a monthly retainer with SLA.' },
          { title: 'Expand', description: 'Add adjacent practices as needs surface.' },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        title: 'Not sure which practice fits? We will scope it with you.',
        action: link('Book a discovery call', '/contact', 'secondary'),
      },
    ],
  },

  // ---------- AI SOLUTIONS ----------
  {
    title: 'AI Solutions',
    slug: 'ai-solutions',
    metaTitle: 'AI Solutions — Grepfox',
    metaDescription: 'Production AI agents, assistants and automations — built on OpenAI, Claude and LangChain.',
    layout: [
      {
        blockType: 'heroFullbleed',
        eyebrow: 'CASE · 014 / AI SOLUTIONS',
        meta: '2026.Q2',
        statValue: '40%',
        description: 'tier-1 ticket deflection for a B2B SaaS — AI support agent shipped in 3 weeks.',
        background: 'ai-solutions-hero',
        tags: [
          { icon: 'bot', label: 'OPENAI' },
          { icon: 'sparkles', label: 'CLAUDE' },
          { icon: 'message', label: 'SLACK' },
          { icon: 'database', label: 'SUPABASE' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'WHAT WE BUILD.',
        subtitle:
          'Four patterns cover 90% of what marketing and ops teams actually need from AI today.',
      },
      {
        blockType: 'featureGrid',
        columns: '2',
        items: [
          {
            icon: 'bot',
            image: 'card-ai-agents',
            title: 'Customer-facing agents',
            description:
              'Support bots grounded in your help center, ticket history and product docs. Escalate cleanly to humans.',
            tag: 'MOST POPULAR',
          },
          {
            icon: 'sparkles',
            image: 'card-assistants',
            title: 'Internal copilots',
            description:
              'Assistants that answer company questions from Notion, Slack, CRM and the drive that no one wants to search.',
          },
          {
            icon: 'message',
            image: 'card-automation',
            title: 'Content & outreach',
            description:
              'Brief-to-draft generators tuned to your voice. Personalized outbound that does not sound personalized.',
          },
          {
            icon: 'pie-chart',
            image: 'card-analytics',
            title: 'AI-narrated analytics',
            description:
              'Weekly executive reports drafted by an agent — with the raw dashboard underneath for the skeptics.',
          },
        ],
      },
      {
        blockType: 'splitLayout',
        imageSide: 'left',
        eyebrow: 'APPROACH',
        title: 'Ship small. Measure. Harden. Repeat.',
        image: 'approach-split',
        content: doc(
          p(
            'Most AI projects die between the prototype and production. We spend our time on the unglamorous part: evals, guardrails, observability, fallback policies, human-in-the-loop review, and the boring middleware that makes an LLM safe to put in front of customers.',
          ),
        ),
        action: link('Read our approach', '/approach', 'outline-accent'),
      },
      {
        blockType: 'numbers',
        items: [
          { value: '2–4 wk', label: 'PILOT', sublabel: 'first working version' },
          { value: '100%', label: 'EVAL-BACKED', sublabel: 'no vibes-only deploys' },
          { value: '3', label: 'PROVIDERS', sublabel: 'OpenAI · Claude · self-host' },
          { value: '24/7', label: 'MONITORED', sublabel: 'once in production' },
        ],
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'Which model should we use?',
            answer:
              'Depends on the task, latency budget, cost, and data residency. We benchmark 2–3 options per use case and write the decision down. You are not locked in.',
          },
          {
            question: 'What about hallucinations?',
            answer:
              'Grounded retrieval, structured outputs, evaluator models and human-in-the-loop review for anything customer-facing. Plus logging so we catch drift early.',
          },
          {
            question: 'Can we self-host?',
            answer:
              'Yes. For sensitive data we deploy open-weights models (Llama, Qwen, Mixtral) on your infra via vLLM or Ollama, with the same orchestration layer.',
          },
          {
            question: 'How do you price?',
            answer:
              'Fixed-fee pilots, then monthly retainers for operations. We do not take a percentage of API spend.',
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        title: 'Have a process that should be an agent? Let us find out.',
        action: link('Start a pilot', '/contact', 'secondary'),
      },
    ],
  },

  // ---------- APPROACH ----------
  {
    title: 'Approach',
    slug: 'approach',
    metaTitle: 'Approach — Grepfox',
    metaDescription: 'How we work: pilot fast, harden carefully, operate long.',
    layout: [
      {
        blockType: 'heroSplit',
        eyebrow: 'APPROACH',
        title: 'Pilot in weeks. Operate for years.',
        subtitle:
          'We are engineers first, consultants second. Our job is to ship working software and keep it running — not to produce decks.',
        actions: [link('Start a conversation', '/contact', 'primary')],
        image: 'approach-hero',
        imageCaption: 'PRINCIPLES · TECHNOLOGY · PEOPLE',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'PRINCIPLES.',
        subtitle: 'Five commitments we make on every engagement.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          { icon: 'target', title: 'Smallest useful scope', description: 'Pilots are scoped to ship in weeks, not quarters. Momentum beats planning.' },
          { icon: 'eye', title: 'Observable from day one', description: 'Every system we deploy has logs, metrics and alerts before it sees real traffic.' },
          { icon: 'shield', title: 'Security by default', description: 'Secrets management, least-privilege access, dependency scanning. Not optional.' },
          { icon: 'users', title: 'Dedicated engineer', description: 'Your project has a named owner. Not a rotating pool of contractors.' },
          { icon: 'refresh', title: 'Continuous iteration', description: 'We do not hand off and disappear. Retainers are how we measure success.' },
          { icon: 'file-text', title: 'Everything written down', description: 'Decisions, trade-offs, runbooks. Your team should understand every line we ship.' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'THE PROCESS.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Discovery', description: 'One working session. Systems map, goals, constraints.' },
          { title: 'Scope', description: 'Fixed-fee pilot proposal within a week.' },
          { title: 'Build', description: 'Weekly demos. Shared project board. No dark workshops.' },
          { title: 'Harden', description: 'Evals, monitoring, docs, handover.' },
          { title: 'Operate', description: 'Retainer with SLA. Monthly reports. Quarterly reviews.' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'STACK.',
        subtitle: 'Opinionated tools we keep coming back to.',
      },
      {
        blockType: 'logoWall',
        heading: 'TECHNOLOGY',
        logos: [
          { name: 'Next.js' },
          { name: 'TypeScript' },
          { name: 'Node.js' },
          { name: 'WordPress' },
          { name: 'OpenAI' },
          { name: 'Claude' },
          { name: 'LangChain' },
          { name: 'Make' },
          { name: 'n8n' },
          { name: 'Vercel' },
          { name: 'Cloudflare' },
          { name: 'Supabase' },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: false,
        title: 'See how this applies to your stack.',
        action: link('Book a discovery call', '/contact', 'primary'),
      },
    ],
  },

  // ---------- ABOUT ----------
  {
    title: 'About',
    slug: 'about',
    metaTitle: 'About — Grepfox',
    metaDescription: 'A compact team of engineers and integrators. Your technical partner for AI and automation.',
    layout: [
      {
        blockType: 'heroSplit',
        eyebrow: 'ABOUT',
        title: 'A compact team of engineers. Built to move fast.',
        subtitle:
          'Grepfox is a small, senior team of builders. We were the fractional CTOs for a decade, then decided to be that — on purpose.',
        actions: [link('Work with us', '/contact', 'primary')],
        image: 'about-hero',
        imageCaption: 'TEAM · MISSION · STORY',
      },
      {
        blockType: 'numbers',
        items: [
          { value: '4', label: 'ENGINEERS', sublabel: 'senior, dedicated' },
          { value: '14 yrs', label: 'AVG EXPERIENCE', sublabel: 'in web, data and AI' },
          { value: '50+', label: 'PROJECTS', sublabel: 'shipped to production' },
          { value: '2', label: 'CONTINENTS', sublabel: 'always-on coverage' },
        ],
      },
      {
        blockType: 'splitLayout',
        imageSide: 'right',
        eyebrow: 'MISSION',
        title: 'Be the technical partner we wish we had.',
        image: 'about-mission',
        content: doc(
          p(
            'Every founder and marketing leader eventually hits the same wall: the stack gets too complex to run without dedicated engineering help, but they are not ready to hire a full team. That gap is where we live.',
          ),
          p(
            'We replace the fractional CTO, the contractor roulette and the Fiverr-grade work that ends up in production. One compact team. One retainer. One point of accountability.',
          ),
        ),
      },
      {
        blockType: 'richText',
        content: doc(
          h('h2', 'How we are different'),
          p(
            'We are builders who run what we ship. Most agencies hand off and vanish. Most consultancies never touch code. We do both, on purpose, because AI systems cannot be built the first way or operated the second.',
          ),
          h('h2', 'What we do not do'),
          ul([
            'Resell white-label tools we did not build',
            'Take percentages of vendor API spend',
            'Ship prototypes and call them products',
            'Staff with juniors on their first project',
          ]),
        ),
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 012',
        quote:
          'They behave like an in-house team that just happens to work remotely. We stopped looking for a CTO after the first quarter.',
        name: 'DANIEL ROTH',
        role: 'CEO · D2C BRAND · TEL AVIV',
        image: 'about-hero',
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        title: 'Want to see if we fit?',
        action: link('Say hello', '/contact', 'secondary'),
      },
    ],
  },

  // ---------- CONTACT ----------
  {
    title: 'Contact',
    slug: 'contact',
    metaTitle: 'Contact — Grepfox',
    metaDescription: 'Start a conversation. We reply within one business day.',
    layout: [
      {
        blockType: 'heroSplit',
        eyebrow: 'CONTACT',
        title: 'Start a conversation.',
        subtitle:
          'A 30-minute discovery call, no slides. We map your systems, pick an entry point, and send a scoped pilot proposal within a week.',
        actions: [
          link('Email us', 'mailto:hello@grepfox.io', 'primary'),
          link('Book a call', 'https://cal.com/', 'outline', true),
        ],
        image: 'contact-hero',
        imageCaption: 'LET US BUILD SOMETHING.',
      },
      {
        blockType: 'ctaBanner',
        accent: true,
        eyebrow: 'DIRECT LINES',
        title: "Drop us a line. We read everything.",
        action: link('hello@grepfox.io', 'mailto:hello@grepfox.io', 'secondary'),
        contacts: [
          { icon: 'mail', label: 'EMAIL', value: 'hello@grepfox.io' },
          { icon: 'clock', label: 'RESPONSE', value: '< 1 business day' },
          { icon: 'calendar', label: 'DISCOVERY CALL', value: '30 minutes, no slides' },
        ],
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'What happens after I write to you?',
            answer:
              'A reply within one business day, usually same day. We pick a 30-minute slot for a discovery call — you tell us what you are solving, we tell you if we are the right fit.',
          },
          {
            question: 'What if I do not know exactly what I need?',
            answer:
              'That is the most common case. We scope the unknown into a small paid discovery engagement (1–2 weeks) and end with a plan and proposal.',
          },
          {
            question: 'Do you work with agencies as a white-label partner?',
            answer:
              'Yes. We quietly power the AI and automation work for several marketing agencies. Ask about our partner program.',
          },
        ],
      },
    ],
  },
]

// ---------- GLOBALS ----------

export const header = {
  nav: [
    { icon: 'layers', link: { type: 'external', url: '/services', label: 'SERVICES' } },
    { icon: 'sparkles', link: { type: 'external', url: '/ai-solutions', label: 'AI SOLUTIONS' } },
    { icon: 'compass', link: { type: 'external', url: '/approach', label: 'APPROACH' } },
    { icon: 'users', link: { type: 'external', url: '/about', label: 'ABOUT' } },
  ],
  cta: { link: { type: 'external', url: '/contact', label: 'START', appearance: 'primary' } },
}

export const footer = {
  brandTag: 'TECH PARTNER · AI · AUTOMATION',
  tagline:
    'Small crew, serious output. Based in the US & Israel. Book a scoping call and get a straight answer within 24h.',
  columns: [
    {
      title: 'SERVICES',
      links: [
        { icon: 'bot', link: { type: 'external', url: '/services/ai-agents', label: 'AI Agents' } },
        { icon: 'zap', link: { type: 'external', url: '/services/automation-integrations', label: 'Automation' } },
        { icon: 'layout', link: { type: 'external', url: '/services/web-platforms', label: 'Web Platforms' } },
        { icon: 'bar-chart', link: { type: 'external', url: '/services/analytics-reporting', label: 'Analytics' } },
        { icon: 'shield', link: { type: 'external', url: '/services/technical-maintenance', label: 'Maintenance' } },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { icon: 'users', link: { type: 'external', url: '/about', label: 'About' } },
        { icon: 'compass', link: { type: 'external', url: '/approach', label: 'Approach' } },
        { icon: 'sparkles', link: { type: 'external', url: '/ai-solutions', label: 'AI Solutions' } },
        { icon: 'message', link: { type: 'external', url: '/contact', label: 'Contact' } },
      ],
    },
    {
      title: 'CONTACT',
      links: [
        { icon: 'mail', link: { type: 'external', url: 'mailto:hello@grepfox.io', label: 'hello@grepfox.io' } },
        { icon: 'phone', link: { type: 'external', url: 'tel:+14155550123', label: '+1 (415) 555 0123' } },
        { icon: 'map-pin', link: { type: 'external', url: '/about', label: 'Tel Aviv · NYC' } },
      ],
    },
  ],
  copyright: `© GREPFOX ${new Date().getFullYear()} — ALL SYSTEMS NOMINAL`,
  legal: [
    { icon: 'github', link: { type: 'external', url: 'https://github.com/grepfox', label: 'GITHUB', newTab: true } },
    { link: { type: 'external', url: '/privacy', label: 'PRIVACY' } },
    { link: { type: 'external', url: '/terms', label: 'TERMS' } },
  ],
}
