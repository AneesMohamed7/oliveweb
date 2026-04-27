import React from 'react';
import { Helmet } from 'react-helmet-async';
import LazySection from '../components/LazySection';

// ─── Eagerly loaded (above the fold) ───
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Olive Dental & Face Clinic | Kunnumpuram, Kondotty</title>
                <meta
                    name="description"
                    content="Multi-specialty dental and facial clinic in Kunnumpuram and Kottukara, Kondotty. Implants, Aligners, PRP, Botox & advanced treatments. Call or WhatsApp today."
                />

                <link rel="canonical" href="https://olivedentalofficial.in/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Olive Dental & Face Clinic | Kunnumpuram" />
                <meta property="og:description" content="Advanced dental and facial treatments in Kunnumpuram & Kondotty. Book your consultation today." />
                <meta property="og:url" content="https://olivedentalofficial.in/" />
                <meta property="og:image" content="https://olivedentalofficial.in/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* ─── Above the fold (eagerly loaded) ─── */}
            <Hero />
            <StatsSection />
            <AboutSection />
            <LazySection
                component={() => import('../components/Services')}
                minHeight="600px"
                rootMargin="300px"
            />
            <Features />
            <LazySection
                component={() => import('../components/InvisalignParallax')}
                minHeight="500px"
                rootMargin="200px"
            />
            <LazySection
                component={() => import('../components/BeforeAfter')}
                minHeight="500px"
                rootMargin="200px"
            />
            <LazySection
                component={() => import('../components/DoctorsSection')}
                minHeight="400px"
                rootMargin="200px"
            />
            <LazySection
                component={() => import('../components/GoogleReviews')}
                minHeight="400px"
                rootMargin="150px"
            />
            <LazySection
                component={() => import('../components/FAQ')}
                minHeight="400px"
                rootMargin="100px"
            />
            <LazySection
                component={() => import('../components/ContactCTA')}
                minHeight="400px"
                rootMargin="100px"
            />
        </>
    );
}
