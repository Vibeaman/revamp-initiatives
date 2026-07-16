const goals = [
  { n: "01", label: "No Poverty" },
  { n: "05", label: "Gender Equality" },
  { n: "08", label: "Decent Work" },
  { n: "10", label: "Reduced Inequalities" },
];

export default function SDGStrip() {
  return (
    <section className="border-y border-gold/20 bg-ink py-4 md:py-5 overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 md:flex-row md:items-center md:gap-6 md:px-10">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-gold md:tracking-[0.25em]">
          Aligned with UN SDGs
        </p>
        <div className="relative flex-1 overflow-hidden">
          <div 
            className="flex gap-3 animate-marquee whitespace-nowrap"
            style={{ animation: 'marquee 20s linear infinite' }}
          >
            {[...goals, ...goals].map((g, i) => (
              <div
                key={`${g.n}-${i}`}
                className="flex shrink-0 items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 text-xs text-cream md:gap-2 md:px-4 md:py-2 md:text-sm"
              >
                <span className="text-display text-xs font-bold text-gold">GOAL {g.n}</span>
                <span className="text-cream/80">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
