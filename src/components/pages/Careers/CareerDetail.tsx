// CareerDetail.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../common/SEO';
import SectionTitle from '../../common/SectionTitle';
import Testimonials from '../../common/Testimonials';
import CTA from '../../common/CTA';
import FollowUsCard from '../../common/FollowUsCard';
import { useReveal } from '../../../hooks/useReveal';
import { findCareerPage } from '../../../data/careers';
import aboutBanner from '../../../images/about-us_banner.jpeg';

type Props = {
  slug: string;
};

export default function CareerDetail({ slug }: Props) {
  useReveal();
  const page = findCareerPage(slug);

  if (!page) {
    return (
      <div className="container-page py-32 text-center">
        <p className="text-muted">Page not found.</p>
        <Link to="/careers/current-openings" className="mt-4 inline-block bg-[#e34115] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#c43a12] transition-colors">
          Back to careers
        </Link>
      </div>
    );
  }

  const Icon = page.icon;

  // Check if sections should be hidden
  const showBenefits = page.slug === 'life-at-maxvy' || page.slug === 'current-openings';
  const showTestimonials = page.slug === 'current-openings';
  const showPositions = page.slug === 'current-openings';

  // Get the page title without the eyebrow
  const pageTitle = page.name;

  return (
    <>
      <SEO
        title={`${page.name} — MAXVY Technologies`}
        description={page.tagline}
        canonical={page.path}
      />
      
      {/* Hero Section - Updated to match About page style */}
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
                <span className="text-[#0F172A]">{page.name.split(' ')[0]} </span>
                <span className="text-[#e34115]">{page.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                {page.tagline}
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
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
              {/* --- LEFT CONTENT --- */}
              <div>
                <div className="reveal">
                  <h2 className="text-[32px] font-bold text-[#0F172A] mb-4">{pageTitle}</h2>
                  <div className="prose prose-lg max-w-none">
                    {page.hero.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      )
                    ))}
                  </div>
                </div>

                {/* Benefits - Only show for Life at MAXVY and Current Openings */}
                {showBenefits && page.benefits.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Benefits</h3>
                    <p className="text-gray-600 mb-6">The benefits of joining MAXVY through this program.</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {page.benefits.map((b, i) => (
                        <div
                          key={b}
                          className="reveal flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft"
                          data-reveal-delay={i * 60}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e34115]/10 text-[#e34115]">
                            <Check className="h-4 w-4" />
                          </span>
                          <p className="text-sm leading-relaxed text-ink">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials - Only show for Current Openings */}
                {showTestimonials && page.testimonials.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Employee testimonials</h3>
                    <p className="text-gray-600 mb-6">What our people say</p>
                    <div className="mt-6">
                      <Testimonials items={page.testimonials} />
                    </div>
                  </div>
                )}

                {/* Open positions - Only show for Current Openings */}
                {showPositions && page.positions.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Open positions</h3>
                    <p className="text-gray-600 mb-6">Apply today</p>
                    <div className="mt-6">
                      <ul className="flex flex-col gap-3">
                        {page.positions.map((p, i) => (
                          <li
                            key={i}
                            className="reveal flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft transition-all hover:border-[#e34115]/30 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between"
                            data-reveal-delay={i * 60}
                          >
                            <div>
                              <h3 className="text-base font-semibold text-navy-800">{p.title}</h3>
                              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Briefcase className="h-3.5 w-3.5" /> {p.type}
                                </span>
                              </div>
                            </div>
                            <Link to="/contact" className="shrink-0 bg-[#e34115] hover:bg-[#c43a12] text-white font-semibold px-6 py-2.5 rounded-md transition-colors inline-flex items-center gap-2">
                              Apply <ArrowRight className="h-4 w-4" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* --- RIGHT SIDEBAR --- */}
              <div className="lg:pl-4">
                <div className="sticky top-24">
                  {/* Follow Us Card - Only this remains */}
                  <FollowUsCard
                    title="Follow us"
                    companyName="Maxvy Tech"
                    description="Stay connected with us for the latest updates, career opportunities, and insights."
                    buttonText="Follow"
                    facebookImage="/path-to-facebook-preview-image.jpg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="h-12" />
      </div>

      <CTA
        title="Ready to join MAXVY?"
        description="Send us your resume and a short note about what you want to build."
        primaryLabel="Apply now"
        primaryTo="/contact"
        secondaryLabel="View all careers"
        secondaryTo="/careers/current-openings"
      />
    </>
  );
}