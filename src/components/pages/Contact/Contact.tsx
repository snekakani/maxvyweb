// Contact.tsx
import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, Check, Linkedin, Twitter, Youtube, Github, Building, Navigation, ExternalLink, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../common/SEO';
import SectionTitle from '../../common/SectionTitle';
import Accordion from '../../common/Accordion';
import { useReveal } from '../../../hooks/useReveal';
import { faqs } from '../../../data/company';
import aboutBanner from '../../../images/about-us_banner.jpeg';

export default function Contact() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const [captchaValue, setCaptchaValue] = useState(generateCaptcha);

  return (
    <>
      <SEO
        title="Contact — MAXVY Technologies"
        description="Get in touch with MAXVY Technologies. We respond within one business day."
        canonical="/contact"
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
                <span className="text-[#0F172A]">GET IN </span>
                <span className="text-[#e34115]">TOUCH</span>
              </h1>
              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                We'd love to hear from you. Reach out to us through any of the channels below.
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
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              {/* Form - Left Side */}
              <div className="reveal" data-reveal-delay="120">
                <div className="rounded-3xl border border-line bg-gradient-to-br from-white to-[#e34115]/10 p-6 shadow-soft lg:p-8">
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex h-full flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
                        <Check className="h-10 w-10" />
                      </div>
                      <h3 className="mt-6 text-2xl font-bold text-navy-800">Message Sent! 🎉</h3>
                      <p className="mt-2 text-sm text-muted max-w-sm">
                        Thank you for reaching out. Our team will get back to you within one business day.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setCaptchaInput('');
                          setCaptchaValue(generateCaptcha());
                        }}
                        className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#e34115]/30 text-[#e34115] font-medium hover:bg-[#e34115]/10 hover:border-[#e34115]/60 transition-all"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-navy-800">Get In Touch</h3>
                        <p className="mt-1 text-sm text-muted">
                          Fill in the form below and we'll get back to you shortly.
                        </p>
                      </div>
                      <form
                        className="mt-6 flex flex-col gap-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (captchaInput === captchaValue) {
                            setSubmitted(true);
                          } else {
                            alert('Invalid captcha. Please try again.');
                            setCaptchaInput('');
                            setCaptchaValue(generateCaptcha());
                          }
                        }}
                      >
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#e34115] focus:ring-2 focus:ring-[#e34115]/20 hover:border-[#e34115]/50"
                          />
                        </div>
                        
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#e34115] focus:ring-2 focus:ring-[#e34115]/20 hover:border-[#e34115]/50"
                          />
                        </div>
                        
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Mobile *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 9876543210"
                            className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#e34115] focus:ring-2 focus:ring-[#e34115]/20 hover:border-[#e34115]/50"
                          />
                        </div>
                        
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Message *
                          </label>
                          <textarea
                            required
                            rows={4}
                            placeholder="Tell us about your inquiry..."
                            className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#e34115] focus:ring-2 focus:ring-[#e34115]/20 hover:border-[#e34115]/50 resize-none"
                          />
                        </div>
                        
                        {/* Captcha */}
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Enter Captcha - Case Sensitive *
                          </label>
                          <div className="mt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <div className="flex-1">
                              <input
                                type="text"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                placeholder="Enter captcha code"
                                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#e34115] focus:ring-2 focus:ring-[#e34115]/20 hover:border-[#e34115]/50"
                                required
                              />
                            </div>
                            <div className="flex h-12 min-w-[120px] items-center justify-center rounded-xl bg-gradient-to-r from-[#e34115]/10 to-[#e34115]/20 font-mono text-lg font-bold text-[#e34115] select-none border border-[#e34115]/30">
                              {captchaValue}
                            </div>
                          </div>
                          <p className="mt-1 text-xs text-muted">Case sensitive - enter exactly as shown</p>
                        </div>

                        <button 
                          type="submit" 
                          className="group btn-primary w-full bg-gradient-to-r from-[#e34115] to-[#c43a12] hover:from-[#c43a12] hover:to-[#b0330e] shadow-lg hover:shadow-[#e34115]/25 transition-all duration-300 text-white"
                        >
                          <span>Send Message</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Info - Right Side */}
              <div className="reveal">
                
                {/* Bengaluru Location */}
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#e34115] to-[#c43a12] text-white">
                      <Building className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-navy-800">Bengaluru Location</h4>
                    <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Main Office</span>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white to-[#e34115]/10 p-5 transition-all hover:border-[#e34115]/40 hover:shadow-soft">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#e34115]/10 opacity-0 transition-opacity group-hover:opacity-50" />
                    <div className="relative">
                      <p className="text-sm text-muted leading-relaxed">
                        MAXVY Technologies Pvt Ltd
                        <br />
                        #1197/1, 2nd floor, 22nd Cross(HSR Club Road),
                        <br />
                        16th main, 3rd Sector, HSR Layout, Bengaluru - 560102
                      </p>
                      <div className="mt-3 flex flex-wrap gap-4">
                        <a href="tel:8970592090" className="flex items-center gap-2 text-sm text-navy-700 hover:text-[#e34115] transition-colors">
                          <Phone className="h-3.5 w-3.5 text-[#e34115]" />
                          8970592090
                        </a>
                        <a href="mailto:info@maxvytech.com" className="flex items-center gap-2 text-sm text-navy-700 hover:text-[#e34115] transition-colors">
                          <Mail className="h-3.5 w-3.5 text-[#e34115]" />
                          info@maxvytech.com
                        </a>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=HSR+Layout+Bengaluru" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#e34115] hover:text-[#c43a12] transition-colors"
                      >
                        <Navigation className="h-3 w-3" />
                        Get Directions
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Tirunelveli Location */}
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <Building className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-navy-800">Tirunelveli Location</h4>
                    <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">Branch Office</span>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white to-blue-50/30 p-5 transition-all hover:border-blue-200 hover:shadow-soft">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-100 opacity-0 transition-opacity group-hover:opacity-50" />
                    <div className="relative">
                      <p className="text-sm text-muted leading-relaxed">
                        MAXVY Technologies Pvt Ltd
                        <br />
                        #7/3, 2nd Floor, Shop No 6, Jayam Vertical Commercial Complex,
                        <br />
                        STC 60 feet Road, Pioneer Kumarasamy Nagar,
                        <br />
                        Tirunelveli – 627 007
                      </p>
                      <div className="mt-3 flex flex-wrap gap-4">
                        <a href="tel:8682914710" className="flex items-center gap-2 text-sm text-navy-700 hover:text-blue-600 transition-colors">
                          <Phone className="h-3.5 w-3.5 text-blue-500" />
                          8682914710
                        </a>
                        <a href="tel:04622914710" className="flex items-center gap-2 text-sm text-navy-700 hover:text-blue-600 transition-colors">
                          <Phone className="h-3.5 w-3.5 text-blue-500" />
                          0462-2914710
                        </a>
                        <a href="mailto:info@maxvytech.com" className="flex items-center gap-2 text-sm text-navy-700 hover:text-blue-600 transition-colors">
                          <Mail className="h-3.5 w-3.5 text-blue-500" />
                          info@maxvytech.com
                        </a>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=Tirunelveli+Tamil+Nadu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Navigation className="h-3 w-3" />
                        Get Directions
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-2xl border border-line bg-gradient-to-br from-navy-50/30 to-white p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-100 text-navy-700">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-800">Business Hours</p>
                        <p className="text-sm text-muted">Mon–Fri · 9:00–18:00 IST</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Follow us
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/people/MAXVY-Technologies-Pvt-Ltd/100063595280339/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy-700 transition-all duration-300 hover:bg-[#1877F2] hover:border-transparent hover:text-white hover:scale-110 hover:shadow-lg"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    {/* Twitter/X */}
                    <a
                      href="https://x.com/LtdMaxvy"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy-700 transition-all duration-300 hover:bg-[#000000] hover:border-transparent hover:text-white hover:scale-110 hover:shadow-lg"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/maxvytech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy-700 transition-all duration-300 hover:bg-[#0A66C2] hover:border-transparent hover:text-white hover:scale-110 hover:shadow-lg"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="h-12" />
      </div>

      {/* Google Maps Section */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <SectionTitle
            eyebrow="Locations"
            title="Find us on map"
            description="Visit our offices in Bengaluru and Tirunelveli."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Bengaluru Map */}
            <motion.div 
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.858571285481!2d77.639522!3d12.914478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149e5a1b3f5f%3A0x9d9d8a0d8a0d8a0d!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bengaluru Office Location"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-navy-800">Bengaluru Office</h4>
                    <p className="text-xs text-muted">HSR Layout, Bengaluru - 560102</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=HSR+Layout+Bengaluru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-[#e34115]/10 px-3 py-1.5 text-xs font-medium text-[#e34115] hover:bg-[#e34115]/20 transition-colors"
                  >
                    <Navigation className="h-3 w-3" />
                    Directions
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Tirunelveli Map */}
            <motion.div 
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.123456789012!2d77.727875!3d8.735497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05a0a0a0a0a0a%3A0x0!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tirunelveli Office Location"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-navy-800">Tirunelveli Office</h4>
                    <p className="text-xs text-muted">Pioneer Kumarasamy Nagar, Tirunelveli - 627007</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Tirunelveli+Tamil+Nadu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <Navigation className="h-3 w-3" />
                    Directions
                  </a>
                </div>
              </div>
            </motion.div>
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