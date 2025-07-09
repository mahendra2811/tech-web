export const siteConfig = {
  name: "website",
  description: "We build innovative software solutions for businesses of all sizes.",
  url: "https://example.com",
  ogImage: "https://example.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/company/example",
  },
  contact: {
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Silicon Valley, CA 94000",
  },
  navigation: {
    main: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Portfolio", href: "/portfolio" },
      // { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
    footer: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Sitemap", href: "/sitemap.xml" },
      { title: "Admin Pannel", href: "/admin" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;