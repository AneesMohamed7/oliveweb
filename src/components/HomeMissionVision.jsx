import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.65, ease: 'easeOut' }
    })
};

const missionBullets = [
    'Safe, transparent, and pain-free treatments',
    'Specialist doctors for every dental need',
    'Advanced technology with honest care',
];

const visionBullets = [
    'Most trusted dental clinic in Malappuram',
    'Setting the standard for ethical dentistry in Kerala',
    'Comprehensive care, one roof, one family',
];

export default function HomeMissionVision() {
    return (
        <section
            className="py-24 relative overflow-hidden bg-[#F7F9FC]"
            aria-label="Mission and Vision of Olive Dental & Face Clinic"
        >
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-100/60 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-primary/8 text-primary font-bold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full mb-4">
                        Our Purpose
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Why Olive Dental Exists
                    </h2>
                    <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                        Every visit, every treatment, every smile — guided by a clear mission and a bold vision
                        for dental care in Kondotty and Malappuram.
                    </p>
                </motion.div>

                {/* Main two-column layout */}
                <div className="grid lg:grid-cols-2 gap-6 mb-10">

                    {/* ── MISSION ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0.1}
                        className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
                    >
                        {/* Accent bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 rounded-t-3xl" />

                        {/* Icon + label */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                                <Target size={26} className="text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-0.5">Our Mission</p>
                                <h3 className="text-xl font-bold text-gray-900">What We Do Every Day</h3>
                            </div>
                        </div>

                        {/* Mission statement — AEO-optimised direct answer */}
                        <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
                            To provide <strong>safe, precise, and transparent</strong> dental and facial treatments
                            to every patient in Kondotty and Malappuram — combining specialist expertise with
                            compassionate, affordable care that families can trust.
                        </p>

                        {/* Bullet checklist */}
                        <ul className="space-y-2.5 mb-6">
                            {missionBullets.map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        {/* Decorative quote */}
                        <div className="border-l-4 border-primary/30 pl-4 mt-4">
                            <p className="text-sm text-gray-400 italic">
                                "Every treatment begins with honesty — never assumptions."
                            </p>
                        </div>
                    </motion.div>

                    {/* ── VISION ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0.2}
                        className="group relative bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden text-white"
                    >
                        {/* Animated glow orb */}
                        <div className="absolute top-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 group-hover:bg-primary/15 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

                        {/* Icon + label */}
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                <Eye size={26} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-0.5">Our Vision</p>
                                <h3 className="text-xl font-bold text-white">Where We're Going</h3>
                            </div>
                        </div>

                        {/* Vision statement — AEO-optimised */}
                        <p className="text-gray-300 leading-relaxed mb-6 text-[15px] relative z-10">
                            To become the <strong className="text-white">most trusted multi-specialty dental and
                                facial clinic</strong> in Malappuram district — known for clinical excellence,
                            ethical practice, and patient outcomes that last a lifetime.
                        </p>

                        {/* Bullet checklist */}
                        <ul className="space-y-2.5 mb-8 relative z-10">
                            {visionBullets.map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-4 h-4 rounded-full border border-primary/50 bg-primary/20 flex items-center justify-center shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    </div>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        {/* Achievement chips */}
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {['⭐ 5.0 Google Rating', '10,000+ Patients', '6 Specialists'].map((chip) => (
                                <span
                                    key={chip}
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom strip — promise statement + CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0.3}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-gray-100 rounded-2xl px-8 py-6 shadow-sm"
                >
                    <div className="flex items-center gap-4">
                        {/* Olive leaf icon-dot decoration */}
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-lg">🫒</span>
                        </div>
                        <p className="text-gray-700 font-medium text-sm leading-snug max-w-md">
                            At Olive Dental, our mission is personal. Every patient who walks in deserves
                            <span className="text-primary font-semibold"> honest care</span>,
                            <span className="text-primary font-semibold"> skilled hands</span>, and
                            <span className="text-primary font-semibold"> a smile they're proud of</span>.
                        </p>
                    </div>
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm shrink-0 shadow-md shadow-primary/20"
                    >
                        Learn More About Us
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
