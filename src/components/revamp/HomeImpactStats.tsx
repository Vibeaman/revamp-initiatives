import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { ArrowRight, TrendingUp, Users, Heart, Award } from "lucide-react";

const highlights = [
  { value: "3,000+", label: "People Empowered", icon: Users },
  { value: "50+", label: "Women Trained", icon: Heart },
  { value: "4", label: "Partnerships", icon: Award },
  { value: "₦50K+", label: "Cash Aid Distributed", icon: TrendingUp },
];

export default function HomeImpactStats() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-cream md:py-24">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10 max-w-3xl md:mb-14"
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4">
            Our Impact
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-display font-bold leading-[1.02]" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
            Numbers that carry <span className="text-gold">names, stories, and futures.</span>
          </motion.h2>
          <motion.a
            variants={fadeUp}
            href="/impact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft"
          >
            Explore our full impact <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                <h.icon className="h-6 w-6 text-gold" />
              </div>
              <span className="text-display text-3xl font-bold text-gold gold-glow md:text-4xl">{h.value}</span>
              <p className="mt-2 text-sm text-cream/70">{h.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="mt-12 text-center md:mt-16"
        >
          <a
            href="/impact"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            View Full Impact Report <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
