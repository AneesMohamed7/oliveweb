import React from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function DoctorsSection() {
    // Show first 3 on homepage
    const featured = doctors.slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
                >
                    <div>
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
                            Our Specialists
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Meet Your Dental Team
                        </h2>
                    </div>
                    <Link
                        to="/doctors"
                        className="group inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                    >
                        View all doctors
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Doctor Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {featured.map((doctor, index) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link to="/doctors" className="block">
                                {/* Image */}
                                <div className="relative rounded-2xl overflow-hidden mb-5 bg-gray-100">
                                    <div className="aspect-[3/4]">
                                        <img
                                            src={doctor.image}
                                            alt={`${doctor.name} - ${doctor.specialty} at Olive Dental`}
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Subtle gradient overlay at bottom */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

                                    {/* Specialty tag */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                            {doctor.role}
                                        </span>
                                    </div>
                                </div>

                                {/** Info Section **/}
                                <div className="mt-4 px-2 text-center flex flex-col items-center">
                                    <h3 className="text-[20px] font-bold text-gray-900 group-hover:text-primary transition-colors tracking-tight">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-primary font-semibold text-[13.5px] mt-1.5 uppercase tracking-wider mb-2.5">
                                        {doctor.specialty}
                                    </p>
                                    <p className="bg-gray-50/80 border border-gray-100 text-gray-500 font-bold text-[10px] uppercase tracking-[0.15em] px-4 py-1.5 rounded-full shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                                        {doctor.qualification}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
