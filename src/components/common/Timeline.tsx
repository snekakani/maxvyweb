type Item = { year: string; title: string; description: string };

type Props = {
  items: Item[];
  dark?: boolean;
};

export default function Timeline({ items, dark = false }: Props) {
  return (
    <div className="relative">
      <div
        className={`absolute left-4 top-0 h-full w-px lg:left-1/2 ${
          dark ? 'bg-white/15' : 'bg-line'
        }`}
      />
      <div className="flex flex-col gap-10">
        {items.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <div
              key={i}
              className={`relative flex flex-col gap-3 lg:flex-row lg:items-center ${
                left ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2 lg:px-8">
                <div
                  className={`rounded-2xl border p-5 shadow-soft ${
                    dark ? 'border-white/10 bg-white/5' : 'border-line bg-white'
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                    {item.year}
                  </span>
                  <h3 className={`mt-1 text-lg font-semibold ${dark ? 'text-white' : 'text-navy-800'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-1 text-sm ${dark ? 'text-navy-200' : 'text-muted'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2">
                <span className="block h-3 w-3 rounded-full bg-primary-500 ring-4 ring-primary-500/20" />
              </div>
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
