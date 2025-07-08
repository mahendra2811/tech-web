export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  featured?: boolean;
  date: string; // For sorting by recency
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
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    category: 'Web Development',
    description:
      'An interactive dashboard for financial data visualization and analysis with real-time updates and reporting features.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    date: '2025-03-10',
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