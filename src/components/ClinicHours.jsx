import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { GridPattern } from './DecorativeElements';

export default function ClinicHours() {
    return (
        <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
            <GridPattern className="text-gray-100 opacity-60" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl text-white"
                >
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6">Visit Our Clinic</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                We are open 6 days a week to serve you better. Book an appointment or walk in for a consultation.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <Clock className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li className="flex justify-between w-48">
                                                <span>Monday - Saturday</span>
                                                <span className="font-mono">09:00 AM - 09:00 PM</span>
                                            </li>
                                            <li className="flex justify-between w-48 text-gray-500">
                                                <span>Sunday</span>
                                                <span>Appointment based</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <Phone className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Emergency Care</h3>
                                        <p className="text-gray-300 text-sm">
                                            Available by appointment for emergency cases.
                                        </p>
                                        <a href="tel:+918891494731" className="text-primary font-bold mt-1 inline-block hover:text-white transition-colors">
                                            +91 88914 94731
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-64 md:h-auto overflow-hidden">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src="/images/oliveclinic-img1.webp"
                                alt="Modern Dental Clinic Reception"
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent md:bg-gradient-to-l md:from-transparent md:to-gray-900"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
