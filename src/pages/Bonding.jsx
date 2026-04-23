import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Phone, MessageCircle, CheckCircle2, Clock, ShieldCheck,
    Star, ChevronDown, ChevronUp, ArrowRight, Camera, Smile,
    Sparkles, Award, Layers, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';

/* ───────────── DATA ───────────── */

const problems = [
    {
        icon: Zap,
        title: 'Chipped or Cracked Teeth',
        desc: 'Repair minor damage and restore your tooth’s natural shape in a single visit.'
    },
    {
        icon: ArrowRight,
        title: 'Gaps (Diastema)',
        desc: 'Close noticeable spaces between your teeth for a more uniform, confident smile.'
    },
    {
        icon: Smile,
        title: 'Misshapen Teeth',
        desc: 'Reshape teeth that are too small, pointed, or uneven for better symmetry.'
    },
    {
        icon: Sparkles,
        title: 'Discoloured Teeth',
        desc: 'Cover persistent stains that don’t respond to traditional whitening.'
    },
    {
        icon: Layers,
        title: 'Exposed Roots',
        desc: 'Protect roots exposed by receding gums, reducing sensitivity and improving aesthetics.'
    }
];

const faqs = [
    {
        q: 'How long does the bonding procedure take?',
        a: 'Composite bonding is one of the fastest cosmetic treatments. Most procedures are completed in a single visit, often taking between 30 to 60 minutes per tooth.'
    },
    {
        q: 'Is composite bonding painful?',
        a: 'No. Bonding is generally painless and rarely requires anaesthesia unless it’s being used to fill a decayed tooth. It is a minimally invasive procedure that preserves your natural tooth structure.'
    },
    {
        q: 'How long does bonding last?',
        a: 'With proper care, composite bonding typically lasts between 5 to 10 years. Because the resin is not as strong as natural enamel, it may eventually need repair or replacement.'
    },
    {
        q: 'Does the bonding material stain?',
        a: 'The resin material can stain over time, similar to natural teeth. We recommend avoiding excessive coffee, tea, or smoking to maintain the brightness of your results.'
    },
    {
        q: 'How do I care for my bonded teeth?',
        a: 'Simply follow good oral hygiene: brush twice daily, floss once a day, and visit us for regular cleanings. Also, avoid biting on extremely hard objects like ice or pens to prevent chipping.'
    }
];

/* ───────────── COMPONENT ───────────── */

export default function Bonding() {
    const [openFAQ, setOpenFAQ] = useState(null);

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Composite Bonding — Artistic Smile Refinement | Olive Dental</title>
                <meta name="description" content="Repair chips, close gaps, and refine your smile in a single visit with professional composite bonding. minimally invasive aesthetic dentistry at Olive Dental, Kunnumpuram." />
            </Helmet>

            {/* ═══════════ 1. HERO ═══════════ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Aesthetic Dental Refinement</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 mb-6 leading-tight">
                                Artistic Smile <br />
                                <span className="text-primary">Instant Refinement</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Composite bonding is a minimally invasive way to repair chips,
                                close gaps, and reshape your teeth using high-grade aesthetic resin.
                                Get your dream smile in just one visit.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Composite%20Bonding"
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                                >
                                    <MessageCircle size={20} /> WhatsApp Consultation
                                </a>
                                <a
                                    href="tel:+918891494731"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} /> Call Clinic
                                </a>
                            </div>
                            <p className="text-sm text-gray-500 font-medium bg-gray-50/50 inline-block px-3 py-1.5 rounded-lg border border-gray-100">✨ <span className="text-primary font-bold">Single-Visit</span> transformation — Walk out with a new smile</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                                <img
                                    src="/images/beforeafter14.webp"
                                    alt="Composite bonding results at Olive Dental"
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
                                        <Award size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Artistic Precision</p>
                                        <p className="text-xs text-gray-500">Hand-Layered for Natural Aesthetics</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ 2. WHAT IS BONDING? ═══════════ */}
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
                                src="/images/clinic-img2.webp"
                                alt="Dental bonding process"
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is Composite Bonding?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Composite bonding is a cosmetic procedure where a tooth-coloured resin material
                                is applied and sculpted to your tooth. A special "curing" light then hardens the
                                material, permanently bonding it to the tooth to restore its appearance.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Minimally invasive — Little to no tooth removal',
                                    'Usually completed in a single 60-minute visit',
                                    'Custom-shaded to match your natural enamel',
                                    'Immediate correction of chips and gaps',
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

            {/* ═══════════ 3. CONDITIONS BONDING CAN FIX ═══════════ */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Conditions We Treat</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Is Bonding Right for You?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Bonding is ideal for patients with minor cosmetic flaws who want a fast,
                            affordable, and effective solution without extensive dental work.
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

            {/* ═══════════ 4. WHY CHOOSE OLIVE DENTAL ═══════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Clinical Excellence</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Olive Dental?</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            { icon: Clock, title: 'Single-Visit Transformation', desc: 'Walk in with a chip or gap, and walk out with a refreshed smile in about an hour.' },
                            { icon: Layers, title: 'Artistic Hand-Layering', desc: 'Our specialists use expert layering techniques to mimic the translucency of natural enamel.' },
                            { icon: ShieldCheck, title: 'Minimally Invasive', desc: 'Bonding requires very little to no removal of your natural tooth structure.' },
                            { icon: Star, title: 'Natural-Shade Matching', desc: 'We carefully match the resin shade to your teeth for a completely seamless result.' }
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

            {/* ═══════════ 5. FAQ ═══════════ */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Common Questions</span>
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
