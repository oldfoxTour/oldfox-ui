import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import image1 from "../IMAGE/image1.png";
import image2 from "../IMAGE/image2.png";
import image3 from "../IMAGE/image3.png";
import image7 from "../IMAGE/image7.jpeg";
import image8 from "../IMAGE/image8.jpeg";
import image9 from "../IMAGE/image9.jpeg";
import image10 from "../IMAGE/image10.jpeg";
import image11 from "../IMAGE/image11.jpeg";


const imageDetails = [
  { src: image1, title: "kibeho", description: "urugendo rutagatifu." },
  { src: image2, title: "inyanza m'urukari", description: "umuco nyarwanda." },
  { src: image3, title: "inka", description: "umuco nyarwanda." },
  { src: image7, title: "tembera urwanda", description: "imisozi nibibaya." },
  { src: image8, title: "kigali", description: "kigali ikeye." },
  { src: image9, title: "ibirunga", description: "musanze ikeye." },
  { src: image10, title: "abapadiri", description: "ijambo ry'IMANA hose." },
  { src: image11, title: "kibeho", description: "ubwami bw'Imana hose." },
];

const LocalGallery = () => {
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
  Local <span className="text-[#05b7fe]">Gallery</span>
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

export default LocalGallery;
