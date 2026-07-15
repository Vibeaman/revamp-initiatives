import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";

const milestones = [
  {
    year: "2022",
    title: "Revamp Initiatives is founded",
    body: "A small idea to use creativity as a tool for change amongst Nigerian youth becomes an organization.",
  },
  {
    year: "2022",
    title: "First impact program",
    body: "Early outreach and empowerment activities in underserved communities across Abuja.",
  },
  {
    year: "2024",
    title: "Seed for Change launches",
    body: "Our flagship women-focused empowerment and art therapy program, plus a fashion label built on training and job creation.",
  },
  {
    year: "2024",
    title: "Walk for Impact",
    body: "Intergenerational storytelling event honoring elders aged 60+ with interviews and cash support.",
  },
  {
    year: "2025",
    title: "16 women fully empowered",
    body: "The Art Residency cohort completes training with tools, seed capital, and job placement pathways.",
  },
  {
    year: "2026+",
    title: "Scaling across Africa",
    body: "Expanding Seed for Change to new communities and continents, becoming a leading creative social impact hub.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue">
            The Journey
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.02] text-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            From a single idea to a <span className="text-blue italic">movement</span> across communities.
          </motion.h2>
        </motion.div>

        <div className="relative mt-20">
          {/* vertical rail */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-gold to-transparent md:left-1/2" />

          <motion.ol
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-14 md:space-y-20"
          >
            {milestones.map((m, i) => (
              <motion.li
                key={m.title}
                variants={fadeUp}
                className={`relative grid gap-6 pl-14 md:grid-cols-2 md:gap-16 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* dot */}
                <span className="absolute left-2 top-2 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-gradient-blue shadow-[0_0_0_4px_var(--cream)] md:left-1/2">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>

                <div className={i % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                  <span className="text-display text-4xl font-bold text-blue md:text-5xl">{m.year}</span>
                  <h3 className="text-display mt-2 text-xl font-bold text-ink md:text-2xl">{m.title}</h3>
                  <p className="mt-3 text-ink/70 leading-relaxed">{m.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
