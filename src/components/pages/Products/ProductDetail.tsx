// import React, { useState } from 'react';
// import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, Check, ChevronLeft, ChevronRight, Package, Play, X, Send, Download, Users } from 'lucide-react';
// import SEO from '../../common/SEO';
// import CTA from '../../common/CTA';
// import ProductSidebar from './ProductSidebar';
// import { useReveal } from '../../../hooks/useReveal';
// import { 
//   getSidebarGroupForProduct,
//   getAdjacentProducts,
// } from '../../../data/navigation';
// import aboutBanner from '../../../images/about-us_banner.jpeg';

// // Import productContent from the separate data file
// import productContentData from '../../../data/products/productContent';

// type Props = {
//   name?: string;
//   tagline?: string;
//   overview?: string[];
//   features?: string[];
//   applications?: string[];
//   specifications?: { label: string; value: string }[];
//   benefits?: string[];
//   faqs?: { q: string; a: string }[];
// };

// // ============================================================
// // REQUEST FOR QUOTE MODAL
// // ============================================================
// const QuoteRequestModal = ({ isOpen, onClose, productName }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     companyName: '',
//     email: '',
//     country: '',
//     contactNumber: '',
//     requirement: '',
//     captcha: '',
//   });
//   const [captchaText, setCaptchaText] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Generate random captcha
//   const generateCaptcha = () => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < 6; i++) {
//       result += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     setCaptchaText(result);
//   };

//   // Initialize captcha on open
//   React.useEffect(() => {
//     if (isOpen) {
//       generateCaptcha();
//       setFormData({
//         name: '',
//         companyName: '',
//         email: '',
//         country: '',
//         contactNumber: '',
//         requirement: '',
//         captcha: '',
//       });
//       setErrors({});
//       setIsSuccess(false);
//     }
//   }, [isOpen]);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.country) newErrors.country = 'Country is required';
//     if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
//     else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) newErrors.contactNumber = 'Enter a valid 10-digit number';
//     if (!formData.requirement.trim()) newErrors.requirement = 'Requirement is required';
//     if (formData.captcha !== captchaText) newErrors.captcha = 'Captcha does not match';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setIsSubmitting(true);
//       // Simulate API call
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setIsSuccess(true);
//         setTimeout(() => {
//           onClose();
//           setIsSuccess(false);
//         }, 2000);
//       }, 1500);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
//           <h2 className="text-xl font-bold text-gray-800">Request For Quote</h2>
//           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//             <X className="w-5 h-5" />
//           </button>
//         </div>
        
//         <div className="p-6">
//           {isSuccess ? (
//             <div className="text-center py-8">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">Request Submitted!</h3>
//               <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   value={formData.companyName}
//                   onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Select Country <span className="text-red-500">*</span></label>
//                 <select
//                   value={formData.country}
//                   onChange={(e) => setFormData({...formData, country: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
//                 >
//                   <option value="">Select Country</option>
//                   <option value="IN">India</option>
//                   <option value="US">United States</option>
//                   <option value="UK">United Kingdom</option>
//                   <option value="CA">Canada</option>
//                   <option value="AU">Australia</option>
//                   <option value="DE">Germany</option>
//                   <option value="FR">France</option>
//                   <option value="JP">Japan</option>
//                   <option value="CN">China</option>
//                   <option value="SG">Singapore</option>
//                   <option value="AE">UAE</option>
//                   <option value="SA">Saudi Arabia</option>
//                 </select>
//                 {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Contact Number <span className="text-red-500">*</span></label>
//                 <input
//                   type="tel"
//                   value={formData.contactNumber}
//                   onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
//                   placeholder="10-digit number"
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Requirement / Need / Notes <span className="text-red-500">*</span></label>
//                 <textarea
//                   value={formData.requirement}
//                   onChange={(e) => setFormData({...formData, requirement: e.target.value})}
//                   rows="3"
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.requirement ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Enter Captcha (Case Sensitive) <span className="text-red-500">*</span></label>
//                 <div className="flex items-center gap-3">
//                   <div className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-lg font-bold tracking-wider select-none">
//                     {captchaText}
//                   </div>
//                   <button
//                     type="button"
//                     onClick={generateCaptcha}
//                     className="text-[#FF8C1A] hover:text-[#f25f00] transition-colors"
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                     </svg>
//                   </button>
//                 </div>
//                 <input
//                   type="text"
//                   value={formData.captcha}
//                   onChange={(e) => setFormData({...formData, captcha: e.target.value})}
//                   placeholder="Enter captcha code"
//                   className={`w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full py-3 bg-[#FF8C1A] text-white rounded-lg font-medium hover:bg-[#f25f00] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                     Submitting...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-4 h-4" />
//                     Submit
//                   </>
//                 )}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ============================================================
// // REQUEST FOR DOWNLOAD MODAL
// // ============================================================
// const DownloadRequestModal = ({ isOpen, onClose, productName }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     companyName: '',
//     country: '',
//     contactNumber: '',
//     captcha: '',
//   });
//   const [captchaText, setCaptchaText] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const generateCaptcha = () => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < 6; i++) {
//       result += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     setCaptchaText(result);
//   };

//   React.useEffect(() => {
//     if (isOpen) {
//       generateCaptcha();
//       setFormData({
//         name: '',
//         email: '',
//         companyName: '',
//         country: '',
//         contactNumber: '',
//         captcha: '',
//       });
//       setErrors({});
//       setIsSuccess(false);
//     }
//   }, [isOpen]);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
//     if (!formData.country) newErrors.country = 'Country is required';
//     if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
//     else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) newErrors.contactNumber = 'Enter a valid 10-digit number';
//     if (formData.captcha !== captchaText) newErrors.captcha = 'Captcha does not match';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setIsSubmitting(true);
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setIsSuccess(true);
//         setTimeout(() => {
//           onClose();
//           setIsSuccess(false);
//         }, 2000);
//       }, 1500);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
//           <h2 className="text-xl font-bold text-gray-800">Request For Download</h2>
//           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//             <X className="w-5 h-5" />
//           </button>
//         </div>
        
//         <div className="p-6">
//           {isSuccess ? (
//             <div className="text-center py-8">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">Download Request Submitted!</h3>
//               <p className="text-gray-500 mt-2">You'll receive the download link shortly.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   value={formData.companyName}
//                   onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Select Country <span className="text-red-500">*</span></label>
//                 <select
//                   value={formData.country}
//                   onChange={(e) => setFormData({...formData, country: e.target.value})}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
//                 >
//                   <option value="">Select Country</option>
//                   <option value="IN">India</option>
//                   <option value="US">United States</option>
//                   <option value="UK">United Kingdom</option>
//                   <option value="CA">Canada</option>
//                   <option value="AU">Australia</option>
//                   <option value="DE">Germany</option>
//                   <option value="FR">France</option>
//                   <option value="JP">Japan</option>
//                   <option value="CN">China</option>
//                   <option value="SG">Singapore</option>
//                   <option value="AE">UAE</option>
//                   <option value="SA">Saudi Arabia</option>
//                 </select>
//                 {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Contact Number <span className="text-red-500">*</span></label>
//                 <input
//                   type="tel"
//                   value={formData.contactNumber}
//                   onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
//                   placeholder="10-digit number"
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Enter Captcha (Case Sensitive) <span className="text-red-500">*</span></label>
//                 <div className="flex items-center gap-3">
//                   <div className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-lg font-bold tracking-wider select-none">
//                     {captchaText}
//                   </div>
//                   <button
//                     type="button"
//                     onClick={generateCaptcha}
//                     className="text-[#FF8C1A] hover:text-[#f25f00] transition-colors"
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                     </svg>
//                   </button>
//                 </div>
//                 <input
//                   type="text"
//                   value={formData.captcha}
//                   onChange={(e) => setFormData({...formData, captcha: e.target.value})}
//                   placeholder="Enter captcha code"
//                   className={`w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full py-3 bg-[#FF8C1A] text-white rounded-lg font-medium hover:bg-[#f25f00] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                     Submitting...
//                   </>
//                 ) : (
//                   <>
//                     <Download className="w-4 h-4" />
//                     Submit
//                   </>
//                 )}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ProductDetail({
//   name: propName,
//   tagline: propTagline,
//   overview: propOverview,
//   features: propFeatures,
//   applications: propApplications,
//   specifications: propSpecifications,
//   benefits: propBenefits,
// }: Props) {
//   useReveal();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { category, slug } = useParams<{ category: string; slug: string }>();
//   const [showQuoteModal, setShowQuoteModal] = useState(false);
//   const [showDownloadModal, setShowDownloadModal] = useState(false);
  
//   // Get the slug from the URL path if useParams doesn't provide it
//   const getSlugFromPath = () => {
//     const pathParts = location.pathname.split('/');
//     for (let i = pathParts.length - 1; i >= 0; i--) {
//       const part = pathParts[i];
//       if (part && part !== 'products' && 
//           !['ddr5', 'multimedia', 'peripheral', 'mipi-i3c', 'i3c-support', 'verification-ip', 'maxvy-integration', 'other-rtl-ip', 'riscv', 'embedded', 'maxvy-fpga'].includes(part)) {
//         return part;
//       }
//     }
//     return null;
//   };

//   // Use the slug from params or extract from path
//   const effectiveSlug = slug || getSlugFromPath() || propName?.toLowerCase().replace(/\s+/g, '-') || '';
  
//   // Get product data from productContent using the effective slug
//   const productData = effectiveSlug ? productContentData[effectiveSlug] : null;
  
//   // Generate YouTube thumbnail URL
//   const getYouTubeThumbnail = (videoId: string) => {
//     return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//   };

//   // Helper function to render hero section (used across all cases)
//   const renderHero = (title: string, subtitle?: string, breadcrumbGroup?: string) => {
//     return (
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="relative w-full bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url(${aboutBanner})`,
//             height: '400px',
//           }}
//         >
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//               className="max-w-4xl mx-auto"
//             >
//               <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">
//                 <span className="text-[#0F172A]">{title.split(' ').slice(0, -1).join(' ') || title}</span>
//                 {' '}
//                 <span className="text-[#FF6A00]">{title.split(' ').pop() || ''}</span>
//               </h1>

//               {subtitle && (
//                 <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
//                   {subtitle}
//                 </p>
//               )}
//             </motion.div>
//           </div>
//         </div>

//         {/* --- FLOATING WHITE CONTAINER --- */}
//         <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
//             className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
//           >
//             {/* Breadcrumb */}
//             <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
//               <Link to="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
//               <span className="text-gray-300">›</span>
//               <Link to="/products" className="hover:text-[#FF6A00] transition-colors">Products</Link>
//               <span className="text-gray-300">›</span>
//               <span className="text-gray-700">{breadcrumbGroup || 'Product'}</span>
//               <span className="text-gray-300">›</span>
//               <span className="text-[#FF6A00] font-medium">{title}</span>
//             </nav>

//             {/* Content - Rest of the product detail goes here */}
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* Sidebar */}
//               <div className="lg:w-[260px] lg:flex-shrink-0">
//                 <ProductSidebar />
//               </div>

//               {/* Main Content */}
//               <div className="flex-1">
//                 {/* Rest of the product content will be rendered here */}
//                 {/* This is a placeholder - the actual content rendering happens below */}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom spacer */}
//         <div className="h-12" />
//       </div>
//     );
//   };

//   // If we have productData from productContent, use it (this takes priority)
//   if (productData) {
//     const name = productData.heroTitle || productData.title || effectiveSlug;
//     const tagline = productData.heroDescription || '';
//     const overview = productData.overview ? [productData.overview] : [];
//     const features = productData.features || [];
//     const applications = productData.applications || [];
//     const deliverables = productData.deliverables || [];
//     const videos = productData.videos || [];
//     const blockDiagram = productData.blockDiagram;
    
//     // Get category from product data
//     const categoryName = productData.category || 'Product';
//     const sidebarGroup = getSidebarGroupForProduct(`/products/${categoryName}/${effectiveSlug}`);
//     const groupLabel = sidebarGroup?.label || categoryName || 'Product';

//     // Split title for hero
//     const titleParts = name.split(' ');
//     const lastWord = titleParts.pop() || '';
//     const restTitle = titleParts.join(' ');

//     return (
//       <>
//         <SEO
//           title={`${name} — MAXVY Technologies`}
//           description={tagline}
//           canonical={`/products/${categoryName}/${effectiveSlug}`}
//         />
        
//         {/* Hero Section with Floating Container */}
//         <div className="relative w-full overflow-hidden">
//           <div
//             className="relative w-full bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${aboutBanner})`,
//               height: '400px',
//             }}
//           >
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, ease: 'easeOut' }}
//                 className="max-w-4xl mx-auto"
//               >
//                 <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">
//                   <span className="text-[#0F172A]">{restTitle || name}</span>
//                   {lastWord && <span className="text-[#FF6A00]"> {lastWord}</span>}
//                 </h1>

//                 {tagline && (
//                   <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
//                     {tagline}
//                   </p>
//                 )}
//               </motion.div>
//             </div>
//           </div>

//           {/* --- FLOATING WHITE CONTAINER --- */}
//           <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
//               className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
//             >
//               {/* Breadcrumb */}
//               <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
//                 <Link to="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
//                 <span className="text-gray-300">›</span>
//                 <Link to="/products" className="hover:text-[#FF6A00] transition-colors">Products</Link>
//                 <span className="text-gray-300">›</span>
//                 <span className="text-gray-700">{groupLabel}</span>
//                 <span className="text-gray-300">›</span>
//                 <span className="text-[#FF6A00] font-medium">{name}</span>
//               </nav>

//               <div className="flex flex-col lg:flex-row gap-8">
//                 {/* Sidebar */}
//                 <div className="lg:w-[260px] lg:flex-shrink-0">
//                   <ProductSidebar />
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1">
//                   <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
//                     {/* Product Title */}
//                     <h1 className="text-[26px] font-bold text-[#FF8C1A] mb-6 leading-tight">
//                       {productData.title || name}
//                     </h1>

//                     {/* Overview */}
//                     {overview && overview.length > 0 && (
//                       <div className="mb-8">
//                         <p className="text-[15px] text-gray-700 leading-[1.9]">
//                           {overview[0]}
//                         </p>
//                       </div>
//                     )}

//                     {/* Features */}
//                     {features && features.length > 0 && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Key Features</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           {features.map((feature, index) => (
//                             <div
//                               key={index}
//                               className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
//                             >
//                               <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
//                               <span className="text-[14px] text-gray-700">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Block Diagram */}
//                     {blockDiagram && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Block Diagram</h2>
//                         <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-gray-50">
//                           <img
//                             src={blockDiagram}
//                             alt={`${name} Block Diagram`}
//                             className="w-full h-auto object-contain"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).style.display = 'none';
//                               const parent = e.target.parentElement;
//                               if (parent) {
//                                 parent.innerHTML = `<p class="text-gray-400 text-center py-8">Block diagram image not available</p>`;
//                               }
//                             }}
//                           />
//                         </div>
//                       </div>
//                     )}

//                     {/* Applications */}
//                     {applications && applications.length > 0 && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Applications</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           {applications.map((app, index) => (
//                             <div
//                               key={index}
//                               className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
//                             >
//                               <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">• </span>
//                               <span className="text-[14px] text-gray-700">{app}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Deliverables */}
//                     {deliverables && deliverables.length > 0 && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Deliverables</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           {deliverables.map((item, index) => (
//                             <div
//                               key={index}
//                               className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
//                             >
//                               <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
//                               <span className="text-[14px] text-gray-700">{item}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Videos */}
//                     {videos && videos.length > 0 && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Videos</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {videos.map((video, index) => {
//                             const videoId = video.youtubeId;
//                             const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
//                             const thumbnailUrl = getYouTubeThumbnail(videoId);
                            
//                             return (
//                               <a
//                                 key={index}
//                                 href={youtubeUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="relative group block aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                               >
//                                 <img
//                                   src={thumbnailUrl}
//                                   alt={video.title || `Video ${index + 1}`}
//                                   className="w-full h-full object-cover"
//                                   onError={(e) => {
//                                     (e.target as HTMLImageElement).src = 'https://img.youtube.com/vi/default/mqdefault.jpg';
//                                   }}
//                                 />
//                                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//                                   <div className="w-16 h-16 rounded-full bg-[#FF8C1A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
//                                     <Play className="w-7 h-7 text-white ml-1" fill="white" />
//                                   </div>
//                                 </div>
//                                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
//                                   <span className="text-white text-sm font-medium line-clamp-2">
//                                     {video.title || `Video ${index + 1}`}
//                                   </span>
//                                 </div>
//                                 <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                                   YouTube
//                                 </div>
//                               </a>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}
//                   </section>

//                   {/* CTA Section with Three Buttons */}
//                   <div className="mt-8 bg-gradient-to-r from-orange-50 to-white rounded-2xl border border-gray-200 p-8 text-center">
//                     <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
//                       Ready to evaluate {name}?
//                     </h2>
//                     <p className="text-gray-600 mb-6">
//                       Talk to a MAXVY architect about licensing, evaluation and integration.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                       <button
//                         onClick={() => setShowQuoteModal(true)}
//                         className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
//                       >
//                         <Send className="w-4 h-4" />
//                         Request For Quote
//                       </button>
//                       <button
//                         onClick={() => setShowDownloadModal(true)}
//                         className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
//                       >
//                         <Download className="w-4 h-4" />
//                         Request For Download
//                       </button>
//                       <Link
//                         to="/about/testimonials"
//                         className="px-6 py-3 bg-white text-[#FF8C1A] border-2 border-[#FF8C1A] rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
//                       >
//                         <Users className="w-4 h-4" />
//                         Testimonials
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Bottom spacer */}
//           <div className="h-12" />
//         </div>

//         {/* Quote Request Modal */}
//         <QuoteRequestModal
//           isOpen={showQuoteModal}
//           onClose={() => setShowQuoteModal(false)}
//           productName={name}
//         />

//         {/* Download Request Modal */}
//         <DownloadRequestModal
//           isOpen={showDownloadModal}
//           onClose={() => setShowDownloadModal(false)}
//           productName={name}
//         />
//       </>
//     );
//   }

//   // If we have propName and propTagline (for verification IP products that don't have data in productContent)
//   if (propName && propTagline) {
//     const name = propName;
//     const tagline = propTagline;
//     const overview = propOverview || [`${name} is a silicon-proven, synthesizable RTL IP core from MAXVY Technologies.`];
//     const features = propFeatures || [
//       'Full compliance with the latest specification',
//       'Lint-clean and CDC-clean RTL hand-off',
//       'UVM testbench with 100% functional coverage hooks',
//       'Parameterizable bus width and frequency',
//       'Low-power clock gating and retention modes',
//       'Formal property verification coverage',
//       'Silicon-proven on leading FinFET nodes',
//       'EDA-independent RTL — works with major simulators',
//     ];
//     const applications = propApplications || [
//       'Data Center & Cloud',
//       'Mobile SoC',
//       'Automotive ADAS',
//       'AI / ML Accelerators',
//     ];
//     const deliverables = [
//       'UVM Environment',
//       'VIP Datasheet',
//       'User Guide',
//       'Verification Test Plan',
//       'Coverage Model',
//       'Sequence Library',
//       'Assertions'
//     ];
//     const videos = [];
//     const blockDiagram = null;
    
//     const groupLabel = 'Verification IP';

//     const titleParts = name.split(' ');
//     const lastWord = titleParts.pop() || '';
//     const restTitle = titleParts.join(' ');

//     return (
//       <>
//         <SEO
//           title={`${name} — MAXVY Technologies`}
//           description={tagline}
//           canonical={`/products/verification-ip/${effectiveSlug}`}
//         />
        
//         <div className="relative w-full overflow-hidden">
//           <div
//             className="relative w-full bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${aboutBanner})`,
//               height: '400px',
//             }}
//           >
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, ease: 'easeOut' }}
//                 className="max-w-4xl mx-auto"
//               >
//                 <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">
//                   <span className="text-[#0F172A]">{restTitle || name}</span>
//                   {lastWord && <span className="text-[#FF6A00]"> {lastWord}</span>}
//                 </h1>

//                 {tagline && (
//                   <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
//                     {tagline}
//                   </p>
//                 )}
//               </motion.div>
//             </div>
//           </div>

//           <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
//               className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
//             >
//               <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
//                 <Link to="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
//                 <span className="text-gray-300">›</span>
//                 <Link to="/products" className="hover:text-[#FF6A00] transition-colors">Products</Link>
//                 <span className="text-gray-300">›</span>
//                 <span className="text-gray-700">{groupLabel}</span>
//                 <span className="text-gray-300">›</span>
//                 <span className="text-[#FF6A00] font-medium">{name}</span>
//               </nav>

//               <div className="flex flex-col lg:flex-row gap-8">
//                 <div className="lg:w-[260px] lg:flex-shrink-0">
//                   <ProductSidebar />
//                 </div>
//                 <div className="flex-1">
//                   <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
//                     <h1 className="text-[26px] font-bold text-[#FF8C1A] mb-6 leading-tight">
//                       {name}
//                     </h1>

//                     {overview && overview.length > 0 && (
//                       <div className="mb-8">
//                         <p className="text-[15px] text-gray-700 leading-[1.9]">
//                           {overview[0]}
//                         </p>
//                       </div>
//                     )}

//                     {features && features.length > 0 && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Key Features</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           {features.map((feature, index) => (
//                             <div
//                               key={index}
//                               className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
//                             >
//                               <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
//                               <span className="text-[14px] text-gray-700">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {applications && applications.length > 0 && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Applications</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           {applications.map((app, index) => (
//                             <div
//                               key={index}
//                               className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
//                             >
//                               <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">• </span>
//                               <span className="text-[14px] text-gray-700">{app}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {deliverables && deliverables.length > 0 && (
//                       <div className="mb-8">
//                         <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Deliverables</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           {deliverables.map((item, index) => (
//                             <div
//                               key={index}
//                               className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
//                             >
//                               <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
//                               <span className="text-[14px] text-gray-700">{item}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </section>

//                   <div className="mt-8 bg-gradient-to-r from-orange-50 to-white rounded-2xl border border-gray-200 p-8 text-center">
//                     <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
//                       Ready to evaluate {name}?
//                     </h2>
//                     <p className="text-gray-600 mb-6">
//                       Talk to a MAXVY architect about licensing, evaluation and integration.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                       <button
//                         onClick={() => setShowQuoteModal(true)}
//                         className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
//                       >
//                         <Send className="w-4 h-4" />
//                         Request For Quote
//                       </button>
//                       <button
//                         onClick={() => setShowDownloadModal(true)}
//                         className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
//                       >
//                         <Download className="w-4 h-4" />
//                         Request For Download
//                       </button>
//                       <Link
//                         to="/about/testimonials"
//                         className="px-6 py-3 bg-white text-[#FF8C1A] border-2 border-[#FF8C1A] rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
//                       >
//                         <Users className="w-4 h-4" />
//                         Testimonials
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           <div className="h-12" />
//         </div>

//         <QuoteRequestModal
//           isOpen={showQuoteModal}
//           onClose={() => setShowQuoteModal(false)}
//           productName={name}
//         />

//         <DownloadRequestModal
//           isOpen={showDownloadModal}
//           onClose={() => setShowDownloadModal(false)}
//           productName={name}
//         />
//       </>
//     );
//   }

//   // Fallback for when product is not found
//   return (
//     <>
//       <SEO
//         title={`${propName || 'Product'} — MAXVY Technologies`}
//         description={propTagline || ''}
//         canonical={`/products/${category}/${effectiveSlug}`}
//       />
      
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="relative w-full bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url(${aboutBanner})`,
//             height: '400px',
//           }}
//         >
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//               className="max-w-4xl mx-auto"
//             >
//               <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">
//                 <span className="text-[#0F172A]">PRODUCT </span>
//                 <span className="text-[#FF6A00]">NOT FOUND</span>
//               </h1>
//             </motion.div>
//           </div>
//         </div>

//         <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
//             className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
//           >
//             <div className="flex flex-col lg:flex-row gap-8">
//               <div className="lg:w-[260px] lg:flex-shrink-0">
//                 <ProductSidebar />
//               </div>
//               <div className="flex-1">
//                 <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
//                   <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
//                   <h2 className="text-2xl font-bold text-gray-700">Product Not Found</h2>
//                   <p className="text-gray-500 mt-2">The product you're looking for doesn't exist.</p>
//                   <Link to="/products" className="inline-block mt-4 text-[#FF8C1A] hover:underline font-medium">
//                     View all products
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <div className="h-12" />
//       </div>
//     </>
//   );
// }
import React, { useState } from 'react';
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
    captcha: '',
  });
  const [captchaText, setCaptchaText] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  // Initialize captcha on open
  React.useEffect(() => {
    if (isOpen) {
      generateCaptcha();
      setFormData({
        name: '',
        companyName: '',
        email: '',
        country: '',
        contactNumber: '',
        requirement: '',
        captcha: '',
      });
      setErrors({});
      setIsSuccess(false);
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
    if (formData.captcha !== captchaText) newErrors.captcha = 'Captcha does not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 2000);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Request For Quote</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
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
              <div>
                <label className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Select Country <span className="text-red-500">*</span></label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Requirement / Need / Notes <span className="text-red-500">*</span></label>
                <textarea
                  value={formData.requirement}
                  onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                  rows="3"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.requirement ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Enter Captcha (Case Sensitive) <span className="text-red-500">*</span></label>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-lg font-bold tracking-wider select-none">
                    {captchaText}
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-[#FF8C1A] hover:text-[#f25f00] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.captcha}
                  onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                  placeholder="Enter captcha code"
                  className={`w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#FF8C1A] text-white rounded-lg font-medium hover:bg-[#f25f00] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
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
    captcha: '',
  });
  const [captchaText, setCaptchaText] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  React.useEffect(() => {
    if (isOpen) {
      generateCaptcha();
      setFormData({
        name: '',
        email: '',
        companyName: '',
        country: '',
        contactNumber: '',
        captcha: '',
      });
      setErrors({});
      setIsSuccess(false);
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
    if (formData.captcha !== captchaText) newErrors.captcha = 'Captcha does not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 2000);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Request For Download</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
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
              <div>
                <label className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Select Country <span className="text-red-500">*</span></label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Enter Captcha (Case Sensitive) <span className="text-red-500">*</span></label>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-lg font-bold tracking-wider select-none">
                    {captchaText}
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-[#FF8C1A] hover:text-[#f25f00] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.captcha}
                  onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                  placeholder="Enter captcha code"
                  className={`w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C1A] ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#FF8C1A] text-white rounded-lg font-medium hover:bg-[#f25f00] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
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
    
    // Get category from product data
    const categoryName = productData.category || 'Product';
    const sidebarGroup = getSidebarGroupForProduct(`/products/${categoryName}/${effectiveSlug}`);
    const groupLabel = sidebarGroup?.label || categoryName || 'Product';

    // Split title for hero
    const titleParts = name.split(' ');
    const lastWord = titleParts.pop() || '';
    const restTitle = titleParts.join(' ');

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
                  {lastWord && <span className="text-[#FF6A00]"> {lastWord}</span>}
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
                  <h1 className="text-[26px] font-bold text-[#FF8C1A] mb-6 leading-tight">
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

                  {/* Features */}
                  {features && features.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Key Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
                          >
                            <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Block Diagram */}
                  {blockDiagram && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Block Diagram</h2>
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
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Applications</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {applications.map((app, index) => (
                          <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">• </span>
                            <span className="text-[14px] text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deliverables */}
                  {deliverables && deliverables.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Deliverables</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {deliverables.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
                          >
                            <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Videos */}
                  {videos && videos.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Videos</h2>
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
                                <div className="w-16 h-16 rounded-full bg-[#FF8C1A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                <div className="mt-8 bg-gradient-to-r from-orange-50 to-white rounded-2xl border border-gray-200 p-8 text-center">
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Ready to evaluate {name}?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Talk to a MAXVY architect about licensing, evaluation and integration.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => setShowQuoteModal(true)}
                      className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Request For Quote
                    </button>
                    <button
                      onClick={() => setShowDownloadModal(true)}
                      className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Request For Download
                    </button>
                    <Link
                      to="/about/testimonials"
                      className="px-6 py-3 bg-white text-[#FF8C1A] border-2 border-[#FF8C1A] rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
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
                  {lastWord && <span className="text-[#FF6A00]"> {lastWord}</span>}
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
                  <h1 className="text-[26px] font-bold text-[#FF8C1A] mb-6 leading-tight">
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
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Key Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
                          >
                            <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Block Diagram */}
                  {blockDiagram && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Block Diagram</h2>
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
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Applications</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {applications.map((app, index) => (
                          <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">• </span>
                            <span className="text-[14px] text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {deliverables && deliverables.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-[#FF8C1A] mb-4">Deliverables</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {deliverables.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors"
                          >
                            <span className="text-[#FF8C1A] text-lg font-bold mt-0.5">•</span>
                            <span className="text-[14px] text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

                <div className="mt-8 bg-gradient-to-r from-orange-50 to-white rounded-2xl border border-gray-200 p-8 text-center">
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Ready to evaluate {name}?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Talk to a MAXVY architect about licensing, evaluation and integration.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => setShowQuoteModal(true)}
                      className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Request For Quote
                    </button>
                    <button
                      onClick={() => setShowDownloadModal(true)}
                      className="px-6 py-3 bg-[#FF8C1A] text-white rounded-lg font-semibold hover:bg-[#f25f00] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Request For Download
                    </button>
                    <Link
                      to="/about/testimonials"
                      className="px-6 py-3 bg-white text-[#FF8C1A] border-2 border-[#FF8C1A] rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
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
                <span className="text-[#FF6A00]">NOT FOUND</span>
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
                <Link to="/products" className="inline-block mt-4 text-[#FF8C1A] hover:underline font-medium">
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