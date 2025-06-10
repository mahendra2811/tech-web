# Auth Directory

This directory contains authentication-related pages and components. It's a route group (denoted by the parentheses in the folder name), which means it shares a layout but doesn't affect the URL structure.

## Structure

### `layout.tsx`
The shared layout for all authentication pages.

**Features:**
- Simplified layout without the main navigation
- Centered content for forms
- Link back to the homepage
- Footer with minimal information

### `/login`
The login page for existing users.

**Files:**
- **layout.tsx**: Page-specific metadata
- **page.tsx**: Login form and functionality

**Features:**
- Email and password form
- Form validation using React Hook Form and Zod
- "Remember me" option
- Forgot password link
- Social login options (Google, GitHub)
- Link to registration page

### `/register`
The registration page for new users.

**Files:**
- **layout.tsx**: Page-specific metadata
- **page.tsx**: Registration form and functionality

**Features:**
- Name, email, and password form
- Password confirmation
- Form validation using React Hook Form and Zod
- Terms and conditions acceptance
- Social registration options (Google, GitHub)
- Link to login page

## Guidelines for Authentication

1. **Security**: Implement proper security measures for authentication
2. **Validation**: Validate all form inputs using Zod
3. **User Experience**: Provide clear feedback for form errors and submission status
4. **Accessibility**: Ensure all forms are accessible
5. **Client Components**: All form components should be client components

## Planned Pages

The following authentication-related pages are planned to be added:

### `/forgot-password`
Page for requesting a password reset.

**Planned Features:**
- Email input form
- Email validation
- Success/error messages

### `/reset-password`
Page for setting a new password after reset.

**Planned Features:**
- Password and confirmation inputs
- Token validation
- Password strength requirements
- Success/error messages

### `/verify-email`
Page for email verification.

**Planned Features:**
- Token validation
- Success/error messages
- Resend verification option



## Recent Changes (2025-06-10)

### Added

- `src/app/(auth)/register/layout.tsx`
- `src/app/(auth)/register/page.tsx`

