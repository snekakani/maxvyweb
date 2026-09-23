// scripts/prerender.mjs
// Auto-syncs the list of pages to pre-render into package.json → reactSnap.include.
// Runs as a "prebuild" step. Safe to run repeatedly — output is deterministic.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PKG_PATH = path.join(ROOT, 'package.json');

// ---------------------------------------------------------------------------
// 1. Static public routes
// ---------------------------------------------------------------------------
const STATIC_ROUTES = [
  '/',
  '/about/why-us',
  '/about/knowledge-sharing',
  '/about/testimonials',
  '/products',
  '/services',
  '/careers/current-openings',
  '/contact',
];

// ---------------------------------------------------------------------------
// 2. Product detail routes (from productContent.js)
// ---------------------------------------------------------------------------
const productModule = await import(
  pathToFileURL(path.join(ROOT, 'src', 'data', 'products', 'productContent.js')).href
);
const productContent = productModule.productContent || productModule.default || {};

const productRoutes = Object.keys(productContent).map((key) => {
  const item = productContent[key];
  const cat = item.category || 'product';
  const slug = item.slug || key;
  return `/products/${cat}/${slug}`;
});

// ---------------------------------------------------------------------------
// 3. Service detail routes (from services.ts source — parsed safely)
// ---------------------------------------------------------------------------
// We avoid importing TypeScript here (Node can't run .ts directly without a loader),
// so we read the file and extract slugs. Falls back gracefully if not found.
const serviceRoutes = [];
try {
  const servicesSrc = fs.readFileSync(
    path.join(ROOT, 'src', 'data', 'services.ts'),
    'utf8'
  );
  const slugMatches = [...servicesSrc.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/gi)];
  const seen = new Set();
  for (const m of slugMatches) {
    const s = m[1];
    if (!seen.has(s)) {
      seen.add(s);
      serviceRoutes.push(`/services/${s}`);
    }
  }
} catch (e) {
  console.warn('⚠️  Could not read services.ts — service detail routes will be skipped.');
}

// ---------------------------------------------------------------------------
// 4. Combine + dedupe
// ---------------------------------------------------------------------------
const allRoutes = Array.from(
  new Set([...STATIC_ROUTES, ...productRoutes, ...serviceRoutes])
);

// ---------------------------------------------------------------------------
// 5. Write into package.json → reactSnap.include
// ---------------------------------------------------------------------------
const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'));
pkg.reactSnap = pkg.reactSnap || {};
pkg.reactSnap.include = allRoutes;

// Order of keys for readability
const ordered = {
  source: pkg.reactSnap.source ?? 'dist',
  minifyHtml: pkg.reactSnap.minifyHtml ?? { collapseWhitespace: false, removeComments: true },
  puppeteerArgs: pkg.reactSnap.puppeteerArgs ?? ['--no-sandbox', '--disable-setuid-sandbox'],
  skipThirdPartyRequests: pkg.reactSnap.skipThirdPartyRequests ?? true,
  inlineCss: pkg.reactSnap.inlineCss ?? false,
  concurrency: pkg.reactSnap.concurrency ?? 4,
  timeout: pkg.reactSnap.timeout ?? 30000,
  viewport: pkg.reactSnap.viewport ?? { width: 1366, height: 768 },
  include: allRoutes,
  exclude: pkg.reactSnap.exclude ?? ['/about/knowledge-sharing/**', '/careers/job-details/**'],
};
pkg.reactSnap = ordered;

fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

console.log(`✅ Synced ${allRoutes.length} routes into package.json → reactSnap.include`);
console.log(`   • Static:   ${STATIC_ROUTES.length}`);
console.log(`   • Products: ${productRoutes.length}`);
console.log(`   • Services: ${serviceRoutes.length}`);