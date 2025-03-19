import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Plus } from 'lucide-react';
import { addPost } from '../slices/postSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function AddNewTrip() {
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  const [tripCost, setTripCost] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [postDate, setPostDate] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [sites, setSites] = useState([{ name: '', siteDate: '' }]);
  const [trips, setTrips] = useState([{ title: '', content: '', price: '', tripDate: '' }]);
  const fileInputRef = useRef(null);
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('destination', destination);
    formData.append('price', tripCost);
    formData.append('currency', currency);
    formData.append('postDate', postDate);
    formData.append('content', description);
    formData.append('sites', JSON.stringify(sites));
    formData.append('trips', JSON.stringify(trips));
    if (fileInputRef.current?.files[0]) {
      formData.append('file', fileInputRef.current.files[0]);
    }

    try {
      const response = await dispatch(addPost(formData)).unwrap(); // Await and unwrap the response
      toast.success(response.message || 'Trip added successfully!'); // Use success message from response
      // Reset form fields
      setTitle('');
      setDestination('');
      setTripCost('');
      setCurrency('USD');
      setPostDate('');
      setDescription('');
      setPhoto(null);
      setSites([{ name: '', siteDate: '' }]);
      setTrips([{ title: '', content: '', price: '', tripDate: '' }]);
      // Refresh and navigate to TripPanel
      navigate('/dashboard/trip-panel');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add trip');
    }
  };

  // Handler for adding a new site
  const handleAddSite = () => {
    setSites([...sites, { name: '', siteDate: '' }]);
  };

  // Handler for changing site details
  const handleSiteChange = (index, field, value) => {
    const updatedSites = [...sites];
    updatedSites[index][field] = value;
    setSites(updatedSites);
  };

  // Handler for removing a site
  const handleRemoveSite = (index) => {
    const updatedSites = sites.filter((_, i) => i !== index);
    setSites(updatedSites);
  };

  // Handler for adding a new trip
  const handleAddTrip = () => {
    setTrips([...trips, { title: '', content: '', price: '', tripDate: '' }]);
  };

  // Handler for changing trip details
  const handleTripChange = (index, field, value) => {
    const updatedTrips = [...trips];
    updatedTrips[index][field] = value;
    setTrips(updatedTrips);
  };

  // Handler for removing a trip
  const handleRemoveTrip = (index) => {
    const updatedTrips = trips.filter((_, i) => i !== index);
    setTrips(updatedTrips);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">New Trip Card</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Trip Cost"
            value={tripCost}
            onChange={(e) => setTripCost(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="appearance-none w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="USD">USD</option>
            <option value="RWF">RWF</option>
          </select>
        </div>
        <input
          type="date"
          value={postDate}
          onChange={(e) => setPostDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        ></textarea>

        {/* File upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Choose Trip Image</label>
          <input
            ref={fileInputRef}
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Selected image */}
        {photo && (
          <div className="mt-2">
            <div className="flex items-center mb-2">
              <p className="mr-2">{photo.name}</p>
              <button
                type="button"
                onClick={() => setPhoto(null)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        {/* Sites Section */}
        <h2 className="text-lg font-semibold">Sites</h2>
        {sites.map((site, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              placeholder="Site Name"
              value={site.name}
              onChange={(e) => handleSiteChange(index, 'name', e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={site.siteDate}
              onChange={(e) => handleSiteChange(index, 'siteDate', e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => handleRemoveSite(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSite}
          className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Site
        </button>

        {/* Trips Section */}
        <h2 className="text-lg font-semibold">Trips</h2>
        {trips.map((trip, index) => (
          <div key={index} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Trip Title"
              value={trip.title}
              onChange={(e) => handleTripChange(index, 'title', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Trip Content"
              value={trip.content}
              onChange={(e) => handleTripChange(index, 'content', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-16"
            ></textarea>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Price"
                value={trip.price}
                onChange={(e) => handleTripChange(index, 'price', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={trip.tripDate}
                onChange={(e) => handleTripChange(index, 'tripDate', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemoveTrip(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddTrip}
          className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Trip
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Trip
        </button>
      </form>

      {/* ToastContainer for Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
