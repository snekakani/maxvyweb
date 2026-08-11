import React from 'react';
import { PhoneCall, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
// 1. ADDED: Import the logo the exact same way you did in your Navbar
import footerLogo from '../../images/maxvy300withR.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Partners', href: '#partners' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Blog', href: '#blog' },
    { label: 'Get Quote', href: '#inquiry' },
  ];

  return (
    <footer className="w-full bg-white" id="contact">
      {/* Footer Top Callout */}
      <div className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px_1fr] items-stretch w-full">
          {/* Phone block */}
          <div className="py-6 md:py-8 flex justify-center items-center px-6 md:px-12" style={{ backgroundColor: '#e34115' }}>
            <div className="flex items-center gap-4 text-left">
              <PhoneCall size={32} style={{ color: '#ffffff' }} />
              <div>
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider block">
                  Contact Us Free
                </span>
                <a href="tel:+918970592090" className="text-lg md:text-xl lg:text-2xl font-bold hover:text-white/90 transition-colors whitespace-nowrap" style={{ color: '#ffffff' }}>
                  +91 89705 92090
                </a>
              </div>
            </div>
          </div>

          {/* Logo block - UPDATED HEIGHT FROM h-10 TO h-14 */}
          <div className="bg-white flex items-center justify-center py-4 px-6">
            <a href="#">
              <img
                src={footerLogo}
                alt="MAXVY Technologies"
                className="h-18 w-auto object-contain"
              />
            </a>
          </div>

          {/* Email block */}
          <div className="py-6 md:py-8 flex justify-center items-center px-6 md:px-12" style={{ backgroundColor: '#e34115' }}>
            <div className="flex items-center gap-4 text-left">
              <div className="text-left">
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider block">
                  Contact Us Free
                </span>
                <a href="mailto:info@maxvytech.com" className="text-lg md:text-xl lg:text-2xl font-bold hover:text-white/90 transition-colors whitespace-nowrap" style={{ color: '#ffffff' }}>
                  info@maxvytech.com
                </a>
              </div>
              <Mail size={32} style={{ color: '#ffffff' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Middle (Links & Socials) */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
          {/* Quick links list */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="font-bold text-sm tracking-wide transition-colors hover:text-[#e34115]"
                style={{ color: '#161b1f' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
              { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
              { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                style={{ 
                  backgroundColor: 'rgba(227, 65, 21, 0.05)', 
                  color: '#e34115' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e34115';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(227, 65, 21, 0.05)';
                  e.currentTarget.style.color = '#e34115';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="bg-gray-100/60 py-6 text-center text-sm font-medium text-gray-500">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {currentYear} Maxvy Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;