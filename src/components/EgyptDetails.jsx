import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import egypt from "../IMAGE/egypt.jpg";
import { useDispatch, useSelector } from "react-redux";
import BookingForm from "./BookingForm";

function RelatedTours() {
  const [tours, setTours] = useState([
    { id: 1, name: "Kibeho", location: "Nyaruguru", likes: 35, liked: false, comments: [] },
    { id: 2, name: "istanbul", location: "turkey", likes: 50, liked: false, comments: [] },
  ]);

  const toggleLike = (id) => {
    setTours(
      tours.map((tour) =>
        tour.id === id
          ? { ...tour, liked: !tour.liked, likes: tour.liked ? tour.likes - 1 : tour.likes + 1 }
          : tour
      )
    );
  };

  const addComment = (id, comment) => {
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, comments: [...tour.comments, comment] } : tour
      )
    );
  };

  return (
    <div>
      <div className="text-black text-xl font-bold mb-4">Related Tours</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white shadow-lg p-4">
            <img
              className="w-full h-40 object-cover mb-4"
              src={
                tour.name === "Kibeho"
                  ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                  : "https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              }
              alt={tour.name}
            />
            <div className="text-black text-lg font-bold">{tour.name}</div>
            <div className="text-sm text-gray-500">{tour.location}</div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <div className="flex items-center">
                <button onClick={() => toggleLike(tour.id)} className="mr-2">
                  {tour.liked ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
                </button>
                <span>{tour.likes} Likes</span>
              </div>
              <span>120$</span>
            </div>

            <div className="mt-4">
              <h4 className="text-black text-sm font-bold">Comments:</h4>
              {tour.comments.length === 0 ? (
                <p className="text-gray-500">No comments yet</p>
              ) : (
                <ul className="text-sm text-gray-700">
                  {tour.comments.map((comment, index) => (
                    <li key={index} className="border-b border-gray-200 py-1">
                      {comment}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full h-10 border border-gray-300 px-2 mb-2"
                  placeholder="Add a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      addComment(tour.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EgyptDetails() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const dispatch = useDispatch();

  const destinations = [
    {
      name: "Cairo",
      description: "Visit the iconic Great Pyramids of Giza, the Sphinx, and explore Islamic Cairo with its stunning mosques.",
      price: 150
    },
    {
      name: "Luxor",
      description: "Explore the world's greatest open-air museum, including the magnificent Karnak Temple and Valley of the Kings.",
      price: 130
    },
    {
      name: "Mount Sinai",
      description: "Visit the place where Moses is believed to have received the Ten Commandments and explore St. Catherine's Monastery.",
      price: 100
    },
    {
      name: "Alexandria",
      description: "Discover the historic Catacombs of Kom el Shoqafa and the Fort of Qaitbay, offering insights into the city's rich past.",
      price: 110
    }
  ];

  const handleBooking = () => {
    setIsBookingFormOpen(true);
  };

  return (
    <div className="w-full h-auto bg-stone-50 relative">
      <div className="relative w-full h-[50vh]">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
          alt="City Background"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-8 sm:left-16 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl font-bold">
          EGYPT
        </div>
      </div>

      <div className="max-w-7xl mx-4 sm:mx-16 flex flex-col lg:flex-row gap-8 py-8">
        <div className="w-full lg:w-2/3 space-y-8">
          <div>
            <div className="text-sky-500 text-xl sm:text-2xl font-bold mb-4">
              Egypt (Cairo):
            </div>
            <p className="text-black text-base sm:text-lg mb-6">
              Explore Egypt's rich heritage: visit the Great Pyramids, ancient temples, Islamic mosques, Mount Sinai, and vibrant markets for a captivating blend of history and culture.
            </p>

            <div className="text-sky-500 text-xl sm:text-2xl font-bold mb-4">
              Egypt:
            </div>
            <p className="text-black text-base sm:text-lg">
              Embark on a spiritual journey to Egypt, a land rich in religious history. Start your tour in Cairo, where you can visit the iconic Great Pyramids of Giza and the Sphinx, symbols of ancient Egyptian civilization. Explore Islamic Cairo, home to stunning mosques such as Al-Azhar Mosque and Sultan Hassan Mosque, reflecting the country's Islamic heritage. Next, travel to Luxor, known as the world's greatest open-air museum. Visit the magnificent Karnak Temple and Valley of the Kings, where many pharaohs were laid to rest. Don't miss the Mount Sinai, where Moses is believed to have received the Ten Commandments, and the St. Catherine's Monastery, a UNESCO World Heritage site. Conclude your trip in Alexandria, visiting the historic Catacombs of Kom el Shoqafa and the Fort of Qaitbay, which offers insight into the city's rich Christian and Islamic past. Enjoy the local cuisine and vibrant culture throughout your journey.
            </p>
          </div>

          <div className="space-y-6">
            {destinations.map((destination) => (
              <div key={destination.name} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Price: ${destination.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-black text-xl font-bold mb-4">Recently Visited Trip</div>
            <img className="w-full h-auto" src={egypt} alt="Recently Visited Trip" />
          </div>

          <RelatedTours />
        </div>

        <div className="w-full lg:w-1/3 h-auto mb-8 lg:mb-0 pb-20">
          <div className="bg-sky-500 text-white flex justify-between items-center px-6 py-4">
            <div className="text-lg font-semibold">Total Price</div>
            <div className="text-3xl font-bold">$490</div>
          </div>

          <div className="bg-white shadow-lg p-6">
            <div className="bg-sky-500 text-white text-center py-3 mb-6">
              <span className="text-base font-semibold">Tour Summary</span>
            </div>
            <div className="space-y-4">
              {destinations.map((destination) => (
                <div key={destination.name} className="flex justify-between">
                  <span>{destination.name}</span>
                  <span>${destination.price}</span>
                </div>
              ))}
              <div className="border-t pt-4 font-bold">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>$490</span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleBooking}
              className="w-full mt-6 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
        postId="egypt-tour-2023"
      />
    </div>
  );
}

export default EgyptDetails;