import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impact/journey")({
  head: () => ({
    meta: [
      { title: "Our Journey | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Follow the journey of Revamp Initiatives from 2022 to today. From a small idea to a movement transforming communities across Nigeria.",
      },
    ],
  }),
  component: JourneyPage,
});

const milestones = [
  {
    year: "2022",
    title: "Revamp Initiatives is founded",
    body: "A small idea to use creativity as a tool for change amongst Nigerian youth becomes an organization.",
  },
  {
    year: "2022",
    title: "First impact program",
    body: "Early outreach and empowerment activities in underserved communities across Abuja.",
  },
  {
    year: "2024",
    title: "Seed for Change launches",
    body: "Our flagship women-focused empowerment and art therapy program, plus a fashion label built on training and job creation.",
  },
  {
    year: "2024",
    title: "Walk for Impact",
    body: "Intergenerational storytelling event honoring elders aged 60+ with interviews and cash support.",
  },
  {
    year: "2025",
    title: "50+ women fully empowered",
    body: "The Art Residency cohort completes training with tools, seed capital, and job placement pathways.",
  },
  {
    year: "2026+",
    title: "Scaling across Africa",
    body: "Expanding Seed for Change to new communities and continents, becoming a leading creative social impact hub.",
  },
];

function JourneyPage() {
  return (
    <main className="relative bg-cream text-ink">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-32">
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Our Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            From a single idea to a <span className="text-gold italic">movement</span> across communities.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            The story of Revamp Initiatives — from humble beginnings in 2022 to becoming a leading creative social impact hub.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <div className="relative">
            {/* vertical rail */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-gold to-transparent md:left-1/2" />

            <motion.ol
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-10 md:space-y-16"
            >
              {milestones.map((m, i) => (
                <motion.li
                  key={m.title}
                  variants={fadeUp}
                  className={`relative grid gap-4 pl-14 md:grid gap-6 md:grid-cols-2 md:gap-12 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* dot */}
                  <span className="absolute left-2 top-2 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full bg-gradient-blue shadow-[0_0_0_4px_var(--cream)] md:left-1/2 md:h-6 md:w-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold md:h-2 md:w-2" />
                  </span>

                  <div className={i % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                    <span className="text-display text-3xl font-bold text-blue md:text-4xl">{m.year}</span>
                    <h3 className="text-display mt-1 text-lg font-bold md:text-xl">{m.title}</h3>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed md:mt-3">{m.body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-white py-12">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap justify-between gap-4">
            <Link
              to="/impact"
              className="text-sm font-medium text-ink/70 hover:text-gold"
            >
              ← Back to Impact Overview
            </Link>
            <Link
              to="/impact/milestones"
              className="text-sm font-medium text-gold hover:text-gold-deep"
            >
              View Milestones & Partnerships →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
