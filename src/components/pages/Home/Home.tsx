import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Quote,
  CheckCircle,
  Cpu,
  Shield,
  Zap,
  Globe,
  Layers
} from 'lucide-react';
import heroBackground from "../../../images/hero_background.png";
import chipImage from "../../../images/chip.png";
import aboutImage from "../../../images/about_us.png";
import aboutChip from "../../../images/about-us_chip.png";

export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Updated partners with actual images
  const partners = [
    { name: 'Micron', logo: '/images/micron.png' },
    { name: 'SynSense', logo: '/images/synsense.png' },
    { name: 'Fudan Micron', logo: '/images/Fudan Micron.png' },
    { name: 'Cadence', logo: '/images/Cadence-Logo.png' },
    { name: 'Silicon Labs', logo: '/images/silicon_labs.jpg' },
    { name: 'Boreas Technologies', logo: '/images/boreas_technologies.png' },
  ];

  // Duplicate partners for seamless scrolling
  const scrollingPartners = [...partners, ...partners, ...partners];

  const services = [
    {
      icon: Cpu,
      title: 'RTL Design IP',
      description: 'High-performance RTL design IP for next-generation semiconductor products.',
      link: '/services'
    },
    {
      icon: Shield,
      title: 'Verification IP',
      description: 'Comprehensive verification IP solutions for complex system-on-chip designs.',
      link: '/services'
    },
    {
      icon: Zap,
      title: 'RISC-V Solution',
      description: 'End-to-end RISC-V processor solutions for custom and embedded applications.',
      link: '/services'
    },
    {
      icon: Layers,
      title: 'Solutions & Services',
      description: 'Full-stack engineering services from architecture to tape-out and beyond.',
      link: '/services'
    }
  ];

  // Quotes for auto-sliding
  const quotes = [
    {
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs"
    },
    {
      text: "Projects we have completed demonstrate what we know. Future projects decide what we will learn.",
      author: "Dr. Muhsin Tiwana"
    }
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleLearnMore = () => {
    navigate('/products');
  };

  const handleReadMore = () => {
    navigate('/about/why-us');
  };

  const handleServiceLearnMore = (link) => {
    navigate(link);
  };

  return (
    <>
      <Helmet>
        <title>MAXVY Technologies | Semiconductor Design & Verification IP Company</title>
        <meta name="description" content="MAXVY delivers silicon-proven IP, UVM verification and full-stack engineering services for DDR5, MIPI, I3C, RISC-V and beyond." />
        <meta name="keywords" content="semiconductor, IP design, verification, RTL, UVM, DDR5, MIPI, I3C, RISC-V, VLSI" />
        <link rel="canonical" href="https://maxvy.com/" />
        <meta property="og:title" content="MAXVY Technologies | Semiconductor Design & Verification IP Company" />
        <meta property="og:description" content="MAXVY delivers silicon-proven IP, UVM verification and full-stack engineering services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maxvy.com/" />
        <meta property="og:image" content="https://maxvy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MAXVY Technologies | Semiconductor Design & Verification IP Company" />
        <meta name="twitter:description" content="MAXVY delivers silicon-proven IP, UVM verification and full-stack engineering services." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MAXVY Technologies",
            "description": "Semiconductor IP Design & Verification Company",
            "url": "https://maxvy.com",
            "logo": "https://maxvy.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-555-5555",
              "contactType": "Sales"
            },
            "sameAs": [
              "https://linkedin.com/company/maxvy",
              "https://twitter.com/maxvy"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="space-y-6"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
                variants={fadeUp}
              >
                Design & Verification
                <br />
                <span className="text-orange-500">IP Company</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 max-w-lg"
                variants={fadeUp}
              >
                MAXVY delivers silicon-proven IP, UVM verification and full-stack engineering services for the world's most demanding semiconductor programs.
              </motion.p>
              <motion.div variants={fadeUp}>
                <button 
                  onClick={handleLearnMore}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105 inline-flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
              <motion.div 
                className="flex flex-wrap gap-2 pt-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {['RTL Design IP', 'Verification IP', 'RISC-V Solution', 'Solutions & Services'].map((badge, index) => (
                  <motion.span
                    key={index}
                    variants={fadeUp}
                    className="px-3 py-1.5 bg-orange-50 text-black-700 rounded-full text-sm font-medium border border-orange-200 shadow-sm whitespace-nowrap"
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl" />
                <img 
                  src={chipImage} 
                  alt="Semiconductor Chip" 
                  className="relative w-[500px] h-[500px] object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-[100px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">
            
            {/* LEFT SIDE - Image with clip-path */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div
                className="w-full max-w-[520px] h-[470px] overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 8%, 100% 92%, 45% 100%, 0 100%)'
                }}
              >
                <img
                  src={aboutChip}
                  alt="Semiconductor Chip"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT SIDE - Content with peach background shape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Soft peach background shape */}
              <div
                className="absolute -top-10 -right-10 w-[760px] h-[560px] rounded-[40px] -z-10 hidden lg:block"
                style={{
                  backgroundColor: '#FFF1EB',
                  transform: 'rotate(5deg)',
                  transformOrigin: 'center'
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-2xl lg:text-[44px] leading-[1.1] lg:leading-[72px] font-bold text-[#222222]">
                  Maximum Value
                  <br />
                  for Everyone
                </h2>

                <p className="mt-6 text-base md:text-lg leading-[30px] text-[#666666] max-w-[460px]">
                  MAXVY Means Providing Maximum Value To Its Employees,
                  Customers, Clients, Vendors And Investors In Terms Of
                  Growth, Product Quality, Service, Support,
                  Knowledge Sharing And ROI
                </p>

                <button
                  onClick={handleReadMore}
                  className="mt-8 h-[54px] w-[170px] rounded-[12px] bg-[#FF6200] text-white font-semibold text-base transition-all duration-300 hover:bg-[#e85b00] inline-flex items-center justify-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4"
            >
              WHAT WE OFFER
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900"
            >
              Our <span className="text-orange-500">Services</span>
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive semiconductor IP design and verification services for next-generation products
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  onClick={() => handleServiceLearnMore(service.link)}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-orange-50/0 to-orange-100/0"
                    whileHover={{
                      background: "linear-gradient(135deg, rgba(255,107,0,0.05), rgba(255,107,0,0.02), rgba(255,107,0,0.08))",
                      transition: { duration: 0.5 }
                    }}
                  />
                  
                  <motion.div 
                    className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300 relative z-10"
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                    whileHover={{
                      color: "#EA580C",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-4 relative z-10"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div 
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 group relative z-10"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <motion.span
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.div>

                  <motion.div
                    className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ left: '-100%' }}
                    whileHover={{
                      left: '200%',
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Partners Section with Auto-Scrolling Logos */}
      <section className="bg-[#FCF8F5] pt-10 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-500 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Trusted Worldwide
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="mt-7 text-[30px] leading-tight font-extrabold text-[#202124]"
            >
              Our Partners, Clients &
              <span className="text-[#ff6b00]"> Associations</span>
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="mt-5 text-[14px] leading-7 text-[#777] max-w-2xl mx-auto"
            >
              Collaborating with the world's leading semiconductor companies,
              EDA vendors, foundries and industry bodies to deliver
              silicon excellence.
            </motion.p>
          </motion.div>

          {/* Auto-Scrolling Logo Carousel */}
          <div className="mt-16 relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FCF8F5] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FCF8F5] to-transparent z-10"></div>
            
            <div className="flex animate-scroll">
              {scrollingPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[180px] h-[100px] mx-4"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="
                    h-full
                    rounded-2xl
                    bg-white
                    border
                    border-[#F2E7DF]
                    shadow-[0_4px_18px_rgba(0,0,0,0.04)]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                    p-4
                  ">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-[60px] w-auto object-contain"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('span');
                          fallback.className = 'text-sm font-medium text-gray-600 text-center';
                          fallback.textContent = partner.name;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Testimonial Section - Updated to Brown */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3A3A3A] rounded-3xl p-8 md:p-10 relative overflow-hidden h-[280px] md:h-[320px] flex items-center">
            <Quote className="absolute top-4 right-4 w-10 h-10 text-white/20" />
            
            {/* Quote Slider */}
            <div className="max-w-4xl mx-auto text-center relative w-full h-full">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: currentQuoteIndex === index ? 1 : 0,
                    y: currentQuoteIndex === index ? 0 : 10
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    position: currentQuoteIndex === index ? 'relative' : 'absolute',
                    visibility: currentQuoteIndex === index ? 'visible' : 'hidden',
                    height: '100%'
                  }}
                >
                  <Quote className="w-10 h-10 text-white/30 mb-3" />
                  <blockquote className="text-base md:text-xl lg:text-2xl font-extrabold text-white leading-tight px-4 max-w-3xl">
                    "{quote.text}"
                  </blockquote>
                  <p className="text-sm md:text-base text-white/80 font-medium mt-3">— {quote.author}</p>
                </motion.div>
              ))}
              
              {/* Dots indicator */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-0">
                {quotes.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentQuoteIndex(dotIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      dotIndex === currentQuoteIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}