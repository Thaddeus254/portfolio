import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Download, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { profileData } from '../data/profileData';

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About - Shannel Oduor</title>
        <meta name="description" content="Learn about Shannel Oduor's background, expertise in graphic design, IT training, and customer service excellence." />
      </Helmet>

      <section className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 mr-2" style={{ color: '#4169E1' }} />
              <span className="font-medium" style={{ color: '#4169E1' }}>About Me</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Get to Know Me Better
            </h1>
            <div className="w-24 h-1.5 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #4169E1 0%, #FF0000 100%)' }}></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full animate-pulse" 
                     style={{ backgroundColor: '#4169E1', opacity: 0.2 }}></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full animate-pulse delay-1000" 
                     style={{ backgroundColor: '#FF0000', opacity: 0.2 }}></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                {profileData.name}
              </h2>
              
              <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
                {profileData.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                {profileData.bio}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin size={20} className="mr-3" style={{ color: '#4169E1' }} />
                  <span>{profileData.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail size={20} className="mr-3" style={{ color: '#4169E1' }} />
                  <a href={`mailto:${profileData.email}`} 
                     className="hover:scale-105 transform transition-all"
                     onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'}
                     onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {profileData.email}
                  </a>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone size={20} className="mr-3" style={{ color: '#4169E1' }} />
                  <span>{profileData.phone.split(',')[0]}</span>
                </div>
              </div>
              
              <a 
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #FF0000 0%, #4169E1 100%)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)'}
              >
                Download CV
                <Download size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;