import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github, Send, Facebook } from 'lucide-react';
import { productCategories } from '../../data/navigation';
import { services } from '../../data/services';
import maxvyLogo from '../../images/Maxvy.png';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#007B7B' }}>
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-20" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl" />

      <div className="container-page relative">
        {/* Newsletter
        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Stay ahead of the silicon curve</h3>
            <p className="mt-2 text-sm text-navy-300">
              Get MAXVY technical briefs, product launches and engineering insights — monthly, no spam.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2 lg:ml-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-navy-300 focus:border-primary-500 focus:outline-none"
            />
            <button type="submit" className="btn-primary shrink-0">
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </form>
        </div> */}

        {/* Main columns */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img 
                src={maxvyLogo} 
                alt="MAXVY Technologies" 
                className="h-10 w-50"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Semiconductor IP design and verification for the world's leading chipmakers. DDR5, MIPI,
              I3C, RISC-V and beyond.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/maxvytech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-orange-400 hover:bg-orange-500 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/LtdMaxvy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-orange-400 hover:bg-orange-500 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/people/MAXVY-Technologies-Pvt-Ltd/100063595280339/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-orange-400 hover:bg-orange-500 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@maxvytechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-orange-400 hover:bg-orange-500 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about/company-overview' },
                { label: 'Products', to: '/products' },
                { label: 'Services', to: '/services/rtl-design' },
                { label: 'Careers', to: '/careers/current-openings' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 transition-colors hover:text-orange-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {productCategories.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    to={c.items[0].path}
                    className="text-white/70 transition-colors hover:text-orange-400"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="font-semibold text-orange-400 hover:text-orange-300">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                <span className="text-white/70 leading-relaxed">
                  #1197/1, 2nd Floor, 22nd Cross (HSR Club Road),<br />
                  16th Main, 3rd Sector, HSR Layout,<br />
                  Bengaluru - 560102
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-orange-400" />
                <a href="mailto:info@maxvytech.com" className="text-white/70 hover:text-orange-400">
                  info@maxvytech.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" />
                <a href="tel:+914612000000" className="text-white/70 hover:text-orange-400">
                  +91 461 200 0000
                </a>
              </li>
            </ul>
            {/* <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Business hours
              </p>
              <p className="mt-1 text-sm text-white/70">Mon–Fri · 9:00–18:00 IST</p>
            </div> */}
          </div>
        </div>

        {/* Services strip
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
            <span className="font-semibold uppercase tracking-wider text-white/60">Services:</span>
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="hover:text-orange-400">
                {s.name}
              </Link>
            ))}
          </div>
        </div> */}

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>2016 - © {new Date().getFullYear()} MAXVY Technologies. All rights reserved.</p>
          {/* <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-orange-400">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400">Terms</a>
            <a href="#" className="hover:text-orange-400">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}