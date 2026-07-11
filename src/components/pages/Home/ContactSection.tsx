import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import SectionTitle from '../../common/SectionTitle';

export default function ContactSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionTitle
              align="left"
              eyebrow="Contact"
              title="Let's build your next silicon together"
              description="Tell us about your program. We will respond within one business day with the right architect on the line."
            />
            <div className="mt-8 flex flex-col gap-4">
              {[
                { Icon: Mail, label: 'Email', value: 'info@maxvytech.com', href: 'mailto:info@maxvytech.com' },
                { Icon: Phone, label: 'Phone', value: '+91 461 200 0000', href: 'tel:+914612000000' },
                { Icon: MapPin, label: 'Office', value: 'Tirunelveli, Tamil Nadu, India', href: '/contact' },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all hover:border-primary-200 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {label}
                    </div>
                    <div className="text-sm font-medium text-navy-800">{value}</div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
          <div className="reveal" data-reveal-delay="120">
            <div className="rounded-3xl border border-line bg-canvas p-6 shadow-soft lg:p-8">
              <h3 className="text-lg font-semibold text-navy-800">Quick inquiry</h3>
              <p className="mt-1 text-sm text-muted">
                Fill this out and we will route it to the right team.
              </p>
              <form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" placeholder="Your name" />
                  <Field label="Email" placeholder="you@company.com" type="email" />
                </div>
                <Field label="Company" placeholder="Company name" />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your program..."
                    className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <Link to="/contact" className="btn-primary w-full">
                  Send inquiry <ArrowRight className="h-4 w-4" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
      />
    </div>
  );
}
