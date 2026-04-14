import React from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function DoctorsSection() {
    // Show first 3 on homepage
    const featured = doctors.slice(0, 3);

    return (
        <section className="py-20 bg-background-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Dental Experts</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our team of specialists works together to provide comprehensive care under one roof.
                        </p>
                    </div>
                    <Link
                        to="/doctors"
                        className="group inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline shrink-0"
                    >
                        View all doctors
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featured.map((doctor, index) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <Link to="/doctors" className="block">
                                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                        width={400}
                                        height={500}
                                    />
                                    {/* Subtle gradient for text readability */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

                                    {/* Role Badge Overlay */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-primary/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                                            {doctor.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{doctor.name}</h3>
                                    <p className="text-primary font-medium text-sm mb-2">{doctor.specialty}</p>
                                    <p className="text-gray-500 text-xs tracking-wide">{doctor.qualification}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
