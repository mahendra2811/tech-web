'use client';

import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { RadarSweep } from '@/components/backgrounds/bg_8_RadarSweep';

export const ProcessSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <RadarSweep />
      </div>

      <Container>
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Development Process</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We follow a structured approach to ensure the success of your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Process Card 1 */}
            <div className="relative pt-5">
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                1
              </div>

              <motion.div
                className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Animated top border on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <motion.div
                  className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  Discovery
                </h3>
                <p className="text-white/80">
                  We start by understanding your business goals, target audience, and project
                  requirements.
                </p>

                {/* Enhanced background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            </div>

            {/* Process Card 2 */}
            <div className="relative pt-5">
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                2
              </div>

              <motion.div
                className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Animated top border on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <motion.div
                  className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  Planning
                </h3>
                <p className="text-white/80">
                  We create a detailed project plan, including timelines, milestones, and resource
                  allocation.
                </p>

                {/* Enhanced background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            </div>

            {/* Process Card 3 */}
            <div className="relative pt-5">
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                3
              </div>

              <motion.div
                className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Animated top border on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <motion.div
                  className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  Development
                </h3>
                <p className="text-white/80">
                  Our team builds your solution using agile methodologies and best practices.
                </p>

                {/* Enhanced background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            </div>

            {/* Process Card 4 */}
            <div className="relative pt-5">
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                4
              </div>

              <motion.div
                className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Animated top border on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <motion.div
                  className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7M13 21H21M13 3H21M3 21H9M3 3H9M3 12H9M15 3V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  Delivery
                </h3>
                <p className="text-white/80">
                  We deploy your solution, provide training, and offer ongoing support.
                </p>

                {/* Enhanced background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
