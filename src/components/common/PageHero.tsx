'use client';

import { Container } from '@/components/layout/Container';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  description: string;
}

export const PageHero = ({ title, description }: PageHeroProps) => {
  return (
    <AnimatedBackground>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
      </Container>
    </AnimatedBackground>
  );
};