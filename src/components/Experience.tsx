import React from 'react';
import { Experience as ExperienceType } from '../types';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #4169E1 0%, #FF0000 100%)' }}></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            My professional journey through various roles, combining creative design expertise with technical IT skills and customer-focused service delivery.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #4169E1 0%, #FF0000 100%)' }}></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" 
                     style={{ background: index % 2 === 0 ? '#4169E1' : '#FF0000' }}></div>
                
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:scale-105 transform">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <Calendar className="w-4 h-4 mr-2" style={{ color: '#4169E1' }} />
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-white"
                            style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 hover:scale-105 transform transition-all"
                      onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                      onMouseLeave={(e) => e.target.style.color = ''}>{exp.position}</h3>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">{exp.company}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#4169E1' }}></div>
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 hover:scale-105 transform transition-all">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" 
                               style={{ backgroundColor: i % 2 === 0 ? '#4169E1' : '#FF0000' }}></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;