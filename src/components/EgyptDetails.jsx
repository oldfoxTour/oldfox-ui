"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa"
import egypt from "../IMAGE/egypt.jpg"
import { useDispatch } from "react-redux"

// Sample images for the slider
const egyptImages = [
  egypt,
  "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
]

function RelatedTours() {
  const relatedDestinations = [
    {
      id: 1,
      name: "Kibeho",
      location: "Nyaruguru, Rwanda",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      description: "Known for Marian apparitions, attracting pilgrims seeking spiritual renewal.",
    },
    {
      id: 2,
      name: "Istanbul",
      location: "Turkey",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      description: "Visit the magnificent Hagia Sophia and Blue Mosque in this city where East meets West.",
    },
  ]

  return (
    <div className="mt-12">
      <div className="flex items-center mb-6">
        <div className="h-1 w-10 bg-sky-500 mr-4"></div>
        <h2 className="text-2xl font-bold text-gray-800">Related Religious Destinations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedDestinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
          >
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
  )
}

function EgyptDetails() {
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === egyptImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? egyptImages.length - 1 : prevIndex - 1))
  }

  const egyptSites = [
    {
      name: "St. Catherine's Monastery",
      location: "Mount Sinai, Egypt",
      image:
        "https://egymonuments.gov.eg//media/2638/katharinenkloster.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=1338437254900000008",
      description:
        "Located at the foot of Mount Sinai, this Orthodox monastery is one of the oldest working Christian monasteries in the world. It houses the burning bush where God appeared to Moses and contains a priceless collection of religious icons and manuscripts.",
    },
    {
      name: "Al-Azhar Mosque",
      location: "Cairo, Egypt",
      image:
        "https://ucarecdn.com/26ba22c0-4668-417d-9218-9dac6b617afa/-/crop/640x360/20,0/-/preview/",
      description:
        "Founded in 970 CE, this mosque is one of the oldest in Cairo and home to Al-Azhar University, one of the world's oldest universities and a center of Islamic learning. Its architecture showcases various Islamic styles through centuries of additions and renovations.",
    },
    {
      name: "Hanging Church (Al-Mu'allaqah)",
      location: "Cairo, Egypt",
      image:
        "https://www.youregypttours.com/storage/896/1676280121.jpg",
      description:
        "One of Egypt's oldest Coptic churches, built on top of the gatehouse of the Babylon Fortress. Named for its location above a passage, it contains 110 icons, some dating to the 8th century, and features beautiful wooden ceilings and marble pillars.",
    },
    {
      name: "Abu Simbel Temples",
      location: "Aswan, Egypt",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj10nzR8OVlRmQ0q0qbwowgj_g28N37jrXTm7GsXAp0peY0UQ7aLDnSk_fVvQXXsqGfbveV_tgRJFfYWJMI6OTHcbfp8KQwp3w3EWvPpmnAZKEUbReL0G3mIEv1n5u2zFuKqfKP3g7eheg/w1200-h630-p-k-no-nu/abu-simbel-temples-1.jpg",
      description:
        "These massive rock temples were built by Pharaoh Ramesses II and feature colossal statues of the pharaoh. While originally built to intimidate neighboring Nubians and honor Egyptian gods, they represent the religious devotion of ancient Egypt and were relocated in the 1960s to save them from flooding.",
    },
  ]

  return (
    <div className="w-full bg-gray-50 relative">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
          alt="Egypt Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">EGYPT</h1>
            <p className="text-xl text-white/90 max-w-2xl">Discover the ancient spiritual heritage along the Nile</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="h-1 w-10 bg-sky-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Egypt (Cairo)</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Explore Egypt's rich heritage: visit the Great Pyramids, ancient temples, Islamic mosques, Mount Sinai, and
            vibrant markets for a captivating blend of history and culture.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500 mb-8">
            <div className="flex mb-4">
              <FaQuoteLeft className="text-sky-300 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Egypt</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Embark on a spiritual journey to Egypt, a land rich in religious history. Start your tour in Cairo, where
              you can visit the iconic Great Pyramids of Giza and the Sphinx, symbols of ancient Egyptian civilization.
              Explore Islamic Cairo, home to stunning mosques such as Al-Azhar Mosque and Sultan Hassan Mosque,
              reflecting the country's Islamic heritage.
              <br />
              <br />
              Next, travel to Luxor, known as the world's greatest open-air museum. Visit the magnificent Karnak Temple
              and Valley of the Kings, where many pharaohs were laid to rest.
              <br />
              <br />
              Don't miss the Mount Sinai, where Moses is believed to have received the Ten Commandments, and the St.
              Catherine's Monastery, a UNESCO World Heritage site.
              <br />
              <br />
              Conclude your trip in Alexandria, visiting the historic Catacombs of Kom el Shoqafa and the Fort of
              Qaitbay, which offers insight into the city's rich Christian and Islamic past. Enjoy the local cuisine and
              vibrant culture throughout your journey.
            </p>
          </div>
        </div>

        {/* Religious Sites */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-1 w-10 bg-sky-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Religious Sites in Egypt</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {egyptSites.map((site, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative">
                  <img className="w-full h-56 object-cover" src={site.image || "/placeholder.svg"} alt={site.name} />
                  <div className="absolute top-0 right-0 bg-sky-500 text-white px-3 py-1 rounded-bl-lg">
                    <FaMapMarkerAlt className="inline mr-1" />
                    {site.location.split(",")[0]}
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
              src={egyptImages[currentImageIndex] || "/placeholder.svg"}
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
              <h3 className="text-white text-2xl font-bold mb-2">Cairo, Egypt</h3>
              <p className="text-white/90">
                The bustling capital where ancient and modern religious traditions coexist
              </p>
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
  )
}

export default EgyptDetails

