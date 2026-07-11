import { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../../data/navigation';
import { services } from '../../data/services';

type Result = { label: string; sub: string; to: string };

export default function SearchBar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const results: Result[] = q
    ? [
        ...allProducts
          .filter((p) => p.name.toLowerCase().includes(q.toLowerCase()))
          .slice(0, 6)
          .map((p) => ({ label: p.name, sub: p.category, to: p.path })),
        ...services
          .filter((s) => s.name.toLowerCase().includes(q.toLowerCase()))
          .slice(0, 3)
          .map((s) => ({ label: s.name, sub: 'Service', to: s.path })),
      ]
    : [];

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-navy-900/40 px-4 pt-24 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-white shadow-lift animate-scale-in">
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <Search className="h-5 w-5 text-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, services, IP..."
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted"
          />
          <button onClick={onClose} className="rounded-full p-1 text-muted hover:bg-navy-50">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {q && results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted">No results for “{q}”.</p>
          )}
          {!q && (
            <p className="px-3 py-6 text-center text-sm text-muted">
              Try “DDR5”, “MIPI”, “I3C”, “Verification”...
            </p>
          )}
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                navigate(r.to);
                onClose();
              }}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-navy-50"
            >
              <span>
                <span className="block text-sm font-medium text-ink">{r.label}</span>
                <span className="block text-xs text-muted">{r.sub}</span>
              </span>
              <Search className="h-4 w-4 text-muted" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
