import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { dentalServices } from '../data/services';
import { ArrowRight, ShieldCheck, Cpu, Scan, Heart, ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const dentalFaqs = [
    {
        question: 'Are dental implants safe?',
        answer: 'Yes. Dental implants have a success rate exceeding 95%. Our specialists use advanced digital planning and sterile protocols for precise, safe placement with long-term results.'
    },
    {
        question: 'How long does clear aligner treatment take?',
        answer: 'Treatment duration varies by complexity. Simple cases may take 6 months, while complex alignment may require 18–24 months. A digital scan gives us your exact timeline.'
    },
    {
        question: 'Is root canal treatment painful?',
        answer: 'Modern root canal therapy is virtually painless. We use advanced anaesthesia techniques and rotary instruments for a comfortable, efficient procedure.'
    },
    {
        question: 'What is involved in a smile makeover?',
        answer: 'A smile makeover combines multiple treatments — veneers, whitening, alignment, and gum contouring — customised through digital smile design for predictable, stunning results.'
    },
    {
        question: 'Do you treat children?',
        answer: 'Yes. We provide gentle paediatric dental care including fluoride treatments, sealants, habit correction, and early orthodontic assessment in a child-friendly environment.'
    }
];

export default function DentalTreatments() {
    const [openFaq, setOpenFaq] = useState(null);

    const allDental = dentalServices;
    const coreDental = allDental.filter(s => s.type === 'core');
    const secondaryDental = allDental.filter(s => s.type === 'secondary');

    const trustPillars = [
        { icon: Cpu, title: 'Digital Diagnostics', text: 'CBCT scans and digital impressions for precise treatment planning.' },
        { icon: ShieldCheck, title: 'Pain-Minimized Care', text: 'Advanced anaesthesia and minimally invasive techniques for your comfort.' },
        { icon: Scan, title: 'Sterile Environment', text: 'Hospital-grade sterilisation protocols for complete safety and hygiene.' },
        { icon: Heart, title: 'Experienced Professionals', text: 'Multi-specialty dental team with years of clinical expertise.' }
    ];

    return (
        <>
            <Helmet>
                <title>Advanced Dental Treatments | Olive Dental & Face Clinic, Kunnumpuram</title>
                <meta name="description" content="Precision-driven dental treatments in Kunnumpuram, Kerala — dental implants, clear aligners, smile makeover, root canal, and more. Book your consultation." />

                <link rel="canonical" href="https://olivedentalofficial.in/dental-treatments" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Advanced Dental Treatments | Olive Dental & Face Clinic" />
                <meta property="og:description" content="Precision-driven dental treatments in Kunnumpuram, Kerala. Book your consultation today." />
                <meta property="og:url" content="https://olivedentalofficial.in/dental-treatments" />
                <meta property="og:image" content="https://olivedentalofficial.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* ─── HERO ─── */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-background-soft py-16 lg:py-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Dental Clinic in Kunnumpuram</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Advanced Dental Care<br />
                                <span className="text-primary">in Kunnumpuram</span>
                            </h1>
                            <p className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed">
                                Precision-driven dental treatments for long-term oral health and confident smiles. Trusted by families across Kerala.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20dental%20consultation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-center"
                                >
                                    <MessageCircle size={20} />
                                    Book Dental Consultation
                                </a>
                                <a
                                    href="tel:+918891494731"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-semibold hover:bg-blue-50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-center"
                                >
                                    <Phone size={20} />
                                    Call Now
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-2xl -rotate-6 scale-95"></div>
                            <img
                                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop"
                                alt="Modern Dental Treatment"
                                className="relative w-full h-auto rounded-[2rem] shadow-2xl z-10 object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── CORE TREATMENTS ─── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Specialised Treatments</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Dental Treatments</h2>
                        <p className="text-gray-500 max-w-2xl">
                            Our flagship procedures — delivering precision, comfort, and lasting results.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
                        {coreDental.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="h-52 overflow-hidden relative">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-60" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="w-11 h-11 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4 -mt-11 relative z-10 border-2 border-white shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                                        <service.icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">{service.description}</p>
                                    {service.link && (
                                        <Link to={service.link} className="inline-flex items-center text-primary font-semibold text-sm group/link">
                                            Learn More <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECONDARY TREATMENTS ─── */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Dental Solutions</h2>
                        <p className="text-gray-500 max-w-2xl">Comprehensive treatments to address every dental need.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {secondaryDental.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-primary/20 transition-all group flex flex-col"
                            >
                                <div className="h-40 overflow-hidden relative">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="font-bold text-gray-900 mb-1.5 flex items-center justify-between">
                                        {service.title}
                                        <service.icon size={16} className="text-primary opacity-50" />
                                    </h3>
                                    <p className="text-gray-500 text-xs leading-relaxed flex-grow">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE US ─── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Dental Care</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trustPillars.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Treatment FAQs</h2>
                    </div>
                    <div className="space-y-4">
                        {dentalFaqs.map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 text-left transition-colors"
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    {openFaq === index ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-5 pt-0 text-gray-500 border-t border-gray-100">{faq.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Begin Your Journey to Better Dental Health</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Our dental specialists are ready to create a personalised treatment plan for you. Book your consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20dental%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Book Dental Consultation
                        </a>
                        <a href="tel:+918891494731" className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
