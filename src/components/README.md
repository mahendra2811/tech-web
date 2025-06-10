# Components Directory

This directory contains reusable React components organized by their purpose and functionality.

## Structure

The components are organized into the following subdirectories:

### `/ui`
Basic UI components that serve as building blocks for the application:
- **ThemeToggle.tsx**: Component for toggling between light, dark, and system themes

### `/layout`
Components related to the overall layout and structure of the application:
- **Header.tsx**: Main navigation header component
- **Footer.tsx**: Footer component with links and contact information
- **Container.tsx**: Wrapper component for consistent content width and padding

### `/features`
Feature-specific components that implement business logic and user interactions:
- **Hero.tsx**: Hero section component for the homepage
- **ServiceCard.tsx**: Card component for displaying individual services
- **ServicesSection.tsx**: Section component displaying all services
- **ContactForm.tsx**: Form component for user inquiries with validation

### `/pages`
Page-specific components that are only used on specific pages:
- (To be implemented as needed)

## Component Guidelines

1. **Client vs Server Components**:
   - Components using hooks, event handlers, or browser APIs should be marked with "use client"
   - Components using Framer Motion or other client-side libraries must be client components

2. **Props and TypeScript**:
   - All components should have properly typed props using TypeScript interfaces
   - Use descriptive prop names and provide default values when appropriate

3. **Styling**:
   - Use Tailwind CSS classes for styling
   - Use the `cn()` utility for conditional class names

4. **State Management**:
   - Use React hooks for local state
   - Consider context for shared state across components

## Recent Changes (2025-06-10)

### Added

- `src/components/ThemeProvider.tsx`

