import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import naallahImg from "@/assets/naallah.webp";
import itohoImg from "@/assets/itoho-obong.webp";

const founders = [
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

export default function Founders() {
  return (
    <section id="founders" className="relative overflow-hidden bg-ink py-12 text-cream md:py-20">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4">
            Our People
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            Meet the <span className="text-gold">visionaries</span> behind Revamp.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-sm text-cream/70 md:mt-6 md:text-base">
            Passionate leaders driving positive change through creativity, advocacy, and community empowerment.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-3 md:gap-10">
          {founders.map((f, i) => (
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
              <h3 className="mt-2 text-display text-xl font-bold text-cream md:text-2xl">{f.name}</h3>
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
  );
}
