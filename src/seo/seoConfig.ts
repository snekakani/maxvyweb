/**
 * Centralized SEO constants.
 * Update SITE_URL / SITE_NAME here — used by SEO component,
 * sitemap generation, structured data, and OG defaults.
 */

export const SITE_URL = 'https://www.maxvytech.com';
export const SITE_NAME = 'MAXVY Technologies';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;
export const DEFAULT_TWITTER_HANDLE = '@maxvytech'; // update if you have an actual handle

export const ORGANIZATION = {
  name: 'Maxvy Technologies Pvt Ltd',
  legalName: 'Maxvy Technologies Pvt Ltd',
  url: SITE_URL,
  logo: `${SITE_URL}/images/maxvy-logo.png`,
  description:
    'MAXVY Technologies is a Design and Verification IP company delivering silicon-proven RTL IP, Verification IP, and DDR5, MIPI, and RISC-V solutions.',
  // NOTE: Do NOT add address / phone / social profiles unless they exist publicly.
};

/** Public (indexable) top-level categories under /products */
export const PRODUCT_CATEGORIES = [
  'ddr5',
  'multimedia',
  'peripheral',
  'mipi-i3c',
  'i3c-support',
  'verification-ip',
  'maxvy-integration',
  'other-rtl-ip',
  'riscv',
  'embedded',
  'maxvy-fpga',
] as const;

/** Static public routes that should appear in sitemap.xml */
export const STATIC_ROUTES: { path: string; changefreq: string; priority: number }[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/about/team', changefreq: 'monthly', priority: 0.6 },
  { path: '/about/careers', changefreq: 'weekly', priority: 0.6 },
  { path: '/about/testimonials', changefreq: 'monthly', priority: 0.6 },
  { path: '/products', changefreq: 'weekly', priority: 0.9 },
  { path: '/services', changefreq: 'monthly', priority: 0.8 },
  { path: '/contact', changefreq: 'yearly', priority: 0.7 },
  { path: '/blog', changefreq: 'weekly', priority: 0.7 },
];

/** Prefixes / paths that should be excluded from sitemap and robots should not index */
export const PRIVATE_ROUTE_PREFIXES = [
  '/admin',
  '/login',
  '/signup',
  '/register',
  '/dashboard',
  '/account',
  '/private',
  '/api',
];