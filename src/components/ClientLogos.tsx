import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'Rebert Solutions', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' },
    { name: 'Print Masters Ltd', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' },
    { name: 'Sungura Creations', logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' },
    { name: 'Eleganza Magnifica', logo: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' },
    { name: 'Tech Innovators', logo: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' },
    { name: 'Creative Studios', logo: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' },
    { name: 'Digital Agency', logo: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' },
    { name: 'Brand Masters', logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Trusted by Amazing Clients
        </h4>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -100 * clients.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-24 h-16 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(65,105,225,0.1) 0%, rgba(255,0,0,0.1) 100%)'
                }}
              >
                <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600 dark:text-gray-300 text-center">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;