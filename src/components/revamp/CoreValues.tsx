import { motion } from "framer-motion";
import { staggerParent, tiltIn, viewportOnce } from "@/utils/animations";

const values = [
  { n: "01", title: "Inclusivity", body: "Women and youth valued regardless of background." },
  { n: "02", title: "Collaboration", body: "Working with volunteers, partners, and communities." },
  { n: "03", title: "Integrity", body: "Honesty, transparency, and accountability at every step." },
  { n: "04", title: "Compassion", body: "Empathy and a genuine desire to make impact." },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 text-cream md:py-20">
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4">Core Values</p>
          <h2 className="text-display font-bold leading-[1.02]" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
            The principles that <span className="text-gold">shape every project</span>.
          </h2>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-2 md:gap-6"
          style={{ perspective: "1200px" }}
        >
          {values.map((v) => (
            <motion.div
              key={v.n}
              variants={tiltIn}
              whileHover={{ rotateY: 4, rotateX: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group flex gap-5 rounded-3xl border border-cream/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition-colors hover:border-gold/40 md:gap-6 md:p-8"
            >
              <span className="text-display shrink-0 text-4xl font-bold text-gold gold-glow md:text-5xl">{v.n}</span>
              <div>
                <h3 className="text-display text-xl font-bold text-cream md:text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed md:mt-3">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
