'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  children?: ReactNode;
}

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0a1929' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#102a43] to-[#0a1929]" />

        {/* Additional animated tech elements */}
        <div className="absolute inset-0">
          {/* Floating circles with tech colors */}
          {[...Array(15)].map((_, i) => {
            const size = 10 + i * 5;
            const delay = i * 0.2;
            const duration = 15 + (i % 5);
            const x = 5 + i * 8;
            const y = 10 + (i % 6) * 15;

            // Alternate between different accent colors
            const colors = ['#00E5FF', '#0072FF', '#6E00FF', '#20B2AA'];
            const colorIndex = i % colors.length;

            return (
              <motion.div
                key={`circle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  left: `${x}%`,
                  top: `${y}%`,
                  backgroundColor: `${colors[colorIndex]}30`,
                  boxShadow: `0 0 20px ${colors[colorIndex]}50`,
                }}
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay,
                }}
              />
            );
          })}

          {/* Light trails */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`trail-${i}`}
              className="absolute h-px"
              style={{
                width: '30%',
                left: `${(i % 3) * 30}%`,
                top: `${15 + i * 10}%`,
                background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#00E5FF' : '#0072FF'}, transparent)`,
                height: '2px',
                boxShadow: `0 0 10px ${i % 2 === 0 ? '#00E5FF' : '#0072FF'}`,
              }}
              animate={{
                x: ['0%', '200%'],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 8 + (i % 3),
                repeat: Infinity,
                delay: i * 1.2,
              }}
            />
          ))}

          {/* Tech grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Subtle particle effects */}
          {[
            // Pre-generated random positions for particles
            { left: '88.52122415606817%', top: '31.0467239081998%' },
            { left: '82.58025345535525%', top: '47.430703510637606%' },
            { left: '57.809486110156804%', top: '1.195782782625543%' },
            { left: '64.525571991873%', top: '65.70303220361545%' },
            { left: '72.25992265978026%', top: '26.89855855971388%' },
            { left: '5.791748739955915%', top: '49.79943744319964%' },
            { left: '19.244760752342614%', top: '25.33773509686805%' },
            { left: '28.814305070354607%', top: '73.53405149001802%' },
            { left: '33.05442856117088%', top: '64.57049808984966%' },
            { left: '85.0237859951297%', top: '18.00890929062381%' },
            { left: '85.1257066449951%', top: '89.75723481672328%' },
            { left: '52.28945512597413%', top: '16.02674559901044%' },
            { left: '19.329036779123456%', top: '92.99548667335547%' },
            { left: '79.33153816337398%', top: '23.054124940046027%' },
            { left: '19.383802054657362%', top: '71.58208320685227%' },
            { left: '26.039621365278474%', top: '65.95371044264084%' },
            { left: '52.930384075045836%', top: '35.08051235195565%' },
            { left: '81.80064483976507%', top: '38.90507324132679%' },
            { left: '99.4696115723505%', top: '30.539643598036903%' },
            { left: '41.69294686517063%', top: '9.205336105675087%' },
          ].map((position, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-[#00E5FF]"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 5),
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}

          {/* Animated SVG icons */}
          <div className="absolute inset-0">
            {/* Code brackets */}
            <motion.svg
              className="absolute w-16 h-16 text-[#00E5FF]"
              style={{ left: '15%', top: '20%', opacity: 0.5 }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            >
              <path
                d="M9 22L3 12L9 2M15 2L21 12L15 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>

            {/* Server icon */}
            <motion.svg
              className="absolute w-12 h-12 text-[#0072FF]"
              style={{ right: '20%', top: '15%', opacity: 0.5 }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <path
                d="M5 12H19M5 12C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10C21 11.1046 20.1046 12 19 12M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12M7 8H7.01M7 16H7.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>

            {/* Database icon */}
            <motion.svg
              className="absolute w-14 h-14 text-[#6E00FF]"
              style={{ left: '25%', bottom: '20%', opacity: 0.5 }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            >
              <path
                d="M12 8C16.4183 8 20 6.65685 20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5C4 6.65685 7.58172 8 12 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>

            {/* Cloud icon */}
            <motion.svg
              className="absolute w-16 h-16 text-[#20B2AA]"
              style={{ right: '25%', bottom: '25%', opacity: 0.5 }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: [0, 10, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            >
              <path
                d="M17.5 19H9C6.79086 19 5 17.2091 5 15C5 12.7909 6.79086 11 9 11C9 8.23858 11.2386 6 14 6C16.7614 6 19 8.23858 19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19H17.5M17.5 19L12 13.5M12 13.5L6.5 19M12 13.5V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute w-16 h-16 border-3 border-[#00E5FF] opacity-40"
            style={{ left: '60%', top: '60%' }}
            animate={{
              rotate: [0, 180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />

          <motion.div
            className="absolute w-20 h-20 rounded-full border-3 border-[#0072FF] opacity-40"
            style={{ right: '70%', top: '30%' }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />

          <motion.div
            className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-[#6E00FF] border-r-[20px] border-r-transparent opacity-40"
            style={{ right: '30%', top: '70%' }}
            animate={{
              rotate: [0, 360],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </div>

      {children}
    </section>
  );
}