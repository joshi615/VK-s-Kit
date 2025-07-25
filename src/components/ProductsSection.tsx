import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap, Shield, Target, Award } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const cricketProducts = [
    {
      id: 1,
      name: 'VK Signature Bat',
      price: 299,
      image: 'https://imgs.search.brave.com/Pu3EMvdN3S3_eyjUfrHvk1eujH8pa0QeZLjutRk7P2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci85NDkv/Nzc3L0hELXdhbGxw/YXBlci12aXJhdC1r/b2hsaS13aXRoLW1y/Zi1iYXQtdmlyYXQt/a29obGktbXJmLWJh/dC1jcmlja2V0ZXIt/c3BvcnRzLWtpbmct/a29obGktaW5kaWFu/LWplcnNleS10aHVt/Ym5haWwuanBn?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Target,
      description: 'Professional grade cricket bat used by champions'
    },
    {
      id: 2,
      name: 'Cricket Ball Set',
      price: 49,
      image: 'https://imgs.search.brave.com/EFsiBi3Ugf50ryAc6vnKn3xZKdu1mWO71I1PAWqJq3I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmlj/dG9kYXkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAz/L0NMVUItMi0xMDI0/eDU3Ni5qcGc?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Zap,
      description: 'Premium leather cricket balls for practice and matches'
    },
    {
      id: 3,
      name: 'Complete Cricket Kit',
      price: 599,
      image: 'https://imgs.search.brave.com/Q_CPmnrV3mN29H_3BhyRutkDsxDcEnOyrHSLg-xm0Ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmlj/a2V0ZXJzaG9wLmNv/bS9jZG4vc2hvcC9m/aWxlcy9tcmYta2Fz/aG1pci13aWxsb3ct/c2l6ZS00LXJpZ2h0/LWhhbmRlZC1iYXRz/bWFuLW1yZi1wcm9k/aWd5LWNvbXBsZXRl/LWNyaWNrZXQta2l0/LXNpemUtMzc5OTAw/MTY4MTExODguanBn/P3Y9MTc0NTc3NDE2/NCZ3aWR0aD0xMDAw?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Award,
      description: 'Everything you need to start your cricket journey'
    },
    {
      id: 4,
      name: 'Protective Guards',
      price: 89,
      image: 'https://imgs.search.brave.com/51m2u9SfMOolfE2SDnRVbtNHyRTOzmbJ2QPIAYwPTgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ka3Bj/cmlja2V0b25saW5l/LmNvbS9jZG4vc2hv/cC9jb2xsZWN0aW9u/cy9pbWFnZV9lNjI4/OGIzMy0wODQ2LTQ4/MjYtYmY3OS1lYjY2/Y2Y5OWUzZmYuaGVp/Yz92PTE2NzcxNTU0/NTMmd2lkdGg9MjQw/MA?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Shield,
      description: 'Professional grade pads and guards for safety'
    },
    {
      id: 5,
      name: 'Training Gloves',
      price: 79,
      image: 'https://imgs.search.brave.com/C5p6zmpC3CtB1FYJyhcto-7AaFDWMBOAvNEBRYST8WY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/emFwY3JpY2tldC5j/b20vY2RuL3Nob3Av/ZmlsZXMvTmV3X1dp/blJBUl9aSVBfYXJj/aGl2ZS56aXAud2Vi/cD92PTE3NDUyNTU3/OTImd2lkdGg9MTgw/MA?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Star,
      description: 'High-quality batting and wicket keeping gloves'
    },
    {
      id: 6,
      name: 'Cricket Helmet',
      price: 159,
      image: 'https://imgs.search.brave.com/UO7Rs09lDh-yF6vgRsf3AMMqNxkybfCFwa9moq97X3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91YW5k/dXNwb3J0cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvc2hyZXktbWFz/dGVyLWNsYXNzLWFp/ci1oZWxtZXQtZGV0/YWlsLTItc2NhbGVk/LndlYnA?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Shield,
      description: 'Advanced protection with superior comfort'
    }
  ];

  return (
    <section className="py-20 bg-gray-800" id="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Cricket Equipment
          </h2>
          <p className="text-gray-300 text-lg">
            Professional grade equipment for champions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cricketProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true }}
              className="group bg-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-blue-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <product.icon className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;