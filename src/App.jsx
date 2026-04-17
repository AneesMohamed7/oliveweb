import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { prefetchOnIdle } from './hooks/usePrefetch';

// ─── Eagerly loaded (critical path) ───
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import PageSkeleton from './components/PageSkeleton';
import Home from './pages/Home';

// ─── Lazy loaded pages (route-based code splitting) ───
const About = lazy(() => import('./pages/About'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Treatments = lazy(() => import('./pages/Treatments'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const Gallery = lazy(() => import('./pages/Gallery'));
const DentalTreatments = lazy(() => import('./pages/DentalTreatments'));
const FacialAesthetics = lazy(() => import('./pages/FacialAesthetics'));

// Dental treatment pages
const Aligners = lazy(() => import('./pages/Aligners'));
const Veneers = lazy(() => import('./pages/Veneers'));
const Implants = lazy(() => import('./pages/Implants'));
const RootCanal = lazy(() => import('./pages/RootCanal'));
const CrownsAndBridges = lazy(() => import('./pages/CrownsAndBridges'));
const TeethWhitening = lazy(() => import('./pages/TeethWhitening'));
const KidsDentistry = lazy(() => import('./pages/KidsDentistry'));
const WisdomTooth = lazy(() => import('./pages/WisdomTooth'));

// Facial aesthetic pages
const PRP = lazy(() => import('./pages/PRP'));
const Botox = lazy(() => import('./pages/Botox'));
const Microneedling = lazy(() => import('./pages/Microneedling'));
const ThreadLift = lazy(() => import('./pages/ThreadLift'));
const HydraFacial = lazy(() => import('./pages/HydraFacial'));

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  // Prefetch high-traffic routes during idle time
  useEffect(() => {
    prefetchOnIdle(['/about', '/treatments', '/contact', '/doctors']);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-text overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main className="flex-grow pt-[71px] sm:pt-[81px] lg:pt-[88px]">
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageSkeleton />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/doctors" element={<PageWrapper><Doctors /></PageWrapper>} />
              <Route path="/treatments" element={<PageWrapper><Treatments /></PageWrapper>} />
              <Route path="/treatments/aligners" element={<PageWrapper><Aligners /></PageWrapper>} />
              <Route path="/treatments/veneers" element={<PageWrapper><Veneers /></PageWrapper>} />
              <Route path="/treatments/implants" element={<PageWrapper><Implants /></PageWrapper>} />
              
              {/* Dental Routes */}
              <Route path="/treatments/root-canal" element={<PageWrapper><RootCanal /></PageWrapper>} />
              <Route path="/treatments/crowns-bridges" element={<PageWrapper><CrownsAndBridges /></PageWrapper>} />
              <Route path="/treatments/teeth-whitening" element={<PageWrapper><TeethWhitening /></PageWrapper>} />
              <Route path="/treatments/kids-dentistry" element={<PageWrapper><KidsDentistry /></PageWrapper>} />
              <Route path="/treatments/wisdom-tooth" element={<PageWrapper><WisdomTooth /></PageWrapper>} />

              {/* Facial Routes */}
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
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}

function PageWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

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
