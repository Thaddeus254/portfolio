import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();

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
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-lg font-semibold dark:text-white">
          <span className="text-blue-600 dark:text-blue-400" style={{ color: '#4169E1' }}>Shannel</span> Oduor
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors hover:scale-105 transform"
              style={{ '--tw-text-opacity': '1' }}
              onMouseEnter={(e) => e.target.style.color = '#4169E1'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
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
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors focus:outline-none hover:scale-110 transform"
            aria-label="Toggle theme"
            style={{ '--hover-color': '#4169E1' }}
            onMouseEnter={(e) => e.target.style.color = '#4169E1'}
            onMouseLeave={(e) => e.target.style.color = ''}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors focus:outline-none hover:scale-110 transform"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            onMouseEnter={(e) => e.target.style.color = '#4169E1'}
            onMouseLeave={(e) => e.target.style.color = ''}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
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
            
            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors py-2 hover:scale-105 transform"
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header