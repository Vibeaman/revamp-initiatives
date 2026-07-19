import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function StickyGetInvolved() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8"
    >
      <Link
        to="/get-involved"
        className="group flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gold-deep hover:text-cream hover:shadow-xl hover:shadow-gold/40 md:px-5"
      >
        <HeartHandshake className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">Get Involved</span>
      </Link>
    </motion.div>
  );
}
