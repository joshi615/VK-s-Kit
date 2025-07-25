import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Crown, ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const { getTotalItems } = useCart();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products & Services' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-red-500"
            >
              <Crown size={28} />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              VK's Kit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-blue-400"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-500"
                  />
                )}
              </Link>
            ))}
            
            {/* Cart and Auth */}
            <div className="flex items-center space-x-4">
              <Link
                to="/cart"
                className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <ShoppingCart size={20} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">Hi, {user?.name}</span>
                  <button
                    onClick={logout}
                    className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  <User size={16} />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 rounded-lg mt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700/50 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700/50 transition-colors duration-300"
            >
              Cart ({getTotalItems()})
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700/50 transition-colors duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700/50 transition-colors duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;