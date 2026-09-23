import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../../seo/seoConfig';

type SEOProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  noIndex?: boolean;
  /** Optional JSON-LD object(s) to inject for this page */
  jsonLd?: Record<string, any> | Record<string, any>[];
};

/** Google truncates page titles around 60 chars. Trim safely. */
const TITLE_MAX = 60;
/** Meta descriptions: keep within 155 chars; SEO team targets 50–60. */
const DESCRIPTION_MAX = 155;

/**
 * Truncate a string to a maximum length, appending an ellipsis if truncated.
 * Trims at a word boundary when possible.
 */
function truncate(text: string, max: number): string {
  if (!text) return '';
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

/**
 * Absolute URL helper.
 * - Leaves absolute http(s) URLs untouched.
 * - Normalizes trailing slashes for paths (except root).
 */
function toAbsoluteUrl(url?: string): string | undefined {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;

  const path = url.startsWith('/') ? url : `/${url}`;
  const normalized = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  return `${SITE_URL}${normalized}`;
}

/**
 * SEO component — powered by react-helmet-async.
 *
 * Migration note:
 * Previously this component imperatively wrote to document.head via
 * useEffect. It now uses <Helmet> which renders on both the client
 * AND during react-snap pre-rendering, so all meta tags become part
 * of the static HTML at build time. This fixes:
 *   - Social media crawlers (Facebook / LinkedIn / WhatsApp) that
 *     don't execute JavaScript.
 *   - LCP: meta tags are present in first-byte HTML.
 *   - Google indexing: no dependency on runtime JS.
 *
 * Public API is unchanged — all existing call sites keep working.
 */
export default function SEO({
  title,
  description,
  keywords,
  image,
  canonical,
  type = 'website',
  noIndex = false,
  jsonLd,
}: SEOProps) {
  const safeTitle = truncate(title, TITLE_MAX);
  const safeDescription = description ? truncate(description, DESCRIPTION_MAX) : undefined;
  const absoluteImage = toAbsoluteUrl(image) || DEFAULT_OG_IMAGE;
  const absoluteCanonical = canonical && !noIndex ? toAbsoluteUrl(canonical) : undefined;
  const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet prioritizeSeoTags>
      <title>{safeTitle}</title>

      {safeDescription && <meta name="description" content={safeDescription} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />

      {absoluteCanonical && <link rel="canonical" href={absoluteCanonical} />}

      {/* ---- Open Graph ---- */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type === 'product' ? 'website' : type} />
      {safeDescription && <meta property="og:description" content={safeDescription} />}
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {absoluteCanonical && <meta property="og:url" content={absoluteCanonical} />}

      {/* ---- Twitter / X ---- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      {safeDescription && <meta name="twitter:description" content={safeDescription} />}
      <meta name="twitter:image" content={absoluteImage} />

      {/* ---- JSON-LD ---- */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

// Keep named helpers for backward compatibility (some imports may use them).
export { toAbsoluteUrl };