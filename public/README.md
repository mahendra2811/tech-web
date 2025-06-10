# Public Directory

This directory contains static assets that are served directly by the web server. Files in this directory are accessible at the root path of your website.

## Structure

### `/fonts`
Custom font files for the website.

**Purpose:**
- Store custom font files (woff, woff2, etc.)
- These fonts can be imported in CSS or used with Next.js Font optimization

### `/images`
Static images used throughout the website.

**Purpose:**
- Store images that don't need Next.js Image optimization
- Store images that need to be referenced directly by URL
- Store favicon and other browser-related images

### Default Files

#### `favicon.ico`
The website favicon that appears in browser tabs.

#### `next.svg`
The Next.js logo, included by default.

#### `vercel.svg`
The Vercel logo, included by default.

#### `globe.svg`, `file.svg`, `window.svg`
Icon SVGs included by default.

## Guidelines for Public Assets

1. **Image Optimization**: For most images, prefer using Next.js Image component with images stored in the app directory
2. **File Size**: Keep file sizes as small as possible
3. **Organization**: Organize files into appropriate subdirectories
4. **Naming**: Use clear, descriptive filenames
5. **Formats**: Use modern formats (WebP for images, WOFF2 for fonts) when possible

## Planned Additions

The following additions to the public directory are planned:

### `/icons`
A collection of custom icons used throughout the website.

**Planned Contents:**
- Favicon in various sizes
- Apple touch icon
- Android icons
- Custom SVG icons

### `/videos`
Video files used in the website.

**Planned Contents:**
- Background videos
- Product demos
- Testimonial videos

### `robots.txt`
Instructions for search engine crawlers.

### `sitemap.xml`
XML sitemap for search engines.

### `manifest.json`
Web app manifest for Progressive Web App functionality.