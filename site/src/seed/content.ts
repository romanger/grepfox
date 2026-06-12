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
      p(
        'We design, build and operate LLM-powered agents that ship real work — not demos. Pilot first: a scoped prototype in 2–4 weeks, measured impact, then a production service with monitoring, evals and guardrails.',
      ),
    ),
    heroImage: 'svc-ai-agents',
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '2–4 wk', label: 'PILOT', sublabel: 'first working agent' },
          { value: '24/7', label: 'UPTIME', sublabel: 'monitored in production' },
          { value: '3', label: 'LLM PROVIDERS', sublabel: 'OpenAI · Claude · self-host' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'WHAT WE BUILD.',
        subtitle: 'Agents that ship real work — not demos.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'message',
            title: 'Support agents',
            description:
              'Grounded in your knowledge base. Escalate to humans with full context when confidence drops.',
            tag: 'FLAGSHIP',
          },
          {
            icon: 'search',
            title: 'Internal assistants',
            description:
              'One answer box over scattered docs, tickets and CRM. Permission-aware by design.',
          },
          {
            icon: 'bot',
            title: 'Workflow agents',
            description:
              'Research, outreach, triage, QA. Autonomous where safe, supervised where it matters.',
          },
          {
            icon: 'sparkles',
            title: 'Content generators',
            description:
              'Drafts tuned to your brand voice, with review gates before anything ships.',
          },
          {
            icon: 'database',
            title: 'RAG pipelines',
            description:
              'Retrieval that stays fresh: ingestion, chunking, embeddings and re-ranking as a service.',
          },
          {
            icon: 'shield',
            title: 'Evals & guardrails',
            description:
              'Every agent ships with regression evals, output filters and a kill switch.',
          },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'WHY IT WORKS / 01',
        title: 'Grounded in your data.\nGuarded by evals.',
        description:
          'We treat agents as software: versioned prompts, automated evals on every change, monitoring on every conversation. You see how often the agent was right — in numbers, not anecdotes.',
        footnote: '— EVALS · GUARDRAILS · OBSERVABILITY',
        image: 'ai-layer',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'HOW A PILOT RUNS.',
        subtitle: 'From discovery call to production agent in weeks.',
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
        blockType: 'logoWall',
        heading: 'STACK',
        logos: [
          { name: 'OpenAI' },
          { name: 'Claude' },
          { name: 'LangChain' },
          { name: 'LlamaIndex' },
          { name: 'vLLM' },
          { name: 'Ollama' },
          { name: 'Pinecone' },
          { name: 'pgvector' },
          { name: 'Langfuse' },
          { name: 'Vercel AI SDK' },
          { name: 'BigQuery' },
          { name: 'Supabase' },
        ],
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 012',
        quote:
          'The agent took over half of our routine inquiries in month one. By month three our CSAT was up, not down — that was the part nobody believed.',
        name: 'DANA KOROL',
        role: 'HEAD OF SUPPORT · NORTHBEAM RETAIL',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'QUESTIONS.',
        subtitle: 'What buyers ask before starting an AI pilot.',
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'What about hallucinations?',
            answer:
              'We constrain agents to retrieved context, score answers against evals, and route low-confidence cases to humans. You define the risk threshold; the system enforces it.',
          },
          {
            question: "Will our data train someone else's model?",
            answer:
              'No. We use zero-retention API tiers or self-hosted models. Data processing terms are part of every engagement.',
          },
          {
            question: 'Which model will you choose?',
            answer:
              'The cheapest one that passes your evals. We benchmark OpenAI, Claude and open-source per task — and swap models without rebuilding when the market moves.',
          },
          {
            question: 'What does a pilot cost?',
            answer:
              'Fixed fee, scoped in the discovery call. You get a working agent on your data, an eval report, and a production plan — not a slide deck.',
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: false,
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
    ),
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '24/7', label: 'FLOW MONITORING', sublabel: 'alerts and automatic retries' },
          { value: '<5 min', label: 'ALERT LATENCY', sublabel: 'when something breaks' },
          { value: '40 h+', label: 'SAVED MONTHLY', sublabel: 'typical ops team' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'TYPICAL WORK.',
        subtitle: 'The flows we get asked to build, again and again.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'git-branch',
            title: 'Lead routing',
            description:
              'Score, enrich and route leads across HubSpot, Salesforce and outbound tools — in seconds, not Mondays.',
          },
          {
            icon: 'trending-up',
            title: 'Revenue pipelines',
            description:
              'Ad spend, CRM and billing flowing into one warehouse model your reports can trust.',
          },
          {
            icon: 'bell',
            title: 'Incident alerts',
            description:
              'Failures land in Slack with full context and a runbook link — not in a log nobody reads.',
          },
          {
            icon: 'refresh',
            title: 'Lifecycle automations',
            description:
              'Onboarding, renewal and win-back journeys synced across email, CRM and product events.',
          },
          {
            icon: 'plug',
            title: 'Data sync',
            description:
              'Two-way sync between systems that were never meant to talk. Idempotent, logged, reversible.',
          },
          {
            icon: 'settings',
            title: 'Back-office ops',
            description:
              'Invoicing, approvals, reporting chores — the manual work nobody should still be doing.',
          },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'RELIABILITY FIRST / 02',
        title: 'Automations are\nproduction software.',
        description:
          'A flow that silently fails is worse than no flow at all. Every automation ships with monitoring, alerts, retries and a named owner — plus a runbook your team can actually follow.',
        footnote: '— MONITORED · OWNED · DOCUMENTED',
        image: 'card-automation',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'FROM AUDIT TO AUTOPILOT.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Audit', description: 'Map every manual handoff and brittle spreadsheet.' },
          { title: 'Design', description: 'Pick the right tool per flow. Price the build.' },
          { title: 'Build', description: 'Ship flows weekly, starting with the biggest time sink.' },
          { title: 'Monitor', description: 'Alerts, retries and dashboards on every flow.' },
          { title: 'Iterate', description: 'Expand coverage as your stack grows.' },
        ],
      },
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
          { name: 'Slack' },
          { name: 'Stripe' },
          { name: 'Airtable' },
          { name: 'Google Ads' },
          { name: 'Meta Ads' },
          { name: 'BigQuery' },
        ],
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 008',
        quote:
          'We deleted eleven spreadsheets in the first quarter. Lead response time went from four hours to forty seconds, and nobody had to be hired to do it.',
        name: 'OMER SHANI',
        role: 'REVOPS LEAD · LATTICEWORK',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'QUESTIONS.',
        subtitle: 'Before you wire anything together.',
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'Zapier, Make, n8n — or custom code?',
            answer:
              'Whichever survives your volume and your compliance needs. Low-code for speed where it is safe, custom code where flows are core to revenue. We document the trade-off per flow.',
          },
          {
            question: 'What happens when a flow breaks?',
            answer:
              'You and we get alerted within minutes, with context. Most flows retry themselves; the rest follow a runbook. Retainer clients get response SLAs.',
          },
          {
            question: 'Who owns the automations?',
            answer:
              'You do. Everything lives in your accounts, documented, with admin access in your hands. Leaving us never means losing your flows.',
          },
          {
            question: 'Can you document what we already have?',
            answer:
              'Yes — that is usually step one of the audit. Most teams have automation sprawl nobody fully remembers. We inventory it before we add anything.',
          },
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
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'WHAT WE SHIP.',
        subtitle: 'Marketing surfaces that hold up under growth.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'layout',
            title: 'Marketing sites',
            description:
              'Next.js or headless WordPress. Fast, SEO-ready, integrated with your analytics and CRM.',
          },
          {
            icon: 'users',
            title: 'Customer portals',
            description:
              'Gated content, account areas and self-service flows on the same stack as your site.',
          },
          {
            icon: 'file-text',
            title: 'Headless WordPress',
            description:
              'Keep the editorial workflow your team knows; swap the front-end for one that is fast.',
          },
          {
            icon: 'target',
            title: 'Landing systems',
            description:
              'Campaign pages your marketers assemble from blocks — no developer in the loop.',
          },
          {
            icon: 'grid',
            title: 'Design systems',
            description:
              'Tokens, components and docs so every new page looks intentional, not improvised.',
          },
          {
            icon: 'bar-chart',
            title: 'Analytics wiring',
            description:
              'GA4, Mixpanel, HubSpot and consent management installed correctly the first time.',
          },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'BUILT TO BE RUN / 03',
        title: 'Fast for visitors.\nObvious for editors.',
        description:
          'Performance is a budget enforced in CI, so the site is still fast a year after launch. And the CMS is set up for the team that actually publishes — previews, blocks, no developer bottleneck.',
        footnote: '— PERFORMANCE BUDGETS · LIVE PREVIEW',
        image: 'card-web',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'FROM SCOPE TO LAUNCH.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Scope', description: 'Sitemap, content model, performance budget.' },
          { title: 'Design', description: 'Design system first, pages second.' },
          { title: 'Build', description: 'Weekly previews on a live staging URL.' },
          { title: 'Launch', description: 'SEO migration, redirects, analytics verified.' },
          { title: 'Grow', description: 'Landing pages, experiments, CRO on retainer.' },
        ],
      },
      {
        blockType: 'logoWall',
        heading: 'STACK',
        logos: [
          { name: 'Next.js' },
          { name: 'TypeScript' },
          { name: 'WordPress' },
          { name: 'Payload' },
          { name: 'Sanity' },
          { name: 'Contentful' },
          { name: 'Vercel' },
          { name: 'Cloudflare' },
          { name: 'GA4' },
          { name: 'Mixpanel' },
          { name: 'HubSpot' },
          { name: 'Storybook' },
        ],
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 015',
        quote:
          'Six weeks from kickoff to launch, and organic traffic was up 30% by the end of the quarter. The marketing team publishes everything themselves now.',
        name: 'IRIS BAUM',
        role: 'VP MARKETING · HELIOTROPE',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'QUESTIONS.',
        subtitle: 'The usual ones before a rebuild.',
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'Next.js or WordPress?',
            answer:
              'Depends on who publishes and what they publish. Editorial-heavy teams often keep WordPress as a headless CMS; product-led teams usually go Next.js with Payload or Sanity. We recommend per case, with reasons in writing.',
          },
          {
            question: 'Do you do design too?',
            answer:
              'Yes — design system, page design and UX copy. If you have a brand team, we build inside their guidelines instead.',
          },
          {
            question: 'Will we lose SEO in the migration?',
            answer:
              'Protecting it is part of the migration plan: redirect maps, structured data, and a crawl comparison before and after launch. Rankings are tracked through the cutover.',
          },
          {
            question: 'Can our team edit everything?',
            answer:
              'That is the goal. Pages are assembled from blocks with live preview. If your marketers still need a developer for a landing page, we consider the project unfinished.',
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: false,
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
    ),
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '1', label: 'DASHBOARD', sublabel: 'instead of ten' },
          { value: '7 d', label: 'TO FIRST CUT', sublabel: 'data model included' },
          { value: '100%', label: 'METRIC LINEAGE', sublabel: 'every number traceable' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'WHAT YOU GET.',
        subtitle: 'One place to look — and a story behind every number.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'pie-chart',
            title: 'Executive dashboard',
            description:
              'The five numbers leadership actually checks, on one screen, updated continuously.',
          },
          {
            icon: 'database',
            title: 'Unified data model',
            description:
              'CRM, ad platforms, billing and product events joined in one documented model.',
          },
          {
            icon: 'sparkles',
            title: 'AI narrative reports',
            description:
              'Weekly summaries drafted by AI, reviewed by us: what moved, why, what to do.',
            tag: 'NEW',
          },
          {
            icon: 'bell',
            title: 'Anomaly alerts',
            description:
              'When a metric breaks pattern, Slack knows before the Monday meeting does.',
          },
          {
            icon: 'compass',
            title: 'Attribution sanity',
            description:
              'Not a magic model — an honest one. You see what each channel really contributes.',
          },
          {
            icon: 'file-text',
            title: 'Metric dictionary',
            description:
              'Every KPI defined once, in writing. No more three versions of "conversion rate".',
          },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'NARRATED, NOT JUST CHARTED',
        title: 'Numbers that\nexplain themselves.',
        description:
          'Dashboards answer "what". The expensive question is "why". Our reports ship with an AI-drafted narrative: what changed, what likely caused it, and what deserves a decision.',
        footnote: '— WEEKLY NARRATIVES · ANOMALY ALERTS',
        image: 'card-analytics',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'FROM CHAOS TO ONE VIEW.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Audit', description: 'Inventory every source, metric and report in use.' },
          { title: 'Model', description: 'One warehouse model, documented and tested.' },
          { title: 'Build', description: 'Dashboards per audience — exec, marketing, ops.' },
          { title: 'Narrate', description: 'AI summaries and anomaly alerts go live.' },
          { title: 'Operate', description: 'We keep it true as tools and teams change.' },
        ],
      },
      {
        blockType: 'logoWall',
        heading: 'SOURCES & TOOLS',
        logos: [
          { name: 'GA4' },
          { name: 'BigQuery' },
          { name: 'Looker Studio' },
          { name: 'Metabase' },
          { name: 'dbt' },
          { name: 'HubSpot' },
          { name: 'Salesforce' },
          { name: 'Stripe' },
          { name: 'Google Ads' },
          { name: 'Meta Ads' },
          { name: 'Mixpanel' },
          { name: 'Airtable' },
        ],
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 009',
        quote:
          'Monday reporting went from half a day of copy-paste to a fifteen-minute read. The first anomaly alert paid for the whole project — a broken pixel we would have found a month later.',
        name: 'TOM REISS',
        role: 'COO · FERNWEH TRAVEL',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'QUESTIONS.',
        subtitle: 'Asked in every analytics discovery call.',
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'Looker Studio, Metabase or custom?',
            answer:
              'Looker Studio when your data lives in Google-land and budgets are tight. Metabase when you want self-serve exploration. Custom when dashboards are customer-facing. We run all three.',
          },
          {
            question: 'Do we need a data warehouse?',
            answer:
              'Above a couple of sources, yes — usually BigQuery, modeled with dbt. Below that, we can wire dashboards straight to the sources and tell you when you have outgrown it.',
          },
          {
            question: 'Our GA4 setup is a mess. Can you fix it?',
            answer:
              'Very common, very fixable. We re-do the measurement plan, repair events and consent mode, and document what each event means — so the data is trustworthy going forward.',
          },
          {
            question: 'What about attribution?',
            answer:
              'We are honest about it: no model sees everything. We combine platform data, first-party touchpoints and holdout common sense — and label uncertainty instead of hiding it.',
          },
        ],
      },
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
    ),
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '24/7', label: 'COVERAGE', sublabel: 'on-call rotation' },
          { value: '15 min', label: 'P1 RESPONSE', sublabel: 'target, backed by contract SLA' },
          { value: '20–100h', label: 'RETAINER', sublabel: 'monthly envelope' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'INSIDE THE RETAINER.',
        subtitle: 'Everything a fractional CTO would own — with an SLA.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'eye',
            title: 'Monitoring & alerting',
            description:
              'Uptime, performance and error tracking across web, CRM and automation layers.',
          },
          {
            icon: 'lock',
            title: 'Security updates',
            description:
              'Dependency upgrades, vulnerability scanning and patching on a fixed cadence.',
          },
          {
            icon: 'trending-up',
            title: 'Performance reviews',
            description:
              'Quarterly architecture and speed audits, with a prioritized fix list.',
          },
          {
            icon: 'user',
            title: 'Dedicated engineer',
            description:
              'A named owner who knows your stack, with a named backup. No ticket roulette.',
          },
          {
            icon: 'file-text',
            title: 'Monthly reports',
            description:
              'What shipped, what broke, what is next — in plain language, every month.',
          },
          {
            icon: 'alert',
            title: 'Emergency response',
            description:
              'P1 incidents answered in minutes, around the clock, with a post-mortem after. Exact targets live in your SLA.',
          },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'THE QUIET WORK',
        title: 'The boring work\nthat compounds.',
        description:
          'Unpatched plugins, silent backup failures and slow decay are how marketing stacks die. We own that layer: updates applied, backups verified by restore drills, every action logged in the monthly report.',
        footnote: '— SLA-BACKED · 24/7 ON-CALL',
        image: 'card-maintenance',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'HOW ONBOARDING WORKS.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Onboard', description: 'Access, inventory, risk map. Usually one week.' },
          { title: 'Baseline', description: 'Monitoring live, backups verified by restore.' },
          { title: 'Harden', description: 'Patch debt paid down, known vulnerabilities closed.' },
          { title: 'Operate', description: 'On-call, updates, monthly reporting begin.' },
          { title: 'Review', description: 'Quarterly architecture session with your team.' },
        ],
      },
      {
        blockType: 'logoWall',
        heading: 'WHAT WE WATCH',
        logos: [
          { name: 'WordPress' },
          { name: 'Next.js' },
          { name: 'Vercel' },
          { name: 'Cloudflare' },
          { name: 'AWS' },
          { name: 'Supabase' },
          { name: 'MySQL' },
          { name: 'Postgres' },
          { name: 'Redis' },
          { name: 'GitHub' },
          { name: 'Sentry' },
          { name: 'UptimeRobot' },
        ],
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 004',
        quote:
          'Two years on retainer, zero unplanned downtime. The quarterly reviews alone are worth it — they catch problems while they are still cheap.',
        name: 'NOA FELD',
        role: 'IT DIRECTOR · CASCADE GROUP',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'QUESTIONS.',
        subtitle: 'The fine print, answered up front.',
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'What counts as a P1 incident?',
            answer:
              'Site down, checkout broken, data loss in progress, or a security breach. P1s get our fastest response target around the clock; response times for every severity are defined in the contract.',
          },
          {
            question: 'Do unused hours roll over?',
            answer:
              'Partially — rollover terms are defined in the contract. Retainers are re-sized after the first quarter, so the envelope tracks how you actually use it.',
          },
          {
            question: "Can you take over code someone else wrote?",
            answer:
              'That is most of what we do. Onboarding includes a code and infrastructure audit, so we know what we are signing up to keep alive — and you get the audit report either way.',
          },
          {
            question: 'How do we exit?',
            answer:
              'A short notice period defined in the contract, full handover included: credentials, documentation, runbooks. Everything already lives in your accounts, so exit is administrative, not technical.',
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: false,
        title: 'Keep what you built compounding.',
        action: link('Discuss a retainer', '/contact', 'secondary'),
      },
    ],
  },
  {
    title: 'Team Training & Enablement',
    slug: 'team-training',
    icon: 'users',
    tier: 'core',
    heroImage: 'svc-training',
    summary:
      'Hands-on workshops and enablement programs that teach your team to use, supervise and extend AI agents.',
    body: doc(
      p(
        'Tools do not change how a company works; habits do. We train marketing and ops teams to work with the agents we build — so the system keeps compounding after we step back.',
      ),
    ),
    layout: [
      {
        blockType: 'numbers',
        items: [
          { value: '1–2 d', label: 'WORKSHOP', sublabel: 'hands-on, on your stack' },
          { value: '4–6 wk', label: 'ENABLEMENT', sublabel: 'from first session to habit' },
          { value: '100%', label: 'ON YOUR TOOLS', sublabel: 'no demo sandboxes' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'WHAT WE TEACH.',
        subtitle: 'Practical sessions built around your stack — not generic AI literacy.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'play',
            title: 'Agent onboarding',
            description:
              'Hands-on sessions for the teams that will use the agents: what to trust, what to check, what to escalate.',
            tag: 'START HERE',
          },
          {
            icon: 'message',
            title: 'Prompting that works',
            description:
              'Practical prompting for marketing and ops: reusable patterns for real tasks, not party tricks.',
          },
          {
            icon: 'eye',
            title: 'Supervision & QA',
            description:
              'How to read agent logs, review outputs and catch drift before customers do.',
          },
          {
            icon: 'settings',
            title: 'Tool fluency',
            description:
              'Make, Zapier, n8n and your CMS: your team learns to adjust flows without waiting for us.',
          },
          {
            icon: 'shield',
            title: 'Safe-use policies',
            description:
              'Data boundaries, approval gates and escalation rules your compliance team will sign off on.',
          },
          {
            icon: 'refresh',
            title: 'Train the trainer',
            description:
              'We coach an internal champion so the knowledge stays when new people join.',
          },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'WHY IT STICKS',
        title: 'Tools do not change teams.\nHabits do.',
        description:
          'Most AI training is a slideshow about prompts. Ours is a working session on your real stack: your data, your agents, your workflows — and homework that ships something.',
        footnote: '— ON YOUR STACK · NO SLIDES',
        image: 'card-assistants',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'HOW A PROGRAM RUNS.',
      },
      {
        blockType: 'processTimeline',
        steps: [
          { title: 'Assess', description: 'Map skills, tools and blockers in one session.' },
          { title: 'Design', description: 'Curriculum built on your real workflows.' },
          { title: 'Train', description: 'Small-group workshops, hands-on, on your stack.' },
          { title: 'Embed', description: 'Cheat sheets, runbooks and office hours.' },
          { title: 'Refresh', description: 'Quarterly sessions as models and tools change.' },
        ],
      },
      {
        blockType: 'logoWall',
        heading: 'WHAT TEAMS LEARN',
        logos: [
          { name: 'ChatGPT' },
          { name: 'Claude' },
          { name: 'Copilot' },
          { name: 'Gemini' },
          { name: 'Make' },
          { name: 'Zapier' },
          { name: 'n8n' },
          { name: 'Notion AI' },
          { name: 'HubSpot' },
          { name: 'Cursor' },
          { name: 'Perplexity' },
          { name: 'Slack AI' },
        ],
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 011',
        quote:
          'After two workshops the team stopped asking us to fix prompts and started shipping their own automations. The office-hours channel went quiet — in a good way.',
        name: 'LENA VARGA',
        role: 'MARKETING OPS LEAD · QUARRYSTONE',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 03',
        title: 'QUESTIONS.',
        subtitle: 'What teams ask before booking a program.',
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'Is this generic AI training?',
            answer:
              'No — every session runs on your stack and your data. If we did not build your agents, we start with a short audit so the examples are real.',
          },
          {
            question: 'Who is it for?',
            answer:
              'Marketing, ops and support teams who work with agents daily, the leads who supervise them, and one internal champion we coach to keep it going.',
          },
          {
            question: 'How big can groups be?',
            answer:
              'Workshops run best at 4–8 people. Larger teams split into tracks by role; leadership gets its own short briefing.',
          },
          {
            question: 'Do you train teams on agents you did not build?',
            answer:
              'Yes. We audit the setup first, then teach around it — and we will tell you honestly if something should be fixed before training people on it.',
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        accent: false,
        title: 'Want a team that runs its own agents?',
        action: link('Book a training program', '/contact', 'primary'),
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
          { text: 'TRAINING' },
          { text: 'RELIABILITY' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'WHAT WE DO.',
        subtitle:
          'Six practices. One team. We ship — and then we keep it running.',
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
              'Chatbots, internal assistants and autonomous workflow agents. Built on OpenAI, Claude and LangChain.',
            tag: 'FLAGSHIP',
            linkedService: 'ai-agents',
          },
          {
            icon: 'zap',
            image: 'card-automation',
            title: 'Automation',
            description:
              'Make, Zapier, n8n and custom code. CRMs, ad platforms and analytics wired together with monitoring.',
            linkedService: 'automation-integrations',
          },
          {
            icon: 'layout',
            image: 'card-web',
            title: 'Web Platforms',
            description:
              'Next.js and headless WordPress. Fast, SEO-ready, fully integrated with the marketing stack.',
            linkedService: 'web-platforms',
          },
          {
            icon: 'bar-chart',
            image: 'card-analytics',
            title: 'Analytics',
            description:
              'Looker Studio, Metabase and custom dashboards — with AI-drafted narrative reports for the C-suite.',
            linkedService: 'analytics-reporting',
          },
          {
            icon: 'shield',
            image: 'card-maintenance',
            title: 'Maintenance',
            description:
              'SLA-backed retainers. Monitoring, updates, on-call and quarterly reviews for the stack you already run.',
            linkedService: 'technical-maintenance',
          },
          {
            icon: 'users',
            image: 'svc-training',
            title: 'Training',
            description:
              'Workshops and enablement that make your team agent-fluent: prompting, supervision, safe use.',
            tag: 'NEW',
            linkedService: 'team-training',
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
        footnote: '— EST. 2025 · REMOTE-FIRST',
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
          { icon: 'mail', value: 'HELLO@GREPFOX.COM' },
          { icon: 'phone', value: '+1 (415) 555 0123' },
          { icon: 'map-pin', value: 'REMOTE · WORLDWIDE' },
          { icon: 'clock', value: '< 1 BUSINESS DAY · HUMANS + AGENTS' },
        ],
      },
    ],
  },

  // ---------- SERVICES overview ----------
  {
    title: 'Services',
    slug: 'services',
    metaTitle: 'Services — Grepfox',
    metaDescription: 'Six practices: AI agents, automation, web platforms, analytics, maintenance and team training.',
    layout: [
      {
        blockType: 'heroSplit',
        eyebrow: 'SERVICES',
        title: 'Six practices. One team.',
        subtitle:
          'Every engagement is custom, but the work falls into six patterns. Pick your entry point — we often run several in parallel.',
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
          { icon: 'users', image: 'svc-training', title: 'Training', description: 'Workshops that make teams agent-fluent.', linkedService: 'team-training' },
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
          { title: 'Pilot', description: 'Scoped engagement in one practice — 2 to 4 weeks.' },
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
        eyebrow: 'AI SOLUTIONS',
        meta: 'RECENT WORK',
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
        title: 'WHERE AI PAYS OFF.',
        subtitle:
          'Four patterns cover most of what marketing and ops teams actually need from AI today.',
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
            linkedService: 'ai-agents',
          },
          {
            icon: 'sparkles',
            image: 'card-assistants',
            title: 'Internal copilots',
            description:
              'Assistants that answer company questions from Notion, Slack, CRM and the drive that no one wants to search.',
            linkedService: 'ai-agents',
          },
          {
            icon: 'message',
            image: 'card-automation',
            title: 'Content & outreach',
            description:
              'Brief-to-draft generators tuned to your voice. Personalized outbound that does not sound personalized.',
            linkedService: 'ai-agents',
          },
          {
            icon: 'pie-chart',
            image: 'card-analytics',
            title: 'AI-narrated analytics',
            description:
              'Weekly executive reports drafted by an agent — with the raw dashboard underneath for the skeptics.',
            linkedService: 'analytics-reporting',
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
        blockType: 'splitLayout',
        imageSide: 'right',
        eyebrow: 'AFTER THE BUILD',
        title: 'Agents need fluent operators.',
        image: 'svc-training',
        content: doc(
          p(
            'The fastest way to waste an AI budget is to ship an agent nobody trusts or knows how to supervise. Our training programs make your team agent-fluent: prompting, supervision, safe use.',
          ),
        ),
        action: link('Explore team training', '/services/team-training', 'outline-accent'),
      },
      {
        blockType: 'accordionFaq',
        items: [
          {
            question: 'Where should we start?',
            answer:
              'With the most repetitive, measurable process you own. One discovery call to find it, one scoped pilot to prove it — success metrics agreed before we build anything.',
          },
          {
            question: 'Do we need an internal AI team for this?',
            answer:
              'No. We build and operate the system, and our training programs make your existing team fluent at using and supervising it.',
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
        title: 'Small by design. Senior by default.',
        subtitle:
          'Four senior engineers who spent a decade being everyone\'s fractional CTO — and then made it the whole job. Grepfox is that partner, on retainer.',
        actions: [link('Work with us', '/contact', 'primary'), link('How we work', '/approach', 'outline')],
        image: 'about-hero',
        imageCaption: 'TEAM · MISSION · METHOD',
      },
      {
        blockType: 'numbers',
        items: [
          { value: '4', label: 'ENGINEERS', sublabel: 'senior, dedicated' },
          { value: '14 yrs', label: 'AVG EXPERIENCE', sublabel: 'in web, data and AI' },
          { value: '50+', label: 'PROJECTS', sublabel: 'shipped across our careers' },
          { value: 'Global', label: 'TEAM', sublabel: 'distributed, always-on' },
        ],
      },
      {
        blockType: 'accentBlock',
        eyebrow: 'MISSION',
        title: 'Be the technical partner\nwe wish we had.',
        description:
          'Every founder and marketing leader hits the same wall: the stack gets too complex to run alone, but a full engineering team is overkill. That gap is where we live.',
        footnote: '— ONE TEAM · ONE RETAINER · ONE POINT OF ACCOUNTABILITY',
        image: 'about-mission',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'HOW WE ARE DIFFERENT.',
        subtitle: 'Builders who run what they ship.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'terminal',
            title: 'Build and operate',
            description:
              'Agencies hand off and vanish; consultancies never touch code. AI systems demand both, so we do both.',
          },
          {
            icon: 'star',
            title: 'Senior only',
            description:
              'Every project is staffed by engineers with a decade-plus of production work behind them.',
          },
          {
            icon: 'file-text',
            title: 'Everything written down',
            description:
              'Decisions, trade-offs, runbooks. Your team can understand — and inherit — every line we ship.',
          },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'WHAT WE DO NOT DO.',
        subtitle: 'It is easier to trust a team that names its limits.',
      },
      {
        blockType: 'featureGrid',
        columns: '4',
        items: [
          {
            icon: 'x',
            title: 'White-label resale',
            description: 'We do not resell tools we did not build.',
          },
          {
            icon: 'x',
            title: 'API spend cuts',
            description: 'We do not take percentages of vendor spend.',
          },
          {
            icon: 'x',
            title: 'Prototype theater',
            description: 'We do not ship demos and call them products.',
          },
          {
            icon: 'x',
            title: 'Lock-in',
            description: 'Everything lives in your accounts. Leaving is administrative.',
          },
        ],
      },
      {
        blockType: 'testimonial',
        eyebrow: 'TESTIMONIAL / 002',
        quote:
          'They behave like an in-house team that just happens to work remotely. We stopped looking for a CTO after the first quarter.',
        name: 'DANIEL ROTH',
        role: 'CEO · D2C BRAND',
      },
      {
        blockType: 'ctaBanner',
        accent: false,
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
          link('Email us', 'mailto:hello@grepfox.com', 'primary'),
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
        action: link('hello@grepfox.com', 'mailto:hello@grepfox.com', 'secondary'),
        contacts: [
          { icon: 'mail', label: 'EMAIL', value: 'hello@grepfox.com' },
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
              'That is the most common case. We scope the unknown into a small paid scoping engagement (1–2 weeks) and end with a plan and proposal.',
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

  // ---------- PRIVACY ----------
  {
    title: 'Privacy Policy',
    slug: 'privacy',
    metaTitle: 'Privacy Policy — Grepfox',
    metaDescription: 'How Grepfox collects, uses and protects your data.',
    layout: [
      {
        blockType: 'sectionHead',
        number: 'LEGAL / 01',
        title: 'PRIVACY POLICY.',
        subtitle: 'Last updated: June 12, 2026',
      },
      {
        blockType: 'numbers',
        items: [
          { value: '0', label: 'AD TRACKERS', sublabel: 'no pixels, no ad networks' },
          { value: '0', label: 'DATA SOLD', sublabel: 'ever, to anyone' },
          { value: '<1 d', label: 'REPLY', sublabel: 'to any data request' },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'THE SHORT VERSION.',
        subtitle: 'Plain language first. The full policy follows below.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'mail',
            title: 'What we collect',
            description:
              'What you send us when you write or book a call, plus minimal, aggregate site analytics. Nothing more.',
          },
          {
            icon: 'lock',
            title: 'What we never do',
            description:
              'Sell your data, run third-party ad tracking, or use your inquiry for anything except answering it.',
          },
          {
            icon: 'check',
            title: 'Your controls',
            description:
              'Ask what we hold, fix it, or have it deleted — one email to hello@grepfox.com, answered within a business day.',
          },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'THE FULL POLICY.',
      },
      {
        blockType: 'richText',
        content: doc(
          h('h2', 'Who we are'),
          p(
            'Grepfox ("we", "us") provides AI, automation, web and maintenance services for businesses. This policy describes how we handle personal data collected through this website. It does not cover data we process on behalf of clients under a service agreement — that is governed by the data processing terms of each engagement.',
          ),
          h('h2', 'What we collect'),
          ul([
            'Contact details you send us — name, email, company and anything you include in a message or scoping call request',
            'Basic usage data — pages visited, referrer and approximate region, collected through privacy-respecting analytics',
            'Technical data required to serve the site — IP address, browser type, device class',
          ]),
          h('h2', 'How we use it'),
          ul([
            'To reply to your inquiry and prepare a proposal',
            'To understand which pages are useful and improve the site',
            'To meet legal and accounting obligations where they apply',
          ]),
          p('We do not sell personal data, and we do not use it for third-party advertising.'),
          h('h2', 'Cookies and analytics'),
          p(
            'We keep cookies to the minimum needed for the site to function and for aggregate analytics. No cross-site tracking pixels, no ad networks.',
          ),
          h('h2', 'Third parties'),
          p(
            'We rely on a small set of processors to run our business — hosting, email and scheduling providers. Each processes data only on our instructions. As a distributed company we may process data across regions; the same safeguards apply everywhere.',
          ),
          h('h2', 'Retention'),
          p(
            'Inquiry correspondence is kept for as long as a business relationship is active or being discussed, then deleted on a periodic review. Analytics data is aggregated and contains no direct identifiers.',
          ),
          h('h2', 'Your rights'),
          p(
            'You may request access to, correction of, or deletion of your personal data at any time. Write to hello@grepfox.com and we will respond within one business day.',
          ),
          h('h2', 'Contact'),
          p('Questions about this policy: hello@grepfox.com.'),
        ),
      },
      {
        blockType: 'ctaBanner',
        accent: false,
        title: 'Questions about your data?',
        action: link('Write to us', 'mailto:hello@grepfox.com', 'primary'),
      },
    ],
  },

  // ---------- TERMS ----------
  {
    title: 'Terms of Service',
    slug: 'terms',
    metaTitle: 'Terms of Service — Grepfox',
    metaDescription: 'Terms governing the use of the Grepfox website.',
    layout: [
      {
        blockType: 'sectionHead',
        number: 'LEGAL / 02',
        title: 'TERMS OF SERVICE.',
        subtitle: 'Last updated: June 12, 2026',
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 01',
        title: 'IN PLAIN WORDS.',
        subtitle: 'Three things to know. The full terms follow below.',
      },
      {
        blockType: 'featureGrid',
        columns: '3',
        items: [
          {
            icon: 'file-text',
            title: 'The site is not a contract',
            description:
              'Engagements are governed by signed agreements. Nothing here is a binding offer or a guaranteed service level.',
          },
          {
            icon: 'bar-chart',
            title: 'Results are examples',
            description:
              'Metrics and timelines describe past work. Your project gets its own scope, numbers and SLA — on paper.',
          },
          {
            icon: 'shield',
            title: 'Play fair',
            description:
              'Browse and share freely. No scraping for republication or model training, no breaking things on purpose.',
          },
        ],
      },
      {
        blockType: 'sectionHead',
        number: 'SECTION 02',
        title: 'THE FULL TERMS.',
      },
      {
        blockType: 'richText',
        content: doc(
          h('h2', 'Scope'),
          p(
            'These terms govern your use of this website. Consulting, development and retainer engagements are governed by separate written agreements; nothing on this site forms a contract for services or a binding offer.',
          ),
          h('h2', 'Content'),
          p(
            'Site content — including case results, timelines and metrics — describes past work and typical engagements. It is provided for general information and does not guarantee a specific outcome for your project. Service levels, response times and deliverables are defined only in a signed agreement.',
          ),
          h('h2', 'Intellectual property'),
          p(
            'The Grepfox name, logo, design system and site content belong to us or our licensors. You may not reproduce them beyond normal browsing and sharing without permission. Client logos and testimonials are used with consent.',
          ),
          h('h2', 'Acceptable use'),
          ul([
            'Do not attempt to disrupt, probe or overload the site',
            'Do not scrape content for republication or model training without permission',
            'Do not misrepresent an affiliation with Grepfox',
          ]),
          h('h2', 'Disclaimers'),
          p(
            'The site is provided "as is". We work to keep it accurate and available but make no warranty that it will be uninterrupted or error-free. To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from use of the site.',
          ),
          h('h2', 'Changes'),
          p(
            'We may update these terms from time to time. The date above reflects the latest revision; continued use of the site after a change constitutes acceptance.',
          ),
          h('h2', 'Contact'),
          p('Questions about these terms: hello@grepfox.com.'),
        ),
      },
      {
        blockType: 'ctaBanner',
        accent: false,
        title: 'Questions about these terms?',
        action: link('Write to us', 'mailto:hello@grepfox.com', 'primary'),
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
    'Small crew, serious output. Remote-first, working across time zones. Book a scoping call and get a straight answer within one business day.',
  columns: [
    {
      title: 'SERVICES',
      links: [
        { icon: 'bot', link: { type: 'external', url: '/services/ai-agents', label: 'AI Agents' } },
        { icon: 'zap', link: { type: 'external', url: '/services/automation-integrations', label: 'Automation' } },
        { icon: 'layout', link: { type: 'external', url: '/services/web-platforms', label: 'Web Platforms' } },
        { icon: 'bar-chart', link: { type: 'external', url: '/services/analytics-reporting', label: 'Analytics' } },
        { icon: 'shield', link: { type: 'external', url: '/services/technical-maintenance', label: 'Maintenance' } },
        { icon: 'users', link: { type: 'external', url: '/services/team-training', label: 'Training' } },
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
        { icon: 'mail', link: { type: 'external', url: 'mailto:hello@grepfox.com', label: 'hello@grepfox.com' } },
        { icon: 'phone', link: { type: 'external', url: 'tel:+14155550123', label: '+1 (415) 555 0123' } },
        { icon: 'map-pin', link: { type: 'external', url: '/about', label: 'Remote · Worldwide' } },
      ],
    },
  ],
  copyright: `© GREPFOX ${new Date().getFullYear()} — ALL SYSTEMS NOMINAL`,
  legal: [
    { icon: 'linkedin', link: { type: 'external', url: 'https://www.linkedin.com/company/grepfox', label: 'LINKEDIN', newTab: true } },
    { icon: 'x-social', link: { type: 'external', url: 'https://x.com/grepfox', label: 'X', newTab: true } },
    { icon: 'youtube', link: { type: 'external', url: 'https://www.youtube.com/@grepfox', label: 'YOUTUBE', newTab: true } },
    { link: { type: 'external', url: '/privacy', label: 'PRIVACY' } },
    { link: { type: 'external', url: '/terms', label: 'TERMS' } },
  ],
}
