import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Cpu, Layers, ShieldCheck, Zap, BookOpen } from 'lucide-react';
import SEO from '../../common/SEO';
import PageHero from '../../common/PageHero';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../common/Card';
import Accordion from '../../common/Accordion';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import { findProduct, productCategories } from '../../../data/navigation';
import { faqs } from '../../../data/company';

type Props = {
  name: string;
  tagline: string;
  overview: string[];
  features: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
  benefits: string[];
  faqs?: { q: string; a: string }[];
};

export default function ProductDetail({
  name,
  tagline,
  overview,
  features,
  applications,
  specifications,
  benefits,
  faqs: customFaqs,
}: Props) {
  useReveal();
  const { '*': splat } = useParams();
  const path = `/products/${splat}`;
  const product = findProduct(path);
  const category = productCategories.find((c) => c.id === product?.categoryId);
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    ...(category ? [{ label: category.name, to: category.items[0].path }] : []),
    { label: name },
  ];

  const faqItems = customFaqs ?? faqs.slice(0, 4);

  return (
    <>
      <SEO
        title={`${name} — MAXVY Technologies`}
        description={tagline}
        canonical={path}
      />
      <PageHero
        eyebrow={category?.name ?? 'Product'}
        title={name}
        description={tagline}
        crumbs={crumbs}
        primaryLabel="Request a quote"
        primaryTo="/contact"
        secondaryLabel="View all products"
        secondaryTo="/products"
      />

      {/* Overview */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="reveal">
              <SectionTitle
                align="left"
                eyebrow="Overview"
                title="What it is"
                description={overview[0]}
              />
              {overview.slice(1).map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <aside className="reveal" data-reveal-delay="120">
              <Card className="sticky top-24">
                <h3 className="text-base font-semibold text-navy-800">At a glance</h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {specifications.slice(0, 4).map((s) => (
                    <li key={s.label} className="flex items-center justify-between gap-3">
                      <span className="text-muted">{s.label}</span>
                      <span className="font-medium text-navy-800">{s.value}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-5 w-full">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Features"
            title="Key features"
            description="Capabilities engineered into every MAXVY IP core."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f}
                className="reveal flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft"
                data-reveal-delay={i * 60}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-ink">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Applications"
            title="Where it is used"
            description="MAXVY IP powers chips across data center, mobile, automotive, AI and IoT."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a, i) => (
              <div
                key={a}
                className="reveal rounded-2xl border border-line bg-canvas p-5 text-center"
                data-reveal-delay={i * 60}
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-primary-500">
                  <Layers className="h-6 w-6" />
                </span>
                <p className="mt-3 text-sm font-medium text-navy-800">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Specifications"
            title="Technical specifications"
            description="Key parameters and compliance for this IP."
          />
          <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <table className="w-full text-sm">
              <tbody>
                {specifications.map((s, i) => (
                  <tr
                    key={s.label}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-canvas'}
                  >
                    <th className="w-1/2 px-5 py-3.5 text-left font-medium text-muted">
                      {s.label}
                    </th>
                    <td className="px-5 py-3.5 font-medium text-navy-800">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Architecture diagram placeholder */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Architecture"
            title="Architecture diagram"
            description="Block-level view of the IP and its interfaces."
          />
          <div className="reveal mt-14 flex min-h-[320px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-line bg-canvas p-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary-500 shadow-soft">
              <Cpu className="h-8 w-8" />
            </span>
            <p className="mt-4 text-base font-semibold text-navy-800">
              Architecture diagram placeholder
            </p>
            <p className="mt-1 max-w-md text-sm text-muted">
              A detailed block diagram of {name} — interfaces, clock domains and internal blocks —
              is available on request.
            </p>
            <Link to="/contact" className="btn-ghost mt-5">
              Request diagram <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Benefits"
            title="Why choose this IP"
            description="The engineering and business benefits of choosing MAXVY."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = [Zap, ShieldCheck, BookOpen][i % 3];
              return (
                <div
                  key={b}
                  className="reveal flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft"
                  data-reveal-delay={i * 60}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm leading-relaxed text-ink">{b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Common questions about this IP and how to engage MAXVY."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to evaluate ${name}?`}
        description="Talk to a MAXVY architect about licensing, evaluation and integration."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="View all products"
        secondaryTo="/products"
      />
    </>
  );
}
