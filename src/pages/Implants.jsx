import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, CheckCircle2, Clock, ShieldCheck, Anchor, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Implants() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            q: "Are dental implants permanent?",
            a: "Yes, they are designed to be a permanent solution. With proper oral hygiene and regular checkups, they can last a lifetime."
        },
        {
            q: "Is the procedure painful?",
            a: "Most patients report less discomfort than a tooth extraction. We use local anesthesia, so you won't feel pain during the procedure. Post-op discomfort is usually mild."
        },
        {
            q: "Am I a candidate for implants?",
            a: "If you have generally good health and healthy gums, you are likely a good candidate. We will check your bone density during the consultation to confirm."
        }
    ];

    return (
        <div className="bg-white font-sans text-gray-800">
            <Helmet>
                <title>Dental Implants | Permanent Tooth Replacement</title>
                <meta name="description" content="Restore your smile with permanent dental implants at Olive Dental. The gold standard for replacing missing teeth." />
            </Helmet>

            {/* 1. Treatment Hero */}
            <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-accent shadow-sm"
                    >
                        <Anchor size={16} /> Restore Your Confidence
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Permanent Solution for <br /><span className="text-primary">Missing Teeth</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Eat confidently, smile naturally, and protect your jawbone health. Implants are the gold standard for replacing missing teeth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Dental%20Implants" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/30">
                            <MessageCircle size={20} /> WhatsApp Us
                        </a>
                        <a href="tel:+918891494731" className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-sm">
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
                        "You have one or more missing teeth.",
                        "You are tired of loose or uncomfortable dentures.",
                        "You have trouble chewing certain foods.",
                        "You want a solution that looks and feels natural.",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                            <div className="mt-1 bg-white p-1 rounded-full text-primary shadow-sm"><CheckCircle2 size={20} /></div>
                            <p className="font-medium text-lg">{item}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 text-lg font-medium text-primary">
                    If these sound familiar, Dental Implants can restore your quality of life.
                </p>
            </section>

            {/* 3. Problem -> Solution */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">The Hidden Cost of Missing Teeth</h3>
                        <img
                            src="/images/implants-problem.jpg"
                            alt="Understanding tooth loss"
                            className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-8 mx-auto"
                        />
                        <p className="text-lg text-gray-600 mb-10">
                            When you lose a tooth, your jawbone starts to shrink because it's no longer stimulated. This affects your facial structure, making you look older. Dentures can slip and cause embarrassment, and bridges require cutting down healthy neighboring teeth.
                        </p>

                        <h4 className="text-xl font-bold text-primary mb-4">The Natural Solution</h4>
                        <img
                            src="/images/implants-solution.jpg"
                            alt="Dental implant solution"
                            className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-8 mx-auto"
                        />
                        <p className="text-lg text-gray-600">
                            A dental implant replaces the entire tooth, including the root. It integrates with your bone, preventing bone loss and providing a stable foundation. It looks, feels, and functions just like a natural tooth. You can eat apples, nuts, and everything else you love.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-20 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">The Implant Process Simplified</h2>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connection Line (Desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -z-10 -translate-y-12"></div>

                    {[
                        {
                            title: "1. Planning & Placement",
                            desc: "We gently place the titanium post into the jawbone. It's done under anesthesia and is painless.",
                            img: "/images/implants-step-1.jpg",
                            step: 1
                        },
                        {
                            title: "2. Healing",
                            desc: "Over a few months, the implant fuses with your bone to become a strong root.",
                            img: "/images/implants-step-2.jpg",
                            step: 2
                        },
                        {
                            title: "3. Restoration",
                            desc: "We attach a custom-made crown that matches your other teeth perfectly.",
                            img: "/images/implants-step-3.jpg",
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
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><ShieldCheck className="text-accent" /> Success Rate?</h4>
                            <p className="text-blue-100">Dental implants have an impressive success rate of over 95%. They are a proven, long-term solution.</p>
                        </div>
                        <div className="bg-blue-800/50 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="text-accent" /> Recovery Time?</h4>
                            <p className="text-blue-100">Most people return to work the next day. You'll stick to soft foods for a short time while the site heals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Olive Dental */}
            <section className="py-20 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Olive Dental?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Experienced Implantologists",
                        "Guided Surgery for Precision",
                        "Sterile & Safe Environment",
                        "Affordable Payment Plans"
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
                    <h2 className="text-3xl font-bold mb-12">See the Difference</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-3 rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600&h=400" alt="Implant Before and After" className="w-full rounded-xl" />
                            <p className="mt-4 font-medium text-primary">Single Tooth Replacement</p>
                        </div>
                        <div className="bg-white p-3 rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600&h=400" alt="Implant Before and After" className="w-full rounded-xl" />
                            <p className="mt-4 font-medium text-primary">Full Mouth Rehabilitation</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Eat and Smile with Confidence</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Don't let missing teeth hold you back. Schedule your implant consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I'm%20interested%20in%20Dental%20Implants" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-lg">
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
