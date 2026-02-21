import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, CheckCircle2, Clock, ShieldCheck, UserCheck, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Aligners() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            q: "Will people notice I'm wearing aligners?",
            a: "Most likely not! They are made of clear, medical-grade plastic and are virtually invisible when worn. Unless someone is very close to your face, they won't tell."
        },
        {
            q: "Start Seeing Results in Weeks?",
            a: "Many patients notice visible movement within the first few weeks. Full treatment time varies but is often faster than traditional braces."
        },
        {
            q: "Can I eat with them on?",
            a: "No, and that's the best part! You remove them to eat, so you can enjoy all your favorite foods without restriction."
        }
    ];

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Clear Aligners | Invisible Teeth Straightening</title>
                <meta name="description" content="Straighten your teeth without metal braces. Clear, removable, and comfortable aligners at Olive Dental." />
            </Helmet>

            {/* 1. Treatment Hero */}
            <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Straighten Your Teeth <br /><span className="text-primary">Without Metal Braces</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The invisible way to the smile you’ve always wanted. Perfect for adults and teens who want a confident smile without the "metal mouth" look.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Clear%20Aligners" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/30">
                            <MessageCircle size={20} /> WhatsApp Us
                        </a>
                        <a href="tel:+918891494731" className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                            <Phone size={20} /> Call for Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Is This Right for You? */}
            <section className="py-20 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Is This Right for You?</h2>
                <div className="space-y-4">
                    {[
                        "You have gaps between your teeth.",
                        "Your teeth are crowded or overlapping.",
                        "You want to fix your smile but refuse to wear metal braces.",
                        "You had braces before, but your teeth have shifted back.",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                            <div className="mt-1 bg-white p-1 rounded-full text-primary shadow-sm"><CheckCircle2 size={20} /></div>
                            <p className="font-medium text-lg">{item}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 text-lg font-medium text-primary">
                    If you said "Yes" to any of these, Clear Aligners are likely the perfect solution for you.
                </p>
            </section>

            {/* 3. Problem -> Solution */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">Why Many Adults Delay Fixing Their Teeth</h3>
                        <img
                            src="/images/aligner-lifestyle.jpg"
                            alt="Adults smiling showing teeth"
                            className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-8 mx-auto"
                        />
                        <p className="text-lg text-gray-600 mb-10">
                            Many people hide their smile for years because they think the only way to fix it is with painful, ugly metal braces. They worry about looking childish at work or dealing with food restrictions.
                        </p>

                        <h4 className="text-xl font-bold text-primary mb-4">The Invisible Solution</h4>
                        <img
                            src="/images/aligners-product.jpg"
                            alt="Clear aligners product shot"
                            className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-8 mx-auto"
                        />
                        <p className="text-lg text-gray-600">
                            Clear Aligners solve this completely. They are transparent, so most people won't even notice you're wearing them. You can take them out for meetings or meals. It's the modern, dignity-first way to get the smile you deserve.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-20 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">How Your Smile Transformation Works</h2>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connection Line (Desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -z-10 -translate-y-12"></div>

                    {[
                        {
                            title: "Digital Scan",
                            desc: "3D Intraoral Scanning",
                            img: "/images/scan-intraoral.jpg",
                            step: 1
                        },
                        {
                            title: "3D Teeth Model",
                            desc: "Precise Digital Planning",
                            img: "/images/scan-3d-model.jpg",
                            step: 2
                        },
                        {
                            title: "Final Aligner Plan",
                            desc: "Preview Your Smile",
                            img: "/images/scan-aligner-plan.jpg",
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
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Pain, Safety & Comfort</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-800/50 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><ShieldCheck className="text-accent" /> Is it safe?</h4>
                            <p className="text-blue-100">Absolutely. The technology is FDA-approved and used by millions worldwide. It applies gentle, controlled force to move teeth safely.</p>
                        </div>
                        <div className="bg-blue-800/50 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><UserCheck className="text-accent" /> Does it hurt?</h4>
                            <p className="text-blue-100">Aligners are much more comfortable than braces. You might feel slight pressure for the first day of a new set, but there are no wires to poke or scratch your mouth.</p>
                        </div>
                        <div className="bg-blue-800/50 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="text-accent" /> How long does it take?</h4>
                            <p className="text-blue-100">Simple cases can be done in 6 months. Complex cases may take 12-18 months. It is often faster than traditional metal braces.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Olive Dental */}
            <section className="py-20 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Olive Dental?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Certified Aligner Specialists",
                        "Latest 3D Scanning Technology",
                        "Transparent Pricing - No Hidden Costs",
                        "Personalized Care & Monitoring"
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
                            <img src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600&h=400" alt="Smile Before and After" className="w-full rounded-xl" />
                            <p className="mt-4 font-medium text-primary">Crowding Correction - 8 Months</p>
                        </div>
                        <div className="bg-white p-3 rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1595867372365-d6c2957e074d?auto=format&fit=crop&q=80&w=600&h=400" alt="Smile Before and After" className="w-full rounded-xl" />
                            <p className="mt-4 font-medium text-primary">Gap Closure - 6 Months</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your New Smile?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Book a consultation today. We'll scan your teeth and show you exactly what your new smile could look like.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Clear%20Aligners" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg">
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
