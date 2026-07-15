import { motion } from "framer-motion";
import { viewportOnce } from "@/utils/animations";

const partners = [
  "Federal Ministry of Women Affairs",
  "Supply Chain Research and Innovation Hub",
  "Office of the Special Assistant to the President on Art & Culture",
  "Revamp Art Media Agency",
];

export default function Partners() {
  return (
    <section className="border-y border-ink/10 bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
          Partners & Supporters
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-center rounded-2xl border border-ink/10 bg-white p-6 text-center text-sm font-medium text-ink/80 transition-colors hover:border-gold/50 hover:text-ink"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
