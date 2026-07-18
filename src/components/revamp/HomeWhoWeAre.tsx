import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import leaders from "@/assets/leaders.jpg";

export default function HomeWhoWeAre() {
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
            <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-3 md:mt-8">
              <div className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="text-display mb-2 text-lg font-bold text-ink">Our Goal</h3>
                <p className="text-sm text-ink/70">
                  To build a Creative Social Impact Hub that creates lasting positive social change for vulnerable,
                  underprivileged, and underserved communities through creativity in Nigeria.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="text-display mb-2 text-lg font-bold text-ink">Our Mission</h3>
                <p className="text-sm text-ink/70">
                  To empower communities through creative expression, vocational training, and sustainable
                  development, fostering resilience and innovation.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="text-display mb-2 text-lg font-bold text-ink">Our Vision</h3>
                <p className="text-sm text-ink/70">
                  A world where creativity and opportunity are accessible to all, enabling individuals to thrive and
                  transform their communities.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-ink">
              <img src={leaders} alt="Revamp leadership" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-full bg-gradient-gold shadow-gold animate-floaty md:-bottom-6 md:-left-6 md:h-24 md:w-24" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
