import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../slices/authSlice"; // Import login action
import backgroundVideo from "../IMAGE/Back.mp4";
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Login() {
  const { t } = useTranslation(); // Initialize useTranslation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(login({ email, password })).unwrap(); // Dispatch login action
      setNotification("Login successful!");
      navigate("/"); // Redirect on successful login
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setNotification(err.response.data.message);
      } else {
        setNotification(err.toString());
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex overflow-hidden flex-col justify-center items-center px-10 py-0 text-sm h-screen pt-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-5" />
      
      {/* Login Form Container */}
      <div className="relative flex flex-col justify-center items-center px-10 py-8 max-w-full bg-black bg-opacity-90 w-[400px] max-md:px-3 z-10 backdrop-blur-sm mt-16">
        <form
          className="flex flex-col max-w-full w-[300px]"
          onSubmit={handleSubmit}
        >
          <div className="self-center text-2xl font-bold text-white">{t("login.title")}</div>
          <div className="shrink-0 self-center mt-1 border-sky-500 border-solid border-[1px] h-[3px] w-[70px]" />
          <div className="self-center mt-5 text-sm font-semibold text-white max-md:mt-5">
           {t("login.subtitle")}
          </div>
          
          {/* Email Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-5 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
            {t("login.email")}
            </label>
          </div>

          {/* Password Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-5 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
              {t("login.password")}
            </label>
            <div
              className="absolute right-0 mt-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-white" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-white" />
              )}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`px-8 py-2 mt-8 text-lg font-bold text-white whitespace-nowrap bg-sky-500 max-md:px-4 max-md:mt-5 max-md:max-w-full text-center cursor-pointer hover:bg-sky-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? t("login.loading"): t("login.button")}
          </button>

          {/* Display Notification */}
          {notification && (
            <div className="text-red-500 mt-4">{notification}</div>
          )}

          {/* Forgot Password Link */}
          <div className="text-white text-xs text-center mt-4">
            <Link to="/forgot-password" className="text-sky-500 cursor-pointer">
              {t("login.forgotPassword")}
            </Link>
          </div>

          {/* Don't have an account yet? */}
          <div className="flex justify-between items-center ml-10 mt-6 max-w-full w-[200px] max-md:mt-5 text-xs">
            <div className="text-white">{t("login.noAccount")}</div>
            <Link to="/signup" className="text-sky-500 cursor-pointer">
             {t("login.signUp")}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
