import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, ChevronRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
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
            {/* Mission & Vision Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
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