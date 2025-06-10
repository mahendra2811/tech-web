import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('text-sm font-medium transition-colors hover:text-primary')}
            >
              {item.title}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
