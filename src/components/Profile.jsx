import React, { useState } from 'react';
import { Mail, Phone, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import backgroundVideo from "../IMAGE/Back.mp4";
import israel from '../IMAGE/israel.jpg'
import tukey from '../IMAGE/tukey.jpg'

function DestinationCard({ imageSrc, location, description, showTutor, aosAnimation }) {
  const { t } = useTranslation();
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${aosAnimation ? `aos-animate aos-init" data-aos="${aosAnimation}` : ''}`}>
      <img src={imageSrc} alt={location} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{t(location)}</h3>
        <p className="text-gray-600">{t(description)}</p>
        {showTutor && (
          <div className="mt-4 bg-blue-100 text-sky-500 p-2 rounded-md text-sm">
            {t('newDestinationTutor')}
          </div>
        )}
      </div>
    </div>
  );
}

export default function UserProfileDashboard() {
  const [activeTab, setActiveTab] = useState('personal');
  const [profileImage, setProfileImage] = useState('/placeholder.svg?height=96&width=96');
  const { t, i18n } = useTranslation();
  const [likedDestinations] = useState([
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a",
      location: "profile.destinations.rwanda.name",
      description: "profile.destinations.rwanda.description",
      hasVisited: false
    },
    {
      imageSrc: tukey,
      location: "profile.destinations.turkey.name",
      description: "profile.destinations.turkey.description",
      hasVisited: true
    },
    {
      imageSrc: israel,
      location: "profile.destinations.israel.name",
      description: "profile.destinations.israel.description",
      hasVisited: false
    }
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const renderPersonalInfo = () => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('profile.personalInfo')}</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="relative group">
          <img src={profileImage} alt="User avatar" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-2" />
          <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
            <Upload className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="sr-only">{t('profile.uploadNewAvatar')}</span>
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
        <p className="text-xs sm:text-sm text-primary/60 mt-2">{t('profile.clickToUpload')}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-primary font-semibold mb-1">{t('profile.fullName')}</label>
          <input id="fullName" type="text" placeholder={t('profile.fullName')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary font-semibold mb-1">{t('profile.email')}</label>
          <input id="email" type="email" placeholder={t('profile.email')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-primary font-semibold mb-1">{t('profile.phone')}</label>
          <input id="phone" type="tel" placeholder={t('profile.phone')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
      </div>
      <button className="mt-6 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-500 transition-colors w-full sm:w-auto">
        {t('profile.saveChanges')}
      </button>
    </div>
  );

  const renderPreferences = () => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('profile.likedDestinations')}</h2>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {likedDestinations.map((destination, index) => (
          <DestinationCard
            key={index}
            imageSrc={destination.imageSrc}
            location={destination.location}
            description={destination.description}
            showTutor={!destination.hasVisited}
            aosAnimation="zoom-in"
          />
        ))}
      </div>
      <p className="text-xs sm:text-sm text-primary/80 mt-4">{t('profile.likedDestinationsDescription')}</p>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('profile.accountSettings')}</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block text-primary font-semibold mb-1">{t('profile.currentPassword')}</label>
          <input id="currentPassword" type="password" placeholder={t('profile.currentPassword')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-primary font-semibold mb-1">{t('profile.newPassword')}</label>
          <input id="newPassword" type="password" placeholder={t('profile.newPassword')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-primary font-semibold mb-1">{t('profile.confirmPassword')}</label>
          <input id="confirmPassword" type="password" placeholder={t('profile.confirmPassword')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
      </div>
      <button className="mt-6 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors w-full sm:w-auto">
        {t('profile.changePassword')}
      </button>
    </div>
  );

  const renderSupport = () => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('profile.supportContact')}</h2>
      <p className="mb-4 text-sm sm:text-base">{t('profile.supportDescription')}</p>
      <div className="flex items-center mb-2 text-sm sm:text-base">
        <Mail className="text-primary mr-2" size={18} />
        <span>{t('profile.supportEmail')}: Oldfoxcoltd@gmail.com</span>
      </div>
      <div className="flex items-center mb-4 text-sm sm:text-base">
        <Phone className="text-primary mr-2" size={18} />
        <span>{t('profile.supportPhone')}: +250788726181</span>
      </div>
      <div className="mb-4">
        <label htmlFor="supportMessage" className="block text-primary font-semibold mb-1">{t('profile.message')}</label>
        <textarea id="supportMessage" placeholder={t('profile.describeProblem')} rows={4} className="w-full p-2 border border-primary/30 rounded-md" />
      </div>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition-colors w-full sm:w-auto">
        {t('profile.submitRequest')}
      </button>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" /> 
      </video>
      <div className="relative z-10 p-4 sm:p-8 max-w-screen-xl mx-auto shadow-lg">
        <div className=" bg-white p-4 mt-14 sm:p-8 rounded-lg shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold text-black  my-6">{t('profile.title')}</h1>
          <div className="tabs flex flex-wrap mb-4 font-bold  lg:flex-row flex-col">
            <button
              onClick={() => setActiveTab('personal')}
              className={`tab ${activeTab === 'personal' ? 'text-sky-500  border-b-2 border-sky-500' : 'text-black'} px-3 sm:px-6 py-2 text-md sm:text-base `}
            >
              {t('profile.personalInfo')}
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`tab ${activeTab === 'preferences' ? 'text-sky-500 border-b-2 border-sky-500' : 'text-black'} px-3 sm:px-6 py-2 text-md sm:text-base`}
            >
              {t('profile.preferences')}
            </button>
            <button
              onClick={() => setActiveTab('account')}
              className={`tab ${activeTab === 'account' ? 'text-sky-500  border-b-2 border-sky-500' : 'text-black'} px-3 sm:px-6 py-2 text-md sm:text-base`}
            >
              {t('profile.accountSettings')}
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`tab ${activeTab === 'support' ? 'text-sky-500 border-b-2 border-sky-500'  : 'text-black'} px-3 sm:px-6 py-2 text-md sm:text-base`}
            >
              {t('profile.support')}
            </button>
          </div>

          {activeTab === 'personal' && renderPersonalInfo()}
          {activeTab === 'preferences' && renderPreferences()}
          {activeTab === 'account' && renderAccountSettings()}
          {activeTab === 'support' && renderSupport()}
        </div>
      </div>
    </div>
  );
}

