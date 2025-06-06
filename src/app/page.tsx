import { WavyBackground } from "./components/WavyBackground";
import { MacbookScroll } from "./components/MacbookScroll";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <WavyBackground />
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full z-10">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white text-center mb-4 drop-shadow-lg">
            Jarvis Dashboard
          </h1>
          <p className="text-xl text-white/80 text-center max-w-xl mx-auto mb-8 drop-shadow">
            Your Personal AI Assistant Dashboard – Modern, open-source, and built for productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/yourusername/jarvis-dashboard"
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="#waitlist"
              className="rounded-md border border-white/30 px-6 py-3 text-lg font-semibold text-white hover:bg-white/10 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
      <section className="relative z-10">
        <MacbookScroll title="A Next Section with Macbook Scroll" showGradient />
      </section>
    </>
  );
}
