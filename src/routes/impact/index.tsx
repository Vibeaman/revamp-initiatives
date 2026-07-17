import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/utils/animations";
import { ArrowRight, Users, Heart, Award, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impact/")({
  head: () => ({
    meta: [
      { title: "Our Impact | Revamp Initiatives" },
      {
        name: "description",
        content:
          "Explore Revamp Initiatives' impact statistics and learn how we're transforming communities through creative social impact programs across Nigeria.",
      },
    ],
  }),
  component: ImpactOverview,
});

const stats = [
  { value: "3,000+", label: "People Empowered", icon: Users },
  { value: "50+", label: "Women Trained", icon: Heart },
  { value: "4", label: "Partnerships", icon: Award },
  { value: "₦50K+", label: "Cash Aid Distributed", icon: TrendingUp },
];

const subLinks = [
  { label: "Our Journey", href: "/impact/journey", desc: "From 2022 to today" },
  { label: "Milestones & Partnerships", href: "/impact/milestones", desc: "Key achievements" },
  { label: "Stories", href: "/impact/stories", desc: "Voices from the community" },
];

function ImpactOverview() {
  return (
    <main className="relative bg-ink text-cream">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Our Impact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Numbers that carry <span className="text-gold">names, stories, and futures</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-cream/80"
          >
            Over ₦50,000 distributed in direct cash assistance to displaced persons and vulnerable
            families, alongside sustained empowerment programs from Abuja to Borno.
          </motion.p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative overflow-hidden py-12 bg-cream/5">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 md:grid-cols-3"
          >
            {subLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <motion.div
                  variants={fadeUp}
                  className="group flex items-center justify-between rounded-2xl border border-cream/10 bg-white/5 p-6 transition-all hover:border-gold/40 hover:bg-white/10"
                >
                  <div>
                    <h3 className="text-display text-lg font-bold">{link.label}</h3>
                    <p className="mt-1 text-sm text-cream/60">{link.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12"
          >
            <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Impact Numbers
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-display text-3xl font-bold md:text-4xl">
              Key Statistics
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                  <s.icon className="h-6 w-6 text-gold" />
                </div>
                <span className="text-display text-3xl font-bold text-gold gold-glow md:text-4xl">{s.value}</span>
                <p className="mt-2 text-sm text-cream/70">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-display text-2xl font-bold md:text-3xl"
          >
            Want to see more details?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/impact/journey"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              View Our Journey <ArrowRight size={16} />
            </Link>
            <Link
              to="/impact/stories"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Read Impact Stories <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
