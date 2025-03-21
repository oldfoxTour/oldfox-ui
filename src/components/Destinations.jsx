"use client"

import { useState, useEffect } from "react"
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

function Destinations() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    })
    AOS.refresh()
  }, [])

  const destinations = [
    {
      name: "Istanbul",
      country: "Turkey",
      description: "Experience the magic where East meets West",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      link: "/TurkeyDetails",
    },
    {
      name: "Kibeho",
      country: "Rwanda",
      description: "Discover the natural beauty of the land of a thousand hills",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      link: "/RwandaDetails",
    },
    {
      name: "Cairo",
      country: "Egypt",
      description: "Walk in the footsteps of pharaohs and ancient civilizations",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      link: "/EgyptDetails",
    },
    {
      name: "Jerusalem",
      country: "Israel",
      description: "Journey through the sacred sites of the Holy Land",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      link: "/JerusalemDetails",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white bg-shadow">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-4xl font-[jim-nightshade] text-center mb-1" data-aos="fade-down">
          Places to visit
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="200">
          Explore our handpicked destinations for unforgettable journeys and spiritual experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationCard({ name, country, description, image, link, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const animationDelay = index * 100

  return (
    <article className="h-full" data-aos="fade-up" data-aos-delay={animationDelay} data-aos-duration="800">
      <div
        className="relative h-full rounded-xl overflow-hidden shadow-lg group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image with Parallax Effect */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out ${isHovered ? "scale-110" : "scale-100"}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Content Container */}
        <div className="relative h-[400px] p-6 flex flex-col justify-end z-10 transition-all duration-500">
          {/* Location Badge */}
          <div
            className="flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full w-fit mb-3 transform translate-y-0 opacity-100 group-hover:translate-y-0 transition-all duration-500"
            data-aos="fade-right"
            data-aos-delay={animationDelay + 200}
          >
            <FaMapMarkerAlt className="mr-1 text-sm" />
            <span className="text-sm font-medium">{country}</span>
          </div>

          {/* Destination Name */}
          <h3
            className="text-2xl font-bold text-white mb-2 transform group-hover:translate-y-0 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={animationDelay + 300}
          >
            {name}
          </h3>

          {/* Description - Hidden by default, shown on hover */}
          <p
            className={`text-white/90 mb-6 transform transition-all duration-500 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {description}
          </p>

          {/* Explore Button */}
          <Link to={link} className="group/button">
            <button
              className={`flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transform transition-all duration-500 ${
                isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span>Explore More</span>
              <FaArrowRight className="transform group-hover/button:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Destinations

