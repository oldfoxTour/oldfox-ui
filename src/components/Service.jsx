"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"
import {
  FaRoute,
  FaCalendarAlt,
  FaUserFriends,
  FaBookReader,
  FaHandsHelping,
  FaLandmark,
  FaLeaf,
  FaHeart,
  FaStar,
} from "react-icons/fa"
import girl from "../IMAGE/girl.jpeg"
import kibeho from "../IMAGE/kibeho.jpg"
import tukey from "../IMAGE/tukey.jpg"

// Add these imports at the top of the file
import { useState } from "react"

import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
  FaUserGraduate,
  FaUsers,
  FaUserCog,
} from "react-icons/fa"

// Add this new component for the testimonial slider
const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonials = [
    {
      quote:
        "The Virtual Pilgrimage service offered by this company is truly revolutionary. It allowed me to connect with holy sites I never thought I'd be able to visit. The experience was deeply moving and spiritually enriching.",
      name: "Sarah Thompson",
      title: "Virtual Pilgrimage Participant",
      image: girl || "/placeholder.svg",
    },
    {
      quote:
        "Their Guided Meditation Retreats have transformed my spiritual practice. The serene locations and expert guidance provided an unforgettable experience of inner peace.",
      name: "Michael Chen",
      title: "Meditation Retreat Attendee",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      quote:
        "The Religious Heritage Tour was an eye-opening journey through different cultures and faiths. It broadened my perspective and deepened my appreciation for world religions.",
      name: "Amira Hassan",
      title: "Heritage Tour Participant",
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <FaQuoteLeft className="text-4xl text-sky-300 mb-4" />
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <p className="text-gray-600 italic text-lg mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FaQuoteRight className="text-4xl text-sky-300 mt-4 float-right" />
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

function Service() {
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-out" })
  }, [])

  return (
    <div className="flex overflow-hidden flex-col bg-stone-50 bg-opacity-50">
      {/* Hero Section */}
      <div
        className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-10 pb-12 w-full text-white min-h-[400px]"
        data-aos="zoom-out"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
          className="object-cover absolute inset-0 size-full blur-sm"
          alt="Services background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-10 md:px-20 md:pt-24">
          <div className="px-2 py-4 text-2xl mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
            {t("service.title")}
          </div>
          <div className="mt-12 sm:mt-15 flex flex-row justify-center">{t("service.subtitle")}</div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="flex flex-col px-5 md:px-14 mt-10 md:mt-14 w-full" data-aos="fade-up">
        <div className="self-end w-full max-w-[1329px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-[58%]">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col ml-2.5 max-w-full w-[372px]">
                  <div className="self-start text-xl md:text-3xl font-serif text-sky-500" data-aos="fade-up">
                    {t("service.our_services")}
                  </div>
                  <div className="mt-3 md:mt-5 text-2xl md:text-4xl text-black" data-aos="fade-up">
                    {t("service.join_adventures")} <br />
                    {t("service.with_stories")}
                  </div>
                </div>
                <div className="mt-4 text-lg md:text-xl text-black text-opacity-90" data-aos="fade-up">
                  {t("service.description")}
                </div>

                <div className="self-stretch mt-10 md:mt-14 ml-0 md:ml-5" data-aos="fade-up">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {[
                      { icon: <FaRoute />, text: t("service.custom_destinations") },
                      { icon: <FaCalendarAlt />, text: t("service.unforgettable_moments") },
                      { icon: <FaUserFriends />, text: t("service.competitive_pricing") },
                      { icon: <FaBookReader />, text: t("service.self_guide") },
                      { icon: <FaHandsHelping />, text: t("service.available") },
                      { icon: <FaLandmark />, text: t("service.transportations") },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center mb-8">
                        <div className="group flex flex-col justify-center items-center px-5 bg-white rounded-full h-[80px] md:h-[106px] w-[80px] md:w-[106px] shadow-lg transition-all duration-300 hover:bg-sky-500 hover:shadow-2xl hover:scale-110 transform hover:rotate-3">
                          <div className="text-4xl text-sky-600 group-hover:text-white transition duration-300">
                            {item.icon}
                          </div>
                        </div>
                        <div className="mt-3 md:mt-5 text-sm md:text-base text-black text-center">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[42%]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
                className="object-contain w-full aspect-[0.81] mt-10 md:mt-10"
                data-aos="fade-up"
                alt="Service illustration"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex relative mb-10 ml-0 md:ml-20 flex-col mt-10 md:mt-16 w-full max-w-[1329px] min-h-[300px] md:min-h-[417px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
            className="object-cover absolute inset-0 size-full"
            data-aos="fade-up"
          />

          <div
            className="relative flex flex-col items-center pt-40 pb-20 w-full bg-neutral-900 bg-opacity-50 sm:px-5 md:px-5 md:max-w-full"
            data-aos="fade-up"
          >
            <div className="flex flex-col w-full max-w-5xl">
              <h2 className="self-center text-2xl md:text-3xl font-bold text-white text-center">
                {t("service.Whychooseus")}
              </h2>
              <p className="self-center mt-6 mb-5 text-lg md:text-2xl text-white font-[inria-serif] text-center">
                {t("service.whyDecription")}
              </p>

              {/* Image section */}
              <div className="flex justify-between gap-5 sm:gap-2 w-full max-w-sm md:max-w-lg mx-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab42847af8ca220686e9916a9ce7128f82eeb5ab10498a9d21e3c5665b631aa9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                  alt="Affordable price guarantee"
                  className="w-12 h-12 md:w-20 md:h-20 object-contain ml-8"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d393d690b820b385444fa81c312cabcbc100e2cfc05ba174d5c218e992479f9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                  alt="Wide variety of destinations"
                  className="w-12 h-12 md:w-20 md:h-20 object-contain"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a194d8ac904f74af5c6c5de4732ebd05abb490fe021c66be21aa39935ed4394?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                  alt="High qualified service"
                  className="w-12 h-12 md:w-20 md:h-20 object-contain mr-5"
                />
              </div>

              {/* Text section */}
              <div className="flex justify-between gap-2 sm:gap-5 mt-3 text-xs md:text-sm font-medium text-white text-center max-w-sm md:max-w-lg mx-auto">
                <div className="mx-1">{t("service.benefits.affordablePrice")}</div>
                <div className="mx-1">{t("service.benefits.varietyOfDestinations")}</div>
                <div className="mx-1">{t("service.benefits.highQualityService")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Service */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 text-center mb-12">Featured Services: Spiritual Journeys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Virtual Pilgrimage",
                description: "Experience sacred sites from the comfort of your home with our innovative VR technology.",
                icon: <FaLeaf className="text-4xl text-green-500" />,
              },
              {
                title: "Guided Meditation Retreats",
                description:
                  "Join our expert-led meditation retreats in serene locations for inner peace and spiritual growth.",
                icon: <FaHeart className="text-4xl text-red-500" />,
              },
              {
                title: "Religious Heritage Tours",
                description:
                  "Explore the rich religious heritage of various cultures with our carefully curated tours.",
                icon: <FaStar className="text-4xl text-yellow-500" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Innovation in Religious Tourism */}
      <div className="py-16 bg-gradient-to-r bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 text-center mb-12">Innovation in Religious Tourism</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2" data-aos="fade-right">
              <img
                src={kibeho}
                alt="Innovative Religious Tourism"
                className="rounded-lg shadow-lg w-full h-80"
              />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4">Embracing Technology for Spiritual Journeys</h3>
              <p className="text-gray-600 mb-6">
                We're at the forefront of integrating cutting-edge technology with traditional religious tourism. Our
                innovative approaches include:
              </p>
              <ul className="list-none space-y-4">
                {[
                  "Augmented Reality (AR) guided tours of religious sites",
                  "AI-powered personalized spiritual journey planning",
                  "Blockchain-based donation systems for religious institutions",
                  "Virtual reality meditation and prayer rooms",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="container mx-auto px-4 py-16 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-sky-600 text-center mb-12">Our Service Process</h2>
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          {[
            { step: 1, title: "Consultation", description: "Discuss your spiritual goals and preferences" },
            { step: 2, title: "Customization", description: "Tailor your journey to your specific needs" },
            { step: 3, title: "Preparation", description: "Receive guidance on spiritual and practical preparation" },
            { step: 4, title: "Experience", description: "Embark on your transformative spiritual journey" },
            { step: 5, title: "Reflection", description: "Post-journey support and reflection sessions" },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-8 md:mb-0 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 relative">
                {step.step}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center max-w-[200px]">{step.description}</p>
            </div>
          ))}
        </div>
        {/* Dandelion-inspired floating elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sky-200 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="bg-gray-100 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 text-center mb-12">What Our Clients Say</h2>
          <TestimonialSlider />
        </div>
        {/* Dandelion seeds floating */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: "0 0 5px rgba(255, 255, 255, 0.7)",
            }}
          ></div>
        ))}
      </div>

      {/* Benefits of Our Services */}
      <div className="py-16 bg-gradient-to-r  bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 text-center mb-12">Benefits of Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Spiritual Growth",
                description:
                  "Our services are designed to foster deep spiritual connections and personal growth, helping you on your journey of self-discovery and enlightenment.",
                icon: <FaLeaf className="text-4xl text-green-500" />,
              },
              {
                title: "Cultural Immersion",
                description:
                  "Experience the rich tapestry of world religions and cultures firsthand, broadening your perspective and understanding of diverse spiritual practices.",
                icon: <FaGlobe className="text-4xl text-blue-500" />,
              },
              {
                title: "Expert Guidance",
                description:
                  "Benefit from the knowledge and insights of our experienced spiritual guides and local experts who provide context and deeper understanding of sacred sites and practices.",
                icon: <FaUserGraduate className="text-4xl text-purple-500" />,
              },
              {
                title: "Stress Relief",
                description:
                  "Our retreats and meditation services offer a respite from daily stresses, promoting relaxation, mindfulness, and overall well-being.",
                icon: <FaHeart className="text-4xl text-red-500" />,
              },
              {
                title: "Community Connection",
                description:
                  "Join a community of like-minded individuals on similar spiritual journeys, fostering meaningful connections and shared experiences.",
                icon: <FaUsers className="text-4xl text-yellow-500" />,
              },
              {
                title: "Personalized Experiences",
                description:
                  "We tailor our services to meet your individual spiritual needs and preferences, ensuring a deeply personal and transformative experience.",
                icon: <FaUserCog className="text-4xl text-indigo-500" />,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Unique Approach */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 text-center mb-12">
            Our Unique Approach to Religious Tourism
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2" data-aos="fade-right">
              <img
                src={tukey}
                alt="Our Unique Approach"
                className="rounded-lg shadow-lg w-full h-80"
              />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4">Blending Tradition with Innovation</h3>
              <p className="text-gray-600 mb-6">
                Our approach to religious tourism is rooted in respect for tradition while embracing modern innovations.
                We strive to:
              </p>
              <ul className="list-none space-y-4">
                {[
                  "Preserve and promote authentic spiritual experiences",
                  "Utilize technology to enhance accessibility and understanding",
                  "Foster interfaith dialogue and mutual respect",
                  "Prioritize sustainable and responsible tourism practices",
                  "Provide comprehensive support before, during, and after your journey",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Service

