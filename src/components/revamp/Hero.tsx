import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero.jpg";

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
        <img
          src={hero}
          alt="Revamp Initiatives community"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      </motion.div>

      {/* 3D floating gold shapes */}
      <div className="pointer-events-none absolute inset-0" style={{ perspective: "1200px" }}>
        <div
          className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-gradient-gold opacity-70 blur-2xl animate-floaty md:h-64 md:w-64"
          style={{ transform: "translateZ(-100px)" }}
        />
        <div
          className="absolute right-[6%] top-[35%] h-52 w-52 rounded-full border-2 border-gold/50 animate-drift md:h-80 md:w-80"
          style={{ transform: "translateZ(-40px)" }}
        />
        <div
          className="absolute bottom-[10%] left-[15%] h-24 w-24 rotate-45 bg-gold/80 blur-sm animate-floaty md:h-40 md:w-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute right-[15%] bottom-[20%] h-16 w-16 rounded-full bg-gold shadow-gold animate-pulse-gold md:h-24 md:w-24"
        />
        <div
          className="absolute left-1/2 top-[60%] h-32 w-32 -translate-x-1/2 rounded-full border border-gold/30 animate-drift"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: y1 }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-16 pt-32 md:px-10 md:pt-40"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-blue/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" />
          Nigerian Creative Social Impact Hub
        </motion.span>


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-display font-bold leading-[0.95] text-cream"
          style={{ fontSize: "clamp(2.75rem, 8vw, 7rem)" }}
        >
          Creativity as a<br />
          <span className="text-gold gold-glow">Force for Change</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-cream/75 md:text-xl"
        >
          Empowering vulnerable communities through creative expression, vocational training,
          and sustainable development since 2022.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#support"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-semibold text-ink shadow-gold transition-transform hover:scale-[1.04] active:scale-95"
          >
            Support Our Mission
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-4 text-base font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
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
