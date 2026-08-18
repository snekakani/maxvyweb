// Navbar.tsx - Separated Top Bar and Navbar with proper alignment
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Search, Mail, Phone, X } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import { careerPages } from '../../data/careers';
import logo from '../../images/maxvy300withR.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<'products' | 'about' | 'careers' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <>
      {/* ========================================================= */}
      {/* TOP BAR - Separate, above navbar */}
      {/* ========================================================= */}
      <div className="w-full z-50 hidden lg:block relative" style={{ backgroundColor: '#e34115' }}>
        <div className="border-b py-2 text-sm" style={{ borderColor: '#c43a12' }}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="mailto:info@maxvytech.com" className="flex items-center gap-2 hover:text-white/90 transition-colors font-medium" style={{ color: '#ffffff' }}>
                <Mail size={14} style={{ color: '#ffffff' }} />
                info@maxvytech.com
              </a>
              <a href="tel:+918970592090" className="flex items-center gap-2 hover:text-white/90 transition-colors font-medium" style={{ color: '#ffffff' }}>
                <Phone size={14} style={{ color: '#ffffff' }} />
                +91 89705 92090
              </a>
            </div>
            <div>
              <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                <strong style={{ color: '#ffffff', marginRight: '4px' }}>News :</strong> Silicon Verified IC Design IP & Solutions Provider
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN NAVBAR - Separate, below top bar */}
      {/* ========================================================= */}
      <header
        className={`w-full z-40 transition-all duration-300 relative ${
          scrolled
            ? 'border-b border-[#eaeaea] bg-white/95 backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)]'
            : 'border-b border-transparent bg-white'
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-page">
          <div className="flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
            {/* Logo - Left aligned */}
            <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="MAXVY home">
              <img 
                src={logo}
                alt="MAXVY Logo" 
                className="h-12 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden xl:flex items-center justify-center gap-0.5 lg:gap-1 flex-1 mx-4">
              <NavItem to="/" label="Home" />
              
              {/* About Dropdown */}
              <Dropdown
                label="About"
                open={openMenu === 'about'}
                onEnter={() => setOpenMenu('about')}
                items={[
                  { label: 'Why Us', to: '/about/why-us', blurb: 'Why leading chipmakers choose MAXVY.' },
                  { label: 'Knowledge Sharing', to: '/about/knowledge-sharing', blurb: 'Papers, talks and technical articles.' },
                  { label: 'Testimonials', to: '/about/testimonials', blurb: 'What our customers say.' },
                ]}
              />

              {/* Products with MegaMenu */}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu('products')}
              >
                <button
                  className={`flex items-center gap-1 rounded-full px-3 lg:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                    openMenu === 'products' ? 'text-[#e34115]' : 'text-[#161b1f] hover:text-[#e34115]'
                  }`}
                >
                  Products
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu === 'products' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openMenu === 'products' && <MegaMenu />}
              </div>

              {/* Services */}
              <NavItem to="/services" label="Services" />

              {/* Careers Dropdown */}
              <Dropdown
                label="Careers"
                open={openMenu === 'careers'}
                onEnter={() => setOpenMenu('careers')}
                items={careerPages.map((c) => ({ label: c.name, to: c.path, blurb: c.tagline }))}
              />

              <NavItem to="/contact" label="Contact" />
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2 transition-colors hover:bg-[#f9f9f9]"
                style={{ color: '#161b1f' }}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <div className="hidden md:block">
                <LanguageSelector />
              </div>
              <Link 
                to="/contact" 
                className="hidden md:inline-flex rounded-full px-4 md:px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#c43a12] whitespace-nowrap"
                style={{ backgroundColor: '#e34115' }}
              >
                Get a quote
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-full p-2 hover:bg-[#f9f9f9] xl:hidden"
                style={{ color: '#161b1f' }}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  return (
    <NavLink
      to={to}
      className={`rounded-full px-3 lg:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
        isActive ? 'text-[#e34115]' : 'text-[#161b1f] hover:text-[#e34115]'
      }`}
    >
      {label}
    </NavLink>
  );
}

function Dropdown({
  label,
  open,
  onEnter,
  items,
}: {
  label: string;
  open: boolean;
  onEnter: () => void;
  items: { label: string; to: string; blurb: string }[];
}) {
  const location = useLocation();
  const isActive = items.some(item => location.pathname === item.to || location.pathname.startsWith(item.to + '/'));
  
  return (
    <div className="relative" onMouseEnter={onEnter}>
      <button
        className={`flex items-center gap-1 rounded-full px-3 lg:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
          open || isActive ? 'text-[#e34115]' : 'text-[#161b1f] hover:text-[#e34115]'
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 w-72 lg:w-80 overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] animate-scale-in" style={{ borderColor: '#eaeaea', borderWidth: '1px' }}>
          <ul className="p-2">
            {items.map((i) => {
              const isItemActive = location.pathname === i.to || location.pathname.startsWith(i.to + '/');
              return (
                <li key={i.to}>
                  <Link
                    to={i.to}
                    className={`block rounded-xl p-3 transition-colors hover:bg-[#f8f8f8] ${
                      isItemActive ? 'bg-[#f8f8f8]' : ''
                    }`}
                  >
                    <span className={`block text-sm font-semibold ${isItemActive ? 'text-[#e34115]' : 'text-[#161b1f]'}`}>
                      {i.label}
                    </span>
                    <span className="block text-xs" style={{ color: '#6b7280' }}>{i.blurb}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}