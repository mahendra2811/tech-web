'use client';

import { Container } from '@/components/layout/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MarketRays } from '@/components/backgrounds/bg_2_MarketRays';
import { QuantumDots } from '../backgrounds/bg_5_QuantumDots';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  useTechBackground?: boolean;
}

export const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
  useTechBackground = false,
}: CTASectionProps) => {
  return (
    <section className="py-12 relative overflow-hidden">
      {useTechBackground && (
        <div className="absolute inset-0 -z-10">
          <QuantumDots />
        </div>
      )}

      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="group relative overflow-hidden bg-background/10 backdrop-blur-md text-white rounded-lg p-10 md:p-14 text-center border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)',
            }}
          >
            {/* Animated top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70" />

            {!useTechBackground && (
              <>
                {/* Floating elements - only shown when not using TechBackground */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`cta-particle-${i}`}
                      className="absolute w-2 h-2 rounded-full bg-primary/40"
                      style={{
                        left: `${10 + i * 20}%`,
                        top: `${20 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced background gradient - only shown when not using TechBackground */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">{description}</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href={buttonLink}
                className="relative overflow-hidden inline-flex h-12 items-center justify-center rounded-md bg-primary text-black px-8 text-base font-medium shadow-lg transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                <span className="relative z-10">{buttonText}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
