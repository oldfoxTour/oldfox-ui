

import { useState, useEffect } from "react"
import { FaArrowLeft, FaStar, FaMapMarkerAlt, FaImage } from "react-icons/fa"
import { Link } from "react-router-dom"
import RwandaLocalTour from "../IMAGE/LocalTour.jpg"
import AbroadTour from "../IMAGE/InternationalTour.jpg"
import { useTranslation } from "react-i18next"

function PopularTourPackages() {
  const { t } = useTranslation()
  const [selectedTour, setSelectedTour] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [filteredTours, setFilteredTours] = useState([])

  useEffect(() => {
    if (selectedTour) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [selectedTour])

  const tourPackages = [
    {
      id: 1,
      name: t("popularTourPackages.rwandaLocalTour"),
      image: RwandaLocalTour,
      rating: 4.9,
      location: t("popularTourPackages.rwandaLocation"),
      type: t("popularTourPackages.localTourType"),
    },
    {
      id: 2,
      name: t("popularTourPackages.abroadTour"),
      image: AbroadTour,
      rating: 4.8,
      location: t("popularTourPackages.abroadLocation"),
      type: t("popularTourPackages.internationalTourType"),
    },
  ]

  const handleBack = () => {
    setSelectedTour(null)
  }

  const handleGalleryClick = (tourType) => {
    const filtered = tourPackages.filter((tour) => tour.type === tourType)
    setFilteredTours(filtered)
  }

  if (selectedTour) {
    return (
      <div className="min-h-screen bg-gray-100 p-2">
        <button onClick={handleBack} className="mb-6 flex items-center text-[#0584c7] hover:text-[#5f9fb3]">
          <FaArrowLeft className="text-xl mr-2" />
          {t("popularTourPackages.backToTours")}
        </button>

        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg">
          <div className="relative">
            <img
              src={selectedTour.image || "/placeholder.svg"}
              alt={t("popularTourPackages.scenicViewOf", { name: selectedTour.name })}
              className="w-full h-[500px] object-cover rounded-t-xl"
            />
            <div className="absolute top-4 right-4 bg-[#0584c7] text-white px-4 py-1 rounded-full">
              <FaStar className="mr-1" />
              {selectedTour.rating}
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 font-roboto">{selectedTour.name}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <FaMapMarkerAlt className="text-[#0584c7] text-xl mr-2" />
              <span>{selectedTour.location}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 font-roboto">
          {t("popularTourPackages.title")}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {tourPackages.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={t("popularTourPackages.scenicViewOf", { name: tour.name })}
                  className="w-full h-[400px] object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4 bg-[#0584c7] text-white px-4 py-1 rounded-md flex items-center gap-1">
                  {tour.type}
                </div>
                <div className="absolute top-4 right-4 bg-[#0584c7] text-white px-4 py-1 rounded-md flex items-center gap-1">
                  <FaStar />
                  {tour.rating}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 font-roboto">{tour.name}</h2>
                <div className="mt-2 flex items-center text-gray-600">
                  <FaMapMarkerAlt className="text-[#0584c7]" />
                  <span className="ml-2">{tour.location}</span>
                </div>
                <Link
                  to={tour.type === t("popularTourPackages.localTourType") ? "/localgallery" : "/internationalgallery"}
                  onClick={() => handleGalleryClick(tour.type)}
                  className="mt-4 w-full bg-[#0584c7] hover:bg-[#5f9fb3] text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-4"
                >
                  <FaImage />
                  {t("popularTourPackages.galleryImages")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularTourPackages

