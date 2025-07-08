'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Terminal, HardDrive } from 'lucide-react';

interface FloatingCircuitsProps {
  className?: string;
}

export function FloatingCircuits({ className = '' }: FloatingCircuitsProps) {
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
    { Icon: Cpu, color: '#00E5FF' },
    { Icon: CircuitBoard, color: '#0072FF' },
    { Icon: Terminal, color: '#6E00FF' },
    { Icon: HardDrive, color: '#20B2AA' },
  ];

  // Generate circuit nodes
  const nodeCount = 8;
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    // Position nodes across the container
    const left = 10 + (i % 4) * 25;
    const top = 20 + Math.floor(i / 4) * 50;

    // Assign an icon to each node
    const iconIndex = i % icons.length;

    return {
      id: i,
      left,
      top,
      iconIndex,
    };
  });

  // Generate circuit paths between nodes
  const paths: {
    id: string;
    from: number;
    to: number;
    type: 'horizontal' | 'vertical' | 'corner';
    cornerDirection?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  }[] = [];

  // Create a circuit-like pattern connecting the nodes
  for (let i = 0; i < nodes.length - 1; i++) {
    const fromNode = nodes[i];
    const toNode = nodes[i + 1];

    // Determine the type of connection based on node positions
    if (Math.abs(fromNode.left - toNode.left) < 1) {
      // Nodes are vertically aligned
      paths.push({
        id: `path-${i}-${i + 1}`,
        from: i,
        to: i + 1,
        type: 'vertical',
      });
    } else if (Math.abs(fromNode.top - toNode.top) < 1) {
      // Nodes are horizontally aligned
      paths.push({
        id: `path-${i}-${i + 1}`,
        from: i,
        to: i + 1,
        type: 'horizontal',
      });
    } else {
      // Nodes require a corner connection
      const cornerDirection =
        fromNode.left < toNode.left
          ? fromNode.top < toNode.top
            ? 'bottom-right'
            : 'top-right'
          : fromNode.top < toNode.top
            ? 'bottom-left'
            : 'top-left';

      paths.push({
        id: `path-${i}-${i + 1}`,
        from: i,
        to: i + 1,
        type: 'corner',
        cornerDirection,
      });
    }
  }

  // Add a few more connections to create a more complex circuit
  paths.push({
    id: 'path-0-3',
    from: 0,
    to: 3,
    type: 'corner',
    cornerDirection: 'bottom-right',
  });

  paths.push({
    id: 'path-4-7',
    from: 4,
    to: 7,
    type: 'corner',
    cornerDirection: 'bottom-right',
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

      {/* Circuit paths */}
      {paths.map((path) => {
        const fromNode = nodes[path.from];
        const toNode = nodes[path.to];
        const color = icons[fromNode.iconIndex % icons.length].color;

        if (path.type === 'horizontal') {
          // Horizontal path
          const left = Math.min(fromNode.left, toNode.left);
          const width = Math.abs(fromNode.left - toNode.left);

          return (
            <div
              key={path.id}
              className="absolute h-1"
              style={{
                left: `${left}%`,
                top: `${fromNode.top}%`,
                width: `${width}%`,
                backgroundColor: `${color}30`,
                boxShadow: `0 0 5px ${color}50`,
              }}
            >
              {/* Animated current flow */}
              <motion.div
                className="absolute top-0 h-full"
                style={{
                  width: '20%',
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
                animate={{
                  left: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: path.from * 0.2,
                }}
              />
            </div>
          );
        } else if (path.type === 'vertical') {
          // Vertical path
          const top = Math.min(fromNode.top, toNode.top);
          const height = Math.abs(fromNode.top - toNode.top);

          return (
            <div
              key={path.id}
              className="absolute w-1"
              style={{
                left: `${fromNode.left}%`,
                top: `${top}%`,
                height: `${height}%`,
                backgroundColor: `${color}30`,
                boxShadow: `0 0 5px ${color}50`,
              }}
            >
              {/* Animated current flow */}
              <motion.div
                className="absolute left-0 w-full"
                style={{
                  height: '20%',
                  background: `linear-gradient(0deg, transparent, ${color}, transparent)`,
                }}
                animate={{
                  top: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: path.from * 0.2,
                }}
              />
            </div>
          );
        } else if (path.type === 'corner' && path.cornerDirection) {
          // Corner path (L-shaped)
          const isTopRight = path.cornerDirection === 'top-right';
          const isTopLeft = path.cornerDirection === 'top-left';
          const isBottomRight = path.cornerDirection === 'bottom-right';
          // const isBottomLeft = path.cornerDirection === 'bottom-left';

          // Determine the corner point
          const cornerX = isTopRight || isBottomRight ? toNode.left : fromNode.left;
          const cornerY = isTopRight || isTopLeft ? toNode.top : fromNode.top;

          return (
            <div key={path.id}>
              {/* Horizontal segment */}
              <div
                className="absolute h-1"
                style={{
                  left: `${Math.min(fromNode.left, cornerX)}%`,
                  top: `${fromNode.top}%`,
                  width: `${Math.abs(fromNode.left - cornerX)}%`,
                  backgroundColor: `${color}30`,
                  boxShadow: `0 0 5px ${color}50`,
                }}
              >
                {/* Animated current flow */}
                <motion.div
                  className="absolute top-0 h-full"
                  style={{
                    width: '20%',
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                  animate={{
                    left: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: path.from * 0.2,
                  }}
                />
              </div>

              {/* Vertical segment */}
              <div
                className="absolute w-1"
                style={{
                  left: `${cornerX}%`,
                  top: `${Math.min(cornerY, toNode.top)}%`,
                  height: `${Math.abs(cornerY - toNode.top)}%`,
                  backgroundColor: `${color}30`,
                  boxShadow: `0 0 5px ${color}50`,
                }}
              >
                {/* Animated current flow */}
                <motion.div
                  className="absolute left-0 w-full"
                  style={{
                    height: '20%',
                    background: `linear-gradient(0deg, transparent, ${color}, transparent)`,
                  }}
                  animate={{
                    top: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: path.from * 0.2 + 1,
                  }}
                />
              </div>
            </div>
          );
        }

        return null;
      })}

      {/* Circuit nodes with icons */}
      {nodes.map((node) => {
        const { Icon, color } = icons[node.iconIndex];

        return (
          <motion.div
            key={`node-${node.id}`}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: 60,
              height: 60,
              left: `${node.left}%`,
              top: `${node.top}%`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: `${color}20`,
              boxShadow: `0 0 15px ${color}40`,
              border: `2px solid ${color}50`,
            }}
            animate={{
              boxShadow: [`0 0 10px ${color}40`, `0 0 20px ${color}60`, `0 0 10px ${color}40`],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: node.id * 0.2,
            }}
          >
            <Icon className="w-14 h-14 opacity-40" />
          </motion.div>
        );
      })}
    </div>
  );
}
