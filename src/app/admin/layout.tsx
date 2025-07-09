"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";

// Admin sidebar navigation
const adminNavigation = [
  { name: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
  { name: "Projects", href: "/admin/projects", icon: "FolderKanban" },
  { name: "Services", href: "/admin/services", icon: "Briefcase" },
  { name: "Contact Submissions", href: "/admin/contacts", icon: "MessageSquare" },
  { name: "Newsletter", href: "/admin/newsletter", icon: "Mail" },
];

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  
  // Handle logout
  const handleLogout = () => {
    // Clear the auth token cookie
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // Redirect to login page
    router.push("/login");
  };
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              {siteConfig.name} Admin
            </Link>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {adminNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="mr-3 h-6 w-6">{/* Icon would go here */}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 shadow">
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden px-4 text-gray-500 dark:text-gray-400 focus:outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                {/* Menu icon would go here */}
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white md:hidden">
                Admin Panel
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleLogout}
                      className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Logout
                    </button>
                    <button
                      type="button"
                      className="max-w-xs bg-white dark:bg-gray-800 rounded-full flex items-center text-sm focus:outline-none"
                      id="user-menu-button"
                    >
                      <span className="sr-only">Open user menu</span>
                      <span className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                        A
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}