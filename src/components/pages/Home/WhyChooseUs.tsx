import SectionTitle from '../../common/SectionTitle';
import Card from '../../common/Card';
import { whyChooseUs } from '../../../data/company';
import { ShieldCheck, Layers, Boxes, Heart, Globe, Users } from 'lucide-react';

const iconMap: Record<string, typeof ShieldCheck> = {
  shield: ShieldCheck,
  layers: Layers,
  stack: Boxes,
  heart: Heart,
  globe: Globe,
  users: Users,
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Why MAXVY"
          title="Why leading chipmakers choose us"
          description="We combine deep protocol expertise, silicon-proven IP and full-stack engineering to deliver first-pass success on the most demanding semiconductor programs."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <Card
                key={item.title}
                hover
                className="reveal"
                as="article"
              >
                <div
                  className="reveal flex h-full flex-col gap-3"
                  data-reveal-delay={i * 80}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-navy-800">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
