import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import ContactForm from "@/components/revamp/ContactForm";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { ArrowRight, Heart, Users, Briefcase, GraduationCap, Gift } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Join Revamp Initiatives as a partner, volunteer, mentor, or donor. Support creative social impact and empower vulnerable communities in Nigeria.",
      },
      { property: "og:title", content: "Get Involved | Revamp Initiatives" },
      { property: "og:description", content: "There's a role for everyone. Partner, volunteer, mentor, or donate to support creative social impact." },
    ],
  }),
  component: GetInvolvedPage,
});

const involvementOptions = [
  {
    icon: Briefcase,
    title: "Partnership",
    desc: "Collaborate with us to amplify our impact. Corporate partnerships, institutional collaborations, and strategic alliances.",
  },
  {
    icon: Gift,
    title: "Sponsorship",
    desc: "Sponsor a program, event, or participant. Your sponsorship directly funds training, materials, and opportunities.",
  },
  {
    icon: Users,
    title: "Volunteering",
    desc: "Share your skills and time. We welcome volunteers for workshops, events, and community outreach.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    desc: "Guide the next generation of creatives. Share your expertise in business, arts, or technical skills.",
  },
  {
    icon: Heart,
    title: "Donate Resources",
    desc: "Donate materials, equipment, or supplies. From sewing machines to art supplies, every contribution matters.",
  },
];

const partners = [
  "Federal Ministry of Women Affairs",
  "Office of the Special Assistant to the President on Art & Culture",
  "Revamp Art Media Agency",
];

function GetInvolvedPage() {
  return (
    <main className="relative bg-cream">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-gold py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-5 h-48 w-48 rounded-full border-2 border-ink/10 animate-drift md:-left-20 md:top-10 md:h-64 md:w-64" />
          <div className="absolute right-5 bottom-5 h-36 w-36 rounded-full bg-ink/5 blur-2xl animate-floaty md:right-10 md:bottom-10 md:h-48 md:w-48" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display font-bold leading-[0.95] text-ink"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            Be Part of the <span className="italic">Change</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-ink/80 md:mt-6 md:text-lg"
          >
            There's a role for everyone. Choose how you'd like to move creativity forward with us.
          </motion.p>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {involvementOptions.map((option) => (
              <motion.div
                key={option.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-gold md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <option.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-display text-xl font-bold text-ink md:text-2xl">{option.title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{option.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-ink/10 bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-8">
            Our Partners
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-center rounded-xl border border-ink/10 bg-cream p-5 text-center text-sm font-medium text-ink/80"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-12 text-cream md:py-20">
        <div className="pointer-events-none absolute inset-0" style={{ perspective: "1000px" }}>
          <div className="absolute left-[10%] top-[15%] h-16 w-16 rounded-full bg-gradient-gold opacity-70 blur-md animate-floaty md:h-20 md:w-20" />
          <div className="absolute right-[15%] top-[25%] h-24 w-24 rounded-full border-2 border-gold/40 animate-drift md:h-32 md:w-32" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
          >
            Ready to make an <span className="text-gold gold-glow">impact</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-cream/70 md:mt-8 md:text-lg"
          >
            Reach out to us and let's discuss how we can create change together.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </main>
  );
}
