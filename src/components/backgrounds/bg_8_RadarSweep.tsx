'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Satellite, Radio, Scan, Waves } from 'lucide-react';

interface RadarSweepProps {
  className?: string;
}

export function RadarSweep({ className = '' }: RadarSweepProps) {
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
    { Icon: Satellite, color: '#00E5FF' },
    { Icon: Radio, color: '#0072FF' },
    { Icon: Scan, color: '#6E00FF' },
    { Icon: Waves, color: '#20B2AA' },
  ];

  // Generate concentric circles
  const circleCount = 4;
  const circles = Array.from({ length: circleCount }, (_, i) => {
    // Size of each circle
    const size = 20 + (i * 60) / circleCount;

    return {
      id: i,
      size,
    };
  });

  // Generate radar blips (icons that appear during sweep)
  const blipCount = 8;
  const blips = Array.from({ length: blipCount }, (_, i) => {
    // Position blips around the radar
    const angle = (i * 360) / blipCount;
    const distance = 40 + Math.random() * 10; // Distance from center (%)

    // Convert angle to radians
    const radians = (angle * Math.PI) / 180;

    // Calculate position
    const left = 50 + distance * Math.cos(radians);
    const top = 50 + distance * Math.sin(radians);

    // Assign an icon to each blip
    const iconIndex = i % icons.length;

    return {
      id: i,
      angle,
      left,
      top,
      iconIndex,
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

      {/* Radar container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          {/* Concentric circles */}
          {circles.map((circle) => (
            <motion.div
              key={`circle-${circle.id}`}
              className="absolute rounded-full border-2 border-[#00E5FF]"
              style={{
                left: '50%',
                top: '50%',
                width: `${circle.size}%`,
                height: `${circle.size}%`,
                transform: 'translate(-50%, -50%)',
                opacity: 0.2,
                boxShadow: '0 0 10px #00E5FF',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: circle.id * 0.5,
              }}
            />
          ))}

          {/* Radar sweep */}
          <motion.div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              width: '0',
              height: '0',
              borderLeft: '2px solid transparent',
              borderRight: '2px solid transparent',
              borderBottom: '50% solid #00E5FF',
              transformOrigin: 'center top',
              opacity: 0.6,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Radar center */}
          <motion.div
            className="absolute rounded-full bg-[#00E5FF]"
            style={{
              left: '50%',
              top: '50%',
              width: '4%',
              height: '4%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 20px #00E5FF',
            }}
            animate={{
              boxShadow: ['0 0 10px #00E5FF', '0 0 30px #00E5FF', '0 0 10px #00E5FF'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Radar blips (icons) */}
          {blips.map((blip) => {
            const { Icon, color } = icons[blip.iconIndex];

            return (
              <div
                key={`blip-${blip.id}`}
                className="absolute"
                style={{
                  left: `${blip.left}%`,
                  top: `${blip.top}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Blip indicator */}
                <motion.div
                  className="absolute rounded-full bg-[#00E5FF]"
                  style={{
                    width: '8px',
                    height: '8px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px #00E5FF',
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: blip.id * 0.5,
                  }}
                />

                {/* Icon that appears when sweep passes */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.4, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (blip.angle / 360) * 8, // Sync with sweep rotation
                  }}
                >
                  <Icon className="w-14 h-14" style={{ color }} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
