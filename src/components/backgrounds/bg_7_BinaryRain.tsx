'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Binary, Type, Hash, FunctionSquare } from 'lucide-react';

interface BinaryRainProps {
  className?: string;
}

export function BinaryRain({ className = '' }: BinaryRainProps) {
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
    { Icon: Binary, color: '#00E5FF' },
    { Icon: Type, color: '#0072FF' },
    { Icon: Hash, color: '#6E00FF' },
    { Icon: FunctionSquare, color: '#20B2AA' },
  ];

  // Generate binary rain streams
  const streamCount = 20;
  const streams = Array.from({ length: streamCount }, (_, i) => {
    // Position streams across the container
    const left = 5 + (i * 90) / streamCount;

    // Animation timing
    const duration = 8 + Math.random() * 10;
    const delay = i * 0.3;

    // Determine if this stream has an icon
    const hasIcon = Math.random() < 0.4; // 40% chance of having an icon
    const iconIndex = hasIcon ? Math.floor(Math.random() * icons.length) : -1;

    // Generate binary digits for this stream
    const digits = Array.from({ length: 15 + Math.floor(Math.random() * 10) }, () =>
      Math.random() < 0.5 ? '0' : '1'
    );

    // Determine where in the stream the icon should appear (if it has one)
    const iconPosition = hasIcon ? Math.floor(Math.random() * digits.length) : -1;

    return {
      id: i,
      left,
      duration,
      delay,
      digits,
      hasIcon,
      iconIndex,
      iconPosition,
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

      {/* Binary rain streams */}
      {streams.map((stream) => (
        <div
          key={`stream-${stream.id}`}
          className="absolute"
          style={{
            left: `${stream.left}%`,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: stream.duration,
              repeat: Infinity,
              delay: stream.delay,
              ease: 'linear',
            }}
          >
            {stream.digits.map((digit, index) => {
              // Determine if this position should show an icon instead of a digit
              const showIcon = stream.hasIcon && index === stream.iconPosition;

              if (showIcon) {
                const { Icon, color } = icons[stream.iconIndex];

                return (
                  <div key={`icon-${stream.id}-${index}`} className="my-2">
                    <Icon className="w-14 h-14 opacity-40" style={{ color }} />
                  </div>
                );
              }

              return (
                <div
                  key={`digit-${stream.id}-${index}`}
                  className="text-2xl font-mono my-1"
                  style={{
                    color: '#00E5FF',
                    opacity: 0.4 + Math.random() * 0.6, // Random opacity for variation
                    textShadow: '0 0 5px #00E5FF',
                  }}
                >
                  {digit}
                </div>
              );
            })}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
