import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { format } from "date-fns";

export const metadata = {
  title: "Blog",
  description: "Read our latest articles, insights, and updates on software development.",
};

export default function BlogPage() {
  // In a real application, this data would come from a CMS or API
  const posts = [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
      date: new Date("2025-05-15"),
      author: "John Doe",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Building Scalable Applications with Microservices",
      excerpt: "Learn how to design and implement microservices architecture for better scalability and maintainability.",
      date: new Date("2025-05-10"),
      author: "Jane Smith",
      category: "Architecture",
    },
    {
      id: "3",
      title: "The Impact of AI on Software Development",
      excerpt: "Discover how artificial intelligence is transforming the way we build and maintain software applications.",
      date: new Date("2025-05-05"),
      author: "Michael Johnson",
      category: "Artificial Intelligence",
    },
    {
      id: "4",
      title: "Optimizing React Applications for Performance",
      excerpt: "Practical tips and techniques for improving the performance of your React applications.",
      date: new Date("2025-04-28"),
      author: "Sarah Williams",
      category: "React",
    },
    {
      id: "5",
      title: "Securing Your Web Applications: Best Practices",
      excerpt: "Essential security measures to protect your web applications from common vulnerabilities and threats.",
      date: new Date("2025-04-20"),
      author: "David Brown",
      category: "Security",
    },
    {
      id: "6",
      title: "The Role of DevOps in Modern Software Development",
      excerpt: "How DevOps practices can streamline your development process and improve collaboration between teams.",
      date: new Date("2025-04-15"),
      author: "Emily Davis",
      category: "DevOps",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and updates from our team of experts
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md flex flex-col"
              >
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary/30">
                    Blog Image
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-2 flex items-center space-x-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <time className="text-xs text-muted-foreground" dateTime={post.date.toISOString()}>
                      {format(post.date, "MMMM d, yyyy")}
                    </time>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="text-sm font-medium text-primary hover:underline"
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
      <section className="py-16 bg-secondary/20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with our latest articles, insights, and company news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border focus:ring-2 focus:ring-primary focus:outline-none"
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