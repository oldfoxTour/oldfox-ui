import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUpcomingPosts } from "../slices/postSlice"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import video from "../IMAGE/video.mp4"
import { useTranslation } from "react-i18next"
import {Link} from "react-router-dom"
import { useSpring, animated, config } from "react-spring"
import { format } from "date-fns"

import Tour from "../components/Tour"

const allDestinations = [
  { id: "rwanda", name: "Rwanda" },
  { id: "israel", name: "Israel" },
  { id: "egypt", name: "Egypt" },
  { id: "turkey", name: "Turkey" },
]

export default function TravelHero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const upcomingTrips = posts.upcomingPosts
  const { loading } = posts
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [currentTripIndex, setCurrentTripIndex] = useState(0)
  const titleRef = useRef(null)
  const tourRef = useRef(null)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
  }

  const titleAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
    config: config.molasses,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  useEffect(() => {
    dispatch(fetchUpcomingPosts())
  }, [dispatch])

  useEffect(() => {
    const results = allDestinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setSearchResults(results)
  }, [searchTerm])

  useEffect(() => {
    if (upcomingTrips && upcomingTrips.length > 0) {
      const timer = setInterval(() => {
        setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length)
      }, 5000) // Change image every 5 seconds

      return () => clearInterval(timer)
    }
  }, [upcomingTrips])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      navigate(`/destination/${searchResults[0].id}`)
    }
  }

  return (
    <>
      <div className="relative pt-16 sm:pt-24 min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="bg-black absolute inset-0 opacity-55"></div>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="relative container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <animated.h1
              ref={titleRef}
              style={titleAnimation}
              className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t("hero.title")}
            </animated.h1>

<div className="space-y-6 max-w-md mx-auto lg:mx-0">
              {[
                { id: "internationalTour", defaultDesc: "OldFox guides you through global spiritual landmarks" },
                { id: "religionTour", defaultDesc: "Explore sacred sites with OldFox's expert knowledge" },
                { id: "localTour", defaultDesc: "Discover hidden spiritual gems in your area with OldFox" },
              ].map((tour, index) => (
                <div
                  key={tour.id}
                  className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-3 transform transition-all duration-300 hover:scale-105"
                >
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">{t(`hero.${tour.id}`)}</h2>
                  <p className="text-xs sm:text-sm text-white">{t(`hero.${tour.id}Desc`, tour.defaultDesc)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-10">
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder={t("hero.searchPlaceholder", "Search for a destination")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-full py-2 sm:py-3 px-6 pl-12 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg text-white placeholder-white"
                  aria-label={t("hero.searchLabel", "Search for a trip")}
                />
                <FaSearch
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
                  aria-hidden="true"
                />
              </form>
              {searchTerm && (
                <div className="absolute z-10 w-full mt-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <div
                        key={result.id}
                        className="px-4 py-2 hover:bg-white hover:bg-opacity-30 cursor-pointer text-white"
                        onClick={() => navigate(`/destination/${result.id}`)}
                      >
                        {result.name}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-white">No destinations found for "{searchTerm}"</div>
                  )}
                </div>
              )}
            </div>

            <div
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 shadow-lg relative overflow-hidden"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {t("hero.upcomingTrip")}
              </h2>
              {loading ? (
                <p className="text-white">Loading...</p>
              ) : (
                <div className="relative aspect-[16/7.6] overflow-hidden rounded-lg">
                  {upcomingTrips && upcomingTrips.length > 0 ? (
                    <div
                      className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                      style={{
                        transform: `translateX(-${currentTripIndex * 100}%)`,
                      }}
                    >
                      {upcomingTrips.map((trip, index) => (
                        <div
                          key={index}
                          className="w-full h-full flex-shrink-0"
                          style={{ position: "relative" }}
                        >
                          <img
                            src={
                              Array.isArray(trip.postImage) && trip.postImage.length > 0
                                ? trip.postImage[0].url
                                : ""
                            }
                            alt={trip.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold sm:gap-9">
                            {trip.title}
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                              <Link 
                                to="/destiny" 
                                className="bg-blue-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-full inline-block hover:bg-blue-600 transition"
                              >
                                Book your trip
                              </Link>
                              <h4 className="text-blue-500 mt-2 sm:mt-0">
                                TOUR DATE: 
                                <span className="text-white">
                                  {trip.postDate ? format(new Date(trip.postDate), 'MMMM dd, yyyy') : "Date not available"}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white">No upcoming trips available.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div ref={tourRef}>
        <Tour />
      </div>
    </>
  )
}


