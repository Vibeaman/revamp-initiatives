import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { ArrowRight, Images } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import walkForImpactImg from "@/assets/walk-for-impact.jpg";

const outreachCards = [
  { name: "Walk for Impact", img: walkForImpactImg, blurb: "Preserving stories of Nigeria's elders.", href: "/gallery/walk-for-impact" },
  { name: "Slum Outreach", img: "https://i.imgur.com/93sLY6m.jpg", blurb: "Direct intervention in underserved communities.", href: "/gallery/slum-outreach" },
  { name: "IDP Camp Durumi", img: "https://i.imgur.com/UZx6PhG.jpg", blurb: "Food, medical & cash assistance.", href: "/gallery/idp" },
  { name: "Kreative Campus", img: "https://i.imgur.com/0zqP8HV.jpg", blurb: "Skill-building creative training.", href: "/gallery/kreative-campus" },
];

export default function HomeProgramsTeaser() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  return (
    <section id="programs" className="relative overflow-hidden bg-cream py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-4">
            What We Do
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-display font-bold leading-[1.02] text-ink" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
            Programs that turn creativity into <span className="text-gold-deep italic">livelihoods</span>.
          </motion.h2>
        </motion.div>

        {/* Seed for Change flagship */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-8 overflow-hidden rounded-3xl bg-ink text-cream shadow-ink lg:grid-cols-2 md:mt-14"
        >
          <motion.div variants={fadeUp} className="relative min-h-[280px] lg:min-h-full">
            <img src="https://i.imgur.com/5nrpSL1.jpg" alt="Seed for Change training" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink md:left-6 md:top-6 md:px-4 md:py-1.5">
              Flagship
            </span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col justify-center p-6 md:p-10">
            <h3 className="text-display text-2xl font-bold text-gold md:text-4xl">Seed for Change</h3>
            <p className="mt-4 leading-relaxed text-cream/80 md:text-lg">
              A women-focused empowerment and art therapy program, also a fashion brand built on training,
              empowerment, and job creation.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-cream/60 md:mt-6 md:gap-3">
              <span className="rounded-full border border-gold/30 px-3 py-1">50+ women trained</span>
              <span className="rounded-full border border-gold/30 px-3 py-1">6+ skill areas</span>
              <span className="rounded-full border border-gold/30 px-3 py-1">Launched 2024</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Community Outreach teaser */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 md:mt-16"
        >
          <div className="mb-6 flex items-end justify-between gap-6 md:mb-8">
            <div>
              <h3 className="text-display text-2xl font-bold text-ink md:text-4xl">Community Outreach</h3>
              <p className="mt-2 max-w-2xl text-sm text-ink/70 md:mt-3 md:text-base">
                Direct intervention in underserved communities, IDP camps, and slum areas.
              </p>
            </div>
            <a href="/programs" className="hidden items-center gap-2 text-sm font-semibold text-gold-deep hover:text-gold md:flex">
              View all programs <ArrowRight size={16} />
            </a>
          </div>

          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => !isDragging && setIsPaused(true)}
            onMouseLeave={() => !isDragging && setIsPaused(false)}
          >
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-cream to-transparent md:w-24" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-cream to-transparent md:w-24" />
            <div 
              ref={scrollRef}
              className={`flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide ${isPaused ? "" : "marquee-slide"} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
            >
              {[...outreachCards, ...outreachCards].map((card, i) => (
                <Link
                  key={`${card.name}-${i}`}
                  to={card.href}
                  variants={fadeUp}
                  className="group relative w-[72%] shrink-0 overflow-hidden rounded-2xl bg-ink text-cream md:w-56 lg:w-64 select-none" style={{ touchAction: "pan-y" }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={card.img} alt={card.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" draggable={false} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent pt-16">
                    <div className="flex flex-col items-center p-5 text-center">
                      <h4 className="text-display text-lg font-bold text-gold">{card.name}</h4>
                      <p className="mt-2 text-sm text-white font-medium">{card.blurb}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-ink shadow-lg">
                        <Images className="h-3.5 w-3.5" />
                        View Gallery
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <a href="/programs" className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-gold-deep hover:text-gold md:hidden">
            View all programs <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
