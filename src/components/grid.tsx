import React from 'react';

const AnimatedGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Moving grid pattern */}
        <div className="absolute inset-0 moving-grid-pattern"></div>
        
        {/* Glowing overlay */}
        <div className="absolute inset-0 glow-overlay"></div>
      </div>
      
      <style jsx>{`
        .moving-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(79, 70, 229, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: moveGrid 8s linear infinite;
        }
        
        @keyframes moveGrid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }
        
        .glow-overlay {
          background: radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.3) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite alternate;
        }
        
        @keyframes pulse {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedGridBackground;