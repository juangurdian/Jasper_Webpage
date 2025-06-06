export const siteConfig = {
  name: "Jarvis Dashboard",
  description: "Your Personal AI Assistant Dashboard - Modern, open-source, and built for productivity.",
  url: "https://jarvis-dashboard.vercel.app",
  ogImage: "https://jarvis-dashboard.vercel.app/og.jpg",
  links: {
    github: "https://github.com/yourusername/jarvis-dashboard",
    twitter: "https://twitter.com/yourusername",
    discord: "https://discord.gg/your-invite",
  },
  features: [
    {
      title: "Authentication",
      description: "Google OAuth • Email/Password",
      status: "✅",
    },
    {
      title: "Dashboard",
      description: "Personal greeting • Quick stats",
      status: "✅",
    },
    {
      title: "Task Management",
      description: "CRUD tasks • Priorities • Due dates",
      status: "✅",
    },
    {
      title: "Calendar Integration",
      description: "View & manage events",
      status: "✅",
    },
    {
      title: "Finance Tracker",
      description: "Portfolio overview",
      status: "🟡 in-progress",
    },
    {
      title: "AI Assistant",
      description: "NLP task creation • Voice commands",
      status: "🔜 planned",
    },
    {
      title: "Notifications",
      description: "Real-time reminders & alerts",
      status: "🔜 planned",
    },
  ],
  integrations: {
    current: [
      "Google OAuth (NextAuth)",
      "PostgreSQL (Prisma)",
    ],
    planned: [
      "Google Calendar API",
      "OpenAI API",
      "Notion API",
      "Slack & Discord",
      "Zapier",
      "Stripe API",
    ],
  },
  roadmap: [
    { text: "Core dashboard & authentication", completed: true },
    { text: "Task and calendar modules", completed: true },
    { text: "AI-powered assistant (NLP, voice)", completed: false },
    { text: "Deep API integrations (Google, Notion, …)", completed: false },
    { text: "Mobile-friendly PWA", completed: false },
    { text: "Plugin system for community extensions", completed: false },
    { text: "Multi-user & team support", completed: false },
    { text: "Internationalisation (i18n)", completed: false },
    { text: "Docs & tutorials", completed: false },
  ],
} as const; 