import { Quote } from 'lucide-react';

type Item = { quote: string; name: string; company?: string; role?: string };

type Props = {
  items: Item[];
  dark?: boolean;
};

export default function Testimonials({ items, dark = false }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <figure
          key={i}
          className={`reveal flex h-full flex-col gap-4 rounded-2xl border p-6 shadow-soft ${
            dark ? 'border-white/10 bg-white/5' : 'border-line bg-white'
          }`}
          data-reveal-delay={i * 80}
        >
          <Quote className="h-8 w-8 text-primary-500" />
          <blockquote
            className={`flex-1 text-sm leading-relaxed ${dark ? 'text-navy-100' : 'text-ink'}`}
          >
            “{t.quote}”
          </blockquote>
          <figcaption>
            <div className={`text-sm font-semibold ${dark ? 'text-white' : 'text-navy-800'}`}>
              {t.name}
            </div>
            {(t.role || t.company) && (
              <div className={`text-xs ${dark ? 'text-navy-300' : 'text-muted'}`}>
                {[t.role, t.company].filter(Boolean).join(' · ')}
              </div>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
