import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Eye } from 'lucide-react';
import SEO from '../../common/SEO';
import FollowUsCard from '../../common/FollowUsCard';
import aboutBanner from '../../../images/about-us_banner.jpeg';
import feedback1 from '../../../images/feedback1.png';
import feedback2 from '../../../images/feedback2.png';

// --- Testimonial Card Component ---
const TestimonialCard = ({ name, role, content, initials, feedbackImage, onViewFeedback }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group max-w-[510px] w-full"
    >
      {/* Card with Gradient Background */}
      <div 
        className="relative rounded-[10px] p-[30px] overflow-visible"
        style={{
          background: 'linear-gradient(135deg, #FF7A00 0%, #F56A00 100%)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          height: '205px',
          width: '100%',
        }}
      >
        {/* Hover Shadow */}
        <div className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
             style={{ boxShadow: '0 18px 40px rgba(0,0,0,0.25)' }} 
        />
        
        {/* Quote Icon */}
        <div className="relative z-10">
          <Quote className="w-8 h-8 text-white/55" />
        </div>
        
        {/* Testimonial Text - Truncated to fit inside card */}
        <p className="relative z-10 text-white text-[15px] font-medium leading-[1.8] mt-[18px] line-clamp-4 overflow-hidden">
          {content}
        </p>
        
        {/* Speech Bubble Pointer - Diamond Shape */}
        <div 
          className="absolute -bottom-[10px] left-[42px] w-[22px] h-[22px] rotate-45"
          style={{
            background: 'linear-gradient(135deg, #FF7A00 0%, #F56A00 100%)',
          }}
        />
      </div>
      
      {/* Author Info - Below Card */}
      <div className="flex items-center justify-between mt-[34px]">
        <div className="flex items-center gap-4">
          {/* Avatar - Orange Circle with Initials */}
          <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-bold text-base">
            {initials}
          </div>
          <div>
            <h4 className="text-[18px] font-bold text-[#0F172A] leading-tight">
              {name}
            </h4>
            <p className="text-[15px] font-normal text-[#6B7280] leading-tight">
              {role}
            </p>
          </div>
        </div>
        
        {/* View Feedback Button */}
       <button
  onClick={() => onViewFeedback(feedbackImage)}
  className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0"
>
  <Eye className="w-4 h-4" />
  Feedback
</button>
      </div>
    </motion.div>
  );
};

// --- Feedback Modal Component ---
const FeedbackModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Image */}
        <div className="w-full">
          <img 
            src={image} 
            alt="Feedback" 
            className="w-full h-auto object-contain max-h-[80vh]"
          />
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function TestimonialsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Testimonial data - Shortened to fit inside cards
  const testimonials = [
    {
      id: 1,
      name: 'Zhang Yanxiong',
      initials: 'ZY',
      content: 'Efficient communicating and feedback when there are problems in design. Well-experienced knowledge, especially in MIPI I3C protocol. Good technical support. Professional services. Strong technical strength and excellent service quality.',
      feedbackImage: feedback1
    },
    {
      id: 2,
      name: 'Karuppasamy Subbiah',
      initials: 'KS',
      content: 'Maxvy\'s professionalism, technical ability, and smooth communication. DDR5 is a new field with high technical difficulty. Without SPD5 Hub IP from Maxvy, our product would face more difficulties.',
      feedbackImage: feedback2
    }
  ];

  const handleViewFeedback = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <>
      <SEO
        title="Testimonials — MAXVY Technologies"
        description="What leading semiconductor companies say about working with MAXVY."
        canonical="/about/testimonials"
      />

      {/* --- HERO/BANNER SECTION --- */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBanner})`,
            height: '360px',
          }}
        >
          {/* Light White Overlay */}
          <div className="absolute inset-0 bg-white/70" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[44px] font-extrabold leading-tight tracking-tight uppercase">
                <span className="text-[#0F172A]">TESTI</span>
                <span className="text-[#FF6A00]">MONIALS</span>
              </h1>

              <p className="mt-4 text-[18px] text-gray-600 max-w-[650px] mx-auto leading-relaxed">
                Discover what our clients say about their experience working with us
                and the value we deliver.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- FLOATING WHITE CONTAINER --- */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12"
          >
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10">
              {/* --- LEFT CONTENT - Testimonials Grid --- */}
              <div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[55px]"
                >
                  {testimonials.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      name={testimonial.name}
                      role={testimonial.role}
                      content={testimonial.content}
                      initials={testimonial.initials}
                      feedbackImage={testimonial.feedbackImage}
                      onViewFeedback={handleViewFeedback}
                    />
                  ))}
                </motion.div>
              </div>

              {/* --- RIGHT SIDEBAR - Follow Us Card --- */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:pl-4"
              >
                <FollowUsCard />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom spacer */}
        <div className="h-12" />
      </div>

      {/* Feedback Modal */}
      <FeedbackModal 
        isOpen={modalOpen}
        image={selectedImage}
        onClose={handleCloseModal}
      />
    </>
  );
}