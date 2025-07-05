'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
  scrollPercentage: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
    scrollPercentage: 0
  });
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const updatePosition = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      
      // Calculate scroll direction
      const direction = currentScrollY > lastScrollY 
        ? 'down' 
        : currentScrollY < lastScrollY 
          ? 'up' 
          : 'none';
      
      // Calculate scroll percentage
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = scrollableHeight > 0 
        ? Math.min(100, Math.max(0, (currentScrollY / scrollableHeight) * 100)) 
        : 0;
      
      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
        direction,
        scrollPercentage
      });
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  
  return scrollPosition;
}