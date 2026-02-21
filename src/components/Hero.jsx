import React from 'react';
import { Phone, MessageCircle, ArrowRight, Star, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
                        <Star size={14} className="fill-primary" />
                        Top Rated Dental Clinic in Kerala
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Fix Gaps, Crooked Teeth & Dental Problems — <span className="text-primary">Smile Confidently Again</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Painless smile correction and advanced dental treatments by experienced specialists, all under one roof in Malappuram.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-accent/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            WhatsApp Appointment
                        </a>
                        <a
                            href="tel:+918891494731"
                            className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-semibold hover:bg-blue-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={18} className="text-accent" />
                            Certified Specialists
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity size={18} className="text-accent" />
                            Advanced Technology
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:h-[600px] h-auto flex items-center justify-center"
                >
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />

                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
                        alt="Smiling patient"
                        className="w-full h-auto rounded-3xl shadow-2xl object-cover lg:max-h-[550px] z-10"
                    />

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-10 left-[-20px] bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
                    >
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">
                            4.9
                        </div>
                        <div>
                            <div className="flex text-yellow-500">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                            </div>
                            <p className="text-xs font-semibold text-gray-600">Google Reviews</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
