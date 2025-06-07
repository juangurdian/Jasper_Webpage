"use client";

import { useState } from "react";
import { WavyBackground } from "./components/WavyBackground";
import Navigation from "./components/Navigation";
import { MacbookScroll } from "./components/MacbookScroll";
import HowItWorks from "./components/HowItWorks";
import WhatIsJasper from "./sections/WhatIsJasper";
import IntegrationSection from "./components/IntegrationSection";
import BetaSection from "./components/BetaSection";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";

export default function Home() {
  const [settings, setSettings] = useState({
    colors: ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    waveWidth: 200,
    blur: 15,
    speed: "fast" as 'slow' | 'fast',
    waveOpacity: 0.8,
    backgroundFill: "#000000",
    numWaves: 10,
  });

  return (
    <main className="relative min-h-screen bg-black text-white">
      <WavyBackground {...settings} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your AI-Powered Productivity Copilot
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Meet Jasper—your always-on assistant that handles tasks, calendar, email, and expenses through natural conversation.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Macbook Scroll Section */}
      <MacbookScroll
        src="/jarvispic.png"
        title="Meet your new personal assistant"
        showGradient
      />

      {/* What is Jasper Section */}
      <WhatIsJasper />

      {/* How It Works Section */}
      <HowItWorks />

      <IntegrationSection />
      <BetaSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
