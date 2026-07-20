/**
 * Imgur serves resized thumbnail variants of every image by inserting a
 * single-letter size suffix right before the file extension, e.g.:
 *   https://i.imgur.com/abc123.jpeg      -> original (can be several MB)
 *   https://i.imgur.com/abc123m.jpeg     -> 320px version (a few KB)
 *
 * Using these for grid thumbnails/backgrounds dramatically cuts payload
 * size and load time, since we don't need full-resolution images until
 * a photo is opened in the lightbox.
 *
 * Sizes: s=90px square, b=160px square, t=160px, m=320px, l=640px, h=1024px
 */
type ImgurSize = "s" | "b" | "t" | "m" | "l" | "h";

const IMGUR_URL_RE = /^(https?:\/\/i\.imgur\.com\/[a-zA-Z0-9]+)(\.[a-zA-Z]+)$/;

export function imgurThumb(url: string, size: ImgurSize = "m"): string {
  if (!url) return url;
  const match = url.match(IMGUR_URL_RE);
  if (!match) return url; // not an imgur direct-image link, leave untouched
  return `${match[1]}${size}${match[2]}`;
}
