import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Clock, Users, Heart, MapPin } from 'lucide-react';
import GoogleReviews from '../components/GoogleReviews';
import ContactCTA from '../components/ContactCTA';

export default function About() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>About Us | Olive Dental & Face Clinic</title>
                <meta name="description" content="Kunnumpuram's premier multi-specialty dental clinic. Learn about our expert team, advanced technology, and patient-first approach." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Redefining Dental Care in Kerala</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Where advanced technology meets compassionate care. Welcome to your new dental home.
                    </p>
                </div>
            </section>

            {/* Origin Story & Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=1000"
                                alt="Clinic Interior"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden lg:block">
                                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                                <div className="text-gray-600 font-medium">Years of Combined<br />Experience</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Our Story</h2>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Excellence Since 2023</h3>
                            <div className="prose prose-lg text-gray-600">
                                <p>
                                    Olive Dental & Face Clinic began with a simple vision: to create a dental experience that feels less like a medical procedure and more like self-care. Located in the heart of Kunnumpuram, we have quickly become the region's most trusted destination for advanced smile correction and family dentistry.
                                </p>
                                <p>
                                    We set out to break the fear associated with visiting the dentist. By investing in painless technology, creating a soothing ambiance, and adhering to strict ISO 9001:2015 standards, we ensure every patient leaves with a bigger, brighter smile.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="flex flex-col gap-2">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-primary">
                                        <Award size={20} />
                                    </div>
                                    <h4 className="font-bold text-gray-900">ISO Certified</h4>
                                    <p className="text-sm text-gray-500">Global standards of hygiene & safety.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-accent">
                                        <Users size={20} />
                                    </div>
                                    <h4 className="font-bold text-gray-900">Multi-Specialty</h4>
                                    <p className="text-sm text-gray-500">All experts under one roof.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Olive Standard</h2>
                        <p className="text-gray-600">We don't just fix teeth; we care for people.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-First Approach</h3>
                            <p className="text-gray-600">We listen first. Your comfort, concerns, and goals drive every treatment plan we create.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
                            <p className="text-gray-600">From digital scanners to painless injection systems, we use the best tools to ensure precision.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Respect For Your Time</h3>
                            <p className="text-gray-600">We operate on a strict appointment basis to minimize waiting times and give you our undivided attention.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <GoogleReviews />

            {/* Simple CTA before Footer */}
            <ContactCTA />
        </div>
    );
}
