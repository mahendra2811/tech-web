'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, CircuitBoard, Atom } from 'lucide-react';

interface HologramPulseProps {
  className?: string;
  bgImage: string;
}

export function HologramPulse({ className = '', bgImage }: HologramPulseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

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
    { Icon: Atom, color: '#6E00FF' },
  ];

  // Generate grid nodes
  const gridSize = 6; // 6x6 grid
  const nodes = Array.from({ length: gridSize * gridSize }, (_, i) => {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    // Position nodes in a grid
    const left = (col * 100) / (gridSize - 1);
    const top = (row * 100) / (gridSize - 1);

    // Add slight randomness to positions for organic feel
    const jitterX = Math.random() * 4 - 2; // -2 to 2
    const jitterY = Math.random() * 4 - 2; // -2 to 2

    // Determine if this node has an icon (about 1/4 of nodes)
    const hasIcon = Math.random() < 0.25;
    const iconIndex = hasIcon ? Math.floor(Math.random() * icons.length) : -1;

    // Animation timing
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;

    return {
      id: i,
      row,
      col,
      left: left + jitterX,
      top: top + jitterY,
      hasIcon,
      iconIndex,
      duration,
      delay,
    };
  });

  // Generate connections between nodes
  const generateConnections = () => {
    const connections: { id: string; from: number; to: number }[] = [];

    // Create connections between adjacent nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Connect to right neighbor
      if (node.col < gridSize - 1) {
        connections.push({
          id: `${i}-${i + 1}`,
          from: i,
          to: i + 1,
        });
      }

      // Connect to bottom neighbor
      if (node.row < gridSize - 1) {
        connections.push({
          id: `${i}-${i + gridSize}`,
          from: i,
          to: i + gridSize,
        });
      }

      // Connect to diagonal neighbor (bottom-right)
      if (node.col < gridSize - 1 && node.row < gridSize - 1) {
        connections.push({
          id: `${i}-${i + gridSize + 1}`,
          from: i,
          to: i + gridSize + 1,
        });
      }
    }

    return connections;
  };

  const connections = generateConnections();

  // Determine if a connection should be active
  const isConnectionActive = (fromId: number, toId: number) => {
    // Connection is active if either node is hovered
    if (hoveredNode === fromId || hoveredNode === toId) {
      return true;
    }

    // Connection is active if both nodes are within 2 steps of the hovered node
    if (hoveredNode !== null) {
      const fromNode = nodes[fromId];
      const toNode = nodes[toId];
      const hoveredNodeObj = nodes[hoveredNode];

      const fromDistance =
        Math.abs(fromNode.row - hoveredNodeObj.row) + Math.abs(fromNode.col - hoveredNodeObj.col);
      const toDistance =
        Math.abs(toNode.row - hoveredNodeObj.row) + Math.abs(toNode.col - hoveredNodeObj.col);

      return fromDistance <= 2 && toDistance <= 2;
    }

    // Otherwise, randomly activate some connections
    return Math.random() < 0.2;
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

      {/* Holographic grid */}
      <div className="absolute inset-0">
        {/* Connections between nodes */}
        {connections.map((connection) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];
          const active = isConnectionActive(connection.from, connection.to);

          // Determine color based on the nodes
          const fromIconIndex = fromNode.hasIcon ? fromNode.iconIndex : 0;
          const toIconIndex = toNode.hasIcon ? toNode.iconIndex : 0;
          const colorIndex = Math.max(fromIconIndex, toIconIndex);
          const color = icons[colorIndex].color;

          return (
            <AnimatePresence key={`connection-${connection.id}`}>
              {active && (
                <motion.div
                  className="absolute h-px"
                  style={{
                    left: `${fromNode.left}%`,
                    top: `${fromNode.top}%`,
                    width: `${Math.sqrt(
                      Math.pow(toNode.left - fromNode.left, 2) +
                        Math.pow(toNode.top - fromNode.top, 2)
                    )}%`,
                    transformOrigin: 'left center',
                    transform: `rotate(${
                      Math.atan2(toNode.top - fromNode.top, toNode.left - fromNode.left) *
                      (180 / Math.PI)
                    }deg)`,
                  }}
                  initial={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                  animate={{
                    backgroundColor: color,
                    boxShadow: `0 0 8px ${color}`,
                  }}
                  exit={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Pulse effect along the connection */}
                  <motion.div
                    className="absolute top-0 h-full rounded-full"
                    style={{
                      width: '10px',
                      backgroundColor: color,
                      boxShadow: `0 0 5px ${color}`,
                    }}
                    animate={{
                      left: ['0%', '100%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}

        {/* Grid nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const color = node.hasIcon ? icons[node.iconIndex].color : '#00E5FF';

          return (
            <div key={`node-${node.id}`}>
              {/* Node point */}
              <motion.div
                className="absolute rounded-full cursor-pointer"
                style={{
                  left: `${node.left}%`,
                  top: `${node.top}%`,
                  width: node.hasIcon ? '12px' : '6px',
                  height: node.hasIcon ? '12px' : '6px',
                  backgroundColor: color,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  boxShadow: isHovered
                    ? [`0 0 15px ${color}`, `0 0 25px ${color}`, `0 0 15px ${color}`]
                    : [`0 0 5px ${color}`, `0 0 10px ${color}`, `0 0 5px ${color}`],
                  scale: isHovered ? [1, 1.5, 1] : [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: node.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: node.delay,
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              />

              {/* Icon for special nodes */}
              {node.hasIcon && (
                <motion.div
                  className="absolute"
                  style={{
                    left: `${node.left}%`,
                    top: `${node.top}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: isHovered ? [1, 1.3, 1] : [0.9, 1.1, 0.9],
                    opacity: isHovered ? [0.6, 0.9, 0.6] : [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: node.duration * 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: node.delay,
                  }}
                >
                  {(() => {
                    const IconComponent = icons[node.iconIndex].Icon;
                    return <IconComponent className="w-12 h-12 opacity-40" style={{ color }} />;
                  })()}
                </motion.div>
              )}

              {/* Pulse effect when hovered */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      left: `${node.left}%`,
                      top: `${node.top}%`,
                      backgroundColor: 'transparent',
                      border: `2px solid ${color}`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ width: '20px', height: '20px', opacity: 0.7 }}
                    animate={{ width: '100px', height: '100px', opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
