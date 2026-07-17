import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { Link } from "@tanstack/react-router";
import garuba from "@/assets/garuba-testimonial.jpg";

export const Route = createFileRoute("/impact/stories")({
  head: () => ({
    meta: [
      { title: "Impact Stories | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Read inspiring stories and testimonials from individuals empowered by Revamp Initiatives' creative social impact programs across Nigeria.",
      },
    ],
  }),
  component: StoriesPage,
});

interface VoiceEntry {
  date: string;
  name: string;
  story: string;
  img: string;
  quote?: string;
  role?: string;
  program?: string;
}

const voices: VoiceEntry[] = [
  {
    date: "July 2024",
    name: "Abubakar Sadiq",
    story:
      "A young boy suffering from severe malnutrition was admitted to hospital after Revamp's intervention. He received essential medical care on the path toward restoring his health.",
    img: "https://i.imgur.com/bhu0XIq.jpg",
  },
  {
    date: "2024",
    name: "Sa'adatu Adamu",
    story:
      "A displaced woman from Gwoza, Borno State. Through medical assistance and cash support, she received the treatment she needed, along with a renewed sense of agency.",
    img: "https://i.imgur.com/evGlEHV.jpg",
  },
  {
    date: "1 Oct 2024",
    name: "Walk for Impact",
    story:
      "Five elderly men aged 60+ were interviewed to preserve their lived experiences. Each received cash support honoring the contributions of a lifetime.",
    img: "https://i.imgur.com/nIfszce.jpg",
  },
  {
    date: "2024",
    name: "Garuba Aliyah Azumi",
    story:
      "A Seed for Change Creative Women Residency graduate who discovered new culinary art skills and the confidence to keep growing.",
    img: garuba,
    quote:
      "Participating in the Seed for Change Creative Women Residency was a truly enriching experience for me. During the program, I learned new skills in culinary art that have expanded my creativity and confidence in the kitchen. It exposed me to new techniques, ideas, and ways of presenting food that I hadn't explored before. I'm grateful for the opportunity, and it has inspired me to keep growing and improving in my culinary journey.",
    role: "Culinary Art",
    program: "Creative Women Residency",
  },
];

const testimonials = [
  {
    quote:
      "Participating in the Seed for Change Creative Women Residency was a truly enriching experience for me. During the program, I learned new skills in culinary art that have expanded my creativity and confidence in the kitchen. It exposed me to new techniques, ideas, and ways of presenting food that I hadn't explored before. I'm grateful for the opportunity, and it has inspired me to keep growing and improving in my culinary journey.",
    name: "Garuba Aliyah Azumi",
    role: "Culinary Art Graduate",
    program: "Creative Women Residency",
    img: garuba,
  },
];

function StoriesPage() {
  return (
    <main className="relative bg-cream text-ink">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-32">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Voices from the Community
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Every number is a <span className="text-gold">person</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            The stories behind our work — told by the people who lived them.
          </motion.p>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-16 md:gap-20">
            {voices.map((v, i) => (
              <motion.article
                key={v.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl shadow-ink">
                    <img
                      src={v.img}
                      alt={v.name}
                      className="aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 hidden h-16 w-16 rounded-full bg-gradient-gold shadow-gold md:-bottom-4 md:-right-4 md:block md:h-20 md:w-20" />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                    {v.date}
                  </span>
                  <h2
                    className="text-display mt-3 font-bold leading-tight md:mt-4"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                  >
                    {v.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink/75 md:mt-6">
                    {v.story}
                  </p>

                  {v.quote && (
                    <div className="relative mt-6 rounded-2xl border border-gold-deep/20 bg-ink/5 p-6 md:mt-8">
                      <span
                        aria-hidden
                        className="text-display absolute -left-1 -top-6 select-none text-6xl leading-none text-gold-deep/25 md:-top-8 md:text-7xl"
                      >
                        &ldquo;
                      </span>
                      <p className="relative text-sm leading-relaxed text-ink/80 md:text-base">
                        {v.quote}
                      </p>
                      {v.role && (
                        <p className="mt-4 text-xs uppercase tracking-widest text-gold-deep/70">
                          {v.role} · Seed for Change {v.program}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-ink py-16 text-cream md:py-24">
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
              Resident Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.02]"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
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

      {/* Navigation */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-white py-12">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap justify-between gap-4">
            <Link
              to="/impact/milestones"
              className="text-sm font-medium text-ink/70 hover:text-gold"
            >
              ← Back to Milestones
            </Link>
            <Link
              to="/get-involved"
              className="text-sm font-medium text-gold hover:text-gold-deep"
            >
              Get Involved →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
