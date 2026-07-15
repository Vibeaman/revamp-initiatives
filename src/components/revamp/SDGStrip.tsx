const goals = [
  { n: "01", label: "No Poverty" },
  { n: "05", label: "Gender Equality" },
  { n: "08", label: "Decent Work" },
  { n: "10", label: "Reduced Inequalities" },
];

export default function SDGStrip() {
  return (
    <section className="border-y border-gold/20 bg-ink py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:gap-8 md:px-10">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Aligned with UN SDGs
        </p>
        <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-1 md:mx-0 md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {goals.map((g) => (
            <div
              key={g.n}
              className="flex shrink-0 items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-sm text-cream"
            >
              <span className="text-display text-xs font-bold text-gold">GOAL {g.n}</span>
              <span className="text-cream/80">{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
