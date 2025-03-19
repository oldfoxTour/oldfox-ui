import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../slices/bookingSlice";

function BookingForm({ isOpen, onClose, postId }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.booking.loading);
  const error = useSelector((state) => state.booking.error);

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    travelers: 1,
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: name === 'travelers' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBooking({ ...bookingData, postId }));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-sky-500">Book Your Trip</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={bookingData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={bookingData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              required 
            />
          </div>
          <div>
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">Travelers</label>
            <input 
              type="number" 
              id="travelers" 
              name="travelers"
              value={bookingData.travelers} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              min="1" 
              required 
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input 
              type="date" 
              id="date" 
              name="date"
              value={bookingData.date} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              required 
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-md" disabled={loading}>
              {loading ? 'Booking...' : 'Book Now'}
            </button>
            <button onClick={onClose} type="button" className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md">Cancel</button>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default BookingForm;


