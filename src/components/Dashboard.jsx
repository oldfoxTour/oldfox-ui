import React, { useState, useContext, useEffect } from "react";
import { Bell, Mail, Search, Settings, ChevronDown, MoreVertical, Users, BookOpen, Calendar, Package, LogOut, Menu } from 'lucide-react';
import AddNewTrip from "./AddNewTrip";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { UsersList } from './users-list';
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

  useEffect(() => {
    if (!user) {
      getProfile();
    }
  }, [user, getProfile]);

  const handleLogout = async () => {
    try {
      if (!logout || typeof logout !== "function") {
        console.error("Logout function is not defined or not a function");
        return;
      }
      await logout();
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

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
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8 max-w-2xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
          Welcome {user?.name || 'User'} to OldFox Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Manage your trips, users, and products with ease
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button 
            onClick={() => handleLinkClick('Trips')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Explore Trips
          </button>
          <button 
            onClick={() => handleLinkClick('Users')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            View Users
          </button>
        </div>
      </div>
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
        <aside className={`w-64 bg-gradient-to-b from-blue-600 to-indigo-600 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed md:relative z-50 md:translate-x-0 shadow-xl`}>
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-8">
              <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
              <span className="text-2xl font-extrabold tracking-tight">OldFox</span>
            </div>
            
            <nav className="space-y-3">
              {sidebarItems.map(item => (
                <a
                  key={item.value}
                  href="#"
                  onClick={() => handleLinkClick(item.value)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    activeLink === item.value 
                      ? 'bg-white/20 shadow-md' 
                      : 'hover:bg-white/10 hover:shadow-md'
                  }`}
                >
                  <item.icon size={22} className="text-white/90" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-0 w-64 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <LogOut size={22} className="text-white/90" />
              <span className="font-medium">Log Out</span>
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
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <Settings size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
                
                <button
                  onClick={() => {
                    setShowNotifications(true);
                    setShowSettings(false);
                    setActiveLink('');
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative transition-all duration-200"
                >
                  <Bell size={20} className="text-gray-600 dark:text-gray-300" />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md">
                      {notificationCount}
                    </span>
                  )}
                </button>
                
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.profile?.url || "/placeholder.svg?height=32&width=32"}
                    alt="User Avatar"
                    className="h-9 w-9 rounded-full shadow-md"
                  />
                  <span className="font-semibold text-gray-800 dark:text-white">
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