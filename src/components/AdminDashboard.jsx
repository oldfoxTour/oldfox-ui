import React, { useState } from 'react';
import { Bell, ChevronDown, Home, Menu, Search, Settings, Users, X } from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-2 lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="text-xl font-bold">Admin</div>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">Dashboard</a>
          <a href="#" className="hover:text-gray-300">Trips</a>
          <a href="#" className="hover:text-gray-300">Users</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Settings className="h-6 w-6" />
          <Bell className="h-6 w-6" />
          <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full" />
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-64 bg-blue-100 p-4 flex flex-col absolute lg:relative z-10 h-full`}>
          <button className="lg:hidden absolute top-2 right-2" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2 mb-6">
            <Home className="h-6 w-6 text-blue-500" />
            <span className="font-semibold text-blue-800">Dashboard</span>
          </div>
          <a href="/new-trip" className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-blue-200 text-sm sm:text-base sm:py-2 sm:px-4">
            <span className="text-blue-800">Add New Trip</span>
          </a>
          <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-blue-200">
            <span className="text-blue-800">Bookings</span>
          </a>
          <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-blue-200">
            <span className="text-blue-800">Manage Trips</span>
          </a>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Booked" value="$24,590" percentage="+12.05%" color="bg-blue-500" />
            <StatCard title="30 Days Revenue" value="$18,680" percentage="+8.05%" color="bg-pink-500" />
            <StatCard title="Total Customers" value="$50,680" percentage="+2.05%" color="bg-green-500" />
            <StatCard title="Total Packages" value="$16,590" percentage="+12.05%" color="bg-purple-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PendingTaskCard />
            <RecentBookingCard />
          </div>
        </main>
      </div>

      {/* Footer User Profile */}
      <div className="bg-white border-t p-4 flex items-center space-x-3">
        <img src="/placeholder.svg?height=40&width=40" alt="Amanda" className="h-10 w-10 rounded-full" />
        <div>
          <div className="font-semibold">Amanda</div>
          <a href="#" className="text-sm text-blue-500">View profile</a>
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, percentage, color }) => (
  <div className={`${color} text-white rounded-lg p-4 flex flex-col justify-between`}>
    <div className="text-sm opacity-80">{title}</div>
    <div className="text-2xl font-bold mt-2">{value}</div>
    <div className="text-sm mt-2">{percentage}</div>
  </div>
);

const PendingTaskCard = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Pending Task</h2>
      <ChevronDown className="h-5 w-5 text-gray-500" />
    </div>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Pending Approval</span>
          <span className="text-sm font-semibold">$1,500.00</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">From: Emeka Travels To: George Travels</div>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded text-sm">Reject</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm">Approve</button>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Unanswered Reviews</span>
          <span className="text-sm font-semibold">$2,132.00</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">From: Sophie Nkechinyere Plantation Comm</div>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded text-sm">Details</button>
          <button className="px-4 py-2 bg-gray-200 rounded text-sm">History</button>
        </div>
      </div>
    </div>
  </div>
);

const RecentBookingCard = () => (
  <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Recent Booking</h2>
      <ChevronDown className="h-5 w-5 text-gray-500" />
    </div>
    <table className="w-full min-w-[500px]">
      <thead>
        <tr className="text-left text-sm text-gray-600">
          <th className="pb-2">Package Name</th>
          <th className="pb-2">Type</th>
          <th className="pb-2">Price</th>
          <th className="pb-2">Status</th>
          <th className="pb-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, index) => (
          <tr key={index} className="border-t">
            <td className="py-2 flex items-center space-x-2">
              <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full" />
              <span className="text-sm">New Delhi To Shimla</span>
            </td>
            <td className="py-2 text-sm">One-day</td>
            <td className="py-2 text-sm">50$</td>
            <td className="py-2 text-sm text-blue-500">Pending</td>
            <td className="py-2">
              <button className="text-blue-500 text-sm">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminDashboard;
