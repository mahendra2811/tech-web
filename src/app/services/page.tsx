'use client';

import { PageHero } from '@/components/common/PageHero';
import { CTASection } from '@/components/common/CTASection';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { ProcessSection } from '@/components/services/ProcessSection';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      icon: 'Globe',
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift.',
      icon: 'Smartphone',
    },
    {
      title: 'UI/UX Design',
      description:
        'User-centered design that enhances user experience and engagement, with a focus on accessibility and usability.',
      icon: 'Layout',
    },
    {
      title: 'Backend Development',
      description:
        'Robust server-side solutions and API development using Node.js, Python, Java, and more.',
      icon: 'Database',
    },
    {
      title: 'Custom Software',
      description:
        'Tailored software solutions to address your specific business needs and challenges.',
      icon: 'Code',
    },
    {
      title: 'Cybersecurity',
      description:
        'Protecting your digital assets with advanced security measures and best practices.',
      icon: 'Shield',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable and reliable cloud infrastructure using AWS, Azure, and Google Cloud Platform.',
      icon: 'Server',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Intelligent solutions that leverage the power of artificial intelligence and machine learning.',
      icon: 'Cpu',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        description="We offer a comprehensive range of software development services to help your business thrive in the digital age."
      />

      {/* Services Grid Section */}
      <ServicesGrid services={services} />

      {/* Process Section */}
      <ProcessSection />

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
