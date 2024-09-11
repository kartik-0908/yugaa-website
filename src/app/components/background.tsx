// components/AnimatedGridBackground.tsx
import React from 'react';

interface AnimatedGridBackgroundProps {
  rows?: number;
  columns?: number;
}

const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({ 
  rows = 10, 
  columns = 10 
}) => {
  const createMovingLines = (count: number, direction: 'horizontal' | 'vertical') => {
    return Array.from({ length: count }).map((_, index) => (
      <div 
        key={index} 
        className={`absolute bg-blue-400 ${
          direction === 'horizontal' ? 'h-0.5 w-4' : 'w-0.5 h-4'
        } ${
          direction === 'horizontal'
            ? `animate-move-${direction}-${index % 3}`
            : `animate-move-${direction}-${index % 3}`
        }`}
        style={{
          [direction === 'horizontal' ? 'left' : 'top']: `${(index / count) * 100}%`,
          animationDelay: `${(index / count) * 2}s`
        }}
      />
    ));
  };

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-100 to-gray-200">
      <div 
        className="grid w-full h-full" 
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {Array.from({ length: rows * columns }).map((_, index) => (
          <div key={index} className="relative border border-gray-300">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5">
                {createMovingLines(5, 'horizontal')}
              </div>
              <div className="absolute inset-y-0 right-0 w-0.5">
                {createMovingLines(5, 'vertical')}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0.5">
                {createMovingLines(5, 'horizontal')}
              </div>
              <div className="absolute inset-y-0 left-0 w-0.5">
                {createMovingLines(5, 'vertical')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGridBackground;