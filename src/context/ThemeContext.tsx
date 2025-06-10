'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Once mounted on client, we can safely access browser APIs
  useEffect(() => {
    setMounted(true);

    // Get stored theme from localStorage
    const storedTheme = localStorage?.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Skip if not mounted yet (server-side)
    if (!mounted) return;

    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove('light', 'dark');

    // Apply the appropriate theme
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Store the theme preference
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    // Skip if not mounted yet (server-side)
    if (!mounted || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
