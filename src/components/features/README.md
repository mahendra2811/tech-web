# Feature Components

This directory contains feature-specific components that implement business logic and user interactions. These components are more complex than UI components and often combine multiple UI components to create complete features.

## Components

### Hero.tsx
A client component that displays the hero section on the homepage.

**Features:**
- Animated heading and text using Framer Motion
- Call-to-action buttons
- Responsive layout (stacks on mobile, side-by-side on desktop)
- Placeholder for hero image

**Usage:**
```tsx
import { Hero } from "@/components/features/Hero";

// In your page
<Hero />
```

### ServiceCard.tsx
A component for displaying individual services in a card format.

**Features:**
- Icon display
- Title and description
- Consistent styling with hover effects
- Accepts custom className for variations

**Usage:**
```tsx
import { ServiceCard } from "@/components/features/ServiceCard";
import { Code } from "lucide-react";

// In your component
<ServiceCard 
  title="Custom Software" 
  description="Tailored software solutions for your business needs."
  icon={Code}
/>
```

### ServicesSection.tsx
A client component that displays a grid of services.

**Features:**
- Animated section title and description using Framer Motion
- Grid of ServiceCard components
- Responsive layout (1 column on mobile, 2 on tablet, 3 on desktop)

**Usage:**
```tsx
import { ServicesSection } from "@/components/features/ServicesSection";

// In your page
<ServicesSection />
```

### ContactForm.tsx
A client component that provides a form for user inquiries.

**Features:**
- Form validation using React Hook Form and Zod
- Error messages for invalid inputs
- Loading state during submission
- Success/error messages after submission
- Accessible form elements

**Usage:**
```tsx
import { ContactForm } from "@/components/features/ContactForm";

// In your page
<ContactForm />
```

## Guidelines for Feature Components

1. **Client Components**: Most feature components should be client components (marked with "use client")
2. **Composition**: Build features by composing smaller UI components
3. **State Management**: Handle component state using React hooks
4. **Validation**: Use Zod for form validation
5. **Animation**: Use Framer Motion for animations
6. **Accessibility**: Ensure all interactive elements are accessible

## Planned Components

The following feature components are planned to be added:
- TestimonialCard
- ProjectCard
- BlogPostCard
- Newsletter
- AnimatedText
- AnimatedCounter
- ImageCarousel
- VideoPlayer
- CodeSnippet
- PricingTable

## Recent Changes (2025-06-10)

### Added

- `src/components/features/ContactForm.tsx`
- `src/components/features/Hero.tsx`
- `src/components/features/ServiceCard.tsx`
- `src/components/features/ServicesSection.tsx`

