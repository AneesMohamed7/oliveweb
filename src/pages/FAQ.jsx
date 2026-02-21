import React from 'react';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';

export default function FAQPage() {
    return (
        <>
            <Helmet>
                <title>FAQ | Olive Dental</title>
                <meta name="description" content="Frequently asked questions about dental treatments at Olive Dental." />
            </Helmet>
            <div className="pt-10">
                <FAQ />
            </div>
        </>
    );
}
