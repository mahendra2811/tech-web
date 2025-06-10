# Layout Components

This directory contains components related to the overall layout and structure of the application. These components provide the structural foundation for the website and are used across multiple pages.

## Components

### Header.tsx
The main navigation header component that appears at the top of every page.

**Features:**
- Displays the site name/logo
- Navigation links to main pages
- Theme toggle button
- Responsive design (mobile and desktop)

**Usage:**
```tsx
import { Header } from "@/components/layout/Header";

// In your layout
<Header />
```

### Footer.tsx
The footer component that appears at the bottom of every page.

**Features:**
- Company information and copyright
- Navigation links to secondary pages
- Contact information
- Social media links

**Usage:**
```tsx
import { Footer } from "@/components/layout/Footer";

// In your layout
<Footer />
```

### Container.tsx
A wrapper component that provides consistent width, padding, and centering for content.

**Features:**
- Responsive width constraints
- Consistent horizontal padding
- Optional className prop for additional styling

**Usage:**
```tsx
import { Container } from "@/components/layout/Container";

// In your component
<Container>
  <YourContent />
</Container>
```

## Guidelines for Layout Components

1. **Consistency**: Layout components should provide a consistent user experience across the site
2. **Responsiveness**: All layout components must work well on all screen sizes
3. **Accessibility**: Ensure proper semantic HTML and keyboard navigation
4. **Performance**: Keep layout components lightweight to avoid impacting page load times

## Planned Components

The following layout components are planned to be added:
- Sidebar
- Grid
- Section
- PageHeader
- LayoutSwitcher (for different layout modes)

## Recent Changes (2025-06-10)

### Added

- `src/components/layout/Container.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Header.tsx`

