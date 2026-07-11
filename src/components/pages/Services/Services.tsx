import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../../common/SEO';
import PageHero from '../../common/PageHero';
import SectionTitle from '../../common/SectionTitle';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import { services } from '../../../data/services';

export default function Services() {
  useReveal();
  return (
    <>
      <SEO
        title="Services — MAXVY Technologies"
        description="RTL design, verification, physical design, engineering services and consulting from MAXVY Technologies."
        canonical="/services/rtl-design"
      />
      <PageHero
        eyebrow="Services"
        title="Full-stack silicon engineering"
        description="From RTL design and UVM verification to physical design and architecture consulting — MAXVY scales with your roadmap."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        primaryLabel="Talk to us"
        primaryTo="/contact"
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our services"
            title="One partner across the silicon stack"
            description="Engage MAXVY for a single IP, a full turnkey project or ongoing engineering support."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.path}
                  to={s.path}
                  className="reveal group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
                  data-reveal-delay={i * 80}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-50 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-navy-800">{s.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.tagline}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
