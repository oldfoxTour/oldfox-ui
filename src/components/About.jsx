"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { FaMapMarkedAlt, FaUsers, FaGlobeAmericas } from "react-icons/fa"
import { MdTour, MdNaturePeople, MdEco } from "react-icons/md"

function About() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-out" })
  }, [])

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400",
    },
    {
      name: "Amira Hassan",
      role: "Religious Studies Expert",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400",
    },
  ]

  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      {/* Hero Section (Kept as original) */}
      <div
        className="flex relative flex-col self-stretch w-full text-4xl text-white min-h-[300px] sm:min-h-[400px] md:min-h-[400px]"
        data-aos="zoom-out"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w"
          className="object-cover absolute inset-0 size-full blur-sm"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex relative flex-col justify-start items-center px-4 pt-16 w-full sm:px-8 sm:pt-20 md:px-20 md:pt-24">
          <div className="px-2 py-4 text-2xl mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
            About us
          </div>
          <div className="mt-12 sm:mt-15 text-xl flex flex-row justify-center">
            Discover spiritual destinations with us
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-sky-600 mb-6">Our Story</h2>
        <p className="text-lg mb-6 text-gray-700">
          Founded in 2010, Sacred Journeys began with a simple yet profound mission: to connect people with the world's
          most spiritually significant places. Our founder, Sarah Johnson, was inspired by her own transformative
          experiences at various religious sites around the globe.
        </p>
        <p className="text-lg text-gray-700">
          What started as a small operation offering guided tours to local pilgrimage sites has now grown into a
          respected name in religious tourism, serving thousands of spiritual seekers each year.
        </p>
      </div>

      {/* Quotes Section */}
      <div className="mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8 w-full max-w-[1232px]" data-aos="fade-up">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col w-full" data-aos="fade-right">
              <div className="self-start text-lg sm:text-xl md:text-2xl text-gray-800 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-200 to-sky-500"></div>
                <p className="italic mt-4 pr-4">
                  Embark on a journey of spiritual discovery and cultural immersion with Sacred Journeys.
                </p>
              </div>
              <div className="mt-8 sm:mt-12 md:mt-28">
                <div className="flex flex-col items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w"
                    className="object-contain z-0 w-full aspect-[1.74] shadow-[0px_100px_80px_rgba(0,0,0,0.07)]"
                    alt="Religious destination"
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
                alt="Religious landmark"
              />
              <div className="self-end pt-20 sm:mt-12 md:mt-16 relative" data-aos="fade-up">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-sky-200 to-sky-500"></div>
                <p className="italic pb-4 pl-4">
                  Experience the profound beauty and spiritual significance of sacred sites around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full bg-gray-50 py-16 mt-20" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-600 mb-12">Why Choose Sacred Journeys?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guides",
                description:
                  "Our guides are not just tour leaders, but scholars in religious studies and local cultures.",
                icon: <MdTour className="text-4xl text-sky-600 mb-4" />,
              },
              {
                title: "Respectful Approach",
                description:
                  "We ensure all our tours are conducted with the utmost respect for local customs and beliefs.",
                icon: <MdNaturePeople className="text-4xl text-sky-600 mb-4" />,
              },
              {
                title: "Immersive Experiences",
                description:
                  "Go beyond sightseeing with opportunities for meditation, prayer, and spiritual practices.",
                icon: <FaUsers className="text-4xl text-sky-600 mb-4" />,
              },
              {
                title: "Diverse Destinations",
                description:
                  "From ancient temples to modern pilgrimage sites, we cover a wide range of spiritual locations.",
                icon: <FaMapMarkedAlt className="text-4xl text-sky-600 mb-4" />,
              },
              {
                title: "Small Groups",
                description: "We keep our groups small to ensure a more personal and meaningful experience.",
                icon: <FaUsers className="text-4xl text-sky-600 mb-4" />,
              },
              {
                title: "Sustainable Tourism",
                description: "We're committed to minimizing our environmental impact and supporting local communities.",
                icon: <MdEco className="text-4xl text-sky-600 mb-4" />,
              },
            ].map((item, index) => (
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
        <h2 className="text-3xl font-bold text-center text-sky-600 mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div data-aos="zoom-in" data-aos-delay="0">
            <FaUsers className="text-5xl text-sky-600 mb-4 mx-auto" />
            <span className="text-4xl font-bold text-gray-800">50,000+</span>
            <p className="text-xl mt-2 text-gray-600">Pilgrims Guided</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <FaMapMarkedAlt className="text-5xl text-sky-600 mb-4 mx-auto" />
            <span className="text-4xl font-bold text-gray-800">100+</span>
            <p className="text-xl mt-2 text-gray-600">Sacred Sites Visited</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <FaGlobeAmericas className="text-5xl text-sky-600 mb-4 mx-auto" />
            <span className="text-4xl font-bold text-gray-800">25+</span>
            <p className="text-xl mt-2 text-gray-600">Countries Explored</p>
          </div>
        </div>
        
      </div>

      {/* Team Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-16 shadow-lg  bg-gray-100" data-aos="fade-up">
        <div className="flex flex-col items-center mb-12">
          <div className="h-1 w-16 bg-sky-600 mb-4" />
          <h2 className="text-3xl font-bold text-sky-600">Meet Our Team</h2>
          <div className="h-1 w-16 bg-sky-600 mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sky-600">{member.role}</p>
            </div>
          ))}
        </div>
        
      </div>

      {/* Testimonials */}
      <div className="w-full bg-gray-100 py-16 mt-10 relative" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-sky-600">What Our Pilgrims Say</h2>
          <div className="space-y-8">
            <blockquote className="text-xl italic text-gray-700" data-aos="fade-right">
              "Sacred Journeys provided me with a life-changing experience. The attention to detail and spiritual
              guidance were beyond my expectations."
              <footer className="mt-2 font-semibold text-gray-600">- Maria G., Spain</footer>
            </blockquote>
            <blockquote className="text-xl italic text-gray-700" data-aos="fade-left">
              "I've traveled with many tour companies, but none compare to the depth and authenticity of Sacred
              Journeys. They truly understand the essence of spiritual travel."
              <footer className="mt-2 font-semibold text-gray-600">- John D., USA</footer>
            </blockquote>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#0EA5E9" strokeWidth="2" />
            <circle cx="30" cy="30" r="3" fill="#0EA5E9" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="30"
                y1="30"
                x2={30 + 25 * Math.cos((i * Math.PI) / 4)}
                y2={30 + 25 * Math.sin((i * Math.PI) / 4)}
                stroke="#0EA5E9"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-white py-16 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 mb-4">Ready to Begin Your Sacred Journey?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Join us on a transformative adventure to the world's most revered spiritual destinations.
          </p>
          <button className="bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-700 transition duration-300">
            Explore Our Tours
          </button>
        </div>
      </div>
    </div>
  )
}

export default About

