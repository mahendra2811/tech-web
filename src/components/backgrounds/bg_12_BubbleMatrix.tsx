'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, GitBranch, Server } from 'lucide-react';

interface BubbleMatrixProps {
  className?: string;
  bgImage: string;
}

export function BubbleMatrix({ className = '', bgImage }: BubbleMatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [poppedBubbles, setPoppedBubbles] = useState<number[]>([]);

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
    { Icon: Code, color: '#00E5FF' },
    { Icon: GitBranch, color: '#0072FF' },
    { Icon: Server, color: '#6E00FF' },
  ];

  // Generate bubbles
  const bubbleCount = 15;
  const bubbles = Array.from({ length: bubbleCount }, (_, i) => {
    // Position bubbles across the container
    // Create a grid of positions to ensure better distribution
    const gridX = i % 5;
    const gridY = Math.floor(i / 5);

    // Add some randomness within each grid cell
    const left = gridX * 20 + Math.random() * 15;
    const top = gridY * 33 + Math.random() * 20;

    // Bubble properties
    const size = 40 + Math.random() * 60; // Random size between 40-100px
    const iconIndex = i % icons.length;

    // Animation timing
    const duration = 3 + Math.random() * 3;
    const delay = Math.random() * 2;

    return {
      id: i,
      left,
      top,
      size,
      iconIndex,
      duration,
      delay,
    };
  });

  // Handle bubble pop
  const handleBubblePop = (id: number) => {
    setPoppedBubbles((prev) => [...prev, id]);

    // Reset after animation completes
    setTimeout(() => {
      setPoppedBubbles((prev) => prev.filter((bubbleId) => bubbleId !== id));
    }, 1500);
  };

  // Generate mini bubbles for pop effect
  const generateMiniBubbles = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i * 360) / count;
      const distance = 30 + Math.random() * 20;

      return {
        id: i,
        angle,
        distance,
      };
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a1929]/80" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')`,
        }}
      />

      {/* Tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Bubbles */}
      {bubbles.map((bubble) => {
        const { Icon, color } = icons[bubble.iconIndex];
        const isPopped = poppedBubbles.includes(bubble.id);

        return (
          <div key={`bubble-container-${bubble.id}`}>
            {/* Main bubble */}
            {!isPopped && (
              <motion.div
                className="absolute rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  left: `${bubble.left}%`,
                  top: `${bubble.top}%`,
                  width: bubble.size,
                  height: bubble.size,
                  backgroundColor: `${color}20`,
                  boxShadow: `0 0 20px ${color}30`,
                  border: `2px solid ${color}40`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.4, 0.7, 0.4],
                  y: ['-5%', '5%', '-5%'],
                }}
                transition={{
                  duration: bubble.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: bubble.delay,
                }}
                whileHover={{
                  scale: 1.2,
                  boxShadow: `0 0 30px ${color}50`,
                }}
                onClick={() => handleBubblePop(bubble.id)}
              >
                <Icon className="w-16 h-16 opacity-40" style={{ color }} />
              </motion.div>
            )}

            {/* Pop effect - mini bubbles */}
            <AnimatePresence>
              {isPopped &&
                generateMiniBubbles(8).map((miniBubble) => {
                  // Calculate position based on angle and distance
                  const radians = (miniBubble.angle * Math.PI) / 180;
                  const x = Math.cos(radians) * miniBubble.distance;
                  const y = Math.sin(radians) * miniBubble.distance;

                  // Determine which icon to use for mini bubbles
                  const miniIconIndex = (bubble.iconIndex + miniBubble.id) % icons.length;
                  const MiniIcon = icons[miniIconIndex].Icon;
                  const miniColor = icons[miniIconIndex].color;

                  return (
                    <motion.div
                      key={`mini-bubble-${bubble.id}-${miniBubble.id}`}
                      className="absolute flex items-center justify-center"
                      style={{
                        left: `${bubble.left}%`,
                        top: `${bubble.top}%`,
                        width: bubble.size / 3,
                        height: bubble.size / 3,
                      }}
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                      animate={{
                        x: `${x}px`,
                        y: `${y}px`,
                        opacity: [0.8, 0],
                        scale: [0.8, 0.2],
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut',
                      }}
                    >
                      <MiniIcon className="w-8 h-8 opacity-60" style={{ color: miniColor }} />
                    </motion.div>
                  );
                })}
            </AnimatePresence>

            {/* Pop effect - burst */}
            <AnimatePresence>
              {isPopped && (
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    left: `${bubble.left}%`,
                    top: `${bubble.top}%`,
                    width: bubble.size,
                    height: bubble.size,
                    backgroundColor: 'transparent',
                    border: `2px solid ${color}`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
