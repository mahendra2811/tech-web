# UI Components

This directory contains basic UI components that serve as building blocks for the application. These components are designed to be reusable, composable, and follow the principles of the design system.

## Components

### ThemeToggle.tsx
A component that allows users to toggle between light, dark, and system themes.

**Features:**
- Displays the current theme (sun, moon, or laptop icon)
- Dropdown menu for selecting a theme
- Persists theme preference in localStorage
- Handles hydration safely with useEffect

**Usage:**
```tsx
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// In your component
<ThemeToggle />
```

## Guidelines for Adding New UI Components

1. **Simplicity**: Each component should do one thing well
2. **Reusability**: Components should be designed for reuse across the application
3. **Accessibility**: Ensure components meet WCAG standards
4. **Responsiveness**: Components should work well on all screen sizes
5. **TypeScript**: Use proper typing for props and state

## Planned Components

The following UI components are planned to be added:
- Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Card
- Badge
- Avatar
- Tooltip
- Modal
- Accordion
- Tabs
- Dropdown
- Pagination
- Alert
- Toast
- Spinner
- ProgressBar