import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Microscope, MapPin, Users, Search, CheckCircle2, Star, Heart, Phone, MessageCircle, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';
import MissionVision from '../components/MissionVision';

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
            </Helmet>

            {/* ═══════════════════════════════════════════
                HERO — Full-bleed cinematic with text overlay
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
                            Dental Care<br />
                            <span className="text-primary">Built on Trust.</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
                        >
                            Olive Dental & Face Clinic in Kondotty brings specialist-level dental and
                            facial care to every family in Malappuram — with honesty, precision,
                            and a commitment that goes beyond the chair.
                        </motion.p>

                        {/* Stat chips row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75 }}
                            className="flex flex-wrap gap-3"
                        >
                            {[
                                { icon: '⭐', label: '5.0 Google Rating', sub: '30+ Reviews' },
                                { icon: '👥', label: '10,000+ Patients', sub: 'Served' },
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
                OUR STORY — Clean asymmetric image grid
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section label centred above */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold tracking-[0.22em] uppercase text-xs mb-3 block">Our Story</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Built to Bridge a Gap<br className="hidden lg:block" /> in Dental Care
                        </h2>
                    </motion.div>

                    {/* 3-column asymmetric layout */}
                    <div className="grid lg:grid-cols-12 gap-6 items-start">

                        {/* LEFT column — tall image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-4 relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '3/4' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700"
                                    alt="Dentist consulting a patient at Olive Dental Kondotty"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Years badge pinned bottom-right of image */}
                            <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl px-5 py-4 shadow-xl shadow-primary/30">
                                <p className="text-3xl font-extrabold leading-none">6+</p>
                                <p className="text-[11px] font-semibold text-blue-100 mt-1">Years of Care</p>
                            </div>
                        </motion.div>

                        {/* MIDDLE column — stacked: short image top, text bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="lg:col-span-4 flex flex-col gap-6 lg:mt-14"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-lg aspect-video">
                                <img
                                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700"
                                    alt="Modern dental equipment at Olive Dental & Face Clinic"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Quote pill */}
                            <div className="bg-gray-900 rounded-3xl p-6">
                                <p className="text-white font-semibold text-base leading-relaxed italic">
                                    "We are not a beauty studio. We are a multi-specialty clinic focused on long-term outcomes."
                                </p>
                                <div className="flex items-center gap-2 mt-4">
                                    <div className="h-px flex-1 bg-white/10" />
                                    <span className="text-gray-500 text-xs">Olive Dental & Face Clinic</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT column — text content */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.15}
                            className="lg:col-span-4 lg:pt-6"
                        >
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                Olive Dental & Face Clinic was established to bring structured, technology-driven, and ethically practised dental and facial treatments to families in Kunnumpuram and Kondotty, Malappuram.
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                Many advanced procedures were once accessible only in larger cities. We changed that by bringing comprehensive multi-specialty care under one roof — supported by modern diagnostics and standardised clinical protocols.
                            </p>

                            {/* Key proof points */}
                            <div className="space-y-3 mb-8">
                                {[
                                    '6 dental specialists under one roof',
                                    'Strict sterilization & safety standards',
                                    'Transparent consultations, always',
                                    'Serving Malappuram since 2018',
                                ].map((point) => (
                                    <div key={point} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                                        <span className="text-gray-700 text-sm font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Branch locations */}
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-4">
                                {[
                                    { name: 'Kunnumpuram HQ', sub: 'Opp. Darushifa Hospital, Kondotty' },
                                    { name: 'Kottukkara Branch', sub: 'Kondotty, Malappuram' }
                                ].map((b) => (
                                    <div key={b.name} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin size={14} className="text-primary" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 text-sm block leading-none mb-0.5">{b.name}</span>
                                            <span className="text-xs text-gray-400">{b.sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                OUR PURPOSE + MISSION & VISION (SEO/AEO)
            ═══════════════════════════════════════════ */}
            <MissionVision />

            {/* ═══════════════════════════════════════════
                WHAT DEFINES OLIVE — 4 pillars
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Foundation</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Defines Olive</h2>
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
                                className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-primary/15 transition-all group"
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
                OUR SERVICES — Image-topped cards
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#F7F7F7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">What We Offer</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Services</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Dental card with image header */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
                        >
                            {/* Image header */}
                            <div className="h-52 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=900"
                                    alt="Dental treatment at Olive Dental & Face Clinic"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center">
                                        <Stethoscope size={20} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Our Dental Services</h3>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-8 lg:p-10">
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    We provide advanced dental solutions designed to restore both function and confidence.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['Dental Implants', 'Clear Aligners', 'Root Canal Treatments', 'Veneers & Smile Makeovers', 'Crowns & Restorative Care'].map((s) => (
                                        <li key={s} className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 size={16} className="text-primary shrink-0" />
                                            <span className="font-medium">{s}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-400 italic">Our goal is durability, comfort, and long-term oral health.</p>
                                <Link to="/dental-treatments" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:underline">
                                    Explore Dental Treatments <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Facial card with image header */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.1}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
                        >
                            {/* Image header */}
                            <div className="h-52 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=900"
                                    alt="Facial aesthetic treatment at Olive Dental & Face Clinic"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center">
                                        <Sparkles size={20} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Facial Aesthetic Services</h3>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-8 lg:p-10">
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Our facial treatments are structured to improve skin quality and refine natural appearance.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['PRP Skin Rejuvenation', 'Botox & Dermal Fillers', 'Microneedling', 'HydraFacial', 'Thread Lift & Advanced Skin Therapies'].map((s) => (
                                        <li key={s} className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 size={16} className="text-primary shrink-0" />
                                            <span className="font-medium">{s}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-400 italic">Each procedure is assessed individually to ensure safe and harmonious outcomes.</p>
                                <Link to="/facial-aesthetics" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:underline">
                                    Explore Facial Treatments <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                COMMITMENT TO SAFETY — Image right side
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08),transparent_60%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">Our Commitment to Safety & Transparency</h2>
                            <p className="text-xl text-gray-400 mb-10">Healthcare must be practiced with accountability.</p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-10">
                                At Olive Dental & Face Clinic, we maintain the highest operational standards so that every patient can make informed, confident decisions.
                            </p>
                            <div className="space-y-5">
                                {[
                                    'Strict sterilization standards',
                                    'Structured diagnostic protocols',
                                    'Transparent consultation processes',
                                    'Ethical treatment planning',
                                    'Clear communication before every procedure'
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={12} className="text-primary" />
                                        </div>
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-primary font-semibold mt-10 text-lg">We believe informed patients make confident decisions.</p>
                        </div>

                        {/* Image + clinical standards — stacked */}
                        <div className="space-y-6">
                            {/* Clinic image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="rounded-3xl overflow-hidden aspect-video shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=900"
                                    alt="Sterilization and safety standards at Olive Dental"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Clinical standards glass card */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                                <h3 className="text-xl font-bold mb-6">Clinical Standards</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><ShieldCheck size={26} className="text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">ISO 9001:2015 Protocols</h4>
                                            <p className="text-gray-400 text-sm">Certified hygiene and patient management systems.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><Microscope size={26} className="text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Digital-First Diagnosis</h4>
                                            <p className="text-gray-400 text-sm">Every diagnosis confirmed with digital scanning and specialist review.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                BUILT ON RESULTS — Image left + stats right
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#FAFBFD]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left — Image collage */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="rounded-2xl overflow-hidden aspect-[3/4] row-span-2 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600"
                                    alt="Happy patient at Olive Dental & Face Clinic"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400"
                                    alt="Dental consultation at Olive Dental"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400"
                                    alt="Dental team caring for patients"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right — Stats + trust points */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Built on Results, Sustained by Trust.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                Our reputation is built not on advertising, but on real patient experiences, verified outcomes, and long-term relationships.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="p-6 bg-gradient-to-br from-primary to-blue-700 rounded-2xl text-center shadow-lg shadow-primary/20">
                                    <div className="text-3xl font-bold text-white mb-1">5.0</div>
                                    <div className="flex justify-center text-amber-300 mb-2">{[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}</div>
                                    <span className="text-[10px] uppercase font-bold text-blue-200 tracking-widest">Google Rating</span>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-center shadow-lg">
                                    <div className="text-3xl font-bold text-white mb-1">10k+</div>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-2 block">Happy Patients</span>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { text: 'Real patient experiences', icon: Users },
                                    { text: 'Verified Google reviews', icon: Star },
                                    { text: 'Consistent clinical outcomes', icon: ShieldCheck },
                                    { text: 'Long-term relationships', icon: Heart }
                                ].map((item, i) => (
                                    <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.08}
                                        className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all"
                                    >
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                                            <item.icon size={18} className="text-primary" />
                                        </div>
                                        <p className="text-gray-700 font-medium text-sm leading-relaxed pt-2">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                VISIT / CTA
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Visit Olive Dental & Face Clinic</h2>
                    <p className="text-xl text-blue-100 mb-14 max-w-2xl mx-auto leading-relaxed">
                        Whether you are seeking a trusted dental clinic in Kunnumpuram or advanced facial treatments in Kerala, our team is committed to delivering care that is precise, transparent, and patient-focused.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-14">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                            <MapPin className="mx-auto mb-4 text-white" size={28} />
                            <h4 className="font-bold text-lg">Kunnumpuram</h4>
                            <p className="text-blue-200 text-sm">Opp. Darushifa Hospital</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                            <MapPin className="mx-auto mb-4 text-white" size={28} />
                            <h4 className="font-bold text-lg">Kottukkara</h4>
                            <p className="text-blue-200 text-sm">Kondotty Branch</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918891494731" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/30 hover:-translate-y-0.5">
                            <MessageCircle size={20} /> Schedule Consultation
                        </a>
                        <a href="tel:+918891494731" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </section>

            <GoogleReviews />
        </div>
    );
}
