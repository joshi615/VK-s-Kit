import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Mail, MapPin, Phone, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/virat.kohli', color: 'hover:text-pink-500' },
    { icon: Twitter, url: 'https://twitter.com/imVkohli', color: 'hover:text-blue-400' },
    { icon: Facebook, url: 'https://facebook.com/virat.kohli', color: 'hover:text-blue-600' },
    { icon: Youtube, url: 'https://youtube.com/@viratkohli', color: 'hover:text-red-500' }
  ];

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'About', url: '#' },
      { name: 'Contact', url: '#' }
    ],
    'Categories': [
      { name: 'Training Courses', url: '#' },
      { name: 'Merchandise', url: '#' },
      { name: 'Equipment', url: '#' },
      { name: 'Bundles', url: '#' }
    ],
    'Support': [
      { name: 'Help Center', url: '#' },
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Refund Policy', url: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="text-red-500" size={28} />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                  VK's Kit
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Everything that fuels the legend's journey. Join millions of fans and aspiring cricketers in their quest for excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>contact@vkskit.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Social Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-800" id="footer-social">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Connect with VK</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2025 VK's Kit. All rights reserved. Built with passion for cricket excellence.
            </motion.p>

            <motion.button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
            >
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;