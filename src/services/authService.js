import axios from "../axios";
import Cookies from "js-cookie";

// Signup request
export const signup = async (userData) => {
  const response = await axios.post("/auth/signup", userData);
  return response.data;
};

// Login request
export const login = async (credentials) => {
  const response = await axios.post("/auth/login", credentials);
  if (response.data.token) {
    Cookies.set("token", response.data.token, { expires: 30 }); // Store token in cookies for 30 days
  }
  return response.data;
};

// Get the current user's profile using the token from cookies
export const getProfile = async () => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Token not found");
  }
  const response = await axios.get("/auth/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Get user by ID (requires authentication)
export const getUserById = async (id) => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Token not found");
  }
  const response = await axios.get(`/auth/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update user by ID (requires authentication)
export const updateUserById = async (id, updateData) => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Token not found");
  }
  const response = await axios.put(`/auth/users/${id}`, updateData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete user by ID (requires authentication)
export const deleteUserById = async (id) => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Token not found");
  }
  const response = await axios.delete(`/auth/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Get all users (requires authentication)
export const getAllUsers = async () => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Token not found");
  }
  const response = await axios.get("/auth/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Get total user count (requires authentication)
export const getUserCount = async () => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Token not found");
  }
  const response = await axios.get("/auth/count", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Logout: remove token from cookies
export const logout = () => {
  Cookies.remove("token"); // Remove token from cookies
  return axios.get("/auth/logout"); // Optionally call backend for logout
};

// Forgot password request
export const forgotPassword = async (email) => {
  const response = await axios.post("/auth/forgot-password", { email });
  return response.data; // Handle success message
};

// Reset password request
export const resetPassword = async (token, newPassword) => {
  const response = await axios.post("/auth/reset-password", {
    token,
    newPassword,
  });
  return response.data; // Handle success message
};
