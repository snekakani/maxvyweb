// scripts/verify-prerender.mjs
// Confirms that pre-rendered HTML in dist/ contains the expected SEO tags.
// Fails (exit 1) if any page is missing <title> or <link rel="canonical">.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PKG = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const routes = (PKG.reactSnap && PKG.reactSnap.include) || [];

if (!fs.existsSync(DIST)) {
  console.error('❌ dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

if (routes.length === 0) {
  console.warn('⚠️  No routes in package.json → reactSnap.include. Nothing to verify.');
  process.exit(0);
}

function routeToFile(route) {
  const clean = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`;
  return path.join(DIST, clean);
}

let pass = 0;
let fail = 0;

for (const route of routes) {
  const file = routeToFile(route);
  if (!fs.existsSync(file)) {
    console.log(`❌ MISSING: ${route}  (expected ${path.relative(ROOT, file)})`);
    fail++;
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  const hasTitle = /<title>[^<]+<\/title>/i.test(html);
  const hasCanonical = /<link[^>]+rel=["']canonical["'][^>]*>/i.test(html);
  const hasJsonLd = /<script[^>]+type=["']application\/ld\+json["']/i.test(html);
  const hasOgImage = /<meta[^>]+property=["']og:image["'][^>]*>/i.test(html);

  if (hasTitle && hasCanonical) {
    console.log(
      `✅ ${route}  [title ✓, canonical ✓, jsonLd ${hasJsonLd ? '✓' : '—'}, og:image ${hasOgImage ? '✓' : '—'}]`
    );
    pass++;
  } else {
    console.log(
      `⚠️  ${route}  [title ${hasTitle ? '✓' : '✗'}, canonical ${hasCanonical ? '✓' : '✗'}]`
    );
    fail++;
  }
}

console.log('');
console.log(`Result: ${pass} passed, ${fail} failed, ${routes.length} total`);

if (fail > 0) process.exit(1);