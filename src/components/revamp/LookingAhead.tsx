import { motion } from "framer-motion";
import { viewportOnce } from "@/utils/animations";

export default function LookingAhead() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      {/* Floating gold shapes */}
      <div className="pointer-events-none absolute inset-0" style={{ perspective: "1000px" }}>
        <div className="absolute left-[10%] top-[15%] h-20 w-20 rounded-full bg-gradient-gold opacity-70 blur-md animate-floaty" />
        <div className="absolute right-[15%] top-[25%] h-32 w-32 rounded-full border-2 border-gold/40 animate-drift" />
        <div className="absolute left-[20%] bottom-[15%] h-16 w-16 rotate-45 bg-gold/70 animate-floaty" style={{ animationDelay: "2s" }} />
        <div className="absolute right-[10%] bottom-[10%] h-28 w-28 rounded-full bg-gold/20 blur-xl animate-pulse-gold" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
        >
          Looking Ahead
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-display font-bold leading-[1.02]"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          Committed to expanding <span className="text-gold gold-glow">Seed for Change</span> across Africa.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg leading-relaxed text-cream/70 md:text-xl"
        >
          We aim to become a leading creative social impact hub on the continent. One community,
          one story, one skill at a time.
        </motion.p>
      </div>
    </section>
  );
}
