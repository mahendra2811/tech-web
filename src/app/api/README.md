# API Directory

This directory contains API route handlers for the Next.js application. These are server-side only routes that handle data processing, external API calls, and other server-side operations.

## Structure

### `/contact`
API endpoint for handling contact form submissions.

**Files:**
- **route.ts**: Handles POST requests for contact form submissions

**Functionality:**
- Validates incoming form data using Zod
- Processes contact form submissions
- Could send emails via Resend in a production environment
- Returns appropriate success/error responses

**Usage:**
```tsx
// In a client component
async function submitContactForm(data) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  return response.json();
}
```

### `/newsletter`
API endpoint for handling newsletter subscriptions.

**Files:**
- **route.ts**: Handles POST requests for newsletter subscriptions

**Functionality:**
- Validates email addresses using Zod
- Processes newsletter subscriptions
- Could integrate with email marketing services in a production environment
- Returns appropriate success/error responses

**Usage:**
```tsx
// In a client component
async function subscribeToNewsletter(email) {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  
  return response.json();
}
```

## Guidelines for API Routes

1. **Input Validation**: Always validate incoming data using Zod
2. **Error Handling**: Implement proper error handling and return appropriate status codes
3. **Response Format**: Use consistent response formats (e.g., `{ success: boolean, data?: any, error?: string }`)
4. **Security**: Implement proper security measures (CORS, rate limiting, etc.)
5. **Environment Variables**: Use environment variables for sensitive information
6. **TypeScript**: Use proper typing for request and response data

## Planned API Routes

The following API routes are planned to be added:

### `/auth`
Authentication-related endpoints.

**Planned Endpoints:**
- `/auth/login`: Handle user login
- `/auth/register`: Handle user registration
- `/auth/logout`: Handle user logout

### `/blog`
Blog-related endpoints.

**Planned Endpoints:**
- `/blog/posts`: Get blog posts
- `/blog/post`: Create, update, or delete blog posts


## Recent Changes (2025-06-10)

### Added

- `src/app/api/newsletter/route.ts`

