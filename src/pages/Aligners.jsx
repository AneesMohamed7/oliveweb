import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Phone, MessageCircle, CheckCircle2, Clock, ShieldCheck,
    Star, ChevronDown, ChevronUp, ArrowRight, Eye, Smile,
    Utensils, Layers, ScanLine, CalendarCheck, Sparkles,
    HeartPulse, Award, Users, MonitorSmartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';

/* ───────────── DATA ───────────── */

const problems = [
    {
        icon: Layers,
        title: 'Crowded Teeth',
        desc: 'Teeth that overlap or are pushed out of alignment due to limited jaw space.'
    },
    {
        icon: ArrowRight,
        title: 'Gaps Between Teeth',
        desc: 'Noticeable spaces between teeth that affect appearance and oral health.'
    },
    {
        icon: Smile,
        title: 'Crooked Teeth',
        desc: 'Teeth that are rotated or tilted, making your smile uneven.'
    },
    {
        icon: Layers,
        title: 'Overbite',
        desc: 'Upper teeth extend too far over the lower teeth when biting down.'
    },
    {
        icon: ShieldCheck,
        title: 'Mild Bite Issues',
        desc: 'Minor crossbite, open bite, or underbite that can be corrected without surgery.'
    }
];






const faqs = [
    {
        q: 'How long does aligner treatment take?',
        a: 'Treatment duration depends on complexity. Simple cases may complete in 6 months, while more complex cases can take 12–18 months. Your dentist will give you an estimated timeline after the initial scan.'
    },
    {
        q: 'Do aligners hurt?',
        a: 'You may feel mild pressure or tightness for the first 1–2 days of each new aligner set. This is normal and means the aligners are working. There are no metal wires or brackets to cause cuts or sores.'
    },
    {
        q: 'Can I remove them while eating?',
        a: 'Yes! That\'s one of the biggest advantages. You remove aligners to eat, drink anything other than water, and brush your teeth. Enjoy all your favorite foods without restriction.'
    },
    {
        q: 'How many hours per day must I wear them?',
        a: 'For best results, aligners should be worn 20–22 hours per day. Remove them only for eating, drinking, and oral hygiene. Consistent wear ensures your treatment stays on track.'
    },
    {
        q: 'Are aligners better than braces?',
        a: 'For mild to moderate cases, aligners offer clear advantages — they\'re invisible, comfortable, and removable. However, severe orthodontic cases may still require traditional braces. Your dentist will recommend the best option for you.'
    },
    {
        q: 'What is the cost of aligner treatment?',
        a: 'Cost varies depending on case complexity and the aligner system used. We offer transparent pricing after your consultation with no hidden fees. EMI and flexible payment plans are available.'
    },
    {
        q: 'How soon can I start?',
        a: 'After your consultation and digital scan, the custom aligners are typically ready within 2–3 weeks. You could start your smile transformation within a month of your first visit.'
    }
];

/* ───────────── COMPONENT ───────────── */

export default function Aligners() {
    const [openFAQ, setOpenFAQ] = useState(null);

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Clear Aligners — Invisible Teeth Straightening | Olive Dental</title>
                <meta name="description" content="Straighten your teeth without metal braces. FDA-approved clear aligners — removable, comfortable, and virtually invisible. Book your consultation at Olive Dental, Kondotty." />
            </Helmet>

            {/* ═══════════ 1. HERO ═══════════ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left — Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Clear Aligner Treatment</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 mb-6 leading-tight">
                                Straighten Your Teeth<br />
                                <span className="text-primary">Without Braces</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Clear aligners gradually move your teeth using transparent,
                                removable trays — designed for comfort and discretion.
                                No metal. No wires. Just results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Clear%20Aligners"
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                                >
                                    <MessageCircle size={20} /> Book Consultation
                                </a>
                                <a
                                    href="tel:+918891494731"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} /> Call Now
                                </a>
                            </div>
                            <p className="text-sm text-gray-500 font-medium bg-gray-50/50 inline-block px-3 py-1.5 rounded-lg border border-gray-100">✨ <span className="text-primary font-bold">EMI</span> options available — plan your treatment comfortably</p>
                        </motion.div>

                        {/* Right — Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                                <img
                                    src="/images/smile-with-aligner.webp"
                                    alt="Clear aligner trays at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                    fetchPriority="high"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                />
                            </div>
                            {/* Floating stat badge */}
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <CheckCircle2 size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">100+ Cases Completed</p>
                                        <p className="text-xs text-gray-500">Trusted for Clear Aligner Treatments in Kunnumpuram</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ 2. WHAT ARE CLEAR ALIGNERS? ═══════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="/images/smile-with-aligner.webp"
                                alt="Patient wearing clear aligners"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Are Clear Aligners?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Clear aligners are custom-made, transparent plastic trays that fit snugly over your teeth.
                                Each set gently shifts your teeth toward their ideal position. You switch to a new set every
                                1–2 weeks as your smile progressively straightens.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Transparent and removable trays',
                                    'Gradually shift teeth into alignment',
                                    'Customized for your unique smile',
                                    'No dietary restrictions',
                                ].map((item, i) => (
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

            {/* ═══════════ 3. PROBLEMS ALIGNERS CAN FIX ═══════════ */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Conditions We Treat</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Problems Aligners Can Fix</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Patients search by problem, not treatment. If you recognise any of these, clear aligners may be the answer.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {problems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ═══════════ 10. WHY CHOOSE OLIVE DENTAL ═══════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Our Expertise</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Olive Dental?</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            { icon: Users, title: 'Multi-Specialty Dental Team', desc: 'Expert orthodontic care backed by a full dental team.' },
                            { icon: ScanLine, title: 'Digital Scanning Technology', desc: 'Accurate 3D scans replace messy impressions for precision.' },
                            { icon: Star, title: 'Personalized Treatment Plans', desc: 'Custom treatment designed specifically for your unique smile.' },
                            { icon: Award, title: 'Experienced Specialists', desc: 'Over 100+ successful aligner cases completed with results.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
                            >
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

            {/* ═══════════ 11. FAQ ═══════════ */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Questions</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    </motion.div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50 font-semibold text-gray-900"
                                >
                                    {faq.q}
                                    {openFAQ === index
                                        ? <ChevronUp className="text-primary flex-shrink-0" size={20} />
                                        : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                                    }
                                </button>
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
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
