"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import image50 from "../IMAGE/image50.jpeg"
import image51 from "../IMAGE/image51.jpeg"
import image52 from "../IMAGE/image52.jpeg"
import image55 from "../IMAGE/image55.jpeg"
import image56 from "../IMAGE/image56.jpeg"
import image57 from "../IMAGE/image57.jpeg"
import image58 from "../IMAGE/image58.jpeg"
import image59 from "../IMAGE/image59.jpeg"
import image1 from "../IMAGE/image1.png"
import image2 from "../IMAGE/image2.png"
import image3 from "../IMAGE/image3.png"
import image7 from "../IMAGE/image7.jpeg"
import image8 from "../IMAGE/image8.jpeg"
import image9 from "../IMAGE/image9.jpeg"
import image10 from "../IMAGE/image10.jpeg"
import image11 from "../IMAGE/image11.jpeg"

const Gallery = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    // Simulating fetching location data from an API
    const fetchLocations = async () => {
      const locationData = [
        { src: image50, title: "Israel", description: "." },
        { src: image51, title: "France", description: "." },
        { src: image52, title: "Turkey", description: "." },
        { src: image55, title: "Turkey", description: "." },
        { src: image56, title: "Egypt", description: "." },
        { src: image57, title: "Italy", description: "." },
        { src: image58, title: "Tel Aviv", description: "." },
        { src: image59, title: "Zion", description: "." },
        { src: image1, title: "Kibeho", description: "Urugendo rutagatifu." },
        { src: image2, title: "Inyanza m'urukari", description: "Umuco nyarwanda." },
        { src: image3, title: "Inka", description: "Umuco nyarwanda." },
        { src: image7, title: "Tembera urwanda", description: "Imisozi nibibaya." },
        { src: image8, title: "Kigali", description: "Kigali ikeye." },
        { src: image9, title: "Ibirunga", description: "Musanze ikeye." },
        { src: image10, title: "Abapadiri", description: "Ijambo ry'IMANA hose." },
        { src: image11, title: "Kibeho", description: "Ubwami bw'Imana hose." },
        { src: image50, title: "Israel", description: "." },
        { src: image51, title: "France", description: "." },
        { src: image52, title: "Turkey", description: "." },
        { src: image55, title: "Turkey", description: "." },
        { src: image56, title: "Egypt", description: "." },
        { src: image57, title: "Italy", description: "." },
        { src: image58, title: "Tel Aviv", description: "." },
        { src: image59, title: "Zion", description: "." },
        { src: image1, title: "Kibeho", description: "Urugendo rutagatifu." },
        { src: image2, title: "Inyanza m'urukari", description: "Umuco nyarwanda." },
        { src: image3, title: "Inka", description: "Umuco nyarwanda." },
        { src: image7, title: "Tembera urwanda", description: "Imisozi nibibaya." },
        { src: image8, title: "Kigali", description: "Kigali ikeye." },
        { src: image9, title: "Ibirunga", description: "Musanze ikeye." },
        { src: image10, title: "Abapadiri", description: "Ijambo ry'IMANA hose." },
        { src: image11, title: "Kibeho", description: "Ubwami bw'Imana hose." },
        { src: image52, title: "Turkey", description: "." },
        { src: image50, title: "Israel", description: "." },
        { src: image51, title: "France", description: "." },
        { src: image52, title: "Turkey", description: "." },
        { src: image55, title: "Turkey", description: "." },
        { src: image56, title: "Egypt", description: "." },
        { src: image57, title: "Italy", description: "." },
        { src: image58, title: "Tel Aviv", description: "." },
        { src: image59, title: "Zion", description: "." },
        { src: image1, title: "Kibeho", description: "Urugendo rutagatifu." },
        { src: image2, title: "Inyanza m'urukari", description: "Umuco nyarwanda." },
        { src: image3, title: "Inka", description: "Umuco nyarwanda." },
        { src: image7, title: "Tembera urwanda", description: "Imisozi nibibaya." },
        { src: image8, title: "Kigali", description: "Kigali ikeye." },
        { src: image9, title: "Ibirunga", description: "Musanze ikeye." },
        { src: image10, title: "Abapadiri", description: "Ijambo ry'IMANA hose." },
        { src: image11, title: "Kibeho", description: "Ubwami bw'Imana hose." },
        { src: image56, title: "Egypt", description: "." },
        { src: image57, title: "Italy", description: "." },
      ]
      setLocations(locationData)
    }

    fetchLocations()
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen py-12 pt-32 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-sky-600 mb-12">Explore Beautiful Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={location.src || "/placeholder.svg"}
              alt={location.title}
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-xl font-semibold text-white">{location.title}</h2>
                <p className="text-sm text-gray-300">{location.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

