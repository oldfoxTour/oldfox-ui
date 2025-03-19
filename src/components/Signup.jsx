import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../slices/authSlice"; // Import signup action
import backgroundVideo from "../IMAGE/Back.mp4";
import { useTranslation } from 'react-i18next';
function Signup() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [notification, setNotification] = useState(""); // State for error/success messages
  const [loading, setLoading] = useState(false); // Loading state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(); // For file uploads
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (photo) formData.append("file", photo);

    try {
      await dispatch(signup(formData)).unwrap(); // Dispatch signup action
      setNotification("Signup successful!");
      navigate("/login"); // Redirect to login on success
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setNotification(err.response.data.message); // Display error message
      } else {
        setNotification(err.toString());
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-10  text-sm bg-black max-md:px-3 max-md:py-12  h-screen pt-48 pb-20">
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
      

      <div className="relative flex flex-col justify-center items-center px-10 py-5 max-w-full bg-black bg-opacity-90 w-[400px] max-md:px-3 z-10 backdrop-blur-sm mt-60 mb-52">
        <form
          className="flex flex-col max-w-full w-[300px]"
          onSubmit={handleSubmit}
        >
          <div className="self-center text-2xl font-bold text-white">
           {t('signup.register')}
          </div>
          <div className="shrink-0 self-center mt-1 border-sky-500 border-solid border-[1px] h-[2px] w-[120px]" />
          <div className="self-center mt-5 text-sm font-semibold text-white max-md:mt-5">
           {t('signup.createAccount')}
          </div>
          {/* Display Notification */}
          {notification && (
            <div className="text-red-500 mt-4">{notification}</div>
          )}
          {/* Username Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="text"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
             {t('signup.name')}
            </label>
          </div>

          {/* Email Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
             {t('signup.email')}
            </label>
          </div>

          {/* Password Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
             {t('signup.password')}
            </label>
            <div
              className="absolute right-0 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-white" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-white" />
              )}
            </div>
          </div>

          {/* Photo Upload Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
             {t('signup.uploadPhoto')}
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className={`px-8 py-2 mt-8 text-lg font-bold text-white whitespace-nowrap bg-sky-500 max-md:px-4 max-md:mt-5 max-md:max-w-full text-center cursor-pointer hover:bg-sky-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? t('signup.registering') : t('signup.register')}
          </button>

          {/* Already have an account? */}
          <div className="flex justify-between items-center ml-10 mt-6 max-w-full w-[200px] max-md:mt-5 text-xs">
            <div className="text-white">{t('signup.alreadyHaveAccount')}</div>
            <Link to="/login" className="text-sky-500 cursor-pointer">
            {t('signup.login')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
