import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Phone,
    ShieldCheck, Sparkles, Award, Heart, Baby, Star
} from 'lucide-react';

import ContactCTA from '../components/ContactCTA';

const faqs = [
    {
        q: 'From what age should children visit the dentist?',
        a: 'We recommend the first dental visit by age 2–3, or when the first teeth appear. Early visits help children get comfortable with the dental environment, and allow us to spot any early issues such as decay, spacing problems, or thumb-sucking habits.'
    },
    {
        q: 'Is dental treatment painful for children?',
        a: 'We use child-appropriate numbing gels and gentle anaesthesia techniques to ensure every procedure is completely comfortable. Our child-friendly approach minimises anxiety — most children leave happily without any distress.'
    },
    {
        q: 'How often should my child visit the dentist?',
        a: 'Every 6 months for a routine check-up and professional cleaning. Regular visits help us catch issues early and keep your child\'s teeth healthy throughout development.'
    },
    {
        q: 'What is dental sealant? Does my child need it?',
        a: 'Sealants are thin protective coatings applied to the back molars to prevent cavities in grooves where brushing often misses. Highly recommended for children aged 6–12 as a cost-effective preventive measure.'
    },
    {
        q: 'My child has a thumb-sucking or tongue-thrusting habit. Is that a problem?',
        a: 'Prolonged habits beyond age 4–5 can affect tooth alignment and jaw development. We provide gentle habit correction appliances and guidance to stop these habits before they cause long-term issues.'
    },
    {
        q: 'When should I consider braces or orthodontic treatment for my child?',
        a: 'An orthodontic assessment is ideal around age 7–8, when permanent teeth begin emerging. Early detection of crowding, bite problems, or jaw discrepancies allows for timely, less invasive correction.'
    }
];

const whyUs = [
    { icon: Baby, title: 'Child-Friendly, Fearless Environment', desc: 'Calm, welcoming space for stress-free visits.' },
    { icon: ShieldCheck, title: 'Gentle Techniques & Safe Anaesthesia', desc: 'Pain-free care with safe, child-appropriate methods.' },
    { icon: Sparkles, title: 'Preventive-First Approach', desc: 'Focus on prevention with fluoride and sealants.' },
    { icon: Heart, title: 'Habit Correction & Early Orthodontics', desc: 'Early correction of habits and dental growth issues.' },
    { icon: Star, title: 'Parent Guidance Included', desc: 'Clear guidance on care, diet, and oral habits.' }
];

const benefits = [
    'Establishes healthy dental habits from childhood',
    'Pain-free treatments designed for children',
    'Fluoride and sealants prevent future cavities',
    'Early detection of alignment and bite issues',
    'Builds lifelong confidence in dental care'
];

export default function KidsDentistry() {
    const [openFAQ, setOpenFAQ] = useState(null);


    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Kids Dentistry — Gentle Paediatric Dental Care | Olive Dental, Kondotty</title>
                <meta name="description" content="Gentle, fearless dental care for children in Kunnumpuram, Kondotty. Specialist paediatric dentist, fluoride, sealants, and early orthodontic assessment. Book today." />
                <link rel="canonical" href="https://olivedentalofficial.in/treatments/kids-dentistry" />
            </Helmet>



            {/* ═══ HERO ═══ */}
            <section className="relative bg-[#F8FAFC] py-20 lg:py-28 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/8 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Kids Dentistry</span>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-gray-900 mb-6 leading-tight">
                                Gentle Dental Care.<br />
                                <span className="text-primary">Safe, Stress-Free Visits.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Gentle, caring dental treatment for children of all ages — from first tooth to teenage years.
                                We make dental visits something your child actually looks forward to.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20a%20consultation%20for%20kids%20dentistry"
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
                                    src="/images/kidsdentistry-img.webp"
                                    alt="Kids dentistry at Olive Dental"
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
                                        <Baby size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Ages 2 & Above</p>
                                        <p className="text-xs text-gray-500">Specialist paediatric care</p>
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
                                src="/images/kidsdentistry-img.webp"
                                alt="Child receiving dental care at Olive Dental"
                                className="w-full rounded-2xl shadow-lg aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Understanding the Treatment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What is Kids Dentistry?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                Paediatric dentistry covers all dental care for children from infancy through teenage years. It includes routine check-ups, cavity treatment, fluoride application, dental sealants, habit correction, and early orthodontic assessment.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>Who needs it?</strong> All children! Early dental visits help ensure healthy teeth throughout childhood, prevent future problems, and build a positive relationship with dental care that lasts a lifetime.
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
