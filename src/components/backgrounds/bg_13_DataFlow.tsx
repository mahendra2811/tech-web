'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Binary, Wifi } from 'lucide-react';

interface DataFlowProps {
  className?: string;
  bgImage: string;
}

export function DataFlow({ className = '', bgImage }: DataFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);

      // Reset after a short delay
      setTimeout(() => {
        setScrollDirection(null);
      }, 1000);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Tech icons to use
  const icons = [
    { Icon: Terminal, color: '#00E5FF' },
    { Icon: Binary, color: '#0072FF' },
    { Icon: Wifi, color: '#6E00FF' },
  ];

  // Generate data flow paths
  const pathCount = 6;
  const paths = Array.from({ length: pathCount }, (_, i) => {
    // Create curved paths across the container
    const startX = i % 2 === 0 ? 0 : 100;
    const endX = i % 2 === 0 ? 100 : 0;
    const startY = 10 + (i * 80) / pathCount;
    const endY = 90 - (i * 80) / pathCount;

    // Control points for the Bezier curve
    const cp1x = startX + (endX - startX) * 0.3;
    const cp1y = startY + (Math.random() * 30 - 15);
    const cp2x = startX + (endX - startX) * 0.7;
    const cp2y = endY + (Math.random() * 30 - 15);

    // SVG path
    const path = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

    // Animation timing
    const duration = 8 + Math.random() * 4;
    const delay = i * 0.5;

    // Assign an icon to each path
    const iconIndex = i % icons.length;

    return {
      id: i,
      path,
      duration,
      delay,
      iconIndex,
      startX,
      startY,
      endX,
      endY,
    };
  });

  // Generate data points along each path
  const generateDataPoints = (pathId: number, count: number) => {
    return Array.from({ length: count }, (_, i) => {
      // Animation timing
      const duration = 3 + Math.random() * 2;
      const delay = i * 0.2 + paths[pathId].delay;

      // Size of the data point
      const size = 3 + Math.random() * 3;

      return {
        id: i,
        duration,
        delay,
        size,
      };
    });
  };

  // Adjust animation speed based on scroll direction
  const getAnimationSpeed = (baseSpeed: number) => {
    if (scrollDirection === 'down') {
      return baseSpeed * 0.5; // Slower when scrolling down
    } else if (scrollDirection === 'up') {
      return baseSpeed * 1.5; // Faster when scrolling up
    }
    return baseSpeed; // Normal speed otherwise
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

      {/* SVG container for paths */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Data flow paths */}
        {paths.map((path) => {
          const { color } = icons[path.iconIndex];

          return (
            <g key={`path-${path.id}`}>
              {/* Path outline */}
              <path
                d={path.path}
                fill="none"
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.2"
                strokeDasharray="5,5"
              />

              {/* Animated highlight along the path */}
              <motion.path
                d={path.path}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: getAnimationSpeed(path.duration),
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: path.delay,
                  ease: 'linear',
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Data points and icons */}
      {paths.map((path) => {
        const { Icon, color } = icons[path.iconIndex];
        const dataPoints = generateDataPoints(path.id, 8);

        return (
          <div key={`data-points-${path.id}`}>
            {/* Data points moving along the path */}
            {dataPoints.map((point) => (
              <motion.div
                key={`point-${path.id}-${point.id}`}
                className="absolute rounded-full"
                style={{
                  width: point.size,
                  height: point.size,
                  backgroundColor: color,
                  boxShadow: `0 0 5px ${color}`,
                }}
                initial={{
                  left: `${path.startX}%`,
                  top: `${path.startY}%`,
                  opacity: 0,
                }}
                animate={{
                  left: [
                    `${path.startX}%`,
                    `${path.startX + (path.endX - path.startX) * 0.25}%`,
                    `${path.startX + (path.endX - path.startX) * 0.5}%`,
                    `${path.startX + (path.endX - path.startX) * 0.75}%`,
                    `${path.endX}%`,
                  ],
                  top: [
                    `${path.startY}%`,
                    `${path.startY + (path.endY - path.startY) * 0.25}%`,
                    `${path.startY + (path.endY - path.startY) * 0.5}%`,
                    `${path.startY + (path.endY - path.startY) * 0.75}%`,
                    `${path.endY}%`,
                  ],
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.5, 1.5, 1, 1.5, 0.5],
                }}
                transition={{
                  duration: getAnimationSpeed(point.duration),
                  repeat: Infinity,
                  delay: point.delay,
                  ease: 'linear',
                }}
              />
            ))}

            {/* Icon at the end of the path */}
            <motion.div
              className="absolute"
              style={{
                left: `${path.endX}%`,
                top: `${path.endY}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: path.delay,
              }}
            >
              <Icon className="w-12 h-12 opacity-40" style={{ color }} />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
