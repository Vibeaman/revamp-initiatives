import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import garuba from "@/assets/garuba-testimonial.jpg";

const testimonials = [
  {
    quote:
      "Participating in the Seed for Change Creative Women Residency was a truly enriching experience. I learned new skills in culinary art that expanded my creativity and confidence. It has inspired me to keep growing and improving in my culinary journey.",
    name: "Garuba Aliyah Azumi",
    role: "Culinary Art Graduate",
    img: garuba,
  },
];

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-12 text-cream md:py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10 max-w-3xl md:mb-14"
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4">
            Voices
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            In their <span className="italic text-gold">own words</span>.
          </motion.h2>
          <Link to="/impact/stories" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft">
            View all stories <ArrowRight size={16} />
          </Link>
        </motion.div>

        {testimonials.map((t) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12"
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
              <div className="absolute -bottom-4 -right-4 hidden h-20 w-20 rounded-full bg-gradient-gold shadow-gold md:-bottom-5 md:-right-5 md:h-24 md:w-24" />
            </div>

            <div className="relative">
              <span aria-hidden className="text-display absolute -left-2 -top-12 select-none text-[8rem] leading-none text-gold/20 md:-top-16 md:text-[12rem]">
                &ldquo;
              </span>
              <p className="relative text-base leading-relaxed text-cream/90 md:text-lg">
                {t.quote}
              </p>
              <div className="mt-7 flex items-center gap-4 md:mt-10">
                <div className="h-px w-10 bg-gold" />
                <div>
                  <p className="text-display text-xl font-bold text-gold md:text-2xl">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-cream/60 md:text-sm">
                    {t.role}
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
