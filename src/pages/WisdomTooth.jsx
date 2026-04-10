import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Zap, Award, Heart, Syringe, Star
} from 'lucide-react';
import BookingModal from '../components/BookingModal';
import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'Is wisdom tooth removal painful?',
        a: 'The procedure itself is completely painless under local anaesthesia. You may feel mild pressure but no pain. Afterwards, there is some soreness for 2–4 days, which is well-managed with the pain relief we provide.'
    },
    {
        q: 'How long does the procedure take?',
        a: 'A straightforward wisdom tooth extraction takes 20–45 minutes. Impacted or deeply embedded teeth may take longer. Our oral surgeon will give you a clear time estimate after reviewing your X-ray.'
    },
    {
        q: 'How long is the recovery?',
        a: 'Most patients feel significantly better within 3–5 days. Full healing of the socket takes 1–2 weeks. We provide detailed post-operative instructions and prescribe antibiotics and pain relief to support recovery.'
    },
    {
        q: 'What is an impacted wisdom tooth?',
        a: 'An impacted tooth is one that cannot fully erupt because it is blocked by adjacent teeth or bone. It often grows at an angle, causing pain, swelling, gum infection, or damage to nearby teeth if left untreated.'
    },
    {
        q: 'When is wisdom tooth removal necessary?',
        a: 'Removal is advised when the tooth is impacted, causing recurrent pain or gum infections, pushing neighbouring teeth, or developing a cyst. Not all wisdom teeth need removal — we assess each case individually.'
    },
    {
        q: 'What should I eat after the extraction?',
        a: 'Stick to soft foods (yoghurt, soups, mashed foods) for the first 3–5 days. Avoid hot, spicy, or hard foods and do not use a straw, as this can dislodge the blood clot and delay healing.'
    }
];

const whyUs = [
    { icon: Award, title: 'Specialist Oral Surgeon — Dr. Pravish Vishnudas', desc: 'MDS-qualified maxillofacial surgeon experienced in complex impacted wisdom tooth removals.' },
    { icon: Zap, title: 'Minimally Invasive Techniques', desc: 'We use surgical loupes and precision instruments to minimise trauma and reduce recovery time.' },
    { icon: ShieldCheck, title: 'Safe & Sterile Environment', desc: 'Hospital-grade sterilisation of all instruments and complete aseptic protocol for every procedure.' },
    { icon: Syringe, title: 'Advanced Anaesthesia', desc: 'Modern block anaesthesia ensures you are fully numb and comfortable throughout the procedure.' },
    { icon: Heart, title: 'Post-Op Care Included', desc: 'We provide prescriptions, detailed recovery instructions, and follow-up to ensure smooth healing.' },
    { icon: Star, title: 'Digital X-Ray Assessment', desc: 'Accurate digital X-rays help us plan the procedure precisely before we make any incision.' }
];

const benefits = [
    'Permanently relieves wisdom tooth pain and infection',
    'Prevents damage to adjacent healthy teeth',
    'Eliminates recurrent gum swelling around the tooth',
    'Reduces risk of cyst or abscess formation',
    'Quick recovery with proper post-operative care'
];

export default function WisdomTooth() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Wisdom Tooth Removal — Painless Extraction | Olive Dental, Kondotty</title>
                <meta name="description" content="Painless wisdom tooth removal in Kunnumpuram, Kondotty. Minimally invasive extraction of impacted wisdom teeth by specialist oral surgeon. Book your consultation today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/wisdom-tooth" />
            </Helmet>

            <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Wisdom Tooth Removal</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                End the Pain.<br />
                                <span className="text-primary">Comfortable, Safe Removal.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Expert removal of impacted or problematic wisdom teeth using minimally invasive techniques —
                                under expert anaesthesia, with fast recovery and no complications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => setModalOpen(true)}
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    <MessageCircle size={20} /> Book Consultation
                                </button>
                                <a href="tel:+918891494731"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                                    <Phone size={20} /> Call Now
                                </a>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                                    alt="Wisdom tooth removal at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <CheckCircle2 size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Minimally Invasive</p>
                                        <p className="text-xs text-gray-500">Fast recovery — back to normal in days</p>
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
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                                alt="Dental X-ray for wisdom tooth"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is Wisdom Tooth Removal?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                Wisdom teeth are the last molars to erupt, usually between ages 17–25. When they don't have enough space to grow properly, they become impacted — growing at angles that cause pain, infection, and damage to adjacent teeth.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone with recurring wisdom tooth pain, swollen gums around the back teeth, difficulty opening the mouth, or a wisdom tooth that is impacted or decayed beyond repair.
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
