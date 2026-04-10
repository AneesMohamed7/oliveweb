import React from 'react';
import { Helmet } from 'react-helmet-async';
import { doctors } from '../data/doctors';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Award, GraduationCap, Stethoscope } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

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
            <section className="relative py-24 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1600&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-gray-900" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Team</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Multi-Specialty Dental Experts</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Every doctor at Olive Dental is a qualified specialist. You get focused, expert care for your specific treatment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── DOCTORS GRID ─── */}
            <section className="py-16 lg:py-20 bg-white">
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
                                                className="w-full h-full object-cover"
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

            <ContactCTA />
        </>
    );
}
