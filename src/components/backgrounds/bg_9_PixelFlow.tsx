'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Monitor, Smartphone, Tablet } from 'lucide-react';

interface PixelFlowProps {
  className?: string;
}

export function PixelFlow({ className = '' }: PixelFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [iconPositions, setIconPositions] = useState<
    { id: number; left: number; top: number; iconIndex: number }[]
  >([]);

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
    { Icon: Image, color: '#00E5FF' },
    { Icon: Monitor, color: '#0072FF' },
    { Icon: Smartphone, color: '#6E00FF' },
    { Icon: Tablet, color: '#20B2AA' },
  ];

  // Generate pixel blocks
  const gridSize = 10; // 10x10 grid
  const pixels = Array.from({ length: gridSize * gridSize }, (_, i) => {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    // Animation timing
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;

    // Random movement direction
    const direction = Math.floor(Math.random() * 4); // 0: up, 1: right, 2: down, 3: left

    return {
      id: i,
      row,
      col,
      duration,
      delay,
      direction,
    };
  });

  // Periodically update icon positions
  useEffect(() => {
    const updateIconPositions = () => {
      const newPositions = [];

      // Create 4 icon positions
      for (let i = 0; i < 4; i++) {
        newPositions.push({
          id: i,
          left: 20 + Math.random() * 60, // Random position between 20-80%
          top: 20 + Math.random() * 60,
          iconIndex: i % icons.length,
        });
      }

      setIconPositions(newPositions);
    };

    // Initial positions
    updateIconPositions();

    // Update positions every 5 seconds
    const interval = setInterval(updateIconPositions, 5000);

    return () => clearInterval(interval);
  }, []);

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

      {/* Icons in gaps */}
      <AnimatePresence>
        {iconPositions.map((iconPos) => {
          const { Icon, color } = icons[iconPos.iconIndex];

          return (
            <motion.div
              key={`icon-${iconPos.id}`}
              className="absolute"
              style={{
                left: `${iconPos.left}%`,
                top: `${iconPos.top}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1 }}
            >
              <Icon className="w-14 h-14" style={{ color }} />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Pixel blocks */}
      <div className="absolute inset-0">
        {pixels.map((pixel) => {
          // Calculate position
          const left = (pixel.col * 100) / gridSize;
          const top = (pixel.row * 100) / gridSize;
          const size = 100 / gridSize;

          // Determine animation based on direction
          let xMove = 0;
          let yMove = 0;

          switch (pixel.direction) {
            case 0: // up
              yMove = -size * 2;
              break;
            case 1: // right
              xMove = size * 2;
              break;
            case 2: // down
              yMove = size * 2;
              break;
            case 3: // left
              xMove = -size * 2;
              break;
          }

          // Random color from the theme
          const colors = ['#00E5FF', '#0072FF', '#6E00FF', '#20B2AA'];
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <motion.div
              key={`pixel-${pixel.id}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}%`,
                height: `${size}%`,
                backgroundColor: `${color}30`,
                boxShadow: `0 0 10px ${color}50`,
              }}
              animate={{
                x: [0, xMove, 0],
                y: [0, yMove, 0],
                opacity: [0.7, 0.2, 0.7],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: pixel.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: pixel.delay,
              }}
            />
          );
        })}
      </div>

      {/* Pixel flow overlay effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(45deg, transparent 30%, rgba(0, 229, 255, 0.1) 50%, transparent 70%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}
