'use client';

import { Container } from '@/components/layout/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Innovative Software Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              We build cutting-edge software that helps businesses streamline operations, enhance
              customer experiences, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-lg bg-muted overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl font-bold text-primary/30">
              Hero Image
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
