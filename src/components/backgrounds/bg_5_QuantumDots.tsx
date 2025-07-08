'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Zap, Wifi, Radio } from 'lucide-react';

interface QuantumDotsProps {
  className?: string;
}

export function QuantumDots({ className = '' }: QuantumDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [connections, setConnections] = useState<
    { id: string; from: number; to: number; active: boolean }[]
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
    { Icon: Atom, color: '#00E5FF' },
    { Icon: Zap, color: '#0072FF' },
    { Icon: Wifi, color: '#6E00FF' },
    { Icon: Radio, color: '#20B2AA' },
  ];

  // Generate quantum dots
  const dotsCount = 20;
  const dots = Array.from({ length: dotsCount }, (_, i) => {
    // Position dots across the container
    const left = 5 + Math.random() * 90;
    const top = 5 + Math.random() * 90;

    // Animation timing
    const duration = 2 + Math.random() * 2;
    const delay = i * 0.1;

    return {
      id: i,
      left,
      top,
      duration,
      delay,
    };
  });

  // Generate connections between dots
  useEffect(() => {
    const generateConnections = () => {
      const newConnections: { id: string; from: number; to: number; active: boolean }[] = [];

      // Create potential connections between dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          // Only create connections between some dots
          if (Math.random() < 0.1) {
            newConnections.push({
              id: `${i}-${j}`,
              from: i,
              to: j,
              active: false,
            });
          }
        }
      }

      setConnections(newConnections);
    };

    generateConnections();

    // Periodically activate/deactivate connections
    const interval = setInterval(() => {
      setConnections((prev) =>
        prev.map((conn) => ({
          ...conn,
          active: Math.random() < 0.3, // 30% chance of being active
        }))
      );
    }, 2000);

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

      {/* Tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Connections between dots */}
      {connections.map((connection) => {
        const fromDot = dots[connection.from];
        const toDot = dots[connection.to];
        const iconIndex = (connection.from + connection.to) % icons.length;
        const { Icon, color } = icons[iconIndex];

        // Calculate the midpoint for the icon
        const midX = (fromDot.left + toDot.left) / 2;
        const midY = (fromDot.top + toDot.top) / 2;

        return (
          <div key={`connection-${connection.id}`}>
            {/* Connection line */}
            <motion.div
              className="absolute h-px"
              style={{
                left: `${fromDot.left}%`,
                top: `${fromDot.top}%`,
                width: `${Math.sqrt(
                  Math.pow(toDot.left - fromDot.left, 2) + Math.pow(toDot.top - fromDot.top, 2)
                )}%`,
                transformOrigin: 'left center',
                transform: `rotate(${
                  Math.atan2(toDot.top - fromDot.top, toDot.left - fromDot.left) * (180 / Math.PI)
                }deg)`,
              }}
              animate={{
                backgroundColor: connection.active ? color : 'transparent',
                boxShadow: connection.active ? `0 0 8px ${color}` : 'none',
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Icon at connection midpoint */}
            <AnimatePresence>
              {connection.active && (
                <motion.div
                  key={`icon-${connection.id}`}
                  className="absolute"
                  style={{
                    left: `${midX}%`,
                    top: `${midY}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-14 h-14" style={{ color }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Quantum dots */}
      {dots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            backgroundColor: '#00E5FF',
            boxShadow: '0 0 10px #00E5FF',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}
