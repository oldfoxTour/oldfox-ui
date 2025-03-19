import React, { useState, useContext, useEffect } from "react";
import { Bell, Mail, Search, Settings, ChevronDown, MoreVertical, Users, BookOpen, Calendar, Package, LogOut, Menu } from 'lucide-react';
import AddNewTrip from "./AddNewTrip";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { UsersList } from './users-list';
import { ProgressCircle } from './progress-circle';
import { TripPanel } from './trip-panel';
import logo from '../IMAGE/logo.jpg';
import { ProductManagement } from './product-management';
import { SettingsPanel } from './settings-panel';
import { NotificationsPanel } from './notifications-panel';

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingTrip, setIsAddingTrip] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const [notificationCount, setNotificationCount] = useState(3);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { user, getProfile, logout } = useContext(AuthContext);
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [recentBookings, setRecentBookings] = useState([
    { id: 1, name: "New Delhi To Dhaka", type: "Oneway", price: "50$", status: "Pending" },
    { id: 2, name: "London To Paris", type: "Round Trip", price: "150$", status: "Active" },
    { id: 3, name: "Tokyo To Seoul", type: "Oneway", price: "80$", status: "Denied" },
  ]);

  useEffect(() => {
    if (!user) {
      getProfile();
    }
  }, [user, getProfile]);

  const handleLogout = async () => {
    try {
      if (!logout || typeof logout !== "function") {
        console.error("Logout function is not defined or not a function");
        return; // Exit early if logout is invalid
      }
      await logout(); // Call the logout function from AuthContext
    } catch (error) {
      console.error("Logout failed:", error.message); // Log any errors for debugging
    }
  };

  const stats = [
    { title: "Total Booked", value: "$24,590", change: "+12.08%" },
    { title: "30 Days Revenue", value: "$18,680", change: "+12.08%" },
    { title: "Total customers", value: "$50,680", change: "+12.08%" },
    { title: "Tour Packages", value: "$16,590", change: "+12.08%" },
  ];

  const handleAddNewTripClick = () => {
    setIsAddingTrip(true);
    setActiveLink("Trips");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowSettings(false);
    setShowNotifications(false);
    setIsAddingTrip(false);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setRecentBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  const renderMainContent = () => {
    if (showSettings) {
      return <SettingsPanel />;
    }

    if (showNotifications) {
      return <NotificationsPanel setNotificationCount={setNotificationCount} />;
    }

    if (activeLink === "Users") {
      return <UsersList />;
    }

    if (activeLink === "Products") {
      return <ProductManagement />;
    }

    if (activeLink === "Trips") {
      return isAddingTrip ? <AddNewTrip /> : <TripPanel onAddNewTrip={handleAddNewTripClick} />;
    }

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
            <div className="flex justify-around">
              <ProgressCircle percentage={92} label="Algorithms" color="sky" />
              <ProgressCircle percentage={83} label="Bookings" color="sky" />
            </div>
          </div>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-sm text-sky-500">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Bookings</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={20} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-4">Package Name</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b last:border-b-0">
                    <td className="py-4 flex items-center space-x-3">
                      <img
                        src="/placeholder.svg?height=32&width=32"
                        alt="User"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{booking.name}</span>
                    </td>
                    <td className="py-4">{booking.type}</td>
                    <td className="py-4">{booking.price}</td>
                    <td className="py-4">
                      <select
                        value={booking.status}
                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          booking.status === 'Active' ? 'bg-sky-100 text-sky-800' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Active">Active</option>
                        <option value="Denied">Denied</option>
                      </select>
                    </td>
                    <td className="py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  const sidebarItems = [
    { icon: BookOpen, label: 'Dashboard', value: 'dashboard' },
    { icon: Calendar, label: 'Trips', value: 'Trips' },
    { icon: Users, label: 'Users', value: 'Users' },
    { icon: Package, label: 'Products', value: 'Products' },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className={`w-64 bg-[#0da5ea] text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed md:relative z-50 md:translate-x-0`}>
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Smart Admin</span>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map(item => (
                <a
                  key={item.value}
                  href="#"
                  onClick={() => handleLinkClick(item.value)}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    activeLink === item.value ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-0 w-64 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-white/5"
            >
              <LogOut size={20} />
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 shadow-md">
            <div className="flex items-center justify-between p-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu size={20} />
              </button>
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  {activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setShowSettings(true);
                    setShowNotifications(false);
                    setActiveLink('');
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Settings size={20} />
                </button>
                
                <button
                  onClick={() => {
                    setShowNotifications(true);
                    setShowSettings(false);
                    setActiveLink('');
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative"
                >
                  <Bell size={20} />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {notificationCount}
                    </span>
                  )}
                </button>
                
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.profile?.url || "/placeholder.svg?height=32&width=32"}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="font-medium dark:text-white">
                    {user?.name || 'User'}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
            {renderMainContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
