# Lib Directory

This directory contains utility libraries and helper functions that are used throughout the application. These are not React components but rather JavaScript/TypeScript functions and modules that provide common functionality.

## Files

### utils.ts
A collection of utility functions for common tasks.

**Functions:**
- `cn`: A utility function for conditionally joining class names, using clsx and tailwind-merge

**Usage:**
```tsx
import { cn } from "@/lib/utils";

// In your component
<div className={cn(
  "base-class", 
  isActive && "active-class",
  variant === "primary" ? "primary-class" : "secondary-class"
)}>
  Content
</div>
```

## Planned Files

The following utility files are planned to be added:

### api.ts
Functions for interacting with API endpoints.

**Planned Functions:**
- `fetchApi`: A wrapper around fetch with error handling
- `handleApiError`: Common error handling for API requests
- `apiRoutes`: Constants for API route paths

### validation.ts
Common validation schemas and utilities using Zod.

**Planned Functions:**
- `emailSchema`: Reusable email validation schema
- `passwordSchema`: Reusable password validation schema
- `validateForm`: Generic form validation helper

### formatting.ts
Functions for formatting data for display.

**Planned Functions:**
- `formatDate`: Format dates in a consistent way
- `formatCurrency`: Format currency values
- `formatPhoneNumber`: Format phone numbers

### auth.ts
Authentication-related utilities.

**Planned Functions:**
- `isAuthenticated`: Check if user is authenticated
- `getAuthToken`: Get the authentication token
- `parseJwt`: Parse JWT tokens

### seo.ts
SEO-related utilities.

**Planned Functions:**
- `generateMetadata`: Generate metadata for pages
- `createOgImage`: Create Open Graph image URLs

## Guidelines for Lib Functions

1. **Pure Functions**: Prefer pure functions that don't have side effects
2. **TypeScript**: Use proper typing for parameters and return values
3. **Documentation**: Include JSDoc comments for all functions
4. **Testing**: Write unit tests for utility functions
5. **Modularity**: Keep functions focused on a single responsibility

## Recent Changes (2025-06-10)

### Added

- `src/lib/utils.ts`

