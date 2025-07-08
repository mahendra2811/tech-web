'use client';

import { useRef, useEffect, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Atom, Code, Database, Globe, Cloud, Server } from 'lucide-react';

interface InteractiveOrbitsProps {
  className?: string;
  bgImage: string;
}

export function InteractiveOrbits({ className = '', bgImage }: InteractiveOrbitsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInContainer, setIsMouseInContainer] = useState(false);

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

  // Tech icons to use (using Lucide icons as alternatives for React, Python, Docker)
  const icons = [
    { Icon: Atom, color: '#00E5FF', name: 'React' }, // Atom icon for React
    { Icon: Code, color: '#0072FF', name: 'Python' }, // Code icon for Python
    { Icon: Cloud, color: '#6E00FF', name: 'Docker' }, // Cloud icon for Docker
    { Icon: Globe, color: '#20B2AA', name: 'Web' },
    { Icon: Database, color: '#00E5FF', name: 'Database' },
    { Icon: Server, color: '#0072FF', name: 'Server' },
  ];

  // Generate orbit centers (image highlights)
  const orbitCenters = [
    { x: 25, y: 25, radius: 15, iconIndex: 0 },
    { x: 75, y: 30, radius: 12, iconIndex: 1 },
    { x: 40, y: 70, radius: 18, iconIndex: 2 },
  ];

  // Generate orbiting icons for each center
  const generateOrbitingIcons = (
    center: { x: number; y: number; radius: number; iconIndex: number },
    count: number
  ) => {
    return Array.from({ length: count }, (_, i) => {
      // Initial position on the orbit
      const angle = (i * 360) / count;

      // Animation timing
      const duration = 15 + Math.random() * 10;
      const delay = i * 0.5;

      // Assign an icon
      const iconIndex = (center.iconIndex + i) % icons.length;

      return {
        id: i,
        angle,
        duration,
        delay,
        iconIndex,
        size: 30 + Math.random() * 20, // Random size between 30-50px
      };
    });
  };

  // Calculate position with mouse interaction
  const calculatePosition = (
    center: { x: number; y: number; radius: number },
    angle: number,
    baseRadius: number
  ) => {
    // Base position on the orbit
    let radius = baseRadius;

    // Adjust radius based on mouse position when mouse is in container
    if (isMouseInContainer) {
      // Calculate distance from mouse to center
      const dx = mousePosition.x - center.x;
      const dy = mousePosition.y - center.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Adjust radius based on distance (attract or repel)
      if (distance < 30) {
        // Repel when mouse is close to center
        radius += (30 - distance) / 2;
      } else {
        // Attract when mouse is in the general area
        const attraction = Math.max(0, 50 - distance) / 10;
        radius -= attraction;
      }
    }

    // Calculate position
    const radians = (angle * Math.PI) / 180;
    const x = center.x + radius * Math.cos(radians);
    const y = center.y + radius * Math.sin(radians);

    return { x, y };
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseInContainer(true)}
      onMouseLeave={() => setIsMouseInContainer(false)}
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

      {/* Orbit centers */}
      {orbitCenters.map((center, centerIndex) => {
        const { Icon: CenterIcon, color } = icons[center.iconIndex];
        const orbitingIcons = generateOrbitingIcons(center, 5 + centerIndex);

        return (
          <div key={`orbit-${centerIndex}`}>
            {/* Center highlight */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: `${center.x}%`,
                top: `${center.y}%`,
                width: `${center.radius * 2}%`,
                height: `${center.radius * 2}%`,
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            {/* Center icon */}
            <motion.div
              className="absolute"
              style={{
                left: `${center.x}%`,
                top: `${center.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              <CenterIcon className="w-16 h-16 opacity-60" style={{ color }} />
            </motion.div>

            {/* Orbit path */}
            <motion.div
              className="absolute rounded-full border border-dashed"
              style={{
                left: `${center.x}%`,
                top: `${center.y}%`,
                width: `${center.radius * 4}%`,
                height: `${center.radius * 4}%`,
                transform: 'translate(-50%, -50%)',
                borderColor: `${color}30`,
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                rotate: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'linear',
                },
                opacity: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            />

            {/* Orbiting icons */}
            {orbitingIcons.map((orbitIcon) => {
              const { Icon: OrbitingIcon, color: orbitingColor } = icons[orbitIcon.iconIndex];

              // Calculate base orbit radius
              const baseRadius = center.radius * 2;

              return (
                <motion.div
                  key={`orbiting-${centerIndex}-${orbitIcon.id}`}
                  className="absolute"
                  style={{
                    width: orbitIcon.size,
                    height: orbitIcon.size,
                  }}
                  animate={{
                    x: [0, 360].map((angle) => {
                      const pos = calculatePosition(center, orbitIcon.angle + angle, baseRadius);
                      return `${pos.x}%`;
                    }),
                    y: [0, 360].map((angle) => {
                      const pos = calculatePosition(center, orbitIcon.angle + angle, baseRadius);
                      return `${pos.y}%`;
                    }),
                  }}
                  transition={{
                    duration: orbitIcon.duration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: orbitIcon.delay,
                  }}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      rotate: [0, 360],
                    }}
                    transition={{
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      },
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                  >
                    <OrbitingIcon
                      className="w-12 h-12 opacity-40"
                      style={{ color: orbitingColor }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        );
      })}

      {/* Mouse interaction indicator */}
      {isMouseInContainer && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            width: '40px',
            height: '40px',
            transform: 'translate(-50%, -50%)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8] }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
