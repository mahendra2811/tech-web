"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data - in a real application, this would be fetched from the API
const mockServices = [
  {
    id: "1",
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    icon: "https://example.com/icons/web-dev.svg",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications.",
    icon: "https://example.com/icons/mobile-dev.svg",
    features: ["iOS & Android", "Offline Functionality", "Push Notifications"],
  },
  {
    id: "3",
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience.",
    icon: "https://example.com/icons/ui-ux.svg",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    id: "4",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment.",
    icon: "https://example.com/icons/cloud.svg",
    features: ["AWS", "Azure", "Google Cloud"],
  },
  {
    id: "5",
    title: "DevOps",
    description: "Streamline development and operations processes.",
    icon: "https://example.com/icons/devops.svg",
    features: ["CI/CD", "Infrastructure as Code", "Monitoring"],
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState(mockServices);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services based on search term
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete service
  const deleteService = (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Services
        </h1>
        <Link
          href="/admin/services/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Add New Service
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="max-w-lg">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Search Services
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="search"
              id="search"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center">
                  {/* Icon would go here */}
                  <span className="text-blue-600 dark:text-blue-300">
                    {service.title.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Features:
                </h4>
                <ul className="mt-2 space-y-1">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex space-x-3">
                <Link
                  href={`/admin/services/${service.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteService(service.id)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredServices.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No services found. Try adjusting your search or add a new service.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}