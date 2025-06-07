import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BetaSection() {
  const seats = 113; // fetch from API in prod
  const total = 150;
  const pct = (seats / total) * 100;

  return (
    <section id="beta" className="relative py-28 bg-gradient-to-b from-[#0b0d11] to-[#06070a] overflow-hidden">
      {/* floating abstract glow */}
      <span className="absolute -top-48 -left-32 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* loop video / screenshot */}
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/30 transition hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(99,102,241,0.45)]">
          <video
            src="/media/beta-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTA glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-10 shadow-[0_12px_45px_rgba(0,0,0,0.55)]"
        >
          {/* neon ring */}
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-indigo-500/60 animate-pulse" />

          <h2 className="text-2xl md:text-3xl font-bold text-white z-10 relative">
            Be First. Shape the Future.
          </h2>
          <p className="mt-4 text-gray-300">
            We're handing <strong>{total}</strong> private beta keys to productivity nerds who want
            an assistant that actually <em>does</em> the work.
          </p>

          <ul className="mt-6 space-y-2 text-gray-200 list-disc list-inside">
            <li>All modules free during beta</li>
            <li>Direct Slack with the dev team</li>
            <li>Lifetime 50 % founder discount at launch</li>
          </ul>

          {/* progress bar */}
          <div className="mt-8">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{seats} / {total} seats claimed</span>
              <span>{total - seats} left</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div style={{ width: `${pct}%` }}
                   className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500" />
            </div>
          </div>

          {/* CTA button */}
          <a
            href="https://forms.gle/your-google-form"
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-500
                       px-8 py-3 text-sm font-medium text-white transition"
          >
            Apply for Beta →
          </a>

          <p className="mt-3 text-xs text-gray-500">
            We review applications weekly. Expect an email within 48 h.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 