'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Hash,
  Plus,
  Code,
  Database,
  Server,
  Cpu,
  CircuitBoard,
  Layers,
  Network,
  GitBranch,
  Workflow,
} from 'lucide-react';

interface DataCrossProps {
  className?: string;
}

export function DataCross({ className = '' }: DataCrossProps) {
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
    { Icon: X, color: '#00E5FF' },
    { Icon: Hash, color: '#0072FF' },
    { Icon: Plus, color: '#6E00FF' },
    { Icon: Code, color: '#20B2AA' },
    { Icon: Database, color: '#00E5FF' },
    { Icon: Server, color: '#0072FF' },
    { Icon: Cpu, color: '#6E00FF' },
    { Icon: CircuitBoard, color: '#20B2AA' },
    { Icon: Layers, color: '#00E5FF' },
    { Icon: Network, color: '#0072FF' },
    { Icon: GitBranch, color: '#6E00FF' },
    { Icon: Workflow, color: '#20B2AA' },
  ];

  // Generate cross patterns
  const crosses = Array.from({ length: 25 }, (_, i) => {
    // Position crosses across the container in a more distributed way
    // Create a grid of 5x5 positions
    const left = 5 + (i % 5) * 22.5;
    const top = 5 + Math.floor(i / 5) * 22.5;

    // Animation timing
    const duration = 8 + Math.random() * 4;
    const delay = i * 0.5;

    // Size of the cross
    const size = 100 + Math.random() * 100;

    return {
      id: i,
      left,
      top,
      size,
      duration,
      delay,
      rotation: Math.random() * 30 - 15, // Random rotation between -15 and 15 degrees
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

      {/* Tech grid lines - primary grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Secondary finer grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px]" />

      {/* Diagonal grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,transparent_49.9%,#ffffff08_49.9%,#ffffff08_50.1%,transparent_50.1%)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent,transparent_49.9%,#ffffff08_49.9%,#ffffff08_50.1%,transparent_50.1%)] bg-[size:50px_50px]" />

      {/* Cross patterns with moving icons */}
      {crosses.map((cross) => {
        const colors = ['#00E5FF', '#0072FF', '#6E00FF', '#20B2AA'];
        const color1 = colors[Math.floor(Math.random() * colors.length)];
        const color2 = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div
            key={`cross-${cross.id}`}
            className="absolute"
            style={{
              left: `${cross.left}%`,
              top: `${cross.top}%`,
              width: cross.size,
              height: cross.size,
              transform: `rotate(${cross.rotation}deg)`,
            }}
          >
            {/* Diagonal line 1 (top-left to bottom-right) */}
            <div
              className="absolute w-full h-0.5"
              style={{
                top: '50%',
                transform: 'rotate(45deg)',
                transformOrigin: 'center',
                background: `linear-gradient(90deg, transparent, ${color1}, transparent)`,
                boxShadow: `0 0 8px ${color1}`,
              }}
            >
              {/* Icons moving along line 1 */}
              {[0, 1].map((idx) => {
                const iconIndex = (cross.id + idx) % icons.length;
                const { Icon, color } = icons[iconIndex];
                const direction = idx === 0 ? 1 : -1;

                return (
                  <motion.div
                    key={`icon-line1-${cross.id}-${idx}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '-7px', // Center the icon on the line
                    }}
                    animate={{
                      left: direction > 0 ? ['0%', '100%'] : ['100%', '0%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: cross.duration,
                      repeat: Infinity,
                      delay: cross.delay + idx * 2,
                    }}
                  >
                    <Icon className="w-10 h-10 opacity-60" style={{ color }} />
                  </motion.div>
                );
              })}
            </div>

            {/* Diagonal line 2 (top-right to bottom-left) */}
            <div
              className="absolute w-full h-0.5"
              style={{
                top: '50%',
                transform: 'rotate(-45deg)',
                transformOrigin: 'center',
                background: `linear-gradient(90deg, transparent, ${color2}, transparent)`,
                boxShadow: `0 0 8px ${color2}`,
              }}
            >
              {/* Icons moving along line 2 */}
              {[0, 1].map((idx) => {
                const iconIndex = (cross.id + idx + 2) % icons.length;
                const { Icon, color } = icons[iconIndex];
                const direction = idx === 0 ? 1 : -1;

                return (
                  <motion.div
                    key={`icon-line2-${cross.id}-${idx}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '-7px', // Center the icon on the line
                    }}
                    animate={{
                      left: direction > 0 ? ['0%', '100%'] : ['100%', '0%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: cross.duration,
                      repeat: Infinity,
                      delay: cross.delay + idx * 2 + 1,
                    }}
                  >
                    <Icon className="w-10 h-10 opacity-60" style={{ color }} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Additional horizontal and vertical data lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          className="absolute h-[1px] w-full left-0"
          style={{
            top: `${15 + i * 15}%`,
            background: 'linear-gradient(90deg, transparent 0%, #0072FF 50%, transparent 100%)',
            boxShadow: '0 0 8px #0072FF',
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}

      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`v-line-${i}`}
          className="absolute w-[1px] h-full top-0"
          style={{
            left: `${15 + i * 15}%`,
            background: 'linear-gradient(0deg, transparent 0%, #00E5FF 50%, transparent 100%)',
            boxShadow: '0 0 8px #00E5FF',
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7 + 2,
          }}
        />
      ))}

      {/* Pulsing nodes at intersections */}
      {Array.from({ length: 9 }).map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        return (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 rounded-full bg-[#6E00FF]"
            style={{
              left: `${25 + col * 25}%`,
              top: `${25 + row * 25}%`,
              boxShadow: '0 0 8px #6E00FF',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        );
      })}
    </div>
  );
}
