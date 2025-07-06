'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import {
  Github,
  Twitter,
  Linkedin,
  ArrowUp,
  Code,
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <footer
      className="relative border-t bg-cover bg-center bg-no-repeat"
      id="footer"
      style={{ backgroundImage: 'url("/images/footer_bg.png")' }}
    >
      {/* Background with animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Lighter gradient overlay for better visibility of the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/30 via-[#101C2C]/20 to-[#0A0E17]/30" />

        {/* Animated floating tech icons */}
        <motion.div
          className={`absolute opacity-20 h-8 w-8 top-[20%] left-[15%]`}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Code className="text-[#0072FF]" />
        </motion.div>

        <motion.div
          className={`absolute opacity-20 h-10 w-10 top-[35%] right-[25%]`}
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Server className="text-[#00E5FF]" />
        </motion.div>

        <motion.div
          className={`absolute opacity-20 h-6 w-6 bottom-[30%] left-[30%]`}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Database className="text-[#6E00FF]" />
        </motion.div>

        <motion.div
          className={`absolute opacity-20 h-12 w-12 top-[60%] right-[15%]`}
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Cloud className="text-[#0072FF]" />
        </motion.div>

        <motion.div
          className={`absolute opacity-20 h-7 w-7 top-[15%] right-[40%]`}
          animate={{
            y: [0, 25, 0],
            x: [0, 25, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Cpu className="text-[#00E5FF]" />
        </motion.div>

        <motion.div
          className={`absolute opacity-20 h-9 w-9 bottom-[20%] right-[35%]`}
          animate={{
            y: [0, -35, 0],
            x: [0, -15, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Layers className="text-[#6E00FF]" />
        </motion.div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0072FF]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#6E00FF]/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2,
          }}
        />
      </div>
      <div className="container py-12 md:py-16 mx-auto px-4 relative z-10">
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

        {/* Decorative divider */}
        <div className="relative mt-12 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <motion.div
              className="px-4 bg-[#0A0E17]/80 text-primary"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.5 12H16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 7.5V16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
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
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all z-50"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </footer>
  );
}
