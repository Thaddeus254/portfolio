import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

const LandingPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Africa/Nairobi'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Africa/Nairobi'
    });
  };

  const quickLinks = [
    { title: 'About Me', path: '/about', description: 'Learn about my background and expertise', icon: '👋' },
    { title: 'My Skills', path: '/skills', description: 'Technical and creative abilities', icon: '🎨' },
    { title: 'Experience', path: '/experience', description: 'Professional journey and achievements', icon: '💼' },
    { title: 'Projects', path: '/projects', description: 'Portfolio of creative works', icon: '🚀' },
    { title: 'Education', path: '/education', description: 'Academic background and certifications', icon: '🎓' },
    { title: 'Contact', path: '/contact', description: 'Get in touch for collaborations', icon: '📧' }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Shannel Oduor - Senior Graphic Designer & IT Professional</title>
        <meta name="description" content="Welcome to Shannel Oduor's portfolio. Creative graphic designer and IT professional specializing in brand identity, digital design, and technical solutions." />
      </Helmet>

      {/* Hero Landing Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: '#4169E1', opacity: 0.1 }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: '#FF0000', opacity: 0.1 }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Time Display */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-8 py-4 shadow-xl">
              <Clock size={24} className="mr-3" style={{ color: '#4169E1' }} />
              <div className="text-center">
                <div className="font-mono font-bold text-xl" style={{ color: '#4169E1' }}>
                  {formatTime(currentTime)} EAT
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles className="w-8 h-8 mr-3" style={{ color: '#4169E1' }} />
              <span className="text-xl font-medium" style={{ color: '#4169E1' }}>Welcome to my Portfolio</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-800 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span style={{ color: '#4169E1' }}>Shannel</span>{' '}
              <span className="relative">
                Oduor
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-2 rounded-full"
                  style={{ backgroundColor: '#FF0000' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
            </motion.h1>

            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Senior Graphic Designer & IT Professional
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Creative and detail-oriented designer with expertise in brand identity, digital illustration, and comprehensive IT solutions. 
              Passionate about creating visually compelling designs that tell meaningful stories.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Link 
                to="/about"
                className="px-10 py-4 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-xl transform hover:scale-105 text-lg"
                style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #FF0000 0%, #4169E1 100%)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)'}
              >
                Explore My Work
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <Link 
                to="/contact"
                className="px-10 py-4 border-2 font-medium rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-xl transform hover:scale-105 bg-white/80 dark:bg-gray-800/80 text-lg"
                style={{ borderColor: '#4169E1', color: '#4169E1' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4169E1';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.color = '#4169E1';
                }}
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={24} style={{ color: '#4169E1' }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Explore My Portfolio
            </h2>
            <div className="w-24 h-1.5 rounded-full mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #4169E1 0%, #FF0000 100%)' }}></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover my journey, skills, and creative works across different sections of my portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={link.path}
                  className="group block bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 transform"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{link.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:scale-105 transform transition-all"
                        style={{ '--hover-color': '#4169E1' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                      {link.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {link.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium group-hover:scale-105 transform transition-all"
                         style={{ color: '#4169E1' }}>
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Why Choose Me?
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Creative Excellence', desc: 'Award-winning designs with attention to detail' },
                  { title: 'Technical Expertise', desc: 'IT training and network solutions specialist' },
                  { title: 'Customer Focus', desc: '98% satisfaction rate with personalized service' },
                  { title: 'Diverse Skills', desc: 'From graphic design to web development' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0" 
                         style={{ backgroundColor: index % 2 === 0 ? '#4169E1' : '#FF0000' }}></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/32188352/pexels-photo-32188352.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Shannel Oduor"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full animate-pulse" 
                     style={{ backgroundColor: '#4169E1', opacity: 0.2 }}></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full animate-pulse delay-1000" 
                     style={{ backgroundColor: '#FF0000', opacity: 0.2 }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default LandingPage;