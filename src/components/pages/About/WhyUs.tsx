import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Globe, ChevronRight, Mail, Phone, MapPin, ExternalLink, 
  Building2, Users, Cpu, Lightbulb, Trophy 
} from 'lucide-react';
import aboutBanner from '../../../images/about-us_banner.jpeg';

// --- Reusable Components ---
const Badge: React.FC<{ children: React.ReactNode; variant?: 'orange' | 'dark' }> = ({
  children,
  variant = 'orange',
}) => {
  const base =
    'inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border';
  const variants = {
    orange: 'border-[#e34115] text-[#e34115] bg-[#e34115]/10',
    dark: 'border-gray-700 text-gray-300 bg-gray-800/50',
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
};

const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}> = ({ children, variant = 'primary', className = '' }) => {
  const base =
    'inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base';
  const variants = {
    primary: 'bg-[#e34115] text-white hover:bg-[#c43a12] shadow-lg shadow-[#e34115]/30 hover:shadow-xl',
    secondary:
      'bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm',
  };
  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
};

// --- Journey Step Data ---
const journeySteps = [
  {
    step: 'STEP 01',
    year: '2021',
    title: 'Company Foundation',
    description: 'MAXVY was established with a vision to build innovative semiconductor solutions.',
    icon: Building2,
  },
  {
    step: 'STEP 02',
    year: '2022',
    title: 'Team & Technology Growth',
    description: 'Expanded the engineering team and strengthened core semiconductor expertise.',
    icon: Users,
  },
  {
    step: 'STEP 03',
    year: '2023',
    title: 'Product Development',
    description: 'Developed and delivered advanced Design & Verification IP solutions.',
    icon: Cpu,
  },
  {
    step: 'STEP 04',
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded customer engagement and established a stronger global presence.',
    icon: Globe,
  },
  {
    step: 'STEP 05',
    year: '2025',
    title: 'Innovation & Excellence',
    description: 'Strengthened the IP portfolio for complex SoC requirements.',
    icon: Lightbulb,
  },
  {
    step: 'STEP 06',
    year: '2026',
    title: 'Future Ready',
    description: 'Continuing to scale innovation, partnerships, and semiconductor excellence.',
    icon: Trophy,
  },
];

// --- Page Component ---
const WhyUs: React.FC = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardHover = {
    rest: { y: 0, boxShadow: '0 10px 25px rgba(0,0,0,0.05)' },
    hover: { y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' },
  };

  // Journey Animations
  const lineAnimation = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 } },
  };

  // Reusable Journey Card Component
  const JourneyCard: React.FC<{ step: typeof journeySteps[0]; index: number }> = ({ step, index }) => {
    // Calculate the dynamic height progressively for desktop/tablet (base height + index * 30px)
    // Ensure the tallest fits the container perfectly
    const height = `${280 + index * 30}px`;
    const isLast = index === journeySteps.length - 1;
    
    const Icon = step.icon;

    return (
      <motion.div
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative flex-1 min-w-[160px] flex justify-center items-end" // Aligns bottom
      >
        {/* Connecting Line Segment (Hidden on mobile) */}
        {!isLast && (
          <div className="absolute top-1/2 -right-[50%] z-0 h-0.5 bg-gradient-to-r from-[#e34115]/40 to-[#e34115]/20 hidden lg:block w-full pointer-events-none" />
        )}

        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={cardHover}
          style={{ height }}
          className="relative z-10 w-full bg-white rounded-[20px] border border-[#F3E7DD] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center justify-start pt-6 px-4 overflow-hidden group"
        >
          {/* Orange Top Gradient Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#e34115] to-[#ff7a5c] rounded-t-[20px]" />

          {/* Icon Circle */}
          <div className="w-12 h-12 rounded-full bg-[#FFF5ED] flex items-center justify-center mb-4 mt-2 transition-transform duration-300 group-hover:scale-110">
            <Icon className={`w-5 h-5 ${isLast ? 'text-yellow-500' : 'text-[#e34115]'}`} />
          </div>

          {/* Step & Year */}
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#e34115] mb-1">
            {step.step}
          </span>
          <span className="text-xs font-semibold text-gray-400 mb-3">
            {step.year}
          </span>

          {/* Title */}
          <h4 className="text-sm font-bold text-[#0F172A] text-center leading-snug mb-2">
            {step.title}
          </h4>

          {/* Description (truncated for smaller heights, expand on hover if needed) */}
          <p className="text-[11px] text-gray-500 text-center leading-relaxed line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
            {step.description}
          </p>

          {/* Glow effect for the top milestone */}
          {isLast && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#e34115]/10 rounded-full blur-3xl pointer-events-none" />
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="bg-[#FAFAFA]">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBanner})`,
            height: '420px',
          }}
        >
          {/* Overlay - exactly 0.65 opacity */}
          <div className="absolute inset-0 bg-white/65" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[50px] font-extrabold leading-tight tracking-tight">
                <span className="text-[#0F172A]">WHY </span>
                <span className="text-[#e34115]">US?</span>
              </h1>

              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                MAXVY means providing maximum value to its Employees, Customers, Clients, Vendors
                and Investors in terms of Growth, Product Quality, Service, Support, Knowledge
                Sharing and ROI.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- FLOATING WHITE CONTAINER --- */}
        <div className="relative z-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-[60px]"
          >
            
            {/* --- Mission & Vision Grid (Positioned at the top) --- */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Mission Card */}
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white rounded-2xl border border-[#F3E7DD] border-t-4 border-t-[#e34115] p-9 transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF5ED] flex items-center justify-center">
                    <Award className="w-7 h-7 text-[#e34115]" />
                  </div>
                  <div>
                    <h3 className="text-[34px] font-bold text-[#0F172A] leading-tight">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  To develop best-in-class Design and Verification IP for SoC Development,
                  empowering the next generation of semiconductor innovation.
                </p>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#e34115] uppercase tracking-wider">
                    Silicon Excellence
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#e34115]/60" />
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white rounded-2xl border border-[#F3E7DD] border-t-4 border-t-[#e34115] p-9 transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF5ED] flex items-center justify-center">
                    <Globe className="w-7 h-7 text-[#e34115]" />
                  </div>
                  <div>
                    <h3 className="text-[34px] font-bold text-[#0F172A] leading-tight">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  To be the leading product and services organization in the semiconductor market,
                  setting global benchmarks in IP quality and innovation.
                </p>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#e34115] uppercase tracking-wider">
                    Global Leadership
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#e34115]/60" />
                </div>
              </motion.div>
            </motion.div>

            {/* --- NEW SECTION: OUR JOURNEY (Placed below Mission & Vision) --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-16"
            >
              <div className="text-center mb-10">
                <motion.div variants={fadeUp}>
                  <h2 className="text-[34px] font-bold text-[#0F172A] leading-tight">
                    OUR <span className="text-[#e34115]">JOURNEY</span>
                  </h2>
                  <p className="text-[#e34115] font-medium uppercase tracking-wider text-sm mt-2">
                    Growing Through Innovation & Excellence
                  </p>
                </motion.div>
              </div>

              {/* Desktop: Horizontal Steps */}
              <div className="hidden lg:flex items-end justify-center gap-2 mt-8 relative">
                {/* Background baseline connecting line */}
                <motion.div 
                  variants={lineAnimation}
                  className="absolute bottom-[280px] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"
                />
                
                {journeySteps.map((step, index) => (
                  <JourneyCard key={index} step={step} index={index} />
                ))}
              </div>

              {/* Mobile & Tablet: Vertical Timeline */}
              <div className="lg:hidden relative pl-8">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="flex flex-col gap-8">
                  {journeySteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Dot on timeline */}
                      <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-[#e34115] border-4 border-white shadow-md" />
                      
                      <div className="bg-white rounded-[20px] border border-[#F3E7DD] p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="w-5 h-5 text-[#e34115]" />
                          <span className="text-xs font-bold text-[#e34115] uppercase">{step.step}</span>
                          <span className="text-xs text-gray-400 font-semibold">{step.year}</span>
                        </div>
                        <h4 className="font-bold text-[#0F172A] text-lg mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* --- CTA SECTION --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="mt-12 bg-gradient-to-br from-[#3A3A3A] to-[#3A3A3A] rounded-[28px] p-16 text-center"
            >
              <h2 className="text-[40px] font-extrabold text-white leading-tight tracking-tight">
                Ready to Build <br />
                <span className="text-white-400">Silicon Excellence?</span>
              </h2>

              <p className="mt-4 max-w-[600px] mx-auto text-gray-300 text-base leading-relaxed">
                Partner with MAXVY for world-class semiconductor IP solutions. From RTL to silicon,
                we deliver precision and innovation at every step.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" className="min-w-[180px] shadow-none">
                  Contact Sales
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="secondary" className="min-w-[160px]">
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom spacer - minimal */}
        <div className="h-12" />
      </div>
    </section>
  );
};

export default WhyUs;