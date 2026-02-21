import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, CheckCircle2, Clock, ShieldCheck, Sparkles, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Veneers() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            q: "Do veneers look natural?",
            a: "Yes! High-quality porcelain veneers are translucent, just like natural enamel. We color-match them perfectly to give you a bright yet natural-looking smile."
        },
        {
            q: "Does the process hurt?",
            a: "The procedure is minimally invasive. We use local anesthesia to ensure you are completely comfortable during the preparation."
        },
        {
            q: "How long do they last?",
            a: "With proper care, porcelain veneers can last 10-15 years or even longer. They are highly durable and resistant to staining."
        }
    ];

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Porcelain Veneers | Hollywood Smile Makeover</title>
                <meta name="description" content="Transform your smile instantly with custom porcelain veneers at Olive Dental. Fix chips, gaps, and discoloration." />
            </Helmet>

            {/* 1. Treatment Hero */}
            <section className="relative bg-gradient-to-br from-purple-50 to-white py-20 lg:py-28 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-accent shadow-sm"
                    >
                        <Sparkles size={16} /> Signature Smile Makeover
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Get Your Dream Smile <br /><span className="text-primary">In Just 2 Visits</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Fix chips, gaps, and severe discoloration permanently with custom-crafted porcelain veneers. It's the secret behind a "Hollywood Smile".
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Veneers" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg">
                            <MessageCircle size={20} /> WhatsApp Us
                        </a>
                        <a href="tel:+918891494731" className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Is This Right for You? */}
            <section className="py-20 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Is This Right for You?</h2>
                <div className="space-y-4">
                    {[
                        "You have chipped or broken teeth.",
                        "Your teeth are permanently stained or discolored.",
                        "You have small gaps between your front teeth.",
                        "Your teeth are slightly misaligned or unevenly shaped.",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                            <div className="mt-1 bg-white p-1 rounded-full text-primary shadow-sm"><CheckCircle2 size={20} /></div>
                            <p className="font-medium text-lg">{item}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 text-lg font-medium text-primary">
                    If you want a flawless, permanent smile upgrade, Veneers are the answer.
                </p>
            </section>

            {/* 3. Problem -> Solution */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">Why Whitening Isn't Enough</h3>
                        <img
                            src="/images/veneers-problem.jpg"
                            alt="Teeth with discoloration or gaps"
                            className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-8 mx-auto"
                        />
                        <p className="text-lg text-gray-600 mb-10">
                            Many patients try whitening procedures for years but are disappointed when deep stains don't go away. Others have chipped edges that make them look older than they are, or gaps that make them self-conscious when smiling.
                        </p>

                        <h4 className="text-xl font-bold text-primary mb-4">The Permanent Fix</h4>
                        <img
                            src="/images/veneers-solution.jpg"
                            alt="Perfect veneers smile"
                            className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-8 mx-auto"
                        />
                        <p className="text-lg text-gray-600">
                            Veneers are thin, custom-made shells of high-quality porcelain that cover the front surface of your teeth. They instantly correct color, shape, size, and alignment errors all at once. It's a "total reset" for your smile.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-20 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">Your Transformation Journey</h2>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connection Line (Desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-purple-100 -z-10 -translate-y-12"></div>

                    {[
                        {
                            title: "1. Design Consultation",
                            desc: "We discuss your goals and digitally design your perfect smile.",
                            img: "/images/veneers-step-1.jpg",
                            step: 1
                        },
                        {
                            title: "2. Preparation",
                            desc: "A tiny amount of enamel is removed, and temporary veneers are placed.",
                            img: "/images/veneers-step-2.jpg",
                            step: 2
                        },
                        {
                            title: "3. The Reveal",
                            desc: "Your final porcelain veneers are bonded permanently. Walk out smiling!",
                            img: "/images/veneers-step-3.jpg",
                            step: 3
                        }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative mb-6 group overflow-hidden rounded-xl">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                                    {step.step}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                            <p className="text-gray-500 font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Pain & Safety */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Pain, Safety & Comfort</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><ShieldCheck className="text-accent" /> How durable are they?</h4>
                            <p className="text-blue-100">Modern E-Max porcelain is incredibly strong. You can eat most foods normally, though we advise not biting into ice or hard candy.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="text-accent" /> Is it fast?</h4>
                            <p className="text-blue-100">Yes! The entire process typically takes only 2-3 visits over a period of 1-2 weeks. It’s the fastest way to a perfect smile.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Olive Dental */}
            <section className="py-20 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Olive Dental?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Expert Cosmetic Dentists",
                        "Digital Smile Design Technology",
                        "High-Quality E-Max Porcelain",
                        "Natural-Looking Results Guaranteed"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg shadow-sm">
                            <Star className="text-accent fill-accent" size={20} />
                            <span className="font-semibold text-gray-800">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Before & After */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Real Results</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-3 rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1609188076864-c35269136b09?auto=format&fit=crop&q=80&w=600&h=400" alt="Veneers Before and After" className="w-full rounded-xl" />
                            <p className="mt-4 font-medium text-primary">Smile Makeover - 2 Weeks</p>
                        </div>
                        <div className="bg-white p-3 rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=600&h=400" alt="Veneers Before and After" className="w-full rounded-xl" />
                            <p className="mt-4 font-medium text-primary">Discoloration Fix - 2 Weeks</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQs */}
            <section className="py-20 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 text-left transition-colors font-semibold"
                            >
                                {faq.q}
                                {openFAQ === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                            </button>
                            <AnimatePresence>
                                {openFAQ === index && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-gray-600 bg-gray-50/50">{faq.a}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. Final CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        A beautiful smile changes everything. Book a consultation to see if veneers are right for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Veneers" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg">
                            <MessageCircle size={20} /> WhatsApp Us
                        </a>
                        <a href="tel:+918891494731" className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
