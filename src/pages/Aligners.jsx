import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Phone, MessageCircle, CheckCircle2, Clock, ShieldCheck,
    Star, ChevronDown, ChevronUp, ArrowRight, Eye, Smile,
    Utensils, Layers, ScanLine, CalendarCheck, Sparkles,
    HeartPulse, Award, Users, MonitorSmartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const beforeAfterCases = [
    {
        before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=400',
        after: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Crowding Correction',
        duration: '8 months'
    },
    {
        before: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600&h=400',
        after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Gap Closure',
        duration: '6 months'
    },
    {
        before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600&h=400',
        after: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Crooked Front Teeth',
        duration: '10 months'
    },
    {
        before: 'https://images.unsplash.com/photo-1595867372365-d6c2957e074d?auto=format&fit=crop&q=80&w=600&h=400',
        after: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Overbite Improvement',
        duration: '12 months'
    }
];

const steps = [
    {
        icon: CalendarCheck,
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300',
        title: 'Consultation',
        desc: 'Discuss your goals, examine your teeth, and determine if aligners are right for you.'
    },
    {
        icon: ScanLine,
        image: '/images/scan-intraoral.jpg',
        title: 'Digital Scan',
        desc: '3D intraoral scan creates a precise model of your teeth — no messy impressions.'
    },
    {
        icon: Layers,
        image: '/images/aligners-product.jpg',
        title: 'Custom Aligners',
        desc: 'Your personalized trays are manufactured and delivered within 2–3 weeks.'
    },
    {
        icon: Sparkles,
        image: '/images/aligner-lifestyle.jpg',
        title: 'Gradual Correction',
        desc: 'Wear each set of trays for 1–2 weeks as teeth shift into perfect alignment.'
    }
];

const comparisonData = [
    { feature: 'Appearance', aligners: 'Nearly invisible', braces: 'Visible metal/ceramic' },
    { feature: 'Removable', aligners: 'Yes — for eating & cleaning', braces: 'No — fixed for duration' },
    { feature: 'Comfort', aligners: 'Smooth plastic trays', braces: 'Metal brackets & wires' },
    { feature: 'Cleaning', aligners: 'Easy — brush normally', braces: 'Difficult — food gets trapped' },
    { feature: 'Diet', aligners: 'No restrictions', braces: 'Avoid hard / sticky foods' },
    { feature: 'Appointments', aligners: 'Every 6–8 weeks', braces: 'Every 4–6 weeks' },
    { feature: 'Treatment time', aligners: '6–18 months', braces: '18–36 months' }
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
                            <div className="flex flex-col sm:flex-row gap-4">
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
                                    src="/images/aligners-product.jpg"
                                    alt="Clear aligner trays at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            {/* Floating stat badge */}
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <CheckCircle2 size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">200+ Cases Completed</p>
                                        <p className="text-xs text-gray-500">Trusted across Kondotty</p>
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
                                src="/images/aligner-lifestyle.jpg"
                                alt="Patient wearing clear aligners"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
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

            {/* ═══════════ 4. REAL PATIENT TRANSFORMATIONS ═══════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Proven Results</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Real Patient Transformations</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            See the difference clear aligners can make. These results speak for themselves.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {beforeAfterCases.map((c, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="grid grid-cols-2">
                                    <div className="relative">
                                        <img src={c.before} alt={`Before — ${c.label}`} className="w-full h-52 object-cover" />
                                        <span className="absolute bottom-3 left-3 bg-gray-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Before</span>
                                    </div>
                                    <div className="relative">
                                        <img src={c.after} alt={`After — ${c.label}`} className="w-full h-52 object-cover" />
                                        <span className="absolute bottom-3 right-3 bg-accent/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">After</span>
                                    </div>
                                </div>
                                <div className="p-5 flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-gray-900">{c.label}</p>
                                        <p className="text-sm text-gray-500">Treatment time: {c.duration}</p>
                                    </div>
                                    <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ 5. HOW THE TREATMENT WORKS ═══════════ */}
            <section className="py-20 bg-background-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Your Journey</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How the Treatment Works</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            From first visit to final smile — a clear, predictable process.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="relative text-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all z-10"
                            >
                                <div className="mb-6 rounded-xl overflow-hidden aspect-video shadow-sm">
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary relative">
                                    <step.icon size={24} />
                                </div>
                                <span className="inline-block text-[11px] font-bold text-primary bg-primary/10 px-3 py-0.5 rounded-full mb-3">
                                    Step {i + 1}
                                </span>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ 6. ALIGNERS VS BRACES ═══════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Comparison</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Aligners vs Traditional Braces</h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-lg">
                            See why more patients are choosing clear aligners over metal braces.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
                    >
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="py-4 px-6 font-semibold text-sm">Feature</th>
                                    <th className="py-4 px-6 font-semibold text-sm">
                                        <span className="flex items-center gap-2"><Eye size={16} /> Clear Aligners</span>
                                    </th>
                                    <th className="py-4 px-6 font-semibold text-sm">Metal Braces</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <td className="py-3.5 px-6 font-semibold text-gray-700 text-sm">{row.feature}</td>
                                        <td className="py-3.5 px-6 text-sm text-primary font-medium">{row.aligners}</td>
                                        <td className="py-3.5 px-6 text-sm text-gray-500">{row.braces}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ 7. PAIN & SAFETY ═══════════ */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary-light font-bold tracking-wider uppercase text-xs mb-3 block">Your Safety</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pain, Safety & Comfort</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            We know you have concerns. Here are honest, straightforward answers.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: HeartPulse,
                                title: 'Mild pressure, not pain',
                                text: 'You may feel slight tightness for the first 1–2 days of each new aligner set. This is normal and temporary — it means your teeth are moving.'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'No metal wires or brackets',
                                text: 'Smooth, BPA-free plastic trays mean no cuts, no sores, and no emergency visits for broken wires.'
                            },
                            {
                                icon: Award,
                                title: 'FDA-approved technology',
                                text: 'Clear aligners are medically approved and used by millions of patients worldwide with proven, predictable results.'
                            },
                            {
                                icon: CalendarCheck,
                                title: 'Regular monitoring',
                                text: 'Your dentist tracks progress at every visit and adjusts the plan if needed. You\'re never left guessing.'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ 8. INVISALIGN AVAILABILITY ═══════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Premium Options</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Premium Aligners Available</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Olive Dental provides multiple aligner systems based on your specific case —
                                including <strong className="text-gray-900">Invisalign</strong>, the world's leading clear aligner system, trusted by over 15 million patients globally.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                After consultation and digital scan, your custom aligners are typically delivered
                                within <strong className="text-gray-900">2–3 weeks</strong>. Your dentist will recommend the best
                                system for your teeth, budget, and timeline.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Invisalign', sub: 'Global leader' },
                                    { label: 'Multiple brands', sub: 'Best fit for you' },
                                    { label: '2–3 week delivery', sub: 'After scan' },
                                    { label: 'Case-based pricing', sub: 'Transparent costs' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-blue-50/70 p-4 rounded-xl border border-blue-100/50">
                                        <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                                        <p className="text-xs text-gray-500">{item.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                        >
                            <img
                                src="/images/scan-intraoral.jpg"
                                alt="Digital 3D scan for aligners at Olive Dental"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ 9. SMILE SIMULATION ═══════════ */}
            <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <MonitorSmartphone size={32} className="text-primary" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See Your Future Smile Before Treatment</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Using advanced digital scanning technology, we create a 3D simulation of your expected
                            results — so you can preview your new smile <em>before</em> you even start treatment.
                            No guesswork. Complete confidence.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                            {[
                                { icon: ScanLine, title: '3D Digital Scan', desc: 'Precise mapping of your teeth' },
                                { icon: MonitorSmartphone, title: 'Smile Preview', desc: 'See your projected result' },
                                { icon: Sparkles, title: 'Predictable Outcome', desc: 'Know what to expect' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                                >
                                    <item.icon size={22} className="text-primary mx-auto mb-3" />
                                    <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <a
                            href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20want%20to%20see%20my%20smile%20simulation"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                        >
                            <MessageCircle size={18} /> Request Your Smile Preview
                        </a>
                    </motion.div>
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
                            { icon: Users, title: 'Multi-Specialty Dental Team', desc: 'Orthodontic expertise backed by a full dental team for comprehensive care.' },
                            { icon: ScanLine, title: 'Digital Scanning Technology', desc: 'Accurate 3D scans replace messy impressions for precise aligner fabrication.' },
                            { icon: Star, title: 'Personalized Treatment Plans', desc: 'Every case is unique — your plan is designed specifically for your teeth and goals.' },
                            { icon: Award, title: 'Experienced Specialists', desc: '200+ aligner cases completed with high patient satisfaction and predictable outcomes.' }
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

            {/* ═══════════ 12. FINAL CTA ═══════════ */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your New Smile?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
                            Book a consultation today. We'll scan your teeth and show you
                            exactly what your new smile could look like.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Clear%20Aligners"
                                className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg"
                            >
                                <MessageCircle size={20} /> WhatsApp Us
                            </a>
                            <a
                                href="tel:+918891494731"
                                className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                            >
                                <Phone size={20} /> Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
