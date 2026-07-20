import { useEffect, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPhoto } from "@/data/galleries";
import { imgurThumb } from "@/utils/imgur";

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ photos, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [showCaption, setShowCaption] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentPhoto = photos[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < photos.length - 1;

  const goPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasPrev) onNavigate(currentIndex - 1);
  }, [hasPrev, currentIndex, onNavigate]);

  const goNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasNext) onNavigate(currentIndex + 1);
  }, [hasNext, currentIndex, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goPrev();
          break;
        case "ArrowRight":
          goNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goPrev, goNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Focus trap
  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (typeof document === "undefined") return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-sm"
        onClick={handleOverlayClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Photo gallery lightbox"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 z-10 rounded-full bg-white/10 p-2 text-cream transition-colors hover:bg-white/20 md:left-6 md:top-6"
          aria-label="Close gallery"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation: Previous */}
        {hasPrev && (
          <button
            onClick={(e) => goPrev(e)}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-cream transition-colors hover:bg-white/20 md:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        )}

        {/* Navigation: Next */}
        {hasNext && (
          <button
            onClick={(e) => goNext(e)}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-cream transition-colors hover:bg-white/20 md:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        )}

        {/* Photo counter */}
        <div className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-cream md:right-6 md:top-6">
          {currentIndex + 1} / {photos.length}
        </div>

        {/* Main image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[85vh] max-w-[95vw] md:max-h-[90vh] md:max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={imgurThumb(currentPhoto.src, "h")}
            alt={currentPhoto.caption || `Photo ${currentIndex + 1}`}
            className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain md:max-h-[90vh] md:max-w-[90vw]"
            draggable={false}
            loading="eager"
            decoding="async"
          />

          {/* Caption bar */}
          {currentPhoto.caption && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showCaption ? 1 : 0, y: showCaption ? 0 : 10 }}
              className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-ink/90 to-transparent p-4 pt-12"
              onClick={(e) => e.stopPropagation()}
            >
              {currentPhoto.caption && (
                <p className="text-center text-sm text-cream md:text-base">{currentPhoto.caption}</p>
              )}
              {currentPhoto.date && (
                <p className="mt-1 text-center text-xs text-cream/70">{currentPhoto.date}</p>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
