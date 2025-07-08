'use client';

import { Container } from '@/components/layout/Container';
import { ServiceCard } from '@/components/features/ServiceCard';
import { BubbleMatrix } from '@/components/backgrounds/bg_12_BubbleMatrix';
import { HologramMesh } from '../backgrounds/bg_10_HologramMesh';
import { HologramPulse } from '../backgrounds';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesGridProps {
  services: Service[];
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <HologramPulse bgImage="/images/about_our_story_bg.png" />
      </div>

      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
