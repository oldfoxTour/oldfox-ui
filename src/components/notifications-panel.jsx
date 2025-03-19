import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';

export function NotificationsPanel({ setNotificationCount }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Booking',
      message: 'You have a new booking from John Doe',
      time: '5 minutes ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Product Update',
      message: 'Your product "Tour Package" has been updated',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      title: 'System Update',
      message: 'System maintenance scheduled for tonight',
      time: '2 hours ago',
      unread: false,
    },
  ]);

  const closeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
    setNotificationCount(prev => prev - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm">
          {notifications.filter(n => n.unread).length} unread
        </span>
      </div>

      <div className="space-y-4">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.unread ? 'bg-purple-50 border-purple-100' : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`mt-1 ${notification.unread ? 'text-purple-500' : 'text-gray-400'}`}>
                  <Bell size={16} />
                </div>
                <div>
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                </div>
              </div>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => closeNotification(notification.id)}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

