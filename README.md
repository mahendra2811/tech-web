# Advanced Software Development Company Website

A modern, responsive website for a software development company built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design with mobile-first approach
- Dark mode support
- Server-side rendering with Next.js App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Form validation with React Hook Form and Zod
- Animations with Framer Motion
- API routes for contact form and newsletter subscription
- Authentication pages (login/register)

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide Icons
- **Email**: Resend
- **HTTP Client**: Axios
- **Date Formatting**: date-fns

## Project Structure

```
/
├── .github/workflows/    # GitHub Actions workflows
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── (auth)/       # Authentication pages
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog pages
│   │   ├── contact/      # Contact page
│   │   ├── portfolio/    # Portfolio page
│   │   ├── services/     # Services page
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/           # UI components
│   │   ├── layout/       # Layout components
│   │   ├── features/     # Feature components
│   │   └── pages/        # Page-specific components
│   ├── config/           # Configuration files
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── .env                  # Environment variables
├── .env.example          # Example environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/software-company-website.git
   cd software-company-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality issues

## Deployment

This project is configured for easy deployment to Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
