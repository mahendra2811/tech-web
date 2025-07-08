'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
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
  Box,
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
  Monitor,
  Smartphone,
  Tablet,
} from 'lucide-react';

interface BubbleBloomProps {
  className?: string;
}

export function BubbleBloom({ className = '' }: BubbleBloomProps) {
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

  // Generate bubbles with tech icons
  const bubbles = Array.from({ length: 25 }, (_, i) => {
    const size = 40 + Math.random() * 40; // Random size between 40-80px
    const iconIndex = i % icons.length;
    const { Icon, color } = icons[iconIndex];

    // Distribute icons more evenly across the container
    // Divide the container into a 5x5 grid and place icons within cells
    const gridX = i % 5;
    const gridY = Math.floor(i / 5);

    // Add some randomness within each grid cell
    const left = gridX * 20 + Math.random() * 15;
    const top = gridY * 20 + Math.random() * 15;

    // Animation timing
    const duration = 5 + Math.random() * 5;
    const delay = Math.random() * 3;

    return {
      id: i,
      size,
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

      {/* Bubbles with tech icons */}
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            backgroundColor: `${bubble.color}10`,
            boxShadow: `0 0 20px ${bubble.color}30`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: bubble.delay,
          }}
        >
          <bubble.Icon className="w-14 h-14 opacity-40" />
        </motion.div>
      ))}
    </div>
  );
}
