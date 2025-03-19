import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function HowItWorks() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out' });
  }, []);

  return (

    <section className="flex flex-col lg:flex-row items-center justify-center w-full mt-12 mx-auto mb-12 px-4" data-aos="fade-up">

  
      {/* Header section */}
      <div className="text-center mb-6 lg:mb-0 lg:mr-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black">{t('howItWorks.title')}</h2>
        <p className="text-md md:text-lg text-sky-500">{t('howItWorks.subtitle')}</p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-around items-center w-full max-w-6xl text-center lg:text-left">
        {/* Search Section */}
        <div className="flex flex-col items-center md:items-center lg:flex-row mb-6 lg:mb-0 lg:mr-6 md:mr-4">
          <div className="flex justify-center items-center w-16 h-16 md:w-16 md:h-16 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfadebe9d3ad07dd4d5a60b2e12ca344fcc09037b155c51cd713d436f8587d4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Search Icon"
              className="w-8 h-8 md:w-8 md:h-8"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-4 md:ml-2">
            <h3 className="text-xl md:text-lg font-bold text-black">{t('howItWorks.steps.search.title')}</h3>
            <p className="text-md md:text-sm text-sky-500 font-[inria-serif]">{t('howItWorks.steps.search.description')}</p>
          </div>
        </div>

        {/* Select Section */}
        <div className="flex flex-col items-center md:items-center lg:flex-row mb-6 lg:mb-0 lg:mr-6 md:mr-4">
          <div className="flex justify-center items-center w-16 h-16 md:w-16 md:h-16 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd1bfbf2fd4467dffa930f71c2e0fb7032f399cc4d7276cb30fdc773b73d6ee?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Select Icon"
              className="w-8 h-8 md:w-8 md:h-8"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-4 md:ml-2">
            <h3 className="text-xl md:text-lg font-bold text-black">{t('howItWorks.steps.select.title')}</h3>
            <p className="text-md md:text-sm text-sky-500 font-[inria-serif]">{t('howItWorks.steps.select.description')}</p>
          </div>
        </div>

        {/* Book Section */}
        <div className="flex flex-col items-center md:items-center lg:flex-row mb-6 lg:mb-0 lg:mr-6 md:mr-4">
          <div className="flex justify-center items-center w-16 h-16 md:w-16 md:h-16 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b12edec47be92615e648f3a73746167cbd4b5f17ccad4551d6a0786c5b240a?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Book Icon"
              className="w-8 h-8 md:w-8 md:h-8"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-4 md:ml-2">
            <h3 className="text-xl md:text-lg font-bold text-black">{t('howItWorks.steps.book.title')}</h3>
            <p className="text-md md:text-sm text-sky-500 font-[inria-serif]">{t('howItWorks.steps.book.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;