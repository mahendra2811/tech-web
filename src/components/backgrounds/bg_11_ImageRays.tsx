'use client';

import { useRef, useEffect, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Database } from 'lucide-react';

interface ImageRaysProps {
  className?: string;
  bgImage: string;
}

export function ImageRays({ className = '', bgImage }: ImageRaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  // Tech icons to use
  const icons = [
    { Icon: Cpu, color: '#00E5FF' },
    { Icon: Zap, color: '#0072FF' },
    { Icon: Database, color: '#6E00FF' },
  ];

  // Generate focal points for rays
  const focalPoints = [
    { x: 25, y: 30, intensity: 0.8 },
    { x: 75, y: 40, intensity: 1 },
    { x: 50, y: 70, intensity: 0.9 },
  ];

  // Generate rays from each focal point
  const generateRays = (focalPoint: { x: number; y: number; intensity: number }) => {
    const rayCount = 12;
    // Use focalPoint.intensity to adjust ray properties
    const baseLength = 30 * focalPoint.intensity;
    return Array.from({ length: rayCount }, (_, i) => {
      const angle = (i * 360) / rayCount;
      const length = baseLength + Math.random() * 20; // Random length based on intensity
      const width = 1 + Math.random() * 2; // Random width between 1-3px

      // Animation timing
      const duration = 3 + Math.random() * 2;
      const delay = i * 0.2;

      // Assign an icon to some rays
      const hasIcon = Math.random() < 0.3; // 30% chance of having an icon
      const iconIndex = hasIcon ? Math.floor(Math.random() * icons.length) : -1;

      return {
        id: i,
        angle,
        length,
        width,
        duration,
        delay,
        hasIcon,
        iconIndex,
      };
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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

      {/* Focal points with rays */}
      {focalPoints.map((focalPoint, fpIndex) => {
        // Calculate bend direction based on mouse position when hovering
        const bendX = isHovering ? (mousePosition.x - focalPoint.x) / 10 : 0;
        const bendY = isHovering ? (mousePosition.y - focalPoint.y) / 10 : 0;

        const rays = generateRays(focalPoint);

        return (
          <div
            key={`focal-${fpIndex}`}
            className="absolute"
            style={{
              left: `${focalPoint.x}%`,
              top: `${focalPoint.y}%`,
            }}
          >
            {/* Focal point glow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '20px',
                height: '20px',
                left: '-10px',
                top: '-10px',
                background: `radial-gradient(circle, ${icons[fpIndex % icons.length].color} 0%, transparent 70%)`,
                opacity: focalPoint.intensity * 0.7,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [
                  focalPoint.intensity * 0.5,
                  focalPoint.intensity * 0.8,
                  focalPoint.intensity * 0.5,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            {/* Rays emanating from focal point */}
            {rays.map((ray) => {
              // Apply bend based on mouse position
              const adjustedAngle =
                ray.angle +
                (isHovering
                  ? bendX * Math.cos((ray.angle * Math.PI) / 180) +
                    bendY * Math.sin((ray.angle * Math.PI) / 180)
                  : 0);

              return (
                <div key={`ray-${fpIndex}-${ray.id}`}>
                  <motion.div
                    className="absolute origin-left"
                    style={{
                      height: `${ray.width}px`,
                      width: `${ray.length}%`,
                      background: `linear-gradient(90deg, ${icons[fpIndex % icons.length].color}, transparent)`,
                      transform: `rotate(${adjustedAngle}deg)`,
                      opacity: 0.4,
                      boxShadow: `0 0 8px ${icons[fpIndex % icons.length].color}`,
                    }}
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      width: [`${ray.length * 0.7}%`, `${ray.length}%`, `${ray.length * 0.7}%`],
                    }}
                    transition={{
                      duration: ray.duration,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: ray.delay,
                    }}
                    whileHover={{
                      opacity: 0.8,
                      boxShadow: `0 0 15px ${icons[fpIndex % icons.length].color}`,
                    }}
                  />

                  {/* Icon at the end of some rays */}
                  {ray.hasIcon && (
                    <motion.div
                      className="absolute"
                      style={{
                        left: `${Math.cos((adjustedAngle * Math.PI) / 180) * ray.length}%`,
                        top: `${Math.sin((adjustedAngle * Math.PI) / 180) * ray.length}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: ray.duration * 0.8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: ray.delay + 0.5,
                      }}
                    >
                      {ray.iconIndex >= 0 &&
                        (() => {
                          const IconComponent = icons[ray.iconIndex].Icon;
                          return (
                            <IconComponent
                              className="w-12 h-12 opacity-40"
                              style={{ color: icons[ray.iconIndex].color }}
                            />
                          );
                        })()}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
