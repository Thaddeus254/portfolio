import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Calendar, Code, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WebDesignProjects: React.FC = () => {
  const webProjects = [
    {
      title: 'Rebearth Solutions',
      description: 'Complete business website with modern responsive design, showcasing environmental solutions and services. Features clean UI/UX, contact forms, and service portfolio.',
      url: 'https://rebearthsolutions.co.ke/',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      completedDate: 'March 2024',
      category: 'Business Website'
    },
    {
      title: 'NexaCraft Solutions',
      description: 'Modern tech startup website featuring innovative design, interactive elements, and comprehensive service showcase. Built with cutting-edge web technologies.',
      url: 'https://nexacraft.vercel.app/',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      completedDate: 'February 2024',
      category: 'Tech Startup'
    },
    {
      title: 'Creative Portfolio Website',
      description: 'Personal portfolio website for a creative professional, featuring dynamic animations, project galleries, and interactive contact forms.',
      url: 'https://creative-portfolio-demo.vercel.app/',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'CSS Modules', 'Animation Libraries'],
      completedDate: 'January 2024',
      category: 'Portfolio'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce website with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.',
      url: 'https://ecommerce-demo-site.vercel.app/',
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      completedDate: 'December 2023',
      category: 'E-Commerce'
    },
    {
      title: 'Restaurant Website',
      description: 'Elegant restaurant website with online menu, reservation system, gallery, and location information. Optimized for mobile ordering.',
      url: 'https://restaurant-demo.vercel.app/',
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      completedDate: 'November 2023',
      category: 'Restaurant'
    },
    {
      title: 'Educational Platform',
      description: 'Comprehensive learning management system with course catalog, student dashboard, progress tracking, and interactive learning modules.',
      url: 'https://education-platform-demo.vercel.app/',
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      completedDate: 'October 2023',
      category: 'Education'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Design Projects - Shannel Oduor Portfolio</title>
        <meta name="description" content="Explore my web design projects including business websites, e-commerce platforms, and custom web applications. Professional web development services in Kenya." />
      </Helmet>

      <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white mb-8 transition-colors group"
              style={{ '--hover-color': '#4169E1' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Web Design <span style={{ color: '#4169E1' }}>Projects</span>
              </h1>
              <div className="w-24 h-1.5 rounded-full mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #4169E1 0%, #FF0000 100%)' }}></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A comprehensive showcase of my web development projects, featuring responsive designs, 
                modern user interfaces, and cutting-edge web technologies. Each project demonstrates 
                my commitment to creating exceptional digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white rounded-full"
                          style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:scale-105 transition-transform"
                        style={{ '--hover-color': '#4169E1' }}
                        onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                        onMouseLeave={(e) => e.target.style.color = ''}>
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Code size={16} className="mr-2" style={{ color: '#4169E1' }} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:scale-105 transition-transform"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {project.completedDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Palette size={14} className="mr-1" />
                      Custom Design
                    </div>
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}
                    onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #FF0000 0%, #4169E1 100%)'}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)'}
                  >
                    Visit Website
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Ready to Start Your <span style={{ color: '#4169E1' }}>Web Project</span>?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's create a stunning website that represents your brand and engages your audience. 
                From concept to deployment, I'll handle every aspect of your web development needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}
                  onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #FF0000 0%, #4169E1 100%)'}
                  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)'}
                >
                  Start Your Project
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 font-medium rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-white/80 dark:bg-gray-800/80"
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
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WebDesignProjects;