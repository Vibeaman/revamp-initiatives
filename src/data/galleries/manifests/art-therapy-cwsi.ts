/**
 * Art Therapy CWSI Gallery
 * 
 * Placeholder images - replace with actual photos when available.
 * To add a photo: { src: "/path/to/image.jpg", caption?: "Optional caption", date?: "2025-01-15" }
 */

import { GalleryPhoto, getPlaceholderImage } from "../index";

export const artTherapyCwsiPhotos: GalleryPhoto[] = [
  {
    src: getPlaceholderImage("at-1", 1200, 800),
    caption: "Creative art session",
    date: "2025-05-10",
  },
  {
    src: getPlaceholderImage("at-2", 1200, 900),
    caption: "Group therapy activity",
    date: "2025-05-10",
  },
  {
    src: getPlaceholderImage("at-3", 1200, 800),
    caption: "Art exhibition opening",
    date: "2025-05-12",
  },
  {
    src: getPlaceholderImage("at-4", 1200, 850),
    caption: "Participants showcasing their work",
    date: "2025-05-14",
  },
  {
    src: getPlaceholderImage("at-5", 1200, 800),
    caption: "Therapy garden session",
    date: "2025-05-15",
  },
  {
    src: getPlaceholderImage("at-6", 1200, 900),
    caption: "Certificate presentation",
    date: "2025-05-18",
  },
];
