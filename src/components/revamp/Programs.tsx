import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import kitchen from "@/assets/kitchen.jpg.asset.json";
import cameras from "@/assets/cameras.jpg.asset.json";
import whiteboard from "@/assets/whiteboard.jpg.asset.json";
import photography from "@/assets/photography.jpg.asset.json";

const seedObjectives = [
  "Train women in tailoring & entrepreneurship",
  "Create sustainable jobs and income",
  "Build a socially responsible fashion brand",
  "Reinvest proceeds back into communities",
];

const subPrograms = [
  { name: "Walk for Impact", img: whiteboard.url, blurb: "Preserving stories of Nigeria's elders." },
  { name: "Slum Outreach", img: cameras.url, blurb: "Direct intervention in underserved communities." },
  { name: "IDP Camp Durumi", img: photography.url, blurb: "Food, medical & cash assistance." },
  { name: "Kreative Campus", img: kitchen.url, blurb: "Skill-building creative training." },
];

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
          <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            What We Do
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-display font-bold leading-[1.02] text-ink" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Programs that turn creativity into <span className="text-gold-deep italic">livelihoods</span>.
          </motion.h2>
        </motion.div>

        {/* Seed for Change flagship */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-10 overflow-hidden rounded-3xl bg-ink text-cream shadow-ink lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="relative min-h-[320px] lg:min-h-full">
            <img src={kitchen.url} alt="Seed for Change training" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
            <span className="absolute left-6 top-6 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
              Flagship
            </span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col justify-center p-8 md:p-12">
            <h3 className="text-display text-3xl font-bold text-gold md:text-5xl">Seed for Change</h3>
            <p className="mt-5 leading-relaxed text-cream/80">
              A women-focused empowerment and art therapy program, also a fashion brand built on training,
              empowerment, and job creation. Every piece produced carries a story of resilience, linking style
              with social change.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-wider text-cream/60">
              <span className="rounded-full border border-gold/30 px-3 py-1">16 women trained</span>
              <span className="rounded-full border border-gold/30 px-3 py-1">6+ skill areas</span>
              <span className="rounded-full border border-gold/30 px-3 py-1">Launched 2024</span>
            </div>
            <ul className="mt-8 space-y-3">
              {seedObjectives.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-cream/85 md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {o}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Community Outreach */}
        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h3 className="text-display text-3xl font-bold text-ink md:text-5xl">Community Outreach</h3>
              <p className="mt-3 max-w-2xl text-ink/70 md:text-lg">
                Direct intervention in underserved communities, IDP camps, and slum areas. Food support,
                cash assistance, and preserving cultural narratives.
              </p>
            </div>
          </div>

          <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-4 md:gap-6 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {subPrograms.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl bg-ink text-cream md:w-auto"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h4 className="text-display text-xl font-bold text-gold">{p.name}</h4>
                  <p className="mt-2 text-sm text-cream/80">{p.blurb}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
