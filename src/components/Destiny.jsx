"use client"

import { useState, useEffect } from "react"
import { useSpring, animated, useTrail } from "react-spring"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { FaBook, FaLandmark, FaSpinner } from "react-icons/fa"
import { fetchPostsByDestination } from '../slices/postSlice'
import AOS from "aos"
import "aos/dist/aos.css"

import BookingModal from "./booking-modal"

// Sample data
const destinations = ["Israel", "Egypt", "Turkey", "Rwanda"]

function PostCard({ post, onBooking }) {
  const { t } = useTranslation()
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 100,
    config: { tension: 300, friction: 10 },
  })

  const selectedPost = post; // Define selectedPost here
  const formattedDate = new Date(selectedPost?.postDate).toLocaleDateString() // Use tripDate from main post object

  return (
    <animated.div
      style={cardAnimation}
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
    >
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.content}</p>
        <div className="bg-sky-100 p-3 sm:p-4 rounded-lg mb-4">
          <h4 className="font-medium text-sky-500 mb-1 sm:mb-2">Destination:</h4>
          <p className="text-xs sm:text-sm text-sky-750">{post.destination}</p>
        </div>
        <div className="bg-sky-100 p-3 sm:p-4 rounded-lg mb-4">
          <h4 className="font-medium text-sky-500 mb-1 sm:mb-2">Trip Date:</h4>
          <p className="text-xs sm:text-sm text-sky-750">{formattedDate}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Tour Sites:</h4>
          <div className="grid grid-cols-2 gap-2">
            {post.sites.map((site, i) => (
              <div key={i} className="flex items-center text-xs sm:text-sm text-gray-600">
                <FaBook className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-sky-600" />
                {site.name}
              </div>
            ))}
          </div>
        </div>
        <button
          className="mt-4 sm:mt-6 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-500 transition-colors duration-300 text-sm sm:text-base"
          onClick={() => onBooking(post)}
        >
          Book
        </button>
      </div>
    </animated.div>
  )
}

function CountryButtons({ countries, activeCountry, setActiveCountry }) {
  const { t } = useTranslation()
  const trail = useTrail(countries.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  })

  useEffect(() => {
    if (!activeCountry && countries.length > 0) {
      setActiveCountry(countries[0])
    }
  }, [activeCountry, countries, setActiveCountry])

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-8 px-2 sm:px-4 w-full">
      {trail.map((props, index) => (
        <animated.button
          key={countries[index]}
          style={props}
          onClick={() => setActiveCountry(countries[index])}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
            activeCountry === countries[index]
              ? "bg-sky-600 text-white shadow-lg transform -translate-y-1"
              : "bg-white text-gray-600 hover:bg-sky-100"
          }`}
        >
          {countries[index]}
        </animated.button>
      ))}
    </div>
  )
}

function TypeFilters({ filterTypes, selectedType, setSelectedType }) {
  const trail = useTrail(filterTypes.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  })


}

export default function Destiny() {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [activeCountry, setActiveCountry] = useState(null)
  const countries = destinations; // Use the enum destinations
  const filterTypes = ["All", "Historical", "Cultural"] // Example filter types
  const [selectedType, setSelectedType] = useState(filterTypes[0])
  const posts = useSelector(state => state.posts.destinationPosts) || []
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { tension: 300, friction: 10 },
  })

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-out" })
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        await dispatch(fetchPostsByDestination(activeCountry))
        setErrorMessage(null)
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage("No posts found for this destination")
        } else {
          setErrorMessage("An error occurred while fetching posts")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [dispatch, activeCountry])

  const handleBooking = (post) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <animated.div
        style={headerAnimation}
        className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-10 pb-12 w-full text-white min-h-[400px]"
        data-aos="zoom-out"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00"
          className="absolute inset-0 object-cover w-full h-full blur-sm"
          alt={t("destini.backgroundAlt")}
          jsx="true" // Fix jsx attribute warning
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-10 md:px-20 md:pt-24">
          <div className="px-2 py-4 text-2xl mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
            {t("destini.title")}
          </div>
          <div className="mt-12 sm:mt-15 flex flex-row justify-center">{t("destini.subtitle")}</div>
        </div>
      </animated.div>
      <CountryButtons
        countries={countries}
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
      />
      <TypeFilters
        filterTypes={filterTypes}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {loading ? (
          <div className="col-span-full flex justify-center items-center">
            <FaSpinner className="animate-spin text-sky-600 text-4xl" />
          </div>
        ) : errorMessage ? (
          <div className="col-span-full text-red-500 text-center">
            {errorMessage}
          </div>
        ) : (
          posts
            .filter(post => !activeCountry || post.destination === activeCountry)
            .filter(post => selectedType === "All" || post.type === selectedType)
            .map((post, index) => (
              <PostCard key={post._id} post={post} index={index} onBooking={handleBooking} />
            ))
        )}
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={selectedPost}
        postId={selectedPost?._id}
        postPrice={selectedPost?.price}
        postDate={selectedPost?.postDate}
      />
    </div>
  )
}
