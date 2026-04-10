import React from 'react';
import { Users, ShieldCheck, Stethoscope, ClipboardCheck, Wallet, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            icon: Users,
            title: 'Multi-Specialty Care Under One Roof',
            text: 'Our dental and facial specialists collaborate under one roof to deliver comprehensive, coordinated treatment plans — from smile makeovers to advanced facial aesthetics.'
        },
        {
            icon: Stethoscope,
            title: 'Experienced Doctors You Can Trust',
            text: 'Backed by years of clinical expertise, our qualified dentists and aesthetic physicians at Olive Dental & Face Clinic, Kunnumpuram bring precision and care to every procedure.'
        },
        {
            icon: ClipboardCheck,
            title: 'Structured Diagnosis & Treatment Planning',
            text: 'Advanced digital diagnostics and detailed clinical evaluation ensure accurate, predictable, and long-lasting dental and facial treatment results.'
        },
        {
            icon: ShieldCheck,
            title: 'Strict Sterilization & Safety Standards',
            text: 'Every procedure follows international sterilization protocols and infection control standards to ensure maximum patient safety at all times.'
        },
        {
            icon: BadgeCheck,
            title: 'Official Invisalign® Provider',
            text: 'Olive Dental & Face Clinic is a certified Invisalign® provider — offering genuine Invisalign® treatment with 3D digital planning, not generic aligners. Trusted by patients across Kondotty and Malappuram.'
        },
        {
            icon: Wallet,
            title: 'Affordable & Transparent Pricing',
            text: 'Flexible payment options and clear, upfront pricing make high-quality dental and facial care accessible to every patient in Kunnumpuram and nearby areas.'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
                        Why Choose Olive
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Trusted Dental & Facial Care in Kunnumpuram
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
                        Serving patients in Kunnumpuram and Kondotty with medically guided treatments,
                        structured diagnosis, and a strong commitment to safety and transparency.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="mb-4 p-3 w-fit bg-blue-50 text-primary rounded-lg">
                                <feature.icon size={22} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}