/**
 * Walk for Impact Gallery
 * 
 * Placeholder images - replace with actual photos when available.
 * To add a photo: { src: "/path/to/image.jpg", caption?: "Optional caption", date?: "2025-01-15" }
 */

import { GalleryPhoto, getPlaceholderImage } from "../index";

export const walkForImpactPhotos: GalleryPhoto[] = [
  {
    src: getPlaceholderImage("wfi-1", 1200, 800),
    caption: "Elder receiving certificate of honor",
    date: "2025-02-15",
  },
  {
    src: getPlaceholderImage("wfi-2", 1200, 900),
    caption: "Community gathering at the event",
    date: "2025-02-15",
  },
  {
    src: getPlaceholderImage("wfi-3", 1200, 800),
    caption: "Interview session with an elder",
    date: "2025-02-16",
  },
  {
    src: getPlaceholderImage("wfi-4", 1200, 850),
    caption: "Traditional dancers performing",
    date: "2025-02-16",
  },
  {
    src: getPlaceholderImage("wfi-5", 1200, 800),
    date: "2025-02-17",
  },
  {
    src: getPlaceholderImage("wfi-6", 1200, 900),
    caption: "Cash support distribution",
    date: "2025-02-17",
  },
  {
    src: getPlaceholderImage("wfi-7", 1200, 800),
    caption: "Group photograph with elders",
    date: "2025-02-18",
  },
  {
    src: getPlaceholderImage("wfi-8", 1200, 850),
  },
];
