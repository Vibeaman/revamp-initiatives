/**
 * Seed for Change — Story Page Data
 *
 * Powers the /programs/seed-for-change page: a year-by-year "diary + gallery"
 * view of the flagship Seed for Change program. Real photos are pulled
 * straight from the gallery manifests used across the site.
 *
 * To update the narrative for a year, edit the `narrative` field below.
 */

import { GalleryPhoto } from "./galleries";
import { seedForChange2025Photos } from "./galleries/manifests/seed-for-change-2025";
import { seedForChange2026Photos } from "./galleries/manifests/seed-for-change-2026";

export interface SeedForChangeYear {
  year: string;
  narrative: string;
  photos: GalleryPhoto[];
}

export const seedForChangeStory: SeedForChangeYear[] = [
  {
    year: "2025",
    narrative:
      "Placeholder: This is where the 2025 Seed for Change story goes — a short write-up covering what happened this cohort, who was reached, the skills taught, and the milestones hit along the way. Replace this text with the real narrative when it's ready.",
    photos: seedForChange2025Photos,
  },
  {
    year: "2026",
    narrative:
      "Placeholder: This is where the 2026 Seed for Change story goes — a short write-up covering what happened this cohort, who was reached, the skills taught, and the milestones hit along the way. Replace this text with the real narrative when it's ready.",
    photos: seedForChange2026Photos,
  },
];
