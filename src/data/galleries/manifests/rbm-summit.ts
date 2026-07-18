/**
 * RBM Summit Gallery
 * 
 * Placeholder images - replace with actual photos when available.
 * To add a photo: { src: "/path/to/image.jpg", caption?: "Optional caption", date?: "2025-01-15" }
 */

import { GalleryPhoto, getPlaceholderImage } from "../index";

export const rbmSummitPhotos: GalleryPhoto[] = [
  {
    src: getPlaceholderImage("rbm-1", 1200, 800),
    caption: "Summit opening ceremony",
    date: "2025-06-20",
  },
  {
    src: getPlaceholderImage("rbm-2", 1200, 900),
    caption: "Keynote presentation",
    date: "2025-06-20",
  },
  {
    src: getPlaceholderImage("rbm-3", 1200, 800),
    caption: "Breakout session",
    date: "2025-06-21",
  },
  {
    src: getPlaceholderImage("rbm-4", 1200, 850),
    caption: "Workshop on results measurement",
    date: "2025-06-21",
  },
  {
    src: getPlaceholderImage("rbm-5", 1200, 800),
  },
  {
    src: getPlaceholderImage("rbm-6", 1200, 900),
    caption: "Panel discussion",
    date: "2025-06-22",
  },
  {
    src: getPlaceholderImage("rbm-7", 1200, 800),
    caption: "Networking session",
    date: "2025-06-22",
  },
  {
    src: getPlaceholderImage("rbm-8", 1200, 850),
    caption: "Closing remarks",
    date: "2025-06-23",
  },
  {
    src: getPlaceholderImage("rbm-9", 1200, 800),
  },
  {
    src: getPlaceholderImage("rbm-10", 1200, 900),
    caption: "Group photo of participants",
    date: "2025-06-23",
  },
];
