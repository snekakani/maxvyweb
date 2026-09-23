// scripts/generate-sitemap.mjs
// Auto-generates public/sitemap.xml from productContent.js + static routes.
// Runs via "prebuild" script on every Vercel build.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SITE_URL = 'https://www.maxvytech.com';

// ---- Static public routes (keep in sync with seoConfig.ts STATIC_ROUTES) ----
const STATIC_ROUTES = [
  { path: '/',                 changefreq: 'weekly',  priority: '1.0' },
  { path: '/about',            changefreq: 'monthly', priority: '0.8' },
  { path: '/about/team',       changefreq: 'monthly', priority: '0.6' },
  { path: '/about/careers',    changefreq: 'weekly',  priority: '0.6' },
  { path: '/about/testimonials', changefreq: 'monthly', priority: '0.6' },
  { path: '/products',         changefreq: 'weekly',  priority: '0.9' },
  { path: '/services',         changefreq: 'monthly', priority: '0.8' },
  { path: '/contact',          changefreq: 'yearly',  priority: '0.7' },
  { path: '/blog',             changefreq: 'weekly',  priority: '0.7' },
];

// ---- Load productContent.js dynamically ----
const productModule = await import(
  pathToFileURL(path.join(ROOT, 'src', 'data', 'products', 'productContent.js')).href
);
const productContent = productModule.productContent || productModule.default || {};

// ---- Build URL list ----
const urls = [];

for (const r of STATIC_ROUTES) {
  urls.push({
    loc: `${SITE_URL}${r.path === '/' ? '/' : r.path}`,
    changefreq: r.changefreq,
    priority: r.priority,
  });
}

for (const key of Object.keys(productContent)) {
  const item = productContent[key];
  const cat = item.category || 'product';
  const slug = item.slug || key;
  urls.push({
    loc: `${SITE_URL}/products/${cat}/${slug}`,
    changefreq: 'monthly',
    priority: '0.9',
  });
}

// ---- Render XML ----
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

// ---- Write to public/sitemap.xml ----
const outPath = path.join(ROOT, 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`✅ sitemap.xml generated — ${urls.length} URLs → ${outPath}`);