// Runs after `vite build`. Makes dist/ work on static hosts without rewrite rules (GitHub Pages):
// every route gets its own HTML entry, unknown paths fall back to 404.html, and the sitemap
// and robots.txt point at the address the site is actually served from.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const site = siteUrl();

// Concept slugs straight from the content file (it reads import.meta.env, so it can't be imported here).
const content = readFileSync(join(root, 'src', 'data', 'content.js'), 'utf8');
const PROJECTS = [...content.slice(content.indexOf('export const PROJECTS')).matchAll(/slug: '([a-z0-9-]+)'/g)].map((m) => m[1]);
if (PROJECTS.length === 0) throw new Error('postbuild: no concept slugs found in content.js');

const ROUTES = [
  { path: '/', priority: '1.0' },
  { path: '/diensten', priority: '0.9' },
  { path: '/contact', priority: '0.8' },
  { path: '/projecten', priority: '0.7' },
  ...PROJECTS.map((slug) => ({ path: `/werk/${slug}`, priority: '0.6' })),
  { path: '/privacy', priority: '0.2' },
  { path: '/cookies', priority: '0.2' },
  { path: '/voorwaarden', priority: '0.2' },
];

// /diensten → diensten.html: GitHub Pages serves extensionless URLs from the matching .html file,
// so deep links answer 200 with the app instead of a 404.
const index = join(dist, 'index.html');
for (const { path } of ROUTES) {
  if (path === '/') continue;
  const file = join(dist, `${path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  copyFileSync(index, file);
}
copyFileSync(index, join(dist, '404.html'));
writeFileSync(join(dist, '.nojekyll'), '');

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(({ path, priority }) => `  <url><loc>${site}${path}</loc><priority>${priority}</priority></url>`).join('\n')}
</urlset>
`,
);
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);

console.log(`postbuild: ${ROUTES.length} routes, 404.html, sitemap for ${site}`);

function siteUrl() {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL.replace(/\/+$/, '');
  const env = readFileSync(join(root, '.env'), 'utf8').match(/^VITE_SITE_URL=(.+)$/m);
  return env[1].trim().replace(/\/+$/, '');
}
