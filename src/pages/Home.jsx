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
                <title>Olive Dental & Face Clinic | Kunnumpuram, Kerala</title>
                <meta name="description" content="Advanced smile correction, clear aligners, veneers, dental implants, and painless dental care in Kunnumpuram, Kerala." />
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
