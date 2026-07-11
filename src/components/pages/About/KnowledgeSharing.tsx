import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  ChevronRight,
  ArrowRight,
  Download
} from 'lucide-react';
import aboutBanner from '../../../images/about-us_banner.jpeg';
import FollowUsCard from '../../../components/common/FollowUsCard';
import { knowledgeArticles } from '../../../data/knowledgeArticles';

// --- Knowledge Card Component ---
const KnowledgeCard = ({ title, description, buttonText = 'Read more', onReadMore, icon = 'arrow', isDownload = false, downloadUrl = '' }) => {
  const handleClick = (e) => {
    if (isDownload && downloadUrl) {
      e.preventDefault();
      e.stopPropagation();
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = downloadUrl.split('/').pop() || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      onReadMore();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col h-full transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
      <button
        className="group mt-6 inline-flex h-12 min-w-[120px] items-center justify-center gap-2 rounded-lg bg-[#FF6B00] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#f25f00] hover:shadow-lg px-4"
        onClick={handleClick}
      >
        <span>{buttonText}</span>
        {icon === 'arrow' && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
        {icon === 'download' && <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />}
        {icon === 'info' && <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </button>
    </motion.div>
  );
};

// --- Main Page Component ---
const KnowledgeSharing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Filter posts based on search term
  const filteredPosts = knowledgeArticles.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReadMore = (slug) => {
    navigate(`/about/knowledge-sharing/${slug}`);
  };

  return (
    <section className="bg-[#FAFAFA] min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBanner})`,
            height: '400px',
          }}
        >
          {/* Content - No overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[50px] font-extrabold leading-tight tracking-tight">
                <span className="text-[#0F172A]">KNOWLEDGE </span>
                <span className="text-[#FF6A00]">SHARING</span>
              </h1>

              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                Explore deep insights into architecture, engineering, and product strategy.
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
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
              {/* --- LEFT CONTENT --- */}
              <div>
                {/* Knowledge Hub Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0F172A]">Knowledge Hub</h2>
                </div>

                {/* Search Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                  <div className="relative w-full sm:max-w-xxl">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {filteredPosts.length} Posts
                  </span>
                </div>

                {/* Knowledge Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <KnowledgeCard
                      key={post.id}
                      title={post.title}
                      description={post.shortDescription}
                      buttonText={post.buttonText}
                      icon={post.icon}
                      isDownload={post.isDownload || false}
                      downloadUrl={post.downloadUrl || ''}
                      onReadMore={() => handleReadMore(post.slug)}
                    />
                  ))}
                </div>

                {/* Show message when no posts found */}
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No posts found matching your search.</p>
                  </div>
                )}
              </div>

              {/* --- RIGHT SIDEBAR --- */}
              <div className="lg:pl-4">
                <FollowUsCard
                  title="Follow us"
                  companyName="Maxvy Tech"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                  buttonText="Follow"
                  facebookImage="/path-to-facebook-preview-image.jpg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom spacer */}
        <div className="h-12" />
      </div>
    </section>
  );
};

export default KnowledgeSharing;