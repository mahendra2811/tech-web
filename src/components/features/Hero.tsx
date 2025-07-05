'use client';

import { Container } from '@/components/layout/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Custom background with overlay */}
      <div className="absolute inset-0 -z-10">
        {/* Background image - using the new provided background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/hero-background__.png")' }}
        />

        {/* Overlay gradient for better text contrast and visual effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/20" />

        {/* Animated particles effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Additional animated elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        </motion.div>
      </div>

      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-shadow-sm"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Innovative
              </span>{' '}
              Software Solutions for Modern Businesses
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-lg text-shadow-sm"
              variants={itemVariants}
            >
              We build cutting-edge software that helps businesses streamline operations, enhance
              customer experiences, and drive growth.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Right side is now empty to let the background image show through */}
          <div className="h-[400px]">
            {/* Additional animated elements to enhance the right side of the background */}
            <motion.div
              className="relative h-full w-full"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              {/* Subtle glow effects to highlight the background image */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
              <div className="absolute bottom-1/3 right-1/2 w-48 h-48 rounded-full bg-secondary/10 blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
