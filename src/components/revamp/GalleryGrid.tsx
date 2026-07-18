import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryPhoto } from "@/data/galleries";
import { Lightbox } from "./Lightbox";
import { Grid3X3, Expand } from "lucide-react";

interface GalleryGridProps {
  photos: GalleryPhoto[];
}

export function GalleryGrid({ photos }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {photos.map((photo, index) => (
          <motion.button
            key={`${photo.src}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={(e) => {
              e.preventDefault();
              openLightbox(index);
            }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-cream/5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            aria-label={`View photo${photo.caption ? `: ${photo.caption}` : ""}`}
          >
            <img
              src={photo.src}
              alt={photo.caption || `Photo ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40">
              <Expand className="h-6 w-6 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            {/* Caption preview on hover */}
            {photo.caption && (
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/80 to-transparent p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="line-clamp-2 text-xs text-cream">{photo.caption}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Photo count indicator */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-cream/60">
        <Grid3X3 className="h-4 w-4" />
        <span>{photos.length} photos</span>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
