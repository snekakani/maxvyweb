import { partners } from '../../../data/company';

export default function Partners() {
  return (
    <section className="border-b border-line bg-white py-12">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">
          Trusted by leading semiconductor companies and standards bodies
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <span
              key={p}
              className="font-heading text-lg font-bold text-navy-300 transition-colors hover:text-navy-800 lg:text-xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
