/**
 * Gallery Registry
 * 
 * Central source of truth for all program galleries.
 * To add a new program gallery:
 * 1. Add a manifest file in src/data/galleries/manifests/[slug].ts
 * 2. Import and add to MANIFESTS below
 * 3. No route or component changes needed!
 */

import { walkForImpactPhotos } from "./manifests/walk-for-impact";
import { seedForChange2025Photos } from "./manifests/seed-for-change-2025";
import { seedForChange2026Photos } from "./manifests/seed-for-change-2026";
import { idpPhotos } from "./manifests/idp";
import { artTherapyCwsiPhotos } from "./manifests/art-therapy-cwsi";
import { rbmSummitPhotos } from "./manifests/rbm-summit";
import { kreativeCampusPhotos } from "./manifests/kreative-campus";
import { slumOutreachPhotos } from "./manifests/slum-outreach";

export interface GalleryPhoto {
  src: string;
  caption?: string;
  date?: string;
}

export interface GalleryManifest {
  photos: GalleryPhoto[];
}

export interface GalleryProgram {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  manifest: GalleryManifest;
}

// Import placeholder utility for local use AND re-export it
import { getPlaceholderImage } from "./placeholder";
export { getPlaceholderImage };

// Manifests registry - import new program manifests here
const MANIFESTS: Record<string, GalleryManifest> = {
  "walk-for-impact": { photos: walkForImpactPhotos },
  "seed-for-change-2025": { photos: seedForChange2025Photos },
  "seed-for-change-2026": { photos: seedForChange2026Photos },
  "idp": { photos: idpPhotos },
  "art-therapy-cwsi": { photos: artTherapyCwsiPhotos },
  "rbm-summit": { photos: rbmSummitPhotos },
  "kreative-campus": { photos: kreativeCampusPhotos },
  "slum-outreach": { photos: slumOutreachPhotos },
};

// Metadata registry - update title, description, cover image here
export const GALLERY_PROGRAMS: Record<string, Omit<GalleryProgram, "manifest">> = {
  "walk-for-impact": {
    slug: "walk-for-impact",
    title: "Walk for Impact",
    description: "Intergenerational storytelling event honoring elders aged 60+ with interviews and cash support.",
    coverImage: "https://i.imgur.com/qjTnH9s.jpg",
  },
  "seed-for-change-2025": {
    slug: "seed-for-change-2025",
    title: "Seed for Change 2025",
    description: "Women's empowerment and art therapy program - Year 2025 cohort.",
    coverImage: "https://i.imgur.com/E71gJ5G.jpg",
  },
  "seed-for-change-2026": {
    slug: "seed-for-change-2026",
    title: "Seed for Change 2026",
    description: "Women's empowerment and art therapy program - Year 2026 cohort.",
    coverImage: "https://i.imgur.com/qyxFGeu.jpg",
  },
  "idp": {
    slug: "idp",
    title: "IDP Camp Durumi",
    description: "Supporting displaced persons at IDP Camp Durumi with essential supplies, medical care, and financial assistance.",
    coverImage: "https://i.imgur.com/s76njIe.jpg",
  },
  "art-therapy-cwsi": {
    slug: "art-therapy-cwsi",
    title: "Art Therapy CWSI",
    description: "Creative wellness sessions at the Centre for Women Studies and Intervention.",
    coverImage: "https://i.imgur.com/PhW4v3M.jpg",
  },
  "rbm-summit": {
    slug: "rbm-summit",
    title: "RBM Summit",
    description: "Results-Based Management Summit - strategic planning and capacity building.",
    coverImage: "https://i.imgur.com/64wddjb.jpg",
  },
  "kreative-campus": {
    slug: "kreative-campus",
    title: "Kreative Campus",
    description: "Skill-building creative training for youth and women.",
    coverImage: "https://i.imgur.com/TiCPunL.jpg",
  },
  "slum-outreach": {
    slug: "slum-outreach",
    title: "Slum Outreach",
    description: "Direct intervention in underserved communities.",
    coverImage: "https://i.imgur.com/iCkCfHr.jpg",
  },
};

// Get full gallery data (metadata + photos)
export function getGallery(slug: string): GalleryProgram | null {
  const meta = GALLERY_PROGRAMS[slug];
  const manifest = MANIFESTS[slug];
  
  if (!meta || !manifest) return null;
  
  return {
    ...meta,
    manifest,
  };
}

// Get all program slugs
export function getAllGallerySlugs(): string[] {
  return Object.keys(GALLERY_PROGRAMS);
}

// Check if a gallery exists
export function galleryExists(slug: string): boolean {
  return slug in GALLERY_PROGRAMS && slug in MANIFESTS;
}

// Get gallery metadata (without manifest)
export function getGalleryMeta(slug: string): Omit<GalleryProgram, "manifest"> | null {
  return GALLERY_PROGRAMS[slug] ?? null;
}

// Get all galleries with their metadata (for listing pages)
export function getAllGalleries(): Omit<GalleryProgram, "manifest">[] {
  return Object.values(GALLERY_PROGRAMS);
}
