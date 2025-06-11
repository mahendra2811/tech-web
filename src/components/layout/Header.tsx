'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-shadow',
        isScrolled && 'shadow-md'
      )}
    >
      <div className="container flex mx-auto h-16 items-center justify-center px-4 md:px-6">
        <div className="w-full max-w-9xl flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.main.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary py-2',
                    isActive ? 'text-primary font-semibold' : 'text-foreground/80'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.title}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-md hover:bg-muted"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container px-4 md:px-6 flex justify-center">
            <nav className="w-full max-w-6xl py-5 flex flex-col space-y-4">
              {siteConfig.navigation.main.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3 py-2.5 text-sm font-medium transition-colors hover:text-primary rounded-md',
                      isActive ? 'text-primary font-semibold' : 'text-foreground/80'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-background focus:px-4 focus:py-2 focus:text-primary"
      >
        Skip to content
      </a>
    </header>
  );
}
