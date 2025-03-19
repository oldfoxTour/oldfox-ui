import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Edit, Trash } from 'lucide-react';
import { fetchPosts, removePost } from '../slices/postSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa';

export function TripPanel({ onAddNewTrip }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const trips = useSelector((state) => {
    const posts = state.posts.posts;
    console.log("Fetched posts:", posts);

    if (Array.isArray(posts)) {
      return posts.flatMap(post => 
        (post.trips || []).map(trip => ({
          ...trip,
          destination: post.destination, // Attach destination from post
          sites: post.sites || [] // Include sites from post
        }))
      );
    }
    return [];
  });

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPosts()).finally(() => setLoading(false));
  }, [dispatch]);

  const handleDeleteTrip = async (id) => {
    console.log("Delete trip with ID:", id);
    setLoading(true);
    try {
      await dispatch(removePost(id)).unwrap();
      toast.success("Trip deleted successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete trip.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Trip Management</h2>
        <button
          onClick={onAddNewTrip}
          className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add New Trip
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-sky-600 text-4xl" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700 uppercase text-sm tracking-wider">
                <th className="p-4 border-b">Trip Title</th>
                <th className="p-4 border-b">Destination</th>
                <th className="p-4 border-b">Trip date</th>
                <th className="p-4 border-b">Price</th>
                <th className="p-4 border-b">Sites</th>
                <th className="p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip) => (
                <tr key={trip._id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 font-medium">{trip.title}</td>
                  <td className="p-4">{trip.destination}</td>
                  <td className="p-4">{new Date(trip.tripDate).toLocaleDateString()}</td>
                  <td className="p-4 text-green-600 font-semibold">${trip.price}</td>
                  
                  {/* Sites in a Column */}
                  <td className="p-4">
                    {trip.sites.length > 0 ? (
                      <div className="flex flex-col gap-2">
                        {trip.sites.map((site) => (
                          <div 
                            key={site._id} 
                            className="bg-sky-100 text-sky-900 text-xs px-3 py-1 rounded-lg"
                          >
                            {site.name} <br />
                            <span className="text-gray-500 text-xs">
                              {new Date(site.tripDate).toLocaleDateString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">No sites</span>
                    )}
                  </td>

                  {/* Action Buttons */}
                  <td className="p-4">
                    <div className="flex justify-between gap-3 w-24">
                      <button className="text-sky-500 hover:text-sky-600 transition flex items-center">
                        <Edit size={18} className="mr-1" /> Edit
                      </button>
                      <button 
                        className="text-red-500 hover:text-red-600 transition flex items-center"
                        onClick={() => handleDeleteTrip(trip._id)}
                      >
                        <Trash size={18} className="mr-1" /> Delete
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
