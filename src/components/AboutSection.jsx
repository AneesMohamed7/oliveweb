import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="py-32 bg-white border-y border-gray-100 overflow-hidden relative">
            {/* Decorative Background Elements from About Page */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
            <div className="absolute top-1/4 left-0 text-[15rem] font-black text-gray-50 leading-none select-none pointer-events-none -translate-x-1/4">
                OLIVE
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

                    {/* LEFT — IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        {/* Decorative square behind image */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-3xl -z-10 animate-pulse" />

                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white group">
                            <img
                                src="/images/oliveclinic-img1.webp"
                                alt="Olive Dental & Face Clinic"
                                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* subtle depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>



                        {/* soft background glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/40 rounded-full blur-[100px]"></div>
                    </motion.div>

                    {/* RIGHT — TEXT */}
                    <div className="flex-1 lg:max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Overline */}
                            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
                                Who We Are
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.15] mb-6">
                                Modern Dental & Facial Care
                                <br className="hidden md:block" />
                                <span className="text-primary"> in Kunnumpuram</span>
                            </h2>

                            {/* 2 SHORT PARAGRAPHS */}
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">

                                <p>
                                    Looking for a dental and facial clinic in Malappuram?
                                    <span className="font-semibold text-gray-900"> Olive Dental & Face Clinic</span> in Kunnumpuram offers implants, aligners, PRP, and advanced skin treatments with expert care.
                                </p>

                                <p>
                                    Trusted by patients across Malappuram for safe treatments, clear planning, and long-lasting results.                                </p>

                            </div>

                            {/* LIGHT LINK */}
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold text-base rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/10 transition-all duration-200 group"
                            >
                                Learn More About Us
                                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>

                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}