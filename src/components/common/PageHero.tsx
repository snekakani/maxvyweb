import type { ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-800 pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="container-page relative">
        {crumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={crumbs} dark />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-display font-bold text-white">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{description}</p>
          )}
          {(primaryLabel || secondaryLabel) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryLabel && primaryTo && (
                <Button to={primaryTo} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  {primaryLabel}
                </Button>
              )}
              {secondaryLabel && secondaryTo && (
                <Button to={secondaryTo} variant="outline-light" size="lg">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
