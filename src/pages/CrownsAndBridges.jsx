import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Zap, Award, Heart, Crown, Star
} from 'lucide-react';

import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'How long do crowns and bridges last?',
        a: 'With proper care, zirconia crowns and bridges last 10–15 years or longer. The key is maintaining good oral hygiene and attending regular check-ups. Avoid using crowned teeth to crack nuts or open bottles.'
    },
    {
        q: 'Is the procedure painful?',
        a: 'No. Local anaesthesia is used throughout. You may feel mild sensitivity for a few days after the tooth is shaped, but it resolves quickly. The final crown or bridge placement is painless.'
    },
    {
        q: 'How much does a crown cost?',
        a: 'Cost depends on the material (zirconia vs. ceramic vs. metal-ceramic) and which tooth is being crowned. We provide a full cost breakdown upfront. EMI options are available to make treatment affordable.'
    },
    {
        q: 'How many appointments are needed?',
        a: 'Typically 2 appointments: the first to prepare the tooth and take impressions, and the second (1–2 weeks later) to fit the permanent crown or bridge. Temporary restorations are placed in between.'
    },
    {
        q: 'What is the difference between a crown and a bridge?',
        a: 'A crown covers a single damaged or root-canal-treated tooth. A bridge spans a gap left by a missing tooth, using adjacent teeth as anchors. Both are cemented permanently and look natural.'
    },
    {
        q: 'Can I eat normally with a crown or bridge?',
        a: 'Yes — crowns and bridges restore full chewing function. Avoid extremely hard foods (like ice or hard candies) and maintain good oral hygiene around the gumline to extend their lifespan.'
    }
];

const whyUs = [
    { icon: Crown, title: 'Zirconia & All-Ceramic Options', desc: 'We use high-strength zirconia for durability and all-ceramic for superior aesthetics in visible areas.' },
    { icon: Award, title: 'Expert Restorative Team', desc: 'Experienced prosthodontists who specialise in precision-fitted crowns and bridge work.' },
    { icon: Zap, title: 'Digital Impressions', desc: 'Accurate digital scans eliminate messy putty impressions for a more comfortable, precise fit.' },
    { icon: ShieldCheck, title: 'Safe & Sterile Protocols', desc: 'Hospital-grade sterilisation ensures every procedure is conducted in a fully hygienic environment.' },
    { icon: Heart, title: 'Personalised Shade Matching', desc: 'We match the exact shade of your natural teeth so your restoration blends in seamlessly.' },
    { icon: Star, title: 'Long-Term Aftercare', desc: 'We guide you on care routines and schedule follow-ups to ensure lasting results.' }
];

const benefits = [
    'Restores full chewing ability and tooth function',
    'Protects a weakened or root-canal-treated tooth',
    'Replaces missing teeth without implant surgery',
    'Natural-looking zirconia for seamless aesthetics',
    'Long-lasting — 10–15+ years with proper care'
];

export default function CrownsAndBridges() {
    const [openFAQ, setOpenFAQ] = useState(null);


    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Crowns & Bridges — Zirconia Dental Restoration | Olive Dental, Kondotty</title>
                <meta name="description" content="High-quality zirconia dental crowns and bridges in Kunnumpuram, Kondotty. Restore damaged or missing teeth with natural-looking, long-lasting restorations. Book today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/crowns-bridges" />
            </Helmet>



            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Crowns & Bridges</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Rebuild Your Smile<br />
                                <span className="text-primary">with Precision Restorations</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Zirconia crowns and bridges that look, feel, and function like your own teeth — crafted precisely
                                to restore full confidence and chewing ability.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20consultation%20for%20crowns%20and%20bridges"
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
                                    src="/images/dentist-examining-crownbridge.webp"
                                    alt="Crowns and bridges treatment at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                    fetchPriority="high"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <CheckCircle2 size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Zirconia Quality</p>
                                        <p className="text-xs text-gray-500">Strong, natural-looking & long-lasting</p>
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
                                src="/images/crownbridge-treatment-img.webp"
                                alt="Crown and bridge procedure at Olive Dental"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What are Crowns & Bridges?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                A <strong>crown</strong> is a custom-fitted cap placed over a damaged, weakened, or root-canal-treated tooth to restore its shape, strength, and appearance. A <strong>bridge</strong> fills the gap left by a missing tooth using adjacent teeth as support pillars.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone with a fractured, severely decayed, or previously root-canal-treated tooth, or those missing one or more teeth who prefer a fixed (non-removable) alternative to dentures.
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
