import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import garuba from "@/assets/garuba-testimonial.jpg";

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

export default function CommunityVoices() {
  return (
    <section id="stories" className="relative overflow-hidden bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* ─── header ─── */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-4"
          >
            Voices from the Community
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.02] text-ink"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            Every number is a <span className="italic text-gold-deep">person</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm text-ink/60 md:mt-6 md:text-base"
          >
            The stories behind our work — told by the people who lived them.
          </motion.p>
        </motion.div>

        {/* ─── voice cards ─── */}
        <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-20">
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
              {/* photo */}
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

              {/* text */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                  {v.date}
                </span>
                <h3
                  className="text-display mt-3 font-bold leading-tight text-ink md:mt-4"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  {v.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/75 md:mt-6">
                  {v.story}
                </p>

                {/* inline quote (only for entries that have one) */}
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
  );
}
