import { SITE_URL, SITE_NAME, ORGANIZATION } from '../seo/seoConfig';

/** ---------- Types ---------- */
type Crumb = { name: string; url: string };

/** ---------- Builders ---------- */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    description: ORGANIZATION.description,
    // Do NOT invent address / phone / social profiles.
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function buildBreadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url.startsWith('http') ? c.url : `${SITE_URL}${c.url}`,
    })),
  };
}

/**
 * Product schema for IP / Verification IP pages.
 * IMPORTANT: No price / rating / review / availability unless real data exists.
 * Google allows Product schema without offers, but ONLY as "Product" (not as Offer).
 */
export function buildProductSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand?: string;
  category?: string;
}) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    brand: { '@type': 'Brand', name: opts.brand || SITE_NAME },
  };
  if (opts.image) {
    schema.image = opts.image.startsWith('http') ? opts.image : `${SITE_URL}${opts.image}`;
  }
  if (opts.category) schema.category = opts.category;
  return schema;
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: ORGANIZATION.logo },
    },
  };
  if (opts.image) schema.image = opts.image;
  if (opts.datePublished) schema.datePublished = opts.datePublished;
  if (opts.dateModified) schema.dateModified = opts.dateModified;
  return schema;
}

/** Combine multiple schemas into a single graph object */
export function graph(...schemas: Record<string, any>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map((s) => {
      const { '@context': _ctx, ...rest } = s;
      return rest;
    }),
  };
}