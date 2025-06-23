import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #4169E1 0%, #FF0000 100%)' }}></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            A collection of my most impactful design projects, IT solutions, and creative works spanning graphic design, web development, and technical services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 dark:border-gray-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ background: 'linear-gradient(45deg, rgba(65,105,225,0.2) 0%, rgba(255,0,0,0.2) 100%)' }}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors hover:scale-105 transform"
                    onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                    onMouseLeave={(e) => e.target.style.color = ''}>
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm font-medium text-white rounded-full border hover:shadow-md transition-all hover:scale-105 transform"
                      style={{ 
                        background: i % 2 === 0 
                          ? 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' 
                          : 'linear-gradient(135deg, #FF0000 0%, #4169E1 100%)',
                        borderColor: '#4169E1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            Interested in working together? Let's create something amazing!
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}
            onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #FF0000 0%, #4169E1 100%)'}
            onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)'}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;