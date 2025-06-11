'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  // Social media icon mapping
  const socialIcons = {
    github: <Github className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
  };

  return (
    <footer className="border-t bg-background" id="footer">
      <div className="container py-8 md:py-12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">{siteConfig.description}</p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {Object.entries(siteConfig.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`Visit our ${key} page`}
                >
                  {socialIcons[key as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>{siteConfig.contact.address}</p>
              <p className="mt-2">
                <span className="block md:inline">Email: </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary transition-colors"
                  aria-label={`Email us at ${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="mt-1">
                <span className="block md:inline">Phone: </span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-primary transition-colors"
                  aria-label={`Call us at ${siteConfig.contact.phone}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.main.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm hover:text-primary transition-colors',
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            {' • '}
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
