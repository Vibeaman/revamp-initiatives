import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Images } from "lucide-react";
import Navbar from "@/components/revamp/Navbar";
import Footer from "@/components/revamp/Footer";
import { GalleryGrid } from "@/components/revamp/GalleryGrid";
import { getGallery, galleryExists } from "@/data/galleries";
import { motion } from "framer-motion";

export const Route = createFileRoute("/gallery/$slug")({
  component: GalleryPage,
  notFoundComponent: () => <GalleryNotFound />,
});

function GalleryNotFound() {
  return (
    <main className="min-h-screen bg-ink text-cream">
      <Navbar />
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <Images className="mb-6 h-16 w-16 text-gold/50" />
        <h1 className="text-display text-3xl font-bold">Gallery Not Found</h1>
        <p className="mt-4 max-w-md text-cream/70">
          The gallery you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/programs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Programs
        </Link>
      </div>
      <Footer />
    </main>
  );
}

function GalleryPage() {
  const { slug } = Route.useParams();
  const gallery = getGallery(slug);

  if (!gallery) {
    return <GalleryNotFound />;
  }

  return (
    <main className="min-h-screen bg-ink text-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              All Programs
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Photo Gallery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold leading-[1.02] text-cream"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {gallery.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-2xl text-base text-cream/80 md:text-lg"
          >
            {gallery.description}
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative overflow-hidden bg-cream/5 py-12 md:py-16">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <GalleryGrid photos={gallery.manifest.photos} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-cream/10 bg-ink py-12 md:py-16">
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display text-xl font-bold md:text-2xl"
          >
            Want to support our programs?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-transparent px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              View All Programs
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
