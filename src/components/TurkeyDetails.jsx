import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import city from "../IMAGE/city.jpg";
import tukey from "../IMAGE/tukey.jpg";
import { useDispatch } from "react-redux";
import {  FaQuoteLeft } from "react-icons/fa";
const recentlyVisitedImages = [city, tukey];

function RelatedTours() {
  const relatedDestinations = [
    { 
      id: 1, 
      name: "Kibeho", 
      location: "Nyaruguru, Rwanda", 
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      description: "Known for Marian apparitions, attracting pilgrims seeking spiritual renewal."
    },
    { 
      id: 2, 
      name: "Jerusalem", 
      location: "Israel", 
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      description: "Explore sacred sites like the Western Wall and Church of the Holy Sepulchre."
    }
  ];

  return (
    <div className="mt-12">
      <div className="flex items-center mb-6">
        <div className="h-1 w-10 bg-sky-500 mr-4"></div>
        <h2 className="text-2xl font-bold text-gray-800">Related Religious Destinations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedDestinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                <div className="flex items-center text-white/80 text-sm mt-1">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{destination.location}</span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Destinations() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === recentlyVisitedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? recentlyVisitedImages.length - 1 : prevIndex - 1
    );
  };

  const religiousDestinations = [
    {
      name: "Hagia Sophia",
      location: "Istanbul, Turkey",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/54/be/42/hagia-sophia-museum-by.jpg?w=1200&h=1200&s=1",
      description: "Originally a Byzantine cathedral, then a mosque, then a museum, and now a mosque again, Hagia Sophia is renowned for its massive dome and stunning Byzantine mosaics that blend Christian and Islamic influences."
    },
    {
      name: "Blue Mosque (Sultan Ahmed Mosque)",
      location: "Istanbul, Turkey",
      image: "https://cdn-imgix.headout.com/media/images/0bc7bfc5d039409e94b0fc256ca3008d-25579-istanbul-combo-topkapi-palace--hagia-sophia---blue-mosque-02.jpg?auto=format&w=702.4499999999999&h=401.4&q=90&fit=crop&ar=7%3A4&crop=faces",
      description: "Famous for its blue Iznik tiles and six minarets, this functioning mosque is one of Istanbul's most iconic religious sites, showcasing magnificent Ottoman architecture."
    },
    {
      name: "Ephesus",
      location: "Selçuk, Turkey",
      image: "https://ertungaecir.com/wp-content/uploads/ephesus-tours.jpg",
      description: "Home to the ruins of the Temple of Artemis and the Basilica of St. John, Ephesus was an important early Christian site where the apostle Paul preached and is mentioned in the Book of Revelation."
    },
    {
      name: "Cappadocia Cave Churches",
      location: "Cappadocia, Turkey",
      image: "https://imagedelivery.net/zdouvHukpwsjEjZlhC3LCA/bigguybigworld.com/2021/03/Cappadocia-10-1.jpeg/w=9999",
      description: "The rock-cut churches and monasteries of Cappadocia, especially in Göreme Open Air Museum, feature remarkable Byzantine frescoes and were used by early Christians hiding from persecution."
    }
  ];

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          className="w-full h-full object-cover"
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
          alt="Turkey Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Turkey</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Experience a spiritual journey through one of the world's most historically rich religious destinations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-1 w-10 bg-sky-500 mr-4"></div>
        
            <h2 className="text-2xl font-bold text-gray-800">Turkey (Istanbul)</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Experience Turkey's religious heritage: visit Istanbul's Hagia Sophia, the Blue Mosque, Ephesus's Basilica
            of St. John, and Cappadocia's ancient cave churches for spiritual enrichment.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500 mb-8">
        <div className="flex mb-4">
                   <FaQuoteLeft className="text-sky-300 text-3xl mr-4" />
                   <h3 className="text-xl font-bold text-gray-800">Turkey</h3>
                 </div>
            <p className="text-gray-700 leading-relaxed">
              Embark on a captivating journey to Turkey, a land steeped in rich religious history. Start in Istanbul,
              where East meets West. Visit the majestic Hagia Sophia, a former cathedral and mosque, now a museum,
              showcasing stunning Byzantine architecture. Explore the Blue Mosque, famous for its striking blue tiles
              and impressive domes.
              <br /><br />
              Next, head to Cappadocia, known for its unique rock formations and ancient cave churches adorned with
              beautiful frescoes. Discover the Goreme Open-Air Museum, a UNESCO World Heritage site.
              <br /><br />
              Travel to Ephesus, where you can visit the Basilica of St. John and the ruins of the ancient city,
              reflecting early Christianity's influence.
              <br /><br />
              Lastly, visit Pamukkale, famous for its travertine terraces and ancient ruins of Hierapolis, known for its
              thermal pools.
            </p>
          </div>
        </div>

        {/* Top Religious Destinations */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-1 w-10 bg-sky-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Top Religious Destinations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {religiousDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                  />
                  <div className="absolute top-0 right-0 bg-sky-500 text-white px-3 py-1 rounded-bl-lg">
                    <FaMapMarkerAlt className="inline mr-1" />
                    {destination.location.split(',')[0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Visited */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-1 w-10 bg-sky-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Recently Visited</h2>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-[400px] object-cover"
              src={recentlyVisitedImages[currentImageIndex] || "/placeholder.svg"}
              alt="Recently Visited Trip"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 backdrop-blur-sm transition-all"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 backdrop-blur-sm transition-all"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Istanbul, Turkey</h3>
              <p className="text-white/90">A city where East meets West, offering a unique blend of cultures and religions</p>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        <RelatedTours />
        
        {/* Decorative element */}
        <div className="flex justify-center my-16">
          <div className="flex items-center space-x-2">
            <div className="h-1 w-3 bg-sky-300 rounded-full"></div>
            <div className="h-1 w-6 bg-sky-400 rounded-full"></div>
            <div className="h-1 w-12 bg-sky-500 rounded-full"></div>
            <div className="h-1 w-6 bg-sky-400 rounded-full"></div>
            <div className="h-1 w-3 bg-sky-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
