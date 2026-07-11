import SEO from '../../common/SEO';
import PageHero from '../../common/PageHero';
import SectionTitle from '../../common/SectionTitle';
import Stats from '../../common/Stats';
import Timeline from '../../common/Timeline';
import CTA from '../../common/CTA';
import Card from '../../common/Card';
import { useReveal } from '../../../hooks/useReveal';
import { timeline, leadership, achievements, coreValues } from '../../../data/company';
import { Target, Eye, Heart } from 'lucide-react';

export default function CompanyOverview() {
  useReveal();
  return (
    <>
      <SEO
        title="Company Overview — MAXVY Technologies"
        description="MAXVY Technologies is a semiconductor IP company delivering silicon-proven IP and engineering services to chipmakers worldwide."
        canonical="/about/company-overview"
      />
      <PageHero
        eyebrow="About MAXVY"
        title="Engineering the silicon that powers the world"
        description="From a verification consultancy in Tirunelveli to a global semiconductor IP company — MAXVY builds IP and engineering that ships in real silicon."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about/company-overview' }, { label: 'Company Overview' }]}
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="View products"
        secondaryTo="/products"
      />

      {/* Mission / Vision / Values */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                Icon: Target,
                title: 'Mission',
                body: 'Deliver silicon-proven IP and engineering that enables our customers to ship first-pass-success silicon, on time, every time.',
              },
              {
                Icon: Eye,
                title: 'Vision',
                body: 'Be the most trusted semiconductor IP partner for the world\'s leading chipmakers — from edge to cloud.',
              },
              {
                Icon: Heart,
                title: 'Values',
                body: 'Depth over noise. Customer obsession. Ownership. Kindness. We are rigorous about the work and kind to each other.',
              },
            ].map(({ Icon, title, body }, i) => (
              <Card key={title} className="reveal" hover>
                <div data-reveal-delay={i * 80}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy-800">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-canvas py-16 lg:py-20">
        <div className="container-page">
          <Stats />
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our journey"
            title="From Tirunelveli to the world"
            description="A short history of MAXVY — from a verification consultancy to a global semiconductor IP company."
          />
          <div className="mt-16">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Core values"
            title="What we believe"
            description="The principles that shape how we hire, how we work and how we ship."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="reveal rounded-2xl border border-line bg-white p-6 shadow-soft"
                data-reveal-delay={i * 80}
              >
                <span className="text-3xl font-bold text-primary-500">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-navy-800">{v.title}</h3>
                <p className="mt-1 text-sm text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Leadership"
            title="Senior architects who ship"
            description="MAXVY leadership has taped out production silicon across the world's leading foundries."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l, i) => (
              <div
                key={l.name}
                className="reveal group rounded-2xl border border-line bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                data-reveal-delay={i * 80}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy-800 text-2xl font-bold text-primary-500">
                  {l.name.split(' ').map((w) => w[0]).join('')}
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-800">{l.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                  {l.role}
                </p>
                <p className="mt-2 text-sm text-muted">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Achievements"
            title="Milestones we are proud of"
            description="Numbers that reflect the trust our customers place in MAXVY."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <div
                key={a.title}
                className="reveal rounded-2xl border border-line bg-white p-6 shadow-soft"
                data-reveal-delay={i * 80}
              >
                <h3 className="text-base font-semibold text-navy-800">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
