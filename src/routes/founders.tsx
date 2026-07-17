import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import naallahImg from "@/assets/naallah.webp";
import itohoImg from "@/assets/itoho-obong.webp";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "Our People | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Meet the visionaries behind Revamp Initiatives. Learn about our founder, CEO, and board members driving creative social impact in Nigeria.",
      },
    ],
  }),
  component: FoundersPage,
});

const team = [
  {
    role: "CEO / FOUNDER",
    name: "Taibat Ajiboye",
    bio: "Taibat Ajiboye is a humanitarian and creative based in Abuja, Nigeria, who advocates for global change through creative visual representation. She works as a visual artist and documentary photographer focused on storytelling around humanitarian affairs, health and well-being, and social inclusion. She's published two photography books: Sadiya: Journey of Social Impact and Tokens that Births Change.",
    highlights: [
      "Served as Documentary Photographer and Assistant on Visual Communications to Nigeria's Minister of Humanitarian Affairs (2019–2023)",
      "Worked on assignment for CNN, Reuters, and other organizations in Nigeria",
      "Founded Revamp Art Media Agency as Creative Director, a communications consulting firm specializing in documentary photography, videography, and graphic arts",
    ],
    image: "https://i.imgur.com/srvG6zl.jpg",
    imageAspect: "aspect-[1136/1271]",
  },
  {
    role: "BOARD MEMBER",
    name: "Professor Abdul-Rasheed Na'Allah",
    bio: "Prof. Abdul-Rasheed Na'Allah is a Nigerian scholar and academic administrator. He served as pioneer Vice-Chancellor of Kwara State University (2009–2019) and Vice-Chancellor of the University of Abuja (2019–2024). He holds a PhD in Comparative Literature (University of Alberta) and degrees from the University of Ilorin. A poet, playwright, and scholar, he authored Africa Discourse, Africanity, Yoruba Oral Traditions, Omokewu, and Ilorin Fa.",
    image: naallahImg,
    imageAspect: "aspect-[4/5]",
  },
  {
    role: "BOARD MEMBER",
    name: "Doctor Itoho Obong",
    bio: "Dr. Itoho Obong is a prominent Nigerian medical practitioner, union leader, and community health advocate. He currently serves as President of the Association of Resident Doctors, Federal Capital Territory Administration (ARD-FCTA) in Abuja, championing better working conditions and addressing healthcare workforce shortages. He is also a Board Member of Revamp Initiatives, using this platform to drive healthcare advocacy and community welfare initiatives across Nigeria.",
    image: itohoImg,
    imageAspect: "aspect-[4/5]",
  },
];

const values = [
  { n: "01", title: "Inclusivity", body: "Women and youth valued regardless of background." },
  { n: "02", title: "Collaboration", body: "Working with volunteers, partners, and communities." },
  { n: "03", title: "Integrity", body: "Honesty, transparency, and accountability at every step." },
  { n: "04", title: "Compassion", body: "Empathy and a genuine desire to make impact." },
];

function FoundersPage() {
  return (
    <main className="relative bg-ink text-cream">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Our People
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Meet the <span className="text-gold">visionaries</span> behind Revamp.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            Passionate leaders driving positive change through creativity, advocacy, and community empowerment.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-3 md:gap-10">
            {team.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group"
              >
                <div className={`relative mb-6 overflow-hidden rounded-3xl bg-white/5 ${f.imageAspect || "aspect-[4/5]"}`}>
                  {f.image ? (
                    <img src={f.image} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gold/20 to-transparent">
                      <div className="text-center text-gold/40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="mt-2 text-xs">Photo coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{f.role}</span>
                <h2 className="mt-2 text-display text-xl font-bold md:text-2xl">{f.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{f.bio}</p>
                {f.highlights && (
                  <ul className="mt-4 space-y-2">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-cream/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative overflow-hidden border-t border-cream/10 py-12 md:py-20">
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-10 max-w-3xl md:mb-14"
          >
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4">Core Values</motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.02]"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              The principles that <span className="text-gold">shape every project</span>.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 md:grid-cols-2 md:gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.n}
                variants={fadeUp}
                className="flex gap-5 rounded-3xl border border-cream/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:gap-6 md:p-8"
              >
                <span className="text-display shrink-0 text-4xl font-bold text-gold gold-glow md:text-5xl">{v.n}</span>
                <div>
                  <h3 className="text-display text-xl font-bold md:text-2xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-cream/70 leading-relaxed md:mt-3">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
