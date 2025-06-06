# Jarvis Dashboard

> **Your Personal AI Assistant Dashboard**
> Modern, open‑source, and built for productivity.

---

## 🌟 Overview

**Jarvis Dashboard** is an open‑source, AI‑powered productivity platform that unifies your tasks, calendar, finances and more in a beautiful, modern interface.

* **Stack**: Next.js • TypeScript • TailwindCSS • Prisma • NextAuth
* **Extensibility**: Built for developers & power‑users—fork it, extend it, and integrate your favourite tools.

---

## 🎨 Theme & Feel

| Principle            | Description                                           |
| -------------------- | ----------------------------------------------------- |
| **Modern & Minimal** | Clean, dark‑themed UI with vibrant indigo accents     |
| **Intuitive**        | Effortless navigation and polished UX                 |
| **Extensible**       | Well‑typed, modular codebase that’s easy to customise |
| **Community‑Driven** | Open to ideas, issues, and pull‑requests              |

---

## 🗂️ Website Layout & Sections

1. **Hero** – Name, tagline, GitHub CTA, animated background
2. **What is Jarvis?** – Short description & value proposition
3. **Screenshots** – Gallery of dashboard, tasks, calendar…
4. **Features** – Current capabilities
5. **Integrations** – Current & planned APIs
6. **Getting Started** – Quick‑start for developers
7. **Roadmap** – Upcoming work & vision
8. **Contribute** – How to get involved
9. **License & Credits** – MIT + acknowledgements

---

## 🚀 Features

| Category                 | Highlights                          | Status         |
| ------------------------ | ----------------------------------- | -------------- |
| **Authentication**       | Google OAuth • Email/Password       | ✅              |
| **Dashboard**            | Personal greeting • Quick stats     | ✅              |
| **Task Management**      | CRUD tasks • Priorities • Due dates | ✅              |
| **Calendar Integration** | View & manage events                | ✅              |
| **Finance Tracker**      | Portfolio overview                  | 🟡 in‑progress |
| **AI Assistant**         | NLP task creation • Voice commands  | 🔜 planned     |
| **Notifications**        | Real‑time reminders & alerts        | 🔜 planned     |

---

## 🔌 Integrations

### Current

* Google OAuth (NextAuth)
* PostgreSQL (Prisma)

### Planned

* Google Calendar API
* OpenAI API
* Notion API
* Slack & Discord
* Zapier
* Stripe API
* Community suggestions 👀

---

## 🛣️ Roadmap

* [x] Core dashboard & authentication
* [x] Task and calendar modules
* [ ] AI‑powered assistant (NLP, voice)
* [ ] Deep API integrations (Google, Notion, …)
* [ ] Mobile‑friendly PWA
* [ ] Plugin system for community extensions
* [ ] Multi‑user & team support
* [ ] Internationalisation (i18n)
* [ ] Docs & tutorials

---

## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/jarvis-dashboard.git

# 2. Install deps
cd jarvis-dashboard
npm install

# 3. Configure env vars
cp .env.example .env
# add your credentials …

# 4. Run dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing

1. Check open [issues](https://github.com/yourusername/jarvis-dashboard/issues)
2. Fork → feature branch → pull‑request
3. Join the discussion & shape Jarvis!

---

## 📫 Contact & Community

* **GitHub Discussions:** [https://github.com/yourusername/jarvis-dashboard/discussions](https://github.com/yourusername/jarvis-dashboard/discussions)
* **Twitter:** [https://twitter.com/yourusername](https://twitter.com/yourusername)
* **Discord:** [https://discord.gg/your-invite](https://discord.gg/your-invite)

---

## 📝 License

Released under the **MIT License**.
See the full licence text in [`LICENSE`](https://github.com/yourusername/jarvis-dashboard/blob/main/LICENSE).

---

## 🛠 Development Plan

> Detailed timeline & tasks for building and deploying the marketing site (Next.js + TS + Tailwind + Aceternity UI)

| Phase                  | Goals                      | Key Tasks & Packages                                                                                                                 | Est. Time      |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| **0. Repo & Tooling**  | Project scaffold           | `npx create-next-app@latest jarvis-site --ts --tailwind --eslint --app --src-dir`.<br/>Add Husky, lint-staged, Prettier, commitlint. | **½ day**      |
| **1. Core Setup**      | Theme & globals            | Configure Tailwind (`dark` mode via `class`), import fonts, set accent colour; install `next-themes`.                                | **½ day**      |
| **2. Component Libs**  | UI primitives & animations | Install **shadcn/ui**; `npm i aceternity-ui framer-motion`. Add Aceternity plugin to `tailwind.config.ts`.                           | **½ day**      |
| **3. Layout & Nav**    | Responsive shell           | Build `RootLayout`; top nav, footer, skip‑link; apply `BackgroundBeams`.                                                             | **½ day**      |
| **4. Sections**        | Content pages              | Create `<Hero/>`, `<WhatIs/>`, `<Screenshots/>` … mapping to `siteConfig.ts`. Lazy‑load images, build roadmap timeline.              | **1–1½ days**  |
| **5. MDX (optional)**  | Rich docs                  | `npm i @next/mdx` & MDX provider for future blog/posts.                                                                              | **½ day**      |
| **6. SEO & Analytics** | Metadata                   | Add `next/seo` helper; generate OpenGraph cover; add Plausible/GA.                                                                   | **½ day**      |
| **7. CI & Preview**    | Quality gates              | GitHub Actions: lint, type‑check, build. Enable Vercel preview deployments.                                                          | **¼ day**      |
| **8. Deploy**          | Go live                    | Push → Vercel, add custom domain, set `NEXT_PUBLIC_VERCEL_URL`.                                                                      | **¼ day**      |
| **9. Polish**          | Accessibility & perf       | Lighthouse audit, contrast fixes, `prefers-reduced-motion`, optimise images.                                                         | **½ day**      |
| **Total**              |                            |                                                                                                                                      | **≈ 4‑5 days** |

### Suggested Folder Structure

```
/src
  /app               # Next.js App Router
    /components      # Reusable UI primitives
    /sections        # Hero.tsx, Features.tsx, …
    /(marketing)     # Static pages routed here
  /lib
    siteConfig.ts    # Centralised copy & data
  /styles            # globals.css & tailwind.css
/public
  /screens           # Marketing screenshots
```

Feel free to tweak or extend any part—just open an issue or PR. Happy coding! 🚀
