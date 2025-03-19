import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

function Tour() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white'>
      <section className="flex flex-col items-center text-center mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full">
          <div className="mt-4 w-48 border-4 border-sky-500 border-solid min-h-[4px] max-md:w-32" 
            data-aos="fade-right" />
          <h2 className="text-4xl font-[jim-nightshade] text-black mx-2 max-md:text-2xl mt-4 sm:mt-0" 
            data-aos="fade-up">
           {t('tour.title')}
          </h2>
          <div className="mt-4 w-48 border-4 border-sky-500 border-solid min-h-[4px] max-md:w-32" 
            data-aos="fade-left" />
        </div>
      </section>

      <div className="flex justify-evenly gap-5 mt-10 flex-wrap max-md:justify-center max-md:flex-col max-md:items-center"
        data-aos="fade-up">
        {[
          {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0202a9382b195489e964f71ea596c66b39a218e18bbb23c0298aaef14f8fa97d?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
            alt: "Destination 1",
            label: "Israel"
          },
          {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78c2289638a6c00227af70d39357a77a3d1a0e6a882b044880038c091dde1a27?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
            alt: "Destination 2",
            label: "Rwanda"
          },
          {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dee3af1493f79e0aaa929a033c4ce039cc93865345d7fb1946cb09379b196696?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
            alt: "Destination 3",
            label: "Turkey"
          }
        ].map(({ src, alt, label }, index) => (
          <div key={index} className="relative w-[200px] h-[200px] max-md:w-[150px] max-md:h-[150px] max-sm:w-[180px] max-sm:h-[180px] max-md:mb-5"
            data-aos="fade-up" data-aos-delay={`${index * 200}`}>
            <img
              loading="lazy"
              src={src}
              alt={alt}
              className="object-cover rounded-full w-full h-full hover:opacity-45 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 w-full border-4 border-sky-500 border-solid min-h-[4px] max-md:mt-10 max-md:max-w-full" 
        data-aos="fade-up" />
    </div>
  );
}

export default Tour;

