import { motion } from "framer-motion";
import { staggerParent, fadeUp, viewportOnce } from "@/utils/animations";

const options = ["Partnership", "Sponsorship", "Volunteering", "Mentorship", "Donate Resources"];

export default function Support() {
  return (
    <section id="support" className="relative overflow-hidden bg-gradient-gold py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-5 h-48 w-48 rounded-full border-2 border-ink/10 animate-drift md:-left-20 md:top-10 md:h-64 md:w-64" />
        <div className="absolute right-5 bottom-5 h-36 w-36 rounded-full bg-ink/5 blur-2xl animate-floaty md:right-10 md:bottom-10 md:h-48 md:w-48" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="text-display font-bold leading-[0.95] text-ink"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          Be Part of the <span className="italic">Change</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-ink/80 md:mt-6 md:text-lg"
        >
          There's a role for everyone. Choose how you'd like to move creativity forward with us.
        </motion.p>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10 md:gap-3"
        >
          {options.map((o) => (
            <motion.a
              key={o}
              href="#contact"
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer rounded-full border-2 border-ink/80 bg-ink/5 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-gold md:px-5 md:py-2.5"
            >
              {o}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-gold shadow-ink transition-transform md:mt-12 md:gap-3 md:px-9 md:py-5 md:text-lg"
        >
          Get In Touch
          <span aria-hidden>→</span>
        </motion.a>
      </div>
    </section>
  );
}
