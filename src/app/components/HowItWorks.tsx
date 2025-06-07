'use client';
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

/**
 * Ghost‑typing effect for command bubbles
 */
const GhostTyping = ({ text }: { text: string }) => {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setOut(text.slice(0, ++i));
      i === text.length && clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [text]);

  return (
    <p className="text-3xl lg:text-4xl font-mono font-semibold text-slate-900 after:content-['|'] after:animate-blink whitespace-nowrap">
      {out}
    </p>
  );
};

// Simple confetti burst using Tailwind + CSS (swap for Lottie if you like)
const confettiVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3 } },
};

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  // The section is 3x viewport height for 3 panels
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Map scroll progress from 0 to 1 to 0% to -200% (3 panels)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative h-[300vh] bg-gradient-to-b from-white to-slate-100 overflow-hidden m-0 p-0"
    >
      <motion.div
        style={{ x }}
        className="sticky top-0 left-0 h-screen w-[300vw] flex overflow-x-hidden"
      >
        <PanelSpeak />
        <PanelExecute />
        <PanelSuccess />
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Sub‑panels                                 */
/* -------------------------------------------------------------------------- */

const panelBase =
  "flex flex-col justify-center items-center w-screen h-screen flex-shrink-0 text-center transition-shadow duration-300 m-0 p-0";

const PanelSpeak = () => (
  <div className={panelBase + " bg-gradient-to-br from-indigo-50 to-white border-r border-slate-200 shadow-md"}>
    <h3 className="mb-6 text-4xl font-bold text-indigo-600">Speak or Type</h3>
    <GhostTyping text="Log a $15 grocery run and finish today's blog outline." />
    <p className="mt-8 max-w-md text-slate-600">
      Natural language in chat or voice. No forms, no tabs—just say what you need.
    </p>
  </div>
);

const cardVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 120, damping: 14 },
  }),
};

const PanelExecute = () => (
  <div className={panelBase + " bg-white border-r border-slate-200 shadow-md"}>
    <h3 className="mb-6 text-4xl font-bold text-sky-600">Jasper Executes</h3>
    <p className="max-w-md text-slate-600 mb-10">
      Secure APIs update tasks, calendar, finance, and inbox in real time—zero
      keystrokes from you.
    </p>

    <div className="grid grid-cols-2 gap-6 max-w-lg">
      {["Task added", "Expense filed", "2 emails summarized", "Calendar synced"].map(
        (item, i) => (
          <motion.div
            key={item}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-2xl bg-slate-50 shadow-lg p-4 text-sm font-medium text-slate-700"
          >
            {item}
          </motion.div>
        ),
      )}
    </div>
  </div>
);

const PanelSuccess = () => (
  <div className={panelBase + " bg-gradient-to-br from-white to-emerald-50"}>
    <h3 className="mb-6 text-4xl font-bold text-emerald-600">Instant Feedback</h3>
    <motion.div
      className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white text-2xl font-semibold shadow-2xl"
      initial="hidden"
      whileInView="visible"
      variants={confettiVariants}
      viewport={{ once: true }}
    >
      🎉
    </motion.div>
    <p className="mt-8 max-w-md text-slate-600">
      See every action, undo with a tap, and get metrics on time saved—right
      away.
    </p>
    <button className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow hover:shadow-xl transition">Try This Command Live</button>
  </div>
); 