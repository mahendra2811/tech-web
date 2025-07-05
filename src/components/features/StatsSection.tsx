'use client';

import { Container } from '@/components/layout/Container';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Use the reusable SectionBackground component */}
      <SectionBackground variant="gradient" />

      <Container>
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border shadow-sm"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex justify-center mb-4"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Briefcase className="h-12 w-12 text-primary" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-2">
              <Counter end={200} duration={2} suffix="+" />
            </h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </motion.div>

          <motion.div
            className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border shadow-sm"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex justify-center mb-4"
              whileHover={{ rotate: -5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Users className="h-12 w-12 text-primary" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-2">
              <Counter end={50} duration={1.5} suffix="+" />
            </h3>
            <p className="text-muted-foreground">Team Members</p>
          </motion.div>

          <motion.div
            className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border shadow-sm"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex justify-center mb-4"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Award className="h-12 w-12 text-primary" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-2">
              <Counter end={15} duration={1} suffix="+" />
            </h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
