import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import backgroundVideo from "../IMAGE/Back.mp4";

const BookingCard = ({ booking }) => {
  const { t } = useTranslation();
  const statusColors = {
    approved: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    canceled: 'bg-red-100 text-red-800'
  };

  const StatusIcon = {
    approved: CheckCircle,
    pending: Clock,
    canceled: XCircle
  };

  const Icon = StatusIcon[booking.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 sm:p-6 lg:p-8 xl:p-10">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg sm:text-xl font-semibold">{booking.destination}</h3>
        <span className={`px-2 py-1 rounded-full text-sm ${statusColors[booking.status]}`}>
          <Icon className="inline-block w-4 h-4 mr-1" />
          {t(`tabs.${booking.status}`)}
        </span>
      </div>
      <p className="text-gray-600 mb-2">{t('labels.date')}: {booking.date}</p>
      <p className="text-gray-600 mb-2">{t('labels.guests')}: {booking.guests}</p>
      <p className="font-semibold">{t('labels.total')}: ${booking.total}</p>
    </div>
  );
};

export default function MyBookings() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const bookings = [
    { id: 1, destination: 'Paris', date: '2024-06-15', guests: 2, total: 1500, status: 'approved' },
    { id: 2, destination: 'Tokyo', date: '2024-07-20', guests: 1, total: 2000, status: 'pending' },
    { id: 3, destination: 'New York', date: '2024-08-10', guests: 3, total: 2500, status: 'canceled' },
    { id: 4, destination: 'Rome', date: '2024-09-05', guests: 2, total: 1800, status: 'approved' },
    { id: 5, destination: 'Bali', date: '2024-10-15', guests: 2, total: 2200, status: 'pending' },
  ];

  const filteredBookings = activeTab === 'all'
    ? bookings
    : bookings.filter(booking => booking.status === activeTab);

  return (
    <div className="relative min-h-screen">
      <video
        src={backgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      ></video>

      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-lg mt-14">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">{t('title')}</h1>
          </header>
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center lg:flex-row sm:flex-col sm:items-start sm:border-b sm:border-primary/30">
              {['all', 'approved', 'pending', 'canceled'].map((tab) => (
                <li key={tab} className="w-full sm:w-auto">
                  <button
                    className={`px-4 py-2 font-semibold w-full text-center sm:text-left ${activeTab === tab
                      ? 'text-sky-500 border-b-2 border-sky-500'
                      : 'text-primary/60 hover:text-primary'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {t(`tabs.${tab}`)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <main>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              {activeTab === 'all'
                ? t('headings.all_bookings')
                : t(`headings.${activeTab}_bookings`)}
            </h2>
            {filteredBookings.length > 0 ? (
              filteredBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <p className="text-gray-600">{t('labels.no_bookings')}</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
