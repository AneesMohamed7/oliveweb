import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactCTA from '../components/ContactCTA';

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Us | Olive Dental</title>
                <meta name="description" content="Book an appointment or visit Olive Dental in Kunnumpuram. Call +91 88914 94731." />
            </Helmet>
            <div className="pt-10">
                <ContactCTA />
            </div>
        </>
    );
}
