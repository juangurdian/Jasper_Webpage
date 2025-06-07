import { motion, useReducedMotion } from 'framer-motion';
import { SiGmail, SiGooglecalendar, SiSlack, SiNotion, SiDiscord, SiGoogledrive, SiHubspot, SiZapier, SiDropbox, SiGoogletasks, SiN8N, SiTodoist, SiAsana, SiTrello, SiClickup } from 'react-icons/si';
import { MdEmail, MdCalendarToday, MdIntegrationInstructions } from 'react-icons/md';
import { BackgroundBeams } from "./ui/BackgroundBeams";

const live = [
  { name: 'Gmail',     icon: SiGmail, href: '#' },
  { name: 'GCal',      icon: SiGooglecalendar, href: '#' },
  { name: 'Drive',     icon: SiGoogledrive, href: '#' },
  { name: 'Outlook',   icon: MdEmail, href: '#' },
  { name: 'O-Calendar',icon: MdCalendarToday, href: '#' },
  { name: 'Slack',     icon: SiSlack, href: '#' },
  { name: 'Notion',    icon: SiNotion, href: '#' },
];
const coming = [
  { name: 'Discord',   icon: SiDiscord },
  { name: 'HubSpot',   icon: SiHubspot },
  { name: 'Zapier',    icon: SiZapier },
  { name: 'Plaid',     icon: MdIntegrationInstructions },
  { name: 'Dropbox',   icon: SiDropbox },
  { name: 'Google Tasks', icon: SiGoogletasks },
  { name: 'n8n',       icon: SiN8N },
  { name: 'Todoist',   icon: SiTodoist },
  { name: 'Asana',     icon: SiAsana },
  { name: 'Trello',    icon: SiTrello },
  { name: 'ClickUp',   icon: SiClickup },
];

function LogoGrid({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="mt-12">
      <h3 className="mb-6 text-sm font-semibold tracking-wide text-indigo-400 uppercase">
        {title}
      </h3>
      <motion.ul
        variants={{ show:{ transition:{ staggerChildren: .07 }} }}
        initial="hidden" whileInView="show" viewport={{once:true, amount:.2}}
        className="flex flex-row flex-wrap justify-center gap-8"
      >
        {items.map(i => (
          <motion.li
            key={i.name}
            variants={{hidden:{opacity:0, scale:.8}, show:{opacity:1, scale:1}}}
            className="group relative rounded-2xl bg-white/5 backdrop-blur-sm p-4 shadow-lg/30 transition hover:shadow-indigo-500/40 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-transparent group-hover:before:ring-indigo-500/60"
            tabIndex={0}
          >
            <i.icon size={56} aria-label={i.name} className="mx-auto" />
            <span className="sr-only">{i.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function LogoCarousel({ title, items }:{title:string; items:any[]}) {
  const motionReduced = useReducedMotion();
  return (
    <div className="mt-12 overflow-hidden">
      <h3 className="mb-6 text-sm font-semibold tracking-wide text-gray-400 uppercase">
        {title}
      </h3>
      <div className="relative">
        {items.length > 1 && !motionReduced ? (
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...items, ...items].map((i, idx) => (
              <div key={idx}
                className="rounded-2xl bg-white/5 backdrop-blur-sm p-4 shadow-md/20 opacity-40 hover:opacity-70 transition"
              >
                <i.icon size={56} aria-label={i.name} className="mx-auto" />
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="flex gap-6 justify-center">
            {items.map((i, idx) => (
              <div key={idx}
                className="rounded-2xl bg-white/5 backdrop-blur-sm p-4 shadow-md/20 opacity-40 hover:opacity-70 transition"
              >
                <i.icon size={56} aria-label={i.name} className="mx-auto" />
              </div>
            ))}
          </div>
        )}
        {/* gradient mask edges */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black to-black via-transparent [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" />
      </div>
    </div>
  );
}

export default function IntegrationSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Animated Beams Background */}
      <BackgroundBeams className="pointer-events-none absolute inset-0 w-full h-full z-0" />
      {/* optional abstract background */}
      <span className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Connect Jasper to the tools you already use
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-300">
          One-click OAuth · Zero copy-paste APIs · Data encrypted end-to-end
        </p>
        {/* LIVE GRID */}
        <LogoGrid title="Live today" items={live} />
        {/* DIVIDER */}
        <div className="mx-auto my-12 h-px w-64 bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
        {/* COMING SOON CAROUSEL */}
        <LogoCarousel title="Rolling out next" items={coming} />
        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/roadmap" className="btn-outline">See roadmap →</a>
          <a href="/contact"  className="btn-ghost">Request an integration</a>
        </div>
      </div>
    </section>
  );
} 