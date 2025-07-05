'use client';

import { Hero } from '@/components/features/Hero';
import { ServicesSection } from '@/components/features/ServicesSection';
import { StatsSection } from '@/components/features/StatsSection';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/features/ContactForm';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Divider between Hero and Services */}
      <SectionDivider variant="waves" className="z-10" />

      <ServicesSection />

      {/* Divider between Services and Stats */}
      <SectionDivider variant="bubbles" className="z-10" />

      <StatsSection />

      {/* Divider between Stats and Contact */}
      <SectionDivider variant="circuit" className="z-10" />

      {/* Contact Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Custom background with contact-focused design */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/contact_bg_2.png")' }}
          />

          {/* Overlay gradient for better form readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/70 via-[#101C2C]/60 to-[#0A0E17]/70" />

          {/* Animated elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Subtle glowing orbs */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#0072FF]/5 blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#6E00FF]/5 blur-3xl" />

            {/* Animated connection lines */}
            <motion.div
              className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/10 to-transparent"
              animate={{
                y: [0, 10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div
              className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/10 to-transparent"
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1,
              }}
            />
          </motion.div>
        </div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="md:order-2 text-left md:pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-muted-foreground max-w-md mb-6">
                Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.
              </p>
            </motion.div>

            <motion.div
              className="md:order-1 md:pr-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-background/30 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-xl">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Divider between Contact and Footer */}
      <SectionDivider variant="glow" className="z-10" />
    </>
  );
}
