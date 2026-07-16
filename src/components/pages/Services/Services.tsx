// Services.tsx (Main Services Page)
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Shield, 
  BarChart3, 
  Microscope, 
  Layout, 
  MemoryStick,
  CircuitBoard,
  Code,
  Terminal,
  Database,
  Package,
  Monitor,
  Bug,
  HardDrive,
  Layers,
  Wrench,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../common/SEO';
import SectionTitle from '../../common/SectionTitle';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import aboutBanner from '../../../images/about-us_banner.jpeg';

// Hardware/Design Services data
const designServices = [
  {
    id: 'rtl-verification',
    title: 'RTL design and Verification Solution',
    icon: Cpu,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    description: 'Complete RTL design and verification solutions for complex SoC designs.'
  },
  {
    id: 'gls-verification',
    title: 'GLS Verification Solution',
    icon: Shield,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    description: 'Gate-level simulation verification for timing and functional accuracy.'
  },
  {
    id: 'sta-analysis',
    title: 'STA Analysis Solution',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    description: 'Static timing analysis for design closure and timing optimization.'
  },
  {
    id: 'analog-design',
    title: 'Analog and Mixed Design/Verification Solution',
    icon: Microscope,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    description: 'Analog and mixed-signal design and verification solutions.'
  },
  {
    id: 'analog-layout',
    title: 'Analog Layout design/Verification Solution',
    icon: Layout,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    description: 'Physical layout design and verification for analog circuits.'
  },
  {
    id: 'memory-io',
    title: 'Memory IO design Solution',
    icon: MemoryStick,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    description: 'Memory interface and I/O design solutions for high-performance systems.'
  },
  {
    id: 'physical-design',
    title: 'Physical design Solution',
    icon: CircuitBoard,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    description: 'Complete physical design from netlist to GDSII.'
  },
  {
    id: 'embedded-software',
    title: 'Embedded Software/ Hardware Solution',
    icon: Code,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    description: 'Embedded software and hardware co-design solutions.'
  },
  {
    id: 'driver-apps',
    title: 'Software Driver and Application Development',
    icon: Terminal,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    description: 'Device driver and application development for various platforms.'
  }
];

// Software Solutions data
const softwareSolutions = [
  {
    id: 'bsp',
    title: 'Board Support Package',
    icon: HardDrive,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    description: 'BSP development for Windows and Linux platforms.'
  },
  {
    id: 'device-drivers',
    title: 'Device Drivers',
    icon: Settings,
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    description: 'Semiconductor device drivers development for Windows and Linux.'
  },
  {
    id: 'firmware',
    title: 'Firmware',
    icon: Layers,
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    description: 'Application/Firmware software for embedded systems.'
  },
  {
    id: 'sdk',
    title: 'Software Development Kit',
    icon: Package,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    description: 'Libraries package for developing applications and client drivers for Windows and Linux.'
  },
  {
    id: 'applications',
    title: 'Applications',
    icon: Monitor,
    color: 'from-fuchsia-500 to-fuchsia-600',
    bgColor: 'bg-fuchsia-50',
    textColor: 'text-fuchsia-600',
    description: 'Standalone application development for Windows and Linux platforms.'
  },
  {
    id: 'enhancements',
    title: 'Enhancements',
    icon: Wrench,
    color: 'from-lime-500 to-lime-600',
    bgColor: 'bg-lime-50',
    textColor: 'text-lime-600',
    description: 'Enhance existing software to meet customer requirements.'
  },
  {
    id: 'bug-fixing',
    title: 'Bug Fixing',
    icon: Bug,
    color: 'from-slate-500 to-slate-600',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-600',
    description: 'Provide solutions for fixing bugs in customer software.'
  }
];

export default function Services() {
  useReveal();

  return (
    <>
      <SEO
        title="Services — MAXVY Technologies"
        description="Full-stack silicon engineering services from RTL design to software solutions."
        canonical="/services"
      />
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBanner})`,
            height: '400px',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[50px] font-extrabold leading-tight tracking-tight">
                <span className="text-[#0F172A]">OUR </span>
                <span className="text-[#FF6A00]">SERVICES</span>
              </h1>
              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                Comprehensive silicon engineering solutions from design to deployment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating White Container */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
          >
            {/* Section 1: Our Services */}
            <div>
              <SectionTitle
                eyebrow="Our Services"
              />
              
              {/* Design Services Grid */}
              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {designServices.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent"
                    >
                      {/* Animated gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.bgColor} ${service.textColor} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="mt-4 text-base font-semibold text-navy-800 group-hover:text-orange-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {service.description}
                        </p>
                        
                        {/* Decorative line */}
                        <div className={`mt-4 h-0.5 w-12 bg-gradient-to-r ${service.color} rounded-full group-hover:w-full transition-all duration-500`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-16">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Software Solutions
                </span>
              </div>
            </div>

            {/* Section 2: Software Solution */}
            <div>
              <SectionTitle
                eyebrow="Software Solution"
                title="Comprehensive software engineering"
                description="From board support packages to application development — we provide end-to-end software solutions."
              />
              
              {/* Software Solutions Grid */}
              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {softwareSolutions.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent"
                    >
                      {/* Animated gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.bgColor} ${service.textColor} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="mt-4 text-base font-semibold text-navy-800 group-hover:text-orange-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {service.description}
                        </p>
                        
                        {/* Decorative line */}
                        <div className={`mt-4 h-0.5 w-12 bg-gradient-to-r ${service.color} rounded-full group-hover:w-full transition-all duration-500`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="h-12" />
      </div>

      {/* Why Choose Us Section - Updated with #007B7B color and reduced height */}
      <section className="py-12 bg-canvas">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                align="left"
                eyebrow="Why MAXVY"
                title="Engineering excellence, delivered"
                description="We combine deep technical expertise with proven methodologies to deliver exceptional results."
              />
              <div className="mt-6 space-y-3">
                {[
                  'End-to-end silicon engineering capabilities',
                  'Proven track record of successful tapeouts',
                  'Expert team with decades of industry experience',
                  'Customer-centric approach with flexible engagement models'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-soft border border-gray-100"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#007B7B' }}>
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-navy-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="rounded-2xl p-6 text-white shadow-lg"
                style={{ backgroundColor: '#007B7B' }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">Ready to get started?</h3>
                  <p className="mt-2 text-white/90 text-sm leading-relaxed">
                    Let's discuss your requirements and how we can help you achieve your goals.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-semibold text-[#007B7B] transition-all hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 text-sm"
                  >
                    Contact us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}