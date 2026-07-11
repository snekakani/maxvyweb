import { companyStats } from '../../data/company';

type Props = {
  items?: { value: string; label: string }[];
  dark?: boolean;
};

export default function Stats({ items = companyStats, dark = false }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
      {items.map((s, i) => (
        <div
          key={i}
          className={`reveal rounded-2xl border p-6 text-center ${
            dark ? 'border-white/10 bg-white/5' : 'border-line bg-white'
          }`}
          data-reveal-delay={i * 80}
        >
          <div className="text-3xl font-bold text-primary-500 lg:text-4xl">{s.value}</div>
          <div className={`mt-1 text-sm ${dark ? 'text-navy-200' : 'text-muted'}`}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
