import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Zap, Award, Sun, Smile, Star
} from 'lucide-react';

import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'Is teeth whitening safe?',
        a: 'Yes. Professional teeth whitening at a dental clinic is safe and clinically proven. We use medically approved whitening agents at controlled concentrations — far safer than over-the-counter products or home kits.'
    },
    {
        q: 'How many shades whiter will my teeth get?',
        a: 'Most patients achieve 4–8 shades lighter in a single session. Results vary based on the original shade of your teeth and the cause of discolouration. Yellow stains respond best; grey staining from antibiotics may need more sessions.'
    },
    {
        q: 'How long does the treatment take?',
        a: 'A professional in-chair whitening session takes approximately 60–90 minutes. We apply the whitening gel in 2–3 cycles, each activated under a special light for optimal, even results.'
    },
    {
        q: 'Will my teeth become sensitive?',
        a: 'Some patients experience mild, temporary sensitivity for 24–48 hours after treatment. This is normal and resolves quickly. We use desensitising agents during and after the procedure to minimise discomfort.'
    },
    {
        q: 'How long do results last?',
        a: 'Results typically last 6 months to 2 years depending on your diet and habits. Avoiding tea, coffee, red wine, and tobacco, and maintaining good oral hygiene, significantly extends the result.'
    },
    {
        q: 'Can I whiten teeth if I have crowns or veneers?',
        a: 'Whitening only works on natural tooth enamel — it does not change the shade of crowns, veneers, or fillings. If you have existing restorations, we\'ll advise whether whitening is appropriate and how to best match shades.'
    }
];

const whyUs = [
    { icon: Zap, title: 'In-Chair Laser Whitening', desc: 'Fast, even results in one session with clinical-grade light.' },
    { icon: Award, title: 'Expert Clinical Supervision', desc: 'Performed by dental professionals for safe and optimal results.' },
    { icon: ShieldCheck, title: 'Medically Approved Agents', desc: 'Safe concentrations of internationally regulated whitening agents.' },
    { icon: Sun, title: 'Visible Results in 60 Minutes', desc: 'Noticeably brighter smile in just a single appointment.' },
    { icon: Smile, title: 'Personalised Shade Assessment', desc: 'Treatment calibrated to your specific teeth and goals.' },
    { icon: Star, title: 'Post-Whitening Care Guidance', desc: 'Detailed advice to maintain and extend your results.' }
];

const benefits = [
    'Noticeably whiter smile in a single 60-minute session',
    'Safe, medically supervised — no DIY risks',
    'Uniform whitening across all visible teeth',
    'Boosts confidence for photos, events, or daily life',
    'Long-lasting results with simple maintenance'
];

export default function TeethWhitening() {
    const [openFAQ, setOpenFAQ] = useState(null);


    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Teeth Whitening — Professional Laser Whitening | Olive Dental, Kondotty</title>
                <meta name="description" content="Professional laser teeth whitening in Kunnumpuram, Kondotty. Whiten your teeth 4–8 shades in a single 60-minute session under medical supervision. Book today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/teeth-whitening" />
            </Helmet>



            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Professional Teeth Whitening</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Brighter Smile.<br />
                                <span className="text-primary">One Appointment.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Professional laser whitening removes years of staining in a single clinical session — safe, fast, and dramatically effective.
                                No strips, no trays. Just results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20consultation%20for%20teeth%20whitening"
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
                                    src="/images/teethwhitening-img.webp"
                                    alt="Teeth whitening treatment at Olive Dental"
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
                                        <Sun size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Up to 8 Shades Whiter</p>
                                        <p className="text-xs text-gray-500">Visible results in 30 minutes</p>
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
                                src="/images/teethwhitening-img.webp"
                                alt="Professional teeth whitening procedure"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is Professional Teeth Whitening?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                Professional teeth whitening uses a high-concentration whitening gel applied to the teeth and activated with a clinical laser or LED light. The gel breaks down stain molecules deep inside the enamel, revealing the natural, brighter shade underneath.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone with dull, yellowed, or stained teeth due to tea, coffee, tobacco, age, or diet. Ideal before weddings, events, or as a confidence boost anytime.
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


