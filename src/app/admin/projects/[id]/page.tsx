'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Project interface
interface Project {
  id: string;
  title: string;
  slug?: string;
  category: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  techStack?: { name: string; icon?: string }[];
  image?: string;
  gallery?: string[];
  featured: boolean;
  projectDate: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isOpenSource?: boolean;
  status: 'active' | 'inactive';
}

// Mock project data - in a real application, this would be fetched from the API
const mockProject: Project = {
  id: '1',
  title: 'E-Commerce Platform',
  slug: 'e-commerce-platform',
  category: 'Web Development',
  description:
    'A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.',
  detailedDescription:
    'This comprehensive e-commerce platform was built to provide businesses with a scalable and customizable solution for online retail. The platform includes robust inventory management, secure payment processing with Stripe integration, and detailed customer analytics to help businesses make data-driven decisions.',
  technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
  techStack: [
    { name: 'Next.js', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'MongoDB', icon: 'database' },
    { name: 'Stripe', icon: 'creditcard' },
  ],
  image: 'https://example.com/images/ecommerce.jpg',
  gallery: [
    'https://example.com/images/ecommerce-1.jpg',
    'https://example.com/images/ecommerce-2.jpg',
  ],
  featured: true,
  projectDate: '2025-05-15',
  tags: ['E-Commerce', 'Full Stack', 'Web App'],
  githubUrl: 'https://github.com/example/ecommerce-platform',
  liveUrl: 'https://example-ecommerce.com',
  isOpenSource: true,
  status: 'active',
};

// Mock categories - in a real application, these would be fetched from the API
const categories = ['Web Development', 'Mobile Development', 'Custom Software', 'AI', 'ML'];

export default function ProjectEditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isNewProject = params.id === 'new';
  const [project, setProject] = useState<Project>(
    isNewProject
      ? {
          id: '',
          title: '',
          category: '',
          description: '',
          technologies: [],
          featured: false,
          projectDate: new Date().toISOString().split('T')[0],
          status: 'active',
        }
      : mockProject
  );

  const [technology, setTechnology] = useState('');
  const [tag, setTag] = useState('');
  const [galleryUrl, setGalleryUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add technology to the list
  const addTechnology = () => {
    if (technology.trim() && !project.technologies.includes(technology.trim())) {
      setProject({
        ...project,
        technologies: [...project.technologies, technology.trim()],
      });
      setTechnology('');
    }
  };

  // Remove technology from the list
  const removeTechnology = (tech: string) => {
    setProject({
      ...project,
      technologies: project.technologies.filter((t) => t !== tech),
    });
  };

  // Add tag to the list
  const addTag = () => {
    if (tag.trim() && project.tags && !project.tags.includes(tag.trim())) {
      setProject({
        ...project,
        tags: [...project.tags, tag.trim()],
      });
      setTag('');
    } else if (tag.trim() && !project.tags) {
      setProject({
        ...project,
        tags: [tag.trim()],
      });
      setTag('');
    }
  };

  // Remove tag from the list
  const removeTag = (tagToRemove: string) => {
    if (project.tags) {
      setProject({
        ...project,
        tags: project.tags.filter((t) => t !== tagToRemove),
      });
    }
  };

  // Add gallery image URL to the list
  const addGalleryImage = () => {
    if (galleryUrl.trim()) {
      // Check if gallery exists and has less than 5 images
      if (project.gallery && project.gallery.length < 5) {
        setProject({
          ...project,
          gallery: [...project.gallery, galleryUrl.trim()],
        });
        setGalleryUrl('');
      } else if (!project.gallery) {
        setProject({
          ...project,
          gallery: [galleryUrl.trim()],
        });
        setGalleryUrl('');
      } else {
        // Show error or notification that max 5 images are allowed
        alert('Maximum 5 gallery images are allowed');
      }
    }
  };

  // Remove gallery image from the list
  const removeGalleryImage = (url: string) => {
    if (project.gallery) {
      setProject({
        ...project,
        gallery: project.gallery.filter((imageUrl) => imageUrl !== url),
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, this would be an API call to save the project
      console.log('Saving project:', project);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to projects list
      router.push('/admin/projects');
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setProject({ ...project, [name]: checked });
    } else {
      setProject({ ...project, [name]: value });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {isNewProject ? 'Add New Project' : 'Edit Project'}
        </h1>
        <div className="flex space-x-3">
          <Link
            href="/admin/projects"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            form="project-form"
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save Project'}
          </button>
        </div>
      </div>

      <form id="project-form" onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Project Information
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Basic information about the project.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    value={project.title}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={project.category}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Short Description{' '}
                    <span className="text-xs text-gray-500">(Max 200 characters)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    required
                    maxLength={200}
                    value={project.description}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                  <div className="mt-1 text-xs text-gray-500 flex justify-end">
                    {project.description.length}/200 characters
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="detailedDescription"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Detailed Description
                  </label>
                  <textarea
                    id="detailedDescription"
                    name="detailedDescription"
                    rows={6}
                    value={project.detailedDescription || ''}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Main Image URL (Required)
                  </label>
                  <input
                    type="url"
                    name="image"
                    id="image"
                    value={project.image || ''}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="galleryUrl"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Gallery Images (Optional, max 5)
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="url"
                      name="galleryUrl"
                      id="galleryUrl"
                      value={galleryUrl}
                      onChange={(e) => setGalleryUrl(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      placeholder="Enter image URL"
                    />
                    <button
                      type="button"
                      onClick={addGalleryImage}
                      disabled={project.gallery && project.gallery.length >= 5}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-r-md hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
                    >
                      Add
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {project.gallery
                      ? `${project.gallery.length}/5 images added`
                      : '0/5 images added'}
                  </p>

                  {/* Gallery preview */}
                  {project.gallery && project.gallery.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Gallery Preview
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {project.gallery.map((url, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                              <img
                                src={url}
                                alt={`Gallery image ${index + 1}`}
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    'https://via.placeholder.com/300x200?text=Image+Error';
                                }}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(url)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="projectDate"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Project Date
                  </label>
                  <input
                    type="date"
                    name="projectDate"
                    id="projectDate"
                    required
                    value={project.projectDate}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    required
                    value={project.status}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className="flex items-center h-full">
                    <input
                      id="featured"
                      name="featured"
                      type="checkbox"
                      checked={project.featured}
                      onChange={(e) =>
                        setProject({
                          ...project,
                          featured: e.target.checked,
                        })
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-700 rounded"
                    />
                    <label
                      htmlFor="featured"
                      className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                    >
                      Featured Project
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Technologies
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Technologies used in the project.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="technology"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Add Technology
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="technology"
                      id="technology"
                      value={technology}
                      onChange={(e) => setTechnology(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      placeholder="e.g. React, Node.js, MongoDB"
                    />
                    <button
                      type="button"
                      onClick={addTechnology}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-r-md hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Technologies
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                      >
                        {tech}
                        <button
                          type="button"
                          onClick={() => removeTechnology(tech)}
                          className="ml-1.5 inline-flex text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                    {project.technologies.length === 0 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        No technologies added yet.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Additional Information
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Extra details about the project.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="githubUrl"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    name="githubUrl"
                    id="githubUrl"
                    value={project.githubUrl || ''}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="liveUrl"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Live URL
                  </label>
                  <input
                    type="url"
                    name="liveUrl"
                    id="liveUrl"
                    value={project.liveUrl || ''}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <div className="flex items-center">
                    <input
                      id="isOpenSource"
                      name="isOpenSource"
                      type="checkbox"
                      checked={project.isOpenSource || false}
                      onChange={(e) =>
                        setProject({
                          ...project,
                          isOpenSource: e.target.checked,
                        })
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-700 rounded"
                    />
                    <label
                      htmlFor="isOpenSource"
                      className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                    >
                      Open Source Project
                    </label>
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="tag"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Add Tag
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="tag"
                      id="tag"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      placeholder="e.g. Web App, Mobile, API"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-r-md hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="col-span-6">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Tags
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags?.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                      >
                        {t}
                        <button
                          type="button"
                          onClick={() => removeTag(t)}
                          className="ml-1.5 inline-flex text-green-400 hover:text-green-600 dark:text-green-300 dark:hover:text-green-100"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                    {!project.tags || project.tags.length === 0 ? (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        No tags added yet.
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
