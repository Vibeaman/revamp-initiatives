import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { ArrowRight } from "lucide-react";
import cameras from "@/assets/cameras.jpg";
import photography from "@/assets/photography.jpg";
import { useRef, useState, useCallback } from "react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Creative Empowerment Programs Nigeria | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Explore Revamp Initiatives' creative empowerment programs in Nigeria. Learn about Seed for Change, Walk for Impact, Slum Outreach, IDP Camp Durumi, and Kreative Campus.",
      },
      { property: "og:title", content: "Creative Empowerment Programs Nigeria | Revamp Initiatives" },
      { property: "og:description", content: "Creative empowerment programs transforming communities through skills, creativity, and sustainable development." },
    ],
  }),
  component: ProgramsPage,
});

const seedObjectives = [
  "Train women in tailoring & entrepreneurship",
  "Create sustainable jobs and income",
  "Build a socially responsible fashion brand",
  "Reinvest proceeds back into communities",
];

const subPrograms = [
  { 
    name: "Walk for Impact", 
    img: "https://i.imgur.com/walk-for-impact.jpg", 
    blurb: "Preserving stories of Nigeria's elders.",
    fullDesc: "Intergenerational storytelling event honoring elders aged 60+ with interviews and cash support. We document their lived experiences while celebrating their contributions to society."
  },
  { 
    name: "Slum Outreach", 
    img: "https://i.imgur.com/93sLY6m.jpg", 
    blurb: "Direct intervention in underserved communities.",
    fullDesc: "Direct intervention in underserved communities through food support, medical assistance, and cash aid. We work alongside community leaders to identify and address critical needs."
  },
  { 
    name: "IDP Camp Durumi", 
    img: "https://i.imgur.com/UZx6PhG.jpg", 
    blurb: "Food, medical & cash assistance.",
    fullDesc: "Supporting displaced persons at IDP Camp Durumi with essential supplies, medical care, and financial assistance to help them rebuild their lives with dignity."
  },
  { 
    name: "Kreative Campus", 
    img: "https://i.imgur.com/0zqP8HV.jpg", 
    blurb: "Skill-building creative training.",
    fullDesc: "Campus-based creative skill-building workshops that empower students with practical skills in photography, design, and digital arts for future careers."
  },
];

function CommunityOutreach() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    dragging.current = true;
    setPaused(true);
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    trackRef.current.scrollLeft = scrollLeft.current - dx;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    dragging.current = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
    setTimeout(() => setPaused(false), 3000);
  }, []);

  return (
    <div className="mt-12 md:mt-16">
      <div className="mb-6 flex items-end justify-between gap-6 md:mb-8">
        <div>
          <h3 className="text-display text-2xl font-bold text-ink md:text-4xl">Community Outreach</h3>
          <p className="mt-2 max-w-2xl text-sm text-ink/70 md:mt-3 md:text-base">
            Direct intervention in underserved communities, IDP camps, and slum areas.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className={`flex gap-5 whitespace-nowrap ${paused ? "" : "marquee-cards"}`}>
          {[...subPrograms].map((p, i) => (
            <article
              key={`${p.name}-${i}`}
              className="group relative w-[78%] shrink-0 overflow-hidden rounded-2xl bg-ink text-cream md:w-64 select-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" loading="lazy" draggable={false} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-5 text-center">
                <h4 className="text-display text-lg font-bold text-gold">{p.name}</h4>
                <p className="mt-2 text-sm text-white font-medium">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgramsPage() {
  return (
    <main className="relative bg-cream">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-32">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Our Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02] text-cream"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Programs that turn creativity into <span className="text-gold">livelihoods</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            From our flagship Seed for Change program to community outreach initiatives, 
            we create pathways to empowerment through creativity and skill development.
          </motion.p>
        </div>
      </section>

      {/* Seed for Change */}
      <section className="relative overflow-hidden bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <motion.div variants={fadeUp}>
              <span className="mb-4 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">Flagship Program</span>
              <h2 className="text-display text-3xl font-bold text-ink md:text-5xl">Seed for Change</h2>
              <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
                A women-focused empowerment and art therapy program, also a fashion brand built on training,
                empowerment, and job creation. Every piece produced carries a story of resilience, linking style
                with social change.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-ink/60 md:gap-3">
                <span className="rounded-full border border-ink/20 px-3 py-1">50+ women trained</span>
                <span className="rounded-full border border-ink/20 px-3 py-1">6+ skill areas</span>
                <span className="rounded-full border border-ink/20 px-3 py-1">Launched 2024</span>
              </div>
              <ul className="mt-8 space-y-4">
                {seedObjectives.map((o) => (
                  <li key={o} className="flex gap-4 text-ink/80">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <img src="https://i.imgur.com/5nrpSL1.jpg" alt="Seed for Change training" className="rounded-3xl shadow-ink" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="relative overflow-hidden bg-cream py-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <CommunityOutreach />
        </div>
      </section>

      <Footer />
    </main>
  );
}
