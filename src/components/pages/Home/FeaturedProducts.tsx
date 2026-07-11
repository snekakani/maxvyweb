import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../common/SectionTitle';
import { productCategories } from '../../../data/navigation';

export default function FeaturedProducts() {
  const featured = productCategories.slice(0, 6);

  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionTitle
            align="left"
            eyebrow="Featured products"
            title="IP that ships in real silicon"
            description="A portfolio of 50+ IP cores across memory, multimedia, peripheral, I3C, verification and RISC-V — silicon-proven and integration-ready."
            className="max-w-2xl"
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.id}
                to={c.items[0].path}
                className="reveal group flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
                data-reveal-delay={i * 80}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {c.items.length} IP
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-800">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted">{c.description}</p>
                </div>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {c.items.slice(0, 3).map((it) => (
                    <li
                      key={it.path}
                      className="rounded-full bg-canvas px-2.5 py-1 text-xs text-navy-700"
                    >
                      {it.name}
                    </li>
                  ))}
                  {c.items.length > 3 && (
                    <li className="rounded-full bg-canvas px-2.5 py-1 text-xs text-muted">
                      +{c.items.length - 3} more
                    </li>
                  )}
                </ul>
                <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
