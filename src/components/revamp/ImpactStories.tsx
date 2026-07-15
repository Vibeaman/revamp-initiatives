import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import hug from "@/assets/hug.jpg.asset.json";
import gallery from "@/assets/gallery.jpg.asset.json";
import partner from "@/assets/partner.jpg.asset.json";

const stories = [
  {
    date: "July 2024",
    name: "Abubakar Sadiq",
    body: "A young boy suffering from severe malnutrition was admitted to hospital after Revamp's intervention. He received essential medical care on the path toward restoring his health.",
    img: hug.url,
  },
  {
    date: "2024",
    name: "Sa'adatu Adamu",
    body: "A displaced woman from Gwoza, Borno State. Through medical assistance and cash support, she received the treatment she needed, along with a renewed sense of agency.",
    img: gallery.url,
  },
  {
    date: "1 Oct 2024",
    name: "Walk for Impact",
    body: "Five elderly men aged 60+ were interviewed to preserve their lived experiences. Each received cash support honoring the contributions of a lifetime.",
    img: partner.url,
  },
];

export default function ImpactStories() {
  return (
    <section id="stories" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
          <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Impact Stories
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-display font-bold leading-[1.02] text-ink" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Every number is a <span className="italic text-gold-deep">person</span>.
          </motion.h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-24">
          {stories.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-ink">
                  <img src={s.img} alt={s.name} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-4 -right-4 hidden h-20 w-20 rounded-full bg-gradient-gold shadow-gold md:block" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">{s.date}</span>
                <h3 className="text-display mt-4 font-bold leading-tight text-ink" style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}>
                  {s.name}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-ink/75">{s.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
