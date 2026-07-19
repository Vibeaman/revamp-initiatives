import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sprout } from "lucide-react";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { GalleryGrid } from "@/components/revamp/GalleryGrid";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { seedForChangeStory } from "@/data/seedForChangeStory";

export const Route = createFileRoute("/programs/seed-for-change")({
  head: () => ({
    meta: [
      { title: "Seed for Change | Revamp Initiatives" },
      {
        name: "description",
        content:
          "The full Seed for Change story — a year-by-year journey through our flagship women's empowerment and art therapy program.",
      },
    ],
  }),
  component: SeedForChangeStoryPage,
});

function SeedForChangeStoryPage() {
  const [activeYear, setActiveYear] = useState(seedForChangeStory[0]?.year ?? "");
  const activeStory = seedForChangeStory.find((y) => y.year === activeYear) ?? seedForChangeStory[0];

  return (
    <main className="min-h-screen bg-ink text-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              All Programs
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            <Sprout className="h-4 w-4" />
            Flagship Program
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02] text-cream"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Seed for Change
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl text-base text-cream/80 md:text-lg"
          >
            A women-focused empowerment and art therapy program — one continuing journey, cohort by cohort,
            year by year.
          </motion.p>
        </div>
      </section>

      {/* Year Tabs */}
      <section className="relative border-y border-cream/10 bg-ink/60 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 md:px-10">
          {seedForChangeStory.map((y) => (
            <button
              key={y.year}
              onClick={() => setActiveYear(y.year)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                activeYear === y.year
                  ? "bg-gold text-ink"
                  : "border border-cream/20 text-cream/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {y.year}
            </button>
          ))}
        </div>
      </section>

      {/* Active Year Content */}
      <AnimatePresence mode="wait">
        {activeStory && (
          <motion.div
            key={activeStory.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Narrative */}
            <section className="relative overflow-hidden bg-cream/5 py-12 md:py-16">
              <div className="mx-auto max-w-4xl px-6 md:px-10">
                <h2 className="text-display text-2xl font-bold text-gold md:text-3xl">
                  {activeStory.year} Cohort
                </h2>
                <p className="mt-5 whitespace-pre-line leading-relaxed text-cream/80 md:text-lg">
                  {activeStory.narrative}
                </p>
              </div>
            </section>

            {/* Day-by-day galleries */}
            <section className="relative overflow-hidden bg-ink py-12 md:py-16">
              <div className="mx-auto max-w-7xl px-6 md:px-10">
                <motion.div
                  variants={staggerParent}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="space-y-14 md:space-y-20"
                >
                  {activeStory.days.map((day) => (
                    <motion.div key={day.slug} variants={fadeUp}>
                      <h3 className="text-display mb-6 text-xl font-bold text-cream md:text-2xl">
                        {day.label}
                      </h3>
                      <GalleryGrid photos={day.photos} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-cream/10 bg-ink py-12 md:py-16">
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display text-xl font-bold md:text-2xl"
          >
            Want to support our programs?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-transparent px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              View All Programs
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
