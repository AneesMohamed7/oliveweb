import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, UserCheck, Award, Microscope } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="py-24 bg-[#F9FBFF] border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 lg:max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                                Who We Are
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
                                Trusted Experts in Modern <br className="hidden md:block" />
                                <span className="text-primary">Dental & Facial Care.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                                Olive Clinic provides precision-driven treatments across Kunnumpuram.
                                We combine specialist expertise with advanced digital diagnostics to
                                deliver ethical, long-term health outcomes.
                            </p>

                            {/* Key Highlights Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-2 border-t border-gray-100">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-gray-900">10+</span>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Years Experience</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-gray-900">8,000+</span>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Happy Patients</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <Microscope size={14} className="text-primary" />
                                        <span className="text-xs font-bold text-gray-900 uppercase tracking-tight">Specialized</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">Multi-specialty Clinic</span>
                                </div>
                            </div>

                            {/* CTA Row */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link
                                    to="/about"
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 flex items-center gap-3"
                                >
                                    Learn More About Us
                                    <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-white border-2 border-accent/20 text-accent font-bold rounded-2xl hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center gap-3"
                                >
                                    Book Consultation
                                    <Calendar size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full lg:w-auto relative"
                    >
                        <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
                            <img
                                src="/images/oliveclinic-img1.webp"
                                alt="Lead Clinician - Olive Dental & Face Clinic"
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Signature / Trust Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-md py-3 px-5 rounded-2xl border border-white/20">
                                <Award size={20} className="text-primary" />
                                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest text-nowrap">Excellence in Healthcare</span>
                            </div>
                        </div>

                        {/* Subtle background element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/50 rounded-full blur-[100px]"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}




