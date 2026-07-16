// src/components/pages/Careers/job_details.tsx

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  GraduationCap,
  DollarSign,
  Calendar,
  CheckCircle,
  X,
  Mail,
  User,
  Phone,
  MessageSquare,
  Upload,
  Lock,
  Eye,
  EyeOff,
  ArrowRight
} from 'lucide-react';
import { jobsData } from './currentopening';
import bannerImage from '../../../images/about-us_banner.jpeg';

// Toast notification (simple implementation)
const toast = {
  success: (message: string) => {
    const toastEl = document.createElement('div');
    toastEl.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in';
    toastEl.textContent = message;
    document.body.appendChild(toastEl);
    setTimeout(() => {
      toastEl.remove();
    }, 3000);
  }
};

// RefreshCw component for captcha reload
const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

// Apply Now Modal
const ApplyModal = ({ isOpen, onClose, jobTitle, jobId }: { isOpen: boolean; onClose: () => void; jobTitle: string; jobId: string }) => {
  const [formData, setFormData] = useState({
    email: '',
    verifyEmail: '',
    name: '',
    phone: '',
    experience: '',
    message: '',
    resume: null as File | null,
    captchaInput: ''
  });
  const [showCaptcha, setShowCaptcha] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setShowCaptcha(result);
  };

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.verifyEmail) newErrors.verifyEmail = 'Please verify your email';
    else if (formData.email !== formData.verifyEmail) newErrors.verifyEmail = 'Email does not match';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.captchaInput) newErrors.captchaInput = 'Captcha is required';
    else if (formData.captchaInput !== showCaptcha) newErrors.captchaInput = 'Invalid captcha';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        toast.success('Application submitted successfully!');
        setIsSubmitting(false);
        onClose();
        // Reset form
        setFormData({
          email: '',
          verifyEmail: '',
          name: '',
          phone: '',
          experience: '',
          message: '',
          resume: null,
          captchaInput: ''
        });
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#0F172A]">Apply Here</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Email ID <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Verify Email */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Verify Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="verifyEmail"
              value={formData.verifyEmail}
              onChange={handleInputChange}
              placeholder="Verify Email"
              className={`w-full px-4 py-2.5 border ${errors.verifyEmail ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent`}
            />
            {errors.verifyEmail && <p className="text-red-500 text-xs mt-1">{errors.verifyEmail}</p>}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your name"
              className={`w-full px-4 py-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Phone number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Phone Number"
              className={`w-full px-4 py-2.5 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Subject - Auto filled */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Subject <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={`${jobTitle} - ${jobId}`}
              disabled
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-700"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Year of Experience <span className="text-red-500">*</span></label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className={`w-full px-4 py-2.5 border ${errors.experience ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent`}
            >
              <option value="">Select Year of Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="0-1">0-1 Years</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5-8">5-8 Years</option>
              <option value="8-12">8-12 Years</option>
              <option value="12+">12+ Years</option>
            </select>
            {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter Your message"
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Upload Resume</label>
            <div className="flex items-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#FF6A00] transition-colors cursor-pointer">
              <Upload className="w-5 h-5 text-gray-400" />
              <input
                type="file"
                onChange={handleFileChange}
                className="flex-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-[#FF6A00] hover:file:bg-orange-100"
                accept=".pdf,.doc,.docx"
              />
            </div>
            {formData.resume && (
              <p className="text-sm text-green-600 mt-1">✓ {formData.resume.name}</p>
            )}
          </div>

          {/* Captcha */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-1">Enter Captcha <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleInputChange}
                  placeholder="Enter valid Captcha"
                  className={`w-full px-4 py-2.5 border ${errors.captchaInput ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent`}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 bg-gray-100 rounded-xl font-mono text-lg font-bold tracking-wider select-none">
                  {showCaptcha}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
            {errors.captchaInput && <p className="text-red-500 text-xs mt-1">{errors.captchaInput}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#FF6A00] text-white text-sm font-medium rounded-xl hover:bg-orange-600 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Applying...' : 'Apply'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const job = jobsData.find(j => j.id === parseInt(id || '0'));

  if (!job) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0F172A]">Job Not Found</h2>
          <p className="text-gray-500 mt-2">The job you're looking for doesn't exist.</p>
          <Link to="/careers/current-openings" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#FF6A00] text-white rounded-xl hover:bg-orange-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA]">
      {/* --- HERO SECTION - Exactly like Current Openings --- */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerImage})`,
            height: '400px',
          }}
        >
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">
                <span className="text-[#0F172A]">JOB </span>
                <span className="text-[#FF6A00]">DETAILS</span>
              </h1>

              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                {job.title}
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- FLOATING WHITE CONTAINER --- */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
          >
            {/* Back Button */}
            <button
              onClick={() => navigate('/careers/current-openings')}
              className="flex items-center gap-2 text-gray-500 hover:text-[#FF6A00] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Openings
            </button>

            {/* Job Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-[#FF6A00]">
                    <Briefcase className="h-7 w-7" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-[#0F172A]">{job.title}</h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" /> {job.experience}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" /> {job.education}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1 text-[#FF6A00] font-semibold">
                        <DollarSign className="h-4 w-4" /> {job.salary}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <p className="text-sm text-gray-500">Job ID: {job.jobId}</p> */}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              {/* Role */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-[#0F172A] mb-3">Role</h2>
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="space-y-2">
                    {job.role.split('\n').map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FF6A00] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-[#0F172A] mb-3">Job Description</h2>
                <div className="bg-gray-50 rounded-xl p-5">
                  <ul className="space-y-2">
                    {job.jobDescription.split('\n').map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FF6A00] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Now Button at Bottom */}
              <div className="flex justify-center pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6A00] text-white text-base font-medium rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom spacer */}
        <div className="h-12" />
      </div>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        jobTitle={job.title}
        jobId={job.jobId}
      />
    </div>
  );
}