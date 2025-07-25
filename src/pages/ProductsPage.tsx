import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, ShoppingCart, Star, Play, Target, Shield, Zap, Award, Users, Calendar } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const ProductsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMore, setShowMore] = useState(false);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const categories = [
    { id: 'all', label: 'All Products', count: 18 },
    { id: 'courses', label: 'Courses', count: 4 },
    { id: 'equipment', label: 'Equipment', count: 8 },
    { id: 'merch', label: 'Merchandise', count: 4 },
    { id: 'bundles', label: 'Bundles', count: 2 }
  ];

  const products = [
    {
      id: 1,
      title: 'Batting Masterclass',
      category: 'courses',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 1250,
      image: 'https://imgs.search.brave.com/wDcY8epqGJu5MZhEqxNmtwNbKeNVaMRjN6qSpcAiv6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lzZGVuLmNvbS9z/dGF0aWMtYXNzZXRz/L3dhZi1pbWFnZXMv/MTkvZGIvOTEvMC83/Njc1Ml9Lb2hsaS1z/dGFuY2UucG5n?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Master the art of batting with expert techniques and strategies',
      badge: 'Bestseller',
      type: 'course'
    },
    {
      id: 2,
      title: 'VK Signature Jersey',
      category: 'merch',
      price: 89,
      rating: 4.7,
      reviews: 850,
      image: 'https://imgs.search.brave.com/fc7jVNKJG_2BtZQbRhMCywItj6_v_S0yg43QjkWi06g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qYXJz/ZXlzZW1wb3JpYS5j/b20vY2RuL3Nob3Av/ZmlsZXMvUGljc2Fy/dC0yNC0wMy0yMl8x/OC01Ni0yNy03NDcu/cG5nP3Y9MTcxMTEx/NDIxOCZ3aWR0aD0x/NDQ1?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Official VK signature jersey with premium quality fabric',
      badge: 'Limited Edition',
      type: 'physical'
    },
    {
      id: 3,
      title: 'Mental Strength Training',
      category: 'courses',
      price: 199,
      rating: 4.8,
      reviews: 650,
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Build unbreakable mental fortitude like a champion',
      type: 'course'
    },
    {
      id: 4,
      title: 'VK Training Cap',
      category: 'merch',  
      price: 45,
      rating: 4.6,
      reviews: 420,
      image: 'https://imgs.search.brave.com/VLUs9rgJO51ivsY8oIBDMh7Ce0KlChS7O8z2uSfgb5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFvZDdZYmxkN0wu/anBn?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Comfortable training cap for all weather conditions',
      type: 'physical'
    },
    {
      id: 5,
      title: 'Complete Champion Bundle',
      category: 'bundles',
      price: 499,
      originalPrice: 699,
      rating: 5.0,
      reviews: 320,
      image: 'https://imgs.search.brave.com/K3JnolcQMqgemo6Efvqg95ZHuWPtFhx11COKNqkvuCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFDSExnc001dkwu/anBn?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Everything you need to train like a champion',
      badge: 'Best Value',
      type: 'bundle'
    },
    {
      id: 6,
      title: 'Fitness & Nutrition Guide',
      category: 'courses',
      price: 149,
      rating: 4.7,
      reviews: 780,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Complete guide to cricket fitness and nutrition',
      type: 'course'
    },
    // Cricket Equipment
    {
      id: 7,
      title: 'VK Signature Cricket Bat',
      category: 'equipment',
      price: 299,
      rating: 4.9,
      reviews: 520,
      image: 'https://imgs.search.brave.com/k5N9TW6e-YeOdwfb8UKQSPeWXjr4Qmu12IrNJPaHBhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYvajl6/eWQ4dzAvYmF0L3Ev/aC9oL3dlaWdodC1y/YW5nZS0xMTAwLTEy/NTAtZy1sb25nLWhh/bmRsZS1lbmRvcnNl/ZC1lbmdsaXNoLXdp/bGxvdy1tci1vcmln/aW5hbC1pbWFldGht/cjZoamZ1OWZlLmpw/ZWc_cT03MA?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Professional grade cricket bat used by champions',
      badge: 'Pro Grade',
      type: 'physical'
    },
    {
      id: 8,
      title: 'Premium Cricket Ball Set',
      category: 'equipment',
      price: 49,
      rating: 4.6,
      reviews: 340,
      image: 'https://imgs.search.brave.com/d4wkaQe3tYFI3me31cUA_m8XTTGWWxGVzcWJNceD8LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibGFj/a2FzaHNwb3J0cy5j/b20vY2RuL3Nob3Av/cHJvZHVjdHMvSG9u/ZXl2aWV3X0lNR18w/NTM0XzI1MHgyNTBA/MnguanBnP3Y9MTY3/NTU0NTkxNQ?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Premium leather cricket balls for practice and matches',
      type: 'physical'
    },
    {
      id: 9,
      title: 'Protective Guards Set',
      category: 'equipment',
      price: 89,
      rating: 4.7,
      reviews: 280,
      image: 'https://imgs.search.brave.com/CjZvYNxkLVKONA8xxQCe-fdXG8cN6pCLy4D96AfkpXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF4VVd2WnZMb0wu/anBn?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Professional grade pads and guards for safety',
      type: 'physical'
    },
    {
      id: 10,
      title: 'Training Gloves',
      category: 'equipment',
      price: 79,
      rating: 4.5,
      reviews: 190,
      image: 'https://imgs.search.brave.com/Mgot1hDr87fPdG6S__MSO_Kuxu7KKC5JgVcyjQPzQkA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91c2Fj/cmlja2V0Z2Vhci5j/b20vY2RuL3Nob3Av/ZmlsZXMvaW1nXzU4/NjYtMTAwMHgxMDYz/LmpwZz92PTE2ODM1/MTk0NzUmd2lkdGg9/MTQ0NQ?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'High-quality batting and wicket keeping gloves',
      type: 'physical'
    },
    {
      id: 11,
      title: 'Cricket Helmet Pro',
      category: 'equipment',
      price: 159,
      rating: 4.8,
      reviews: 410,
      image: 'https://imgs.search.brave.com/WfLqcWMAAWeA1WUkL3jfoDMVPeDx1oFDPgfBeTzmdXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFuU2ZkY3Z1eUwu/anBn?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Advanced protection with superior comfort',
      badge: 'Safety First',
      type: 'physical'
    },
    {
      id: 12,
      title: 'Cricket Stumps Set',
      category: 'equipment',
      price: 69,
      rating: 4.4,
      reviews: 150,
      image: 'https://imgs.search.brave.com/vCSwYdcHizF9xCC0DF6uNiVftmsBsn0lI_pu18BdCbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmlj/a2V0c2hvcC5ldS9j/ZG4vc2hvcC9maWxl/cy9DUklDS0VULVdJ/Q0tFVFMuanBnP3Y9/MTcxNjk2MzE5Mw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Professional wooden stumps with bails',
      type: 'physical'
    }
  ];

  const moreProducts = [
    {
      id: 13,
      title: 'Cricket Shoes Pro',
      category: 'equipment',
      price: 129,
      rating: 4.6,
      reviews: 230,
      image: 'https://imgs.search.brave.com/BHTEPDqN79iZz3LTADm6Uq0EDSL6YM8yftm5sm9NHRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5t/ZWRpYS5kc2MtY3Jp/Y2tldC5jb20vbWVk/aWEvY2F0YWxvZy9w/cm9kdWN0L2NhY2hl/LzQyNTQwZTNkZjhj/NDBhYWUzNDlkYzE2/MWU0OTQyZDdiL2ov/YS9qYWZmYS0tbS5q/cGc?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Professional cricket shoes with superior grip',
      type: 'physical'
    },
    {
      id: 14,
      title: 'VK Water Bottle',
      category: 'merch',
      price: 25,
      rating: 4.3,
      reviews: 180,
      image: 'https://imgs.search.brave.com/aRAX814AxS2PlE62ktds0RfHPOZlTNVbJDHOGmdjEWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzli/YTE0MTBiLTRhMTIt/NGY2ZS04MzVjLTgx/MTdlZTNhNTZhYy5f/X0NSMCwwLDE5NDAs/MTIwMF9QVDBfU1g5/NzBfVjFfX18ucG5n?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Stay hydrated like a champion',
      type: 'physical'
    },
    {
      id: 15,
      title: 'VK Gym Bag',
      category: 'merch',
      price: 65,
      rating: 4.5,
      reviews: 120,
      image: 'https://imgs.search.brave.com/yGPm1euUocRCsLbjvaWtFsjoTjqAG2j2b9uCW7vwDm8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4xOTIy/MzkwMjU1Ljc0MzEv/dXIsZHVmZmxlX2Jh/Z19sYXJnZV9mcm9u/dCxzcXVhcmUsNjAw/eDYwMC5qcGc?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Spacious bag for all your training gear',
      type: 'physical'
    },
    {
      id: 16,
      title: 'Advanced Batting Course',
      category: 'courses',
      price: 399,
      rating: 4.9,
      reviews: 890,
      image: 'https://imgs.search.brave.com/EBaI91jULLm3t9chq-s0LWFDZI6n3vnXwqB2mRGQ-Ic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMub25seW15aGVh/bHRoLmNvbS9pbXBv/cnRlZC9pbWFnZXMv/MjAyMy9TZXB0ZW1i/ZXIvMTFfU2VwXzIw/MjMvTWFpbi12aXJh/dGtvaGxpZml0bmVz/cy5qcGc?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Master advanced batting techniques and strategies',
      badge: 'Advanced',
      type: 'course'
    },
    {
      id: 17,
      title: 'Champion Mindset Bundle',
      category: 'bundles',
      price: 799,
      originalPrice: 1099,
      rating: 5.0,
      reviews: 450,
      image: 'https://imgs.search.brave.com/hkHGQaJfw131bFUnkA3jPvGAj2_SSW2JxRw2_4QIu8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FjbHViaW5kaWEu/Y29tL2ltZy9wcmV2/aWV3L2N1c3RvbS8y/MDIzMDcyMDEwMzcw/NF92aXJhdGtvaGxp/LmpwZw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Complete package for mental and physical excellence',
      badge: 'Ultimate',
      type: 'bundle'
    },
    {
      id: 18,
      title: 'Cricket Kit Bag',
      category: 'equipment',
      price: 99,
      rating: 4.4,
      reviews: 200,
      image: 'https://imgs.search.brave.com/ndOi_3ciGBuC0AmFq3hsrCwoKXY1pdjHE0qEiNo-zLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpdG9yamkuY29t/L19uZXh0L2ltYWdl/P3VybD1odHRwczov/L2Nkbi5lZGl0b3Jq/aS5jb20vSXlkZkpP/S2hLay5qcGcmdz0z/ODQwJnE9NzU?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Organize and carry all your cricket equipment',
      type: 'physical'
    }
  ];

  const allProducts = showMore ? [...products, ...moreProducts] : products;
  const filteredProducts = activeFilter === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      type: product.type
    });
  };

  const handleEnroll = (product: any) => {
    if (!isAuthenticated) {
      alert('Please login to enroll in courses');
      return;
    }
    // Simulate enrollment process
    alert(`Enrolled in ${product.title}! Payment of $${product.price} processed.`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-8"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Products & Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover exclusive courses, merchandise, and bundles designed to elevate your game
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 ${
                viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'sm:w-64 sm:flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    viewMode === 'list' ? 'h-48 sm:h-full' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Type Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-blue-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {product.type === 'course' && <Play size={16} className="text-white" />}
                    {product.type === 'physical' && <ShoppingCart size={16} className="text-white" />}
                    {product.type === 'bundle' && <Star size={16} className="text-white" />}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-white font-semibold ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (product.type === 'course') {
                        handleEnroll(product);
                      } else {
                        handleAddToCart(product);
                      }
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    {product.type === 'course' ? 'Enroll Now' : 'Add to Cart'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {!showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowMore(true);
                setTimeout(() => {
                  const element = document.getElementById('more-products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300"
            >
              Load More Products
            </motion.button>
          </motion.div>
        )}
        
        {showMore && <div id="more-products" className="mt-8"></div>}
      </div>
    </motion.div>
  );
};

export default ProductsPage;