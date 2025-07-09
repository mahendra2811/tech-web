      success: true,
      projects,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get project categories
export const getProjectCategories = async (req: Request, res: Response) => {
  try {
    // Get distinct categories
    const categories = await Project.distinct('category');
    
    res.status(200).json({
      success: true,
      categories
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get project by ID or slug
export const getProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Check if id is a valid ObjectId
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(id);
    
    let project;
    if (isValidObjectId) {
      project = await Project.findById(id);
    } else {
      // If not a valid ObjectId, try to find by slug
      project = await Project.findOne({ slug: id });
    }
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      project
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Create new project
export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body);
    
    res.status(201).json({
      success: true,
      project
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Update project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      project
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Delete project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findByIdAndDelete(id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
```

### Project Routes (routes/project.routes.ts)

```typescript
import express from 'express';
import { body } from 'express-validator';
import {
  getProjects,
  getProjectCategories,
  getProject,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/project.controller';
import { protect, editor } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';

const router = express.Router();

// Public routes
router.get('/', getProjects);
router.get('/categories', getProjectCategories);
router.get('/:id', getProject);

// Protected routes (require authentication and editor/admin role)
router.post(
  '/',
  protect,
  editor,
  validate([
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
    body('category').notEmpty().withMessage('Category is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('technologies').isArray().withMessage('Technologies must be an array'),
    body('projectDate').isISO8601().withMessage('Project date must be a valid date')
  ]),
  createProject
);

router.put(
  '/:id',
  protect,
  editor,
  validate([
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('slug').optional().notEmpty().withMessage('Slug cannot be empty'),
    body('category').optional().notEmpty().withMessage('Category cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('technologies').optional().isArray().withMessage('Technologies must be an array'),
    body('projectDate').optional().isISO8601().withMessage('Project date must be a valid date')
  ]),
  updateProject
);

router.delete('/:id', protect, editor, deleteProject);

export default router;
```

### Contact Controller (controllers/contact.controller.ts)

```typescript
import { Request, Response } from 'express';
import ContactSubmission from '../models/contact.model';
import { sendContactNotificationEmail } from '../services/email.service';

// Submit contact form
export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Create new submission
    const submission = await ContactSubmission.create({
      name,
      email,
      subject,
      message
    });
    
    // Send notification email to admin
    await sendContactNotificationEmail({
      name,
      email,
      subject,
      message
    });
    
    res.status(201).json({
      success: true,
      message: 'Your message has been received. We\'ll get back to you soon!',
      submission
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get all contact submissions (admin only)
export const getContactSubmissions = async (req: Request, res: Response) => {
  try {
    const { status, limit = 10, page = 1 } = req.query;
    
    // Build query
    const query: any = {};
    
    if (status) {
      query.status = status;
    }
    
    // Pagination
    const skip = (Number(page) - 1) * Number(limit);
    
    // Execute query
    const submissions = await ContactSubmission.find(query)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip(skip);
    
    // Get total count
    const total = await ContactSubmission.countDocuments(query);
    
    res.status(200).json({
      success: true,
      submissions,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Update submission status
export const updateSubmissionStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const submission = await ContactSubmission.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    res.status(200).json({
      success: true,
      submission
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Delete submission
export const deleteSubmission = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const submission = await ContactSubmission.findByIdAndDelete(id);
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Submission deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
```

### Contact Routes (routes/contact.routes.ts)

```typescript
import express from 'express';
import { body } from 'express-validator';
import {
  submitContactForm,
  getContactSubmissions,
  updateSubmissionStatus,
  deleteSubmission
} from '../controllers/contact.controller';
import { protect, admin } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';

const router = express.Router();

// Public routes
router.post(
  '/',
  validate([
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
  ]),
  submitContactForm
);

// Protected routes (admin only)
router.get('/submissions', protect, admin, getContactSubmissions);

router.put(
  '/submissions/:id/status',
  protect,
  admin,
  validate([
    body('status').isIn(['new', 'read', 'responded', 'archived']).withMessage('Invalid status')
  ]),
  updateSubmissionStatus
);

router.delete('/submissions/:id', protect, admin, deleteSubmission);

export default router;
```

### Email Service (services/email.service.ts)

```typescript
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send password reset email
export const sendPasswordResetEmail = async (email: string, token: string): Promise<void> => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
  
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Password Reset',
    html: `
      <h1>Password Reset</h1>
      <p>You requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetUrl}" style="display: inline-block; padding: 10px 20px; background-color: #0072FF; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
      <p>If you didn't request this, please ignore this email.</p>
      <p>This link will expire in 1 hour.</p>
    `
  };
  
  await transporter.sendMail(mailOptions);
};

// Send contact form notification email
export const sendContactNotificationEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> => {
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `
  };
  
  await transporter.sendMail(mailOptions);
};

// Send newsletter
export const sendNewsletter = async (
  recipients: string[],
  subject: string,
  content: string
): Promise<void> => {
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_FROM,
    bcc: recipients,
    subject,
    html: content
  };
  
  await transporter.sendMail(mailOptions);
};
```

## Integration with Next.js Frontend

### Frontend API Client (frontend/src/lib/api.ts)

```typescript
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('accessToken');
    
    // If token exists, add to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If error is 401 and not already retrying
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Get refresh token
        const refreshToken = localStorage.getItem('refreshToken');
        
        if (!refreshToken) {
          // No refresh token, redirect to login
          window.location.href = '/login';
          return Promise.reject(error);
        }
        
        // Attempt to refresh token
        const response = await axios.post(`${API_URL}/auth/refresh-token`, {
          refreshToken
        });
        
        // If successful, update token and retry
        if (response.data.accessToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          
          // Update authorization header
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          
          // Retry original request
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: any) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (data: any) => api.put('/auth/me', data),
  forgotPassword: (email: string) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token: string, password: string) => api.post('/auth/reset-password', { token, password })
};

// Projects API
export const projectsAPI = {
  getProjects: (params?: any) => api.get('/projects', { params }),
  getProjectCategories: () => api.get('/projects/categories'),
  getProject: (id: string) => api.get(`/projects/${id}`),
  createProject: (data: any) => api.post('/projects', data),
  updateProject: (id: string, data: any) => api.put(`/projects/${id}`, data),
  deleteProject: (id: string) => api.delete(`/projects/${id}`)
};

// Services API
export const servicesAPI = {
  getServices: () => api.get('/services'),
  getService: (id: string) => api.get(`/services/${id}`),
  createService: (data: any) => api.post('/services', data),
  updateService: (id: string, data: any) => api.put(`/services/${id}`, data),
  deleteService: (id: string) => api.delete(`/services/${id}`)
};

// Testimonials API
export const testimonialsAPI = {
  getTestimonials: (params?: any) => api.get('/testimonials', { params }),
  getTestimonial: (id: string) => api.get(`/testimonials/${id}`),
  createTestimonial: (data: any) => api.post('/testimonials', data),
  updateTestimonial: (id: string, data: any) => api.put(`/testimonials/${id}`, data),
  deleteTestimonial: (id: string) => api.delete(`/testimonials/${id}`)
};

// Contact API
export const contactAPI = {
  submitContactForm: (data: any) => api.post('/contact', data),
  getSubmissions: (params?: any) => api.get('/contact/submissions', { params }),
  updateSubmissionStatus: (id: string, status: string) => api.put(`/contact/submissions/${id}/status`, { status }),
  deleteSubmission: (id: string) => api.delete(`/contact/submissions/${id}`)
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (email: string) => api.post('/newsletter/subscribe', { email }),
  unsubscribe: (email: string) => api.post('/newsletter/unsubscribe', { email }),
  getSubscribers: (params?: any) => api.get('/newsletter/subscribers', { params })
};

export default api;
```

### Authentication Context (frontend/src/context/AuthContext.tsx)

```typescript
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '@/lib/api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  updateProfile: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('accessToken');
      
      if (token) {
        try {
          const response = await authAPI.getProfile();
          setUser(response.data.user);
        } catch (error) {
          // Token invalid, clear storage
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await authAPI.login({ email, password });
      
      // Save tokens
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      // Set user
      setUser(response.data.user);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (data: any) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await authAPI.register(data);
      
      // Save tokens
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      // Set user
      setUser(response.data.user);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Registration failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  // Update profile function
  const updateProfile = async (data: any) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await authAPI.updateProfile(data);
      
      // Update user
      setUser(response.data.user);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Profile update failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
```

## Deployment Strategy

### Development Environment

1. **Local Development**:
   - Run Next.js frontend: `npm run dev` (port 3000)
   - Run Express backend: `npm run dev` (port 5000)
   - Use MongoDB locally or connect to MongoDB Atlas

### Production Deployment Options

1. **Separate Deployment**:
   - Deploy Next.js frontend to Vercel
   - Deploy Express backend to a VPS or cloud service (AWS, GCP, DigitalOcean)
   - Use MongoDB Atlas for the database

2. **Containerized Deployment**:
   - Create Docker containers for frontend and backend
   - Use Docker Compose for local testing
   - Deploy to a container orchestration service (Kubernetes, AWS ECS)

### Docker Configuration

#### Backend Dockerfile (backend/Dockerfile)

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

#### Frontend Dockerfile (frontend/Dockerfile)

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Docker Compose (docker-compose.yml)

```yaml
version: '3'

services:
  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:5000/api
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
    ports:
      - "5000:5000"
    environment:
      - PORT=5000
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/my-website
      - JWT_SECRET=your_jwt_secret_key
      - JWT_EXPIRES_IN=7d
      - JWT_REFRESH_SECRET=your_refresh_token_secret
      - JWT_REFRESH_EXPIRES_IN=30d
      - CORS_ORIGIN=http://frontend:3000
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

## Security Best Practices

### API Security

1. **Input Validation**:
   - Use express-validator for request validation
   - Validate all user inputs
   - Sanitize inputs to prevent injection attacks

2. **Authentication**:
   - Use JWT for stateless authentication
   - Implement refresh tokens for better security
   - Store tokens securely (HTTP-only cookies or secure localStorage handling)

3. **Authorization**:
   - Implement role-based access control
   - Protect sensitive routes with middleware
   - Validate permissions for each request

4. **CORS Configuration**:
   - Restrict allowed origins
   - Only allow necessary HTTP methods
   - Set appropriate headers

5. **Rate Limiting**:
   - Implement rate limiting for API endpoints
   - Prevent brute force attacks
   - Protect against DoS attacks

### Example Rate Limiting Implementation

```typescript
import rateLimit from 'express-rate-limit';

// Apply rate limiting to all requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply to all requests
app.use(apiLimiter);

// More strict rate limiting for authentication routes
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 login requests per hour
  message: 'Too many login attempts, please try again after an hour',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply to authentication routes
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/forgot-password', authLimiter);
```

### Data Security

1. **Password Hashing**:
   - Use bcrypt for password hashing
   - Implement proper salt rounds
   - Never store plain text passwords

2. **Environment Variables**:
   - Use .env files for configuration
   - Keep sensitive information out of code
   - Use different environment variables for development and production

3. **HTTPS**:
   - Always use HTTPS in production
   - Configure proper SSL certificates
   - Implement HSTS headers

4. **Database Security**:
   - Use strong authentication for database access
   - Implement proper access controls
   - Regularly backup data

## Conclusion

This guide provides a comprehensive implementation plan for creating a backend system using Node.js with Express and MongoDB that integrates with the existing Next.js frontend. By following these steps, you can create a robust, secure, and scalable backend that supports all the features required by the frontend application.

The key components of this implementation include:

1. **Express.js Server**: Handling API requests with proper routing and middleware
2. **MongoDB Database**: Storing application data with Mongoose models
3. **Authentication System**: JWT-based authentication with secure token handling
4. **API Endpoints**: RESTful endpoints for all required functionality
5. **Frontend Integration**: API client and authentication context for the Next.js frontend
6. **Deployment Strategy**: Options for deploying the application in production
7. **Security Best Practices**: Guidelines for securing the application

By implementing this backend, you will have a complete full-stack application that provides all the functionality needed for the website, including user authentication, content management, and form handling.