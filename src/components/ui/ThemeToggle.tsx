'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Laptop } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Once mounted on client, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    closeDropdown();
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex h-9 w-9 items-center justify-center rounded-md border bg-background transition-colors hover:bg-muted"
        aria-label="Toggle theme"
      >
        {theme === 'light' && <Sun className="h-4 w-4" />}
        {theme === 'dark' && <Moon className="h-4 w-4" />}
        {theme === 'system' && <Laptop className="h-4 w-4" />}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={closeDropdown} aria-hidden="true" />
          <div className="absolute right-0 top-full z-50 mt-2 w-36 rounded-md border bg-background p-1 shadow-md">
            <button
              onClick={() => handleThemeChange('light')}
              className={`flex w-full items-center rounded-sm px-2 py-1.5 text-sm ${
                theme === 'light' ? 'bg-muted' : 'hover:bg-muted'
              }`}
            >
              <Sun className="mr-2 h-4 w-4" />
              Light
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              className={`flex w-full items-center rounded-sm px-2 py-1.5 text-sm ${
                theme === 'dark' ? 'bg-muted' : 'hover:bg-muted'
              }`}
            >
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </button>
            <button
              onClick={() => handleThemeChange('system')}
              className={`flex w-full items-center rounded-sm px-2 py-1.5 text-sm ${
                theme === 'system' ? 'bg-muted' : 'hover:bg-muted'
              }`}
            >
              <Laptop className="mr-2 h-4 w-4" />
              System
            </button>
          </div>
        </>
      )}
    </div>
  );
}
