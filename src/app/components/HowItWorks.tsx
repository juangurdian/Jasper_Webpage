"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Boxes } from "./ui/Boxes";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { CheckCircle, Calendar, Wallet, Clock3, Mail, MailPlus, Zap } from 'lucide-react';
import clsx from 'clsx';

const bubbles: { type: 'user' | 'jasper'; message: string }[] = [
  {
    type: 'user',
    message: "Morning, Jasper! What's on my plate?",
  },
  {
    type: 'jasper',
    message: "You've 3 tasks & 2 meetings. Want the rundown?",
  },
  {
    type: 'user',
    message: "Log a $15 grocery run.",
  },
  {
    type: 'jasper',
    message: "Added to Groceries → May budget left: $212.",
  },
  {
    type: 'user',
    message: "Mark design review done.",
  },
  {
    type: 'jasper',
    message: "Nice! Moved to Completed.",
  },
  {
    type: 'user',
    message: "Reschedule client call to tomorrow.",
  },
  {
    type: 'jasper',
    message: "Found 3 open slots—picked 10 AM. Notified all 🎉",
  },
  {
    type: 'user',
    message: "Any urgent emails?",
  },
  {
    type: 'jasper',
    message: "2 flagged: invoice & travel update. Summaries ready.",
  },
  {
    type: 'user',
    message: "Draft reply: 'sounds good, thanks!'",
  },
  {
    type: 'jasper',
    message: "Reply drafted in drafts folder. Want me to send?",
  },
  {
    type: 'user',
    message: "Send it.",
  },
  {
    type: 'jasper',
    message: "Done. Anything else?",
  },
];

const contextCards = [
  {
    title: "Daily Brief",
    body: "9:00 AM design review, 1:00 PM client call",
    color: "indigo",
    icon: Calendar,
  },
  {
    title: "Expense Logged",
    body: "Touch to open report",
    color: "amber",
    icon: Wallet,
  },
  {
    title: "Task Completed",
    body: "37 h saved this month",
    color: "emerald",
    icon: CheckCircle,
  },
  {
    title: "Calendar Update",
    body: "Google Calendar synced",
    color: "cyan",
    icon: Clock3,
  },
  {
    title: "Inbox Summary",
    body: "Click to read",
    color: "rose",
    icon: Mail,
  },
  {
    title: "Email Drafted",
    body: "GPT-tone matched",
    color: "rose",
    icon: MailPlus,
  },
  {
    title: "Time Saved",
    body: "6 min & 14 clicks avoided",
    color: "violet",
    icon: Zap,
  },
];

function colorClasses(color: string) {
  return {
    dot: `bg-${color}-500 ring-4 ring-${color}-500/30`,
    bar: `before:bg-${color}-500/80`,
    icon: `text-${color}-400`,
    glow: `group-hover:ring-${color}-400/60`,
  };
}

const ContextItem = ({ color, icon: Icon, title, body, isLast }: { color: string; icon: any; title: string; body: string; isLast?: boolean }) => {
  const colors = colorClasses(color);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex items-start gap-4"
    >
      {/* dot + line */}
      <div className="flex flex-col items-center">
        {/* Pulsing dot with ring */}
        <span className="relative flex items-center justify-center">
          <motion.span
            className={clsx("absolute h-6 w-6 rounded-full", colors.dot)}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'blur(2px)' }}
          />
          <span className={clsx("h-3 w-3 rounded-full z-10", colors.dot)} />
        </span>
        {!isLast && <span className="flex-1 w-px bg-white/10" />}
      </div>
      {/* card */}
      <motion.div
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          "relative group flex-1 overflow-hidden border border-white/15 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition transform-gpu hover:-translate-y-0.5",
          "bg-white/10 backdrop-blur-md",
        )}
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.12) 100%)"
        }}
      >
        {/* Neon gradient left spine */}
        <span className="absolute left-0 top-0 h-full w-1.5 rounded-l-xl bg-gradient-to-b from-indigo-400 via-fuchsia-500 to-indigo-400 shadow-[0_0_12px_2px_rgba(139,92,246,0.4)]" />
        {/* Glowing ring on hover */}
        <span className={clsx("pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-transparent transition group-hover:ring-fuchsia-400/60")} />
        {/* Glass reflection (sheen) */}
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] after:absolute after:inset-0 after:bg-gradient-to-tr after:from-white/10 after:to-transparent after:rounded-[inherit]" />
        {/* Laser reflection line */}
        <span className="absolute left-4 right-4 top-6 h-0.5 bg-white/30 rounded-full blur-sm opacity-60" />
        <div className="flex items-center gap-2 mb-1">
          <Icon className={clsx("h-5 w-5", colors.icon)} />
          <h4 className="font-semibold text-white text-base">{title}</h4>
        </div>
        <p className="mt-0.5 text-[14px] text-gray-300/80 leading-snug">{body}</p>
      </motion.div>
    </motion.div>
  );
};

const Bubble = ({ type, message }: { type: 'user' | 'jasper'; message: string }) => (
  <motion.li
    className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
  >
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        type === 'user'
          ? 'bg-indigo-600 text-white shadow-md'
          : 'bg-white/70 backdrop-blur text-gray-900 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-indigo-400 before:rounded-l-2xl'
      }`}
    >
      {message}
    </div>
  </motion.li>
);

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const yChat = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  return (
    <section id="how-it-works" ref={ref} className="relative min-h-[120vh] lg:flex bg-black overflow-hidden pt-24 pb-8">
      {/* Decorative Background - covers the whole section */}
      <BackgroundBeams className="pointer-events-none absolute inset-0 w-full h-full z-0" />
      {/* Content (z-10) */}
      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col lg:flex-row">
        {/* Sticky phone mock-up */}
        <div className="lg:w-2/5 lg:sticky lg:top-24 px-4 lg:px-0 flex items-start">
          <div className="relative mx-auto w-[260px] lg:w-[300px] min-h-[550px] max-h-[680px] h-full rounded-[2rem] bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl border border-white/30 shadow-xl flex flex-col justify-center">
            <motion.ul className="flex flex-col gap-2 p-6 h-full overflow-y-auto">
              {bubbles.map((b, i) => (
                <Bubble key={i} {...b} />
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Context strip */}
        <div className="lg:w-3/5 lg:pl-16 mt-16 lg:mt-0">
          <motion.div
            className="flex flex-col space-y-4 md:space-y-6"
            variants={{
              show: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            initial="hidden"
            whileInView="show"
          >
            {contextCards.map((c, i) => (
              <ContextItem key={c.title} {...c} isLast={i === contextCards.length - 1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 