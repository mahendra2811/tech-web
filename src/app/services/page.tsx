import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/features/ServiceCard";
import { Code, Layout, Smartphone, Database, Globe, Shield, Server, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description: "Explore our comprehensive range of software development services.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      icon: Globe,
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement, with a focus on accessibility and usability.",
      icon: Layout,
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and API development using Node.js, Python, Java, and more.",
      icon: Database,
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions to address your specific business needs and challenges.",
      icon: Code,
    },
    {
      title: "Cybersecurity",
      description: "Protecting your digital assets with advanced security measures and best practices.",
      icon: Shield,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and reliable cloud infrastructure using AWS, Azure, and Google Cloud Platform.",
      icon: Server,
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage the power of artificial intelligence and machine learning.",
      icon: Cpu,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We offer a comprehensive range of software development services to help your business thrive in the digital age.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="py-16">
        <Container>
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

      {/* Process Section */}
      <section className="py-16 bg-secondary/20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure the success of your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Discovery</h3>
              <p className="text-muted-foreground">
                We start by understanding your business goals, target audience, and project requirements.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Planning</h3>
              <p className="text-muted-foreground">
                We create a detailed project plan, including timelines, milestones, and resource allocation.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Development</h3>
              <p className="text-muted-foreground">
                Our team builds your solution using agile methodologies and best practices.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Delivery</h3>
              <p className="text-muted-foreground">
                We deploy your solution, provide training, and offer ongoing support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve your business goals with our software development services.
            </p>
            <Link 
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary-foreground text-primary px-6 text-base font-medium shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}