// components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ element }) => {
  const { isAdmin } = useContext(AuthContext);

  // Redirect to login if not an admin
  return isAdmin ? element : <Navigate to="/admin-login" />;
};

export default PrivateRoute;