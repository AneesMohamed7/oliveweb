import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Sparkles, Award, Heart, Droplets, Star
} from 'lucide-react';
import BookingModal from '../components/BookingModal';

const faqs = [
    {
        q: 'Is PRP skin rejuvenation painful?',
        a: 'PRP involves minimal discomfort. A topical numbing cream is applied before the procedure. Most patients describe it as a mild tingling sensation with no significant pain.'
    },
    {
        q: 'How many sessions are recommended?',
        a: 'For optimal results, we typically recommend a series of 3–4 sessions spaced 4–6 weeks apart. Maintenance sessions every 6–12 months help sustain the regenerative effects.'
    },
    {
        q: 'What is the downtime after PRP?',
        a: 'Downtime is minimal. You may experience mild redness or swelling for 24–48 hours, similar to a light sunburn. Most patients return to their normal activities the next day.'
    },
    {
        q: 'When will I see results?',
        a: 'Initial improvements in skin texture and glow can be seen within 2–3 weeks. However, because PRP stimulates collagen production, the most significant results appear after 3 months.'
    },
    {
        q: 'Is PRP safe?',
        a: 'Yes, PRP is extremely safe because it uses your own blood (autologous), eliminating the risk of allergic reactions or rejection. The entire procedure is performed under strict clinical protocols.'
    },
    {
        q: 'Can PRP be combined with other treatments?',
        a: 'Absolutely. PRP is often combined with microneedling (the "Vampire Facial") or used after laser treatments to accelerate healing and enhance overall results.'
    }
];

const whyUs = [
    { icon: Droplets, title: 'Medical-Grade Centrifugation', desc: 'We use advanced centrifugation technology to ensure the highest concentration of active platelets.' },
    { icon: Award, title: 'Medically Supervised Treatment', desc: 'All PRP procedures are performed by trained medical professionals in a sterile clinical environment.' },
    { icon: ShieldCheck, title: 'Autologous & Safe', desc: 'Since it uses your own blood, there is zero risk of allergic reactions or cross-contamination.' },
    { icon: Sparkles, title: 'Natural Collagen Induction', desc: 'Stimulates your body\'s own healing mechanisms for long-lasting, natural skin rejuvenation.' },
    { icon: Heart, title: 'Tailored Treatment Plans', desc: 'We assess your skin health and goals to determine the ideal frequency and combination of treatments.' },
    { icon: Star, title: 'Visible, Refined Results', desc: 'Hundreds of patients have experienced improved skin texture, tone, and a youthful glow.' }
];

const benefits = [
    'Naturally stimulates collagen and elastin production',
    'Improves skin texture, tone, and overall radiance',
    'Reduces the appearance of fine lines and wrinkles',
    'Minimises acne scars and large pores',
    'Safe and natural with minimal downtime'
];

export default function PRP() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>PRP Skin Rejuvenation — Natural Skin Regeneration | Olive Dental, Kondotty</title>
                <meta name="description" content="Advanced PRP skin rejuvenation treatments in Kunnumpuram, Kondotty. Naturally stimulate collagen for glowing, youthful skin with minimal downtime. Book your consultation today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/prp" />
            </Helmet>

            <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            {/* ═══ HERO ═══ */}
            <section className="relative bg-[#FAF8F5] py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-50/50 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">PRP Skin Rejuvenation</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Natural Glow.<br />
                                <span className="text-primary">Powered by You.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Platelet-Rich Plasma (PRP) therapy uses your body's own growth factors to naturally stimulate collagen,
                                refine skin texture, and restore a youthful radiance.
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
                                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
                                    alt="PRP treatment at Olive Dental"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Droplets size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">100% Autologous</p>
                                        <p className="text-xs text-gray-500">Natural & long-lasting results</p>
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
                                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=80&w=800&auto=format&fit=crop"
                                alt="PRP procedure explained"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is PRP Skin Rejuvenation?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                Platelet-Rich Plasma (PRP) is a clinical treatment that involves drawing a small amount of your own blood,
                                concentrating the platelets, and reinjecting them into the skin. These platelets release growth factors
                                that stimulate skin repair and collagen synthesis.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> Anyone looking for a natural way to improve skin texture, reduce fine lines,
                                treat acne scars, or achieve an overall refreshed and youthful appearance without using synthetic fillers.
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
            <section className="py-20 bg-[#FAF8F5]">
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

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Natural Glow?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
                            Schedule a clinical skin assessment today. We'll design a personalised PRP treatment plan to restore your skin's natural beauty.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => setModalOpen(true)}
                                className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg">
                                <MessageCircle size={20} /> Book Consultation
                            </button>
                            <a href="tel:+918891494731"
                                className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                                <Phone size={20} /> Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
