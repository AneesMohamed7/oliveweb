import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Sparkles, Award, Star, Clock, Heart, Camera
} from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'When should I start my Bridal Smile Design plan?',
        a: 'Ideally, we recommend starting 3–6 months before the wedding. This allows enough time for gradual alignment (if needed) and multiple whitening sessions to achieve the most natural, stable shade.'
    },
    {
        q: 'Will my smile look natural in wedding photos?',
        a: 'Absolutely. Our focus is on enhancement, not artificial transformation. We use Digital Smile Design to ensure the shade and shape of your teeth complement your facial features and skin tone perfectly for high-definition photography.'
    },
    {
        q: 'Is the treatment safe and medically supervised?',
        a: 'Yes. Unlike over-the-counter kits or salon services, every step of your Bridal Smile Design is performed by certified dental specialists using clinical-grade materials and strict safety protocols.'
    },
    {
        q: 'What if I only have a month left before the wedding?',
        a: 'While 3 months is ideal, we offer "Express Bridal Enhancement" plans that focus on professional whitening and minor contouring to deliver a visible boost in confidence within 2–4 weeks.'
    },
    {
        q: 'Can I choose the shade of my teeth?',
        a: 'Yes. We use a professional shade guide to help you choose a brightness level that looks radiant but remains natural. We avoid the "unnatural white" look unless specifically requested.'
    }
];

const whyUs = [
    { icon: ShieldCheck, title: 'Board-Certified Specialists', desc: 'Your treatment is planned and executed by experienced restorative and cosmetic dental experts.' },
    { icon: Camera, title: 'Photography-First Planning', desc: 'We design smiles specifically to look flawless under professional wedding lighting and high-definition cameras.' },
    { icon: Sparkles, title: 'Clinical-Grade Whitening', desc: 'Safe, fast, and effective whitening that delivers results far superior to non-medical alternatives.' },
    { icon: Award, title: 'Digital Smile Preview', desc: 'See your projected results before we begin any major procedure using our digital mapping tools.' }
];

const included = [
    'Comprehensive Smile Assessment',
    'Professional Clinical Whitening',
    'Minimally Invasive Aesthetic Bonding',
    'Gingival Contouring (if required)',
    'Digital Smile Mapping',
    'Final Polish & Perfecting'
];

const timelineSteps = [
    {
        label: '6+ Months Before',
        title: 'Complete Smile Transformation',
        text: 'The best time to start for a total smile reset. This generous window allows us to perform corrective treatments like clear aligners for perfect positioning, gum contouring, and custom porcelain veneers that are fully integrated with your facial features.',
        points: [
            'Clear aligners to straighten teeth',
            'Gum correction (if needed)',
            'Veneers or smile reshaping',
            'Final professional whitening'
        ],
        result: 'Best possible, natural-looking smile transformation',
        image: 'https://images.unsplash.com/photo-1629909613654-28a3a7c4d4e9?q=80&w=2070&auto=format&fit=crop'
    },
    {
        label: '3 Months Before',
        title: 'Focused Smile Improvement',
        text: 'A 90-day plan is ideal for refining the most visible concerns. We prioritize clinical teeth whitening to lift deep stains, coupled with aesthetic bonding to close gaps or fix minor chips, ensuring a smooth and symmetrical appearance for your ceremony.',
        points: [
            'Professional teeth whitening',
            'Cosmetic bonding for gaps or chips',
            'Minor alignment (if suitable)',
            'Replacement of old fillings'
        ],
        result: 'Cleaner, more balanced smile',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
    },
    {
        label: '1 Month Before',
        title: 'Quick Smile Enhancement',
        text: 'With just a few weeks to go, we focus on high-impact, non-invasive treatments. Our professional clinical whitening delivers a significant brightness boost, while minor enamel contouring softens sharp edges for a more youthful and photogenic smile profile.',
        points: [
            'Professional whitening',
            'Minor reshaping',
            'Cleaning and polishing'
        ],
        result: 'Brighter, fresher smile',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop'
    },
    {
        label: '1–2 Weeks Before',
        title: 'Last-Minute Refinement',
        text: 'In the final countdown, we exclusively use safe, surface-level refinements. A specialized dental scale and clinical polish, combined with a quick-action express whitening session, ensures your teeth are sparkling clean and camera-ready without any sensitivity risk.',
        points: [
            'Cleaning and polishing',
            'Express whitening (if suitable)'
        ],
        result: 'Instant improvement before your big day',
        image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop'
    }
];

export default function BridalSmile() {
    const [openFAQ, setOpenFAQ] = useState(null);

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Bridal Smile Design — Wedding Smile Enhancement | Olive Dental, Kunnunmpuram, Malappuram</title>
                <meta name="description" content="Professional bridal smile design in Kunnumpuram, Kondotty. Clinical whitening, aesthetic bonding, and digital smile planning for your wedding. Book your consultation today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/bridal-smile" />
            </Helmet>

            {/* ═══ HERO ═══ */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Personalized Wedding Dental Care</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight uppercase">
                                Bridal Smile Makeover <br />
                                <span className="text-primary text-3xl md:text-4xl">in Kunnumpuram</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Personalized bridal smile makeover in Kunnumpuram—crafted to enhance your natural smile with precise, timeline-based dental care for your big day.                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'd%20like%20to%20book%20a%20Bridal%20Smile%20Design%20consultation"
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
                                    src="/images/bridal-smile.webp"
                                    alt="Bridal smile design preview at Olive Dental"
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
                                        <Camera size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Photography-Ready</p>
                                        <p className="text-xs text-gray-500">Optimized for HD Wedding Cameras</p>
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
                                src="/images/teethwhitening-img.webp"
                                alt="Professional Wedding Smile Makeover"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is a Wedding Smile Makeover?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A Wedding Smile Makeover is a customized cosmetic dental plan designed to give you a confident, photo-ready smile for your big day. It combines treatments like whitening, alignment, and reshaping based on your features and timeline to achieve natural, refined results.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who is it for?</strong> Brides and grooms who want to ensure their smile looks its best in wedding photography and videography. Whether you need significant correction or a quick radiance boost, we tailor the plan to your specific wedding date.
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
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Step-By-Step Smile Journey</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Plan Your Smile Based on Your Wedding Date</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Your treatment depends on how much time you have. We plan it step-by-step to get the best result before your wedding.
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
                        Tell us your wedding date—we’ll guide you step-by-step to your perfect smile.
                    </p>
                    <a
                        href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'd%20like%20to%20get%20my%20Bridal%20Smile%20Plan.%20My%20wedding%20date%20is:"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
                    >
                        <MessageCircle size={20} />
                        Get My Smile Plan on WhatsApp
                    </a>
                </div>
            </section>


            {/* ═══ WHY CHOOSE US ═══ */}
            <section className="py-24 bg-background-soft">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Expertise You Can Trust</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Olive Dental?</h2>
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
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Planning Your Visit</span>
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

function StarsIcon(props) {
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
