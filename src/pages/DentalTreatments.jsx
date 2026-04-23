import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { dentalServices } from '../data/services';
import { ArrowRight, ShieldCheck, Cpu, Scan, Heart, ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';

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
    const coreDental = allDental;

    const trustPillars = [
        { icon: Cpu, title: 'Digital Diagnostics', text: 'Advanced digital X-rays and diagnostic tools for accurate treatment planning.' },
        { icon: ShieldCheck, title: 'Pain-Minimized Care', text: 'Advanced anaesthesia and minimally invasive techniques for your comfort.' },
        { icon: Scan, title: 'Sterile Environment', text: 'Hospital-grade sterilisation protocols for complete safety and hygiene.' },
        { icon: Heart, title: 'Experienced Professionals', text: 'Multi-specialty dental team with years of clinical expertise.' }
    ];

    return (
        <>
            <Helmet>
                <title>Advanced Dental Services | Olive Dental & Face Clinic, Kunnumpuram</title>
                <meta name="description" content="Precision-driven dental services in Kunnumpuram, Kerala — dental implants, clear aligners, smile makeover, root canal, and more. Book your consultation." />

                <link rel="canonical" href="https://olivedentalofficial.in/dental-treatments" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Advanced Dental Treatments | Olive Dental & Face Clinic" />
                <meta property="og:description" content="Precision-driven dental treatments in Kunnumpuram, Kerala. Book your consultation today." />
                <meta property="og:url" content="https://olivedentalofficial.in/dental-treatments" />
                <meta property="og:image" content="https://olivedentalofficial.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* ─── HERO ─── */}
            <section className="relative py-24 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <img
                        src="/images/clinic-chair (3).webp"
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
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Dental Clinic in Kunnumpuram</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Advanced Dental Care</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Personalized dental treatments that improve your smile, comfort, and long-term oral health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <a
                                href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20dental%20consultation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={20} />
                                Book Dental Consultation
                            </a>
                            <a
                                href="tel:+918891494731"
                                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone size={20} />
                                Call Now
                            </a>
                        </div>
                    </motion.div>
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
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Specialised Services</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Dental Services</h2>
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
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
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

            {/* ─── DENTAL CONSULTATION CTA ─── */}
            <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">

                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                        Book Your Dental Consultation
                    </h3>

                    <p className="text-lg md:text-xl text-white/85 mb-8 font-medium leading-relaxed">
                        Get expert evaluation and the right treatment plan for your dental problem.
                    </p>

                    <a
                        href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20dental%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
                    >
                        <MessageCircle size={20} />
                        Book Dental Consultation
                    </a>

                </div>
            </section>
            {/* ─── FAQ ─── */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Service FAQs</h2>
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

            <ContactCTA />
        </>
    );
}
