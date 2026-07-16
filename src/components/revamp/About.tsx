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
    title: "Goal",
    body: "To build a Creative Social Impact Hub that creates lasting positive social change for vulnerable, underprivileged, and underserved communities through creativity in Nigeria.",
  },
  {
    title: "Established",
    body: "Founded in 2022. What started as a small idea has grown into structured programs reaching hundreds.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12"
        >
          <div>
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-6">
              Who We Are
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.02] text-ink"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
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
            <div className="absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-full bg-gradient-gold shadow-gold animate-floaty md:-bottom-6 md:-left-6 md:h-24 md:w-24" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-6"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-gold md:p-8"
            >
              <div className="mb-3 h-1 w-10 bg-gradient-gold" />
              <h3 className="text-display mb-2 text-xl font-bold text-ink md:text-2xl">{p.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{p.body}</p>
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
