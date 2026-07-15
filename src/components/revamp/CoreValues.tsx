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
    <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Core Values</p>
          <h2 className="text-display font-bold leading-[1.02]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            The principles that <span className="text-gold">shape every project</span>.
          </h2>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
          style={{ perspective: "1200px" }}
        >
          {values.map((v) => (
            <motion.div
              key={v.n}
              variants={tiltIn}
              whileHover={{ rotateY: 4, rotateX: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group flex gap-6 rounded-3xl border border-cream/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 transition-colors hover:border-gold/40 md:gap-8 md:p-10"
            >
              <span className="text-display shrink-0 text-5xl font-bold text-gold gold-glow md:text-7xl">{v.n}</span>
              <div>
                <h3 className="text-display text-2xl font-bold text-cream md:text-3xl">{v.title}</h3>
                <p className="mt-3 text-cream/70 leading-relaxed">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
