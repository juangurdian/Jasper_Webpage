import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const faqs = [
  { q: 'Is the beta really free?', a: 'Yes. All features, no credit card—until public launch.' },
  { q: 'Mac, Windows, mobile?', a: 'Web today. macOS & Windows wrappers ship Q4. Mobile early 2026.' },
  { q: 'Languages supported?', a: 'English, Spanish, French beta; more via DeepL Q1 2026.' },
  { q: 'Does Jasper store my emails?', a: 'Summaries cached 24 h, then wiped. Raw email never kept.' },
  { q: 'Can my team join?', a: 'Absolutely—one Slack channel for each company domain in beta.' },
];

export default function FinalSection() {
  const seats = 37; // dynamic fetch in prod
  return (
    <section id="final" className="relative py-24 lg:py-32 bg-[#0a0d12] overflow-hidden">
      {/* background flair */}
      <span className="absolute -top-48 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 grid gap-16 lg:grid-cols-2 relative z-10">
        {/* FAQ */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Got 30 seconds? You're ready for Jasper.
          </h2>
          <p className="mt-4 text-gray-300 max-w-md">
            Most answers are here. Everything else—just ask us.
          </p>

          <div className="mt-10 divide-y divide-white/10">
            {faqs.map(item => (
              <Disclosure key={item.q} as="div" className="py-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full text-left text-gray-200 focus:outline-none">
                      <span>{item.q}</span>
                      <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pt-2 text-sm text-gray-400">
                      {item.a}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          <a href="/faq" className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 text-sm">
            View all FAQs →
          </a>
        </div>

        {/* CTA card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_12px_45px_rgba(0,0,0,0.55)] flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-white">
            Be one of the first <span className="text-indigo-400">150</span> humans
            to put busywork on autopilot.
          </h3>

          <p className="mt-4 text-gray-300">
            Seats left: <strong className="text-indigo-300">{seats}</strong>
          </p>

          <a
            href="#beta"
            className="mt-8 inline-flex justify-center rounded-full bg-indigo-600 hover:bg-indigo-500
                       px-8 py-3 text-sm font-medium text-white transition"
          >
            Get My Beta Key →
          </a>

          <p className="mt-2 text-xs text-gray-500">
            Reviewed weekly · 50 % lifetime founder discount
          </p>

          {/* neon ring */}
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-indigo-500/60 animate-pulse [animation-duration:5s]" />
        </motion.div>
      </div>
    </section>
  );
} 