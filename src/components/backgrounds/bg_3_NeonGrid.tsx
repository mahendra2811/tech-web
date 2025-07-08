'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Box, Grid, Container } from 'lucide-react';

interface NeonGridProps {
  className?: string;
}

export function NeonGrid({ className = '' }: NeonGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tech icons to use
  const icons = [
    { Icon: Layout, color: '#00E5FF' },
    { Icon: Box, color: '#0072FF' },
    { Icon: Grid, color: '#6E00FF' },
    { Icon: Container, color: '#20B2AA' },
  ];

  // Generate grid squares
  const gridSize = 5; // 5x5 grid
  const squares = Array.from({ length: gridSize * gridSize }, (_, i) => {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    // Determine if this square should have an icon (about 1/3 of squares)
    const hasIcon = Math.random() < 0.3;
    const iconIndex = hasIcon ? Math.floor(Math.random() * icons.length) : -1;

    // Animation timing
    const duration = 3 + Math.random() * 2;
    const delay = Math.random() * 2;

    return {
      id: i,
      row,
      col,
      hasIcon,
      iconIndex,
      duration,
      delay,
    };
  });

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#102a43] to-[#0a1929]" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')`,
        }}
      />

      {/* Grid container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            gap: '10px',
            width: '80%',
            height: '80%',
          }}
        >
          {squares.map((square) => {
            const { Icon, color } = square.hasIcon
              ? icons[square.iconIndex]
              : { Icon: null, color: '' };

            return (
              <motion.div
                key={`square-${square.id}`}
                className="relative flex items-center justify-center"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid transparent',
                }}
                animate={{
                  boxShadow: square.hasIcon
                    ? [
                        `0 0 5px ${color}50, inset 0 0 5px ${color}50`,
                        `0 0 20px ${color}70, inset 0 0 20px ${color}70`,
                        `0 0 5px ${color}50, inset 0 0 5px ${color}50`,
                      ]
                    : [
                        '0 0 5px #00E5FF50, inset 0 0 5px #00E5FF50',
                        '0 0 20px #00E5FF70, inset 0 0 20px #00E5FF70',
                        '0 0 5px #00E5FF50, inset 0 0 5px #00E5FF50',
                      ],
                  borderColor: square.hasIcon
                    ? [`${color}50`, `${color}90`, `${color}50`]
                    : ['#00E5FF50', '#00E5FF90', '#00E5FF50'],
                }}
                transition={{
                  duration: square.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: square.delay,
                }}
              >
                {square.hasIcon && Icon && <Icon className="w-14 h-14 opacity-40" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
