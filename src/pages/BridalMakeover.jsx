import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Sparkles, Award, Star, Clock, Heart, Users, Microscope
} from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'How long before my wedding should I start the Bridal Makeover plan?',
        a: 'For optimal results, especially with deep texture refinement or collagen treatments like PRP, we recommend starting 3–4 months in advance. However, we have "Express Radiance" protocols for those with only 4 weeks remaining.'
    },
    {
        q: 'Is there any downtime associated with these treatments?',
        a: 'Most of our bridal treatments, like Medical HydraFacials and light peels, have zero downtime. For treatments like Microneedling, there might be 24–48 hours of mild redness. We plan your sessions to ensure your skin is perfectly settled and glowing for your events.'
    },
    {
        q: 'Are the results natural or will I look "different"?',
        a: 'Our focus is "Medically Guided Enhancement." We aim to revitalize your skin’s natural health and glow, ensuring you look like the most well-rested, radiant version of yourself. We avoid artificial transformations.'
    },
    {
        q: 'Can these treatments help with acne or pigmentation before the wedding?',
        a: 'Yes. Our senior doctors specialize in treating pigmentation and active skin concerns using medical-grade protocols that are far more effective than standard salon facials.'
    },
    {
        q: 'Is the clinical environment safe for sensitive skin?',
        a: 'Absolutely. Every treatment begins with a medical skin analysis. We use clinical-grade, hypoallergenic products and sterilized equipment, making it the safest choice for brides with sensitive or reactive skin.'
    }
];

const whyUs = [
    { icon: Microscope, title: 'Doctor-Led Protocols', desc: 'Every treatment is supervised by medical professionals, ensuring safety and clinical efficacy.' },
    { icon: ShieldCheck, title: 'Medical-Grade Equipment', desc: 'We use FDA-approved technology like HydraFacial and advanced microneedling systems for predictable results.' },
    { icon: Heart, title: 'No Buffing or Harsh Steaming', desc: 'We avoid aggressive, non-medical salon techniques that can damage the skin barrier before your big day.' },
    { icon: Award, title: 'Customized Rejuvenation', desc: 'No one-size-fits-all packages. Your plan is built around your specific skin type and wedding timeline.' }
];

const timelineSteps = [
    {
        label: '6+ Months Before',
        title: 'Complete Structural Renewal',
        text: 'The ideal time for treatments that work with your skin’s natural renewal cycle. We focus on structural improvements like PRP (Platelet-Rich Plasma) and Medical Microneedling to stimulate deep collagen, refine pores, and address any long-term texture concerns.',
        points: [
            'PRP Skin Rejuvenation',
            'Medical Microneedling',
            'Deep Texture Refinement',
            'Structural Skin Health Analysis'
        ],
        result: 'Firmer, healthier skin structure from within',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
    },
    {
        label: '3 Months Before',
        title: 'Skin Tone & Texture Refinement',
        text: 'With 90 days remaining, we transition to refining the skin surface. This stage includes controlled medical-grade peels and specialized pigmentation treatments that even out your skin tone and prepare it for a naturally radiant glow.',
        points: [
            'Medical-Grade Chemical Peels',
            'Pigmentation Correction',
            'Advanced Serum Infusion',
            'Controlled Exfoliation'
        ],
        result: 'Even skin tone and smoother surface texture',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        label: '1 Month Before',
        title: 'Deep Hydration & Pore Refining',
        text: 'In the final countdown, we prioritize skin barrier health and intense moisture. Our clinical-grade HydraFacials combined with advanced antioxidant infusions ensure your skin is plump, hydrated, and perfectly smooth for your wedding events.',
        points: [
            'Medical HydraFacial',
            'Intense Antioxidant Infusion',
            'Deep Hydration Therapy',
            'Pore Size Reduction'
        ],
        result: 'Plump, hydrated, and photogenic skin',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop'
    },
    {
        label: '1–2 Weeks Before',
        title: 'The Signature Radiance Boost',
        text: 'In the final days, we exclusively use non-invasive, zero-downtime ‘glow’ protocols. A final medical-grade polish and a specialized radiance facial ensure you look rested, revitalized, and flawless under any high-definition camera or lighting.',
        points: [
            'Final Radiance Facial',
            'Medical-Grade Skin Polish',
            'Oxygen Infusion Boost',
            'Hydration Perfecting'
        ],
        result: 'Instant, deep-seated bridal glow',
        image: 'https://images.unsplash.com/photo-1481398501257-817887569f1a?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function BridalMakeover() {
    const [openFAQ, setOpenFAQ] = useState(null);

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Bridal Makeover — Pre-Wedding Facial Aesthetics | Olive Dental & Face Clinic</title>
                <meta name="description" content="Professional pre-wedding skin rejuvenation in Kunnumpuram, Kondotty. Medical HydraFacials, PRP, and doctor-led facial aesthetic plans for brides. Book your consultation today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/bridal-makeover" />
            </Helmet>

            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Medically Guided Bridal Radiance</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Flawless Skin, <br />
                                <span className="text-primary">Clinical Precision</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Advanced dermatological facial aesthetic plans designed to revitalize your skin’s natural glow and ensure long-term health. We provide medical-grade care, not salon-style facials.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Face%20Clinic,%20I'd%20like%20to%20book%20a%20Bridal%20Makeover%20consultation"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                                <img
                                    src="/images/bridal-makeover.webp"
                                    alt="Bridal facial aesthetic treatment at Olive Clinic"
                                    className="w-full aspect-[4/3] object-cover"
                                    fetchPriority="high"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Microscope size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Clinical Radiance</p>
                                        <p className="text-xs text-gray-500">Doctor-Supervised Skin Plans</p>
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
                                src="/images/hydrafacial-img.webp"
                                alt="Professional Bridal Makeover"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is a Bridal Makeover?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A Bridal Makeover at Olive Clinic is a medically-guided skin rejuvenation plan designed to achieve a healthy, radiant glow for your wedding day. It combines advanced clinical treatments like Medical HydraFacials, PRP, and professional peels to revitalize your skin texture and tone for a flawless, camera-ready finish.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who is it for?</strong> Brides who want to prioritize skin health and natural luminosity over temporary makeup fixes. We treat concerns like dullness, uneven texture, and pre-wedding stress fatigue to ensure you look revitalized and fresh.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ TIMELINE SECTION ═══ */}
            <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
                {/* Theme Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48" />
                <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -ml-36" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Step-By-Step Skin Journey</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Plan Your Skin Prep Based on Your Wedding Date</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Great skin takes a structured approach. We plan your medical treatments step-by-step to achieve your best possible natural glow.
                        </p>
                    </div>

                    <div className="space-y-24 lg:space-y-32">
                        {timelineSteps.map((step, index) => (
                            <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div 
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: true }} 
                                    transition={{ duration: 0.7 }}
                                    className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                                >
                                    <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full aspect-[4/3] object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    viewport={{ once: true }} 
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                                >
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                                        {step.label}
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                        {step.text}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {step.points.map((point, pIndex) => (
                                            <li key={pIndex} className="flex items-start gap-3 text-gray-700">
                                                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-6 border-t border-gray-100">
                                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Result</p>
                                        <p className="text-lg font-bold text-primary">{step.result}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CALL TO ACTION ═══ */}
            <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                        Not sure what’s possible in your time?
                    </h3>
                    <p className="text-lg md:text-xl text-white/85 mb-8 font-medium leading-relaxed">
                        Tell us your wedding date—we’ll guide you step-by-step to your perfect skin glow.
                    </p>
                    <a
                        href="https://wa.me/918891494731?text=Hi%20Olive%20Face%20Clinic,%20I'd%20like%20to%20get%20my%20Bridal%20Skin%20Ready%20Plan.%20My%20wedding%20date%20is:"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
                    >
                        <MessageCircle size={20} />
                        Get My Skin Plan on WhatsApp
                    </a>
                </div>
            </section>

            {/* ═══ WHY CHOOSE US ═══ */}
            <section className="py-24 bg-background-soft">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Expert Skin Care</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Olive Clinic?</h2>
                    </motion.div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyUs.map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 15 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Patient Concerns</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    </motion.div>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50 font-semibold text-gray-900">
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

function SparklesIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
        </svg>
    );
}
