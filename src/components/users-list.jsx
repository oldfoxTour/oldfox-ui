import React, { useState, useEffect } from 'react';
import { MoreVertical, Mail, Phone, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getAllUsers } from "../slices/authSlice";
import { useDispatch, useSelector } from 'react-redux';

export function UsersList() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log("Users data:", users);
  }, [users]);

  const handleSelectUser = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter(id => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleDeleteUser = async (userId) => {
    try {
      // Dispatch delete action here if implemented
      toast.success("User deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete user.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Registered Users</h2>
        <input
          type="search"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4">User</th>
                <th className="text-left py-4 px-4">Email</th>
                <th className="text-left py-4 px-4">Join Date</th>
                <th className="text-left py-4 px-4">Status</th>
                <th className="text-left py-4 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b last:border-b-0">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.profile?.url || "/placeholder.svg?height=40&width=40"}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="font-medium">{user.name}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{user.email}</td>
                  <td className="py-4 px-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${user.isAdmin ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.isAdmin ? 'Admin' : 'User'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Mail size={16} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Phone size={16} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" onClick={() => handleDeleteUser(user._id)}>
                        <Trash2 size={16} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit2 size={16} />
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