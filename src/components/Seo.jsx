import { useEffect } from 'react';
import { STUDIO } from '../data/content.js';

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Per-route document title, description, canonical and Open Graph tags. */
export function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${STUDIO.url}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, path]);

  return null;
}
