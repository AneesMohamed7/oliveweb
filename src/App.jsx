import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Treatments from './pages/Treatments';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQ';
import Aligners from './pages/Aligners';
import Veneers from './pages/Veneers';
import Implants from './pages/Implants';
import DentalTreatments from './pages/DentalTreatments';
import FacialAesthetics from './pages/FacialAesthetics';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-text">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/aligners" element={<Aligners />} />
          <Route path="/treatments/veneers" element={<Veneers />} />
          <Route path="/treatments/implants" element={<Implants />} />
          <Route path="/dental-treatments" element={<DentalTreatments />} />
          <Route path="/facial-aesthetics" element={<FacialAesthetics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}
