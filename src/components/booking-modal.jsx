"use client"

import { useState, useEffect } from "react"
import { X, Check, Loader2 } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { selectUser } from "../slices/authSlice"; // Import the selector
import { fetchPostById } from '../slices/postSlice';
import {createBooking} from '../slices/bookingSlice'
import { toast } from 'react-toastify';

export default function BookingModal({ isOpen, onClose, destination, postId, postPrice, postDate }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const selectedPost = useSelector(state => state.posts.selectedPost);
  const [travelers, setTravelers] = useState(1)
  const [travelDate, setTravelDate] = useState(postDate || "")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [bookingStatus, setBookingStatus] = useState("idle") // 'idle', 'loading', 'success'

  const user = useSelector(selectUser); // Get the user from the Redux store

  useEffect(() => {
    if (user) {
      setName(user.name || "")
      setEmail(user.email || "")
      setPhone(user.phone || "")
    }
    if (postDate) {
      const formattedDate = new Date(postDate).toISOString().split('T')[0];
      setTravelDate(formattedDate)
    }
  }, [user, postDate])

  useEffect(() => {
    if (isOpen && postId) {
      dispatch(fetchPostById(postId));
    }
  }, [isOpen, postId, dispatch]);

  useEffect(() => {
    if (bookingStatus === "success") {
      toast.success("You have received the booking info on your email.", {
        position: "top-right" // Use string value for position
      });
      onClose(); // Close the modal
    }
  }, [bookingStatus, onClose]);

  useEffect(() => {
    if (bookingStatus === "success") {
      navigate("/booking-success");
    }
  }, [bookingStatus, navigate]);

  const basePrice = postPrice || 599000
  const total = basePrice * travelers

  const handleConfirmBooking = async () => {
    if (user) {
      setBookingStatus("loading")
      const bookingData = {
        date: travelDate,
        name,
        email,
        travelers,
        phone,
        postId,
      };
      console.log("Booking Data:", bookingData); // Log the booking data
      try {
        const response = await dispatch(createBooking(bookingData)).unwrap();
        console.log("Booking Response:", response); // Log the response
        setBookingStatus("success")
        toast.success(`Booking confirmed! Your booking ID is ${response.bookingId}. and You recieve the booking infor on your email`, {
          position: "top-right"
        });
      } catch (error) {
        console.error("Booking failed:", error.response ? error.response.data : error.message); // Log the error response
        setBookingStatus("idle")
        toast.error("Booking failed. Please try again.", {
          position: "top-right"
        });
      }
    } else {
      // Redirect to login page
      navigate("/login")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full flex overflow-hidden relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10">
          <X className="h-6 w-6" />
        </button>

        {/* Left side - Image */}
        <div className="w-1/2 hidden md:block">
          {selectedPost && selectedPost.postImage ? (
            <img
              src={selectedPost.postImage}
              alt={destination?.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Right side - Booking Form */}
        <div className="flex-1 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6"></h2>

          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          {selectedPost && (
            <div className="mb-4 p-4 border rounded-md bg-yellow-100">
              <h2 className="text-lg font-bold text-yellow-800">DESSTINATION FOR TOUR : {selectedPost.destination}</h2>
            </div>
          )}
          <div className="text-2xl text-[#0584c7] font-bold mb-6">{basePrice.toLocaleString()} Frw</div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
              <input
                type="number"
                min="1"
                value={travelers}
                onChange={(e) => setTravelers(Math.max(1, Number.parseInt(e.target.value)))}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="text-lg font-semibold">
              Total: <span className="text-[#0584c7]">{total.toLocaleString()} Frw</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mr-2" />
              <span className="text-sm text-gray-600">I agree to the terms and conditions</span>
            </label>
          </div>

          <button
            className="w-full bg-[#0584c7] text-white py-3 rounded-md hover:bg-[#046da6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={!agreed || !name || !email || !phone || !travelDate || bookingStatus !== "idle"}
            onClick={handleConfirmBooking}
          >
            {bookingStatus === "loading" ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : bookingStatus === "success" ? (
              <Check className="mr-2 h-4 w-4" />
            ) : null}
            {bookingStatus === "loading"
              ? "Processing..."
              : bookingStatus === "success"
                ? "Booking Confirmed"
                : "Confirm Booking"}
          </button>
        </div>
      </div>
    </div>
  )
}
