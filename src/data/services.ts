import {
  Cpu,
  ShieldCheck,
  Ruler,
  Wrench,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

export type ServiceItem = {
  slug: string;
  name: string;
  path: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  overview: string[];
  process: { title: string; description: string }[];
  stack: string[];
  benefits: string[];
  timeline: { phase: string; duration: string; detail: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: 'rtl-design',
    name: 'RTL Design',
    path: '/services/rtl-design',
    icon: Cpu,
    tagline: 'Production-grade RTL for next-generation silicon.',
    description:
      'Architect and implement synthesizable RTL for compute, memory and connectivity subsystems with power, performance and area (PPA) targets baked in from day one.',
    overview: [
      'MAXVY RTL engineers have taped out dozens of SoC subsystems across DDR5, MIPI, I3C and RISC-V. We design for clean timing closure, reusable verification and seamless integration into customer flows.',
      'Our design methodology emphasizes micro-architecture exploration, clock and power domain partitioning, and lint-clean synthesizable code from the first commit.',
    ],
    process: [
      { title: 'Architecture & Exploration', description: 'Micro-architecture spec, PPA budgeting, feasibility studies.' },
      { title: 'RTL Implementation', description: 'Synthesizable SystemVerilog with assertions and coverage hooks.' },
      { title: 'Lint & CDC Review', description: 'Lint-clean, CDC/RDC clean hand-off to verification.' },
      { title: 'Integration Support', description: 'SoC integration, timing closure and ECO support.' },
    ],
    stack: ['SystemVerilog', 'Verilog', 'Chisel', 'Verilator', 'Design Compiler', 'SpyGlass', 'Verdi'],
    benefits: [
      'PPA-optimized synthesizable RTL',
      'Lint and CDC clean hand-off',
      'Reusable, parameterizable IP',
      'Full assertion and coverage hooks',
    ],
    timeline: [
      { phase: 'Discovery', duration: '1–2 weeks', detail: 'Requirements, PPA targets, integration plan.' },
      { phase: 'Design', duration: '4–12 weeks', detail: 'RTL implementation and unit-level checks.' },
      { phase: 'Verification Hand-off', duration: '2–4 weeks', detail: 'Assertions, coverage and review.' },
      { phase: 'Integration', duration: '2–6 weeks', detail: 'SoC integration and timing closure.' },
    ],
  },
  {
    slug: 'verification',
    name: 'Verification',
    path: '/services/verification',
    icon: ShieldCheck,
    tagline: 'UVM, formal and system-level verification that finds bugs silicon cannot.',
    description:
      'Constrained-random UVM, formal property verification and system-level test plans that close coverage with confidence and ship bug-free RTL.',
    overview: [
      'Verification is where MAXVY started. Our UVM VIP portfolio and reference models power first-pass success on DDR5, MIPI and I3C programs worldwide.',
      'We build reusable testbenches, protocol-aware VIPs and regression infrastructure that scale from IP to full SoC.',
    ],
    process: [
      { title: 'Test Plan', description: 'Coverage-driven plan from specification to sign-off.' },
      { title: 'Testbench Architecture', description: 'UVM environment, agents, scoreboards and coverage.' },
      { title: 'VIP Integration', description: 'MAXVY VIP portfolio and custom monitors.' },
      { title: 'Regression & Sign-off', description: 'Regression farm, coverage closure and sign-off report.' },
    ],
    stack: ['UVM', 'SystemVerilog', 'SVA', 'Formal', 'VCS', 'Xcelium', 'Verdi', 'JasperGold'],
    benefits: [
      'Coverage-driven sign-off',
      'Protocol-aware VIP library',
      'Faster regression turnaround',
      'First-pass silicon success',
    ],
    timeline: [
      { phase: 'Planning', duration: '1–2 weeks', detail: 'Test plan and coverage model.' },
      { phase: 'Environment Build', duration: '3–8 weeks', detail: 'UVM TB and VIP integration.' },
      { phase: 'Random & Directed', duration: '4–12 weeks', detail: 'Constrained random and directed tests.' },
      { phase: 'Sign-off', duration: '2–4 weeks', detail: 'Coverage closure and report.' },
    ],
  },
  {
    slug: 'physical-design',
    name: 'Physical Design',
    path: '/services/physical-design',
    icon: Ruler,
    tagline: 'From netlist to GDSII with PPA leadership.',
    description:
      'Full-flow physical implementation from synthesis to sign-off, optimized for advanced nodes and challenging power, performance and area targets.',
    overview: [
      'MAXVY physical design teams have delivered production tape-outs at 7nm, 5nm and 3nm. We own the flow from synthesis through floorplan, place, CTS, route and sign-off.',
      'Our methodology emphasizes early PPA exploration, multi-corner multi-mode closure and DFM-clean hand-off to foundries.',
    ],
    process: [
      { title: 'Synthesis & PPA Exploration', description: 'Logic synthesis and PPA budgeting.' },
      { title: 'Floorplan & Power', description: 'Floorplan, power network and IR analysis.' },
      { title: 'Place & CTS', description: 'Placement, clock tree synthesis and optimization.' },
      { title: 'Route & Sign-off', description: 'Routing, timing, DRC/LVS and tape-out.' },
    ],
    stack: ['Design Compiler', 'Innovus', 'ICC2', 'PrimeTime', 'StarRC', 'Calibre', 'Voltus', 'RedHawk'],
    benefits: [
      'Advanced-node tape-out experience',
      'Multi-corner multi-mode closure',
      'IR and EM safe power delivery',
      'DFM-clean GDSII hand-off',
    ],
    timeline: [
      { phase: 'Synthesis', duration: '1–2 weeks', detail: 'Synthesis and PPA exploration.' },
      { phase: 'Implementation', duration: '4–8 weeks', detail: 'Floorplan to route.' },
      { phase: 'Sign-off', duration: '2–4 weeks', detail: 'Timing, DRC/LVS, IR.' },
      { phase: 'Tape-out', duration: '1 week', detail: 'GDSII release and foundry hand-off.' },
    ],
  },
  {
    slug: 'engineering-services',
    name: 'Engineering Services',
    path: '/services/engineering-services',
    icon: Wrench,
    tagline: 'Flexible engineering teams that plug into your flow.',
    description:
      'On-site or offshore engineering teams for RTL, verification, physical design and software — scaled to your roadmap and delivered with MAXVY quality.',
    overview: [
      'MAXVY engineering services give you access to senior engineers across the silicon stack — from architecture to post-silicon bring-up.',
      'Engagements scale from single-engineer staff augmentation to full turnkey project delivery.',
    ],
    process: [
      { title: 'Scoping', description: 'Requirements, team composition and milestones.' },
      { title: 'Onboarding', description: 'Tooling, VPN, repo access and knowledge transfer.' },
      { title: 'Execution', description: 'Sprint-based delivery with weekly reviews.' },
      { title: 'Transition', description: 'Documentation, hand-off and ongoing support.' },
    ],
    stack: ['SystemVerilog', 'UVM', 'Python', 'Bash', 'Git', 'JIRA', 'Slack', 'Confluence'],
    benefits: [
      'Flexible engagement models',
      'Senior engineering talent',
      'Transparent weekly reporting',
      'Knowledge transfer built-in',
    ],
    timeline: [
      { phase: 'Scoping', duration: '1 week', detail: 'Requirements and team shape.' },
      { phase: 'Onboarding', duration: '1–2 weeks', detail: 'Access, tooling and KT.' },
      { phase: 'Execution', duration: 'Ongoing', detail: 'Sprint-based delivery.' },
      { phase: 'Transition', duration: '2 weeks', detail: 'Hand-off and support.' },
    ],
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    path: '/services/consulting',
    icon: Lightbulb,
    tagline: 'Architecture and strategy consulting for silicon leaders.',
    description:
      'Architecture exploration, technology selection and roadmap consulting from senior architects who have shipped production silicon.',
    overview: [
      'MAXVY consultants help you make the right architecture and technology bets — from protocol selection to core pipeline trade-offs.',
      'We deliver decision-ready analysis, not slide-ware, with clear PPA and risk trade-offs.',
    ],
    process: [
      { title: 'Discovery', description: 'Goals, constraints and success criteria.' },
      { title: 'Analysis', description: 'Trade-study, PPA modeling and risk assessment.' },
      { title: 'Recommendation', description: 'Decision-ready recommendation report.' },
      { title: 'Implementation Path', description: 'Phased plan with milestones and owners.' },
    ],
    stack: ['Architecture modeling', 'PPA estimation', 'Risk analysis', 'Roadmap planning'],
    benefits: [
      'Decision-ready analysis',
      'Senior architect engagement',
      'Clear PPA and risk trade-offs',
      'Phased implementation plan',
    ],
    timeline: [
      { phase: 'Discovery', duration: '1 week', detail: 'Goals and constraints.' },
      { phase: 'Analysis', duration: '2–4 weeks', detail: 'Trade-study and modeling.' },
      { phase: 'Recommendation', duration: '1 week', detail: 'Report and review.' },
      { phase: 'Implementation Path', duration: '1 week', detail: 'Phased plan.' },
    ],
  },
];

export function findService(slug: string) {
  return services.find((s) => s.slug === slug);
}
