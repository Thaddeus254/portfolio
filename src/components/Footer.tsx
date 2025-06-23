import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ClientLogos from './ClientLogos';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 text-gray-300 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, rgba(65,105,225,0.1) 0%, rgba(255,0,0,0.1) 100%)' }}></div>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #4169E1 0%, #FF0000 100%)' }}></div>
      
      {/* Client Logos Carousel */}
      <ClientLogos />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-2">
              <span style={{ color: '#4169E1' }}>Shannel</span> Oduor
            </div>
            <p className="text-gray-400 mb-4">
              Senior Graphic Designer & IT Professional
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Creating visually compelling designs and providing comprehensive IT solutions with a customer-focused approach.
            </p>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4 mr-2" style={{ color: '#4169E1' }} />
                <a href="mailto:shetrahgrafix@gmail.com" 
                   className="text-gray-300 transition-colors"
                   onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                   onMouseLeave={(e) => e.target.style.color = ''}>
                  shetrahgrafix@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4 mr-2" style={{ color: '#4169E1' }} />
                <span className="text-gray-300">+254 795 333 004</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-4 h-4 mr-2" style={{ color: '#4169E1' }} />
                <span className="text-gray-300">Siaya, Kenya</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {[
                { href: 'https://github.com/Shetrah/', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z' },
                { href: 'https://www.facebook.com/shetrahgrafix/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://x.com/shennel_oduor?t=Bu-wFiUNzLIYgddSDJt4qA&s=08/', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { href: 'https://wa.me/message/SCQ7POKM6TQ5N1/', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300"
                  onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)'}
                  onMouseLeave={(e) => e.target.style.background = ''}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm flex items-center justify-center md:justify-start">
                Made with <Heart size={14} style={{ color: '#FF0000' }} className="mx-1" /> by Shetrahgrafix.co.ke © {currentYear}
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                Crafting digital experiences with passion and precision
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;