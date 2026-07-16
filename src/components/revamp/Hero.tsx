import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero.mp4";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-ink text-cream">
      {/* Photo backdrop */}
      <motion.div style={{ y: y2, opacity }} className="absolute inset-0">
        <video
          src={hero}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40 animate-hero-kb"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      </motion.div>

      {/* Subtle accent — single soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[30%] h-64 w-64 rounded-full bg-gold/10 blur-3xl md:h-96 md:w-96" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: y1 }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-start px-6 pb-16 pt-24 md:px-10 md:pt-32"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-display font-bold leading-[0.95] text-cream"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          Encourage Creativity<br />
          <span className="text-gold">for Social Impact</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-ink/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm md:mb-6 md:px-4 md:py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" />
          Nigerian Creative Social Impact Hub
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-gold/80 md:text-sm"
        >
          Encouraging Creativity for Social Impact
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:mt-8 md:text-lg"
        >
          Empowering vulnerable communities through creative expression, vocational training,
          and sustainable development since 2022.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-7 flex flex-wrap gap-3 md:mt-10 md:gap-4"
        >
          <a
            href="#support"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-[1.04] active:scale-95 md:px-7 md:py-4 md:text-base"
          >
            Support Our Mission
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink md:px-7 md:py-4 md:text-base"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/50 md:flex"
        >
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
