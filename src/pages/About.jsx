import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Heart, ShieldCheck, Microscope, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import GoogleReviews from '../components/GoogleReviews';
import ContactCTA from '../components/ContactCTA';

export default function About() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>About Us | Olive Dental & Face Clinic - Kunnumpuram</title>
                <meta name="description" content="Learn about Olive Dental & Face Clinic, Kunnumpuram's premier destination for advanced dental care and medical facial aesthetics." />
            </Helmet>

            {/* ─── SECTION 1: ARCHITECTURAL HERO & STORY ─── */}
            <section className="relative pt-16 lg:pt-24 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative grid lg:grid-cols-12 gap-0 items-center">

                        {/* Asymmetrical Hero Image (60% width on Desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 relative z-0"
                        >
                            <div className="aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-br-[4rem] lg:rounded-br-[8rem] shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                                    alt="Modern Clinic Architecture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Overlapping Text Panel (40% width on Desktop) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-6 lg:col-start-7 mt-[-4rem] lg:mt-0 lg:ml-[-6rem] relative z-10"
                        >
                            <div className="bg-white p-8 lg:p-14 shadow-2xl lg:shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-50">
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Established 2023</span>
                                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                    Architecting the Future of <span className="text-primary">Medical Care.</span>
                                </h1>
                                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        Olive Dental & Face Clinic was founded with a singular, intentional purpose: to bridge the gap between clinical precision and human-centric design.
                                    </p>
                                    <p>
                                        Located in Kunnumpuram, we have redefined the healthcare experience by removing the traditional "clinical anxiety" and replacing it with an environment of calm, structured excellence. Every corner of our facility is designed to reflect our commitment to your well-being.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: BRANCH PRESENCE (Exterior Intent) ─── */}
            <section className="py-24 bg-[#F7F7F7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="max-w-md">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Regional Expertise, Local Trust.</h2>
                                <div className="w-12 h-1 bg-primary mb-8" />
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    With our primary headquarters in Kunnumpuram and a specialized branch in Kottukkara, Olive Clinic represents a multi-specialty presence that serves the Malappuram district with clinical authority.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-900 font-semibold">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <MapPin size={16} className="text-primary" />
                                        </div>
                                        Kunnumpuram (HQ)
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-900 font-semibold">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <MapPin size={16} className="text-primary" />
                                        </div>
                                        Kottukkara Branch
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="h-[500px] overflow-hidden rounded-3xl shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                                    alt="Clinic Facade"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3: CLINICAL ENVIRONMENT (Asymmetrical Grid) ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                        <div className="lg:col-span-5">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">The Environment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Clinical Rigor. <br />Intentional Comfort.</h2>
                            <p className="text-gray-500 text-lg leading-relaxed mb-12">
                                We believe that the environment is a core part of the healing process. Our treatment rooms are equipped with the latest digital diagnostics, maintaining a sterile yet welcoming atmosphere that puts your needs first.
                            </p>

                            <div className="grid grid-cols-1 gap-8">
                                <div className="flex gap-5">
                                    <div className="shrink-0 w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
                                        <Microscope size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1 text-lg">Digital Diagnostics</h4>
                                        <p className="text-gray-500 text-sm">Advanced imaging for precise treatment planning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1 text-lg">Hospital Grade Sterility</h4>
                                        <p className="text-gray-500 text-sm">Adhering to strict international safety protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-10 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="col-span-6 mt-12"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                    alt="Advanced Treatment Room"
                                    className="rounded-2xl shadow-xl aspect-[3/4] object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: -20 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="col-span-4"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
                                    alt="Specialist at Work"
                                    className="rounded-2xl shadow-lg aspect-[4/5] object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviews />
            <ContactCTA />
        </div>
    );
}
