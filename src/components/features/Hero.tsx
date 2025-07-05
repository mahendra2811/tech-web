'use client';

import { Container } from '@/components/layout/Container';
import { SectionBackground } from '@/components/ui/SectionBackground';
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
      {/* Use the reusable SectionBackground component */}
      <SectionBackground variant="gradient" />

      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Innovative
              </span>{' '}
              Software Solutions for Modern Businesses
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-lg"
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
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="w-full h-full relative"
            >
              {/* Hero image with subtle animation */}
              <img
                src="/images/hero_image__.png"
                alt="AI-Powered Business Solutions"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-lg" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
