import {
  Heart,
  Users,
  GraduationCap,
  BookOpenCheck,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

export type CareerPage = {
  slug: string;
  name: string;
  path: string;
  icon: LucideIcon;
  tagline: string;
  hero: string;
  benefits: string[];
  gallery: string[];
  testimonials: { quote: string; name: string; role: string }[];
  positions: { title: string; location: string; type: string }[];
};

export const careerPages: CareerPage[] = [
  {
    slug: 'life-at-maxvy',
    name: 'Life at MAXVY',
    path: '/careers/life-at-maxvy',
    icon: Heart,
    tagline: 'Where engineers build the silicon that powers the world.',
    hero: 'At MAXVY you will work alongside architects who have taped out the chips inside your phone, your car and your cloud. We are a small, senior team that ships.',
    benefits: [
      'Competitive compensation and equity',
      'Flexible and hybrid work arrangements',
      'Annual learning and conference budget',
      'Modern hardware and tooling',
      'Health and wellness coverage',
      'Global collaboration opportunities',
    ],
    gallery: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    ],
    testimonials: [
      { quote: 'I have never learned faster than at MAXVY. The review culture is intense but kind.', name: 'Aarthi R.', role: 'RTL Engineer' },
      { quote: 'We ship IP that goes into real silicon. The bar is high and the team is excellent.', name: 'Karthik S.', role: 'Verification Lead' },
    ],
    positions: [
      { title: 'Senior RTL Engineer — DDR5', location: 'Tirunelveli / Remote', type: 'Full-time' },
      { title: 'Verification Engineer — MIPI', location: 'Tirunelveli', type: 'Full-time' },
    ],
  },
  {
    slug: 'work-culture',
    name: 'Work Culture',
    path: '/careers/work-culture',
    icon: Users,
    tagline: 'A culture of ownership, depth and kindness.',
    hero: 'MAXVY culture is built on ownership, technical depth and kindness. We hire senior people, give them real problems and get out of the way.',
    benefits: [
      'Flat hierarchy, no theater',
      'Async-first communication',
      'Deep-work friendly schedule',
      'Mentorship and growth plans',
      'Inclusive and respectful workplace',
      'Regular hack-days and tech talks',
    ],
    gallery: [
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg',
      'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
      'https://images.pexels.com/photos/3184445/pexels-photo-3184445.jpeg',
    ],
    testimonials: [
      { quote: 'Managers here are technical and hands-on. Reviews are about the work, not politics.', name: 'Divya M.', role: 'Physical Design Engineer' },
      { quote: 'I work with people I genuinely respect. That is rare.', name: 'Vignesh K.', role: 'Architect' },
    ],
    positions: [
      { title: 'Physical Design Engineer', location: 'Tirunelveli', type: 'Full-time' },
      { title: 'RISC-V Architect', location: 'Remote', type: 'Full-time' },
    ],
  },
  {
    slug: 'internship-program',
    name: 'Internship Program at Tirunelveli',
    path: '/careers/internship-program',
    icon: GraduationCap,
    tagline: 'A hands-on internship on real silicon programs.',
    hero: 'Our Tirunelveli internship puts final-year and early-career engineers on real IP projects — with mentorship from architects who ship.',
    benefits: [
      'Mentorship from senior architects',
      'Real IP project, not toy tasks',
      'Stipend and relocation support',
      'Path to full-time offer',
      'Modern tooling and labs',
      'Certificate and reference',
    ],
    gallery: [
      'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      'https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg',
      'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg',
    ],
    testimonials: [
      { quote: 'My internship turned into a full-time role. I learned more in 6 months than 4 years of college.', name: 'Sneha P.', role: 'Former Intern, now RTL Engineer' },
      { quote: 'Real projects, real mentors, real tape-out pressure. Highly recommend.', name: 'Rahul D.', role: 'Intern' },
    ],
    positions: [
      { title: 'RTL Design Intern', location: 'Tirunelveli', type: 'Internship' },
      { title: 'Verification Intern', location: 'Tirunelveli', type: 'Internship' },
    ],
  },
  {
    slug: 'training-program',
    name: 'MAXVY Training Program',
    path: '/careers/training-program',
    icon: BookOpenCheck,
    tagline: 'Industry-grade training in RTL, verification and physical design.',
    hero: 'MAXVY training programs bridge academia and industry with hands-on modules in RTL, UVM, physical design and RISC-V — taught by working engineers.',
    benefits: [
      'Hands-on lab-based modules',
      'Taught by working engineers',
      'Industry-standard tooling',
      'Project portfolio you keep',
      'Mentorship and reviews',
      'Job placement assistance',
    ],
    gallery: [
      'https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg',
      'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    ],
    testimonials: [
      { quote: 'The UVM module alone was worth it. I went from zero to productive in 8 weeks.', name: 'Anand V.', role: 'Trainee' },
      { quote: 'Best training I have attended. Real tools, real labs, real engineers.', name: 'Meera S.', role: 'Trainee' },
    ],
    positions: [
      { title: 'Training Cohort — RTL', location: 'Tirunelveli / Online', type: 'Training' },
      { title: 'Training Cohort — Verification', location: 'Tirunelveli / Online', type: 'Training' },
    ],
  },
  {
    slug: 'current-openings',
    name: 'Current Openings',
    path: '/careers/current-openings',
    icon: Briefcase,
    tagline: 'Open roles across RTL, verification, physical design and software.',
    hero: 'We are hiring across the silicon stack. Browse current openings and apply with your resume — we move fast on strong candidates.',
    benefits: [
      'Fast and respectful process',
      'Technical interviews, no brainteasers',
      'Transparent compensation',
      'Hybrid and remote options',
      'Relocation support',
      'Global team exposure',
    ],
    gallery: [
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
      'https://images.pexels.com/photos/3184445/pexels-photo-3184445.jpeg',
    ],
    testimonials: [
      { quote: 'From first call to offer in two weeks. Respectful and technical throughout.', name: 'Priya N.', role: 'Verification Engineer' },
      { quote: 'The interview felt like a design discussion, not an interrogation.', name: 'Surya T.', role: 'RTL Engineer' },
    ],
    positions: [
      { title: 'Senior RTL Engineer — DDR5', location: 'Tirunelveli / Remote', type: 'Full-time' },
      { title: 'Verification Engineer — MIPI', location: 'Tirunelveli', type: 'Full-time' },
      { title: 'Physical Design Engineer', location: 'Tirunelveli', type: 'Full-time' },
      { title: 'RISC-V Architect', location: 'Remote', type: 'Full-time' },
      { title: 'Software Engineer — Embedded', location: 'Tirunelveli / Remote', type: 'Full-time' },
      { title: 'RTL Design Intern', location: 'Tirunelveli', type: 'Internship' },
      { title: 'Verification Intern', location: 'Tirunelveli', type: 'Internship' },
    ],
  },
];

export function findCareerPage(slug: string) {
  return careerPages.find((c) => c.slug === slug);
}
