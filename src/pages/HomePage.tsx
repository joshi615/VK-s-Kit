import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import LatestContent from '../components/LatestContent';
import NewsletterCTA from '../components/NewsletterCTA';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ProductsSection />
      <LatestContent />
      <NewsletterCTA />
    </motion.div>
  );
};

export default HomePage;