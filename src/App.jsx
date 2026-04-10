import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
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
import Gallery from './pages/Gallery';

// Dental Treatments
import RootCanal from './pages/RootCanal';
import CrownsAndBridges from './pages/CrownsAndBridges';
import TeethWhitening from './pages/TeethWhitening';
import KidsDentistry from './pages/KidsDentistry';
import WisdomTooth from './pages/WisdomTooth';

// Facial Aesthetics
import PRP from './pages/PRP';
import Botox from './pages/Botox';
import Microneedling from './pages/Microneedling';
import ThreadLift from './pages/ThreadLift';
import HydraFacial from './pages/HydraFacial';

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-text overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/doctors" element={<PageWrapper><Doctors /></PageWrapper>} />
            <Route path="/treatments" element={<PageWrapper><Treatments /></PageWrapper>} />
            <Route path="/treatments/aligners" element={<PageWrapper><Aligners /></PageWrapper>} />
            <Route path="/treatments/veneers" element={<PageWrapper><Veneers /></PageWrapper>} />
            <Route path="/treatments/implants" element={<PageWrapper><Implants /></PageWrapper>} />
            
            {/* New Dental Routes */}
            <Route path="/treatments/root-canal" element={<PageWrapper><RootCanal /></PageWrapper>} />
            <Route path="/treatments/crowns-bridges" element={<PageWrapper><CrownsAndBridges /></PageWrapper>} />
            <Route path="/treatments/teeth-whitening" element={<PageWrapper><TeethWhitening /></PageWrapper>} />
            <Route path="/treatments/kids-dentistry" element={<PageWrapper><KidsDentistry /></PageWrapper>} />
            <Route path="/treatments/wisdom-tooth" element={<PageWrapper><WisdomTooth /></PageWrapper>} />

            {/* New Facial Routes */}
            <Route path="/treatments/prp" element={<PageWrapper><PRP /></PageWrapper>} />
            <Route path="/treatments/botox" element={<PageWrapper><Botox /></PageWrapper>} />
            <Route path="/treatments/microneedling" element={<PageWrapper><Microneedling /></PageWrapper>} />
            <Route path="/treatments/thread-lift" element={<PageWrapper><ThreadLift /></PageWrapper>} />
            <Route path="/treatments/hydrafacial" element={<PageWrapper><HydraFacial /></PageWrapper>} />

            <Route path="/dental-treatments" element={<PageWrapper><DentalTreatments /></PageWrapper>} />
            <Route path="/facial-aesthetics" element={<PageWrapper><FacialAesthetics /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
