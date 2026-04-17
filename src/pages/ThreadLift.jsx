import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Sparkles, Award, Heart, Star
} from 'lucide-react';

import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'What is a thread lift?',
        a: 'A thread lift is a non-surgical procedure that uses dissolvable, medical-grade sutures to lift and tighten sagging skin. It also stimulates collagen production in the treated areas for long-term rejuvenation.'
    },
    {
        q: 'Is the procedure painful?',
        a: 'We use local anaesthesia to numb the treatment area, so the procedure itself is relatively comfortable. You may feel some tugging or pressure during the insertion of the threads.'
    },
    {
        q: 'What is the downtime after a thread lift?',
        a: 'Thread lift has minimal downtime — typically 2–3 days of mild swelling or bruising. Most patients return to normal activities within a week. Full results develop over 2–3 months as collagen builds.'
    },
    {
        q: 'How long do the results last?',
        a: 'Results can last anywhere from 1 to 2 years. While the threads dissolve within 6–9 months, the new collagen produced helps maintain the lifted appearance for much longer.'
    },
    {
        q: 'Who is a good candidate for a thread lift?',
        a: 'Ideal candidates are those with mild to moderate skin laxity in the face and neck who want a lift without the downtime and risks associated with traditional surgery.'
    },
    {
        q: 'Are there any risks?',
        a: 'Thread lifts are generally very safe when performed by experienced professionals. Potential side effects include temporary bruising, swelling, or slight asymmetry, which usually resolve quickly.'
    }
];

const whyUs = [
    { icon: ShieldCheck, title: 'Expert Clinical Technique', desc: 'Our clinical specialists are highly trained in advanced thread placement for natural, effective lifting.' },
    { icon: Award, title: 'Premium Dissolvable Threads', desc: 'We select only the highest quality, FDA-approved dissolvable sutures for safety and optimal results.' },
    { icon: Sparkles, title: 'Non-Surgical Results', desc: 'Achieve a noticeable lift and tighter skin without the need for incisions, general anaesthesia, or long recovery.' },
    { icon: Heart, title: 'Personalised Assessments', desc: 'We carefully evaluate your facial structure and skin laxity to ensure a thread lift is the right choice for you.' },
    { icon: Star, title: 'Dual-Action Rejuvenation', desc: 'Provides immediate physical lift while triggering long-term natural collagen production.' },
    { icon: ShieldCheck, title: 'Safe & Sterile Environment', desc: 'All procedures are performed in our medically-compliant facility under strict aseptic conditions.' }
];

const benefits = [
    'Immediate lifting and tightening effect',
    'Stimulates long-term natural collagen production',
    'Minimal downtime and quick recovery',
    'No surgical incisions or permanent scarring',
    'Safe and effective non-surgical alternative'
];

export default function ThreadLift() {
    const [openFAQ, setOpenFAQ] = useState(null);


    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Thread Lift — Non-Surgical Face Lifting | Olive Dental, Kondotty</title>
                <meta name="description" content="Advanced thread lift treatments in Kunnumpuram, Kondotty. Non-surgical skin tightening and lifting with minimal downtime. Book your professional assessment today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/thread-lift" />
            </Helmet>



            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Thread Lift</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Instant Lift.<br />
                                <span className="text-primary">No Surgery Required.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Thread lifts provide an immediate, subtle lift to sagging skin while boosting your natural collagen
                                for a tighter, more youthful contour without the downtime of surgery.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20consultation%20for%20thread%20lift"
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
                                    src="/images/threadlift-img.webp"
                                    alt="Thread lift at Olive Dental"
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
                                        <Sparkles size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Instant Contour</p>
                                        <p className="text-xs text-gray-500">Non-surgical skin tightening</p>
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
                                src="/images/threadlift-img.webp"
                                alt="Thread lift procedure illustration"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is a Thread Lift?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                A thread lift is a non-surgical facial rejuvenation procedure that uses dissolvable sutures to lift and tighten sagging skin. As the threads dissolve, they stimulate the body to produce new collagen, resulting in a firmer and more youthful appearance that lasts.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone experiencing mild to moderate sagging in the mid-face, jawline, or neck who wants a noticeable lift without undergoining invasive surgery.
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
