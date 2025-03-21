import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import kigali from "../IMAGE/kigali.jpg";
import { fetchPostsByDestination } from "../slices/postSlice";

// Sample images for the slider
const rwandaImages = [
  kigali,
  "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
];

function RelatedTours() {
  const relatedDestinations = [
    { 
      id: 1, 
      name: "Jerusalem", 
      location: "Israel", 
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      description: "Explore sacred sites like the Western Wall and Church of the Holy Sepulchre."
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

function RwandaDetails() {
  const dispatch = useDispatch();
  const { destinationPosts, isLoading, error } = useSelector((state) => state.posts);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    dispatch(fetchPostsByDestination("Rwanda")); // Pass "Rwanda" as the destination
  }, [dispatch]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === rwandaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? rwandaImages.length - 1 : prevIndex - 1
    );
  };

  const religiousSites = [
    {
      name: "Kibeho Shrine",
      location: "Nyaruguru, Rwanda",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      content: "Known for Marian apparitions that occurred in the 1980s when the Virgin Mary reportedly appeared to three schoolgirls. Now a major Catholic pilgrimage site with a modern basilica that attracts thousands of pilgrims annually from around the world."
    },
    {
      name: "Nyungwe National Park",
      location: "Rusizi, Rwanda",
      image: "https://www.nyungweforestnationalpark.org/wp-content/uploads/2019/07/Nyungwe-National-Park-Fees-for-Residdents.jpg",
      content: "One of Rwanda's oldest and most significant national parks, established in the early 20th century with the influence of conservation efforts. Nyungwe Forest National Park features beautiful biodiversity, including rare flora and fauna, and serves as a critical ecological hub in the region."
    },
    {
      name: "Kigali Genocide Memorial",
      location: "Kigali, Rwanda",
      image: "https://www.explorerwandatours.com/wp-content/uploads/2019/08/Kigali-Genocide-Memorial.jpg",
      content: "While primarily a memorial to the 1994 genocide victims, this site has profound spiritual significance as a place of remembrance, reconciliation, and prayer. Many religious services and commemorations are held here."
    },
    {
      name: "Virunga National Park",
      location: "Musanze, Rwanda",
      image: "https://www.tripsavvy.com/thmb/WbDxfX8iMBLkxy4CP4CV798JS7E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-130869870-3a2d98f2cc3c42bcb53e74602bad5762.jpg",
      content: "One of Rwanda's most iconic and treasured natural reserves, designated as a national park to protect its unique landscape and wildlife. Volcanoes National Park showcases dramatic volcanic scenery, including towering peaks and lush forests, and is renowned as a sanctuary for the endangered mountain gorillas.."
    }
  ];

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          className="w-full h-full object-cover"
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
          alt="Rwanda Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">RWANDA</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Experience spiritual renewal in the land of a thousand hills
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
            <h2 className="text-2xl font-bold text-gray-800">Kibeho (Rwanda)</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Kibeho, located in Nyaruguru District, Rwanda, is a holy land famous for Marian apparitions, attracting
            pilgrims seeking spiritual renewal amidst beautiful mountainous landscapes and rich culture.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500 mb-8">
            <div className="flex mb-4">
              <FaQuoteLeft className="text-sky-300 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Tour details</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Experience a transformative spiritual journey in Rwanda by visiting its significant religious sites. Begin
              your pilgrimage in Kibeho, known for the reported apparitions of the Virgin Mary, which attract thousands
              of pilgrims each year. The serene atmosphere and stunning landscapes provide a perfect backdrop for
              reflection and prayer.
              <br /><br />
              Next, travel to Musanze, where early missionaries laid the groundwork for Christianity in the region. Explore 
              local churches and immerse yourself in the rich history of faith in this area.
              <br /><br />
              Don't miss Lake Kivu, a beautiful setting for contemplation, where you can enjoy the tranquility of its shores.
              <br /><br />
              Lastly, visit the Kigali Genocide Memorial, a poignant site that offers insights into Rwanda's history, 
              emphasizing themes of forgiveness and reconciliation central to Christian teachings.
              <br /><br />
              Throughout your journey, engage with the welcoming Rwandan culture, savor traditional dishes, and enjoy 
              breathtaking landscapes, making your religious tour both enriching and unforgettable.
            </p>
          </div>
        </div>

        {/* Top Religious Sites */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-1 w-10 bg-sky-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Top Religious Sites in Rwanda</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {religiousSites.map((site, index) => (
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
                  <p className="text-gray-600">{site.content}</p>
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
              src={rwandaImages[currentImageIndex] || "/placeholder.svg"}
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
              <h3 className="text-white text-2xl font-bold mb-2">Kigali, Rwanda</h3>
              <p className="text-white/90">The vibrant capital city, a gateway to Rwanda's spiritual destinations</p>
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

export default RwandaDetails;
