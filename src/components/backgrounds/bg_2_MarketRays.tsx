'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bitcoin, LineChart, ArrowUpDown } from 'lucide-react';

interface MarketRaysProps {
  className?: string;
}

export function MarketRays({ className = '' }: MarketRaysProps) {
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
    { Icon: BarChart, color: '#00E5FF' },
    { Icon: Bitcoin, color: '#0072FF' },
    { Icon: LineChart, color: '#6E00FF' },
    { Icon: ArrowUpDown, color: '#20B2AA' },
  ];

  // Generate diagonal rays
  const rays = Array.from({ length: 12 }, (_, i) => {
    const isUp = i % 2 === 0; // Alternate between up and down directions
    const iconIndex = i % icons.length;
    const { Icon, color } = icons[iconIndex];

    // Position rays across the container
    const left = (i * 8) % 100;
    const top = isUp ? 80 : 20; // Start position depends on direction

    // Animation timing
    const duration = 6 + Math.random() * 4;
    const delay = i * 0.3;

    return {
      id: i,
      isUp,
      left,
      top,
      duration,
      delay,
      Icon,
      color,
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

      {/* Tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Diagonal rays with icons */}
      {rays.map((ray) => {
        // Calculate the end position for the ray (45° angle)
        const endX = ray.isUp ? '40%' : '-40%';
        const endY = ray.isUp ? '-60%' : '60%';

        return (
          <div
            key={`ray-container-${ray.id}`}
            className="absolute"
            style={{ left: `${ray.left}%`, top: `${ray.top}%` }}
          >
            {/* The ray line */}
            <motion.div
              className="absolute h-1 origin-left"
              style={{
                width: '150px',
                background: `linear-gradient(90deg, transparent, ${ray.color}, transparent)`,
                boxShadow: `0 0 8px ${ray.color}`,
                transform: `rotate(${ray.isUp ? '-45deg' : '45deg'})`,
              }}
              animate={{
                x: ['-10%', '100%'],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: ray.duration,
                repeat: Infinity,
                delay: ray.delay,
              }}
            />

            {/* The icon that follows the ray */}
            <motion.div
              className="absolute"
              animate={{
                x: endX,
                y: endY,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: ray.duration,
                repeat: Infinity,
                delay: ray.delay,
              }}
            >
              <ray.Icon className="w-16 h-16 opacity-40" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
