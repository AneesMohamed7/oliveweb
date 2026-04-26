import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="py-24 bg-[#F9FBFF] border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

                    {/* LEFT — IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border border-white">
                            <img
                                src="/images/oliveclinic-img1.webp"
                                alt="Olive Dental & Face Clinic"
                                className="w-full h-[480px] object-cover"
                            />

                            {/* subtle depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>

                        {/* soft background glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-50/40 rounded-full blur-[80px]"></div>
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
                                Modern Dental & Facial Care
                                <br className="hidden md:block" />
                                <span className="text-primary">Designed Around You.</span>
                            </h2>

                            {/* 2 SHORT PARAGRAPHS */}
                            <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-8">

                                <p>
                                    Olive Clinic offers focused dental and facial treatments in one place,
                                    combining clinical expertise with a structured approach to patient care.
                                </p>

                                <p>
                                    Every treatment is explained clearly, planned carefully, and delivered
                                    with attention to long-term results rather than quick temporary fixes.
                                </p>

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