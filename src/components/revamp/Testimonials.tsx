import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import garuba from "@/assets/garuba.jpg.asset.json";

const testimonials = [
  {
    quote:
      "Participating in the Seed for Change Creative Women Residency was a truly enriching experience for me. During the program, I learned new skills in culinary art that have expanded my creativity and confidence in the kitchen. It exposed me to new techniques, ideas, and ways of presenting food that I hadn't explored before. I'm grateful for the opportunity, and it has inspired me to keep growing and improving in my culinary journey.",
    name: "Garuba Aliyah Azumi",
    role: "Culinary Art",
    program: "Creative Women Residency",
    img: garuba.url,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Resident Testimonials
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            In their <span className="italic text-gold">own words</span>.
          </motion.h2>
        </motion.div>

        {testimonials.map((t) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-gold">
                <img
                  src={t.img}
                  alt={t.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-full bg-gradient-gold shadow-gold md:block" />
            </div>

            <div className="relative">
              <span aria-hidden className="text-display absolute -left-2 -top-16 select-none text-[10rem] leading-none text-gold/20 md:-top-20 md:text-[14rem]">
                &ldquo;
              </span>
              <p className="relative text-xl leading-relaxed text-cream/90 md:text-2xl">
                {t.quote}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-gold" />
                <div>
                  <p className="text-display text-2xl font-bold text-gold">{t.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-widest text-cream/60">
                    {t.role} · Seed for Change {t.program}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
