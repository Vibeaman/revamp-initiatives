/**
 * Seed for Change 2025 Gallery
 * 
 * Placeholder images - replace with actual photos when available.
 * To add a photo: { src: "/path/to/image.jpg", caption?: "Optional caption", date?: "2025-01-15" }
 */

import { GalleryPhoto, getPlaceholderImage } from "../index";

export const seedForChange2025Photos: GalleryPhoto[] = [
  {
    src: getPlaceholderImage("sfc25-1", 1200, 800),
    caption: "Tailoring workshop session",
    date: "2025-03-10",
  },
  {
    src: getPlaceholderImage("sfc25-2", 1200, 900),
    caption: "Graduates receiving their certificates",
    date: "2025-03-12",
  },
  {
    src: getPlaceholderImage("sfc25-3", 1200, 800),
    caption: "Art therapy session in progress",
    date: "2025-03-14",
  },
  {
    src: getPlaceholderImage("sfc25-4", 1200, 850),
    caption: "Business skills training",
    date: "2025-03-15",
  },
  {
    src: getPlaceholderImage("sfc25-5", 1200, 800),
    caption: "Fashion show showcasing student work",
    date: "2025-03-20",
  },
  {
    src: getPlaceholderImage("sfc25-6", 1200, 900),
  },
  {
    src: getPlaceholderImage("sfc25-7", 1200, 800),
    caption: "Entrepreneurship workshop",
    date: "2025-03-22",
  },
  {
    src: getPlaceholderImage("sfc25-8", 1200, 850),
    caption: "Group photo with founder",
    date: "2025-03-25",
  },
  {
    src: getPlaceholderImage("sfc25-9", 1200, 800),
  },
  {
    src: getPlaceholderImage("sfc25-10", 1200, 900),
    caption: "Sewing machines distribution",
    date: "2025-03-26",
  },
];
