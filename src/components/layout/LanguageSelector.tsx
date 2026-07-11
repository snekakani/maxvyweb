import { useEffect, useRef, useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { languages } from '../../data/company';

export default function LanguageSelector({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors ${
          dark
            ? 'text-navy-200 hover:bg-white/10 hover:text-white'
            : 'text-navy-800 hover:bg-navy-50'
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{active.label}</span>
        <span className="sm:hidden">{active.code}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lift animate-scale-in">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setActive(l);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-navy-50 ${
                active.code === l.code ? 'text-primary-600 font-semibold' : 'text-ink'
              }`}
            >
              <span>{l.label}</span>
              <span className="text-xs text-muted">{l.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
