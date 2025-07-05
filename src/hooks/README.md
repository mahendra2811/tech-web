# Custom React Hooks

This directory contains custom React hooks that can be used throughout the application to handle common functionality and state management.

## Available Hooks

### `useMediaQuery`

A hook that returns whether a media query matches the current viewport.

```tsx
import { useMediaQuery, breakpoints } from '@/hooks/useMediaQuery';

// Using a custom query
const isMobile = useMediaQuery('(max-width: 767px)');

// Using predefined breakpoints
const isDesktop = useMediaQuery(breakpoints.desktop);
const prefersDarkMode = useMediaQuery(breakpoints.dark);
```

### `useScrollPosition`

A hook that tracks the scroll position and direction of the page.

```tsx
import { useScrollPosition } from '@/hooks/useScrollPosition';

function ScrollAwareComponent() {
  const { x, y, direction, scrollPercentage } = useScrollPosition();
  
  return (
    <div>
      <p>Scroll position: {x}px, {y}px</p>
      <p>Scroll direction: {direction}</p>
      <p>Scroll percentage: {scrollPercentage.toFixed(2)}%</p>
      
      {/* Conditional rendering based on scroll position */}
      {y > 200 && <div>Visible after scrolling down 200px</div>}
      
      {/* Apply different styles based on scroll direction */}
      <header className={direction === 'down' ? 'header-hidden' : 'header-visible'}>
        Header that hides when scrolling down
      </header>
      
      {/* Progress bar based on scroll percentage */}
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
    </div>
  );
}
```

## Planned Hooks

The following hooks are planned for future implementation:

- `useLocalStorage`: For persisting state in localStorage
- `useDarkMode`: For managing dark mode preference
- `useForm`: For simplified form handling
- `useClickOutside`: For detecting clicks outside of a component
- `useDebounce`: For debouncing rapidly changing values
- `useIntersectionObserver`: For detecting when elements enter the viewport

## Best Practices

- Hooks should be focused on a single responsibility
- Include TypeScript types for all parameters and return values
- Add JSDoc comments to explain the purpose and usage of each hook
- Handle cleanup in useEffect to prevent memory leaks
- Consider SSR compatibility for Next.js applications