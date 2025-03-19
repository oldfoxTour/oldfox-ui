import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/authContext";
import { Upload } from 'lucide-react';

export function SettingsPanel() {
  const { user, updateProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [profilePicture, setProfilePicture] = useState(user?.profile?.url || '');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateProfile({ ...formData, profilePicture });
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage('Failed to update profile.');
    }
    setIsLoading(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-6">
          <div className="shrink-0">
            <img className="h-16 w-16 object-cover rounded-full" src={profilePicture} alt="Current profile photo" />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        {message && (
          <div className={`p-4 rounded-md ${message.includes('Failed') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}

