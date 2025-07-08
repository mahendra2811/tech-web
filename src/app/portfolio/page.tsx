'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constant/projects';
import { TESTIMONIALS } from '@/constant/testimonials';
import { ProjectFilter } from '@/components/features/ProjectFilter';
import { ProjectsGrid } from '@/components/features/ProjectsGrid';
import { TestimonialsGrid } from '@/components/features/TestimonialsGrid';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on the active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return PROJECTS;
    } else if (activeFilter === 'featured') {
      return PROJECTS.filter((project) => project.featured);
    } else if (activeFilter === 'recent') {
      // Get the 6 most recent projects
      return [...PROJECTS]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 6);
    } else if (activeFilter === 'web-development') {
      return PROJECTS.filter((project) => project.category === 'Web Development');
    } else if (activeFilter === 'mobile-development') {
      return PROJECTS.filter((project) => project.category === 'Mobile Development');
    } else if (activeFilter === 'custom-software') {
      return PROJECTS.filter((project) => project.category === 'Custom Software');
    } else if (activeFilter === 'ai') {
      return PROJECTS.filter((project) => project.category === 'AI');
    } else if (activeFilter === 'ml') {
      return PROJECTS.filter((project) => project.category === 'ML');
    }
    return PROJECTS;
  }, [activeFilter]);

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

      {/* Projects Section */}
      <section className="py-16 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full opacity-30 z-0"
          style={{
            backgroundImage: 'url(/images/states_background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'overlay',
          }}
        />

        <Container className="relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our portfolio of successful projects across various industries and technologies
            </p>
          </div>

          {/* Project Filters */}
          <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          {/* Projects Grid */}
          <ProjectsGrid projects={filteredProjects} />
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

          <TestimonialsGrid testimonials={TESTIMONIALS} />
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
