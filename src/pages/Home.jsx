import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import StatsSection from '../components/StatsSection';
import ClinicHours from '../components/ClinicHours';
import BeforeAfter from '../components/BeforeAfter';
import DoctorsSection from '../components/DoctorsSection';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

import GoogleReviews from '../components/GoogleReviews';

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
            <Hero />
            <StatsSection />
            <Features />
            <Services />
            <BeforeAfter />
            <DoctorsSection />
            <GoogleReviews />
            <ClinicHours />
            <FAQ />
            <ContactCTA />
        </>
    );
}
