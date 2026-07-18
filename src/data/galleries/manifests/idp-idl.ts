/**
 * IDP/IDL Camp Durumi Gallery
 * 
 * Placeholder images - replace with actual photos when available.
 * To add a photo: { src: "/path/to/image.jpg", caption?: "Optional caption", date?: "2025-01-15" }
 */

import { GalleryPhoto, getPlaceholderImage } from "../index";

export const idpIdlPhotos: GalleryPhoto[] = [
  {
    src: getPlaceholderImage("idp-1", 1200, 800),
    caption: "Food distribution at Camp Durumi",
    date: "2025-04-05",
  },
  {
    src: getPlaceholderImage("idp-2", 1200, 900),
    caption: "Medical team conducting health checks",
    date: "2025-04-05",
  },
  {
    src: getPlaceholderImage("idp-3", 1200, 800),
    caption: "Cash aid being distributed",
    date: "2025-04-06",
  },
  {
    src: getPlaceholderImage("idp-4", 1200, 850),
    caption: "Children receiving supplies",
    date: "2025-04-06",
  },
  {
    src: getPlaceholderImage("idp-5", 1200, 800),
    caption: "Volunteers sorting donations",
    date: "2025-04-07",
  },
  {
    src: getPlaceholderImage("idp-6", 1200, 900),
    caption: "Women empowerment session",
    date: "2025-04-08",
  },
  {
    src: getPlaceholderImage("idp-7", 1200, 800),
    caption: "Follow-up visit",
    date: "2025-04-15",
  },
];
