import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Search, Cpu } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import { services } from '../../data/services';
import { careerPages } from '../../data/careers';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<'products' | 'services' | 'about' | 'careers' | null>(null);
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line bg-white/85 backdrop-blur-xl shadow-soft'
            : 'border-b border-transparent bg-transparent'
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5" aria-label="MAXVY home">
              <img 
                src="/src/images/maxvy300withR.png" 
                alt="MAXVY Logo" 
                className="h-20 w-auto object-contain lg:h-28"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              <NavItem to="/" label="Home" />
              
              {/* About */}
              <Dropdown
                label="About"
                open={openMenu === 'about'}
                onEnter={() => setOpenMenu('about')}
                items={[
                  // { label: 'Company Overview', to: '/about/company-overview', blurb: 'Who we are and what we do.' },
                  { label: 'Why Us', to: '/about/why-us', blurb: 'Why leading chipmakers choose MAXVY.' },
                  { label: 'Knowledge Sharing', to: '/about/knowledge-sharing', blurb: 'Papers, talks and technical articles.' },
                  { label: 'Testimonials', to: '/about/testimonials', blurb: 'What our customers say.' },
                ]}
              />

              {/* Products */}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu('products')}
              >
                <button
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    openMenu === 'products' ? 'text-primary-600' : 'text-navy-800 hover:text-primary-600'
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
              <Dropdown
                label="Services"
                open={openMenu === 'services'}
                onEnter={() => setOpenMenu('services')}
                items={services.map((s) => ({ label: s.name, to: s.path, blurb: s.tagline }))}
              />

              

              {/* Careers */}
              <Dropdown
                label="Careers"
                open={openMenu === 'careers'}
                onEnter={() => setOpenMenu('careers')}
                items={careerPages.map((c) => ({ label: c.name, to: c.path, blurb: c.tagline }))}
              />

              <NavItem to="/contact" label="Contact" />
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2 text-navy-800 transition-colors hover:bg-navy-50"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>
              <Link to="/contact" className="btn-primary hidden sm:inline-flex">
                Get a quote
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-full p-2 text-navy-800 hover:bg-navy-50 lg:hidden"
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
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-primary-600' : 'text-navy-800 hover:text-primary-600'
        }`
      }
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
  return (
    <div className="relative" onMouseEnter={onEnter}>
      <button
        className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          open ? 'text-primary-600' : 'text-navy-800 hover:text-primary-600'
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-line bg-white shadow-lift animate-scale-in">
          <ul className="p-2">
            {items.map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  className="block rounded-xl p-3 transition-colors hover:bg-canvas"
                >
                  <span className="block text-sm font-semibold text-ink">{i.label}</span>
                  <span className="block text-xs text-muted">{i.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}