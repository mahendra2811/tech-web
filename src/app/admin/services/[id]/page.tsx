"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Service interface
interface Service {
  id: string;
  title: string;
  slug?: string;
  description: string;
  detailedDescription?: string;
  icon: string;
  features: string[];
  price?: {
    amount: number;
    currency: string;
    billingCycle?: "one-time" | "monthly" | "yearly";
  };
}

// Mock service data - in a real application, this would be fetched from the API
const mockService: Service = {
  id: "1",
  title: "Web Development",
  slug: "web-development",
  description: "Custom web applications tailored to your business needs.",
  detailedDescription:
    "Our web development services focus on creating custom, high-performance web applications that meet your specific business requirements. We use modern technologies and best practices to ensure your web application is scalable, secure, and user-friendly.",
  icon: "https://example.com/icons/web-dev.svg",
  features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
  price: {
    amount: 5000,
    currency: "USD",
    billingCycle: "one-time",
  },
};

export default function ServiceEditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isNewService = params.id === "new";
  const [service, setService] = useState<Service>(
    isNewService
      ? {
          id: "",
          title: "",
          description: "",
          icon: "",
          features: [],
        }
      : mockService
  );

  const [feature, setFeature] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add feature to the list
  const addFeature = () => {
    if (feature.trim() && !service.features.includes(feature.trim())) {
      setService({
        ...service,
        features: [...service.features, feature.trim()],
      });
      setFeature("");
    }
  };

  // Remove feature from the list
  const removeFeature = (featureToRemove: string) => {
    setService({
      ...service,
      features: service.features.filter((f) => f !== featureToRemove),
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, this would be an API call to save the service
      console.log("Saving service:", service);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to services list
      router.push("/admin/services");
    } catch (error) {
      console.error("Error saving service:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    if (name.startsWith("price.")) {
      const priceField = name.split(".")[1];
      const updatedPrice = {
        ...service.price,
        [priceField]: priceField === 'amount' ? Number(value) : value,
      };
      
      setService({
        ...service,
        price: updatedPrice as Service['price'],
      });
    } else {
      setService({ ...service, [name]: value });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {isNewService ? "Add New Service" : "Edit Service"}
        </h1>
        <div className="flex space-x-3">
          <Link
            href="/admin/services"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            form="service-form"
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save Service"}
          </button>
        </div>
      </div>

      <form id="service-form" onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Service Information
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Basic information about the service.
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
                    value={service.title}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Short Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    required
                    value={service.description}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
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
                    value={service.detailedDescription || ""}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="icon"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Icon URL
                  </label>
                  <input
                    type="url"
                    name="icon"
                    id="icon"
                    required
                    value={service.icon}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                    placeholder="https://example.com/icons/service.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Features
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Key features of the service.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="feature"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Add Feature
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="feature"
                      id="feature"
                      value={feature}
                      onChange={(e) => setFeature(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      placeholder="e.g. Responsive Design, 24/7 Support"
                    />
                    <button
                      type="button"
                      onClick={addFeature}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-r-md hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Features
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                      >
                        {feat}
                        <button
                          type="button"
                          onClick={() => removeFeature(feat)}
                          className="ml-1.5 inline-flex text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                    {service.features.length === 0 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        No features added yet.
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
                Pricing (Optional)
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Pricing information for the service.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="price.amount"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Price Amount
                  </label>
                  <input
                    type="number"
                    name="price.amount"
                    id="price.amount"
                    value={service.price?.amount || ""}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="price.currency"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Currency
                  </label>
                  <select
                    id="price.currency"
                    name="price.currency"
                    value={service.price?.currency || "USD"}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="price.billingCycle"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Billing Cycle
                  </label>
                  <select
                    id="price.billingCycle"
                    name="price.billingCycle"
                    value={service.price?.billingCycle || "one-time"}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="one-time">One-time</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}