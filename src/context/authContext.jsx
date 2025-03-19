import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout, getProfile } from '../slices/authSlice';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(() => {
    const storedAdminStatus = localStorage.getItem('isAdmin');
    return storedAdminStatus === 'true';
  });

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (user) {
      setIsAdmin(user.isAdmin);
      localStorage.setItem('isAdmin', user.isAdmin);
    }
  }, [user]);

  const handleLogin = async (credentials) => {
    const result = await dispatch(login(credentials));
    if (result.payload && result.payload.isAdmin) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
    }
    return result;
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    navigate('/admin-login');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, user, getProfile, handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
