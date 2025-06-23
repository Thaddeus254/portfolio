import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Mail, Phone, Download, Sparkles, Clock } from 'lucide-react';
import { ProfileData, SocialLink } from '../types';

interface HeroProps {
  data: ProfileData;
}

const SocialIcon: React.FC<{ link: SocialLink }> = ({ link }) => {
  const icons: Record<string, React.ReactNode> = {
    github: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>,
    facebook: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    twitter: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>,
    whatsapp: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  };

  return (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
      style={{
        '--hover-bg': '#4169E1'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#4169E1';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
        e.currentTarget.style.color = '';
      }}
      aria-label={link.platform}
    >
      {icons[link.icon.toLowerCase()]}
    </a>
  );
};

const Hero: React.FC<HeroProps> = ({ data }) => {
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

  return (
    <section id="about" className="pt-28 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements with royal blue and red */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#4169E1', opacity: 0.1 }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: '#FF0000', opacity: 0.1 }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-500" style={{ backgroundColor: '#4169E1', opacity: 0.05 }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Time Display at Top */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
            <Clock size={20} className="mr-3" style={{ color: '#4169E1' }} />
            <div className="text-center">
              <div className="font-mono font-bold text-lg" style={{ color: '#4169E1' }}>
                {formatTime(currentTime)} EAT
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {formatDate(currentTime)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 mr-2" style={{ color: '#4169E1' }} />
              <span className="font-medium" style={{ color: '#4169E1' }}>Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white leading-tight">
              Hi, I'm {' '}
              <span className="relative">
                <span style={{ color: '#4169E1' }}>{data.name.split(' ')[0]}</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: '#FF0000' }}></span>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
              {data.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-lg max-w-2xl">
              {data.bio}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center text-gray-600 dark:text-gray-300 transition-colors hover:scale-105 transform"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                <MapPin size={18} className="mr-2" />
                <span>{data.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail size={18} className="mr-2" />
                <a href={`mailto:${data.email}`} 
                   className="transition-colors hover:scale-105 transform"
                   onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                   onMouseLeave={(e) => e.target.style.color = ''}>{data.email}</a>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone size={18} className="mr-2" />
                <a href={`tel:${data.phone.split(',')[0]}`} 
                   className="transition-colors hover:scale-105 transform"
                   onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                   onMouseLeave={(e) => e.target.style.color = ''}>{data.phone.split(',')[0]}</a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {data.socialLinks.map((link, index) => (
                <SocialIcon key={index} link={link} />
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary px-8 py-4 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#4169E1' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF0000'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4169E1'}
              >
                Contact Me
              </a>
              
              <a 
                href={data.resumeUrl} 
                className="btn-secondary px-8 py-4 border-2 font-medium rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:scale-105 bg-white/80 dark:bg-gray-800/80"
                style={{ borderColor: '#4169E1', color: '#4169E1' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#4169E1';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '';
                  e.target.style.color = '#4169E1';
                }}
              >
                Download CV
                <Download size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative z-10">
                <img 
                  src={data.avatar} 
                  alt={data.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 animate-pulse" style={{ backgroundColor: '#4169E1', opacity: 0.2 }}></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full z-0 animate-pulse delay-1000" style={{ backgroundColor: '#FF0000', opacity: 0.2 }}></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 rounded-full z-0 animate-bounce" style={{ backgroundColor: '#4169E1', opacity: 0.3 }}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">Discover more</span>
          <ArrowDown size={20} style={{ color: '#4169E1' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;