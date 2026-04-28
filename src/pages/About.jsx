import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Microscope, Users, CheckCircle2, Star, Heart, Phone, MessageCircle, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DoctorsSection from '../components/DoctorsSection';
import ContactCTA from '../components/ContactCTA';
import GoogleReviews from '../components/GoogleReviews';
import invisalignLogo from '../assets/invisalign-logo.png';

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
                            8000+ patients choose Olive Dental & Face Clinic for accurate diagnosis, ethical treatment, and natural-looking results — all under one roof.
                        </motion.p>

                        {/* Stat chips row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75 }}
                            className="flex flex-wrap gap-3"
                        >
                            {[
                                { icon: Star, label: '5.0 Google Rating', sub: 'Verified Patient Reviews' },
                                { icon: Users, label: '8000+ Patients', sub: 'Served' },
                                { icon: ShieldCheck, label: 'Invisalign®', sub: 'Certified Provider' },
                            ].map((chip) => (
                                <div key={chip.label} className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2">
                                    <chip.icon size={18} className="text-primary" />
                                    <div>
                                        <p className="text-white font-semibold text-xs leading-none mb-0.5">{chip.label}</p>
                                        <p className="text-gray-400 text-[10px]">{chip.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </section>

            {/* ═══════════════════════════════════════════
                2. OUR STORY — Reimagined with depth
            ═══════════════════════════════════════════ */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
                <div className="absolute top-1/4 left-0 text-[20rem] font-black text-gray-50 leading-none select-none pointer-events-none -translate-x-1/4">
                    OLIVE
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left — Image Composition */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Decorative square behind image */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-3xl -z-10 animate-pulse" />

                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <img
                                    src="/images/oliveclinic-img1.webp?auto=format&fit=crop&q=80&w=800"
                                    alt="Expert consultation at Olive Dental"
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>

                        {/* Right — Story Content */}
                        <div className="space-y-12">
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            >
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Olive Journey</span>
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
                                    Modern Dental & Facial Care in <span className="text-primary">Kunnumpuram & Kondotty</span>
                                </h2>
                            </motion.div>

                            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                                <p>
                                    Olive Dental & Face Clinic in Kunnumpuram, Malappuram provides dental and skin treatments including implants, aligners, PRP, and facial care. Established in 2023, the clinic focuses on clear diagnosis, safe procedures, and long-term results for every patient.
                                </p>

                                <p>
                                    Patients choose Olive for its structured treatment approach, modern technology, and transparent guidance. Every procedure is carefully planned to ensure comfort, predictable outcomes, and natural-looking results.
                                </p>
                            </div>

                            {/* Features Glass Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/40 backdrop-blur-md border border-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">What Makes Us Different</h3>
                                <div className="space-y-4 relative z-10">
                                    {[
                                        '7+ Dental Specialists',
                                        'Certified Invisalign® Providers',
                                        'Digital-First Treatment Protocols',
                                        'Radical Cost Transparency',
                                        'Medically-Guided Aesthetic Care'
                                    ].map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-4 group/item">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <span className="text-gray-700 text-sm font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Approach Quote Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-900 rounded-[2rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/20"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -z-0" />
                                <h3 className="text-primary font-bold text-xs uppercase tracking-widest mb-4 relative z-10">Our Approach</h3>
                                <p className="text-gray-300 text-sm leading-relaxed relative z-10 italic">
                                    "Every treatment begins with a digital diagnosis and a transparent consultation. We believe patients deserve to understand their options and costs upfront. Precision and long-term outcomes guide everything we do."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ═══════════════════════════════════════════
                3. LEADERSHIP — Dr. Shahana — Refined
            ═══════════════════════════════════════════ */}
            <section className="py-32 bg-[#FAFBFD] relative overflow-hidden">
                {/* Background Leadership Typography */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="text-[15vw] font-black text-gray-200/40 leading-none whitespace-nowrap translate-y-1/4">
                        DR. SHAHANA
                    </span>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left — Doctor's Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Accent Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full -z-10" />

                            <div className="relative group">
                                <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                                    <img
                                        src="images/drshahana.img.webp?auto=format&fit=crop&q=80&w=800"
                                        alt="Dr. Shahana — Lead Clinician at Olive Dental"
                                        className="w-full aspect-[4/5] object-cover"
                                    />
                                </div>

                                {/* Professional Designation Badge */}
                                <div className="absolute -bottom-6 -right-6 bg-white p-2 rounded-[2rem] shadow-2xl">
                                    <div className="bg-gray-900 text-white px-8 py-5 rounded-[1.5rem]">
                                        <p className="text-sm font-bold tracking-wider mb-0.5">Implantologist</p>
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">& Cosmetic Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — Clinical Philosophy */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="space-y-10"
                        >
                            <div>
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-8 decoration-primary/30">Clinical Leadership</span>
                                <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                                    Meet Dr. Shahana
                                </h2>
                                <p className="text-xl font-medium text-primary/80">Expert Implantologist & Smile Designer</p>
                            </div>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                                <p>
                                    Leading with a philosophy of <span className="text-gray-900 font-semibold">Precision-Driven Care</span>, Dr. Shahana focuses on long-term treatment outcomes that balance clinical accuracy with natural aesthetics.
                                </p>
                                <p>
                                    Her approach is simple: Every patient deserves a clear diagnosis and honest guidance. She advocates for treatments that are medically necessary, ensuring patients feel confident and informed at every step.
                                </p>
                            </div>

                            {/* Core Specializations — Glass Tags */}
                            <div className="pt-6">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-6">Expertise Focus</h4>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { title: 'Dental Implants', icon: Award },
                                        { title: 'Smile Design', icon: Star },
                                        { title: 'Cosmetic Dentistry', icon: Heart },
                                        { title: 'Aesthetic Treatments', icon: Microscope }
                                    ].map((spec, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-default group"
                                        >
                                            <spec.icon size={16} className="text-primary/60 group-hover:text-primary transition-colors" />
                                            <span className="text-sm font-semibold text-gray-700">{spec.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Statement */}
                            <div className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10">
                                <p className="text-gray-800 font-medium italic text-base">
                                    "Patients choose Dr. Shahana not just for her surgical expertise, but for the absolute clarity and peace of mind she brings to complex consultations."
                                </p>
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
                            {
                                icon: Users,
                                title: 'Complete Dental & Skin Care',
                                desc: 'From implants and aligners to PRP and facial treatments, patients receive comprehensive care in one place.'
                            },
                            {
                                icon: Microscope,
                                title: 'Accurate Diagnosis & Planning',
                                desc: 'Digital tools and structured planning ensure clear diagnosis, defined timelines, and predictable results.'
                            },
                            {
                                icon: Sparkles,
                                title: 'Natural-Looking Results',
                                desc: 'Treatments are designed to enhance your appearance while maintaining a natural and balanced look.'
                            },
                            {
                                icon: Heart,
                                title: 'Consistent Patient Satisfaction',
                                desc: 'Focused on safe treatments, clear communication, and results that patients are comfortable and confident with.'
                            }
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
                PATIENT VOICES — Google Reviews
            ═══════════════════════════════════════════ */}
            <GoogleReviews />

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
                            { value: '8000+', label: 'Happy Patients' },
                            { value: '3+', label: 'Years of Care' },
                            { value: '7+', label: 'Specialists' },
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
                        alt="Authorized Invisalign Provider at Olive Dental"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-900/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <img src={invisalignLogo} alt="Invisalign" className="h-8 w-auto" />
                            <div className="h-px w-8 bg-primary/40" />
                            <ShieldCheck size={16} className="text-primary" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                            Precision Smile Alignment <br />
                            <span className="text-primary">with Invisalign®</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg font-medium">
                            As certified Invisalign® providers, we combine advanced intraoral 3D scanning with clinical expertise to straighten your teeth effectively, discreetly, and with predictable results.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/918891494731?text=Hi%2C%20I%27d%20like%20to%20book%20an%20Invisalign%20consultation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-2xl hover:bg-white hover:text-gray-900 transition-all shadow-xl hover:-translate-y-0.5"
                            >
                                Book Invisalign® Consultation
                            </a>
                            <Link
                                to="/treatments/aligners"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base rounded-2xl hover:bg-white/20 transition-all"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactCTA />
        </div>
    );
}
