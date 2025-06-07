"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Boxes } from "../components/ui/Boxes";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";

const features = [
  {
    icon: "✅",
    title: "Tasks Engine",
    description: "Smart categories, streak gamification → 33% more tasks completed.",
    actions: ["add", "edit", "complete"],
  },
  {
    icon: "📅",
    title: "Calendar Pilot",
    description: "Zero collision reschedules, 2-click 'double-booked' fixes.",
    actions: ["read", "create", "move"],
  },
  {
    icon: "✉️",
    title: "Inbox Whisperer",
    description: "10× faster triage, GPT-tone replies that sound like you, not a robot.",
    actions: ["flag", "draft", "send"],
  },
  {
    icon: "💸",
    title: "Finance Tracker",
    description: "Talk-to-log spending, auto receipts import, monthly 'where your money went' PDF.",
    actions: ["log", "categorize", "report"],
  },
];

const stats = [
  "97% voice accuracy",
  "8 min avg saved per user/day",
  "4,000+ tasks closed last week",
  "40% fewer missed deadlines",
  "$200 avg overspend eliminated",
];

const faqs = [
  {
    question: "How does Jasper connect to my tools?",
    answer: "OAuth 2.0 with Google & Gmail; Stripe for spend import—no passwords stored.",
  },
  {
    question: "Can I still work manually?",
    answer: "Yes, every module has a full UI; Jasper is optional muscle, not a gatekeeper.",
  },
  {
    question: "Is my data private?",
    answer: "All content encrypted at rest; we never train on your personal data.",
  },
];

const magicMoments = [
  {
    moment: "Brain-dump a to-do",
    say: "Tomorrow: send contract, pick up dry-cleaning, 7 AM workout.",
    does: "Auto-creates three tasks, tags Work & Personal, sets a sunrise reminder.",
    why: "Your mental tabs close instantly.",
  },
  {
    moment: "Calendar chaos",
    say: "Move my 3 PM demo—clients are late.",
    does: "Finds a free slot, updates Google Calendar, pings attendees, reorders your task list.",
    why: "You never open a calendar app.",
  },
  {
    moment: "Email avalanche",
    say: "What's actually urgent?",
    does: "Scans 120 emails → flags 4, summarizes each in one line, drafts two quick replies.",
    why: "Inbox Zero in 60 seconds.",
  },
  {
    moment: "Random expense",
    say: "Lunch with Sara, $18.",
    does: "Logs to Meals & Entertainment, nudges you if you're near budget, updates the monthly chart.",
    why: "No more end-of-month surprises.",
  },
];

export default function WhatIsJasper() {
  const [expandedFaq, setExpandedFaq] = useState(0);

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-black">
      {/* Decorative Background */}
      <BackgroundBeams className="pointer-events-none absolute inset-0 w-full h-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headline & Subheadline */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One Assistant, Infinite Head-Space
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop juggling apps—talk to Jasper once and watch your day organize itself.
          </p>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full mb-4" />
          <blockquote className="italic text-lg text-gray-200 max-w-2xl text-center">
            "I stopped feeling guilty about 'forgetting things.' Jasper just… handles it."<br />
            <span className="not-italic font-medium text-indigo-300">— Alejandra M., Product Lead</span>
          </blockquote>
        </div>

        {/* Overview */}
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Jasper is your always-on productivity copilot. Speak or type any request—
          "Schedule project retro," "Log $15 groceries," "Summarize urgent emails"—
          and Jasper executes instantly, syncing with the tools you already use. One chat, zero tab-switching, measurable time saved.
        </p>

        {/* Magic Moments Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-6">4 Ways Jasper Gives You Your Life Back</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-400">
                  <th className="px-4 py-2">✨ Moment</th>
                  <th className="px-4 py-2">What You Say</th>
                  <th className="px-4 py-2">What Jasper Does</th>
                  <th className="px-4 py-2">Why It Feels Magic</th>
                </tr>
              </thead>
              <tbody>
                {magicMoments.map((row, i) => (
                  <tr key={i} className="bg-white/5 hover:bg-white/10 transition">
                    <td className="px-4 py-3 text-white font-medium">{row.moment}</td>
                    <td className="px-4 py-3 text-indigo-200">{row.say}</td>
                    <td className="px-4 py-3 text-gray-200">{row.does}</td>
                    <td className="px-4 py-3 text-fuchsia-200">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature Grid: Jasper's Super-Powers at a Glance */}
        <h3 className="text-2xl font-semibold text-white text-center mb-6">Jasper's Super-Powers, at a Glance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg/10 relative overflow-hidden cursor-pointer border border-white/10 hover:bg-white/20 transition"
            >
              <div className="text-3xl mb-4 text-white">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {feature.actions.map((action) => (
                  <span
                    key={action}
                    className="text-xs font-medium text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded-full"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Results Users Brag About */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-200"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Imagine Tomorrow Morning */}
        <div className="mb-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-white text-center mb-4">Imagine Tomorrow Morning…</h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Wake up → say <span className="text-indigo-200">"Agenda?"</span> while making coffee.</li>
            <li>Jasper reads your schedule, flags a storm delay, shifts a meeting, and books a Lyft 15 min later.</li>
            <li>Drive to work → Jasper summarizes overnight emails hands-free.</li>
            <li>Lunch line → speak your order cost; Jasper logs the expense.</li>
            <li>Evening → ask <span className="text-indigo-200">"What's left today?"</span>; Jasper marks two finished tasks, bumps one to tomorrow, and congratulates you for hitting a 5-day streak.</li>
          </ol>
          <p className="text-gray-400 text-center mt-4">That's it. One conversation thread handled the busywork of four separate apps—while you actually lived your day.</p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 last:border-0"
            >
              <button
                className="w-full py-4 text-left flex justify-between items-center"
                onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span
                  className={`transform transition-transform ${
                    expandedFaq === index ? "rotate-180" : ""
                  } text-white`}
                >
                  ▼
                </span>
              </button>
              {expandedFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pb-4 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors text-center" href="#signup">
            Start Free & Save 10 Min Today
          </a>
          <a className="border border-indigo-400 text-indigo-300 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900/30 transition-colors text-center" href="#live-demo">
            Watch a 60-sec Live Demo →
          </a>
        </div>
      </div>
    </section>
  );
} 