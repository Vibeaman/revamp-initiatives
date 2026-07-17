import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { Link } from "@tanstack/react-router";
import { Award, Building, GraduationCap, Heart } from "lucide-react";

export const Route = createFileRoute("/impact/milestones")({
  head: () => ({
    meta: [
      { title: "Milestones & Partnerships | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Key milestones and institutional partnerships of Revamp Initiatives. From University of Maiduguri to the Federal Ministry of Women Affairs.",
      },
    ],
  }),
  component: MilestonesPage,
});

const milestones = [
  {
    year: "2024",
    title: "Seed for Change Inaugural Cohort",
    body: "The first SFC cohort completed training with graduation celebrations, empowering participants with practical skills and entrepreneurial confidence.",
    icon: GraduationCap,
    featured: false,
  },
  {
    year: "2025",
    title: "University of Maiduguri Partnership",
    body: "A landmark academic partnership extending our reach into Borno State and enabling research-backed community development.",
    icon: Building,
    featured: false,
  },
  {
    year: "2025",
    title: "CWS Collaboration",
    body: "Joined forces with the Centre for Women's Studies to deepen gender-focused impact, research, and advocacy.",
    icon: Heart,
    featured: false,
  },
  {
    year: "2026",
    title: "Ministry of Women Affairs",
    body: "A major institutional collaboration validating Revamp's grassroots model at the national policy level.",
    icon: Award,
    featured: true,
  },
];

const partners = [
  "Federal Ministry of Women Affairs",
  "Office of the Special Assistant to the President on Art & Culture",
  "Revamp Art Media Agency",
  "University of Maiduguri",
  "Centre for Women's Studies",
];

function MilestonesPage() {
  return (
    <main className="relative bg-ink text-cream">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Milestones & Partnerships
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Key achievements that <span className="text-gold">move the needle</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            From empowering thousands of individuals to securing national-level partnerships, every milestone is a step toward lasting change.
          </motion.p>
        </div>
      </section>

      {/* Milestones Grid */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2"
          >
            {milestones.map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className={`group relative flex flex-col rounded-3xl border p-6 backdrop-blur-sm md:p-8 ${
                  m.featured
                    ? "border-gold/40 bg-gradient-to-br from-gold/15 to-transparent"
                    : "border-cream/10 bg-gradient-to-br from-white/5 to-transparent"
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                  <m.icon className="h-6 w-6 text-gold" />
                </div>
                <span className="text-display text-3xl font-bold text-gold gold-glow md:text-4xl">
                  {m.year}
                </span>
                <h3 className="mt-2 text-display text-lg font-bold md:text-xl">
                  {m.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">
                  {m.body}
                </p>
                {m.featured && (
                  <span className="mt-4 inline-block w-fit rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                    Major Collaborator
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative overflow-hidden border-t border-cream/10 py-16">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="mb-10 text-center"
          >
            <h2 className="text-display text-2xl font-bold md:text-3xl">Our Partners</h2>
            <p className="mt-2 text-cream/60">Collaborating for greater impact</p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {partners.map((p, i) => (
              <motion.div
                key={p}
                variants={fadeUp}
                className="flex items-center justify-center rounded-xl border border-cream/10 bg-white/5 p-5 text-center text-sm font-medium transition-colors hover:border-gold/40"
              >
                {p}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative overflow-hidden border-t border-cream/10 bg-cream/5 py-12">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap justify-between gap-4">
            <Link
              to="/impact/journey"
              className="text-sm font-medium text-cream/70 hover:text-gold"
            >
              ← Back to Our Journey
            </Link>
            <Link
              to="/impact/stories"
              className="text-sm font-medium text-gold hover:text-gold-soft"
            >
              View Impact Stories →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
