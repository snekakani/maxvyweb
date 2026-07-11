import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Crumb = { label: string; to?: string };

type Props = {
  items: Crumb[];
  dark?: boolean;
};

export default function Breadcrumb({ items, dark = false }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.to && !last ? (
              <Link
                to={item.to}
                className={`transition-colors hover:text-primary-500 ${
                  dark ? 'text-navy-200' : 'text-muted'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={dark ? 'text-white font-medium' : 'text-ink font-medium'}>
                {item.label}
              </span>
            )}
            {!last && (
              <ChevronRight className={`h-3.5 w-3.5 ${dark ? 'text-navy-300' : 'text-line'}`} />
            )}
          </span>
        );
      })}
    </nav>
  );
}
