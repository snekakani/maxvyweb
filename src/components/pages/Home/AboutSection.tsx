import SectionTitle from '../../common/SectionTitle';
import Stats from '../../common/Stats';
import Button from '../../common/Button';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionTitle
              align="left"
              eyebrow="About MAXVY"
              title={
                <>
                  We build the IP that powers{' '}
                  <span className="gradient-text">next-generation silicon</span>
                </>
              }
              description="MAXVY Technologies is a specialist semiconductor IP company. From DDR5 memory interfaces and MIPI multimedia IP to RISC-V subsystems and verification VIP — we deliver silicon-proven IP and full-stack engineering services to chipmakers worldwide."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/about/company-overview" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                Our story
              </Button>
              <Button to="/products" variant="ghost">
                IP portfolio
              </Button>
            </div>
          </div>
          <div className="reveal" data-reveal-delay="120">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Semiconductor fabrication"
                className="w-full object-cover"
                style={{ height: 420 }}
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
              {/* Floating stat */}
              <div className="absolute bottom-4 left-4 glass rounded-2xl p-4 shadow-lift">
                <div className="text-2xl font-bold text-primary-600">20+</div>
                <div className="text-xs text-muted">Tape-outs supported</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 reveal">
          <Stats />
        </div>
      </div>
    </section>
  );
}
