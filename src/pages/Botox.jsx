import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Sparkles, Award, Heart, Syringe, Star
} from 'lucide-react';

import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'How long does Botox last?',
        a: 'Botox results typically last 3–6 months. With regular maintenance sessions, results can last longer as the muscles gradually adapt. Results vary by individual.'
    },
    {
        q: 'Does the injection hurt?',
        a: 'Most patients describe the sensation as a quick, minor pinch. We use ultra-fine needles and can apply a topical numbing cream to ensure the process is as comfortable as possible.'
    },
    {
        q: 'When will I see results?',
        a: 'You may begin to notice results within 3–5 days, with the full effect appearing 10–14 days after treatment.'
    },
    {
        q: 'Will I look "frozen"?',
        a: 'Our approach is "less is more." We aim for a natural, refreshed look that preserves your facial expressions while smoothing out unwanted lines.'
    },
    {
        q: 'Is there any downtime?',
        a: 'There is virtually no downtime. You can return to most normal activities immediately, though we advise avoiding strenuous exercise for 24 hours.'
    },
    {
        q: 'Are dermal fillers different from Botox?',
        a: 'Yes. Botox relaxes the muscles that cause wrinkles, while dermal fillers add volume to areas like the lips or cheeks and fill in deeper static lines.'
    }
];

const whyUs = [
    { icon: Syringe, title: 'Precision Administration', desc: 'Expertly administered by trained clinical professionals for accurate and safe results.' },
    { icon: Award, title: 'Medically Supervised', desc: 'All injectable treatments are performed in our sterile, medically-compliant facility.' },
    { icon: ShieldCheck, title: 'Authentic Products', desc: 'We use only FDA-approved, authentic Botox and premium dermal fillers from trusted global brands.' },
    { icon: Sparkles, title: 'Natural-Looking Enhancements', desc: 'Our clinical goal is subtle refinement that enhances your natural beauty, not overfills it.' },
    { icon: Heart, title: 'Personalised Consultations', desc: 'We take the time to understand your aesthetic goals and design a treatment plan just for you.' },
    { icon: Star, title: 'Proven Patient Satisfaction', desc: 'A track record of safe procedures and highly satisfied patients seeking facial refinement.' }
];

const benefits = [
    'Effectively smooths fine lines and wrinkles',
    'Restores lost facial volume for a youthful look',
    'Quick procedure with minimal to no downtime',
    'Customisable results tailored to your face',
    'Safe and FDA-approved clinical treatment'
];

export default function Botox() {
    const [openFAQ, setOpenFAQ] = useState(null);


    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Botox & Dermal Fillers — Facial Refinement | Olive Dental, Kondotty</title>
                <meta name="description" content="Expert Botox and dermal filler treatments in Kunnumpuram, Kondotty. Smooth wrinkles and restore volume with natural-looking results under medical supervision. Book today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/botox" />
            </Helmet>



            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Botox & Dermal Fillers</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Refined Beauty.<br />
                                <span className="text-primary">Natural Results.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Smooth fine lines and restore facial volume with precision-administered Botox and fillers.
                                Clinical expertise for a naturally refreshed and youthful appearance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20consultation%20for%20botox"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    <MessageCircle size={20} /> Book Consultation
                                </a>
                                <a href="tel:+918891494731"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                                    <Phone size={20} /> Call Now
                                </a>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                                <img
                                    src="/images/botox-img.webp"
                                    alt="Botox treatment at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                    fetchpriority="high"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Syringe size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Precision Care</p>
                                        <p className="text-xs text-gray-500">Clinically safe & natural look</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ ABOUT ═══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <img
                                src="/images/botox-img.webp"
                                alt="Botox procedure explained"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What are Botox & Dermal Fillers?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                Botox (Botulinum toxin) is a temporary injectable that relaxes the muscles responsible for dynamic wrinkles like crow's feet and forehead lines. Dermal Fillers are gel-like substances injected beneath the skin to restore lost volume and smooth static lines.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone noticing fine lines, wrinkles, or a loss of facial volume who wants a safe, non-surgical way to achieve a more youthful and refreshed look.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 size={14} className="text-accent" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ WHY CHOOSE US ═══ */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Our Expertise</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Olive Dental?</h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whyUs.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Questions</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    </motion.div>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                                <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-100 font-semibold text-gray-900">
                                    {faq.q}
                                    {openFAQ === index ? <ChevronUp className="text-primary flex-shrink-0" size={20} /> : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
                                </button>
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                            <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-200">{faq.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </div>
    );
}
