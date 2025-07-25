import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Heart, Trophy, Star } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';

const AboutPage: React.FC = () => {
  const achievements = [
    { icon: Trophy, title: '70+ International Centuries', description: 'Record-breaking performance across formats' },
    { icon: Award, title: 'ICC Player of the Year', description: 'Multiple awards for outstanding performance' },
    { icon: Star, title: '25,000+ International Runs', description: 'Consistent excellence over the years' },
    { icon: Target, title: 'Captain of India', description: 'Led the team to historic victories' }
  ];

  const values = [
    { icon: Heart, title: 'Passion', description: 'Unwavering love for the game and continuous improvement' },
    { icon: Users, title: 'Team Spirit', description: 'Believing in collective success and supporting teammates' },
    { icon: Target, title: 'Excellence', description: 'Striving for perfection in every aspect of the game' },
    { icon: Award, title: 'Integrity', description: 'Playing with honesty, respect, and sportsmanship' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-8"
    >
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-900 via-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              About Virat Kohli
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From a young dreamer in Delhi to becoming one of cricket's greatest legends, 
              this is the story of passion, dedication, and the relentless pursuit of excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">The Journey</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Born in Delhi on November 5, 1988, Virat Kohli's journey began with a simple dream - 
                  to represent India in cricket. What started as childhood passion transformed into 
                  an extraordinary career that has redefined modern cricket.
                </p>
                <p>
                  From his debut in 2008 to becoming one of the most successful captains in Indian 
                  cricket history, Virat's story is one of continuous evolution, mental strength, 
                  and an unwavering commitment to fitness and excellence.
                </p>
                <p>
                  Beyond cricket, Virat has become a global icon, inspiring millions through his 
                  dedication, work ethic, and the belief that with passion and perseverance, 
                  any dream is achievable.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://imgs.search.brave.com/k4eDlY1w4eld1nHqCS6NaFgksJ9bKcyXRlgHa0MI3NU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BvcnRwaG90b2dh/bGxlcnkuY29tL2Nv/bnRlbnQvaW1hZ2Vz/L2Ntc2ZpbGVzL3By/b2R1Y3QvNDA5MDYv/NDE3NzItbGlzdC5q/cGc?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Virat Kohli"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Career Highlights
            </h2>
            <p className="text-gray-300 text-lg">
              Milestones that define a legendary career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 rounded-xl p-6 text-center backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h3 className="text-white font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Core Values
            </h2>
            <p className="text-gray-300 text-lg">
              The principles that drive excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-white font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <SocialLinks showTitle={false} />
    </motion.div>
  );
};

export default AboutPage;