import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import rwTranslations from './locales/rw/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    rw: { translation: rwTranslations },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
