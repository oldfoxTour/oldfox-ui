import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import image50 from "../IMAGE/image50.jpeg";
import image51 from "../IMAGE/image51.jpeg";
import image52 from "../IMAGE/image52.jpeg";
import image55 from "../IMAGE/image55.jpeg";
import image56 from "../IMAGE/image56.jpeg";
import image57 from "../IMAGE/image57.jpeg";
import image58 from "../IMAGE/image58.jpeg";
import image59 from "../IMAGE/image59.jpeg";


const imageDetails = [
  { src: image50, title: "isreal", description: "." },
  { src: image51, title: "france", description: "." },
  { src: image52, title: "turkey", description: "." },
  { src: image55, title: "turkey", description: "." },
  { src: image56, title: "egypte", description: "." },
  { src: image57, title: "italy", description: "." },
  { src: image58, title: "teraviv", description: "." },
  { src: image59, title: "sion", description: "." },
];

const InternationalGallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-6 flex items-center text-[#0584c7] hover:text-[#5f9fb3] transition duration-300"
      >
        <FaArrowLeft className="text-xl mr-2" />
        Back
      </button>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 font-roboto">
         international <span className="text-[#05b7fe]">Gallery</span>
         </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageDetails.map((image, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ease-in-out"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image Details on Hover with Slow Motion */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out p-4">
              <h2 className="text-white text-lg font-semibold">{image.title}</h2>
              <p className="text-white text-sm text-center">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalGallery;
