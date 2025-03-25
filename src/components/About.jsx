"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { FaMapMarkedAlt, FaUsers, FaGlobeAmericas } from "react-icons/fa"
import { MdTour, MdNaturePeople, MdEco } from "react-icons/md"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next" // Import the translation hook
import gad from '../IMAGE/gad.jpg'
import winnie from '../IMAGE/winnie.jpg'

function About() {
  const { t } = useTranslation() // Initialize the translation function

  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-out" })
  }, [])

  const teamMembers = [
    {
      name: "MUKAWERA Mary Winnie",
      role: t("about.boss"),
      image:winnie,
    },
    {
      name: "KAGAME Gad",
      role: t("about.operations"),
      image:gad,
    },
   
  ]

  const features = [
    {
      title: t("about.features.expertGuides.title"),
      description: t("about.features.expertGuides.description"),
      icon: <MdTour className="text-4xl text-sky-600 mb-4" />,
    },
    {
      title: t("about.features.respectfulApproach.title"),
      description: t("about.features.respectfulApproach.description"),
      icon: <MdNaturePeople className="text-4xl text-sky-600 mb-4" />,
    },
    {
      title: t("about.features.immersiveExperiences.title"),
      description: t("about.features.immersiveExperiences.description"),
      icon: <FaUsers className="text-4xl text-sky-600 mb-4" />,
    },
    {
      title: t("about.features.diverseDestinations.title"),
      description: t("about.features.diverseDestinations.description"),
      icon: <FaMapMarkedAlt className="text-4xl text-sky-600 mb-4" />,
    },
    {
      title: t("about.features.smallGroups.title"),
      description: t("about.features.smallGroups.description"),
      icon: <FaUsers className="text-4xl text-sky-600 mb-4" />,
    },
    {
      title: t("about.features.sustainableTourism.title"),
      description: t("about.features.sustainableTourism.description"),
      icon: <MdEco className="text-4xl text-sky-600 mb-4" />,
    },
  ]

  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      {/* Hero Section */}
      <div
        className="flex relative flex-col self-stretch w-full text-4xl text-white min-h-[300px] sm:min-h-[400px] md:min-h-[400px]"
        data-aos="zoom-out"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w"
          className="object-cover absolute inset-0 size-full blur-sm"
          alt={t("about.backgroundAlt")}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex relative flex-col justify-start items-center px-4 pt-16 w-full sm:px-8 sm:pt-20 md:px-20 md:pt-24">
          <div className="px-2 py-4 text-2xl mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
            {t("about.header")}
          </div>
          <div className="mt-12 sm:mt-15 text-xl flex flex-row justify-center">{t("about.tagline")}</div>
        </div>
      </div>

      {/* Our Story */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-sky-600 mb-6">{t("about.storyTitle")}</h2>
        <p className="text-lg mb-6 text-gray-700">{t("about.storyPart1")}</p>
        <p className="text-lg text-gray-700">{t("about.storyPart2")}</p>
      </div>

      {/* Quotes Section */}
      <div className="mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8 w-full max-w-[1232px]" data-aos="fade-up">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col w-full" data-aos="fade-right">
              <div className="self-start text-lg sm:text-xl md:text-2xl text-gray-800 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-200 to-sky-500"></div>
                <p className="italic mt-4 pr-4">{t("about.quote1")}</p>
              </div>
              <div className="mt-8 sm:mt-12 md:mt-28">
                <div className="flex flex-col items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w"
                    className="object-contain z-0 w-full aspect-[1.74] shadow-[0px_100px_80px_rgba(0,0,0,0.07)]"
                    alt={t("about.religiousDestinationAlt")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-6/12 mt-8 md:mt-0" data-aos="fade-left">
            <div className="flex flex-col text-lg sm:text-xl md:text-2xl text-gray-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w"
                className="object-contain max-w-full aspect-[1.58] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-full"
                alt={t("about.religiousLandmarkAlt")}
              />
              <div className="self-end pt-20 sm:mt-12 md:mt-16 relative" data-aos="fade-up">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-sky-200 to-sky-500"></div>
                <p className="italic pb-4 pl-4">{t("about.quote2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full bg-gray-50 py-16 mt-20" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-600 mb-12">{t("about.whyChooseUsTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Impact */}
      <div className="w-full max-w-6xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-sky-600 mb-12">{t("about.impactTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div data-aos="zoom-in" data-aos-delay="0">
            <FaUsers className="text-5xl text-sky-600 mb-4 mx-auto" />
            <span className="text-4xl font-bold text-gray-800">50,000+</span>
            <p className="text-xl mt-2 text-gray-600">{t("about.impact.pilgrims")}</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <FaMapMarkedAlt className="text-5xl text-sky-600 mb-4 mx-auto" />
            <span className="text-4xl font-bold text-gray-800">100+</span>
            <p className="text-xl mt-2 text-gray-600">{t("about.impact.sites")}</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <FaGlobeAmericas className="text-5xl text-sky-600 mb-4 mx-auto" />
            <span className="text-4xl font-bold text-gray-800">25+</span>
            <p className="text-xl mt-2 text-gray-600">{t("about.impact.countries")}</p>
          </div>
        </div>
      </div>

{/* Team Section */}
<div className="w-full max-w-6xl mx-auto px-4 py-16 shadow-lg bg-gray-100" data-aos="fade-up">
  <div className="flex flex-col items-center mb-12">
    <div className="h-1 w-16 bg-sky-600 mb-4" />
    <h2 className="text-3xl font-bold text-sky-600">{t("about.team")}</h2>
    <div className="h-1 w-16 bg-sky-600 mt-4" />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:ml-80 lg:ml-80 xl:ml-80">
    {teamMembers.map((member, index) => (
      <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
        <div className="w-48 h-48 mx-auto mb-4">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sky-600">{member.role}</p>
      </div>
    ))}
  </div>
</div>

      {/* Call to Action */}
      <div className="w-full bg-white py-16 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 mb-4">{t("about.ctaTitle")}</h2>
          <p className="text-xl mb-8 text-gray-700">{t("about.ctaDescription")}</p>
          <Link to="/destiny">
            <button className="bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-700 transition duration-300">
              {t("about.ctaButton")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About

