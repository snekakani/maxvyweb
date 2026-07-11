import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Briefcase } from 'lucide-react';
import SEO from '../../common/SEO';
import PageHero from '../../common/PageHero';
import SectionTitle from '../../common/SectionTitle';
import Testimonials from '../../common/Testimonials';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import { findCareerPage } from '../../../data/careers';

type Props = {
  slug: string;
};

export default function CareerDetail({ slug }: Props) {
  useReveal();
  const page = findCareerPage(slug);

  if (!page) {
    return (
      <div className="container-page py-32 text-center">
        <p className="text-muted">Page not found.</p>
        <Link to="/careers/current-openings" className="btn-primary mt-4">
          Back to careers
        </Link>
      </div>
    );
  }

  const Icon = page.icon;
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Careers', to: '/careers/current-openings' },
    { label: page.name },
  ];

  return (
    <>
      <SEO
        title={`${page.name} — MAXVY Technologies`}
        description={page.tagline}
        canonical={page.path}
      />
      <PageHero
        eyebrow="Careers"
        title={page.name}
        description={page.tagline}
        crumbs={crumbs}
        primaryLabel="Apply now"
        primaryTo="/contact"
        secondaryLabel="View openings"
        secondaryTo="/careers/current-openings"
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="reveal">
              <SectionTitle
                align="left"
                eyebrow="About this program"
                title="What it is"
                description={page.hero}
              />
            </div>
            <aside className="reveal" data-reveal-delay="120">
              <div className="sticky top-24 rounded-2xl border border-line bg-canvas p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-800">{page.name}</h3>
                <p className="mt-1 text-sm text-muted">{page.tagline}</p>
                <Link to="/contact" className="btn-primary mt-5 w-full">
                  Apply now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Benefits"
            title="What you get"
            description="The benefits of joining MAXVY through this program."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((b, i) => (
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

      {/* Gallery */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Gallery"
            title="Life at MAXVY"
            description="A glimpse of our offices, labs and people."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.gallery.map((src, i) => (
              <div
                key={i}
                className="reveal group overflow-hidden rounded-2xl border border-line shadow-soft"
                data-reveal-delay={i * 60}
              >
                <img
                  src={src}
                  alt={`MAXVY gallery ${i + 1}`}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Employee testimonials"
            title="What our people say"
            description="Hear from the engineers who work at MAXVY."
          />
          <div className="mt-14">
            <Testimonials items={page.testimonials} />
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Open positions"
            title="Apply today"
            description="Browse current openings and apply with your resume."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="flex flex-col gap-3">
              {page.positions.map((p, i) => (
                <li
                  key={i}
                  className="reveal flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all hover:border-primary-200 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between"
                  data-reveal-delay={i * 60}
                >
                  <div>
                    <h3 className="text-base font-semibold text-navy-800">{p.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {p.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" /> {p.type}
                      </span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary shrink-0">
                    Apply <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to join MAXVY?"
        description="Send us your resume and a short note about what you want to build."
        primaryLabel="Apply now"
        primaryTo="/contact"
        secondaryLabel="View all careers"
        secondaryTo="/careers/current-openings"
      />
    </>
  );
}
