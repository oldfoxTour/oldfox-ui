import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, getProfile } from "../slices/authSlice";
import Flag from "react-flagkit";
import { useTranslation } from "react-i18next";
import {
  UserCircle,
  Calendar,
  LogOut,
  Home,
  Info,
  MapPin,
  Briefcase,
  ShoppingBag,
  Mail,
  PhoneCallIcon,
  Timer,
} from "lucide-react";
import logo from "../IMAGE/logo.jpg";
import ProtectedRoute from "../components/ProtectedRoute";

function Navigation() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "GB",
    name: "Eng",
  });

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, [token, dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (language) => {
    if (language === "EN") {
      setSelectedLanguage({ code: "GB", name: "Eng" });
      i18n.changeLanguage("en");
    } else if (language === "RW") {
      setSelectedLanguage({ code: "RW", name: "Kiny" });
      i18n.changeLanguage("rw");
    }
    setIsLanguageDropdownOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-sky-600 text-white py-2 px-4 md:px-6 lg:px-10 xl:px-12 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-4 overflow-hidden">
            <div className="flex items-center animate-marquee whitespace-nowrap gap-5">
              <Timer className="h-4 w-4 mr-2" />
              <span className="text-sm">Open At: 9:00 AM - 6:00 PM</span>
              <div className="flex items-center space-x-4">
                <div> | </div>
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">
                  KG 11 Ave Remera Gisimenti, Kigali, Rwanda
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div> | </div>
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">Oldfoxcoltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div> | </div>
                <span className="text-sm">
                  OLDFOX - TOUR: <b>Local & International</b>
                </span>
              </div>
              <div> | </div>
              <div className="flex items-center space-x-4">

                <PhoneCallIcon className="h-4 w-4 mr-2" />
                <span className="text-sm">+250788726181</span>
              </div>

              <div> | </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">
                  ACCOUNTs FOR PAY:{" "}
                  <b>
                    Bank Account : 12345687654 & Mobile Money : +250788726181
                  </b>
                </span>
              </div>


            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>

      <nav
        className={`fixed top-[40px] left-0 flex flex-wrap items-center w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-gray-700 opacity-80" : "bg-transparent"
        } p-2`}
      >
        <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
          <div className="flex-shrink-0">
            <img
              loading="lazy"
              src={logo || "/placeholder.svg"}
              alt="Company logo"
              className="object-contain w-[100px] md:w-[100px] lg:w-[120px] xl:w-[100px] rounded-3xl"
            />
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none w-10 h-10 relative text-white"
              aria-label="Toggle Menu"
            >
              <div
                className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></div>
              <div
                className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></div>
            </button>
          </div>

          <div className="hidden lg:flex text-xs lg:items-center lg:gap-4 font-weight: normal xl:gap-8">
            <Link to="/" className="text-sm lg:text-base xl:text-[16px]">
              {t("navigation.home")}
            </Link>
            <Link to="/about" className="text-sm lg:text-base xl:text-[16px]">
              {t("navigation.about")}
            </Link>
            <Link to="/destiny" className="text-sm lg:text-base xl:text-[16px]">
              {t("navigation.destination")}
            </Link>
            <Link to="/service" className="text-sm lg:text-base xl:text-[16px]">
              {t("navigation.service")}
            </Link>
            <Link
              to="/products"
              className="text-sm lg:text-base xl:text-[16px]"
            >
              {t("navigation.products")}
            </Link>
            <Link to="/contact" className="text-sm lg:text-base xl:text-[16px]">
              {t("navigation.contact")}
            </Link>
            <Link to="/Gallery" className="text-sm lg:text-base xl:text-[16px]">
              {t("Gallery")}
            </Link>
          </div>

          <div className="hidden lg:flex items-center text-white lg:gap-3 xl:gap-4">
            <div className="relative flex gap-20 mr-6 items-center">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center m-1"
              >
                <Flag
                  country={selectedLanguage.code}
                  className="mr-1"
                  size={24}
                />
                <span className="my-auto text-sm lg:text-base xl:text-[16px]">
                  {selectedLanguage.name}
                </span>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute mt-32 left-0 w-24 bg-white text-black rounded-lg shadow-lg py-2 z-10">
                  <button
                    onClick={() => changeLanguage("EN")}
                    className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
                  >
                    <Flag country="GB" size={18} className="m-1" />{" "}
                    {t("language.english")}
                  </button>
                  <button
                    onClick={() => changeLanguage("RW")}
                    className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
                  >
                    <Flag country="RW" size={18} className="m-1" />{" "}
                    {t("language.kinyarwanda")}
                  </button>
                </div>
              )}
            </div>
            {!user ? (
              <div className="flex gap-1.5 items-center">
                <Link
                  to="/login"
                  className="text-sm lg:text-base xl:text-[16px]"
                >
                  {t("navigation.login")}
                </Link>
                <span>|</span>
                <Link
                  to="/signup"
                  className="text-sm lg:text-base xl:text-[16px]"
                >
                  {t("navigation.signup")}
                </Link>
              </div>
            ) : (
              <div className="relative mr-16">
                <button onClick={toggleDropdown} className="flex items-center">
                  <img
                    loading="lazy"
                    src={user.profile.url || "/placeholder.svg"}
                    alt="User Profile"
                    className="object-cover w-10 h-10 rounded-full"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-36 bg-white text-black rounded-lg shadow-lg py-2">
                    <span className="block px-4 py-2">{user?.name}</span>
                    <Link
                      to="/profile"
                      className="block px-4 py-2  hover:bg-sky-500 hover:text-white"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <ProtectedRoute>{t("navigation.profile")}</ProtectedRoute>
                    </Link>
                    <Link
                      to="/MyBookings"
                      className="block px-4 py-2 hover:bg-sky-500 hover:text-white"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <ProtectedRoute>
                        {t("navigation.myBooking")}
                      </ProtectedRoute>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2  hover:bg-sky-500 hover:text-white"
                    >
                      {t("navigation.logout")}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`lg:hidden fixed inset-0 top-[40px] bg-white z-50 overflow-y-auto`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <button onClick={toggleMenu} className="text-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between md:justify-between md:mx-24">
                <div className="flex-shrink-0">
                  <img
                    loading="lazy"
                    src={logo || "/placeholder.svg"}
                    alt="Company logo"
                    className="object-contain w-[100px] md:w-[110px] lg:w-[120px] xl:w-[100px] rounded-3xl pb-10 md:pb-0 ml-4 md:ml-0"
                  />
                </div>
                <div className="relative flex items-center mb-6 md:mb-0 right-5 md:right-0">
                  <button
                    onClick={toggleLanguageDropdown}
                    className="flex items-center m-1"
                  >
                    <Flag
                      country={selectedLanguage.code}
                      className="mr-1"
                      size={24}
                    />
                    <span className="my-auto text-md md:text-base lg:text-lg">
                      {selectedLanguage.name}
                    </span>
                  </button>

                  {isLanguageDropdownOpen && (
                    <div className="absolute mt-32 left-0 w-24 bg-white text-black rounded-lg shadow-lg py-2 z-10">
                      <button
                        onClick={() => changeLanguage("EN")}
                        className="flex w-full text-left px-4 py-2 hover:bg-sky-600 hover:text-white"
                      >
                        <Flag country="GB" size={18} className="m-1" />{" "}
                        {t("language.english")}
                      </button>
                      <button
                        onClick={() => changeLanguage("RW")}
                        className="flex w-full text-left px-4 py-2 hover:bg-sky-600 hover:text-white"
                      >
                        <Flag country="RW" size={18} className="m-1" />{" "}
                        {t("language.kinyarwanda")}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm md:text-base mt-8">
                <Link
                  to="/"
                  className="flex flex-col items-center"
                  onClick={toggleMenu}
                >
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                    <Home className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <span className="text-sm md:text-base">
                    {t("navigation.home")}
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="flex flex-col items-center"
                  onClick={toggleMenu}
                >
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                    <Info className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <span className="text-sm md:text-base">
                    {t("navigation.about")}
                  </span>
                </Link>
                <Link
                  to="/destiny"
                  className="flex flex-col items-center"
                  onClick={toggleMenu}
                >
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <span className="text-sm md:text-base">
                    {t("navigation.destination")}
                  </span>
                </Link>
                <Link
                  to="/service"
                  className="flex flex-col items-center"
                  onClick={toggleMenu}
                >
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                    <Briefcase className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <span className="text-sm md:text-base">
                    {t("navigation.service")}
                  </span>
                </Link>
                <Link
                  to="/products"
                  className="flex flex-col items-center"
                  onClick={toggleMenu}
                >
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                    <ShoppingBag className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <span className="text-sm md:text-base">
                    {t("navigation.products")}
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="flex flex-col items-center"
                  onClick={toggleMenu}
                >
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                    <Mail className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <span className="text-sm md:text-base">
                    {t("navigation.contact")}
                  </span>
                </Link>
                <Link to="/Gallery" className="flex flex-col items-center" onClick={toggleMenu}>
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                    <Mail className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <span className="text-sm md:text-base">{t("Gallery")}</span>
                </Link>
              </div>

              {user && (
                <>
                  <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm md:text-base">
                    <Link
                      to="/profile"
                      className="flex flex-col items-center"
                      onClick={toggleMenu}
                    >
                      <ProtectedRoute>
                        <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                          <UserCircle className="h-6 w-6 md:h-8 md:w-8" />
                        </button>
                        <span className="text-sm md:text-base">
                          {t("navigation.profile")}
                        </span>
                      </ProtectedRoute>
                    </Link>
                    <Link
                      to="/MyBookings"
                      className="flex flex-col items-center"
                      onClick={toggleMenu}
                    >
                      <ProtectedRoute>
                        <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                          <Calendar className="h-6 w-6 md:h-8 md:w-8" />
                        </button>
                        <span className="text-sm md:text-base">
                          {t("navigation.myBooking")}
                        </span>
                      </ProtectedRoute>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex flex-col items-center"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 mb-2">
                        <LogOut className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <span className="text-sm md:text-base">
                        {t("navigation.logout")}
                      </span>
                    </button>
                  </div>

                  <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
                    <div className="flex items-center justify-center">
                      <img
                        src={user.profile.url || "/placeholder.svg"}
                        alt="User Profile"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <span className="text-sky-500 font-semibold">
                        {user.name}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {!user && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
                  <div className="flex justify-between gap-4">
                    <Link
                      to="/login"
                      className="flex-1 bg-sky-500 text-white rounded-full py-2 px-4 text-center"
                      onClick={toggleMenu}
                    >
                      {t("navigation.login")}
                    </Link>
                    <Link
                      to="/signup"
                      className="flex-1 border border-sky-500 text-sky-500 rounded-full py-2 px-4 text-center"
                      onClick={toggleMenu}
                    >
                      {t("navigation.signup")}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navigation;
