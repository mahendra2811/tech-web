'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X, Code, Server, Database, Cloud, Cpu, Globe, Laptop, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Handle scroll effect with hide/show on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 10);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Animation for floating icons
  const getFloatingAnimation = (index: number) => ({
    y: [0, -10, 0],
    x: [0, index % 2 === 0 ? 5 : -5, 0],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 3 + index,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  });

  return (
    <motion.header
      className={cn(
        'fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300',
        isScrolled ? 'shadow-md bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Background with hero image and overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Solid background color matching hero section's dominant color */}
        <div className="absolute inset-0 bg-[#0a1929]" />

        {/* More animated floating tech icons concentrated in the center area */}
        {/* Left side icons (fewer) */}
        <motion.div
          className="absolute opacity-20 h-6 w-6 top-[20%] left-[15%]"
          animate={getFloatingAnimation(1)}
        >
          <Code className="text-[#0072FF]" />
        </motion.div>

        <motion.div
          className="absolute opacity-20 h-5 w-5 bottom-[30%] left-[20%]"
          animate={getFloatingAnimation(3)}
        >
          <Database className="text-[#6E00FF]" />
        </motion.div>

        {/* Center area icons (more concentrated) */}
        <motion.div
          className="absolute opacity-20 h-7 w-7 top-[15%] left-[40%]"
          animate={getFloatingAnimation(2)}
        >
          <Server className="text-[#00E5FF]" />
        </motion.div>

        <motion.div
          className="absolute opacity-20 h-8 w-8 top-[60%] left-[45%]"
          animate={getFloatingAnimation(4)}
        >
          <Cloud className="text-[#0072FF]" />
        </motion.div>

        <motion.div
          className="absolute opacity-20 h-6 w-6 top-[40%] left-[50%]"
          animate={getFloatingAnimation(5)}
        >
          <Cpu className="text-[#00E5FF]" />
        </motion.div>

        <motion.div
          className="absolute opacity-20 h-7 w-7 bottom-[20%] left-[55%]"
          animate={getFloatingAnimation(6)}
        >
          <Globe className="text-[#6E00FF]" />
        </motion.div>

        <motion.div
          className="absolute opacity-20 h-5 w-5 top-[25%] left-[60%]"
          animate={getFloatingAnimation(7)}
        >
          <Laptop className="text-[#0072FF]" />
        </motion.div>

        <motion.div
          className="absolute opacity-20 h-6 w-6 bottom-[40%] left-[48%]"
          animate={getFloatingAnimation(8)}
        >
          <Layers className="text-[#00E5FF]" />
        </motion.div>

        {/* Right side icons (fewer) */}
        <motion.div
          className="absolute opacity-20 h-7 w-7 top-[30%] right-[15%]"
          animate={getFloatingAnimation(9)}
        >
          <Server className="text-[#00E5FF]" />
        </motion.div>

        <motion.div
          className="absolute opacity-20 h-5 w-5 bottom-[25%] right-[20%]"
          animate={getFloatingAnimation(10)}
        >
          <Database className="text-[#6E00FF]" />
        </motion.div>
      </div>
      <div className="container flex mx-auto h-16 items-center justify-center px-4 md:px-6 relative z-10">
        <div className="w-full max-w-9xl flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
              <span className="font-bold text-xl text-foreground">{siteConfig.name}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.main.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary py-2 relative group',
                      isActive ? 'text-primary font-semibold' : 'text-foreground/90'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.title}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full',
                        isActive && 'w-full'
                      )}
                    />
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-md hover:bg-muted/50"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t bg-background/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 md:px-6 flex justify-center">
              <nav className="w-full max-w-6xl py-5 flex flex-col space-y-4">
                {siteConfig.navigation.main.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'px-3 py-2.5 text-sm font-medium transition-colors hover:text-primary rounded-md flex items-center',
                          isActive
                            ? 'text-primary font-semibold bg-primary/5'
                            : 'text-foreground/90'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-background focus:px-4 focus:py-2 focus:text-primary"
      >
        Skip to content
      </a>
    </motion.header>
  );
}
