import React from 'react';
import { Education as EducationType } from '../types';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  educations: EducationType[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1.5 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #4169E1 0%, #FF0000 100%)' }}></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            My academic background and educational qualifications that laid the foundation for my technical and creative expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"
                   style={{ background: index % 2 === 0 ? 'rgba(65,105,225,0.1)' : 'rgba(255,0,0,0.1)' }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg mr-4" style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="inline-block px-3 py-1 text-sm font-medium text-white rounded-full"
                          style={{ background: index % 2 === 0 ? '#4169E1' : '#FF0000' }}>
                      {edu.period}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors hover:scale-105 transform"
                    onMouseEnter={(e) => e.target.style.color = '#4169E1'}
                    onMouseLeave={(e) => e.target.style.color = ''}>
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;