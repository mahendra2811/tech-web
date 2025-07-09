import Link from "next/link";

// Dashboard card component
function DashboardCard({
  title,
  count,
  href,
}: {
  title: string;
  count: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
          <span className="h-6 w-6 text-white">{/* Icon would go here */}</span>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              {title}
            </dt>
            <dd>
              <div className="text-lg font-medium text-gray-900 dark:text-white">
                {count}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </Link>
  );
}

// Stats for the dashboard
// In a real application, these would be fetched from the API
const stats = [
  { title: "Total Projects", count: 12, href: "/admin/projects" },
  { title: "Active Services", count: 8, href: "/admin/services" },
  { title: "Contact Submissions", count: 24, href: "/admin/contacts" },
  { title: "Newsletter Subscribers", count: 156, href: "/admin/newsletter" },
];

// Recent activity items
// In a real application, these would be fetched from the API
const recentActivity = [
  { id: 1, type: "project", action: "created", name: "E-Commerce Platform", date: "2 hours ago" },
  { id: 2, type: "contact", action: "received", name: "John Doe", date: "5 hours ago" },
  { id: 3, type: "service", action: "updated", name: "Web Development", date: "1 day ago" },
  { id: 4, type: "newsletter", action: "subscribed", name: "jane@example.com", date: "2 days ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <div>
          <span className="relative inline-flex">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Refresh Data
            </button>
          </span>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            count={stat.count}
            href={stat.href}
          />
        ))}
      </div>

      {/* Recent activity */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Recent Activity
          </h3>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentActivity.map((activity) => (
            <li key={activity.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 truncate">
                    {activity.type === "project" && "Project"}
                    {activity.type === "contact" && "Contact"}
                    {activity.type === "service" && "Service"}
                    {activity.type === "newsletter" && "Newsletter"}
                    {" " + activity.action}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                      {activity.date}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      {activity.name}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick actions */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Quick Actions
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Add New Project
          </Link>
          <Link
            href="/admin/services/new"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Add New Service
          </Link>
          <Link
            href="/admin/contacts"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            View Contact Submissions
          </Link>
          <Link
            href="/admin/newsletter/send"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Send Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
}