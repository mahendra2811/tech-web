'use client';

import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/common/PageHero';
import Link from 'next/link';
import { format } from 'date-fns';
import { BinaryRain } from '@/components/backgrounds/bg_7_BinaryRain';
import { QuantumDots } from '@/components/backgrounds/bg_5_QuantumDots';

export default function BlogPage() {
  // In a real application, this data would come from a CMS or API
  const posts = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt:
        'Explore the emerging technologies and methodologies that are shaping the future of web development.',
      date: new Date('2025-05-15'),
      author: 'John Doe',
      category: 'Web Development',
    },
    {
      id: '2',
      title: 'Building Scalable Applications with Microservices',
      excerpt:
        'Learn how to design and implement microservices architecture for better scalability and maintainability.',
      date: new Date('2025-05-10'),
      author: 'Jane Smith',
      category: 'Architecture',
    },
    {
      id: '3',
      title: 'The Impact of AI on Software Development',
      excerpt:
        'Discover how artificial intelligence is transforming the way we build and maintain software applications.',
      date: new Date('2025-05-05'),
      author: 'Michael Johnson',
      category: 'Artificial Intelligence',
    },
    {
      id: '4',
      title: 'Optimizing React Applications for Performance',
      excerpt:
        'Practical tips and techniques for improving the performance of your React applications.',
      date: new Date('2025-04-28'),
      author: 'Sarah Williams',
      category: 'React',
    },
    {
      id: '5',
      title: 'Securing Your Web Applications: Best Practices',
      excerpt:
        'Essential security measures to protect your web applications from common vulnerabilities and threats.',
      date: new Date('2025-04-20'),
      author: 'David Brown',
      category: 'Security',
    },
    {
      id: '6',
      title: 'The Role of DevOps in Modern Software Development',
      excerpt:
        'How DevOps practices can streamline your development process and improve collaboration between teams.',
      date: new Date('2025-04-15'),
      author: 'Emily Davis',
      category: 'DevOps',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Blog"
        description="Insights, tutorials, and updates from our team of experts"
      />

      {/* Blog Posts Grid */}
      <section className="py-16 relative">
        {/* BinaryRain Background */}
        <div className="absolute inset-0 w-full h-full">
          <BinaryRain />
        </div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group relative overflow-hidden rounded-lg border border-white/20 bg-transparent backdrop-blur-md shadow-sm transition-all hover:shadow-md flex flex-col"
              >
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary/30">
                    Blog Image
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col backdrop-blur-md bg-white/10">
                  <div className="mb-2 flex items-center space-x-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-white rounded-full">
                      {post.category}
                    </span>
                    <time
                      className="text-xs text-white/70"
                      dateTime={post.date.toISOString()}
                    >
                      {format(post.date, 'MMMM d, yyyy')}
                    </time>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                  <p className="text-white/80 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-white/70">By {post.author}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-medium text-white hover:text-primary hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 relative">
        {/* QuantumDots Background */}
        <div className="absolute inset-0 w-full h-full">
          <QuantumDots />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-white/80 mb-8">
              Stay updated with our latest articles, insights, and company news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-white/30 bg-white/10 backdrop-blur-md text-white placeholder:text-white/50 focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
