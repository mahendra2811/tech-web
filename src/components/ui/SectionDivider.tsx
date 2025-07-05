'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'bubbles' | 'waves' | 'circuit' | 'glow';
  className?: string;
}

export function SectionDivider({ 
  variant = 'waves', 
  className = '' 
}: SectionDividerProps) {
  // Shared styles for all dividers
  const containerClasses = `w-full h-24 relative overflow-hidden ${className}`;
  
  // Bubble divider with animated floating bubbles
  if (variant === 'bubbles') {
    return (
      <div className={containerClasses} aria-hidden="true">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main wave shape */}
          <path 
            d="M0,0 L1200,0 C1050,40 950,100 800,100 C650,100 500,40 350,40 C200,40 150,100 0,100 L0,0 Z" 
            className="fill-[#0A0E17] opacity-95"
          />
          
          {/* Static bubbles with animated opacity */}
          <g>
            {[...Array(20)].map((_, i) => {
              // Create a fixed distribution of bubbles
              const size = 3 + (i % 5);
              const x = 60 + (i * 60);
              const y = 40 + ((i % 3) * 15);
              
              return (
                <motion.circle
                  key={`bubble-${i}`}
                  cx={x}
                  cy={y}
                  r={size}
                  fill="#00F0FF"
                  className="opacity-60"
                  animate={{ 
                    opacity: [0.2, 0.6, 0.2],
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              );
            })}
          </g>
          
          {/* Highlight line */}
          <motion.path
            d="M0,40 C200,80 400,20 600,50 C800,80 1000,30 1200,60"
            stroke="#00F0FF"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>
    );
  }
  
  // Wave divider with flowing water effect
  if (variant === 'waves') {
    return (
      <div className={containerClasses} aria-hidden="true">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main wave shape */}
          <path 
            d="M0,0 L1200,0 C1000,20 800,120 600,80 C400,40 200,100 0,60 L0,0 Z" 
            className="fill-[#0A0E17] opacity-95"
          />
          
          {/* Animated flowing waves */}
          <motion.path 
            d="M0,30 C200,80 400,10 600,50 C800,90 1000,20 1200,60"
            stroke="#0072FF"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.path 
            d="M0,50 C150,90 350,20 550,60 C750,100 950,30 1200,70"
            stroke="#00E5FF"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            }}
          />
          
          {/* Animated particles - using fixed positions */}
          {[...Array(12)].map((_, i) => {
            const y = 20 + (i % 3) * 20;
            
            return (
              <motion.circle
                key={`particle-${i}`}
                cx={100 + (i * 80)}
                cy={y}
                r="2"
                fill="#00E5FF"
                animate={{ 
                  x: [0, 200],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  }
  
  // Circuit divider with tech-themed animated elements
  if (variant === 'circuit') {
    return (
      <div className={containerClasses} aria-hidden="true">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main shape */}
          <path 
            d="M0,0 L1200,0 C1050,60 900,20 750,60 C600,100 450,40 300,80 C150,120 50,60 0,80 L0,0 Z" 
            className="fill-[#0A0E17] opacity-95"
          />
          
          {/* Circuit grid */}
          <g className="opacity-60">
            {/* Horizontal lines */}
            {[20, 40, 60, 80].map((y, i) => (
              <motion.line
                key={`h-line-${i}`}
                x1="0"
                y1={y}
                x2="1200"
                y2={y}
                stroke="#0072FF"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                animate={{
                  strokeOpacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
            
            {/* Vertical lines */}
            {[...Array(12)].map((_, i) => {
              const x = 100 * (i + 1);
              return (
                <motion.line
                  key={`v-line-${i}`}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2="100"
                  stroke="#00E5FF"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  animate={{
                    strokeOpacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              );
            })}
            
            {/* Connection nodes */}
            {[...Array(8)].map((_, i) => {
              const x = 150 * (i + 1);
              const y = 20 + (i % 3) * 30;
              
              return (
                <motion.circle
                  key={`node-${i}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#00F0FF"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                    fill: ['#00F0FF', '#0072FF', '#00F0FF'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              );
            })}
            
            {/* Data pulses */}
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={`pulse-${i}`}
                cx={100}
                cy={30 + (i % 3) * 20}
                r="2"
                fill="#00F0FF"
                animate={{ 
                  x: [0, 1000],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "linear",
                }}
              />
            ))}
          </g>
        </svg>
      </div>
    );
  }
  
  // Glow divider - super simple version to avoid SVG animation issues
  if (variant === 'glow') {
    return (
      <div className={containerClasses} aria-hidden="true">
        <div className="absolute inset-0 bg-[#0A0E17] opacity-95">
          {/* Static wave shape overlay */}
          <div
            className="absolute inset-0 bg-[url('/images/footer_bg.png')] bg-cover bg-center opacity-10"
          />
          
          {/* Animated glow effects using divs instead of SVG */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Horizontal glow lines */}
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div
              className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0072FF]/20 to-transparent"
              animate={{
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />
            
            <motion.div
              className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />
            
            {/* Glowing dots */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => {
                const left = `${10 + (i * 8)}%`;
                const top = `${20 + ((i % 3) * 20)}%`;
                
                return (
                  <motion.div
                    key={`glow-dot-${i}`}
                    className="absolute w-1 h-1 rounded-full bg-[#00F0FF]"
                    style={{ left, top }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Default fallback
  return null;
}
