import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';

export default function Treatments() {
    return (
        <>
            <Helmet>
                <title>Services | Olive Dental & Face Clinic, Kunnumpuram</title>
                <meta name="description" content="Advanced dental services and facial aesthetics at Olive Dental & Face Clinic, Kunnumpuram. Explore our specialised dental and aesthetic services." />
            </Helmet>

            <section className="relative py-24 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-gray-900" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Specialisations</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Olive Dental &amp; Face Clinic offers two distinct areas of expertise — each led by dedicated specialists.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Link
                                to="/dental-treatments"
                                className="block bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full flex flex-col"
                            >
                                <div className="h-64 w-full relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" alt="Dental Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-5 -mt-16 relative z-10 border-4 border-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Stethoscope size={28} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Dental Services</h2>
                                    <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                                        Advanced dental care including implants, clear aligners, smile makeovers, root canal treatment, and more — precision-driven for lasting results.
                                    </p>
                                    <span className="inline-flex items-center text-primary font-semibold group-hover:underline">
                                        Explore Services <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                to="/facial-aesthetics"
                                className="block bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full flex flex-col"
                            >
                                <div className="h-64 w-full relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" alt="Facial Aesthetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-5 -mt-16 relative z-10 border-4 border-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Sparkles size={28} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Facial Aesthetics</h2>
                                    <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                                        Medically supervised PRP, Botox, microneedling, thread lifts, HydraFacial, and advanced skin solutions for natural, refined results.
                                    </p>
                                    <span className="inline-flex items-center text-primary font-semibold group-hover:underline">
                                        Explore Aesthetics <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
            <ContactCTA />
        </>
    );
}
