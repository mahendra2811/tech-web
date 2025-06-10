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

## Documentation

Each directory in the project contains a detailed README.md file that explains:

- The purpose of the directory
- The components or files contained within
- Usage examples with code snippets
- Guidelines for adding new components or files
- Planned future additions

These README files are ignored by Git (via .gitignore) but provide valuable documentation for developers working on the project. They serve as a comprehensive guide to understanding the codebase structure and conventions.

Key documentation files include:

- `src/app/README.md` - App Router pages and API routes
- `src/components/README.md` - Component organization and guidelines
- `src/context/README.md` - Context providers for state management
- `src/lib/README.md` - Utility functions and libraries
- `src/config/README.md` - Configuration files and constants
- `.github/README.md` - GitHub-specific files and workflows

To view these files, you'll need to clone the repository as they are not included in the Git history.

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

## Automated Documentation

This project includes an automated system that keeps the README files up-to-date with changes made to the codebase:

1. Each directory contains a detailed README.md file documenting its purpose and contents
2. When files are changed, added, or deleted, the corresponding README.md files are automatically updated
3. Updates include a "Recent Changes" section that lists modified files with timestamps
4. This automation is implemented via GitHub Actions (see `.github/workflows/update-readmes.yml`)

The automation works as follows:

- When changes are pushed to the main branch, a GitHub Action is triggered
- The action identifies which files have changed (looking at multiple recent commits)
- It then updates the corresponding README.md files with information about the changes
- The updated README files are committed back to the repository

Key improvements in the system:

- README files are now tracked in Git (previously they were ignored)
- The system examines multiple recent commits, not just the last one
- Enhanced error handling and logging for better troubleshooting
- Improved regex patterns for updating existing "Recent Changes" sections
- Prevention of infinite loops by skipping commits with [skip ci] tag

This ensures that documentation stays in sync with the codebase without manual effort, providing developers with up-to-date information about recent changes in each directory.

## Deployment

This project is configured for easy deployment to Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.























## Recent Changes (2025-06-10)

### Added

- `components.json`

### Modified

- `.gitignore`
- `package-lock.json`
- `package.json`

