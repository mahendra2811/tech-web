'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Boxes,
  Glasses,
  Monitor,
  Smartphone,
  Tablet,
  LayoutGrid,
  Layers,
  Square,
  Hexagon,
  Triangle,
  Circle,
  ArrowUpRight,
  Maximize,
  Minimize,
  ArrowDownRight,
  RotateCcw,
  RotateCw,
  Compass,
  Globe,
  Code,
  Cpu,
  Database,
  Server,
  Binary,
  GitBranch,
  Terminal,
  Wifi,
  HardDrive,
  CircuitBoard,
  Plug,
  Zap,
  BarChart,
  LineChart,
  Layout,
  Grid,
  Container,
  X,
  Hash,
  Plus,
  Radio,
  Scan,
  Waves,
  Image,
} from 'lucide-react';

interface HologramMeshProps {
  className?: string;
}

export function HologramMesh({ className = '' }: HologramMeshProps) {
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

  // Tech icons to use (using closest available Lucide icons for 3D concepts)
  const icons = [
    { Icon: Box, color: '#00E5FF' }, // Box equivalent
    { Icon: Glasses, color: '#0072FF' }, // VR equivalent
    { Icon: Monitor, color: '#6E00FF' }, // Display
    { Icon: Boxes, color: '#20B2AA' }, // Perspective equivalent
    { Icon: Smartphone, color: '#00E5FF' }, // Mobile device
    { Icon: Tablet, color: '#0072FF' }, // Tablet device
    { Icon: LayoutGrid, color: '#6E00FF' }, // Grid layout
    { Icon: Layers, color: '#20B2AA' }, // Layers
    { Icon: Square, color: '#00E5FF' }, // Square shape
    { Icon: Hexagon, color: '#0072FF' }, // Hexagon shape
    { Icon: Triangle, color: '#6E00FF' }, // Triangle shape
    { Icon: Circle, color: '#20B2AA' }, // Circle shape
    { Icon: ArrowUpRight, color: '#00E5FF' }, // Direction
    { Icon: Maximize, color: '#0072FF' }, // Maximize
    { Icon: Minimize, color: '#6E00FF' }, // Minimize
    { Icon: ArrowDownRight, color: '#20B2AA' }, // Direction
    { Icon: RotateCcw, color: '#00E5FF' }, // Rotate counter-clockwise
    { Icon: RotateCw, color: '#0072FF' }, // Rotate clockwise
    { Icon: Compass, color: '#6E00FF' }, // Compass/navigation
    { Icon: Globe, color: '#20B2AA' }, // Globe/world
    { Icon: Code, color: '#00E5FF' },
    { Icon: Cpu, color: '#0072FF' },
    { Icon: Database, color: '#6E00FF' },
    { Icon: Server, color: '#20B2AA' },
    { Icon: Binary, color: '#00E5FF' },
    { Icon: Terminal, color: '#0072FF' },
    { Icon: Wifi, color: '#6E00FF' },
    { Icon: HardDrive, color: '#20B2AA' },
    { Icon: CircuitBoard, color: '#6E00FF' },
    { Icon: Plug, color: '#20B2AA' },
    { Icon: Zap, color: '#00E5FF' },
    { Icon: GitBranch, color: '#0072FF' },
    { Icon: BarChart, color: '#6E00FF' },
    { Icon: LineChart, color: '#20B2AA' },
    { Icon: Box, color: '#00E5FF' },
    { Icon: Layout, color: '#0072FF' },
    { Icon: Grid, color: '#6E00FF' },
    { Icon: Container, color: '#20B2AA' },
    { Icon: X, color: '#00E5FF' },
    { Icon: Hash, color: '#0072FF' },
    { Icon: Plus, color: '#6E00FF' },
    { Icon: Radio, color: '#20B2AA' },
    { Icon: Scan, color: '#00E5FF' },
    { Icon: Waves, color: '#0072FF' },
    { Icon: Image, color: '#6E00FF' },
    { Icon: Monitor, color: '#20B2AA' },
    { Icon: Smartphone, color: '#00E5FF' },
    { Icon: Tablet, color: '#0072FF' },
  ];

  // Generate floating icons
  const iconCount = icons.length; // Use all available icons
  const floatingIcons = Array.from({ length: iconCount }, (_, i) => {
    // Distribute icons more evenly across the container
    // Divide the container into a 8x6 grid to place icons within cells
    const gridX = i % 8;
    const gridY = Math.floor(i / 8);

    // Add some randomness within each grid cell
    const left = gridX * 12.5 + Math.random() * 8; // 8 columns, each ~12.5% wide
    const top = gridY * 16 + Math.random() * 10; // 6 rows, each ~16% tall

    // Random z-index for 3D effect
    const zIndex = Math.floor(Math.random() * 10) - 5;

    // Animation timing
    const duration = 10 + Math.random() * 10;
    const delay = i * 0.3;

    // Assign an icon
    const iconIndex = i % icons.length;

    return {
      id: i,
      left,
      top,
      zIndex,
      duration,
      delay,
      iconIndex,
      scale: 0.8 + Math.random() * 0.4, // Random scale for depth effect
    };
  });

  // Generate mesh grid points
  const gridSize = 8; // 8x8 grid
  const gridPoints = Array.from({ length: gridSize * gridSize }, (_, i) => {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    // Position grid points
    const left = (col * 100) / (gridSize - 1);
    const top = (row * 100) / (gridSize - 1);

    // Animation timing
    const duration = 8 + Math.random() * 4;
    const delay = (row + col) * 0.1;

    return {
      id: i,
      row,
      col,
      left,
      top,
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

      {/* Hologram mesh grid */}
      <div className="absolute inset-0">
        {/* Grid points */}
        {gridPoints.map((point) => (
          <motion.div
            key={`point-${point.id}`}
            className="absolute rounded-full bg-[#00E5FF]"
            style={{
              left: `${point.left}%`,
              top: `${point.top}%`,
              width: '4px',
              height: '4px',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 5px #00E5FF',
            }}
            animate={{
              y: [0, point.row % 2 === 0 ? 20 : -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: point.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: point.delay,
            }}
          />
        ))}

        {/* Grid lines - horizontal */}
        {Array.from({ length: gridSize }, (_, row) => (
          <div key={`h-line-${row}`}>
            {Array.from({ length: gridSize - 1 }, (_, col) => {
              const startPoint = gridPoints[row * gridSize + col];
              const endPoint = gridPoints[row * gridSize + col + 1];

              return (
                <motion.div
                  key={`h-line-${row}-${col}`}
                  className="absolute h-px"
                  style={{
                    left: `${startPoint.left}%`,
                    top: `${startPoint.top}%`,
                    width: `${endPoint.left - startPoint.left}%`,
                    background: 'linear-gradient(90deg, #00E5FF30, #0072FF30)',
                    boxShadow: '0 0 5px #00E5FF50',
                    transformOrigin: 'left center',
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: (row + col) * 0.1,
                  }}
                />
              );
            })}
          </div>
        ))}

        {/* Grid lines - vertical */}
        {Array.from({ length: gridSize }, (_, col) => (
          <div key={`v-line-${col}`}>
            {Array.from({ length: gridSize - 1 }, (_, row) => {
              const startPoint = gridPoints[row * gridSize + col];
              const endPoint = gridPoints[(row + 1) * gridSize + col];

              return (
                <motion.div
                  key={`v-line-${col}-${row}`}
                  className="absolute w-px"
                  style={{
                    left: `${startPoint.left}%`,
                    top: `${startPoint.top}%`,
                    height: `${endPoint.top - startPoint.top}%`,
                    background: 'linear-gradient(0deg, #00E5FF30, #0072FF30)',
                    boxShadow: '0 0 5px #00E5FF50',
                    transformOrigin: 'center top',
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: (row + col) * 0.1,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Floating 3D icons */}
      {floatingIcons.map((icon) => {
        const { Icon, color } = icons[icon.iconIndex];

        return (
          <motion.div
            key={`icon-${icon.id}`}
            className="absolute"
            style={{
              left: `${icon.left}%`,
              top: `${icon.top}%`,
              zIndex: icon.zIndex,
              transform: `translate(-50%, -50%) scale(${icon.scale})`,
              filter: `blur(${Math.max(0, -icon.zIndex)}px)`, // Blur based on negative z-index
              opacity: 0.4 - icon.zIndex * 0.02, // Opacity based on z-index
            }}
            animate={{
              y: [0, icon.zIndex * 5, 0],
              x: [0, icon.zIndex * -5, 0],
              rotateY: [0, 360],
              rotateX: [0, 180],
            }}
            transition={{
              y: {
                duration: icon.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: icon.delay,
              },
              x: {
                duration: icon.duration * 1.2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: icon.delay,
              },
              rotateY: {
                duration: icon.duration * 2,
                repeat: Infinity,
                ease: 'linear',
              },
              rotateX: {
                duration: icon.duration * 3,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            <Icon className="w-14 h-14 opacity-40" style={{ color }} />
          </motion.div>
        );
      })}

      {/* Holographic glow effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0, 229, 255, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
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
