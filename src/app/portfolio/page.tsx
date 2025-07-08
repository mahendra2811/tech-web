'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/common/PageHero';
import { CTASection } from '@/components/common/CTASection';
import { BubbleBloom } from '@/components/backgrounds/bg_1_BubbleBloom';
import { PROJECTS } from '@/constant/projects';
import { TESTIMONIALS } from '@/constant/testimonials';
import { ProjectFilter } from '@/components/portfolio/ProjectFilter';
import { ProjectsGrid } from '@/components/portfolio/ProjectsGrid';
import { TestimonialsGrid } from '@/components/portfolio/TestimonialsGrid';
import { HologramPulse } from '@/components/backgrounds';

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
      <PageHero
        title="Our Portfolio"
        description="Explore our past projects and see how we've helped businesses achieve their goals."
      />

      {/* Projects Section */}
      <section className="py-16 relative">
        {/* DataFlow Background */}
        <div className="absolute inset-0 w-full h-full">
          <HologramPulse bgImage="/images/about_our_story_bg.png" />
        </div>

        <Container className="relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Projects</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
      <section className="py-16 relative">
        {/* BubbleBloom Background */}
        <div className="absolute inset-0 w-full h-full">
          <BubbleBloom />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Client Testimonials</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <TestimonialsGrid testimonials={TESTIMONIALS} />
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Contact us today to discuss how we can help you achieve your business goals with our software development services."
        buttonText="Get in Touch"
        buttonLink="/contact"
        useTechBackground={true}
      />
    </>
  );
}
