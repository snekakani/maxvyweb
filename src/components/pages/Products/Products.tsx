import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import SEO from '../../common/SEO';
import PageHero from '../../common/PageHero';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import { productCategories } from '../../../data/navigation';

export default function Products() {
  useReveal();
  const [q, setQ] = useState('');
  const [activeCat, setActiveCat] = useState<string>('all');

  const filtered = productCategories
    .filter((c) => activeCat === 'all' || c.id === activeCat)
    .map((c) => ({
      ...c,
      items: c.items.filter((i) => i.name.toLowerCase().includes(q.toLowerCase())),
    }))
    .filter((c) => c.items.length > 0);

  return (
    <>
      <SEO
        title="Products — MAXVY Technologies"
        description="Explore MAXVY's portfolio of 50+ silicon-proven IP cores across DDR5, MIPI, I3C, verification, RISC-V and more."
        canonical="/products"
      />
      <PageHero
        eyebrow="Products"
        title="Silicon-proven IP portfolio"
        description="50+ IP cores across memory, multimedia, peripheral, I3C, verification, RISC-V and chiplet — silicon-proven and integration-ready."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
        primaryLabel="Talk to an architect"
        primaryTo="/contact"
      />

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-b border-line bg-white/85 backdrop-blur-xl lg:top-20">
        <div className="container-page py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-1.5">
              <FilterChip
                label="All"
                active={activeCat === 'all'}
                onClick={() => setActiveCat('all')}
              />
              {productCategories.map((c) => (
                <FilterChip
                  key={c.id}
                  label={c.name}
                  active={activeCat === c.id}
                  onClick={() => setActiveCat(c.id)}
                />
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search IP..."
                className="w-full rounded-full border border-line bg-white py-2 pl-9 pr-4 text-sm outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-page">
          {filtered.length === 0 && (
            <p className="text-center text-muted">No products match “{q}”.</p>
          )}
          {filtered.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.id} className="mb-14 last:mb-0">
                <div className="reveal mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-primary-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-navy-800">{c.name}</h2>
                    <p className="text-sm text-muted">{c.description}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {c.items.map((item, i) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="reveal group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
                      data-reveal-delay={i * 60}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3 text-base font-semibold text-navy-800 group-hover:text-primary-600">
                        {item.name}
                      </h3>
                      <p className="mt-1 flex-1 text-sm text-muted">{item.blurb}</p>
                      <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                        View details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active ? 'bg-primary-500 text-white' : 'bg-canvas text-navy-700 hover:bg-navy-100'
      }`}
    >
      {label}
    </button>
  );
}
