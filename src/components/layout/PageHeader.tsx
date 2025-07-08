'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description: string;
  animated?: boolean;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
  customBackground?: boolean;
}

export function PageHeader({
  title,
  description,
  animated = false,
  className = 'py-20 bg-muted/30',
  containerClassName,
  children,
  customBackground = false,
}: PageHeaderProps) {
  // If customBackground is true, we'll render the children directly
  if (customBackground && children) {
    return <>{children}</>;
  }

  return (
    <section className={className}>
      <Container className={containerClassName}>
        <div className="max-w-3xl mx-auto text-center">
          {animated ? (
            <>
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
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-muted-foreground">{description}</p>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
