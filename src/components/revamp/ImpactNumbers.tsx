import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";

const stats = [
  { value: 300, suffix: "+", label: "Children reached" },
  { value: 1000, suffix: "+", label: "Youth in facilitation programs" },
  { value: 16, suffix: "", label: "Women trained in Art Residency" },
  { value: 10, suffix: "+", label: "Impact stories documented" },
  { value: 150, suffix: "+", label: "Slum beneficiaries fed" },
  { value: 100, suffix: "+", label: "Families supported with cash aid" },
  { value: 6, suffix: "+", label: "Vocational skill areas" },
  { value: 4, suffix: "", label: "Institutional partners" },
];


function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: n } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ rotateX: -6, rotateY: 6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative rounded-3xl border border-gold/20 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm md:p-10"
    >
      <div className="text-display text-6xl font-bold text-gold gold-glow md:text-7xl">
        {n.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <p className="mt-4 text-sm uppercase tracking-wider text-cream/70 md:text-base">{label}</p>
      <div className="absolute inset-0 rounded-3xl border border-transparent transition-colors group-hover:border-gold/40" />
    </motion.div>
  );
}

export default function ImpactNumbers() {
  return (
    <section id="impact" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Impact</p>
          <h2 className="text-display font-bold leading-[1.02]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Numbers that carry <span className="text-gold">names, stories, and futures.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-cream/70 md:text-lg">
            Over ₦50,000 distributed in direct cash assistance to displaced persons and vulnerable
            families, alongside sustained empowerment programs from Abuja to Borno.
          </p>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: "1200px" }}
        >
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

