import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '../../common/SEO';
import PageHero from '../../common/PageHero';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../common/Card';
import Timeline from '../../common/Timeline';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import { findService } from '../../../data/services';

type Props = {
  slug: string;
};

export default function ServiceDetail({ slug }: Props) {
  useReveal();
  const service = findService(slug);

  if (!service) {
    return (
      <div className="container-page py-32 text-center">
        <p className="text-muted">Service not found.</p>
        <Link to="/services/rtl-design" className="btn-primary mt-4">
          Back to services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services/rtl-design' },
    { label: service.name },
  ];

  return (
    <>
      <SEO
        title={`${service.name} — MAXVY Technologies`}
        description={service.tagline}
        canonical={service.path}
      />
      <PageHero
        eyebrow="Services"
        title={service.name}
        description={service.description}
        crumbs={crumbs}
        primaryLabel="Engage MAXVY"
        primaryTo="/contact"
        secondaryLabel="View all services"
        secondaryTo="/services/rtl-design"
      />

      {/* Overview */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="reveal">
              <SectionTitle
                align="left"
                eyebrow="Overview"
                title="What we do"
                description={service.overview[0]}
              />
              {service.overview.slice(1).map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <aside className="reveal" data-reveal-delay="120">
              <Card className="sticky top-24">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-800">{service.name}</h3>
                <p className="mt-1 text-sm text-muted">{service.tagline}</p>
                <Link to="/contact" className="btn-primary mt-5 w-full">
                  Engage MAXVY <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Process"
            title="How we deliver"
            description="A proven, transparent process that gets you from spec to sign-off on schedule."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div
                key={p.title}
                className="reveal relative rounded-2xl border border-line bg-white p-6 shadow-soft"
                data-reveal-delay={i * 80}
              >
                <span className="text-3xl font-bold text-primary-500">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-navy-800">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Technology stack"
            title="Tools we use"
            description="Industry-standard EDA tools and methodologies, integrated into your flow."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {service.stack.map((s, i) => (
              <span
                key={s}
                className="reveal rounded-full border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-navy-800 shadow-soft"
                data-reveal-delay={i * 40}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Benefits"
            title="Why engage MAXVY"
            description="The engineering and business benefits of working with us."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <div
                key={b}
                className="reveal flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft"
                data-reveal-delay={i * 60}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-ink">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Timeline"
            title="Typical engagement timeline"
            description="Indicative phases and durations — we tailor every engagement to your program."
          />
          <div className="mt-14">
            <Timeline
              items={service.timeline.map((t) => ({
                year: t.phase,
                title: `${t.duration}`,
                description: t.detail,
              }))}
            />
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to engage MAXVY for ${service.name}?`}
        description="Tell us about your program and we will propose the right shape."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="View all services"
        secondaryTo="/services/rtl-design"
      />
    </>
  );
}
