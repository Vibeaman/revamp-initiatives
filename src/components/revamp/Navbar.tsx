import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
  { label: "Support", href: "#support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ink/95 backdrop-blur-md shadow-ink" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Revamp Initiatives" className="h-10 w-10 rounded-full" />
            <span className="text-display text-lg font-semibold text-gold md:text-xl">
              Revamp <span className="text-cream">Initiatives</span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#support"
                className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
              >
                Get Involved
              </a>
            </li>
          </ul>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/40 md:hidden"
          >
            <span className={`h-0.5 w-5 bg-gold transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-40 flex w-4/5 max-w-sm flex-col bg-ink px-8 pt-24 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-display text-3xl font-semibold text-cream hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#support"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex w-fit items-center rounded-full bg-gold px-6 py-3 text-base font-semibold text-ink"
            >
              Get Involved →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
