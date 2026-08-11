import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Plus,
  Minus,
  Send,
  CheckCircle2,
  Search,
  Pencil,
  HeartPulse,
  Car,
  Smartphone,
  Radio,
  Bot,
  User,
  PhoneCall
} from 'lucide-react';

// Images - keep your existing imports
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

  // ========== COMPONENT STATES ==========
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(2);
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [servicesActiveIndex, setServicesActiveIndex] = useState<number>(2);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryError, setInquiryError] = useState('');
  const [inquiryFormData, setInquiryFormData] = useState({
    company: '',
    category: '1',
    timeline: '',
    phone: '',
    email: '',
  });

  // ========== FAQ DATA ==========
  const faqs = [
    {
      question: 'What protocols are supported by your Verification IPs?',
      answer: 'We support industry-standard protocols including PCIe, USB, MIPI, AMBA (AXI/AHB/APB), DDR, and more, all fully compliant with SV/UVM methodology to ensure comprehensive functional coverage.',
    },
    {
      question: 'Can you customize the RISC-V cores for specific applications?',
      answer: 'Yes, we design custom instruction set extensions, custom peripherals, and tailor the pipeline architecture to meet your energy-performance-area (PPA) constraints.',
    },
    {
      question: 'What process technologies do your services cover?',
      answer: 'Our team has hands-on experience in leading-edge process nodes from TSMC, GlobalFoundries, SMIC, Intel Foundry, and others, down to advanced FinFET technologies.',
    },
  ];

  // ========== HERO SLIDER DATA ==========
  const heroSlides = [
    {
      id: 1,
      badge: 'Design and Verification IP Company',
      title: 'Accelerating SoC\nChip Development',
      desc: 'Maxvy provides state-of-the-art Design and Verification IP solutions to shape your concepts into premium silicon products.',
      image: 'images/hero_businessman.png',
    },
    {
      id: 2,
      badge: 'RTL Design & RISC-V Solutions',
      title: 'Tailored RISC-V\nSoC Architecture',
      desc: 'Expert digital design, subsystem integration, and custom instruction set extensions designed to meet your energy-performance-area constraints.',
      image: 'images/riscv_chip.png',
    },
    {
      id: 3,
      badge: 'Digital & Verification Services',
      title: 'Silicon-Proven\nVerification IPs',
      desc: 'Complete UVM-compliant Verification IPs and comprehensive chip verification services to ensure first-time-right silicon success.',
      image: 'images/verification_concept.png',
    },
  ];

  // ========== FEATURES DATA ==========
  const features = [
    {
      title: 'RTL Design IP',
      desc: 'Silicon-verified RTL designs for industry-standard interface protocols and custom peripherals.',
      bgImage: '/images/portfolio_rtl.png',
      href: '#services',
    },
    {
      title: 'Verification IP',
      desc: 'High-quality, SV/UVM-compliant Verification IPs for comprehensive SoC functional coverage.',
      bgImage: '/images/portfolio_verification.png',
      href: '#services',
    },
    {
      title: 'RISC-V Solution',
      desc: 'Custom processor cores, tailored instruction extensions, and complex SoC integration services.',
      bgImage: '/images/portfolio_riscv.png',
      href: '#services',
    },
  ];

  // ========== ALLIANCE DATA ==========
  const allianceGroups = [
    {
      group: 'RTL Design Group',
      title: 'Digital IP Core Development',
      image: 'assets/img/team/team-1.jpg',
      href: '#services',
    },
    {
      group: 'Verification Group',
      title: 'SV/UVM & Testbench Architecture',
      image: 'assets/img/team/team-2.jpg',
      href: '#services',
    },
    {
      group: 'Physical Design Group',
      title: 'Full RTL-to-GDSII Implementation',
      image: 'assets/img/team/team-3.jpg',
      href: '#services',
    },
    {
      group: 'Analog & Mixed-Signal',
      title: 'Custom Analog Subsystems & Layout',
      image: 'assets/img/team/team-4.jpg',
      href: '#services',
    },
  ];

  // ========== BLOG DATA ==========
  const blogArticles = [
    {
      id: 1,
      tag: 'Partnership',
      date: 'July 15, 2026',
      title: 'Strategic Alliance with Silicon Verified (SilVer) Inc.',
      image: 'images/blog_alliance.png',
      author: {
        name: 'Admin',
        avatar: 'assets/img/avtar/6.png',
      },
    },
    {
      id: 2,
      tag: 'Product Release',
      date: 'June 28, 2026',
      title: 'Latest JESD204B UVM Verification IP Released',
      image: 'images/blog_release.png',
      author: {
        name: 'Admin',
        avatar: 'assets/img/avtar/7.png',
      },
    },
    {
      id: 3,
      tag: 'Solutions',
      date: 'May 12, 2026',
      title: 'RISC-V Custom Processor Solutions Portfolio Launch',
      image: 'images/riscv_chip.png',
      author: {
        name: 'Admin',
        avatar: 'assets/img/avtar/8.png',
      },
    },
  ];

  // ========== CLIENT LOGOS DATA ==========
  const slide1Logos = [
    { id: 1, name: 'Aldec', src: '/images/clientlogo/client1.png' },
    { id: 2, name: 'Ashling', src: '/images/clientlogo/client2.png' },
    { id: 3, name: 'IESA', src: '/images/clientlogo/client3.png' },
    { id: 4, name: 'Micron', src: '/images/clientlogo/client4.png' },
    { id: 5, name: 'mobiveil', src: '/images/clientlogo/client5.png' },
    { id: 6, name: 'MOSCHIP', src: '/images/clientlogo/client6.png' },
    { id: 7, name: 'OPTERNA', src: '/images/clientlogo/client7.png' },
    { id: 8, name: 'SilVer', src: '/images/clientlogo/client8.png' },
    { id: 9, name: 'YantraVision', src: '/images/clientlogo/client9.png' },
    { id: 10, name: 'EVERSPIN', src: '/images/clientlogo/client10.png' },
    { id: 11, name: 'semiconductor 360', src: '/images/clientlogo/client11.png' },
    { id: 12, name: 'villiv micron', src: '/images/clientlogo/client12.png' },
  ];

  const slide2Logos = [
    { id: 13, name: 'Ecosystem Partner', src: '/images/clientlogo/client13.gif' },
    { id: 14, name: 'VeriSilicon', src: '/images/clientlogo/client14.png' },
    { id: 15, name: 'Ecosystem Partner', src: '/images/clientlogo/client15.jpg' },
    { id: 16, name: 'MIPI Alliance', src: '/images/clientlogo/client16.png', link: 'https://www.mipi.org/' },
    { id: 17, name: 'Ecosystem Partner', src: '/images/clientlogo/client17.jpg' },
    { id: 18, name: 'Lattice Semiconductor', src: '/images/clientlogo/client18.jpg' },
    { id: 19, name: 'Cadence Design Systems', src: '/images/clientlogo/client19.png' },
    { id: 20, name: 'Ecosystem Partner', src: '/images/clientlogo/client20.png' },
    { id: 21, name: 'Ecosystem Partner', src: '/images/clientlogo/client21.jpg' },
    { id: 22, name: 'Silicon Labs', src: '/images/clientlogo/client22.png' },
    { id: 23, name: 'Ecosystem Partner', src: '/images/clientlogo/client23.png' },
    { id: 24, name: 'Ecosystem Partner', src: '/images/clientlogo/client24.jpg' },
  ];

  // ========== INDUSTRIES DATA ==========
  const industries = [
    { title: 'Automotive', icon: <Car size={26} /> },
    { title: 'Healthcare', icon: <HeartPulse size={26} /> },
    { title: 'Industrial Automation', icon: <Bot size={26} /> },
    { title: 'Consumer Tech', icon: <Smartphone size={26} /> },
    { title: 'Telecom', icon: <Radio size={26} /> },
    { title: 'Artificial Intelligence', icon: <Cpu size={26} /> },
  ];

  // ========== PROCESS DATA ==========
  const processSteps = [
    {
      step: 'Step 01',
      title: 'Research',
      desc: 'Future-focused technology research and feasibility studies.',
      icon: <Search size={28} />,
    },
    {
      step: 'Step 02',
      title: 'Design',
      desc: 'Architecture blueprinting and physical chip layout design.',
      icon: <Pencil size={28} />,
    },
    {
      step: 'Step 03',
      title: 'Fabrication',
      desc: 'Advanced foundry manufacturing and physical layering.',
      icon: <Layers size={28} />,
    },
    {
      step: 'Step 04',
      title: 'Testing',
      desc: 'Rigorous hardware emulation and post-silicon validation.',
      icon: <HeartPulse size={28} />,
    },
    {
      step: 'Step 05',
      title: 'Deployment',
      desc: 'Delivering ready-to-scale silicon solutions globally.',
      icon: <Globe size={28} />,
    },
  ];

  // ========== SERVICES SLIDER DATA ==========
  const servicesSlider = [
    {
      title: 'RTL Design IP',
      desc: 'Silicon-verified digital design, subsystem integration, and protocol compliance.',
      icon: '/assets/img/icon/services-4.png',
    },
    {
      title: 'Verification IP',
      desc: 'UVM-compliant VIPs, automated test suite development, and functional coverage.',
      icon: '/assets/img/icon/services-5.png',
    },
    {
      title: 'RISC-V Solutions',
      desc: 'Custom processor design, instruction extensions, and embedded software integration.',
      icon: '/assets/img/icon/services-6.png',
    },
    {
      title: 'SoC Services & Support',
      desc: 'Analog and Mixed-Signal Design, Physical Design, and post-silicon validation.',
      icon: '/assets/img/icon/services-4.png',
    },
  ];

  // ========== PORTFOLIO DATA ==========
  const portfolioItems = [
    {
      title: 'JESD204B UVM VIP',
      category: 'Verification IP',
      image: 'images/portfolio_verification.png',
    },
    {
      title: 'Custom RISC-V SoC',
      category: 'RISC-V Solution',
      image: 'images/portfolio_riscv.png',
    },
    {
      title: 'Subsystem Integration & Verification',
      category: 'SoC Design & Services',
      image: 'images/portfolio_integration.png',
    },
    {
      title: 'xSPI Slave Controller Core',
      category: 'RTL Design IP',
      image: 'images/portfolio_rtl.png',
    },
    {
      title: 'JESD204B UVM VIP',
      category: 'Verification IP',
      image: 'images/portfolio_verification.png',
    },
    {
      title: 'Custom RISC-V SoC',
      category: 'RISC-V Solution',
      image: 'images/portfolio_riscv.png',
    },
    {
      title: 'Subsystem Integration & Verification',
      category: 'SoC Design & Services',
      image: 'images/portfolio_integration.png',
    },
    {
      title: 'xSPI Slave Controller Core',
      category: 'RTL Design IP',
      image: 'images/portfolio_rtl.png',
    },
  ];

  // ========== HANDLERS ==========
  const handleLearnMore = () => {
    navigate('/products');
  };

  const handleReadMore = () => {
    navigate('/about/why-us');
  };

  const handleServiceLearnMore = (link: string) => {
    navigate(link);
  };

  const handleHeroTabClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInquiryFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryFormData.company || !inquiryFormData.email || !inquiryFormData.timeline) {
      setInquiryError('Please fill in all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inquiryFormData.email)) {
      setInquiryError('Please enter a valid business email address.');
      return;
    }
    setInquiryError('');
    setInquirySubmitted(true);
  };

  const handleInquiryReset = () => {
    setInquiryFormData({
      company: '',
      category: '1',
      timeline: '',
      phone: '',
      email: '',
    });
    setInquirySubmitted(false);
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
      </Helmet>

      {/* Animation styles for video pulse */}
      <style>{`
        @keyframes video-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(227, 65, 21, 0.4);
          }
          70% {
            box-shadow: 0 0 0 30px rgba(227, 65, 21, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(227, 65, 21, 0);
          }
        }
        .video-pulse-animation {
          animation: video-pulse 2s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .fade-in {
          animation: fadeIn 0.3s ease;
        }
      `}</style>

      {/* Main container with overflow-x-hidden to remove horizontal scroll */}
      <div className="overflow-x-hidden">

        {/* ============================================================ */}
        {/* HERO SLIDER SECTION - EXACT TEXT SIZES FROM HEROSLIDER */}
        {/* ============================================================ */}
        <section className="relative w-full overflow-hidden bg-white text-heading min-h-[580px] lg:h-[calc(100vh-120px)] lg:min-h-[650px] flex items-center pt-20 lg:pt-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none" 
            style={{ backgroundImage: "url('/assets/img/bg/banner-bg.jpg')" }}
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#e34115]/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

          <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              onSwiper={setSwiperInstance}
              className="w-full hero-swiper"
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
                    {/* Content Panel - Left */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left order-last lg:order-first">
                      <span className="inline-block text-[#e34115] font-bold text-sm lg:text-base uppercase tracking-wider mb-4">
                        {slide.badge}
                      </span>
                      <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-heading leading-[1.15] mb-6 whitespace-pre-line tracking-tight">
                        {slide.title}
                      </h1>
                      <p className="text-body text-base sm:text-lg lg:text-[17px] leading-relaxed mb-10 max-w-xl opacity-90">
                        {slide.desc}
                      </p>
                      <div>
                        <a
                          href="#inquiry"
                          className="inline-flex items-center justify-center bg-[#e34115] hover:bg-[#c43a12] text-white font-bold text-base px-8 py-3.5 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                          Get A Quote
                        </a>
                      </div>
                    </div>

                    {/* Visual Panel - Right */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                      <div className="relative group w-full max-w-[450px]">
                        <div className="absolute inset-0 bg-[#e34115]/10 rounded-3xl blur-2xl group-hover:bg-[#e34115]/20 transition-all duration-500" />
                        <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-premium">
                          <img
                            src={slide.image}
                            alt={slide.badge}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                            onError={(e) => {
                              const parent = (e.target as HTMLImageElement).parentElement;
                              if (parent) {
                                const fallback = document.createElement('div');
                                fallback.className = 'w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm font-medium';
                                fallback.textContent = slide.badge;
                                (e.target as HTMLImageElement).style.display = 'none';
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnail Selector Tabs */}
          <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 z-30">
            <div className="flex gap-16">
              {[
                { number: '01', title: 'Design IP' },
                { number: '02', title: 'RISC-V Solution' },
                { number: '03', title: 'Verification IP' },
              ].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => handleHeroTabClick(idx)}
                  className={`flex items-center gap-3 text-left pt-4 border-t-2 w-48 transition-all duration-300 group ${
                    activeSlide === idx ? 'border-[#e34115]' : 'border-gray-200'
                  }`}
                >
                  <span
                    className={`font-bold text-lg transition-colors ${
                      activeSlide === idx ? 'text-[#e34115]' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  >
                    {tab.number}.
                  </span>
                  <span
                    className={`font-semibold text-base tracking-wide transition-colors ${
                      activeSlide === idx ? 'text-heading font-bold' : 'text-gray-500 group-hover:text-heading'
                    }`}
                  >
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURES SECTION - EXACTLY LIKE OLD DESIGN */}
        {/* ============================================================ */}
        <section className="relative w-full z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {features.map((feature, idx) => {
              const isActive = idx === activeFeatureIndex;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveFeatureIndex(idx)}
                  className="relative h-[300px] flex flex-col justify-end p-8 sm:p-10 group overflow-hidden cursor-pointer"
                >
                  {/* Background Image Panel */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform group-hover:scale-110"
                    style={{ backgroundImage: `url('${feature.bgImage}')` }}
                  />
                  {/* Dark/Orange Color Overlay - Using solid colors like old design */}
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isActive
                        ? 'bg-gradient-to-t from-[#e34115]/95 via-[#e34115]/85 to-[#e34115]/50'
                        : 'bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/80 to-[#1a1a2e]/40'
                    }`}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-start text-white">
                    <h3 className="text-2xl font-bold mb-3 tracking-wide text-white">{feature.title}</h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 max-w-sm opacity-90 group-hover:text-white/95">
                      {feature.desc}
                    </p>
                    <a
                      href={feature.href}
                      className={`inline-flex items-center gap-2 font-bold text-sm tracking-wider uppercase transition-colors duration-300 mt-2 ${
                        isActive
                          ? 'text-white hover:text-white/70'
                          : 'text-[#e34115] group-hover:text-white'
                      }`}
                    >
                      Read More
                      <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>
                  </div>
                  
                  {/* Bottom active-border line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* ABOUT SECTION - WITH INLINE STYLES AS FALLBACK */}
        {/* ============================================================ */}
        <section className="py-20 lg:py-28 bg-white" id="about">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Visual side */}
              <div className="lg:col-span-6">
                <div className="relative">
                  <img
                    src="images/about_engineering.png"
                    alt="About Maxvy VLSI Team"
                    className="w-full h-auto object-cover rounded-[32px] shadow-premium transform hover:scale-[1.01] transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Right Info side */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="mb-8">
                  {/* About Us label with line - using inline styles for reliability */}
                  <div className="flex items-center gap-4 mb-2">
                    <span style={{ color: '#e34115', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      About Us
                    </span>
                    <div style={{ height: '2px', width: '48px', backgroundColor: 'rgba(227, 65, 21, 0.3)' }} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-heading mb-6 leading-tight">
                    Maximum Value for Growth & Quality
                  </h2>
                  <p className="text-heading/90 font-medium text-lg mb-6 leading-relaxed">
                    <strong>MAXVY</strong> means providing maximum value to its Employees, Customers,
                    Clients, Vendors and Investors in terms of Growth, Product, Quality, Service, Support,
                    Knowledge Sharing, and ROI.
                  </p>
                  <p className="text-body text-base mb-0 leading-relaxed">
                    We are a fast-growing fabless semiconductor company currently engaged in the fields of
                    RTL design and Verification IP Solutions. We offer our services to shape your concept
                    into silicon products (Silicon Chips), which includes Embedded Product Design, RTL
                    Design and Verification, Analog and Mixed-Signal System Design and Analysis, and
                    Physical Design.
                  </p>
                </div>

                {/* Callout Box with Phone Icon */}
                <div className="flex gap-5 items-start mb-10">
                  <div style={{ color: '#e34115', flexShrink: 0, marginTop: '4px' }}>
                    <PhoneCall size={32} className="transform -rotate-12" style={{ color: '#e34115' }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-body mb-2">
                      Contact us directly. <span className="text-heading font-semibold">We are ready to answer your technical questions.</span>
                    </p>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-bold text-2xl text-heading">
                      <a href="tel:+918970592090" style={{ color: '#1a1a2e', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e34115'} onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a2e'}>
                        +91 89705 92090
                      </a>
                      <span className="text-gray-400 text-base font-normal">or</span>
                      <a href="mailto:info@maxvytech.com" style={{ color: '#1a1a2e', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e34115'} onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a2e'}>
                        info@maxvytech.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Get A Quote Button */}
                <div>
                  <a
                    href="#inquiry"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#e34115',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '16px',
                      padding: '14px 32px',
                      borderRadius: '6px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c43a12';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(227, 65, 21, 0.3), 0 4px 6px -2px rgba(227, 65, 21, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#e34115';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    }}
                  >
                    Get A Quote
                    <ChevronRight size={16} style={{ marginLeft: '8px' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SERVICES SECTION - WITH FORCED STYLES */}
        {/* ============================================================ */}
        <section className="bg-white relative" id="services" style={{ backgroundColor: '#ffffff' }}>
          <div style={{ backgroundColor: '#e34115', position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '420px' }}>
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: "url('/assets/img/bg/services.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
                pointerEvents: 'none',
                mixBlendMode: 'luminosity',
              }}
            />
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px', justifyContent: 'center' }}>
                  <div style={{ height: '2px', width: '48px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
                  <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Services
                  </span>
                  <div style={{ height: '2px', width: '48px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
                </div>
                <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#ffffff', lineHeight: '1.2' }}>
                  What We Offer for You
                </h2>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginTop: '-370px', position: 'relative', zIndex: 20, paddingBottom: '80px' }}>
            <div style={{ position: 'relative', paddingLeft: '32px', paddingRight: '32px' }}>
              <button 
                className="services-prev" 
                style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '185px',
                  transform: 'translateY(-50%)',
                  zIndex: 30,
                  width: '44px',
                  height: '44px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#e34115';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="services-next"
                style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '185px',
                  transform: 'translateY(-50%)',
                  zIndex: 30,
                  width: '44px',
                  height: '44px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#e34115';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <ChevronRight size={20} />
              </button>

              <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                initialSlide={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: '.services-prev',
                  nextEl: '.services-next',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                onSlideChange={(swiper) => {
                  const isDesktop = window.innerWidth >= 1024;
                  const activeIdx = isDesktop 
                    ? (swiper.realIndex + 1) % servicesSlider.length 
                    : swiper.realIndex;
                  setServicesActiveIndex(activeIdx);
                }}
                className="w-full !py-4"
              >
                {servicesSlider.map((service, index) => {
                  const isActive = index === servicesActiveIndex;
                  return (
                    <SwiperSlide key={index}>
                      <div
                        onMouseEnter={() => setServicesActiveIndex(index)}
                        style={{
                          borderRadius: '16px',
                          border: isActive ? '2px solid #e34115' : '1px solid #e5e7eb',
                          boxShadow: isActive 
                            ? '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' 
                            : '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          overflow: 'hidden',
                          height: isActive ? '420px' : '370px',
                          backgroundColor: isActive ? '#f2f4f7' : '#ffffff',
                          cursor: 'pointer',
                        }}
                      >
                        <div 
                          style={{
                            padding: '32px 40px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            gap: '24px',
                            flexGrow: 1,
                          }}
                        >
                          {/* Orange bordered circle with icon */}
                          <div 
                            style={{
                              width: '80px',
                              height: '80px',
                              borderRadius: '50%',
                              border: '2px solid #e34115',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#ffffff',
                              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <img 
                              src={service.icon} 
                              alt={service.title} 
                              style={{
                                width: '32px',
                                height: '32px',
                                objectFit: 'contain',
                              }}
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                          <div>
                            <h4 
                              style={{
                                fontSize: '20px',
                                fontWeight: 700,
                                marginBottom: '8px',
                                color: '#e34115',
                              }}
                            >
                              {service.title}
                            </h4>
                            <p 
                              style={{
                                color: '#6b7280',
                                fontSize: '14px',
                                lineHeight: '1.625',
                                maxWidth: '320px',
                                margin: '0 auto',
                              }}
                            >
                              {service.desc}
                            </p>
                          </div>
                        </div>
                        {isActive && (
                          <a
                            href="#inquiry"
                            style={{
                              width: '100%',
                              backgroundColor: '#e34115',
                              color: '#ffffff',
                              fontWeight: 700,
                              padding: '16px 0',
                              textAlign: 'center',
                              transition: 'background-color 0.3s ease',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              textDecoration: 'none',
                              marginTop: 'auto',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#c43a12';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#e34115';
                            }}
                          >
                            Inquire Details
                            <ChevronRight size={16} />
                          </a>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div style={{ marginTop: '64px', textAlign: 'center', color: '#1a1a2e', fontWeight: 500, fontSize: '16px' }}>
              Innovative Silicon Solutions that Accelerate Chip Development from Concept to Silicon.{" "}
              <a
                href="#inquiry"
                style={{
                  color: '#e34115',
                  fontWeight: 700,
                  textDecoration: 'none',
                  marginLeft: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c43a12';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#e34115';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                Make A Request
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* INQUIRY FORM */}
        {/* ============================================================ */}
        <section className="py-20 lg:py-28 bg-white" id="inquiry">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <span className="text-[#e34115] text-sm font-bold uppercase tracking-wider block mb-2">
                    Inquiry
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-heading">
                    Request A Quote
                  </h2>
                </div>

                {inquirySubmitted ? (
                  <div className="bg-[#e34115]/5 border border-[#e34115]/20 p-8 rounded-2xl text-center max-w-xl shadow-premium">
                    <div className="w-16 h-16 rounded-full bg-[#e34115]/10 flex items-center justify-center text-[#e34115] mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-heading mb-3">Inquiry Submitted!</h3>
                    <p className="text-body text-base mb-6 leading-relaxed">
                      Thank you for reaching out to Maxvy Technologies. We have received your project details and service inquiry. Our engineering team will review it and follow up within 24 hours.
                    </p>
                    <button
                      onClick={handleInquiryReset}
                      className="bg-[#e34115] hover:bg-[#c43a12] text-white font-bold px-6 py-2.5 rounded-md transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-6 max-w-2xl">
                    {inquiryError && (
                      <div className="bg-red-50 text-red-600 text-sm font-semibold p-4 rounded-lg border border-red-100">
                        {inquiryError}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-heading">
                          Your Name / Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={inquiryFormData.company}
                          onChange={handleInquiryChange}
                          placeholder="Company Name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e34115] focus:ring-1 focus:ring-[#e34115] focus:outline-none transition-all duration-200 text-heading placeholder-gray-400"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-heading">
                          Service Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="category"
                          value={inquiryFormData.category}
                          onChange={handleInquiryChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e34115] focus:ring-1 focus:ring-[#e34115] focus:outline-none transition-all duration-200 text-heading bg-white"
                        >
                          <option value="1">RTL Design IP</option>
                          <option value="2">Verification IP</option>
                          <option value="3">RISC-V Solution</option>
                          <option value="4">SoC Design / Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-heading">
                          Project Timeline <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={inquiryFormData.timeline}
                          onChange={handleInquiryChange}
                          placeholder="e.g. 3 Months, 6 Months"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e34115] focus:ring-1 focus:ring-[#e34115] focus:outline-none transition-all duration-200 text-heading placeholder-gray-400"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-heading">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={inquiryFormData.phone}
                          onChange={handleInquiryChange}
                          placeholder="Your Phone Number"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e34115] focus:ring-1 focus:ring-[#e34115] focus:outline-none transition-all duration-200 text-heading placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-heading">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={inquiryFormData.email}
                        onChange={handleInquiryChange}
                        placeholder="Your Business Email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e34115] focus:ring-1 focus:ring-[#e34115] focus:outline-none transition-all duration-200 text-heading placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-[#e34115] hover:bg-[#c43a12] text-white font-bold px-8 py-3.5 rounded-md hover:shadow-glow transition-all duration-300 gap-2 transform active:scale-95"
                      >
                        Submit Inquiry
                        <Send size={16} />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#e34115]/5 rounded-2xl blur-lg" />
                  <img
                    src="images/inquiry_semiconductor.png"
                    alt="Inquiry Semiconductor Wafer"
                    className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-premium transform hover:scale-[1.01] transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
             
     {/* ============================================================ */}
        {/* CLIENT LOGO SLIDER */}{/* ============================================================ */}
        {/* ALLIANCE SECTION - EXACTLY MATCHING REFERENCE CSS */}
        {/* ============================================================ */}
        <section 
          className="py-20 lg:py-28 relative z-10" 
          id="alliance"
          style={{ 
            backgroundImage: "url('assets/img/bg/team-bg.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* White background strip for desktop (from the CSS) */}
          <div 
            className="hidden lg:block absolute left-0 w-full z-[-1]"
            style={{ 
              bottom: '260px', 
              height: '332px', 
              background: '#ffffff' 
            }}
          />

          <div className="max-w-7xl mx-auto px-6">
            
            {/* Video Pulse & Title Header */}
            <div className="text-center relative z-10">
              
              {/* Orange Play Button with Pulse Animation */}
              <div 
                className="video-pulse relative mx-auto z-[4] rounded-full shadow-[0_10px_30px_rgba(227,65,21,0.3)] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(227,65,21,0.4)]"
                style={{ 
                  background: '#e34115', 
                  width: '100px', 
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full h-full flex items-center justify-center text-white bg-transparent border-none cursor-pointer rounded-full"
                  aria-label="Play alliance video"
                >
                  <Play size={24} className="ml-1 fill-current" />
                </button>
              </div>

              {/* Strategic Alliance Header with Lines */}
              <div className="mt-8 mb-16">
                <div className="flex items-center justify-center gap-4 mb-1">
                  <div className="h-[2px] w-12 bg-[rgba(227,65,21,0.3)]" />
                  <span 
                    className="font-bold uppercase tracking-wider text-sm"
                    style={{ color: '#e34115' }}
                  >
                    Strategic Alliance
                  </span>
                  <div className="h-[2px] w-12 bg-[rgba(227,65,21,0.3)]" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2" style={{ color: '#161b1f' }}>
                  Silicon Verified (SilVer) Alliance
                </h2>
              </div>
            </div>

            {/* Group Cards Grid */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {[
                {
                  group: 'RTL Design Group',
                  title: 'Digital IP Core Development',
                  image: 'assets/img/team/team-1.jpg',
                  href: '#services',
                },
                {
                  group: 'Verification Group',
                  title: 'SV/UVM & Testbench Architecture',
                  image: 'assets/img/team/team-2.jpg',
                  href: '#services',
                },
                {
                  group: 'Physical Design Group',
                  title: 'Full RTL-to-GDSII Implementation',
                  image: 'assets/img/team/team-3.jpg',
                  href: '#services',
                },
                {
                  group: 'Analog & Mixed-Signal',
                  title: 'Custom Analog Subsystems & Layout',
                  image: 'assets/img/team/team-4.jpg',
                  href: '#services',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-[45%] lg:w-[30%] xl:w-[22%] flex flex-col"
                >
                  <div 
                    className="team__area-item flex flex-col h-full bg-white transition-all duration-[0.4s] ease-out"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      background: '#ffffff',
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full block"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      
                      {/* Icons over Image */}
                      <div 
                        className="absolute right-5 z-10 flex flex-col items-end gap-2"
                        style={{ bottom: '-22px' }}
                      >
                        {/* Hidden Social Icon (Shows on Hover) */}
                        <div 
                          className="team-social-wrapper absolute bottom-[55px] right-0 opacity-0 invisible transition-all duration-[0.4s] ease-out group-hover:opacity-100 group-hover:visible"
                          style={{ transition: 'all 0.4s ease-out 0s' }}
                        >
                          <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                            <li>
                              <a 
                                href="#" 
                                aria-label="LinkedIn"
                                className="flex items-center justify-center w-[45px] h-[45px] rounded-[3px] bg-white text-[#343a40] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-[0.4s] hover:bg-[#e34115] hover:text-white"
                              >
                                <Linkedin size={16} />
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Plus Button */}
                        <a 
                          href={item.href} 
                          className="plus-btn w-[45px] h-[45px] rounded-[3px] bg-white flex items-center justify-center shadow-[0_5px_20px_rgba(164,172,181,0.4)] transition-all duration-[0.4s] ease-out group-hover:bg-[#e34115] group-hover:text-white group-hover:shadow-none"
                          style={{ color: '#343a40' }}
                        >
                          <Plus size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div 
                      className="team-item-content flex-1 flex flex-col justify-center p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-[0.4s] ease-out relative group-hover:bg-[#343a40]"
                      style={{ background: '#ffffff', transition: 'all 0.4s ease-out 0s' }}
                    >
                      <p 
                        className="font-bold text-sm uppercase tracking-[0.5px] m-0 transition-all duration-[0.4s] group-hover:text-white"
                        style={{ color: '#e34115' }}
                      >
                        {item.group}
                      </p>
                      <h4 
                        className="text-xl font-bold mt-1 transition-all duration-[0.4s] group-hover:text-white"
                        style={{ color: '#161b1f', transition: 'all 0.4s ease-out 0s' }}
                      >
                        <a 
                          href={item.href}
                          className="no-underline transition-all duration-[0.4s]"
                          style={{ color: 'inherit' }}
                        >
                          {item.title}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="text-center mt-16">
              <h3 
                className="text-[28px] leading-[1.4] font-bold mb-6"
                style={{ color: '#161b1f' }}
              >
                Interested in partnering or joining our VLSI engineering team?
              </h3>
              <ul className="flex flex-wrap justify-center items-center gap-5 list-none m-0 p-0">
                <li className="pr-5 border-r-2 border-[#ededed]">
                  <a 
                    href="#contact"
                    className="font-bold text-[15px] transition-colors duration-300 hover:text-[#343a40]"
                    style={{ color: '#e34115' }}
                  >
                    Get In Touch
                  </a>
                </li>
                <li className="p-0 border-0">
                  <a 
                    href="#contact"
                    className="font-bold text-[15px] transition-colors duration-300 hover:text-[#343a40]"
                    style={{ color: '#e34115' }}
                  >
                    Explore Careers
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Video Modal */}
          {isVideoOpen && (
            <div 
              className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-fadeIn"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-[999]"
                aria-label="Close video"
              >
                <X size={24} />
              </button>
              
              {/* Click outside target */}
              <div className="absolute inset-0 cursor-pointer" onClick={() => setIsVideoOpen(false)} />
              
              {/* Iframe content */}
              <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-[999]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/0WC-tD-njcA?autoplay=1"
                  title="Strategic Alliance Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Animation Keyframes for the Pulse */}
          <style dangerouslySetInnerHTML={{ __html: `
            .video-pulse::after, .video-pulse::before {
              position: absolute;
              content: "";
              width: 100%;
              height: 100%;
              border: 1px solid #e34115;
              left: 0;
              top: 0;
              border-radius: 50%;
              animation-duration: 2.5s;
              animation-timing-function: linear;
              animation-name: video-animation;
              animation-iteration-count: infinite;
              pointer-events: none;
            }
            .video-pulse::before {
              animation-delay: 1s;
            }
            @keyframes video-animation {
              0% {
                opacity: 0.5;
                transform: scale(1);
              }
              50% {
                opacity: 0.2;
                transform: scale(1.5);
              }
              100% {
                opacity: 0;
                transform: scale(2);
              }
            }

            /* Hover effects for Group card */
            .team__area-item:hover .team-item-content {
              background: #343a40 !important;
            }
            .team__area-item:hover .team-item-content h4 {
              color: #ffffff !important;
            }
            .team__area-item:hover .team-item-content p {
              color: #ffffff !important;
            }
            .team__area-item:hover .plus-btn {
              background: #e34115 !important;
              color: #ffffff !important;
              box-shadow: none !important;
            }
            .team__area-item:hover .team-social-wrapper {
              opacity: 1 !important;
              visibility: visible !important;
            }
          `}} />
        </section>
        {/* ============================================================ */}
        <section className="py-20 bg-white" id="associations">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#e34115] text-sm font-bold uppercase tracking-wider block font-sans">
                    Associations
                  </span>
                  <div className="h-[2px] w-10 bg-[#e34115]" />
                </div>
                <h2 className="text-3xl font-extrabold text-heading mb-4 leading-tight">
                  Trusted by Leading Semiconductor & System Companies
                </h2>
                <p className="text-body text-base leading-relaxed">
                  Maxvy is a trusted partner of top semiconductor players worldwide, delivering high-performance silicon IPs and expert design/verification support.
                </p>
              </div>

              <div className="lg:col-span-8 relative px-10">
                <button className="assoc-prev absolute left-0 top-1/2 -translate-y-1/2 text-[#e34115] hover:text-heading cursor-pointer z-30 transition-all duration-300 hover:scale-125" aria-label="Previous slide">
                  <ChevronLeft size={36} />
                </button>
                <button className="assoc-next absolute right-0 top-1/2 -translate-y-1/2 text-[#e34115] hover:text-heading cursor-pointer z-30 transition-all duration-300 hover:scale-125" aria-label="Next slide">
                  <ChevronRight size={36} />
                </button>

                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    prevEl: '.assoc-prev',
                    nextEl: '.assoc-next',
                  }}
                  className="w-full"
                >
                  <SwiperSlide>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                      {slide1Logos.map((logo) => (
                        <div key={logo.id} className="h-20 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-4 hover:border-[#e34115]/20 hover:shadow-premium transition-all duration-300 group cursor-pointer">
                          <img
                            src={logo.src}
                            alt={logo.name}
                            title={logo.name}
                            className="max-h-12 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                      {slide2Logos.map((logo) => {
                        const content = (
                          <div className="h-20 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-4 hover:border-[#e34115]/20 hover:shadow-premium transition-all duration-300 group cursor-pointer">
                            <img
                              src={logo.src}
                              alt={logo.name}
                              title={logo.name}
                              className="max-h-12 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                        );
                        if (logo.link) {
                          return (
                            <a key={logo.id} href={logo.link} target="_blank" rel="noopener noreferrer" className="block">
                              {content}
                            </a>
                          );
                        }
                        return <div key={logo.id}>{content}</div>;
                      })}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* ============================================================ */}
            {/* UPDATED BOTTOM SECTION TO MATCH 2ND REFERENCE EXACTLY */}
            {/* ============================================================ */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-heading mb-6">
                Interested in partnering or joining our VLSI engineering team?
              </h3>
              
              <div className="flex items-center justify-center gap-5">
                <a 
                  href="#contact" 
                  className="text-[#e34115] font-semibold hover:text-heading transition-colors duration-300"
                >
                  Get In Touch
                </a>
                
                {/* Vertical Divider Line */}
                <div className="w-[1px] h-5 bg-gray-300"></div>
                
                <a 
                  href="#contact" 
                  className="text-[#e34115] font-semibold hover:text-heading transition-colors duration-300"
                >
                  Explore Careers
                </a>
              </div>
            </div>
          </div>
        </section>

     {/* ============================================================ */}
        {/* FAQ */}
        {/* ============================================================ */}
        <section className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden" id="faq">
          <div className="absolute inset-y-0 left-0 w-full lg:w-[25%] xl:w-[22%] bg-[#e34115] hidden lg:block overflow-hidden pointer-events-none">
            <img 
              src="/assets/img/bg/faoq.jpg" 
              alt="FAQ Background portrait" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#e34115]/5 rounded-3xl blur-lg" />
                  <img
                    src="images/faq_verification.png"
                    alt="FAQ Logic Verification"
                    className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-heavy transform hover:scale-[1.01] transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#e34115] text-sm font-bold uppercase tracking-wider">
                      FAQ
                    </span>
                    <div className="h-[2px] w-12 bg-[#e34115]/30" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-heading">
                    Some Questions & Answers
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-premium transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-heading hover:text-[#e34115] transition-colors focus:outline-none"
                        >
                          <span className="max-w-[90%]">{faq.question}</span>
                          {isOpen ? (
                            <Minus size={18} className="text-[#e34115] flex-shrink-0 ml-4" />
                          ) : (
                            <Plus size={18} className="text-[#e34115] flex-shrink-0 ml-4" />
                          )}
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-[300px]' : 'max-h-0 overflow-hidden'
                          }`}
                        >
                          <div className="p-5 pt-0 text-body text-sm sm:text-base leading-relaxed bg-white">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* =============================================== */}
                {/* UPDATED BOTTOM PROMPT SECTION */}
                {/* =============================================== */}
                <div className="mt-8 mb-4 flex items-center gap-4 text-heading font-semibold text-sm sm:text-base">
                  {/* Made the black circle slightly larger and darker (bg-black) */}
                  <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 select-none shadow-sm">
                    <span className="font-bold text-lg">?</span>
                  </div>
                  <p>
                    If you have more questions{' '}
                    {/* Changed to orange text, hover color to dark */}
                    <a href="#contact" className="text-[#e34115] hover:text-heading transition-colors font-bold ml-1">
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* ============================================================ */}
        {/* BLOG */}
        {/* ============================================================ */}
        <section className="blog__two py-20 lg:py-28 bg-white" id="blog">
          <div className="max-w-7xl mx-auto px-6">
            <div className="row mb-55 text-center">
              <div className="col-xl-12">
                <div className="blog__two-title mb-16">
                  <span className="subtitle-page-two-center text-sm font-bold uppercase tracking-wider block mb-2 font-sans text-[#e34115]">
                    News
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-2" style={{ color: '#161b1f' }}>
                    Maxvy Insights & Announcements
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {blogArticles.map((article) => (
                <article
                  key={article.id}
                  className="w-full md:w-[45%] lg:w-[30%] flex flex-col blog__two-item bg-white rounded-lg shadow-premium overflow-hidden border border-gray-100"
                >
                  <div className="blog__two-item-image relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-auto"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute top-0 left-3 bg-[#e34115] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                      <a href="#inquiry" className="text-white hover:text-white/80">{article.tag}</a>
                    </span>
                  </div>

                  <div className="blog__two-item-content p-5">
                    <div>
                      {/* UPDATED DATE: Forcefully applied orange hex color */}
                      <span className="blog-date text-sm font-medium" style={{ color: '#e34115' }}>
                        {article.date}
                      </span>
                      <h4 className="font-bold text-heading text-lg my-2">
                        <a href="#inquiry" className="hover:text-[#e34115] transition-colors">{article.title}</a>
                      </h4>
                      <a href="#inquiry" className="simple-btn inline-flex items-center gap-1 text-[#e34115] font-bold hover:text-[#c43a12] transition-colors group">
                        Read More
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    <div className="blog__two-item-content-post flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                      <div className="blog__two-item-content-post-image relative flex items-center justify-center w-10 h-10 bg-gray-50 border border-gray-100 rounded-full overflow-hidden">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <User size={16} className="text-gray-400 absolute z-0" />
                      </div>
                      <div className="blog__two-item-content-post-title">
                        <span className="text-xs text-body">
                          <a href="#" className="hover:text-[#e34115]">Posted By</a>
                        </span>
                        <h5 className="font-semibold text-heading text-sm">{article.author.name}</h5>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* ============================================================ */}
        {/* PROCESS SECTION */}
        {/* ============================================================ */}
        <section className="process__area py-20 lg:py-28 bg-[#fcfbfa]" id="process">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="row mb-12 text-center">
              <div className="col-xl-12">
                <div className="section-title-center inline-block relative">
                  <span className="subtitle-page-two-center text-sm font-bold uppercase tracking-wider block mb-1 text-[#e34115] relative px-16">
                    Our Process
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-4" style={{ color: '#161b1f' }}>
                    From concept to <span style={{ color: '#e34115' }}>creation</span>.
                  </h2>
                  <p className="mx-auto text-gray-500 text-base sm:text-lg leading-relaxed font-medium mt-4 max-w-3xl"
                    style={{ color: '#2c2c2c', fontSize: '16px', fontWeight: 500, lineHeight: '1.6' }}>
                    A systematic, quality-focused roadmap that brings cutting-edge silicon architectures to life safely and efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="flex flex-wrap justify-center gap-6 process-timeline-row mt-12 relative z-10">
              
              {/* Step 01: Research */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[18%] flex flex-col col-timeline-step">
                <div className="process-step text-center p-8 bg-white rounded-2xl border border-[rgba(227,65,21,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full w-full flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(227,65,21,0.15)] hover:border-[#e34115] group">
                  <div className="process-icon-wrap relative inline-block mb-6">
                    <div className="process-icon w-20 h-20 rounded-full bg-white border-2 border-[#e34115] text-[#e34115] flex items-center justify-center mx-auto shadow-[0_8px_20px_rgba(227,65,21,0.15)] transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:rotate-5">
                      <Search size={28} />
                    </div>
                    <span className="step-number absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e34115] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(227,65,21,0.3)] transition-all duration-300 whitespace-nowrap group-hover:bg-[#161b1f] group-hover:shadow-[0_4px_10px_rgba(22,27,31,0.3)]">
                      STEP 01
                    </span>
                  </div>
                  <h4 className="step-title text-xl font-bold text-[#161b1f] mt-4 mb-3 transition-colors duration-300 group-hover:text-[#e34115]">Research</h4>
                  <p className="step-desc text-[15px] text-[#333333] font-medium leading-relaxed px-1">Future-focused technology research and feasibility studies.</p>
                </div>
              </div>

              {/* Step 02: Design */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[18%] flex flex-col col-timeline-step">
                <div className="process-step text-center p-8 bg-white rounded-2xl border border-[rgba(227,65,21,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full w-full flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(227,65,21,0.15)] hover:border-[#e34115] group">
                  <div className="process-icon-wrap relative inline-block mb-6">
                    <div className="process-icon w-20 h-20 rounded-full bg-white border-2 border-[#e34115] text-[#e34115] flex items-center justify-center mx-auto shadow-[0_8px_20px_rgba(227,65,21,0.15)] transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:rotate-5">
                      <Pencil size={28} />
                    </div>
                    <span className="step-number absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e34115] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(227,65,21,0.3)] transition-all duration-300 whitespace-nowrap group-hover:bg-[#161b1f] group-hover:shadow-[0_4px_10px_rgba(22,27,31,0.3)]">
                      STEP 02
                    </span>
                  </div>
                  <h4 className="step-title text-xl font-bold text-[#161b1f] mt-4 mb-3 transition-colors duration-300 group-hover:text-[#e34115]">Design</h4>
                  <p className="step-desc text-[15px] text-[#333333] font-medium leading-relaxed px-1">Architecture blueprinting and physical chip layout design.</p>
                </div>
              </div>

              {/* Step 03: Fabrication (NORMAL DEFAULT STATE NOW) */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[18%] flex flex-col col-timeline-step">
                <div className="process-step text-center p-8 bg-white rounded-2xl border border-[rgba(227,65,21,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full w-full flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(227,65,21,0.15)] hover:border-[#e34115] group">
                  <div className="process-icon-wrap relative inline-block mb-6">
                    <div className="process-icon w-20 h-20 rounded-full bg-white border-2 border-[#e34115] text-[#e34115] flex items-center justify-center mx-auto shadow-[0_8px_20px_rgba(227,65,21,0.15)] transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:rotate-5">
                      <Layers size={28} />
                    </div>
                    <span className="step-number absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e34115] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(227,65,21,0.3)] transition-all duration-300 whitespace-nowrap group-hover:bg-[#161b1f] group-hover:shadow-[0_4px_10px_rgba(22,27,31,0.3)]">
                      STEP 03
                    </span>
                  </div>
                  <h4 className="step-title text-xl font-bold text-[#161b1f] mt-4 mb-3 transition-colors duration-300 group-hover:text-[#e34115]">Fabrication</h4>
                  <p className="step-desc text-[15px] text-[#333333] font-medium leading-relaxed px-1">Advanced foundry manufacturing and physical layering.</p>
                </div>
              </div>

              {/* Step 04: Testing */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[18%] flex flex-col col-timeline-step">
                <div className="process-step text-center p-8 bg-white rounded-2xl border border-[rgba(227,65,21,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full w-full flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(227,65,21,0.15)] hover:border-[#e34115] group">
                  <div className="process-icon-wrap relative inline-block mb-6">
                    <div className="process-icon w-20 h-20 rounded-full bg-white border-2 border-[#e34115] text-[#e34115] flex items-center justify-center mx-auto shadow-[0_8px_20px_rgba(227,65,21,0.15)] transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:rotate-5">
                      <HeartPulse size={28} />
                    </div>
                    <span className="step-number absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e34115] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(227,65,21,0.3)] transition-all duration-300 whitespace-nowrap group-hover:bg-[#161b1f] group-hover:shadow-[0_4px_10px_rgba(22,27,31,0.3)]">
                      STEP 04
                    </span>
                  </div>
                  <h4 className="step-title text-xl font-bold text-[#161b1f] mt-4 mb-3 transition-colors duration-300 group-hover:text-[#e34115]">Testing</h4>
                  <p className="step-desc text-[15px] text-[#333333] font-medium leading-relaxed px-1">Rigorous hardware emulation and post-silicon validation.</p>
                </div>
              </div>

              {/* Step 05: Deployment */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[18%] flex flex-col col-timeline-step">
                <div className="process-step text-center p-8 bg-white rounded-2xl border border-[rgba(227,65,21,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full w-full flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(227,65,21,0.15)] hover:border-[#e34115] group">
                  <div className="process-icon-wrap relative inline-block mb-6">
                    <div className="process-icon w-20 h-20 rounded-full bg-white border-2 border-[#e34115] text-[#e34115] flex items-center justify-center mx-auto shadow-[0_8px_20px_rgba(227,65,21,0.15)] transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:rotate-5">
                      <Globe size={28} />
                    </div>
                    <span className="step-number absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e34115] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(227,65,21,0.3)] transition-all duration-300 whitespace-nowrap group-hover:bg-[#161b1f] group-hover:shadow-[0_4px_10px_rgba(22,27,31,0.3)]">
                      STEP 05
                    </span>
                  </div>
                  <h4 className="step-title text-xl font-bold text-[#161b1f] mt-4 mb-3 transition-colors duration-300 group-hover:text-[#e34115]">Deployment</h4>
                  <p className="step-desc text-[15px] text-[#333333] font-medium leading-relaxed px-1">Delivering ready-to-scale silicon solutions globally.</p>
                </div>
              </div>

            </div>
          </div>

          {/* CSS for the connecting line */}
          <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 1200px) {
              .process-timeline-row::before {
                content: "";
                position: absolute;
                top: 55px;
                left: 8%;
                right: 8%;
                height: 3px;
                background: linear-gradient(90deg, transparent, rgba(227, 65, 21, 0.2) 20%, rgba(227, 65, 21, 0.2) 80%, transparent);
                z-index: 0;
              }
            }
            .subtitle-page-two-center {
              display: inline-block;
              position: relative;
              font-weight: 700;
              color: #e34115;
              text-transform: capitalize;
              z-index: 1;
              margin-bottom: 6px;
              padding: 0 80px;
            }
            .subtitle-page-two-center::before {
              position: absolute;
              top: 12px;
              content: "";
              left: 0;
              width: 65px;
              height: 1px;
              background: #e34115;
            }
            .subtitle-page-two-center::after {
              position: absolute;
              top: 12px;
              content: "";
              right: 0;
              width: 65px;
              height: 1px;
              background: #e34115;
            }
          `}} />
        </section>
       {/* ============================================================ */}
        {/* INDUSTRIES SECTION - MATCHING REFERENCE IMAGE */}
        {/* ============================================================ */}
        <section className="industries__area py-20 lg:py-28 bg-white overflow-hidden" id="industries">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header Title */}
            <div className="row mb-12 text-center">
              <div className="col-xl-12">
                <div className="section-title-center inline-block relative">
                  <span className="subtitle-page-two-center text-sm font-bold uppercase tracking-wider block mb-1 text-[#e34115] relative px-16">
                    Industries We Serve
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mt-4" style={{ color: '#161b1f' }}>
                    Technology that empowers <span style={{ color: '#e34115' }}>every industry</span>.
                  </h2>
                  <p className="mx-auto text-gray-500 text-base sm:text-lg leading-relaxed font-medium mt-4 max-w-3xl"
                    style={{ color: '#2c2c2c', fontSize: '16px', fontWeight: 500, lineHeight: '1.6' }}>
                    From high-performance smart mobility to secure medical applications and next-gen AI processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Industry Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              
              {/* 1. Automotive */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[15%] flex flex-col">
                <div className="industry-card bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-10 shadow-[0_5px_20px_rgba(0,0,0,0.02)] h-full w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(227,65,21,0.12)] hover:border-[#e34115] group">
                  <div className="industry-icon-wrap w-[75px] h-[75px] rounded-full bg-[rgba(227,65,21,0.06)] text-[#e34115] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_20px_rgba(227,65,21,0.25)]">
                    <Car size={26} />
                  </div>
                  <h5 className="industry-title text-[19px] font-bold text-[#161b1f] text-center transition-colors duration-300 group-hover:text-[#e34115]">Automotive</h5>
                </div>
              </div>

              {/* 2. Healthcare */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[15%] flex flex-col">
                <div className="industry-card bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-10 shadow-[0_5px_20px_rgba(0,0,0,0.02)] h-full w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(227,65,21,0.12)] hover:border-[#e34115] group">
                  <div className="industry-icon-wrap w-[75px] h-[75px] rounded-full bg-[rgba(227,65,21,0.06)] text-[#e34115] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_20px_rgba(227,65,21,0.25)]">
                    <HeartPulse size={26} />
                  </div>
                  <h5 className="industry-title text-[19px] font-bold text-[#161b1f] text-center transition-colors duration-300 group-hover:text-[#e34115]">Healthcare</h5>
                </div>
              </div>

              {/* 3. Industrial Automation */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[15%] flex flex-col">
                <div className="industry-card bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-10 shadow-[0_5px_20px_rgba(0,0,0,0.02)] h-full w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(227,65,21,0.12)] hover:border-[#e34115] group">
                  <div className="industry-icon-wrap w-[75px] h-[75px] rounded-full bg-[rgba(227,65,21,0.06)] text-[#e34115] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_20px_rgba(227,65,21,0.25)]">
                    <Bot size={26} />
                  </div>
                  <h5 className="industry-title text-[19px] font-bold text-[#161b1f] text-center transition-colors duration-300 group-hover:text-[#e34115]">Industrial Automation</h5>
                </div>
              </div>

              {/* 4. Consumer Tech */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[15%] flex flex-col">
                <div className="industry-card bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-10 shadow-[0_5px_20px_rgba(0,0,0,0.02)] h-full w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(227,65,21,0.12)] hover:border-[#e34115] group">
                  <div className="industry-icon-wrap w-[75px] h-[75px] rounded-full bg-[rgba(227,65,21,0.06)] text-[#e34115] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_20px_rgba(227,65,21,0.25)]">
                    <Smartphone size={26} />
                  </div>
                  <h5 className="industry-title text-[19px] font-bold text-[#161b1f] text-center transition-colors duration-300 group-hover:text-[#e34115]">Consumer Tech</h5>
                </div>
              </div>

              {/* 5. Telecom */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[15%] flex flex-col">
                <div className="industry-card bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-10 shadow-[0_5px_20px_rgba(0,0,0,0.02)] h-full w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(227,65,21,0.12)] hover:border-[#e34115] group">
                  <div className="industry-icon-wrap w-[75px] h-[75px] rounded-full bg-[rgba(227,65,21,0.06)] text-[#e34115] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_20px_rgba(227,65,21,0.25)]">
                    <Radio size={26} />
                  </div>
                  <h5 className="industry-title text-[19px] font-bold text-[#161b1f] text-center transition-colors duration-300 group-hover:text-[#e34115]">Telecom</h5>
                </div>
              </div>

              {/* 6. Artificial Intelligence */}
              <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[15%] flex flex-col">
                <div className="industry-card bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-10 shadow-[0_5px_20px_rgba(0,0,0,0.02)] h-full w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(227,65,21,0.12)] hover:border-[#e34115] group">
                  <div className="industry-icon-wrap w-[75px] h-[75px] rounded-full bg-[rgba(227,65,21,0.06)] text-[#e34115] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#e34115] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_20px_rgba(227,65,21,0.25)]">
                    <Cpu size={26} />
                  </div>
                  <h5 className="industry-title text-[19px] font-bold text-[#161b1f] text-center transition-colors duration-300 group-hover:text-[#e34115]">Artificial Intelligence</h5>
                </div>
              </div>

            </div>
          </div>

          {/* CSS for the header lines exactly from your code */}
          <style dangerouslySetInnerHTML={{ __html: `
            .subtitle-page-two-center {
              display: inline-block;
              position: relative;
              font-weight: 700;
              color: #e34115;
              text-transform: capitalize;
              z-index: 1;
              margin-bottom: 6px;
              padding: 0 80px;
            }
            .subtitle-page-two-center::before {
              position: absolute;
              top: 13px;
              content: "";
              left: 0;
              width: 65px;
              height: 1px;
              background: #e34115;
            }
            .subtitle-page-two-center::after {
              position: absolute;
              top: 13px;
              content: "";
              right: 0;
              width: 65px;
              height: 1px;
              background: #e34115;
            }
          `}} />
        </section>

    
        
      </div>
    </>
  );
}