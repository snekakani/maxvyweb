import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rss, 
  Linkedin, 
  ExternalLink, 
  Share2, 
  ThumbsUp, 
  MessageCircle, 
  Clock,
  
  Users
} from 'lucide-react';
import maxvyLogo from '../../images/maxvy300withR.png';

const FollowUsCard = ({
  title = 'Follow us',
  buttonText = 'Follow Company',
}) => {
  const posts = [
    {
      id: 1,
      title: 'MAXVY at IESA Vision Summit 2026',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQECJcNV_d3CrA/feedshare-shrink_800/B4DZyUBGMmJAAg-/0/1772009841710?e=1785369600&v=beta&t=9I2z0esIbTwa6yGIE9KDDvuCLbBK8ua6SYdUZKw21bQ',
      time: '2 months ago',
      url: 'https://www.linkedin.com/posts/maxvytech_maxvy-iesa-visionsummit2026-activity-7432348011508359169-LjG9/'
    },
    {
      id: 2,
      title: 'Christmas Celebration at MAXVY',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHF920SYtZ48w/feedshare-shrink_800/B56Zs7gMpJIAAg-/0/1766229855349?e=1785369600&v=beta&t=hdJYkHdp0_zYHMy-5iP3stFEaQUsqeHGdPQFhVK3faU',
      time: '4 months ago',
      url: 'https://www.linkedin.com/posts/maxvytech_teammaxvy-christmascelebration-workplacejoy-activity-7408104957624840192-hk_H'
    },
    {
      id: 3,
      title: 'Supercomputing India 2025',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQHlsDzwqgz54Q/feedshare-shrink_800/B4DZsRHQRcG0Ag-/0/1765518680870?e=1785369600&v=beta&t=QuCd6InPe8A8R-FQiRoeDQGIyEhEc2F0-gsmA1xpZKY',
      time: '5 months ago',
      url: 'https://www.linkedin.com/posts/maxvytech_maxvy-sci25-supercomputingindia2025-activity-7405122077030309888-1b5A'
    }
  ];

  const handleFollowClick = () => {
    window.open('https://www.linkedin.com/company/maxvytech/', '_blank');
  };

  const handlePostClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full"
    >
      {/* Main Card - Like Facebook Plugin */}
      <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
  <img
    src={maxvyLogo}
    alt="MAXVY Logo"
    className="w-28 h-16 object-contain"
  />
</div>
            {/* <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-[#0F172A] leading-tight">
                MAXVY Technologies Pvt Ltd
              </h4>
              <div className="flex items-center gap-1 mt-0.5">
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs text-gray-500">LinkedIn Company</span>
              </div>
            </div> */}
          </div>
          
       <button
  onClick={handleFollowClick}
  className="mt-3 w-full flex items-center overflow-hidden rounded-md border border-[#0A66C2]"
>
  {/* LinkedIn Logo */}
  <div className="bg-white px-4 py-2 border-r border-[#0A66C2] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-5 h-5 fill-[#0A66C2]"
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.91 0 53.64A53.64 53.64 0 0 1 53.84 0a53.64 53.64 0 0 1 53.84 53.64c0 29.27-24.09 53.36-53.84 53.36zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
    </svg>
  </div>

  {/* Follow */}
  <div className="flex-1 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 text-center transition-colors">
    +Follow
  </div>
</button>
        </div>

        {/* Feed Section - Scrollable */}
        <div className="max-h-[600px] overflow-y-auto">
          {posts.map((post, index) => (
            <React.Fragment key={post.id}>
              <div className="p-4 hover:bg-gray-50/50 transition-colors duration-200">
                {/* Post Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0">
  <img
    src={maxvyLogo}
    alt="MAXVY Logo"
    className="w-28 h-16 object-contain"
  />
</div>
                  {/* <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] leading-tight">
                      MAXVY Technologies
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{post.time}</span>
                    </div>
                  </div> */}
                </div>

                {/* Post Content */}
                <div className="space-y-3">
                  {/* Post Title */}
                  <p className="text-sm text-[#0F172A] font-medium leading-relaxed">
                    {post.title}
                  </p>

                  {/* Post Image */}
                  <div className="relative rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Crect width="400" height="200" fill="%23f3f4f6"/%3E%3Ctext x="200" y="100" text-anchor="middle" font-family="Arial" font-size="14" fill="%239ca3af"%3EPost Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors text-xs">
                        <ThumbsUp className="w-4 h-4" />
                        Like
                      </button>
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors text-xs">
                        <MessageCircle className="w-4 h-4" />
                        Comment
                      </button>
                    </div>
                    <button
                      onClick={() => handlePostClick(post.url)}
                      className="flex items-center gap-1.5 text-orange-500 hover:text-orange-600 transition-colors text-xs font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View on LinkedIn
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Separator between posts */}
              {index < posts.length - 1 && (
                <div className="border-b border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FollowUsCard;