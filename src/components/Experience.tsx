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
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            My professional journey through various roles, combining creative design expertise with technical IT skills and customer-focused service delivery.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">{exp.position}</h3>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">{exp.company}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2"></div>
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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