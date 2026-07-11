import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, ArrowRight } from 'lucide-react';
import { productCategories } from '../../data/navigation';
import { services } from '../../data/services';
import { careerPages } from '../../data/careers';
import LanguageSelector from './LanguageSelector';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const [expanded, setExpanded] = useState<string | null>('products');

  const toggle = (id: string) => setExpanded((cur) => (cur === id ? null : id));

  return (
    <div
      className={`fixed inset-0 z-[70] lg:hidden ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div
        className={`absolute inset-0 bg-navy-900/40 backdrop-blur-sm transition-opacity ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-[88vw] max-w-md overflow-y-auto bg-white shadow-lift transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-heading text-lg font-bold text-navy-800">Menu</span>
          <button onClick={onClose} className="rounded-full p-1.5 text-ink hover:bg-navy-50">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-3">
          <NavItem to="/" label="Home" onClose={onClose} />

          {/* Products accordion */}
          <AccordionRow
            label="Products"
            expanded={expanded === 'products'}
            onToggle={() => toggle('products')}
          >
            <div className="flex flex-col">
              {productCategories.map((c) => (
                <SubAccordion
                  key={c.id}
                  label={c.name}
                  items={c.items.map((i) => ({ label: i.name, to: i.path }))}
                  onClose={onClose}
                />
              ))}
              <Link
                to="/products"
                onClick={onClose}
                className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-primary-600"
              >
                View all products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AccordionRow>

          {/* Services accordion */}
          <AccordionRow
            label="Services"
            expanded={expanded === 'services'}
            onToggle={() => toggle('services')}
          >
            <div className="flex flex-col">
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={onClose}
                  className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-canvas"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </AccordionRow>

          {/* About accordion */}
          <AccordionRow
            label="About"
            expanded={expanded === 'about'}
            onToggle={() => toggle('about')}
          >
            <div className="flex flex-col">
              {[
                // { label: 'Company Overview', to: '/about/company-overview' },
                { label: 'Why Us', to: '/about/why-us' },
                { label: 'Knowledge Sharing', to: '/about/knowledge-sharing' },
                { label: 'Testimonials', to: '/about/testimonials' },
              ].map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  onClick={onClose}
                  className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-canvas"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </AccordionRow>

          {/* Careers accordion */}
          <AccordionRow
            label="Careers"
            expanded={expanded === 'careers'}
            onToggle={() => toggle('careers')}
          >
            <div className="flex flex-col">
              {careerPages.map((c) => (
                <Link
                  key={c.path}
                  to={c.path}
                  onClick={onClose}
                  className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-canvas"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </AccordionRow>

          <NavItem to="/contact" label="Contact" onClose={onClose} />
        </nav>

        <div className="flex items-center justify-between border-t border-line px-5 py-4">
          <LanguageSelector />
          <Link
            to="/contact"
            onClick={onClose}
            className="btn-primary"
          >
            Get in touch
          </Link>
        </div>
      </aside>
    </div>
  );
}

function NavItem({ to, label, onClose }: { to: string; label: string; onClose: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="rounded-lg px-3 py-3 text-base font-medium text-navy-800 hover:bg-canvas"
    >
      {label}
    </Link>
  );
}

function AccordionRow({
  label,
  expanded,
  onToggle,
  children,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-navy-800"
        aria-expanded={expanded}
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 text-primary-500 transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function SubAccordion({
  label,
  items,
  onClose,
}: {
  label: string;
  items: { label: string; to: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-ink"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col pl-5">
            {items.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={onClose}
                className="rounded-md px-3 py-1.5 text-xs text-muted hover:bg-canvas hover:text-primary-600"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
