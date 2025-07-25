import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToLatestUpdates = () => {
    const element = document.getElementById('latest-updates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://imgs.search.brave.com/gK8YRO7EXYSRwtM_n06WrmOF9D8YpsPZxLOwe4d5j2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC85LzAv/OS8xNTAwODAtMTky/MHgxMDgwLWRlc2t0/b3AtZnVsbC1oZC12/aXJhdC1rb2hsaS1i/YWNrZ3JvdW5kLmpw/Zw?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Cricket Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/70 to-red-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-white to-red-500 bg-clip-text text-transparent">
            Welcome to
          </span>
          <br />
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent"
          >
            VK's Kit
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 font-light"
        >
          Everything that fuels the legend's journey
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Explore Products
            </motion.button>
          </Link>
          <motion.button
            onClick={scrollToLatestUpdates}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-red-500 hover:bg-red-500 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
          >
            Watch Highlights
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70 hover:text-white cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;