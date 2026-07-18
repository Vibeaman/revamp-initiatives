/**
 * Seed for Change 2026 Gallery
 * 
 * Placeholder images - replace with actual photos when available.
 * To add a photo: { src: "/path/to/image.jpg", caption?: "Optional caption", date?: "2026-01-15" }
 */

import { GalleryPhoto, getPlaceholderImage } from "../index";

export const seedForChange2026Photos: GalleryPhoto[] = [
  {
    src: getPlaceholderImage("sfc26-1", 1200, 800),
    caption: "New cohort orientation",
    date: "2026-01-10",
  },
  {
    src: getPlaceholderImage("sfc26-2", 1200, 900),
    caption: "Skills assessment day",
    date: "2026-01-12",
  },
  {
    src: getPlaceholderImage("sfc26-3", 1200, 800),
    caption: "First tailoring lesson",
    date: "2026-01-15",
  },
  {
    src: getPlaceholderImage("sfc26-4", 1200, 850),
  },
  {
    src: getPlaceholderImage("sfc26-5", 1200, 800),
    caption: "Mentorship session",
    date: "2026-01-20",
  },
  {
    src: getPlaceholderImage("sfc26-6", 1200, 900),
    caption: "Community outreach planning",
    date: "2026-01-22",
  },
];
