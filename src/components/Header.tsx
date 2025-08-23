import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GoogleTranslate from './GoogleTranslate';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'Africa/Nairobi'
    });
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/">
          <motion.div 
          className="text-lg font-semibold dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-blue-600 dark:text-blue-400" style={{ color: '#4169E1' }}>Shannel</span> Oduor
        </motion.div>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a 
              key={item.name}
              as={Link}
              to={item.path}
              className={`text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors ${
                location.pathname === item.path ? 'font-semibold' : ''
              }`}
              style={{ '--tw-text-opacity': '1' }}
              onMouseEnter={(e) => e.target.style.color = '#4169E1'}
              onMouseLeave={(e) => e.target.style.color = ''}
              onClick={() => {
                handleNavClick(item.path);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Google Translate */}
          <div className="hidden lg:block">
            <GoogleTranslate />
          </div>
          
          {/* Time Display */}
          <div className="hidden lg:flex flex-col items-end text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
              <Clock size={14} className="mr-1" style={{ color: '#4169E1' }} />
              <span className="font-mono font-medium">{formatTime(currentTime)}</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(currentTime)}
            </div>
          </div>
          
          <motion.button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors focus:outline-none"
            aria-label="Toggle theme"
            style={{ '--hover-color': '#4169E1' }}
            onMouseEnter={(e) => e.target.style.color = '#4169E1'}
            onMouseLeave={(e) => e.target.style.color = ''}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          
          <motion.button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            onMouseEnter={(e) => e.target.style.color = '#4169E1'}
            onMouseLeave={(e) => e.target.style.color = ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-gray-900 shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {/* Mobile Google Translate */}
              <div className="flex justify-center py-2 border-b border-gray-200 dark:border-gray-700">
                <GoogleTranslate />
              </div>
              
              {/* Mobile Time Display */}
              <div className="flex items-center justify-center py-2 border-b border-gray-200 dark:border-gray-700">
                <Clock size={16} className="mr-2" style={{ color: '#4169E1' }} />
                <div className="text-center">
                  <div className="font-mono font-medium text-gray-700 dark:text-gray-300">
                    {formatTime(currentTime)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(currentTime)}
                  </div>
                </div>
              </div>
              
              {navItems.slice(1).map((item, index) => (
                <motion.a 
                  key={item.name}
                  as={Link}
                  to={item.path}
                  className={`text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors py-2 ${
                    location.pathname === item.path ? 'font-semibold' : ''
                  }`}
                  onClick={() => {
                    handleNavClick(item.path);
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                  onMouseLeave={(e) => e.target.style.color = ''}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header