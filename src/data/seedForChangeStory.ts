/**
 * Seed for Change — Story Page Data
 *
 * Powers the /programs/seed-for-change page: a year-by-year "diary + gallery"
 * view of the flagship Seed for Change program.
 *
 * To add photos for a specific day, replace the placeholder image objects
 * inside that day's `photos` array with real Imgur links, e.g.:
 *   { src: "https://i.imgur.com/XXXXXXX.jpg", caption: "Optional caption" }
 *
 * To update the narrative for a year, edit the `narrative` field below.
 * (Currently placeholder copy — swap in real write-ups when ready.)
 */

import { GalleryPhoto, getPlaceholderImage } from "./galleries";

export interface DaySection {
  slug: string;
  label: string;
  photos: GalleryPhoto[];
}

export interface SeedForChangeYear {
  year: string;
  narrative: string;
  days: DaySection[];
}

const DAY_LABELS = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Graduation"];

function placeholderDays(yearSeed: string): DaySection[] {
  return DAY_LABELS.map((label, i) => ({
    slug: label.toLowerCase().replace(/\s+/g, "-"),
    label,
    photos: Array.from({ length: 4 }, (_, p) => ({
      src: getPlaceholderImage(`${yearSeed}-${i}-${p}`, 800, 600),
    })),
  }));
}

export const seedForChangeStory: SeedForChangeYear[] = [
  {
    year: "2025",
    narrative:
      "Placeholder: This is where the 2025 Seed for Change story goes — a short write-up covering what happened this cohort, who was reached, the skills taught, and the milestones hit along the way. Replace this text with the real narrative when it's ready.",
    days: placeholderDays("sfc2025"),
  },
  {
    year: "2026",
    narrative:
      "Placeholder: This is where the 2026 Seed for Change story goes — a short write-up covering what happened this cohort, who was reached, the skills taught, and the milestones hit along the way. Replace this text with the real narrative when it's ready.",
    days: placeholderDays("sfc2026"),
  },
];
