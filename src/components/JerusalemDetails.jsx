import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import israel from "../IMAGE/israel.jpg";
import { useDispatch } from "react-redux";

// Sample images for the slider
const israelImages = [
  israel,
  "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
];

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
      name: "Cairo", 
      location: "Egypt", 
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      description: "Visit the iconic Islamic mosques and ancient Coptic churches."
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

function JerusalemDetails() {
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === israelImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? israelImages.length - 1 : prevIndex - 1
    );
  };

  const holyLandSites = [
    {
      name: "Western Wall (Kotel)",
      location: "Jerusalem, Israel",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      description: "The holiest site in Judaism, this ancient limestone wall is a remnant of the Second Temple and serves as an open-air synagogue where Jews from around the world come to pray and place written prayers in the cracks between stones."
    },
    {
      name: "Church of the Holy Sepulchre",
      location: "Jerusalem, Israel",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Church_of_the_Holy_Sepulchre_by_Gerd_Eichmann_%28cropped%29.jpg",
      description: "Revered as the site of Jesus's crucifixion, burial, and resurrection, this church is a major pilgrimage destination for Christians worldwide. It's jointly maintained by several Christian denominations and contains the Tomb of Christ and Golgotha."
    },
    {
      name: "Dome of the Rock",
      location: "Jerusalem, Israel",
      image: "https://cdn.britannica.com/93/84693-050-BBB16251/Dome-of-the-Rock-Jerusalem.jpg",
      description: "An iconic Islamic shrine built on the Temple Mount, featuring a distinctive golden dome and beautiful Islamic calligraphy. Muslims believe it marks the spot where Prophet Muhammad ascended to heaven during his Night Journey."
    },
    {
      name: "Via Dolorosa",
      location: "Jerusalem, Israel",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/70/93.jpg",
      description: "The processional route in Jerusalem's Old City believed to be the path Jesus walked on the way to his crucifixion. Pilgrims follow the 14 Stations of the Cross, ending at the Church of the Holy Sepulchre."
    }
  ];

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          className="w-full h-full object-cover"
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
          alt="Israel Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">ISRAEL</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Journey through the Holy Land, where three major world religions converge
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
            <h2 className="text-2xl font-bold text-gray-800">ISRAEL (Tel Aviv)</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Visit Israel to explore its rich history: Jerusalem's sacred sites, the Dead Sea's unique landscapes, and
            vibrant cities like Tel Aviv and Haifa await you.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500 mb-8">
            <div className="flex mb-4">
              <FaQuoteLeft className="text-sky-300 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Israel</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Embark on a spiritual journey to Israel, the heart of three major world religions. Start in Jerusalem,
              visiting the Western Wall, the last remnant of the Second Temple, and the Dome of the Rock, an iconic
              Islamic shrine. Explore the Church of the Holy Sepulchre, believed to be the site of Jesus' crucifixion
              and resurrection.
              <br /><br />
              Next, head to Bethlehem, where you can visit the Church of the Nativity, marking the birthplace of Jesus.
              <br /><br />
              Travel to Nazareth to see the Basilica of the Annunciation, an important Christian pilgrimage site.
              <br /><br />
              Don't miss the serene beauty of the Sea of Galilee, where you can reflect on biblical stories.
              <br /><br />
              Lastly, relax at the Dead Sea, the lowest point on Earth, known for its healing properties. Experience local 
              cuisine and vibrant culture, making your spiritual tour of Israel both enriching and unforgettable.
            </p>
          </div>
        </div>

        {/* Sacred Sites */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-1 w-10 bg-sky-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Sacred Sites in Jerusalem</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {holyLandSites.map((site, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={site.image || "/placeholder.svg"}
                    alt={site.name}
                  />
                  <div className="absolute top-0 right-0 bg-sky-500 text-white px-3 py-1 rounded-bl-lg">
                    <FaMapMarkerAlt className="inline mr-1" />
                    {site.location.split(',')[0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{site.name}</h3>
                  <p className="text-gray-600">{site.description}</p>
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
              src={israelImages[currentImageIndex] || "/placeholder.svg"}
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
              <h3 className="text-white text-2xl font-bold mb-2">Jerusalem, Israel</h3>
              <p className="text-white/90">The ancient city where history and faith intertwine at every corner</p>
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

export default JerusalemDetails;
