import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import PopularTourPackages from './components/PopularTourPackages';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Navigation from './components/Navigation';
import Service from './components/Service';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import Destiny from './components/Destiny';
import TurkeyDetails from './components/TurkeyDetails';
import RwandaDetails from './components/RwandaDetails';
import EgyptDetails from './components/EgyptDetails';
import JerusalemDetails from './components/JerusalemDetails';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPasword';
import Admin from './components/Admin';
import AdminDashboard from './components/Dashboard';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import MyBookings from './components/MyBookings';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import LocalGallery from './components/LocalGallery';
import InternationalGallery from './components/InternationalGallery';
import Gallery from './components/Gallery';
import BookingModal from './components/booking-modal';
import SuccessModal from './components/success-modal';

function App() {
  const location = useLocation();

  // Logic to conditionally show/hide Navbar and Footer
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginAdminPage = location.pathname === "/admin-login";
  const isDashboardPage = location.pathname === "/dashboard";
  const isNotFoundPage = ![
    "/",
    "/destination/rwanda",
    "/destination/israel",
    "/destination/egypt",
    "/destination/turkey",
    "/products",
    "/about",
    "/service",
    "/contact",
    "/login",
    "/signup",
    "/destiny",
    "/TurkeyDetails",
    "/RwandaDetails",
    "/EgyptDetails",
    "/MyBookings",
    "/JerusalemDetails",
    "/forgot-password",
    "/reset-password",
    "/profile",
    "/admin-login",
    "/dashboard",
    "/LocalGallery",
    "/InternationalGallery",
    "/Gallery",
  ].includes(location.pathname);

  const shouldShowNavbar =
    !isAdminRoute && !isLoginAdminPage && !isDashboardPage && !isNotFoundPage;

  const shouldShowFooter =
    !isAdminRoute && !isDashboardPage && !isNotFoundPage;

  return (
    <>
      <AuthProvider>
        {shouldShowNavbar && <Navigation />}

        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Destinations />
                <WhyChooseUs />
                <PopularTourPackages />
                <HowItWorks />
              
              </>
            }
          />
          
          <Route path="/destination/rwanda" element={<RwandaDetails />} />
          <Route path="/destination/israel" element={<JerusalemDetails />} />
          <Route path="/destination/egypt" element={<EgyptDetails />} />
          <Route path="/destination/turkey" element={<TurkeyDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/destiny" element={<Destiny />} />
          <Route path="/TurkeyDetails" element={<TurkeyDetails />} />
          <Route path="/RwandaDetails" element={<RwandaDetails />} />
          <Route path="/EgyptDetails" element={<EgyptDetails />} />
          <Route path="/JerusalemDetails" element={<JerusalemDetails />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin-login" element={<Admin />} />
          <Route path="/LocalGallery" element={<LocalGallery />} />
          <Route path="/InternationalGallery" element={<InternationalGallery />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/booking-success" element={<SuccessModal />} />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MyBookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<AdminDashboard />} />}
          />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {shouldShowFooter && <Footer />}
      </AuthProvider>
    </>
  );
}

// Wrap the App component with Router
const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;

