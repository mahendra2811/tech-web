'use client';

import { Hero } from '@/components/features/Hero';
import { ServicesSection } from '@/components/features/ServicesSection';
import { StatsSection } from '@/components/features/StatsSection';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/features/ContactForm';
import { SectionBackground } from '@/components/ui/SectionBackground';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <StatsSection />

      {/* Contact Section */}
      <section className="py-16 relative overflow-hidden">
        <SectionBackground variant="waves" />
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </motion.div>
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </Container>
      </section>
    </>
  );
}
