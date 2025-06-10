# App Directory

This directory contains the main application pages and API routes using Next.js App Router.

## Structure

- **layout.tsx**: Root layout component that wraps all pages, includes the Header and Footer components
- **page.tsx**: Homepage component
- **globals.css**: Global CSS styles including Tailwind directives and CSS variables

## Subdirectories

### `/api`

Contains API route handlers for server-side functionality:

- **contact**: API endpoint for handling contact form submissions
- **newsletter**: API endpoint for handling newsletter subscriptions

### `/(auth)`

Authentication-related pages (grouped route):

- **login**: User login page
- **register**: User registration page

### `/about`

About page showing company information and history

### `/blog`

Blog listing and individual post pages

### `/contact`

Contact page with form for user inquiries

### `/portfolio`

Portfolio page showcasing company projects

### `/services`

Services page detailing company offerings

## Notes

- Each page is a server component by default unless marked with "use client"
- Pages automatically create routes based on their file path
- API routes are server-side only and handle data processing
