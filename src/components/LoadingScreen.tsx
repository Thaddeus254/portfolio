import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #4169E1 0%, #FF0000 100%)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white">
        <motion.div
          className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-white/30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/32188352/pexels-photo-32188352.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Shannel Oduor
        </motion.h1>
        
        <motion.p
          className="text-xl mb-8 opacity-90"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Senior Graphic Designer & IT Professional
        </motion.p>
        
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>Loading Portfolio</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              className="bg-white h-2 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;