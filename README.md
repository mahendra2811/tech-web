# My Website - Modern Web Application

## Project Overview

This is a modern, responsive website built with Next.js, React, TypeScript, and TailwindCSS. The website showcases a software development company's services, portfolio, and contact information with a sleek, professional design featuring animated backgrounds and interactive elements.

## Key Features

- **Modern UI/UX**: Sleek design with animated backgrounds, interactive elements, and smooth transitions
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle functionality for user preference
- **Animated Components**: Framer Motion animations for enhanced user experience
- **Form Validation**: Zod schema validation for contact and authentication forms
- **API Routes**: Next.js API routes for handling form submissions
- **Authentication System**: Login/Register functionality (currently mocked)
- **Portfolio Showcase**: Filterable project grid with detailed project information
- **Services Section**: Showcase of company services with interactive cards
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Metadata configuration for better search engine visibility

## Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Lucide React**: Icon library

### Backend (Current Implementation)
- **Next.js API Routes**: Server-side API endpoints
- **Zod**: Request validation

## Project Structure

```
my-website/
├── public/               # Static assets
│   ├── fonts/            # Font files
│   ├── images/           # Image assets
│   └── ...
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Authentication routes
│   │   ├── about/        # About page
│   │   ├── api/          # API routes
│   │   ├── backgrounds/  # Background showcase
│   │   ├── blog/         # Blog page
│   │   ├── contact/      # Contact page
│   │   ├── portfolio/    # Portfolio page
│   │   ├── services/     # Services page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── backgrounds/  # Animated backgrounds
│   │   ├── common/       # Common components
│   │   ├── features/     # Feature components
│   │   ├── layout/       # Layout components
│   │   ├── portfolio/    # Portfolio components
│   │   ├── services/     # Service components
│   │   └── ui/           # UI components
│   ├── config/           # Site configuration
│   ├── constant/         # Constants and data
│   ├── context/          # React context
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility libraries
│   ├── styles/           # Additional styles
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── .gitignore            # Git ignore file
├── components.json       # Component configuration
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.mjs    # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/my-website.git
cd my-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The application can be deployed to various platforms:

- **Vercel**: Recommended for Next.js applications
- **Netlify**: Good alternative with similar features
- **AWS/GCP/Azure**: For more custom deployment needs

## Future Enhancements

- **Backend Integration**: Connect to a real backend service
- **Authentication**: Implement real authentication with JWT or OAuth
- **Database**: Add database connectivity for dynamic content
- **CMS Integration**: Add a headless CMS for content management
- **Blog Functionality**: Implement a fully functional blog
- **E-commerce Features**: Add product listings and checkout functionality
- **Analytics**: Integrate analytics for tracking user behavior

## License

[MIT License](LICENSE)
