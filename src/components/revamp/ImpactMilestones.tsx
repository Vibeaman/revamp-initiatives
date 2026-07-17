import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";

/* ── stat data ── */
const stats = [
  { value: 300, suffix: "+", label: "Children reached" },
  { value: 1000, suffix: "+", label: "Youth in facilitation programs" },
  { value: 50, suffix: "+", label: "Women trained in Art Residency" },
  { value: 10, suffix: "+", label: "Impact stories documented" },
  { value: 150, suffix: "+", label: "Slum beneficiaries supported" },
  { value: 100, suffix: "+", label: "Families supported with cash aid" },
  { value: 6, suffix: "+", label: "Vocational skill areas" },
  { value: 4, suffix: "", label: "Institutional partners" },
];

const milestoneCards = [
  {
    year: "2024",
    title: "Seed for Change Inaugural Cohort",
    body: "The first SFC cohort completed training with graduation celebrations, empowering participants with practical skills and entrepreneurial confidence.",
  },
  {
    year: "2025",
    title: "University of Maiduguri Partnership",
    body: "A landmark academic partnership with the University of Maiduguri, extending our reach into Borno State and enabling research-backed community development.",
  },
  {
    year: "2025",
    title: "CWS Collaboration",
    body: "Joined forces with the Centre for Women's Studies to deepen gender-focused impact, research, and advocacy across our programs.",
  },
  {
    year: "2026",
    title: "Ministry of Women Affairs",
    body: "A major institutional collaboration with the Federal Ministry of Women Affairs, a milestone that validates Revamp's grassroots model at the national policy level.",
    featured: true,
  },
];

/* ── small components ── */
function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: n } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ rotateX: -6, rotateY: 6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative rounded-3xl border border-gold/20 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm md:p-8"
    >
      <div className="text-display text-4xl font-bold text-gold gold-glow md:text-5xl">
        {n.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <p className="mt-3 text-xs uppercase tracking-wider text-cream/70 md:text-sm">{label}</p>
      <div className="absolute inset-0 rounded-3xl border border-transparent transition-colors group-hover:border-gold/40" />
    </motion.div>
  );
}

function BigStat({ value }: { value: number }) {
  const { ref, value: n } = useCountUp(value);
  return (
    <span ref={ref} className="text-display text-5xl font-bold text-gold gold-glow md:text-6xl">
      {n.toLocaleString()}+
    </span>
  );
}

/* ── main section ── */
export default function ImpactMilestones() {
  return (
    <section id="impact" className="relative overflow-hidden bg-ink py-16 text-cream md:py-24">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* ─── header ─── */}
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4">
            Our Impact &amp; Milestones
          </p>
          <h2
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            Numbers that carry{" "}
            <span className="text-gold">names, stories, and futures.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-cream/70 md:mt-6 md:text-base">
            Over ₦50,000 distributed in direct cash assistance to displaced persons and vulnerable
            families, alongside sustained empowerment programs from Abuja to Borno.
          </p>
        </div>

        {/* ─── stats grid ─── */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
          style={{ perspective: "1200px" }}
        >
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </motion.div>

        {/* ─── hero stat banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl border border-gold/20 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm md:mt-16 md:p-12"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0">
              <BigStat value={3000} />
              <p className="mt-2 text-sm uppercase tracking-wider text-cream/60">People Empowered</p>
            </div>
            <p className="text-sm leading-relaxed text-cream/80 md:text-base">
              Over three thousand individuals across communities have been directly empowered through
              Revamp programs, from vocational training and creative workshops to cash assistance and
              mentorship. Each number represents a name, a story, and a future reshaped.
            </p>
          </div>
        </motion.div>

        {/* ─── SFC spotlight ─── */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8 md:mt-14 md:p-12"
        >
          <motion.div variants={fadeUp}>
            <span className="mb-3 inline-block w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              Flagship Program
            </span>
            <h3 className="text-display text-2xl font-bold text-gold md:text-3xl">
              Seed for Change
            </h3>
            <p className="mt-4 leading-relaxed text-cream/80 md:text-lg">
              SFC is different, it's not just a program, it's a transformational experience.
              Graduates leave with real skills, real confidence, and real futures. Every cohort is
              celebrated with graduation ceremonies that mark a new beginning.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "2024: Inaugural cohort trained & graduated",
                "50+ women fully empowered with tools & seed capital",
                "Graduation ceremonies celebrating each cohort's journey",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-cream/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ─── milestone cards ─── */}
        <div className="mt-12 md:mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
            className="text-display mb-8 text-2xl font-bold text-cream md:text-3xl"
          >
            Key Milestones &amp; Partnerships
          </motion.h3>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
            style={{ perspective: "1200px" }}
          >
            {milestoneCards.map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                whileHover={{ rotateX: -4, rotateY: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className={`group relative flex flex-col rounded-3xl border p-6 backdrop-blur-sm md:p-8 ${
                  m.featured
                    ? "border-gold/40 bg-gradient-to-br from-gold/15 to-transparent"
                    : "border-gold/20 bg-gradient-to-br from-white/5 to-transparent"
                }`}
              >
                <span className="text-display text-3xl font-bold text-gold gold-glow md:text-4xl">
                  {m.year}
                </span>
                <h4 className="mt-2 text-display text-base font-bold text-cream md:text-lg">
                  {m.title}
                </h4>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-cream/70 md:text-sm">
                  {m.body}
                </p>
                {m.featured && (
                  <span className="mt-4 inline-block w-fit rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                    Major Collaborator
                  </span>
                )}
                <div className="absolute inset-0 rounded-3xl border border-transparent transition-colors group-hover:border-gold/40" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
