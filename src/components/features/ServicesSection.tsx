'use client';

import { Container } from '@/components/layout/Container';
import { ServiceCard } from '@/components/features/ServiceCard';
import { Code, Layout, Smartphone, Database, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServicesSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: Globe,
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      icon: Smartphone,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience and engagement.',
      icon: Layout,
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions and API development.',
      icon: Database,
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions to address your specific business needs.',
      icon: Code,
    },
    {
      title: 'Cybersecurity',
      description: 'Protecting your digital assets with advanced security measures.',
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <Container>
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We offer a comprehensive range of software development services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
