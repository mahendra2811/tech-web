import { Hero } from '@/components/features/Hero';
import { ServicesSection } from '@/components/features/ServicesSection';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/features/ContactForm';
import { Briefcase, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />

      {/* Stats Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
