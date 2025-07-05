'use client';

import { useState, useEffect } from 'react';

/**
 * A hook that returns whether a media query matches the current viewport
 * @param query The media query to check, e.g. '(min-width: 768px)'
 * @returns A boolean indicating whether the media query matches
 * 
 * Example usage:
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 767px)');
 * const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 * ```
 */
export function useMediaQuery(query: string): boolean {
  // Initialize with a default value to avoid hydration mismatch
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Mark as mounted to safely access browser APIs
    setMounted(true);
    
    // Create the media query list
    const media = window.matchMedia(query);
    
    // Set the initial value
    setMatches(media.matches);
    
    // Define the event listener
    const listener = () => setMatches(media.matches);
    
    // Add the event listener
    media.addEventListener('change', listener);
    
    // Clean up the event listener when the component unmounts
    return () => media.removeEventListener('change', listener);
  }, [query]);
  
  // Return false during SSR to avoid hydration mismatch
  return mounted ? matches : false;
}

// Common breakpoint helpers
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
  
  // Max-width variants
  maxSm: '(max-width: 639px)',
  maxMd: '(max-width: 767px)',
  maxLg: '(max-width: 1023px)',
  maxXl: '(max-width: 1279px)',
  max2xl: '(max-width: 1535px)',
  
  // Device-specific helpers
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  
  // Other common queries
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
};