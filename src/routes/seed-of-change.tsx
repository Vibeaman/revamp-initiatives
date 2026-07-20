import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { GalleryGrid } from "@/components/revamp/GalleryGrid";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { Images, BookOpen, Folder, Video, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/seed-of-change")({
  head: () => ({
    meta: [
      { title: "Seed of Change | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Seed of Change is Revamp Initiatives' flagship women's empowerment journey, a living diary of the people, stories, and moments shaping the project year by year.",
      },
      { property: "og:title", content: "Seed of Change | Revamp Initiatives" },
      {
        property: "og:description",
        content:
          "A living diary of Seed of Change, Revamp Initiatives' flagship women's empowerment project.",
      },
    ],
  }),
  component: SeedOfChangePage,
});

interface GalleryFolder {
  name: string;
  photos: string[]; // left empty intentionally, to be filled in later
}

interface DiaryEntry {
  year: string;
  title: string;
  body: string;
  folders: GalleryFolder[];
  videoUrl: string; // left empty intentionally, to be filled in later (e.g. YouTube/Vimeo embed link)
}

const DAY_FOLDERS = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Graduation"];

const entries: DiaryEntry[] = [
  {
    year: "2025",
    title: "Where it all began",
    body:
      "In the past, 16 women were trained through our Art Residency program, mentored and empowered with the right skills, tools, seed capital, and job employment. The Seed for Change initiative in 2025 covered 6+ skill areas, reached 300+ children, and delivered a youth facilitation program supporting over 1,000 youth toward grants in Nigerian universities.",
    folders: DAY_FOLDERS.map((name) => {
      if (name === "Day 1") {
        return {
          name,
          photos: [
            "https://i.imgur.com/WO2VC1m.jpeg",
            "https://i.imgur.com/UJQSTUc.jpeg",
            "https://i.imgur.com/TShGAbP.jpeg",
            "https://i.imgur.com/X9W41gi.jpeg",
          ],
        };
      }
      if (name === "Day 2") {
        return {
          name,
          photos: [
            "https://i.imgur.com/5A6b2io.jpeg",
            "https://i.imgur.com/jBjzpEy.jpeg",
            "https://i.imgur.com/NVwk22h.jpeg",
            "https://i.imgur.com/ex0LEAX.jpeg",
          ],
        };
      }
      if (name === "Day 3") {
        return {
          name,
          photos: [
            "https://i.imgur.com/lUd7XMu.jpeg",
            "https://i.imgur.com/1wZVyZe.jpeg",
            "https://i.imgur.com/bpgaCiO.jpeg",
            "https://i.imgur.com/CY12beB.jpeg",
          ],
        };
      }
      if (name === "Day 4") {
        return {
          name,
          photos: [
            "https://i.imgur.com/9alrs3u.jpeg",
            "https://i.imgur.com/0OKQ88K.jpeg",
            "https://i.imgur.com/wiuW0qF.jpeg",
            "https://i.imgur.com/MYfjdLV.jpeg",
          ],
        };
      }
      if (name === "Day 5") {
        return {
          name,
          photos: [
            "https://i.imgur.com/GoZZTo2.jpeg",
            "https://i.imgur.com/IMqRzei.jpeg",
            "https://i.imgur.com/3rWsBIH.jpeg",
            "https://i.imgur.com/11jpgif.jpeg",
            "https://i.imgur.com/hkGN0NZ.jpeg",
          ],
        };
      }
      if (name === "Graduation") {
        return {
          name,
          photos: [
            "https://i.imgur.com/fXVVaj7.jpeg",
            "https://i.imgur.com/AsdmRvg.jpeg",
            "https://i.imgur.com/qbw895u.jpeg",
            "https://i.imgur.com/X3smDnE.jpeg",
          ],
        };
      }
      return { name, photos: [] };
    }),
    videoUrl: "https://player.vimeo.com/video/1211281712",
  },
  {
    year: "2026",
    title: "Continuing the journey",
    body:
      "This is where the story of the 2026 chapter of Seed of Change will live. A new year, a new cohort, new stories of growth. This space will hold the diary entries, reflections, and photos from this leg of the journey.",
    folders: DAY_FOLDERS.map((name) => ({ name, photos: [] })),
    videoUrl: "",
  },
];

const stats = [
  { value: "16", label: "Women trained through our Art Residency program" },
  { value: "6+", label: "Skill areas covered in 2025" },
  { value: "300+", label: "Children reached" },
  { value: "1,000+", label: "Youth facilitated toward university grants" },
];

function FolderCard({
  folder,
  isOpen,
  onToggle,
}: {
  folder: GalleryFolder;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const hasPhotos = folder.photos.length > 0;

  if (!hasPhotos) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-cream/15 bg-cream/[0.02] px-4 py-8 text-center transition-colors hover:border-gold/30 hover:bg-cream/[0.04]">
        <Folder className="mb-3 h-8 w-8 text-gold/40" />
        <p className="text-sm font-semibold text-cream/80">{folder.name}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-cream/40">
          <Images className="h-3 w-3" /> Photos coming soon
        </p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold/30 bg-cream/[0.04] px-4 py-8 text-center transition-colors hover:border-gold/50 hover:bg-cream/[0.06] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
      aria-expanded={isOpen}
    >
      <img
        src={folder.photos[0]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
        loading="lazy"
      />
      <Folder className="relative mb-3 h-8 w-8 text-gold" />
      <p className="relative text-sm font-semibold text-cream">{folder.name}</p>
      <p className="relative mt-1 flex items-center gap-1 text-xs text-cream/60">
        <Images className="h-3 w-3" /> {folder.photos.length} photo
        {folder.photos.length === 1 ? "" : "s"}
      </p>
      <ChevronDown
        className={`relative mt-2 h-4 w-4 text-gold/70 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

function VideoSlot({ videoUrl, year }: { videoUrl: string; year: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [ratio, setRatio] = useState<number | null>(null); // width / height

  useEffect(() => {
    if (!videoUrl) return;

    let player: any;
    let cancelled = false;

    const setup = () => {
      const VimeoCtor = (window as any).Vimeo?.Player;
      if (!VimeoCtor || !iframeRef.current) return;
      player = new VimeoCtor(iframeRef.current);
      Promise.all([player.getVideoWidth(), player.getVideoHeight()])
        .then(([w, h]: [number, number]) => {
          if (!cancelled && w && h) setRatio(w / h);
        })
        .catch(() => {});
    };

    if ((window as any).Vimeo?.Player) {
      setup();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src="https://player.vimeo.com/api/player.js"]'
      );
      const script = existing ?? document.createElement("script");
      if (!existing) {
        script.src = "https://player.vimeo.com/api/player.js";
        document.body.appendChild(script);
      }
      script.addEventListener("load", setup);
      if ((window as any).Vimeo?.Player) setup();
      return () => script.removeEventListener("load", setup);
    }

    return () => {
      cancelled = true;
    };
  }, [videoUrl]);

  if (videoUrl) {
    const isPortrait = ratio !== null && ratio < 1;
    return (
      <div
        className={`mx-auto w-full overflow-hidden rounded-2xl border border-cream/10 bg-black ${
          isPortrait ? "max-h-[75vh] max-w-sm sm:max-w-md" : ""
        }`}
        style={{ aspectRatio: ratio ? `${ratio}` : "16 / 9" }}
      >
        <iframe
          ref={iframeRef}
          src={videoUrl}
          title={`${year} Seed of Change highlight video`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl border border-dashed border-cream/15 bg-cream/[0.02] px-4 text-center transition-colors hover:border-gold/30 hover:bg-cream/[0.04]">
      <Video className="mb-3 h-9 w-9 text-gold/40" />
      <p className="text-sm font-semibold text-cream/80">{year} Highlight Video</p>
      <p className="mt-1 text-xs text-cream/40">Video coming soon</p>
    </div>
  );
}

function DiaryEntryBlock({ entry, index }: { entry: DiaryEntry; index: number }) {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const activeFolder = entry.folders.find((f) => f.name === openFolder);

  return (
    <motion.article
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative"
    >
      {index > 0 && <div className="mb-16 border-t border-cream/10 md:mb-24" />}

      <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
        <span className="text-display text-4xl font-bold text-gold gold-glow md:text-6xl">
          {entry.year}
        </span>
        <div className="h-px flex-1 bg-cream/10" />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="text-display font-bold leading-tight"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
      >
        {entry.title}
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
        {entry.body}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold/60">
          {entry.year} Highlight Video
        </p>
        <VideoSlot videoUrl={entry.videoUrl} year={entry.year} />
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold/60">
          {entry.year} Gallery
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {entry.folders.map((folder) => (
            <FolderCard
              key={folder.name}
              folder={folder}
              isOpen={openFolder === folder.name}
              onToggle={() =>
                setOpenFolder((current) => (current === folder.name ? null : folder.name))
              }
            />
          ))}
        </div>

        <AnimatePresence>
          {activeFolder && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 rounded-2xl border border-cream/10 bg-cream/[0.02] p-4 md:p-6">
                <p className="mb-4 text-sm font-semibold text-cream/80">
                  {entry.year} &middot; {activeFolder.name}
                </p>
                <GalleryGrid
                  photos={activeFolder.photos.map((src) => ({ src }))}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}

function SeedOfChangePage() {
  return (
    <main className="relative bg-ink text-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            <BookOpen size={14} /> A Living Diary
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Seed of <span className="text-gold">Change</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            Seed for Change Initiative (2024-Present) is a flagship program of Revamp
            Initiatives, a women-focused empowerment and art therapy program for marginalized
            communities, kids, and communities exposed to kidnapping, banditry attacks, and
            other underserved, less opportune women and youths, providing practical vocational
            and creative skills for income generation, financial independence, and
            socio-economic growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative border-y border-cream/10 bg-cream/[0.02] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center md:text-left">
                <p className="text-display text-3xl font-bold text-gold gold-glow md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-cream/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diary Entries */}
      <section className="relative overflow-hidden border-t border-cream/10 py-12 md:py-20">
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <div className="space-y-16 md:space-y-24">
            {entries.map((entry, i) => (
              <DiaryEntryBlock key={entry.year} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
