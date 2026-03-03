import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { facialServices } from '../data/services';
import { ArrowRight, ShieldCheck, Sparkles, FlaskConical, Heart, ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const facialFaqs = [
    {
        question: 'Is PRP skin rejuvenation painful?',
        answer: 'PRP involves minimal discomfort. A topical numbing cream is applied before the procedure. Most patients describe it as a mild tingling sensation with no significant pain.'
    },
    {
        question: 'How long does Botox last?',
        answer: 'Botox results typically last 3–6 months. With regular maintenance sessions, results can last longer as the muscles gradually adapt. Results vary by individual.'
    },
    {
        question: 'Is microneedling safe for all skin types?',
        answer: 'Yes. Microneedling is safe for all skin types when performed by trained professionals. We customise needle depth and technique based on your skin\'s specific needs and concerns.'
    },
    {
        question: 'What is the downtime after a thread lift?',
        answer: 'Thread lift has minimal downtime — typically 2–3 days of mild swelling. Most patients return to normal activities within a week. Full results develop over 2–3 months as collagen builds.'
    },
    {
        question: 'How often should I get a HydraFacial?',
        answer: 'For optimal results, we recommend a HydraFacial every 4–6 weeks. It complements other treatments and maintains skin health between more intensive procedures.'
    }
];

export default function FacialAesthetics() {
    const [openFaq, setOpenFaq] = useState(null);

    const coreFacial = facialServices.filter(s => s.type === 'core');
    const advancedFacial = facialServices.filter(s => s.type === 'advanced');
    const minorFacial = facialServices.filter(s => s.type === 'minor');

    return (
        <>
            <Helmet>
                <title>Advanced Facial Aesthetic Treatments | Olive Dental & Face Clinic, Kunnumpuram</title>
                <meta name="description" content="PRP treatment, Botox, microneedling, HydraFacial, and advanced anti-ageing treatments in Kunnumpuram, Kerala. Medically supervised facial aesthetics clinic." />

                <link rel="canonical" href="https://olivedentalofficial.in/facial-aesthetics" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Facial Aesthetic Treatments | Olive Dental & Face Clinic" />
                <meta property="og:description" content="Medically supervised facial aesthetics, PRP, and anti-ageing in Kunnumpuram, Kerala." />
                <meta property="og:url" content="https://olivedentalofficial.in/facial-aesthetics" />
                <meta property="og:image" content="https://olivedentalofficial.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* ─── HERO ─── */}
            <section className="relative bg-[#FAF8F5] py-16 lg:py-24 overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Medical Aesthetic Clinic in Kunnumpuram</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Advanced Facial Aesthetics<br />
                                <span className="text-primary">in Kunnumpuram</span>
                            </h1>
                            <p className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed">
                                Medically supervised skin rejuvenation and anti-ageing solutions designed for natural, clinical, and refined results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20aesthetic%20consultation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-center"
                                >
                                    <MessageCircle size={20} />
                                    Book Aesthetic Consultation
                                </a>
                                <a
                                    href="tel:+918891494731"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-semibold hover:bg-blue-50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-center"
                                >
                                    <Phone size={20} />
                                    Call Now
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-2xl rotate-6 scale-95"></div>
                            <img
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
                                alt="Medical Aesthetic Treatment"
                                className="relative w-full h-auto rounded-[2rem] shadow-2xl z-10 object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 1: CORE ANTI-AGEING ─── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Specialist Treatments</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Skin Rejuvenation</h2>
                        <p className="text-gray-500 max-w-2xl">
                            Clinically proven facial procedures performed under medical supervision for natural, healthy, and lasting results.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {coreFacial.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                {service.image && (
                                    <div className="h-52 overflow-hidden relative">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-60" />
                                        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full bg-primary/90 text-white shadow-sm">
                                            Medical Aesthetic
                                        </span>
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="w-11 h-11 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4 -mt-11 relative z-10 border-2 border-white shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                                        <service.icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: ADVANCED SKIN SOLUTIONS ─── */}
            <section className="py-20 bg-[#FAF8F5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Targeted Skin Solutions</h2>
                        <p className="text-gray-500">Evidence-based treatments for specific skin concerns, following strict clinical protocols.</p>
                    </motion.div>

                    <div className="space-y-4">
                        {advancedFacial.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-primary/10 transition-all"
                            >
                                <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <Sparkles size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                                    <p className="text-gray-500 text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3: MINOR PROCEDURES ─── */}
            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Additional Clinical Procedures</h3>
                    <div className="flex flex-wrap gap-3">
                        {minorFacial.map((service) => (
                            <span
                                key={service.id}
                                className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-lg border border-gray-200 hover:border-primary/30 hover:bg-white transition-all cursor-default"
                            >
                                {service.title}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SKIN ASSESSMENT CTA ─── */}
            <section className="py-14 bg-blue-50/30 border-t border-blue-100">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Skin Assessment</h3>
                    <p className="text-gray-500 mb-6 font-medium">Schedule a clinical assessment to receive a personalised treatment plan from our specialists.</p>
                    <a
                        href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20skin%20assessment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                    >
                        <MessageCircle size={18} />
                        Book Skin Assessment
                    </a>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-20 bg-[#FAF8F5]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Facial Treatment FAQs</h2>
                    </div>
                    <div className="space-y-4">
                        {facialFaqs.map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 text-left transition-colors"
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    {openFaq === index ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-5 pt-0 text-gray-500 border-t border-gray-100 bg-gray-50/30">{faq.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FINAL CTA ─── */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Begin Your Skin Transformation</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Our aesthetic specialists are ready to design a treatment plan tailored to your clinical goals. Book your consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20aesthetic%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Book Aesthetic Consultation
                        </a>
                        <a href="tel:+918891494731" className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
