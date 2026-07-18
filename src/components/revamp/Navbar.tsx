import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const impactLinks = [
  { label: "Overview", href: "/impact" },
  { label: "Our Journey", href: "/impact/journey" },
  { label: "Milestones & Partnerships", href: "/impact/milestones" },
  { label: "Stories", href: "/impact/stories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);
  const [mobileImpactOpen, setMobileImpactOpen] = useState(false);
  const impactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (impactRef.current && !impactRef.current.contains(e.target as Node)) {
        setImpactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileImpactOpen(false);
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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10 md:py-4">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src={logo} alt="Revamp Initiatives" className="h-8 w-8 rounded-full md:h-10 md:w-10" />
            <span className="text-display text-base font-semibold text-gold md:text-xl">
              Revamp <span className="text-cream">Initiatives</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex md:gap-2 lg:gap-4">
            <li>
              <Link
                to="/#about"
                className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/programs"
                className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="/gallery/art-therapy-cwsi"
                className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                Gallery
              </Link>
            </li>

            {/* Impact Dropdown - Clickable */}
            <li ref={impactRef} className="relative">
              <button
                onClick={() => setImpactOpen(!impactOpen)}
                onMouseEnter={() => setImpactOpen(true)}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                Impact <ChevronDown size={14} className={`transition-transform ${impactOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {impactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setImpactOpen(false)}
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-64 rounded-2xl border border-cream/10 bg-ink p-2 shadow-ink"
                  >
                    <div className="mb-2 px-4 py-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold/60">Impact</p>
                    </div>
                    {impactLinks.map((l, i) => (
                      <Link
                        key={l.href}
                        to={l.href}
                        onClick={() => setImpactOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-cream/80 transition-colors hover:bg-cream/5 hover:text-gold"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
                          {i + 1}
                        </span>
                        {l.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                to="/founders"
                className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                Founders
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                Get Involved
              </Link>
            </li>

            <li>
              <Link
                to="/get-involved"
                className="ml-2 inline-flex items-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95 md:px-5 md:py-2.5"
              >
                Get Involved
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/40 md:hidden"
          >
            <span className={`h-0.5 w-5 bg-gold transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-40 flex w-4/5 max-w-sm flex-col bg-ink px-6 pt-20 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="/#about"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-display text-xl font-semibold text-cream hover:bg-cream/5 hover:text-gold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-display text-xl font-semibold text-cream hover:bg-cream/5 hover:text-gold"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery/art-therapy-cwsi"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-display text-xl font-semibold text-cream hover:bg-cream/5 hover:text-gold"
                >
                  Gallery
                </Link>
              </li>

              {/* Impact Accordion */}
              <li>
                <button
                  onClick={() => setMobileImpactOpen(!mobileImpactOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-display text-xl font-semibold text-cream hover:bg-cream/5"
                >
                  Impact <ChevronDown size={20} className={`transition-transform ${mobileImpactOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileImpactOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="ml-4 flex flex-col gap-1 pb-2">
                        {impactLinks.map((l) => (
                          <li key={l.href}>
                            <Link
                              to={l.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-xl px-4 py-2 text-base text-cream/70 hover:text-gold"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  to="/founders"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-display text-xl font-semibold text-cream hover:bg-cream/5 hover:text-gold"
                >
                  Founders
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-display text-xl font-semibold text-cream hover:bg-cream/5 hover:text-gold"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-fit items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Get Involved →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
