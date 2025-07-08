'use client';

import { useState } from 'react';
import {
  BubbleBloom,
  MarketRays,
  NeonGrid,
  DataCross,
  QuantumDots,
  FloatingCircuits,
  BinaryRain,
  RadarSweep,
  PixelFlow,
  HologramMesh,
} from '@/components/backgrounds';

export default function BackgroundsDemo() {
  const [activeBackground, setActiveBackground] = useState(0);

  const backgrounds = [
    { name: 'Bubble Bloom', Component: BubbleBloom },
    { name: 'Market Rays', Component: MarketRays },
    { name: 'Neon Grid', Component: NeonGrid },
    { name: 'Data Cross', Component: DataCross },
    { name: 'Quantum Dots', Component: QuantumDots },
    { name: 'Floating Circuits', Component: FloatingCircuits },
    { name: 'Binary Rain', Component: BinaryRain },
    { name: 'Radar Sweep', Component: RadarSweep },
    { name: 'Pixel Flow', Component: PixelFlow },
    { name: 'Hologram Mesh', Component: HologramMesh },
  ];

  const { Component } = backgrounds[activeBackground];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background container */}
      <div className="fixed inset-0 -z-10">
        <Component />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-3xl w-full">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Animated Backgrounds</h1>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {backgrounds.map((bg, index) => (
              <button
                key={index}
                className={`px-3 py-2 rounded text-sm ${
                  activeBackground === index
                    ? 'bg-white/20 text-white'
                    : 'bg-black/30 text-white/70 hover:bg-black/40'
                }`}
                onClick={() => setActiveBackground(index)}
              >
                {bg.name}
              </button>
            ))}
          </div>

          <div className="text-white/80">
            <h2 className="text-2xl font-semibold mb-4">{backgrounds[activeBackground].name}</h2>
            <p className="mb-4">
              This is one of 10 animated background components created using React, TypeScript,
              Framer Motion, and Tailwind CSS. Each background features unique animations and visual
              effects with Lucide icons.
            </p>
            <p>
              All backgrounds use a consistent color scheme with subtle animations that loop
              seamlessly. They can be used as decorative elements in various sections of the
              website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
