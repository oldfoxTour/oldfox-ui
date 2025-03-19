import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { contactMessage } from '../slices/contactSlice'; // Correct import
import { Spinner } from './Spinner'; // Import Spinner component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(""); // State for error/success messages
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      await dispatch(contactMessage(formData)).unwrap(); // Correct dispatch call
      toast.success("Message sent successfully!");
      setName(""); // Clear form fields
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.toString());
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-out' });
  }, []);

  return (
    <div className="flex flex-col items-center bg-stone-50 bg-opacity-50 overflow-hidden">
      <ToastContainer />
      <header className="relative w-full bg-black bg-opacity-30 text-white py-0.5">
        <div className="relative flex flex-col items-center px-4 sm:px-6 lg:px-20 pt-7 pb-10 sm:pb-32 lg:pb-20 min-h-[300px] sm:min-h-[400px] lg:min-h-[400px] " data-aos="zoom-out" >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f93c0c151d2456604e78e6fd64e05bbe07b681d348b7c4a62bf319aeb9c8c617?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
            alt="Background"
            className="object-cover absolute inset-0 size-full blur-sm"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-20 md:px-20 md:pt-24">
            <div className="px-2 py-4 text-2xl mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
              {t('contact.header')}
            </div>
            <div className="mt-12 sm:mt-15 flex flex-row justify-center">
              {t('contact.contactus')}
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center w-full max-w-4xl px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 className="mt-10 text-xl sm:text-2xl font-bold text-sky-500  mb-3">{t('contact.get_in_touch')}</h2>

        {/* Notification Section */}
        {notification && (
          <div className="mt-4 p-4 w-full max-w-lg text-center text-white bg-green-500 rounded">
            {notification}
          </div>
        )}

        {/* Contact Info Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 sm:mt-32 lg:mt-14 w-full" data-aos="fade-up">
          <ContactInfo
            icon={faPhone}
            title={t('contact.phone')}
            content={t('contact.phone_number')}
          />
          <ContactInfo
            icon={faMapMarkerAlt}
            title={t('contact.address')}
            content={t('contact.address_content')}
          />
          <ContactInfo
            icon={faEnvelope}
            title={t('contact.email')}
            content={t('contact.email_content')}
          />
        </div>

        <p className="mt-12 sm:mt-16 lg:mt-20 text-xl font-medium text-center">
          {t('contact.question_message')}
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8 sm:mt-12 space-y-6" data-aos="fade-up">
          <FormInput
            name="name"
            type="text"
            placeholder={t('contact.your_names')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            name="email"
            type="email"
            placeholder={t('contact.your_email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            name="subject"
            type="text"
            placeholder={t('contact.subject')}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="relative">
            <textarea
              name="message"
              placeholder={t('contact.message')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-5 h-40 text-sm font-medium bg-zinc-300 bg-opacity-80 text-black text-opacity-90 outline-none resize-none transition-transform duration-300 ease-in-out focus:scale-105 focus:bg-opacity-100 focus:border-sky-500"
            />
            <label htmlFor="message" className="sr-only">{t('contact.message')}</label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center items-center px-6 py-3 w-full sm:w-auto text-sm font-medium text-sky-500 bg-white border-2 border-sky-500 transition-all duration-300 ease-in-out hover:bg-sky-500 hover:text-white transform hover:scale-105 focus:border"
              disabled={loading} // Disable button when loading
            >
              {loading ? <Spinner /> : t('contact.send_message')} {/* Show spinner when loading */}
            </button>
          </div>
        </form>
      </main>

      <div className="map-container relative w-full mt-12" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d463.7831045563438!2d30.110356751752505!3d-1.9587686177832764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTcnMzEuNSJTIDMwwrAwNiczOC41IkU!5e1!3m2!1sen!2srw!4v1729872315005!5m2!1sen!2srw"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, content }) {
  return (
    <div className="flex flex-col items-center sm:w-1/3 w-full text-center transform transition-transform duration-500 hover:scale-105">
      <FontAwesomeIcon icon={icon} className="w-[30px] h-[30px] text-sky-500 transition-transform duration-300 ease-in-out transform hover:scale-125" />
      <h3 className="mt-2 text-lg sm:text-xl text-sky-500">{title}</h3>
      <p className="mt-2 text-sm sm:text-base font-medium text-black text-opacity-80">{content}</p>
    </div>
  );
}

function FormInput({ name, type, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-6 py-5 text-sm font-medium bg-zinc-300 bg-opacity-80 text-black text-opacity-90 outline-none transition-transform duration-300 ease-in-out focus:scale-105 focus:bg-opacity-100 focus:border-b-2 focus:border-sky-500"
      />
      <label htmlFor={name} className="sr-only">{placeholder}</label>
    </div>
  );
}
