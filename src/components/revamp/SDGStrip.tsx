import { motion } from "framer-motion";

const goals = [
  { n: "01", label: "No Poverty" },
  { n: "05", label: "Gender Equality" },
  { n: "08", label: "Decent Work" },
  { n: "10", label: "Reduced Inequalities" },
];

export default function SDGStrip() {
  return (
    <section className="border-y border-gold/20 bg-ink py-4 md:py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 md:flex-row md:items-center md:gap-6 md:px-10">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-gold md:tracking-[0.25em]">
          Aligned with UN SDGs
        </p>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0 md:pb-0 md:gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {goals.map((g, i) => (
            <motion.div
              key={g.n}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 text-xs text-cream md:gap-2 md:px-4 md:py-2 md:text-sm cursor-pointer"
            >
              <motion.span 
                className="text-display text-xs font-bold text-gold"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                GOAL {g.n}
              </motion.span>
              <span className="text-cream/80">{g.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
