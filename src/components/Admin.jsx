import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import { AuthContext } from "../context/authContext"; // Adjust the import path as necessary

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext); // Use AuthContext for login

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification("");

    try {
      await handleLogin({ email: username, password }); // Use the login function from AuthContext
      toast.success("Login successful!"); // Show success notification
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      const errorMessage =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.toString();
      setNotification(errorMessage);
      toast.error(errorMessage); // Show error notification
    } 
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#c4d3d9] text-black">
      <div className="relative flex flex-col text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[30px] max-w-[393px] p-10 shadow-[0px_100px_80px_rgba(0,0,0,0.07)]">
        <div className="self-center text-2xl font-bold">Admin Login</div>
        <div className="shrink-0 self-center mt-5 border-sky-500 border-solid border-[2px] h-[1px] w-[90px]" />

        <div className="mt-10 w-full">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-transparent border-b-2 border-sky-500 focus:outline-none text-white"
            placeholder="Enter your email"
            autoFocus
          />
        </div>

        <div className="mt-10 w-full relative">
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-transparent border-b-2 border-sky-500 focus:outline-none text-white"
              placeholder="Enter your password"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-white hover:underline cursor-pointer">
          Forgot password?
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-10 py-3 bg-sky-500 rounded-3xl hover:bg-sky-600 transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f614a04fbfe4f67d436bd4efc208d2a163c82c08b63b15cd7be4629863e29bc?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
            className="w-[190px] object-contain"
            alt="login"
          />
        </div>

        {notification && <div className="text-red-500 mt-4">{notification}</div>}
      </div>
    </div>
  );
}

export default Admin;
