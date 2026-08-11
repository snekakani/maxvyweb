import Button from './Button';
import { ArrowRight } from 'lucide-react';

type Props = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CTA({
  title = 'Ready to build your next silicon?',
  description = 'Talk to a MAXVY architect about your IP, verification or physical design needs.',
  primaryLabel = 'Contact us',
  primaryTo = '/contact',
  secondaryLabel = 'Explore products',
  secondaryTo = '/products',
}: Props) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-navy-800 px-6 py-16 text-center shadow-lift sm:px-12 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
          {/* Updated "primary-500" to "#e34115" in the glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e34115]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#e34115]/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-hero font-bold text-white">{title}</h2>
            <p className="mt-5 text-lg text-navy-200">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {/* Updated Button to use #e34115 as its primary color */}
              <Button 
                to={primaryTo} 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight className="h-4 w-4" />}
                className="!bg-[#e34115] hover:!bg-[#c43a12]"
              >
                {primaryLabel}
              </Button>
              <Button to={secondaryTo} variant="outline-light" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}