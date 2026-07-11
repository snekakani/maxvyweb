import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SectionTitle from '../../common/SectionTitle';
import { newsItems } from '../../../data/company';

export default function LatestNews() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionTitle
            align="left"
            eyebrow="Latest news"
            title="What's happening at MAXVY"
            className="max-w-2xl"
          />
          <Link
            to="/about/knowledge-sharing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            Knowledge sharing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {newsItems.map((n, i) => (
            <article
              key={i}
              className="reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              data-reveal-delay={i * 80}
            >
              <div className="relative overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary-600 backdrop-blur">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(n.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <h3 className="mt-2 text-base font-semibold text-navy-800 group-hover:text-primary-600">
                  {n.title}
                </h3>
                <p className="mt-1 flex-1 text-sm text-muted">{n.excerpt}</p>
                <Link
                  to="/about/knowledge-sharing"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
