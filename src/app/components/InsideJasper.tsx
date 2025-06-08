import { motion } from 'framer-motion';
import { CheckCircle, CalendarClock, Mail, CreditCard } from 'lucide-react';
import { BackgroundBeams } from './ui/BackgroundBeams';

const modules = [
  { icon: CheckCircle, title: 'Tasks',    copy: 'Add, edit, prioritise, gamified streaks.' },
  { icon: CalendarClock, title: 'Calendar', copy: '2-way Google / Outlook sync; clash auto-fix.' },
  { icon: Mail,         title: 'Inbox',   copy: 'Summaries, priority alerts, GPT-drafted replies.' },
  { icon: CreditCard,   title: 'Finance', copy: 'Voice-logged expenses & monthly spend reports.' },
];

export default function InsideJasper() {
  return (
    <section id="inside" className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Animated Beams Background */}
      <BackgroundBeams className="pointer-events-none absolute inset-0 w-full h-full z-0" />
      {/* Subtle radial background for grid */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#1a1d24] to-transparent opacity-70" />
      <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Inside Jasper: <span className="text-indigo-400">Your All-in-One Command Center</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-300">
          Four purpose-built modules share one brain, so every chat command turns into a finished action.
        </p>

        {/* Module grid */}
        <motion.ul
          variants={{show:{transition:{staggerChildren:.07}}}}
          initial="hidden" whileInView="show" viewport={{once:true,amount:.2}}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {modules.map(m => (
            <motion.li
              key={m.title}
              variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}}
              className="group relative flex flex-col gap-4 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-white/10 backdrop-blur-xl rounded-2xl p-6
                         shadow-lg/30 hover:-translate-y-1 transition before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:ring-0 hover:before:ring-1 hover:before:ring-indigo-500/60 border border-white/10"
            >
              <m.icon className="h-8 w-8 text-indigo-400 group-hover:animate-pulse" />
              <h3 className="text-lg font-semibold text-white">{m.title}</h3>
              <p className="text-sm text-gray-300">{m.copy}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Platform bar */}
        <div className="mt-16 mx-auto max-w-3xl bg-white/5 backdrop-blur rounded-2xl px-6 py-5
                        flex flex-col sm:flex-row sm:items-center gap-4 shadow-inner shadow-indigo-700/20">
          <div className="flex-1 text-gray-200 text-sm">
            <strong className="text-white">Web today</strong> — log in on any desktop or mobile browser.<br/>
            <strong className="text-white">Coming soon</strong> — native iOS & Android apps, plus macOS/Windows wrappers.
          </div>
          <a href="#beta" className="inline-flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-500
                                     px-6 py-3 text-xs font-medium text-white transition">
            Join the Beta →
          </a>
        </div>
      </div>
    </section>
  );
} 