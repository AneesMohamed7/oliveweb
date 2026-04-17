import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Sparkles, Award, Heart, Star, Droplet
} from 'lucide-react';

import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'What is a HydraFacial?',
        a: 'A HydraFacial is a medical-grade resurfacing treatment that clears out your pores and hydrates your skin. It involves a four-step process: cleansing, exfoliating, extracting, and hydrating the skin with serums that are infused into pores with a pen-like device.'
    },
    {
        q: 'Is it painful?',
        a: 'Not at all! Most patients describe the sensation as a "cool paintbrush moving over the face." It is a very relaxing and comfortable experience with no pinching or pulling.'
    },
    {
        q: 'How long does the treatment take?',
        a: 'A standard HydraFacial treatment typically takes about 30 to 45 minutes, making it a perfect "lunchtime" procedure with no downtime.'
    },
    {
        q: 'When will I see results?',
        a: 'You will see an immediate improvement in skin radiance and smoothness right after the treatment. Your skin will look glowing and feel deeply hydrated.'
    },
    {
        q: 'How often should I get a HydraFacial?',
        a: 'For continued skin health and best results, we recommend one treatment per month to improve the appearance of fine lines, wrinkles, brown spots, and oily/congested skin.'
    },
    {
        q: 'Is there any downtime?',
        a: 'There is absolutely no downtime. You can put on makeup and return to your normal activities immediately after the treatment.'
    }
];

const whyUs = [
    { icon: Droplet, title: 'Genuine HydraFacial Technology', desc: 'We use the authentic HydraFacial system and original serums for the best results and skin safety.' },
    { icon: Award, title: 'Certified Practitioners', desc: 'Our skin specialists are fully trained and certified in the official HydraFacial protocols.' },
    { icon: Sparkles, title: 'Instant "Glow" Results', desc: 'Perfect for special occasions or regular maintenance; you leave with visibly better skin in under an hour.' },
    { icon: Heart, title: 'Tailored Serum Infusions', desc: 'We customise the boosters and serums used during your treatment to target your specific skin concerns.' },
    { icon: ShieldCheck, title: 'Safe for All Skin Types', desc: 'HydraFacial is gentle enough for even the most sensitive skin and effective for all skin tones.' },
    { icon: Star, title: 'Complete Skin Health', desc: 'More than just a facial; it is a clinical treatment that improves skin health over time.' }
];

const benefits = [
    'Deeply cleanses and exfoliates the skin',
    'Painlessly extracts impurities from pores',
    'Infuses the skin with intensive hydration',
    'Improves skin radiance and smoothness',
    'No downtime — perfect before special events'
];

export default function HydraFacial() {
    const [openFAQ, setOpenFAQ] = useState(null);


    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>HydraFacial — Deep Cleansing & Glowing Skin | Olive Dental, Kondotty</title>
                <meta name="description" content="Experience the ultimate HydraFacial in Kunnumpuram, Kondotty. Deep cleanse, exfoliate, and hydrate for an instant, medical-grade glow with no downtime. Book now." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/hydrafacial" />
            </Helmet>



            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">HydraFacial</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                The Ultimate Glow.<br />
                                <span className="text-primary">Cleanse, Extract, Hydrate.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Get the best skin of your life with our medical-grade HydraFacial. A soothing, non-invasive
                                treatment that delivers instant results you can see and feel.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20consultation%20for%20hydrafacial"
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
                                    src="/images/hydrafacial-img.webp"
                                    alt="HydraFacial treatment at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                    fetchPriority="high"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Droplet size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Instant Radiance</p>
                                        <p className="text-xs text-gray-500">The perfect 30-minute skin refresh</p>
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
                                    src="/images/hydrafacial-img.webp"
                                    alt="HydraFacial procedure steps"
                                    className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is a HydraFacial?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                The HydraFacial is a multi-step clinical treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection all in one. It uses patented Vortex-Fusion technology to deliver immediate results with no irritation or downtime.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone! It effectively addresses all skincare needs, including fine lines, wrinkles, elasticity, skin texture, brown spots, oily/congested skin, and enlarged pores.
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
