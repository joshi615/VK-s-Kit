import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

interface SocialLinksProps {
  showTitle?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ showTitle = true }) => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/virat.kohli',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:shadow-pink-500/25'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/imVkohli',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/virat.kohli',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:shadow-blue-600/25'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@royalchallengersbengaluruYT',
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:shadow-red-500/25'
    }
  ];

  return (
    <section className="py-20 bg-gray-800" id="social-links">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Connect with VK
            </h2>
            <p className="text-gray-300 text-lg">
              Follow the journey across all platforms
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className={`group relative p-6 bg-gray-700/50 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${platform.hoverColor}`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <platform.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-center">{platform.name}</h3>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Follow on {platform.name}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;