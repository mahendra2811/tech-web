'use client';

import { cn } from '@/lib/utils';
import {
  LucideIcon,
  Code,
  Layout,
  Smartphone,
  Database,
  Globe,
  Shield,
  Server,
  Cpu,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

// Map of icon names to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  Code,
  Layout,
  Smartphone,
  Database,
  Globe,
  Shield,
  Server,
  Cpu,
};

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  // Get the icon component from the map, or use Code as fallback
  const Icon = iconMap[icon] || Code;
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-6 shadow-md transition-all',
        className
      )}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated top border on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      <motion.div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Icon className="h-6 w-6" />
      </motion.div>

      <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-white/80">{description}</p>

      {/* Enhanced background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  );
}
