import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { ArrowRight, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useRef } from "react";
import walkForImpactImg from "@/assets/walk-for-impact.jpg";

const outreachCards = [
  { name: "Walk for Impact", img: walkForImpactImg, blurb: "Preserving stories of Nigeria's elders.", href: "/gallery/walk-for-impact" },
  { name: "Slum Outreach", img: "https://i.imgur.com/93sLY6m.jpg", blurb: "Direct intervention in underserved communities.", href: "/gallery/slum-outreach" },
  { name: "IDP Camp Durumi", img: "https://i.imgur.com/UZx6PhG.jpg", blurb: "Food, medical & cash assistance.", href: "/gallery/idp" },
  { name: "Kreative Campus", img: "https://i.imgur.com/0zqP8HV.jpg", blurb: "Skill-building creative training.", href: "/gallery/kreative-campus" },
];

const AUTOPLAY_MS = 5000;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function HomeProgramsTeaser() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = outreachCards.length;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setIsPaused(false);
  };

  const card = outreachCards[current];

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

        {/* Community Outreach slideshow */}
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

          {/* Slideshow container */}
          <div
            className="relative overflow-hidden rounded-3xl bg-ink shadow-ink"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide */}
            <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={card.img}
                    alt={card.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

                  {/* Card info */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center md:p-10">
                    <h4 className="text-display text-2xl font-bold text-gold md:text-3xl">{card.name}</h4>
                    <p className="mt-2 max-w-md text-sm text-white/90 md:text-base">{card.blurb}</p>
                    <Link
                      to={card.href}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink shadow-lg transition-colors hover:bg-gold-deep md:mt-5"
                    >
                      <Images className="h-4 w-4" />
                      View Gallery
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-ink/60 p-2 text-cream backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink md:left-5 md:p-3"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-ink/60 p-2 text-cream backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink md:right-5 md:p-3"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-5">
              {outreachCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-cream/40 hover:bg-cream/70"
                  }`}
                />
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
