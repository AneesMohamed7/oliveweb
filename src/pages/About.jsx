import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Microscope, MapPin, Search, CheckCircle2, Star, Users, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import GoogleReviews from '../components/GoogleReviews';
import ContactCTA from '../components/ContactCTA';

export default function About() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Olive Dental & Face Clinic | Dental & Facial Specialists in Kunnumpuram & Kondotty</title>
                <meta name="description" content="Advanced dental and facial care rooted in trust. Kunnumpuram and Kondotty's premier multi-specialty medical clinic focused on ethical practice and clinical excellence." />
            </Helmet>

            {/* ─── SECTION A: THE CORE PHILOSOPHY (Belonging) ─── */}
            <section className="relative pt-16 lg:pt-24 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                    <div className="relative grid lg:grid-cols-12 gap-0 items-center">

                        {/* Architectural Hero Image (60% width) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 relative z-0"
                        >
                            <div className="aspect-[16/10] lg:aspect-square overflow-hidden rounded-br-[4rem] lg:rounded-br-[8rem] shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                                    alt="Olive Dental & Face Clinic Interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Overlapping Text Panel (40% width) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-6 lg:col-start-7 mt-[-4rem] lg:mt-0 lg:ml-[-10rem] relative z-10"
                        >
                            <div className="bg-white p-8 lg:p-14 shadow-2xl lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl border border-gray-50">
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                                    Olive Dental & Face Clinic<br />
                                    <span className="text-primary text-2xl lg:text-3xl">Specialists in Kunnumpuram & Kondotty</span>
                                </h1>
                                <p className="text-xl text-gray-900 font-medium mb-8 leading-snug border-l-4 border-primary pl-4 py-1">
                                    Choosing a healthcare provider is never just about treatment. It is about trust.
                                </p>
                                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        When patients walk into a clinic, they bring more than symptoms — they bring concerns, expectations, and the hope that someone will guide them with honesty and precision.
                                    </p>
                                    <p>
                                        At Olive Dental & Face Clinic, we believe our responsibility goes beyond procedures. It is to create clarity, safety, and confidence at every step.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── THE PURPOSE & BRANCHES ─── */}
            <section className="py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bridging the Gap</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Founded to bring advanced dental and medically guided facial care closer to our community, Olive was built with one principle in mind: **quality healthcare should not require traveling far.**
                            </p>
                            <p className="text-gray-600 text-lg mb-8 italic border-l-4 border-gray-200 pl-6 py-2">
                                We are not a beauty studio. We are a multi-specialty medical clinic focused on long-term outcomes and patient trust.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-primary transition-colors">
                                        <MapPin size={18} className="text-primary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Kunnumpuram</h4>
                                        <p className="text-xs text-gray-400">Opp. Darushifa Hospital</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-primary transition-colors">
                                        <MapPin size={18} className="text-primary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Kottukkara</h4>
                                        <p className="text-xs text-gray-400">Kondotty Branch</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 lg:p-14 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-primary rounded-full" /> Our Mission
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To deliver safe, precise, and transparent dental and facial treatments that prioritize patient well-being, natural results, and long-term health. Every treatment begins with consultation, detailed explanation, and careful planning — never assumptions.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-primary rounded-full" /> Our Vision
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To become the most trusted multi-specialty dental and facial clinic in Malappuram district by consistently practicing ethical medicine, maintaining high sterilization standards, and building lasting patient relationships.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION B: WHAT DEFINES OLIVE (Actionable Values) ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Real Trust Pillars</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Defines Olive</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {[
                            {
                                icon: Users,
                                title: "Multi-Specialty Expertise",
                                desc: "From dental implants to advanced rejuvenation, our coordinated approach ensures comprehensive care without fragmented referrals."
                            },
                            {
                                icon: Microscope,
                                title: "Clinical Precision & Tech",
                                desc: "Digital diagnostics, structured treatment planning, and strict sterilization protocols ensure safety and predictable results."
                            },
                            {
                                icon: Search,
                                title: "Medically Guided Aesthetics",
                                desc: "Facial treatments focus on skin health, collagen stimulation, and balanced enhancement — never artificial transformation."
                            },
                            {
                                icon: Heart,
                                title: "Community-Based Trust",
                                desc: "Our growth in Kunnumpuram and Kondotty is built on referrals, repeat visits, and genuine patient satisfaction."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col text-center shadow-sm hover:shadow-xl transition-all p-8 rounded-3xl border border-gray-50 flex-grow"
                            >
                                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECTION C: SAFETY & TRANSPARENCY (Actionable Transparency) ─── */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[120px] -z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Commitment</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">Healthcare Must Be Practiced With Accountability.</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                At Olive Dental & Face Clinic, we don't believe in boilerplate promises. We maintain strict measurable standards so you can make informed, confident decisions about your health.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Strict sterilization standards",
                                    "Structured diagnostic protocols",
                                    "Transparent consultation processes",
                                    "Ethical treatment planning",
                                    "Clear communication before every procedure"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={12} />
                                        </div>
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-14 rounded-[2.5rem] shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-white">Clinical Rigor</h3>
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <ShieldCheck size={28} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Standardized Sterility</h4>
                                            <p className="text-gray-400 text-sm">ISO 9001:2015 certified hygiene management systems.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <Search size={28} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">No Assumptions</h4>
                                            <p className="text-gray-400 text-sm">Every diagnosis is confirmed with digital scanning and specialist review.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION: RESULTS & SOCIAL PROOF ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Built on Results. Sustained by Trust.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our reputation is built not on advertising, but on real patient experiences, verified outcomes, and long-term relationships.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                                    <span className="text-3xl font-bold text-primary mb-1">4.9/5</span>
                                    <div className="flex text-primary mb-2">
                                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                                    </div>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Google Rating</span>
                                </div>
                                <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                                    <span className="text-3xl font-bold text-primary mb-1">10k+</span>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-2">Happy Smiles</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                                <p className="text-gray-600 italic mb-6 leading-relaxed relative">
                                    <span className="text-4xl text-primary/10 font-serif absolute -top-4 -left-2">"</span>
                                    The structured consultation and clear communication made me feel very safe. Highly professional ethical clinic.
                                </p>
                                <p className="font-bold text-gray-900 text-sm">— Patient, Kunnumpuram</p>
                            </div>
                            <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                                <p className="text-gray-600 italic mb-6 leading-relaxed relative">
                                    <span className="text-4xl text-primary/10 font-serif absolute -top-4 -left-2">"</span>
                                    The best medical facial care in Kerala. Very clean and they focus on skin health over artificial looks.
                                </p>
                                <p className="font-bold text-gray-900 text-sm">— Patient, Kondotty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CALL TO TRUST (Visit Olive) ─── */}
            <section className="py-24 bg-primary text-white text-center rounded-t-[4rem]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-8">Visit Olive Dental & Face Clinic</h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                        Whether you are seeking a trusted dental clinic in Kunnumpuram or advanced facial treatments in Kerala, our team is committed to delivering care that is precise, transparent, and patient-focused.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
                        <div className="flex flex-col items-center gap-4 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                            <MapPin className="text-white" size={32} />
                            <div>
                                <h4 className="font-bold text-xl mb-1">Kunnumpuram</h4>
                                <p className="text-blue-100 text-sm">Opp. Darushifa Hospital</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                            <MapPin className="text-white" size={32} />
                            <div>
                                <h4 className="font-bold text-xl mb-1">Kottukkara</h4>
                                <p className="text-blue-100 text-sm">Kondotty Branch</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/918891494731"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/40 translate-y-0 hover:-translate-y-1"
                        >
                            <MessageCircle size={22} /> Schedule Consultation
                        </a>
                        <a
                            href="tel:+918891494731"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                        >
                            <Phone size={22} /> Call Now
                        </a>
                    </div>
                </div>
            </section>

            <GoogleReviews />
        </div>
    );
}
