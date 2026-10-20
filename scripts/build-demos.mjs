// Rebuilds every concept into public/demos/<slug>/ so it can be scrolled live on /werk/<slug>.
// Relative base (./) so the demos work wherever the site is hosted, also under /<repo>/ on GitHub Pages.
// Run after changing one of the concept projects:  npm run demos
import { execFileSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const projects = resolve(root, '..'); // sibling folders in C:\CLAUDEPROJECTS
const DEMOS = ['house-of-baroque', 'riot-house', 'huisarts-claes', 'groenhof-tuinen'];

for (const slug of DEMOS) {
  const out = join(root, 'public', 'demos', slug);
  console.log(`\n→ ${slug}`);
  execFileSync('npx', ['vite', 'build', '--base=./', '--outDir', out, '--emptyOutDir'], {
    cwd: join(projects, slug),
    stdio: 'inherit',
    shell: true,
  });
  // These belong to each demo's own domain, not to this site.
  for (const file of ['robots.txt', 'sitemap.xml', '_headers']) rmSync(join(out, file), { force: true });
}
