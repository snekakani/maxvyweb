import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Package, Play, X, Send, Download, Users } from 'lucide-react';
import SEO from '../../common/SEO';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import { 
  getSidebarGroupForProduct,
  getAdjacentProducts,
} from '../../../data/navigation';
import aboutBanner from '../../../images/about-us_banner.jpeg';

// Import productContent from the separate data file
import productContentData from '../../../data/products/productContent';

// Import product enquiry API
import { submitProductEnquiry, ProductEnquiryData, ProductEnquiryResponse, getCaptcha, CaptchaResponse } from '../../../api/product-enquiry';

type Props = {
  name?: string;
  tagline?: string;
  overview?: string[];
  features?: string[];
  applications?: string[];
  specifications?: { label: string; value: string }[];
  benefits?: string[];
  faqs?: { q: string; a: string }[];
};

// ============================================================
// CAPTCHA INPUT COMPONENT
// ============================================================
const CaptchaInput = ({ onCaptchaChange, onCaptchaError, captchaError }) => {
  const [captchaData, setCaptchaData] = useState<CaptchaResponse | null>(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaId, setCaptchaId] = useState<string | null>(null);

  const loadCaptcha = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getCaptcha();
      if (response.success) {
        setCaptchaData(response);
        setCaptchaId(response.captcha_id);
        setCaptchaInput('');
        onCaptchaChange('', response.captcha_id);
        if (onCaptchaError) {
          onCaptchaError(null);
        }
      } else {
        setError('Failed to load captcha. Please try again.');
      }
    } catch (err) {
      setError('Failed to load captcha. Please refresh.');
      console.error('Captcha load error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCaptchaInput(value);
    if (captchaId) {
      onCaptchaChange(value, captchaId);
    }
    // Clear error when user starts typing
    if (captchaError) {
      onCaptchaError(null);
    }
  };

  const handleRefresh = () => {
    loadCaptcha();
  };

  return (
    <div className="space-y-3">
      {isLoading ? (
        <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#e34115]"></div>
          <span className="ml-2 text-gray-500 text-sm">Loading captcha...</span>
        </div>
      ) : error ? (
        <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
          <span className="text-red-600 text-sm">{error}</span>
          <button
            onClick={handleRefresh}
            className="text-sm text-[#e34115] hover:underline font-medium"
          >
            Retry
          </button>
        </div>
      ) : captchaData ? (
        <div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-1">
              <img
                src={captchaData.captcha_image}
                alt="CAPTCHA"
                className="h-12 w-auto object-contain bg-white rounded-md border border-gray-300 p-1"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="text-xs text-gray-400 mt-1">
                Expires in {Math.floor(captchaData.expires_in / 60)} min
              </div>
            </div>
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-500 hover:text-[#e34115] transition-colors"
              type="button"
              title="Refresh captcha"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <div className="mt-2">
            <input
              type="text"
              value={captchaInput}
              onChange={handleInputChange}
              placeholder="Enter the text shown above"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${
                captchaError ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength={10}
              autoComplete="off"
            />
            {captchaError && (
              <p className="text-red-500 text-xs mt-1">{captchaError}</p>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Enter the exact text shown in the image (case sensitive)
          </p>
        </div>
      ) : null}
    </div>
  );
};

// ============================================================
// REQUEST FOR QUOTE MODAL
// ============================================================
const QuoteRequestModal = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    country: '',
    contactNumber: '',
    requirement: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaId, setCaptchaId] = useState('');
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCaptchaValue('');
      setCaptchaId('');
      setCaptchaError(null);
      setIsSuccess(false);
      setIsSubmitting(false);
      setErrors({});
      setFormData({
        name: '',
        companyName: '',
        email: '',
        country: '',
        contactNumber: '',
        requirement: '',
      });
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
    else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) newErrors.contactNumber = 'Enter a valid 10-digit number';
    if (!formData.requirement.trim()) newErrors.requirement = 'Requirement is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous errors
    setErrors({});
    setCaptchaError(null);
    
    // Validate form
    if (!validate()) {
      return;
    }

    // Check if CAPTCHA is completed
    if (!captchaValue || !captchaId) {
      setCaptchaError('Please complete the CAPTCHA.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare API payload with new captcha fields
      const payload: ProductEnquiryData = {
        name: formData.name,
        email: formData.email,
        contact_person: formData.name,
        company_name: formData.companyName,
        contact_number: formData.contactNumber,
        note: formData.requirement,
        requested_for: productName || 'Product Enquiry',
        captcha_id: captchaId,
        captcha: captchaValue,
      };

      console.log('Submitting enquiry with payload:', payload);

      const response = await submitProductEnquiry(payload);
      console.log('API Response:', response);
      
      if (response.success) {
        // Success
        setIsSuccess(true);
        // Reset form after success
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            name: '',
            companyName: '',
            email: '',
            country: '',
            contactNumber: '',
            requirement: '',
          });
          setErrors({});
          setCaptchaError(null);
          setCaptchaValue('');
          setCaptchaId('');
        }, 2000);
      } else {
        // Handle validation errors
        if (response.errors) {
          // Map backend validation errors to form fields
          const fieldErrors = {};
          const backendErrors = response.errors;
          
          // Map backend field names to frontend field names
          const fieldMapping = {
            'name': 'name',
            'email': 'email',
            'contact_person': 'name',
            'company_name': 'companyName',
            'contact_number': 'contactNumber',
            'note': 'requirement',
            'requested_for': 'requirement',
          };
          
          Object.keys(backendErrors).forEach((key) => {
            const frontendField = fieldMapping[key] || key;
            const errorMessages = backendErrors[key];
            fieldErrors[frontendField] = Array.isArray(errorMessages) 
              ? errorMessages[0] 
              : errorMessages;
          });
          
          setErrors(fieldErrors);
          
          // Check for captcha errors
          if (backendErrors.captcha || backendErrors.captcha_id) {
            setCaptchaError('CAPTCHA verification failed. Please try again.');
            setCaptchaValue('');
            setCaptchaId('');
          }
        } else if (response.captcha_error) {
          setCaptchaError('CAPTCHA verification failed. Please try again.');
          setCaptchaValue('');
          setCaptchaId('');
        } else {
          // Generic error
          setErrors({ general: response.message || 'Something went wrong. Please try again.' });
        }
      }
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Request For Quote</h2>
          <button 
            onClick={() => {
              onClose();
            }} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Request Submitted!</h3>
              <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {errors.general}
                </div>
              )}
              
              {captchaError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {captchaError}
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Select Country <span className="text-red-500">*</span></label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                  <option value="SG">Singapore</option>
                  <option value="AE">UAE</option>
                  <option value="SA">Saudi Arabia</option>
                </select>
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Contact Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  placeholder="10-digit number"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Requirement / Need / Notes <span className="text-red-500">*</span></label>
                <textarea
                  value={formData.requirement}
                  onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                  rows="3"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.requirement ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement}</p>}
              </div>

              {/* Custom CAPTCHA */}
              <div>
                <label className="text-sm font-medium text-gray-700">CAPTCHA <span className="text-red-500">*</span></label>
                <CaptchaInput
                  onCaptchaChange={(value, id) => {
                    setCaptchaValue(value);
                    setCaptchaId(id);
                  }}
                  onCaptchaError={(error) => setCaptchaError(error)}
                  captchaError={captchaError}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !captchaValue || !captchaId}
                className="w-full py-3 bg-[#e34115] text-white rounded-lg font-medium hover:bg-[#c43a12] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// REQUEST FOR DOWNLOAD MODAL
// ============================================================
const DownloadRequestModal = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    country: '',
    contactNumber: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaId, setCaptchaId] = useState('');
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCaptchaValue('');
      setCaptchaId('');
      setCaptchaError(null);
      setIsSuccess(false);
      setIsSubmitting(false);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        companyName: '',
        country: '',
        contactNumber: '',
      });
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
    else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) newErrors.contactNumber = 'Enter a valid 10-digit number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors({});
    setCaptchaError(null);
    
    if (!validate()) {
      return;
    }

    if (!captchaValue || !captchaId) {
      setCaptchaError('Please complete the CAPTCHA.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: ProductEnquiryData = {
        name: formData.name,
        email: formData.email,
        contact_person: formData.name,
        company_name: formData.companyName,
        contact_number: formData.contactNumber,
        note: `Download request for: ${productName}`,
        requested_for: productName || 'Product Download',
        captcha_id: captchaId,
        captcha: captchaValue,
      };

      console.log('Submitting download request with payload:', payload);

      const response = await submitProductEnquiry(payload);
      console.log('Download API Response:', response);
      
      if (response.success) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            name: '',
            email: '',
            companyName: '',
            country: '',
            contactNumber: '',
          });
          setErrors({});
          setCaptchaError(null);
          setCaptchaValue('');
          setCaptchaId('');
        }, 2000);
      } else {
        if (response.errors) {
          const fieldErrors = {};
          const fieldMapping = {
            'name': 'name',
            'email': 'email',
            'contact_person': 'name',
            'company_name': 'companyName',
            'contact_number': 'contactNumber',
            'note': 'requirement',
          };
          
          Object.keys(response.errors).forEach((key) => {
            const frontendField = fieldMapping[key] || key;
            const errorMessages = response.errors[key];
            fieldErrors[frontendField] = Array.isArray(errorMessages) 
              ? errorMessages[0] 
              : errorMessages;
          });
          
          setErrors(fieldErrors);
          
          if (response.errors.captcha || response.errors.captcha_id) {
            setCaptchaError('CAPTCHA verification failed. Please try again.');
            setCaptchaValue('');
            setCaptchaId('');
          }
        } else if (response.captcha_error) {
          setCaptchaError('CAPTCHA verification failed. Please try again.');
          setCaptchaValue('');
          setCaptchaId('');
        } else {
          setErrors({ general: response.message || 'Something went wrong. Please try again.' });
        }
      }
    } catch (error) {
      console.error('Download request error:', error);
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Request For Download</h2>
          <button 
            onClick={() => {
              onClose();
            }} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Download Request Submitted!</h3>
              <p className="text-gray-500 mt-2">You'll receive the download link shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {errors.general}
                </div>
              )}
              
              {captchaError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {captchaError}
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Select Country <span className="text-red-500">*</span></label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                  <option value="SG">Singapore</option>
                  <option value="AE">UAE</option>
                  <option value="SA">Saudi Arabia</option>
                </select>
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Contact Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  placeholder="10-digit number"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e34115] ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>

              {/* Custom CAPTCHA */}
              <div>
                <label className="text-sm font-medium text-gray-700">CAPTCHA <span className="text-red-500">*</span></label>
                <CaptchaInput
                  onCaptchaChange={(value, id) => {
                    setCaptchaValue(value);
                    setCaptchaId(id);
                  }}
                  onCaptchaError={(error) => setCaptchaError(error)}
                  captchaError={captchaError}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !captchaValue || !captchaId}
                className="w-full py-3 bg-[#e34115] text-white rounded-lg font-medium hover:bg-[#c43a12] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Submit
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProductDetail({
  name: propName,
  tagline: propTagline,
  overview: propOverview,
  features: propFeatures,
  applications: propApplications,
  specifications: propSpecifications,
  benefits: propBenefits,
}: Props) {
  useReveal();
  const navigate = useNavigate();
  const location = useLocation();
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  // Get the slug from the URL path if useParams doesn't provide it
  const getSlugFromPath = () => {
    const pathParts = location.pathname.split('/');
    for (let i = pathParts.length - 1; i >= 0; i--) {
      const part = pathParts[i];
      if (part && part !== 'products' && 
          !['ddr5', 'multimedia', 'peripheral', 'mipi-i3c', 'i3c-support', 'verification-ip', 'maxvy-integration', 'other-rtl-ip', 'riscv', 'embedded', 'maxvy-fpga'].includes(part)) {
        return part;
      }
    }
    return null;
  };

  // Use the slug from params or extract from path
  const effectiveSlug = slug || getSlugFromPath() || propName?.toLowerCase().replace(/\s+/g, '-') || '';
  
  // Get product data from productContent using the effective slug
  const productData = effectiveSlug ? productContentData[effectiveSlug] : null;
  
  // Generate YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  // If we have productData from productContent, use it (this takes priority)
  if (productData) {
    const name = productData.heroTitle || productData.title || effectiveSlug;
    const tagline = productData.heroDescription || '';
    const overview = productData.overview ? [productData.overview] : [];
    const features = productData.features || [];
    const applications = productData.applications || [];
    const deliverables = productData.deliverables || [];
    const videos = productData.videos || [];
    const blockDiagram = productData.blockDiagram;
    const badges = productData.badges || [];
    
    // Get category from product data
    const categoryName = productData.category || 'Product';
    const sidebarGroup = getSidebarGroupForProduct(`/products/${categoryName}/${effectiveSlug}`);
    const groupLabel = sidebarGroup?.label || categoryName || 'Product';

    // Split title for hero
    const titleParts = name.split(' ');
    const lastWord = titleParts.pop() || '';
    const restTitle = titleParts.join(' ');

    // Badge color mapping
    const getBadgeColor = (badge: string) => {
      const colors = {
        'Silicon Proven': 'bg-green-100 text-green-800 border-green-300',
        'IP Proven': 'bg-blue-100 text-blue-800 border-blue-300',
        'Software IP': 'bg-purple-100 text-purple-800 border-purple-300',
      };
      return colors[badge] || 'bg-gray-100 text-gray-800 border-gray-300';
    };

    return (
      <>
        <SEO
          title={`${name} — MAXVY Technologies`}
          description={tagline}
          canonical={`/products/${categoryName}/${effectiveSlug}`}
        />
        
        {/* Hero Section with Floating Container */}
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
                  <span className="text-[#0F172A]">{restTitle || name}</span>
                  {lastWord && <span className="text-[#e34115]"> {lastWord}</span>}
                </h1>

                {tagline && (
                  <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                    {tagline}
                  </p>
                )}
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
              {/* Main Content - Full Width (no sidebar) */}
              <div className="flex-1">
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                  {/* Product Title */}
                  <h1 className="text-[26px] font-bold text-[#e34115] mb-6 leading-tight">
                    {productData.title || name}
                  </h1>

                  {/* Overview */}
                  {overview && overview.length > 0 && (
                    <div className="mb-8">
                      <p className="text-[15px] text-gray-700 leading-[1.9]">
                        {overview[0]}
                      </p>
                    </div>
                  )}

                  {/* Badges - Display above Key Features - No "Specialities:" text */}
                  {badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {badges.map((badge, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-xs font-semibold rounded-full border ${getBadgeColor(badge)}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  {features && features.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Key Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#e34115]/10 transition-colors"
                          >
                            <span className="text-[#e34115] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Block Diagram */}
                  {blockDiagram && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Block Diagram</h2>
                      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-gray-50">
                        <img
                          src={blockDiagram}
                          alt={`${name} Block Diagram`}
                          className="w-full h-auto max-h-[400px] object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const parent = e.target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<p class="text-gray-400 text-center py-8">Block diagram image not available</p>`;
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Applications */}
                  {applications && applications.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Applications</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {applications.map((app, index) => (
                          <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <span className="text-[#e34115] text-lg font-bold mt-0.5">• </span>
                            <span className="text-[14px] text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deliverables */}
                  {deliverables && deliverables.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Deliverables</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {deliverables.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#e34115]/10 transition-colors"
                          >
                            <span className="text-[#e34115] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Videos */}
                  {videos && videos.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Videos</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {videos.map((video, index) => {
                          const videoId = video.youtubeId;
                          const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
                          const thumbnailUrl = getYouTubeThumbnail(videoId);
                          
                          return (
                            <a
                              key={index}
                              href={youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative group block aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                              <img
                                src={thumbnailUrl}
                                alt={video.title || `Video ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://img.youtube.com/vi/default/mqdefault.jpg';
                                }}
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-[#e34115] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <span className="text-white text-sm font-medium line-clamp-2">
                                  {video.title || `Video ${index + 1}`}
                                </span>
                              </div>
                              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                YouTube
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </section>

                {/* CTA Section with Three Buttons */}
                <div className="mt-8 bg-gradient-to-r from-[#e34115]/10 to-white rounded-2xl border border-gray-200 p-8 text-center">
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Ready to evaluate {name}?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Talk to a MAXVY architect about licensing, evaluation and integration.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => setShowQuoteModal(true)}
                      className="px-6 py-3 bg-[#e34115] text-white rounded-lg font-semibold hover:bg-[#c43a12] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Request For Quote
                    </button>
                    <button
                      onClick={() => setShowDownloadModal(true)}
                      className="px-6 py-3 bg-[#e34115] text-white rounded-lg font-semibold hover:bg-[#c43a12] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Request For Download
                    </button>
                    <Link
                      to="/about/testimonials"
                      className="px-6 py-3 bg-white text-[#e34115] border-2 border-[#e34115] rounded-lg font-semibold hover:bg-[#e34115]/10 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Users className="w-4 h-4" />
                      Testimonials
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom spacer */}
          <div className="h-12" />
        </div>

        {/* Quote Request Modal */}
        <QuoteRequestModal
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
          productName={name}
        />

        {/* Download Request Modal */}
        <DownloadRequestModal
          isOpen={showDownloadModal}
          onClose={() => setShowDownloadModal(false)}
          productName={name}
        />
      </>
    );
  }

  // If we have propName and propTagline (for verification IP products that don't have data in productContent)
  if (propName && propTagline) {
    const name = propName;
    const tagline = propTagline;
    const overview = propOverview || [`${name} is a silicon-proven, synthesizable RTL IP core from MAXVY Technologies.`];
    const features = propFeatures || [
      'Full compliance with the latest specification',
      'Lint-clean and CDC-clean RTL hand-off',
      'UVM testbench with 100% functional coverage hooks',
      'Parameterizable bus width and frequency',
      'Low-power clock gating and retention modes',
      'Formal property verification coverage',
      'Silicon-proven on leading FinFET nodes',
      'EDA-independent RTL — works with major simulators',
    ];
    const applications = propApplications || [
      'Data Center & Cloud',
      'Mobile SoC',
      'Automotive ADAS',
      'AI / ML Accelerators',
    ];
    const deliverables = [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library',
      'Assertions'
    ];
    const videos = [];
    const blockDiagram = null;
    
    const groupLabel = 'Verification IP';

    const titleParts = name.split(' ');
    const lastWord = titleParts.pop() || '';
    const restTitle = titleParts.join(' ');

    return (
      <>
        <SEO
          title={`${name} — MAXVY Technologies`}
          description={tagline}
          canonical={`/products/verification-ip/${effectiveSlug}`}
        />
        
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
                  <span className="text-[#0F172A]">{restTitle || name}</span>
                  {lastWord && <span className="text-[#e34115]"> {lastWord}</span>}
                </h1>

                {tagline && (
                  <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                    {tagline}
                  </p>
                )}
              </motion.div>
            </div>
          </div>

          <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
            >
              <div className="flex-1">
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h1 className="text-[26px] font-bold text-[#e34115] mb-6 leading-tight">
                    {name}
                  </h1>

                  {overview && overview.length > 0 && (
                    <div className="mb-8">
                      <p className="text-[15px] text-gray-700 leading-[1.9]">
                        {overview[0]}
                      </p>
                    </div>
                  )}

                  {features && features.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Key Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#e34115]/10 transition-colors"
                          >
                            <span className="text-[#e34115] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Block Diagram */}
                  {blockDiagram && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Block Diagram</h2>
                      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-gray-50">
                        <img
                          src={blockDiagram}
                          alt={`${name} Block Diagram`}
                          className="w-full h-auto max-h-[400px] object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const parent = e.target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<p class="text-gray-400 text-center py-8">Block diagram image not available</p>`;
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {applications && applications.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Applications</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {applications.map((app, index) => (
                          <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <span className="text-[#e34115] text-lg font-bold mt-0.5">• </span>
                            <span className="text-[14px] text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {deliverables && deliverables.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#e34115] mb-4">Deliverables</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {deliverables.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#e34115]/10 transition-colors"
                          >
                            <span className="text-[#e34115] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

                <div className="mt-8 bg-gradient-to-r from-[#e34115]/10 to-white rounded-2xl border border-gray-200 p-8 text-center">
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Ready to evaluate {name}?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Talk to a MAXVY architect about licensing, evaluation and integration.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => setShowQuoteModal(true)}
                      className="px-6 py-3 bg-[#e34115] text-white rounded-lg font-semibold hover:bg-[#c43a12] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Request For Quote
                    </button>
                    <button
                      onClick={() => setShowDownloadModal(true)}
                      className="px-6 py-3 bg-[#e34115] text-white rounded-lg font-semibold hover:bg-[#c43a12] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Request For Download
                    </button>
                    <Link
                      to="/about/testimonials"
                      className="px-6 py-3 bg-white text-[#e34115] border-2 border-[#e34115] rounded-lg font-semibold hover:bg-[#e34115]/10 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Users className="w-4 h-4" />
                      Testimonials
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="h-12" />
        </div>

        <QuoteRequestModal
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
          productName={name}
        />

        <DownloadRequestModal
          isOpen={showDownloadModal}
          onClose={() => setShowDownloadModal(false)}
          productName={name}
        />
      </>
    );
  }

  // Fallback for when product is not found
  return (
    <>
      <SEO
        title={`${propName || 'Product'} — MAXVY Technologies`}
        description={propTagline || ''}
        canonical={`/products/${category}/${effectiveSlug}`}
      />
      
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
                <span className="text-[#0F172A]">PRODUCT </span>
                <span className="text-[#e34115]">NOT FOUND</span>
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
          >
            <div className="flex-1">
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700">Product Not Found</h2>
                <p className="text-gray-500 mt-2">The product you're looking for doesn't exist.</p>
                <Link to="/products" className="inline-block mt-4 text-[#e34115] hover:underline font-medium">
                  View all products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-12" />
      </div>
    </>
  );
}

export const productContent = productContentData;

// ==================== HELPER FUNCTIONS ====================

export const getProductBySlug = (slug) => {
  return productContentData[slug] || null;
};

export const getProductsByCategory = (categoryId) => {
  const products = [];
  for (const key in productContentData) {
    if (productContentData[key].category === categoryId) {
      products.push({ slug: key, ...productContentData[key] });
    }
  }
  return products;
};

export const findProduct = (category, slug) => {
  // First try to find by slug directly
  if (productContentData[slug]) {
    return productContentData[slug];
  }
  
  // If not found, search through all products
  for (const key in productContentData) {
    if (productContentData[key].slug === slug) {
      return productContentData[key];
    }
  }
  
  return null;
};