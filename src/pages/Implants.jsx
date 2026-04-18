import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Zap, Award, Heart, Anchor, Star
} from 'lucide-react';

import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: "Are dental implants permanent?",
        a: "Yes, they are designed to be a permanent solution. With proper oral hygiene and regular checkups, they can last a lifetime."
    },
    {
        q: "Is the procedure painful?",
        a: "Most patients report less discomfort than a tooth extraction. We use local anesthesia, so you won't feel pain during the procedure. Post-op discomfort is usually mild and managed with simple pain relief."
    },
    {
        q: "Am I a candidate for implants?",
        a: "If you have generally good health and healthy gums, you are likely a good candidate. We check your bone density during the initial consultation using digital scans to confirm suitability."
    },
    {
        q: "How long does the entire process take?",
        a: "The process typically involves a few stages over 3–6 months to allow for proper healing and integration with the jawbone. However, we provide temporary solutions so you never walk out without a tooth."
    },
    {
        q: "How do I care for my dental implant?",
        a: "You care for it just like a natural tooth — brush twice a day, floss daily, and visit us for regular professional cleanings. Implants cannot get cavities, but gum health remains vital."
    }
];

const whyUs = [
    { icon: Award, title: 'Experienced Implantologists', desc: 'Specialized training in complex implant surgery and restoration.' },
    { icon: Zap, title: 'Guided Surgery Precision', desc: 'Exact implant placement with minimal trauma using digital planning.' },
    { icon: ShieldCheck, title: 'Sterile & Safe Environment', desc: 'Hospital-grade sterilization for every surgical procedure.' },
    { icon: Star, title: 'Premium Material Quality', desc: 'FDA-approved, medical-grade titanium from leading manufacturers.' },
    { icon: Heart, title: 'Bone Preservation', desc: 'Maintains facial structure by preventing post-extraction bone loss.' },
    { icon: Anchor, title: 'Affordable Payment Plans', desc: 'Flexible EMI options to make implants accessible to all.' }
];

const benefits = [
    'Restores full chewing ability and speech',
    'Feels and looks exactly like a natural tooth',
    'Prevents bone loss and preserves facial structure',
    'Does not require cutting down neighboring teeth',
    'Permanent solution that can last a lifetime'
];

export default function Implants() {
    const [openFAQ, setOpenFAQ] = useState(null);


    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Dental Implants — Permanent Tooth Replacement | Olive Dental</title>
                <meta name="description" content="Restore your missing teeth with permanent dental implants in Kunnumpuram, Kondotty. Gold-standard tooth replacement by experts. Book your consultation today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/implants" />
            </Helmet>



            {/* ═══ HERO ═══ */}
            <section className="relative bg-[#F8FAFC] py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Permanent Tooth Replacement</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Restore Your Confidence.<br />
                                <span className="text-primary">Permanent Dental Implants.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Eat confidently, smile naturally, and protect your jawbone health. Implants are the gold standard for replacing missing teeth — stable, durable, and indistinguishable from natural teeth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20consultation%20for%20dental%20implants"
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
                            <p className="text-sm text-gray-500 font-medium bg-gray-50/50 inline-block px-3 py-1.5 rounded-lg border border-gray-100">✨ <span className="text-primary font-bold">EMI</span> options available — plan your treatment comfortably</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                                <img
                                    src="/dist/images/dentalimplant.webp?auto=format&fit=crop&q=80&w=800"
                                    alt="Dental implant treatment at Olive Dental"
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
                                        <Anchor size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Success Rate 98%</p>
                                        <p className="text-xs text-gray-500">The gold standard solution</p>
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
                                src="/dist/images/dentalimplant.webp?auto=format&fit=crop&q=80&w=800"
                                alt="Modern dental implant technology"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is a Dental Implant?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                A dental implant replaces the entire tooth structure, including the root. A titanium post is placed in the jawbone, where it fuses naturally (osseointegration) to provide a stable, lifetime foundation for a custom-made crown.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone with a missing tooth, or teeth that are failing and need extraction. It is the best way to prevent the collapse of neighboring teeth and jawbone shrinkage.
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
            <section className="py-20 bg-[#F8FAFC]">
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