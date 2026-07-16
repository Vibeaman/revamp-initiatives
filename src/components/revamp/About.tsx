import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import leaders from "@/assets/leaders.jpg";

const pillars = [
  {
    title: "Mission",
    body: "Empower communities through creative expression, vocational training, and sustainable development.",
  },
  {
    title: "Vision",
    body: "A world where creativity and opportunity are accessible to all, regardless of background.",
  },
  {
    title: "Established",
    body: "Founded in 2022. What started as a small idea has grown into structured programs reaching hundreds.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
        >
          <div>
            <motion.p variants={fadeUp} className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Who We Are
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.02] text-ink"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              A creative social impact hub creating{" "}
              <span className="italic text-gold-deep">lasting positive change</span> for
              vulnerable and underserved communities in Nigeria.
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-ink">
              <img src={leaders} alt="Revamp leadership" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-gradient-gold shadow-gold animate-floaty md:block" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 transition-transform hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="mb-4 h-1 w-10 bg-gradient-gold" />
              <h3 className="text-display mb-3 text-2xl font-bold text-ink">{p.title}</h3>
              <p className="text-ink/70 leading-relaxed">{p.body}</p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
