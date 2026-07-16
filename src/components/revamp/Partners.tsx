import { motion } from "framer-motion";
import { viewportOnce } from "@/utils/animations";

const partners = [
  "Federal Ministry of Women Affairs",
  "Office of the Special Assistant to the President on Art & Culture",
  "Revamp Art Media Agency",
];

export default function Partners() {
  return (
    <section className="border-y border-ink/10 bg-cream py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-8">
          Partners & Supporters
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-center rounded-xl border border-ink/10 bg-white p-5 text-center text-sm font-medium text-ink/80 transition-colors hover:border-gold/50 hover:text-ink md:p-6"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
