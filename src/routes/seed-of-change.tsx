import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { Images, BookOpen } from "lucide-react";

export const Route = createFileRoute("/seed-of-change")({
  head: () => ({
    meta: [
      { title: "Seed of Change | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Seed of Change is Revamp Initiatives' flagship women's empowerment journey — a living diary of the people, stories, and moments shaping the project year by year.",
      },
      { property: "og:title", content: "Seed of Change | Revamp Initiatives" },
      {
        property: "og:description",
        content:
          "A living diary of Seed of Change — Revamp Initiatives' flagship women's empowerment project.",
      },
    ],
  }),
  component: SeedOfChangePage,
});

interface DiaryEntry {
  year: string;
  title: string;
  body: string;
  photos: string[]; // left empty intentionally — to be filled in later
}

const entries: DiaryEntry[] = [
  {
    year: "2025",
    title: "Where it all began",
    body:
      "Placeholder text — this is where the story of the 2025 chapter of Seed of Change will live. Here we'll share the moments, the women, and the milestones that shaped this year of the journey, in our own words, as it happened.",
    photos: [],
  },
  {
    year: "2026",
    title: "Continuing the journey",
    body:
      "Placeholder text — this is where the story of the 2026 chapter of Seed of Change will live. A new year, a new cohort, new stories of growth — this space will hold the diary entries, reflections, and photos from this leg of the journey.",
    photos: [],
  },
];

function EmptyGalleryState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-cream/15 bg-cream/[0.02] px-6 py-14 text-center">
      <Images className="mb-4 h-10 w-10 text-gold/40" />
      <p className="text-sm text-cream/50">Photos coming soon.</p>
    </div>
  );
}

function SeedOfChangePage() {
  return (
    <main className="relative bg-ink text-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            <BookOpen size={14} /> A Living Diary
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Seed of <span className="text-gold">Change</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            Placeholder text — Seed of Change is one of our broadest and most personal projects.
            This page is its diary: an evolving record of the women, the moments, and the growth
            behind the project, told chapter by chapter.
          </motion.p>
        </div>
      </section>

      {/* Diary Entries */}
      <section className="relative overflow-hidden border-t border-cream/10 py-12 md:py-20">
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <div className="space-y-16 md:space-y-24">
            {entries.map((entry, i) => (
              <motion.article
                key={entry.year}
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative"
              >
                {i > 0 && (
                  <div className="mb-16 border-t border-cream/10 md:mb-24" />
                )}

                <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
                  <span className="text-display text-4xl font-bold text-gold gold-glow md:text-6xl">
                    {entry.year}
                  </span>
                  <div className="h-px flex-1 bg-cream/10" />
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="text-display font-bold leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
                >
                  {entry.title}
                </motion.h2>

                <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
                  {entry.body}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold/60">
                    {entry.year} Gallery
                  </p>
                  <EmptyGalleryState />
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
