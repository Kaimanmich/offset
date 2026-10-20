const BASE = 'https://images.pexels.com/photos';
const WIDTHS = [480, 720, 1080, 1440, 1920];

/** Pexels CDN URL for a photo id at a given width (compressed, sRGB). */
export function pexels(id, width = 1080) {
  return `${BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/**
 * Props for a responsive <img>: src + srcSet + sizes. `maxWidth` caps the
 * srcset so small slots never request the largest renditions.
 */
export function pexelsProps({ id, alt }, sizes = '100vw', maxWidth = 1920) {
  const widths = WIDTHS.filter((w) => w <= maxWidth);
  return {
    src: pexels(id, widths[Math.min(2, widths.length - 1)]),
    srcSet: widths.map((w) => `${pexels(id, w)} ${w}w`).join(', '),
    sizes,
    alt,
    decoding: 'async',
  };
}
