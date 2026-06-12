export type ImageManifest = {
  key: string
  url: string
  filename: string
  alt: string
  credit?: string
}

// All images sourced from Unsplash (free-to-use license).
// Resolved URLs: https://images.unsplash.com/photo-<id>?w=1920&q=80
const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1920&q=80&fm=jpg&fit=crop`

export const images: ImageManifest[] = [
  {
    key: 'home-hero',
    url: U('1605379399642-870262d3d051'),
    filename: 'home-hero-server-room.jpg',
    alt: 'Dual monitors with code in a dark workspace, warm orange glow',
    credit: 'Unsplash',
  },
  {
    key: 'ai-layer',
    url: U('1545987796-200677ee1011'),
    filename: 'ai-abstract-glow.jpg',
    alt: 'Network mesh structure — nodes and connections, wireframe',
    credit: 'Alina Grubnyak · Unsplash',
  },
  {
    key: 'services-hero',
    url: U('1519389950473-47ba0277781c'),
    filename: 'services-hero-team-laptops.jpg',
    alt: 'Team collaborating around laptops',
    credit: 'Marvin Meyer · Unsplash',
  },
  {
    key: 'ai-solutions-hero',
    url: U('1639762681485-074b7f938ba0'),
    filename: 'ai-solutions-hero-circuit.jpg',
    alt: 'Modular 3D blocks assembling into a system',
    credit: 'Unsplash',
  },
  {
    key: 'approach-split',
    url: U('1542831371-29b0f74f9713'),
    filename: 'approach-code-editor.jpg',
    alt: 'Close-up of code on a dark screen',
    credit: 'Markus Spiske · Unsplash',
  },
  {
    key: 'approach-hero',
    url: U('1531297484001-80022131f5a1'),
    filename: 'approach-hero-workspace.jpg',
    alt: 'Dark engineering workspace with laptop',
    credit: 'Christopher Gower · Unsplash',
  },
  {
    key: 'about-hero',
    url: U('1522071820081-009f0129c71c'),
    filename: 'about-hero-team-meeting.jpg',
    alt: 'Small team in a working session',
    credit: 'Annie Spratt · Unsplash',
  },
  {
    key: 'about-mission',
    url: U('1556761175-5973dc0f32e7'),
    filename: 'about-mission-workspace.jpg',
    alt: 'Hands on keyboard, engineering workspace',
    credit: 'Unsplash',
  },
  {
    key: 'contact-hero',
    url: U('1451187580459-43490279c0fa'),
    filename: 'contact-hero-network.jpg',
    alt: 'Abstract network globe at night',
    credit: 'NASA · Unsplash',
  },
  // Feature-grid cards on home page
  {
    key: 'card-ai-agents',
    url: U('1485827404703-89b55fcc595e'),
    filename: 'card-ai-agents.jpg',
    alt: 'Humanoid assistant robot, warm interior light',
    credit: 'Alex Knight · Unsplash',
  },
  {
    key: 'card-automation',
    url: U('1639322537228-f710d846310a'),
    filename: 'card-automation-circuit.jpg',
    alt: 'Wireframe nodes connected into a network',
    credit: 'Unsplash',
  },
  {
    key: 'card-assistants',
    url: U('1526374965328-7f61d4dc18c5'),
    filename: 'card-assistants-matrix.jpg',
    alt: 'Green matrix code on black screen',
    credit: 'Markus Spiske · Unsplash',
  },
  {
    key: 'card-web',
    url: U('1555066931-4365d14bab8c'),
    filename: 'card-web-code.jpg',
    alt: 'MacBook with code, dark theme',
    credit: 'Luca Bravo · Unsplash',
  },
  {
    key: 'card-analytics',
    url: U('1551288049-bebda4e38f71'),
    filename: 'card-analytics-dashboard.jpg',
    alt: 'Dashboard with charts on a laptop',
    credit: 'Carlos Muza · Unsplash',
  },
  {
    key: 'card-maintenance',
    url: U('1629654297299-c8506221ca97'),
    filename: 'card-maintenance-server.jpg',
    alt: 'Terminal prompt with sudo command, macro',
    credit: 'Gabriel Heinzer · Unsplash',
  },
  // Service detail hero images
  {
    key: 'svc-ai-agents',
    url: U('1485827404703-89b55fcc595e'),
    filename: 'svc-ai-agents.jpg',
    alt: 'Humanoid assistant robot, warm interior light',
    credit: 'Alex Knight · Unsplash',
  },
  {
    key: 'svc-automation',
    url: U('1639322537228-f710d846310a'),
    filename: 'svc-automation.jpg',
    alt: 'Wireframe nodes connected into a network',
    credit: 'Unsplash',
  },
  {
    key: 'svc-web',
    url: U('1517694712202-14dd9538aa97'),
    filename: 'svc-web-platforms.jpg',
    alt: 'Developer workstation with code',
    credit: 'Florian Olivo · Unsplash',
  },
  {
    key: 'svc-analytics',
    url: U('1460925895917-afdab827c52f'),
    filename: 'svc-analytics.jpg',
    alt: 'Business analytics dashboards',
    credit: 'Luke Chesser · Unsplash',
  },
  {
    key: 'svc-maintenance',
    url: U('1629654297299-c8506221ca97'),
    filename: 'svc-maintenance.jpg',
    alt: 'Terminal prompt with sudo command, macro',
    credit: 'Unsplash',
  },
  {
    key: 'svc-training',
    url: U('1635070041078-e363dbe005cb'),
    filename: 'svc-training-chalkboard.jpg',
    alt: 'Formulas and diagrams chalked on a dark blackboard',
    credit: 'Unsplash',
  },
]
