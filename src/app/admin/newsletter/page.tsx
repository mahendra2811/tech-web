"use client";

import { useState, useEffect } from "react";
import apiService from "@/lib/api";

// Newsletter subscriber interface
interface Subscriber {
  _id: string;
  email: string;
  status: "active" | "unsubscribed";
  createdAt: string;
  lastEmailSent?: string;
}

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showSendModal, setShowSendModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  // Fetch subscribers when component mounts
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        setLoading(true);
        const response = await apiService.newsletter.getSubscribers();
        setSubscribers(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching newsletter subscribers:', err);
        setError('Failed to load subscribers. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchSubscribers();
  }, []);

  // Filter subscribers based on search term and status filter
  const filteredSubscribers = subscribers.filter((subscriber) => {
    const matchesSearch = subscriber.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    
    const matchesStatus =
      statusFilter === "all" || subscriber.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Update subscriber status
  const updateStatus = async (id: string, status: "active" | "unsubscribed") => {
    try {
      const email = subscribers.find(sub => sub._id === id)?.email;
      if (!email) return;
      
      if (status === "active") {
        await apiService.newsletter.subscribe(email);
      } else {
        await apiService.newsletter.unsubscribe(email);
      }
      
      setSubscribers(
        subscribers.map((subscriber) =>
          subscriber._id === id ? { ...subscriber, status } : subscriber
        )
      );
    } catch (err) {
      console.error('Error updating subscriber status:', err);
      setError('Failed to update subscriber status. Please try again.');
    }
  };

  // Delete subscriber
  const deleteSubscriber = async (id: string) => {
    if (confirm("Are you sure you want to delete this subscriber?")) {
      try {
        // Note: Backend API might not have a direct delete endpoint
        // This is a UI-only deletion for now
        setSubscribers(subscribers.filter((subscriber) => subscriber._id !== id));
      } catch (err) {
        console.error('Error deleting subscriber:', err);
        setError('Failed to delete subscriber. Please try again.');
      }
    }
  };

  // Add new subscriber
  const addSubscriber = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEmail.trim()) return;
    
    // Check if email already exists
    if (subscribers.some((sub) => sub.email === newEmail.trim())) {
      alert("This email is already subscribed.");
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiService.newsletter.subscribe(newEmail.trim());
      
      // Refresh the subscribers list
      const response = await apiService.newsletter.getSubscribers();
      setSubscribers(response.data);
      
      setNewEmail("");
      setError(null);
    } catch (err) {
      console.error('Error adding subscriber:', err);
      setError('Failed to add subscriber. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Send newsletter
  const sendNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      await apiService.newsletter.sendNewsletter({
        subject: emailSubject,
        content: emailContent
      });
      
      // Update lastEmailSent for all active subscribers
      const now = new Date().toISOString();
      setSubscribers(
        subscribers.map((subscriber) =>
          subscriber.status === "active"
            ? { ...subscriber, lastEmailSent: now }
            : subscriber
        )
      );
      
      // Reset form and close modal
      setEmailSubject("");
      setEmailContent("");
      setShowSendModal(false);
      
      alert("Newsletter sent successfully!");
    } catch (err) {
      console.error('Error sending newsletter:', err);
      setError('Failed to send newsletter. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Newsletter Subscribers
        </h1>
        <button
          onClick={() => setShowSendModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Send Newsletter
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Error</h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {!loading && (
        <>
          {/* Add subscriber form */}
          <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Add New Subscriber
            </h2>
            <form onSubmit={addSubscriber} className="flex gap-4">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                  placeholder="Enter email address..."
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add Subscriber"}
              </button>
            </form>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Search
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                    placeholder="Search by email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="unsubscribed">Unsubscribed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Subscribers table */}
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Subscribed On
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Last Email Sent
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredSubscribers.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                            No subscribers found
                          </td>
                        </tr>
                      ) : (
                        filteredSubscribers.map((subscriber) => (
                          <tr key={subscriber._id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {subscriber.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  subscriber.status === "active"
                                    ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                                    : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                                }`}
                              >
                                {subscriber.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              {new Date(subscriber.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              {subscriber.lastEmailSent
                                ? new Date(subscriber.lastEmailSent).toLocaleDateString()
                                : "Never"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                {subscriber.status === "active" ? (
                                  <button
                                    onClick={() =>
                                      updateStatus(subscriber._id, "unsubscribed")
                                    }
                                    className="text-yellow-600 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-300"
                                  >
                                    Unsubscribe
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => updateStatus(subscriber._id, "active")}
                                    className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                                  >
                                    Reactivate
                                  </button>
                                )}
                                <button
                                  onClick={() => deleteSubscriber(subscriber._id)}
                                  className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Send newsletter modal */}
      {showSendModal && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => !isSubmitting && setShowSendModal(false)}
            >
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={sendNewsletter}>
                <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                        id="modal-title"
                      >
                        Send Newsletter
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label
                            htmlFor="email-subject"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            name="email-subject"
                            id="email-subject"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                            value={emailSubject}
                            onChange={(e) => setEmailSubject(e.target.value)}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email-content"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Content (HTML supported)
                          </label>
                          <textarea
                            id="email-content"
                            name="email-content"
                            rows={10}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md"
                            value={emailContent}
                            onChange={(e) => setEmailContent(e.target.value)}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            This newsletter will be sent to{" "}
                            <span className="font-medium">
                              {
                                subscribers.filter(
                                  (sub) => sub.status === "active"
                                ).length
                              }
                            </span>{" "}
                            active subscribers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Newsletter"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowSendModal(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}