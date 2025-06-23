import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollGrid: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gridSize = 20;
  const gridItems = Array.from({ length: gridSize * gridSize }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-20 gap-1 p-4">
        {gridItems.map((item, index) => {
          const row = Math.floor(index / gridSize);
          const col = index % gridSize;
          const delay = (row + col) * 0.1;
          const scale = 1 + (scrollY * 0.001);
          const opacity = Math.max(0, 0.1 - (scrollY * 0.0005));
          
          return (
            <motion.div
              key={item}
              className="w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(45deg, rgba(65,105,225,${opacity}) 0%, rgba(255,0,0,${opacity}) 100%)`,
                transform: `scale(${scale})`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: opacity,
                scale: scale,
                rotate: scrollY * 0.1 + (index * 10)
              }}
              transition={{ 
                delay: delay,
                duration: 0.5,
                ease: "easeOut"
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollGrid;