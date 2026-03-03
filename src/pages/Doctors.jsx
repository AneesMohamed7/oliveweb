import React from 'react';
import { Helmet } from 'react-helmet-async';
import { doctors } from '../data/doctors';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Award, GraduationCap, Stethoscope } from 'lucide-react';

export default function Doctors() {
    return (
        <>
            <Helmet>
                <title>Our Doctors | Olive Dental & Face Clinic, Kunnumpuram</title>
                <meta name="description" content="Meet the multi-specialty dental team at Olive Dental & Face Clinic. BDS & MDS specialists in implants, orthodontics, endodontics, oral surgery, and paediatric dentistry." />

                <link rel="canonical" href="https://olivedentalofficial.in/doctors" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Our Specialists | Olive Dental & Face Clinic" />
                <meta property="og:description" content="Meet our multi-specialty dental and facial aesthetic experts in Kunnumpuram." />
                <meta property="og:url" content="https://olivedentalofficial.in/doctors" />
                <meta property="og:image" content="https://olivedentalofficial.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* ─── HERO ─── */}
            <section className="bg-gradient-to-b from-blue-50 via-white to-white pt-12 pb-8 lg:pt-16 lg:pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-2xl"
                    >
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-3 block">
                            Our Specialists
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-4">
                            Multi-Specialty Dental Experts Under One Roof
                        </h1>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Every doctor at Olive Dental is a qualified specialist — not a general practitioner performing all procedures. You get focused, expert care for your specific treatment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── DOCTORS GRID ─── */}
            <section className="pb-16 lg:pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={doctor.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                    {/* Photo */}
                                    <div className="relative overflow-hidden">
                                        <div className="aspect-[4/5] bg-gray-200">
                                            <img
                                                src={doctor.image}
                                                alt={`${doctor.name} - ${doctor.specialty} at Olive Dental & Face Clinic`}
                                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Role badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                                                {doctor.role}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-0.5">{doctor.name}</h2>
                                        <p className="text-primary font-semibold text-sm mb-1">{doctor.specialty}</p>

                                        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                                            <GraduationCap size={13} />
                                            {doctor.qualification}
                                        </div>

                                        <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                            {doctor.bio}
                                        </p>

                                        {/* Focus areas */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {doctor.focus.map((area) => (
                                                <span
                                                    key={area}
                                                    className="text-[11px] font-medium text-primary bg-primary/8 px-2.5 py-1 rounded-full"
                                                >
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TRUST BAR ─── */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                <Stethoscope size={22} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">6 Specialists</h3>
                            <p className="text-gray-500 text-sm">Covering every branch of dental care</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                <GraduationCap size={22} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">MDS Qualified</h3>
                            <p className="text-gray-500 text-sm">Post-graduate trained specialists</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                <Award size={22} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">ISO 9001:2015</h3>
                            <p className="text-gray-500 text-sm">Quality-certified standards</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-14 lg:py-16 bg-gray-900">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            Book With a Specialist
                        </h2>
                        <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
                            Tell us your concern and we'll connect you with the right specialist.
                            No referrals needed — walk in or book online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20appointment%20with%20a%20specialist"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Appointment
                            </a>
                            <a
                                href="tel:+918891494731"
                                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone size={18} />
                                Call +91 88914 94731
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
