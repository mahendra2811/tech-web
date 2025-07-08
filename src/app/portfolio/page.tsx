'use client';

import { Container } from '@/components/layout/Container';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description:
        'A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description:
        'A mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.',
      technologies: ['React Native', 'Firebase', 'Express.js'],
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Development',
      description:
        'An interactive dashboard for financial data visualization and analysis with real-time updates and reporting features.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Inventory Management System',
      category: 'Custom Software',
      description:
        'A comprehensive inventory management system for a manufacturing company with barcode scanning and automated reporting.',
      technologies: ['Angular', 'Python', 'Django', 'MySQL'],
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      description:
        'A platform for real estate listings, property management, and client communication with virtual tour capabilities.',
      technologies: ['Next.js', 'Three.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description:
        'A mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
      technologies: ['Flutter', 'Firebase', 'TensorFlow'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <AnimatedBackground>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our past projects and see how we&apos;ve helped businesses achieve their
              goals.
            </motion.p>
          </div>
        </Container>
      </AnimatedBackground>

      {/* Projects Grid Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary/30">
                    Project Image
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold">
                      C{i}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Client Name</h3>
                    <p className="text-sm text-muted-foreground">Company {i}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  &quot;The team delivered an exceptional solution that exceeded our expectations.
                  Their expertise, professionalism, and attention to detail made the entire process
                  smooth and enjoyable.&quot;
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help you achieve your business goals with our software
              development expertise.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
