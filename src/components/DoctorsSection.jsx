import React from 'react';
import { doctors } from '../data/doctors';
import { motion } from 'framer-motion';

export default function DoctorsSection() {
    return (
        <section className="py-20 bg-background-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Multi-Specialty Dental Experts</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our team of specialists works together to provide comprehensive care under one roof.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                                <p className="text-primary font-medium text-sm mb-2">{doctor.specialty}</p>
                                <p className="text-gray-500 text-xs">{doctor.qualification}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
