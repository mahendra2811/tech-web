export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  featured?: boolean;
  date: string; // For sorting by recency

  // New fields for modal
  gallery?: string[]; // Additional images
  detailedDescription?: string; // More detailed description for the modal
  techStack?: {
    name: string;
    icon?: string; // Lucide icon name
  }[];
  tags?: string[]; // e.g., ["Web App", "Mobile"]
  githubUrl?: string;
  liveUrl?: string;
  isOpenSource?: boolean;
  status?: 'active' | 'inactive';
}

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description:
      'A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
    date: '2025-05-15',
    detailedDescription:
      'This comprehensive e-commerce platform was built to provide businesses with a scalable and customizable solution for online retail. The platform includes robust inventory management, secure payment processing with Stripe integration, and detailed customer analytics to help businesses make data-driven decisions.\n\nThe frontend was developed using Next.js for server-side rendering and optimal performance, while the backend utilizes Node.js with Express for API endpoints. Data is stored in MongoDB, allowing for flexible schema design and efficient querying.',
    techStack: [
      { name: 'Next.js', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'MongoDB', icon: 'database' },
      { name: 'Stripe', icon: 'creditcard' },
    ],
    tags: ['E-Commerce', 'Full Stack', 'Web App'],
    githubUrl: 'https://github.com/example/ecommerce-platform',
    liveUrl: 'https://example-ecommerce.com',
    isOpenSource: true,
    status: 'active',
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description:
      'A mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.',
    technologies: ['React Native', 'Firebase', 'Express.js'],
    featured: true,
    date: '2025-04-20',
    detailedDescription:
      'This healthcare mobile application was designed to improve patient experience and streamline communication with healthcare providers. The app allows patients to schedule appointments, access their medical records securely, receive medication reminders, and communicate directly with their healthcare team.\n\nBuilt with React Native for cross-platform compatibility, the app uses Firebase for real-time database and authentication. The backend API was developed with Express.js to handle appointment scheduling and integration with existing healthcare systems.',
    techStack: [
      { name: 'React Native', icon: 'react' },
      { name: 'Firebase', icon: 'database' },
      { name: 'Express.js', icon: 'nodejs' },
    ],
    tags: ['Healthcare', 'Mobile App', 'Cross-Platform'],
    githubUrl: 'https://github.com/example/healthcare-app',
    liveUrl: 'https://healthcare-app.example.com',
    status: 'active',
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    category: 'Web Development',
    description:
      'An interactive dashboard for financial data visualization and analysis with real-time updates and reporting features.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    date: '2025-03-10',
    detailedDescription:
      'This financial dashboard provides businesses with powerful visualization tools for analyzing financial data. The dashboard features interactive charts and graphs, real-time data updates, customizable reports, and export capabilities.\n\nThe frontend was built with React for a responsive user interface, with D3.js handling the complex data visualizations. The backend uses Node.js with a PostgreSQL database for efficient data storage and retrieval. The system includes role-based access control to ensure sensitive financial data is only accessible to authorized users.',
    techStack: [
      { name: 'React', icon: 'react' },
      { name: 'D3.js', icon: 'bar-chart' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'PostgreSQL', icon: 'database' },
    ],
    tags: ['Finance', 'Dashboard', 'Data Visualization'],
    githubUrl: 'https://github.com/example/financial-dashboard',
    status: 'active',
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    category: 'Custom Software',
    description:
      'A comprehensive inventory management system for a manufacturing company with barcode scanning and automated reporting.',
    technologies: ['Angular', 'Python', 'Django', 'MySQL'],
    date: '2025-02-05',
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    category: 'Web Development',
    description:
      'A platform for real estate listings, property management, and client communication with virtual tour capabilities.',
    technologies: ['Next.js', 'Three.js', 'Express.js', 'MongoDB'],
    date: '2025-01-15',
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description:
      'A mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
    technologies: ['Flutter', 'Firebase', 'TensorFlow'],
    featured: true,
    date: '2024-12-10',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Service Chatbot',
    category: 'AI',
    description:
      'An intelligent chatbot that handles customer inquiries, provides product recommendations, and resolves common issues automatically.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'AWS Lambda'],
    featured: true,
    date: '2024-11-20',
  },
  {
    id: 'ml-recommendation',
    title: 'ML-Powered Recommendation Engine',
    category: 'ML',
    description:
      'A machine learning system that analyzes user behavior to provide personalized product and content recommendations.',
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'AWS SageMaker'],
    date: '2024-10-15',
  },
];

export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'All Projects' },
  { id: 'featured', name: 'Featured Projects' },
  { id: 'recent', name: 'Recent Projects' },
  { id: 'web-development', name: 'Web Development' },
  { id: 'mobile-development', name: 'Mobile Development' },
  { id: 'custom-software', name: 'Custom Software' },
  { id: 'ai', name: 'AI' },
  { id: 'ml', name: 'ML' },
];
