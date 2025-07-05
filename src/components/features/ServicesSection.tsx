'use client';

import { Container } from '@/components/layout/Container';
import { ServiceCard } from '@/components/features/ServiceCard';
import { motion } from 'framer-motion';

export function ServicesSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: 'Globe',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      icon: 'Smartphone',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience and engagement.',
      icon: 'Layout',
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions and API development.',
      icon: 'Database',
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions to address your specific business needs.',
      icon: 'Code',
    },
    {
      title: 'Cybersecurity',
      description: 'Protecting your digital assets with advanced security measures.',
      icon: 'Shield',
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Custom tech/AI-themed SVG background that complements the hero background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Dark gradient background with specific colors to match hero background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/95 via-[#101C2C]/90 to-[#0A0E17]/95" />

        {/* SVG background with tech/AI elements */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Circuit board patterns */}
          <g stroke="#0072FF" strokeWidth="1.5" fill="none">
            <motion.path
              d="M100,100 L900,100 L900,900 L100,900 Z"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
            />
            <motion.path
              d="M200,200 L800,200 L800,800 L200,800 Z"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: 'loop', delay: 2 }}
              stroke="#00E5FF"
            />
            <motion.path
              d="M300,300 L700,300 L700,700 L300,700 Z"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'loop', delay: 4 }}
              stroke="#6E00FF"
            />

            {/* Horizontal and vertical lines */}
            <motion.path
              d="M100,500 L900,500"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }}
              stroke="#00F0FF"
              strokeWidth="2"
            />
            <motion.path
              d="M500,100 L500,900"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'loop', delay: 1 }}
              stroke="#00F0FF"
              strokeWidth="2"
            />

            {/* Connection nodes */}
            <motion.circle
              cx="500"
              cy="500"
              r="15"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              fill="#00F0FF"
              stroke="#00F0FF"
            />
            <motion.circle
              cx="300"
              cy="300"
              r="8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              fill="#0072FF"
              stroke="#0072FF"
            />
            <motion.circle
              cx="700"
              cy="300"
              r="8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              fill="#6E00FF"
              stroke="#6E00FF"
            />
            <motion.circle
              cx="300"
              cy="700"
              r="8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              fill="#00E5FF"
              stroke="#00E5FF"
            />
            <motion.circle
              cx="700"
              cy="700"
              r="8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
              fill="#FF00E5"
              stroke="#FF00E5"
            />

            {/* Data flow lines */}
            <motion.path
              d="M500,500 L300,300"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              stroke="#0072FF"
              strokeWidth="2"
            />
            <motion.path
              d="M500,500 L700,300"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
              stroke="#6E00FF"
              strokeWidth="2"
            />
            <motion.path
              d="M500,500 L300,700"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: 1 }}
              stroke="#00E5FF"
              strokeWidth="2"
            />
            <motion.path
              d="M500,500 L700,700"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: 1.5 }}
              stroke="#FF00E5"
              strokeWidth="2"
            />
          </g>

          {/* Binary code pattern */}
          <g fill="#00F0FF" opacity="0.4">
            <text x="150" y="150" fontSize="12">
              01001010
            </text>
            <text x="250" y="250" fontSize="12">
              10110101
            </text>
            <text x="350" y="350" fontSize="12">
              11100110
            </text>
            <text x="650" y="350" fontSize="12">
              01011010
            </text>
            <text x="750" y="250" fontSize="12">
              10101100
            </text>
            <text x="850" y="150" fontSize="12">
              11001010
            </text>
            <text x="150" y="850" fontSize="12">
              10101010
            </text>
            <text x="250" y="750" fontSize="12">
              01010101
            </text>
            <text x="350" y="650" fontSize="12">
              11001100
            </text>
            <text x="650" y="650" fontSize="12">
              00110011
            </text>
            <text x="750" y="750" fontSize="12">
              10011001
            </text>
            <text x="850" y="850" fontSize="12">
              01100110
            </text>
          </g>
        </svg>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#0072FF]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6E00FF]/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#00F0FF]/5 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2,
          }}
        />
      </div>
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
