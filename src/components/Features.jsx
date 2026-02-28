import React from 'react';
import { Users, ShieldCheck, Scan, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            icon: Users,
            title: 'Multi-Specialty Care Under One Roof',
            text: 'Comprehensive dental and facial treatments delivered through coordinated and structured clinical planning.'
        },
        {
            icon: ClipboardCheck,
            title: 'Structured Diagnosis & Treatment Planning',
            text: 'Digital diagnostics and detailed evaluation ensure accurate, predictable, and long-term results.'
        },
        {
            icon: ShieldCheck,
            title: 'Strict Sterilization Standards',
            text: 'Every procedure follows standardized sterilization protocols to ensure maximum patient safety.'
        },
        {
            icon: Scan,
            title: 'Transparent Consultation Process',
            text: 'Clear explanations, treatment options, and informed decisions before every procedure.'
        }
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
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