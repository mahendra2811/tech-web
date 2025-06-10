# Config Directory

This directory contains configuration files for the application. These files define constants, settings, and other configuration values that are used throughout the application.

## Files

### site.ts
Contains configuration for the website including metadata, navigation, and contact information.

**Configuration:**
- `name`: The name of the website
- `description`: A brief description of the website
- `url`: The base URL of the website
- `ogImage`: The default Open Graph image URL
- `links`: Social media and other external links
- `contact`: Contact information
- `navigation`: Navigation links for different parts of the site

**Usage:**
```tsx
import { siteConfig } from "@/config/site";

// In your component
<h1>{siteConfig.name}</h1>
<p>{siteConfig.description}</p>
<a href={siteConfig.links.twitter}>Twitter</a>

// In metadata
export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

// For navigation
<nav>
  {siteConfig.navigation.main.map((item) => (
    <Link key={item.href} href={item.href}>
      {item.title}
    </Link>
  ))}
</nav>
```

## Guidelines for Configuration

1. **Type Safety**: Use TypeScript interfaces or types for configuration objects
2. **Default Exports**: Export configuration as named constants
3. **Environment Variables**: Use environment variables for sensitive or environment-specific configuration
4. **Documentation**: Include comments explaining the purpose of each configuration value
5. **Immutability**: Configuration should be treated as immutable

## Planned Configuration Files

The following configuration files are planned to be added:

### api.ts
API-related configuration.

**Planned Configuration:**
- `apiBaseUrl`: The base URL for API requests
- `apiVersion`: The current API version
- `apiEndpoints`: Object mapping endpoint names to paths
- `apiTimeouts`: Timeout settings for different types of requests

### features.ts
Feature flags and configuration.

**Planned Configuration:**
- `featureFlags`: Object mapping feature names to boolean flags
- `featureConfig`: Configuration for specific features

## Recent Changes (2025-06-10)

### Added

- `src/config/site.ts`

