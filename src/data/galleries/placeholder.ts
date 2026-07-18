/**
 * Placeholder image utility
 * 
 * Separated from index.ts to avoid circular dependency with manifest files.
 * Replace placeholder URLs with actual images when available.
 */

const PLACEHOLDER_BASE = "https://picsum.photos/seed";

export function getPlaceholderImage(seed: string, width = 800, height = 600): string {
  return `${PLACEHOLDER_BASE}/${seed}/${width}/${height}`;
}
