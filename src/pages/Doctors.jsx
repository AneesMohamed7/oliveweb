import React from 'react';
import { Helmet } from 'react-helmet-async';
import DoctorsSection from '../components/DoctorsSection';

export default function Doctors() {
    return (
        <>
            <Helmet>
                <title>Our Doctors | Olive Dental</title>
                <meta name="description" content="Meet our team of experienced dental specialists at Olive Dental including Orthodontists, Implantologists, and Cosmetic Dentists." />
            </Helmet>
            <div className="pt-10">
                <DoctorsSection />
            </div>
        </>
    );
}
