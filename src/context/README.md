# Context Directory

This directory contains React Context providers that manage global state across the application. Context is used for state that needs to be accessed by multiple components at different levels of the component tree.

## Contexts

### ThemeContext.tsx
A context provider for managing the application theme (light, dark, or system).

**Features:**
- Theme state management (light, dark, system)
- Theme persistence in localStorage
- Safe handling of server-side rendering
- Automatic system theme detection
- Theme change listeners

**Usage:**
```tsx
// In a client component
import { useTheme } from "@/context/ThemeContext";

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
}
```

**Provider Usage:**
The ThemeProvider is wrapped in a client component and used in the root layout:

```tsx
// src/components/ThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemeProvider } from "@/context/ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemeProvider>{children}</NextThemeProvider>;
}

// In root layout
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Guidelines for Context

1. **Client Components**: Context providers must be client components
2. **Minimal State**: Only put state in context that truly needs to be global
3. **Performance**: Be mindful of unnecessary re-renders
4. **TypeScript**: Use proper typing for context values and provider props
5. **Server Components**: Create wrapper components for use in server components

## Planned Contexts

The following contexts are planned to be added:
- AuthContext: For user authentication state
- LayoutContext: For managing layout preferences
- NotificationContext: For displaying toast notifications