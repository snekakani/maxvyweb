import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Item = { q: string; a: string };

type Props = {
  items: Item[];
  className?: string;
};

export default function Accordion({ items, className = '' }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              isOpen ? 'border-primary-200 shadow-soft' : 'border-line'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-navy-800">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
