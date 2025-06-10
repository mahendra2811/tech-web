import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our software development company and our team.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-muted-foreground">
              We are a team of passionate developers, designers, and strategists dedicated to
              creating exceptional software solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, {siteConfig.name} began with a simple mission: to help businesses
                leverage technology to achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the years, we&apos;ve grown from a small team of three developers to a
                full-service software development company with experts in various technologies and
                domains.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we work with clients ranging from startups to enterprise organizations,
                delivering innovative solutions that drive growth and efficiency.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl font-bold text-primary/30">
                Company Image
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-secondary/20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every project, focusing on quality, performance, and
                user experience.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and approaches to solve complex problems in creative
                ways.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership with our clients to achieve
                shared goals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="relative h-64 w-full rounded-lg bg-muted overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-xl font-bold text-primary/30">
                    Team Member {i}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
