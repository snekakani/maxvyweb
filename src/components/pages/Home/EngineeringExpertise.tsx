import SectionTitle from '../../common/SectionTitle';
import { Cpu, ShieldCheck, Ruler, CircuitBoard, Layers, GitBranch } from 'lucide-react';

const expertise = [
  { Icon: Cpu, title: 'RTL Design', points: ['SystemVerilog', 'Chisel', 'Lint & CDC clean'] },
  { Icon: ShieldCheck, title: 'Verification', points: ['UVM', 'Formal', 'Coverage sign-off'] },
  { Icon: Ruler, title: 'Physical Design', points: ['Synthesis', 'Place & Route', 'Sign-off'] },
  { Icon: CircuitBoard, title: 'RISC-V', points: ['ISA', 'Cores', 'Reference models'] },
  { Icon: Layers, title: 'IP Integration', points: ['SoC', 'Chiplet', 'UCIe'] },
  { Icon: GitBranch, title: 'Software', points: ['Embedded', 'Firmware', 'Cloud'] },
];

export default function EngineeringExpertise() {
  return (
    <section className="section-pad bg-navy-900 text-white">
      <div className="container-page">
        <SectionTitle
          dark
          eyebrow="Engineering expertise"
          title="Deep across the silicon stack"
          description="MAXVY engineers have shipped production silicon across every layer — from architecture and RTL to verification, physical design and software."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map(({ Icon, title, points }, i) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/40 hover:bg-white/10"
              data-reveal-delay={i * 80}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-white">{title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-navy-200"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
