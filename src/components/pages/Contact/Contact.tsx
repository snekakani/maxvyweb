import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, Check, Linkedin, Twitter, Youtube, Github } from 'lucide-react';
import SEO from '../../common/SEO';
import PageHero from '../../common/PageHero';
import SectionTitle from '../../common/SectionTitle';
import Accordion from '../../common/Accordion';
import { useReveal } from '../../../hooks/useReveal';
import { faqs } from '../../../data/company';

export default function Contact() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO
        title="Contact — MAXVY Technologies"
        description="Get in touch with MAXVY Technologies. We respond within one business day."
        canonical="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's build something"
        description="Tell us about your program. We will respond within one business day with the right architect on the line."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      {/* Contact info + form */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            {/* Info */}
            <div className="reveal">
              <SectionTitle
                align="left"
                eyebrow="Contact information"
                title="Reach us directly"
                description="Prefer email or phone? Use the channels below — we are here Mon–Fri, 9:00–18:00 IST."
              />
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { Icon: Mail, label: 'Email', value: 'info@maxvytech.com', href: 'mailto:info@maxvytech.com' },
                  { Icon: Phone, label: 'Phone', value: '+91 461 200 0000', href: 'tel:+914612000000' },
                  { Icon: MapPin, label: 'Office', value: 'MAXVY Technologies, Tirunelveli, Tamil Nadu, India', href: '#' },
                  { Icon: Clock, label: 'Business hours', value: 'Mon–Fri · 9:00–18:00 IST', href: '#' },
                ].map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-4 transition-all hover:border-primary-200 hover:shadow-soft"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {label}
                      </div>
                      <div className="text-sm font-medium text-navy-800">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Follow us
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {[Linkedin, Twitter, Youtube, Github].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="social link"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal" data-reveal-delay="120">
              <div className="rounded-3xl border border-line bg-canvas p-6 shadow-soft lg:p-8">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                      <Check className="h-8 w-8" />
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-navy-800">Message sent</h3>
                    <p className="mt-1 text-sm text-muted">
                      Thank you. A MAXVY architect will respond within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-ghost mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-navy-800">Send us a message</h3>
                    <p className="mt-1 text-sm text-muted">
                      Fields marked * are required.
                    </p>
                    <form
                      className="mt-6 flex flex-col gap-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="First name *" placeholder="Jane" required />
                        <Field label="Last name *" placeholder="Doe" required />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Work email *" placeholder="jane@company.com" type="email" required />
                        <Field label="Company" placeholder="Company Inc." />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <SelectField
                          label="Interest"
                          options={[
                            'IP licensing',
                            'Verification services',
                            'Physical design',
                            'Engineering services',
                            'Consulting',
                            'Careers',
                            'Other',
                          ]}
                        />
                        <Field label="Phone" placeholder="+91 ..." />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your program..."
                          className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>
                      <label className="flex items-start gap-2 text-xs text-muted">
                        <input type="checkbox" required className="mt-0.5" />
                        <span>
                          I agree to be contacted by MAXVY and have read the{' '}
                          <a href="#" className="text-primary-600 hover:underline">
                            privacy policy
                          </a>
                          .
                        </span>
                      </label>
                      <button type="submit" className="btn-primary w-full">
                        Send message <Send className="h-4 w-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-canvas pb-20">
        <div className="container-page">
          <div className="reveal relative h-80 overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
            <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <MapPin className="h-7 w-7" />
              </span>
              <p className="mt-3 text-base font-semibold text-navy-800">Google Map placeholder</p>
              <p className="mt-1 max-w-md text-sm text-muted">
                MAXVY Technologies, Tirunelveli, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Common questions about engaging MAXVY."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </label>
      <select className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
