import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Zap, Award, Heart, Clock, Star
} from 'lucide-react';
import BookingModal from '../components/BookingModal';
import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'Is root canal treatment painful?',
        a: 'No. With modern anaesthesia, root canal treatment is virtually painless — comparable to getting a routine filling. You may feel mild soreness after the procedure for 1–2 days, which is easily managed with over-the-counter pain relief.'
    },
    {
        q: 'How long does the procedure take?',
        a: 'A straightforward root canal typically takes 60–90 minutes in a single visit. Complex cases with multiple canals may require a second appointment. We use rotary instruments to complete treatment efficiently.'
    },
    {
        q: 'How much does root canal treatment cost?',
        a: 'Cost depends on which tooth is being treated (front teeth are simpler; molars have more canals). We provide a clear cost estimate after your X-ray. No hidden fees. EMI options are available.'
    },
    {
        q: 'What happens if I don\'t get a root canal?',
        a: 'Ignoring an infected tooth leads to spreading infection, abscess formation, and eventually tooth loss. A root canal saves your natural tooth, preventing more complex and costly treatments later.'
    },
    {
        q: 'Do I need a crown after a root canal?',
        a: 'Yes, in most cases. A crown protects the treated tooth from fracture since the root-canal-treated tooth can become brittle over time. We usually recommend a zirconia or ceramic crown for strength and aesthetics.'
    },
    {
        q: 'How soon can I eat after the procedure?',
        a: 'Wait until the anaesthesia wears off (2–3 hours) before eating. Avoid hard or chewy foods on the treated side for a few days. Normal diet can resume once the crown is placed.'
    }
];

const whyUs = [
    { icon: Zap, title: 'Painless with Advanced Anaesthesia', desc: 'We use modern block anaesthesia techniques to ensure you feel nothing during treatment.' },
    { icon: Award, title: 'Specialist Endodontist — Dr. Zaheer K', desc: 'MDS-qualified endodontist with extensive experience in single-visit root canals.' },
    { icon: ShieldCheck, title: 'Rotary Instruments & Apex Locators', desc: 'Digital apex locators ensure precise cleaning to the exact root tip — no guesswork.' },
    { icon: Heart, title: 'Tooth Preservation First', desc: 'We always aim to save your natural tooth rather than recommend extraction.' },
    { icon: Clock, title: 'Single-Visit Completion', desc: 'Most cases are completed in one appointment, saving you time and multiple trips.' },
    { icon: Star, title: 'Proven Results & Happy Patients', desc: 'Hundreds of successful cases with high patient satisfaction and zero regrets.' }
];

const benefits = [
    'Eliminates toothache and infection permanently',
    'Saves your natural tooth — no extraction needed',
    'Prevents infection from spreading to adjacent teeth',
    'Long-lasting results when followed by a crown',
    'Quick recovery — most patients return to normal the next day'
];

export default function RootCanal() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Root Canal Treatment — Painless RCT | Olive Dental, Kondotty</title>
                <meta name="description" content="Painless root canal treatment in Kunnumpuram, Kondotty. Single-visit RCT using rotary instruments and apex locators by specialist endodontist. Book today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/root-canal" />
            </Helmet>

            <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Root Canal Treatment</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Save Your Tooth.<br />
                                <span className="text-primary">No Pain, No Extraction.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Modern root canal therapy eliminates infection and relieves severe toothache — comfortably, in a single visit.
                                Keep your natural tooth and get back to life pain-free.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                                >
                                    <MessageCircle size={20} /> Book Consultation
                                </button>
                                <a
                                    href="tel:+918891494731"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} /> Call Now
                                </a>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
                                    alt="Root canal treatment at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <CheckCircle2 size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Single-Visit RCT</p>
                                        <p className="text-xs text-gray-500">Most cases done in one appointment</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ ABOUT THE TREATMENT ═══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                                alt="Root canal specialist at Olive Dental"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is Root Canal Treatment?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                Root canal treatment (RCT) removes infected or damaged pulp from inside your tooth, cleans the canals, and seals them. The tooth stays in place — fully functional and pain-free.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Patients with severe toothache, prolonged sensitivity to hot/cold, a darkened tooth, or a dental abscess. If a tooth is infected deep inside, RCT is the only way to save it without extraction.
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
