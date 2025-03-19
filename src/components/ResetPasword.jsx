import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../slices/authSlice";
import { useParams, useNavigate } from "react-router-dom"; 

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, passwordResetStatus, error } = useSelector((state) => state.auth);
  const { token } = useParams(); // Assuming token is in the URL params
  const navigate = useNavigate(); // To redirect after successful password reset

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ensure the passwords match
    if (newPassword !== confirmPassword) {
      alert("Passwords not match");
      return;
    }

    // Dispatch reset password action
    dispatch(resetPassword({ token, newPassword }));
  };

  // Navigate back to login after successful reset
  if (passwordResetStatus === "Password reset successful") {
    navigate("/login");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#134e5e] to-[#71b280]">
      <div className="bg-[#584175] rounded-3xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-white text-4xl font-bold mb-4 text-center font-['Gotham'] leading-tight">
          Reset Password
        </h1>
        <p className="text-white text-lg text-center mb-4 font-['Gotham'] leading-snug">
          Please enter your new password
        </p>

        {/* Display error if any */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            className="w-full h-12 rounded-lg p-4 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#71b280] transition duration-300"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full h-12 rounded-lg p-4 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#71b280] transition duration-300"
            required
          />
          <button
            type="submit"
            className="w-full h-12 bg-white text-[#592f92] font-bold rounded-lg shadow hover:bg-[#f3f4f6] transition duration-300"
            disabled={loading}
          >
            {loading ? "Resetting password..." : "Reset password"}
          </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-white text-sm font-normal font-['Gotham'] leading-loose">
            Remembered your password? 
          </span>
          <span className="text-white text-lg font-bold font-['Gotham']">
            Back to login
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
