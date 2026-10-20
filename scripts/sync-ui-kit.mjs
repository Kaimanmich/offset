// Copies the built ui-kit into vendor/ui-kit so this repo builds on its own (GitHub Actions has no ../ui-kit).
// Run after changing the component library:  npm run ui-kit
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, '..', 'ui-kit');
const target = join(root, 'vendor', 'ui-kit');

execFileSync('npm', ['run', 'build'], { cwd: source, stdio: 'inherit', shell: true });

rmSync(target, { recursive: true, force: true });
mkdirSync(join(target, 'dist'), { recursive: true });
for (const file of ['ui-kit.js', 'ui-kit.css']) copyFileSync(join(source, 'dist', file), join(target, 'dist', file));
copyFileSync(join(source, 'API.md'), join(target, 'API.md'));

// Only what a consumer needs: entry points and peers, no dev tooling.
const pkg = JSON.parse(readFileSync(join(source, 'package.json'), 'utf8'));
const { name, version, type, description, main, module, style, exports, peerDependencies } = pkg;
writeFileSync(
  join(target, 'package.json'),
  JSON.stringify({ name, private: true, version, type, description, main, module, style, exports, peerDependencies }, null, 2) + '\n',
);
console.log(`ui-kit ${version} → vendor/ui-kit`);
