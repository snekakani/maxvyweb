import SectionTitle from '../../common/SectionTitle';
import { industries } from '../../../data/company';
import { Server, Smartphone, Car, Cpu, Network, Wifi } from 'lucide-react';

const iconMap: Record<string, typeof Server> = {
  server: Server,
  smartphone: Smartphone,
  car: Car,
  cpu: Cpu,
  network: Network,
  wifi: Wifi,
};

export default function IndustriesServed() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <SectionTitle
          eyebrow="Industries served"
          title="IP for every silicon market"
          description="MAXVY IP powers chips across data center, mobile, automotive, AI, networking and IoT — wherever performance and reliability matter most."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? Server;
            return (
              <div
                key={ind.name}
                className="reveal group flex items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
                data-reveal-delay={i * 80}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy-800">{ind.name}</h3>
                  <p className="mt-1 text-sm text-muted">{ind.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
