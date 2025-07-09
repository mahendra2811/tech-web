import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    // Get the token from cookies (only in browser)
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split(';');
      const authCookie = cookies.find(cookie => cookie.trim().startsWith('auth_token='));
      const token = authCookie ? authCookie.trim().substring('auth_token='.length) : null;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.data);
      
      // Handle 401 Unauthorized errors (token expired, etc.)
      if (error.response.status === 401) {
        // Clear token cookie and redirect to login if needed
        if (typeof window !== 'undefined') {
          document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
          // Optionally redirect to login
          // window.location.href = '/login';
        }
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API Error: No response received', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// API service methods
const apiService = {
  // Auth endpoints
  auth: {
    login: (credentials: { email: string; password: string }) => 
      api.post('/auth/login', credentials),
    register: (userData: { name: string; email: string; password: string }) => 
      api.post('/auth/register', userData),
    forgotPassword: (email: string) => 
      api.post('/auth/forgot-password', { email }),
    resetPassword: (token: string, password: string) => 
      api.post('/auth/reset-password', { token, password }),
  },
  
  // Projects endpoints
  projects: {
    getAll: () => api.get('/projects'),
    getById: (id: string) => api.get(`/projects/${id}`),
  },
  
  // Services endpoints
  services: {
    getAll: () => api.get('/services'),
    getById: (id: string) => api.get(`/services/${id}`),
  },
  
  // Testimonials endpoints
  testimonials: {
    getAll: () => api.get('/testimonials'),
  },
  
  // Contact endpoints
  contact: {
    send: (formData: { name: string; email: string; phone?: string; subject: string; message: string }) =>
      api.post('/contact', formData),
    getSubmissions: () => api.get('/contact/submissions'),
    updateStatus: (id: string, status: 'new' | 'read' | 'responded' | 'archived') =>
      api.put(`/contact/submissions/${id}/status`, { status }),
    delete: (id: string) => api.delete(`/contact/submissions/${id}`),
  },
  
  // Newsletter endpoints
  newsletter: {
    subscribe: (email: string) => api.post('/newsletter/subscribe', { email }),
    unsubscribe: (email: string) => api.post('/newsletter/unsubscribe', { email }),
    getSubscribers: () => api.get('/newsletter/subscribers'),
    sendNewsletter: (data: { subject: string; content: string }) =>
      api.post('/newsletter/send', data),
  },
};

export default apiService;