// LatestContent.tsx — Fixed version (with object validation)

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

const highlights = [
  {
    title: 'Match-Winning Century',
    videoUrl: 'https://youtu.be/IEQixSBYTf0?si=8vp1lO8iniZSzXUp',
    thumbnail: 'https://imgs.search.brave.com/qge24TAkKUGMPHv8N1MLdshrne1-pdOMKO1q03hPW0g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/NjcxOTE2Mi9waG90/by92aXJhdC1rb2hs/aS1vZi1pbmRpYS1j/ZWxlYnJhdGVzLWhp/cy1jZW50dXJ5LWR1/cmluZy10aGUtc2Vj/b25kLWRheS1vZi10/aGUtc2Vjb25kLXRl/c3QtY3JpY2tldC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MXpGLV9rNzNXU2lw/Y2V1WjVobE1oeFQ2/ZkpxZ2lxcFdjLWIw/ZlhYUFRDOD0?auto=compress&cs=tinysrgb&w=600',
    description: 'Relive VK’s iconic 100* against Australia.'
  },
  {
    title: 'Training Highlights',
    videoUrl: 'https://youtu.be/tDd5xxJQsEo?si=G2_34muo6udZ7v0I',
    thumbnail: 'https://imgs.search.brave.com/x4tnJTG7qhzGCUdbHAhxCsSV8-dRq0rcbvnXhObkBTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNzEvMjczODcx/LTAwNC03Rjk1NDdD/Qi9Sb3lhbC1DaGFs/bGVuZ2Vycy1CZW5n/YWx1cnUtVmlyYXQt/S29obGktUGxheXMt/QS1TaG90LUR1cmlu/Zy1UaGUtSW5kaWFu/LVByZW1pZXItTGVh/Z3VlLVR3ZW50eTIw/LUNyaWNrZXQtTWF0/Y2gtQmV0d2Vlbi1L/b2xrYXRhLUtuaWdo/dC1SaWRlcnMuanBn?auto=compress&cs=tinysrgb&w=600',
    description: 'Behind the scenes from VK’s intense practice sessions.'
  },
  {
    title: 'Inspirational Speech',
    videoUrl: 'https://youtu.be/OzUIA0ws1g0?si=i-JNN4g3qYRJ3XVQ',
    thumbnail: '/src/vk.png?auto=compress&cs=tinysrgb&w=600',
    description: 'VK’s words of wisdom that inspired a generation.'
  }
];

const LatestContent: React.FC = () => {
  return (
    <section id="latest-updates" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Latest Highlights
          </h2>
          <p className="text-gray-300 text-lg">
            Watch the moments that made history
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            if (!highlight || !highlight.title || !highlight.videoUrl || !highlight.thumbnail) return null;
            return (
              <motion.a
                key={index}
                href={highlight.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={highlight.thumbnail}
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="text-white/80 group-hover:text-white" size={48} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {highlight.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/highlights">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
            >
              View All Highlights
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestContent;
