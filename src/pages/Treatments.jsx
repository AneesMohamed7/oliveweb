import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Treatments() {
    return (
        <>
            <Helmet>
                <title>Treatments | Olive Dental & Face Clinic, Kunnumpuram</title>
                <meta name="description" content="Advanced dental treatments and facial aesthetics at Olive Dental & Face Clinic, Kunnumpuram. Explore our specialised dental and aesthetic services." />
            </Helmet>

            <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Specialisations</h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-16">
                            Olive Dental & Face Clinic offers two distinct areas of expertise — each led by dedicated specialists.
                        </p>
                    </motion.div>

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
                                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" alt="Dental Treatments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-5 -mt-16 relative z-10 border-4 border-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Stethoscope size={28} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Dental Treatments</h2>
                                    <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                                        Advanced dental care including implants, clear aligners, smile makeovers, root canal treatment, and more — precision-driven for lasting results.
                                    </p>
                                    <span className="inline-flex items-center text-primary font-semibold group-hover:underline">
                                        Explore Dental <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
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
                                className="block bg-white rounded-2xl border border-amber-100 hover:shadow-xl hover:shadow-amber-100/30 hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full flex flex-col"
                            >
                                <div className="h-64 w-full relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" alt="Facial Aesthetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mb-5 -mt-16 relative z-10 border-4 border-white shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <Sparkles size={28} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Facial Aesthetics</h2>
                                    <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                                        Medically supervised PRP, Botox, microneedling, thread lifts, HydraFacial, and advanced skin solutions for natural, refined results.
                                    </p>
                                    <span className="inline-flex items-center text-amber-700 font-semibold group-hover:underline">
                                        Explore Aesthetics <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
