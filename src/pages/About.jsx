import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Microscope, Users, Search, CheckCircle2, Star, Heart, Phone, MessageCircle, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DoctorsSection from '../components/DoctorsSection';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } })
};

export default function About() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>About Us | Olive Dental & Face Clinic — Kunnumpuram & Kondotty</title>
                <meta name="description" content="Advanced dental and medically guided facial care in Kunnumpuram & Kondotty. Learn about Olive Dental & Face Clinic's mission, values, and commitment to trust-based healthcare." />

                <link rel="canonical" href="https://olivedentalofficial.in/about" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Olive Dental & Face Clinic" />
                <meta property="og:description" content="Advanced dental and medically guided facial care in Kunnumpuram & Kondotty. Built on trust." />
                <meta property="og:url" content="https://olivedentalofficial.in/about" />
                <meta property="og:image" content="https://olivedentalofficial.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* ═══════════════════════════════════════════
                1. HERO — Strong positioning + stats
            ═══════════════════════════════════════════ */}
            <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-gray-900">
                {/* Full-bleed background image */}
                <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=85&w=1600"
                        alt="Olive Dental & Face Clinic — State of the art dental care"
                        className="w-full h-full object-cover"
                    />
                    {/* Multi-layered gradient for strong text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-900/30" />
                </motion.div>

                {/* Content — anchored to bottom-left */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 pt-40">
                    <div className="max-w-2xl">
                        {/* Eyebrow label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-10 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
                                About Olive Dental
                            </span>
                        </motion.div>

                        {/* H1 — massive and bold */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
                        >
                            Trusted Dental & Facial Experts <br />
                            <span className="text-primary">in Kunnumpuram</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
                        >
                            6000+ patients choose Olive Dental & Face Clinic for accurate diagnosis, ethical treatment, and natural-looking results — all under one roof.
                        </motion.p>

                        {/* Stat chips row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75 }}
                            className="flex flex-wrap gap-3"
                        >
                            {[
                                { icon: '⭐', label: '5.0 Google Rating', sub: 'Verified Patient Reviews' },
                                { icon: '👥', label: '6000+ Patients', sub: 'Served' },
                                { icon: '🦷', label: '6 Specialists', sub: 'Under One Roof' },
                            ].map((chip) => (
                                <div key={chip.label} className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2">
                                    <span className="text-base">{chip.icon}</span>
                                    <div>
                                        <p className="text-white font-semibold text-xs leading-none mb-0.5">{chip.label}</p>
                                        <p className="text-gray-400 text-[10px]">{chip.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
                >
                    <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 mb-4">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                        className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 bg-white/50 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                2. ABOUT / STORY — Merged content
                   who you are · why you started · what makes you different · your approach
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section header */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold tracking-[0.22em] uppercase text-xs mb-3 block">Our Story</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Built to Bridge a Gap<br className="hidden lg:block" /> in Dental Care
                        </h2>
                    </motion.div>

                    {/* Two-column layout: image left, text right */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left — Image + badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/5' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700"
                                    alt="Dentist consulting a patient at Olive Dental Kondotty"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Years badge */}
                            <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl px-5 py-4 shadow-xl shadow-primary/30">
                                <p className="text-3xl font-extrabold leading-none">6+</p>
                                <p className="text-[11px] font-semibold text-blue-100 mt-1">Years of Care</p>
                            </div>

                        </motion.div>

                        {/* Right — Story content blocks */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        >
                            {/* Who We Are */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Who We Are</h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Olive Dental & Face Clinic is a multi-specialty dental and facial aesthetics clinic in Kunnumpuram & Kondotty, Malappuram. We bring together 6 specialist doctors — Complete dental and facial care handled by specialists — under one roof.
                                </p>
                            </div>

                            {/* Why We Started */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Why We Started</h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Many advanced dental procedures were once accessible only in larger cities. We founded Olive Dental in 2018 to change that — making comprehensive, technology-driven care available to families right here in Malappuram district.
                                </p>
                            </div>

                            {/* What Makes Us Different */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">What Makes Us Different</h3>
                                <div className="space-y-3">
                                    {[
                                        '6 dental specialists under one roof',
                                        'Digital diagnostics & structured treatment planning',
                                        'Transparent consultations — no hidden costs',
                                        'Medically guided facial care, not cosmetic shortcuts',
                                    ].map((point) => (
                                        <div key={point} className="flex items-center gap-3">
                                            <CheckCircle2 size={16} className="text-primary shrink-0" />
                                            <span className="text-gray-700 text-sm font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Our Approach */}
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Our Approach</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Every treatment begins with a thorough digital diagnosis, followed by a transparent consultation. We believe patients deserve to understand their options, know the costs upfront, and make confident decisions. Safety, precision, and long-term outcomes guide everything we do.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                3. MEET THE DOCTOR — Dr. Shahana
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#FAFBFD] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left — Doctor image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/5' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=700"
                                    alt="Dr. Shahana — Implantologist & Cosmetic Dentist at Olive Dental"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Credential badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white rounded-2xl px-5 py-4 shadow-xl">
                                <p className="text-sm font-bold leading-none">Implantologist</p>
                                <p className="text-[11px] text-gray-400 mt-1">& Cosmetic Dentist</p>
                            </div>
                        </motion.div>

                        {/* Right — Doctor content */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        >
                            <span className="text-primary font-bold tracking-[0.22em] uppercase text-xs mb-3 block">The Doctor Behind Olive</span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                                Meet Dr. Shahana
                            </h2>
                            <p className="text-primary font-semibold text-lg mb-8">Implantologist & Cosmetic Dentist</p>

                            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                                <p>
                                    Olive Dental & Face Clinic is led by Dr. Shahana, an implantologist and cosmetic dentist focused on precision-driven, long-term treatment outcomes.
                                </p>
                                <p>
                                    Her approach is simple — every patient deserves a clear diagnosis, honest guidance, and treatment that is necessary, not excessive.
                                </p>
                                <p>
                                    With a strong focus on dental implants, smile design, and aesthetic treatments, she ensures that results are not only clinically accurate but also natural and balanced.
                                </p>
                                <p className="text-gray-800 font-medium">
                                    Patients choose Dr. Shahana not just for her expertise, but for the clarity and confidence she brings to every consultation.
                                </p>
                            </div>

                            {/* Specialties */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                {['Dental Implants', 'Smile Design', 'Cosmetic Dentistry', 'Aesthetic Treatments'].map((tag) => (
                                    <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 OUR SPECIALISTS — Doctors Grid
            ═══════════════════════════════════════════ */}
            <DoctorsSection />

            {/* ═══════════════════════════════════════════
                4. WHAT DEFINES OLIVE — 4 Pillars
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Foundation</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Defines Olive</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                            Four pillars that shape every diagnosis, treatment, and patient relationship across our clinics.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Users, title: 'Multi-Specialty Expertise', desc: 'From dental implants and aligners to PRP and advanced facial rejuvenation, our coordinated approach ensures comprehensive care without fragmented referrals.' },
                            { icon: Microscope, title: 'Clinical Precision & Technology', desc: 'Digital diagnostics, structured treatment planning, and strict sterilization protocols ensure safety and predictable results.' },
                            { icon: Search, title: 'Medically Guided Aesthetic Care', desc: 'Our facial treatments focus on skin health, collagen stimulation, and balanced enhancement — never artificial transformation.' },
                            { icon: Heart, title: 'Community-Based Trust', desc: 'Our growth in Kunnumpuram and Kondotty is built on referrals, repeat visits, and genuine patient satisfaction.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                                className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-primary/15 transition-all group bg-white"
                            >
                                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                4. PROOF SECTION — Stats / Trust / Results
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#FAFBFD]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Why Patients Trust Us</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Built on Results, Sustained by Trust.</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                            Our reputation is built not on advertising, but on real patient experiences, verified outcomes, and long-term relationships.
                        </p>
                    </motion.div>

                    {/* Stats — clean horizontal row with dividers */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="grid grid-cols-2 lg:grid-cols-4 mb-16"
                    >
                        {[
                            { value: '5.0', label: 'Google Rating', extra: '⭐⭐⭐⭐⭐' },
                            { value: '6000+', label: 'Happy Patients' },
                            { value: '6+', label: 'Years of Care' },
                            { value: '6', label: 'Specialists' },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className={`text-center py-8 lg:py-10 ${i > 0 ? 'border-l border-gray-100' : ''}`}
                            >
                                <div className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                                {stat.extra && <p className="text-sm mb-1">{stat.extra}</p>}
                                <span className="text-xs uppercase font-semibold text-gray-400 tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Trust strip */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="bg-gray-50 rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
                    >
                        {[
                            { text: 'Real patient experiences', icon: Users },
                            { text: 'Verified Google reviews', icon: Star },
                            { text: 'Consistent clinical outcomes', icon: ShieldCheck },
                            { text: 'Long-term relationships', icon: Heart }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-500">
                                <item.icon size={15} className="text-primary" />
                                <span className="text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                ALIGNER CONSULTATION BOOKING
            ═══════════════════════════════════════════ */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                {/* Background image */}
                <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=85&w=1600"
                        alt="Clear aligners — invisible teeth straightening at Olive Dental"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/70 to-gray-900/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="max-w-lg"
                    >
                        <span className="text-primary font-bold tracking-[0.22em] uppercase text-xs mb-4 block">Aligners</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                            Straighten Your Smile with Clear Aligners
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
                            Olive Dental offers clear aligners — a comfortable, removable alternative to metal braces that straighten your teeth effectively and discreetly.
                        </p>
                        <a
                            href="https://wa.me/918891494731?text=Hi%2C%20I%27d%20like%20to%20book%20an%20aligner%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold text-base rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl hover:-translate-y-0.5"
                        >
                            Book An Appointment
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                6. CTA
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Experience the Olive Difference?</h2>
                        <p className="text-xl text-blue-100 mb-14 max-w-2xl mx-auto leading-relaxed">
                            Whether you are seeking a trusted dental clinic in Kunnumpuram or advanced facial treatments in Kerala, our team is committed to delivering care that is precise, transparent, and patient-focused.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/918891494731" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/30 hover:-translate-y-0.5">
                                <MessageCircle size={20} /> Schedule Consultation
                            </a>
                            <a href="tel:+918891494731" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                <Phone size={20} /> Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
