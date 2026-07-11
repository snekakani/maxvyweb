import { ArrowRight, ChevronRight, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import { useEffect, useRef } from 'react';

const WORDS = ['DDR5', 'MIPI', 'I3C', 'RISC-V', 'UCIe'];

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let idx = 0;
    const el = wordRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      el.classList.remove('animate-fade-up');
      void el.offsetWidth;
      idx = (idx + 1) % WORDS.length;
      el.textContent = WORDS[idx];
      el.classList.add('animate-fade-up');
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white pb-20 pt-32 lg:pt-40">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-primary-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />

      {/* Floating rings */}
      <FloatingRing size={600} dur="40s" cls="right-[5%] top-[10%] opacity-[0.06]" />
      <FloatingRing size={400} dur="28s" cls="left-[2%] bottom-[12%] opacity-[0.05]" />
      <FloatingRing size={260} dur="20s" cls="right-[22%] bottom-[20%] opacity-[0.07]" />

      <div className="container-page relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_440px] lg:items-center">
          {/* Text */}
          <div className="max-w-3xl">
            <span className="eyebrow-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              Semiconductor IP Design & Verification
            </span>
            <h1 className="mt-6 text-display font-bold text-navy-900">
              Silicon IP that{' '}
              <span className="text-primary-500">ships</span>
              <br />
              for{' '}
              <span
                ref={wordRef}
                className="animate-fade-up text-primary-500 inline-block"
              >
                DDR5
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
              MAXVY delivers silicon-proven IP, UVM verification and full-stack engineering services
              for the world's most demanding semiconductor programs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/products" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Explore IP portfolio
              </Button>
              <Button to="/contact" variant="outline-dark" size="lg">
                Talk to an architect
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-5">
              {[
                { Icon: Zap, text: '50+ IP cores shipped' },
                { Icon: Shield, text: 'Zero customer escapes' },
                { Icon: Globe, text: '4 continents served' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-navy-600">
                  <Icon className="h-4 w-4 text-primary-500" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* IP card stack */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            {[
              { label: 'DDR5 RCD03', sub: 'Memory · Production-ready', dot: 'bg-success' },
              { label: 'MIPI I3C Host IP', sub: 'MIPI Alliance spec v1.1.1', dot: 'bg-primary-500' },
              { label: 'UCIe VIP', sub: 'Die-to-die verification', dot: 'bg-primary-400' },
              { label: 'RISC-V Core', sub: 'RV64IMAFDC · Vega SoC', dot: 'bg-warning' },
              { label: 'MIPI DSI2 TX IP', sub: 'Display · v4K', dot: 'bg-success' },
            ].map((c, i) => (
              <Link
                key={c.label}
                to="/products"
                style={{ transitionDelay: `${i * 50}ms` }}
                className="group flex items-center justify-between rounded-2xl border border-navy-200 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/40 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
                  <div>
                    <div className="text-sm font-semibold text-navy-900">{c.label}</div>
                    <div className="text-xs text-navy-500">{c.sub}</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-primary-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
            <Link
              to="/products"
              className="flex items-center justify-center gap-1.5 rounded-2xl border border-primary-500/30 bg-white/80 p-3 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-500/10"
            >
              View all 50+ IP cores <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-50 to-transparent" />
    </section>
  );
}

function FloatingRing({
  size,
  dur,
  cls,
}: {
  size: number;
  dur: string;
  cls: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full border border-navy-300 animate-spin-slow ${cls}`}
      style={{ width: size, height: size, animationDuration: dur }}
    />
  );
}