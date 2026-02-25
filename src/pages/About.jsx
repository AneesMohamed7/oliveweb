import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Microscope, MapPin, Users, Search, CheckCircle2, Star, Heart, Phone, MessageCircle, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';

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
                HERO — Trust Statement
            ═══════════════════════════════════════════ */}
            <section className="relative pt-16 lg:pt-28 pb-24 lg:pb-40 overflow-visible">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Desktop: relative container so card can overlap image */}
                    <div className="relative">

                        {/* Hero Image — takes ~55% width on desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            className="lg:w-[58%] relative z-0"
                        >
                            <div className="aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-br-[6rem] shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                                    alt="Olive Dental & Face Clinic — Modern interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Overlapping card — absolutely positioned on desktop */}
                        <motion.div
                            initial={{ opacity: 0, y: 36 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15 }}
                            className="relative z-10 mt-[-3rem] lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[52%]"
                        >
                            <div className="bg-white p-8 sm:p-10 lg:p-12 xl:p-14 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-gray-50">
                                <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-gray-900 leading-[1.15] mb-2">
                                    Olive Dental & Face Clinic
                                </h1>
                                <p className="text-primary font-semibold text-lg lg:text-xl mb-8">
                                    Dental & Facial Specialists in Kunnumpuram & Kondotty
                                </p>

                                <blockquote className="border-l-4 border-primary pl-5 py-1 mb-8">
                                    <p className="text-gray-900 text-xl font-medium leading-snug">
                                        Choosing a healthcare provider is never just about treatment.<br />
                                        It is about <em className="not-italic text-primary font-bold">trust.</em>
                                    </p>
                                </blockquote>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    When patients walk into a clinic, they bring more than symptoms — they bring concerns, expectations, and the hope that someone will guide them with honesty and precision.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    At Olive Dental & Face Clinic, we believe our responsibility goes beyond procedures. It is to create clarity, safety, and confidence at every step.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                OUR PURPOSE + MISSION & VISION
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Left — Purpose */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Purpose</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Olive Dental & Face Clinic was established to bridge a gap — the need for structured, technology-driven, and ethically practiced dental and facial treatments within our region.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                Many advanced procedures were once accessible only in larger cities. We aimed to change that by bringing comprehensive care under one roof, supported by modern diagnostics and standardized clinical protocols.
                            </p>
                            <div className="bg-primary/[0.04] border border-primary/10 rounded-2xl p-6 shadow-sm">
                                <p className="text-gray-900 font-semibold text-lg italic leading-snug">
                                    "We are not a beauty studio.<br />
                                    We are a multi-specialty medical clinic focused on long-term outcomes and patient trust."
                                </p>
                            </div>

                            {/* Branches */}
                            <div className="flex flex-col sm:flex-row gap-6 mt-10">
                                {[
                                    { name: 'Kunnumpuram', sub: 'Opp. Darushifa Hospital' },
                                    { name: 'Kottukkara, Kondotty', sub: 'Branch Clinic' }
                                ].map((b) => (
                                    <div key={b.name} className="flex items-center gap-3 group">
                                        <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <MapPin size={16} className="text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 text-sm block">{b.name}</span>
                                            <span className="text-xs text-gray-400">{b.sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Mission & Vision cards */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.15} className="space-y-8">
                            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-gray-100 border-l-4 border-l-primary">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-1.5 h-7 bg-primary rounded-full" />
                                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To deliver safe, precise, and transparent dental and facial treatments that prioritize patient well-being, natural results, and long-term health.
                                </p>
                                <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                                    Every treatment begins with consultation, detailed explanation, and careful planning — never assumptions.
                                </p>
                            </div>
                            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-gray-100 border-l-4 border-l-primary/40">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-1.5 h-7 bg-primary rounded-full" />
                                    <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To become the most trusted multi-specialty dental and facial clinic in Malappuram district by consistently practicing ethical medicine, maintaining high sterilization standards, and building lasting patient relationships.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                OUR SERVICES — Dental & Facial (side by side)
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#F7F7F7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Dental */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center"><Stethoscope size={22} /></div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Dental Services</h3>
                            </div>
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
                        </motion.div>

                        {/* Facial */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.1}
                            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center"><Sparkles size={22} /></div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Facial Aesthetic Services</h3>
                            </div>
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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                COMMITMENT TO SAFETY & TRANSPARENCY
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

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-14 rounded-[2.5rem]">
                            <h3 className="text-2xl font-bold mb-8">Clinical Standards</h3>
                            <div className="space-y-8">
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
            </section>

            {/* ═══════════════════════════════════════════
                BUILT ON RESULTS, SUSTAINED BY TRUST
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#FAFBFD]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Built on Results, Sustained by Trust.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                Our reputation is built not on advertising, but on real patient experiences, verified outcomes, and long-term relationships.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-gradient-to-br from-primary to-blue-700 rounded-2xl text-center shadow-lg shadow-primary/20">
                                    <div className="text-3xl font-bold text-white mb-1">4.9</div>
                                    <div className="flex justify-center text-amber-300 mb-2">{[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}</div>
                                    <span className="text-[10px] uppercase font-bold text-blue-200 tracking-widest">Google Rating</span>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-center shadow-lg">
                                    <div className="text-3xl font-bold text-white mb-1">10k+</div>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-2 block">Happy Patients</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-7 lg:col-start-7">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { text: 'Real patient experiences', icon: Users },
                                    { text: 'Verified Google reviews', icon: Star },
                                    { text: 'Consistent clinical outcomes', icon: ShieldCheck },
                                    { text: 'Long-term relationships', icon: Heart }
                                ].map((item, i) => (
                                    <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.08}
                                        className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-all"
                                    >
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                                            <item.icon size={18} className="text-primary" />
                                        </div>
                                        <p className="text-gray-700 font-medium text-sm leading-relaxed pt-2">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-gray-500 mt-8 text-center sm:text-left">We value every patient who chooses to trust us with their health and confidence.</p>
                        </div>
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
