import React from 'react';
import {
    Phone,
    Star,
    ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';


const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.10, delayChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.88 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] sm:min-h-[90vh] lg:min-h-[105vh] flex flex-col overflow-hidden">

            {/* BACKGROUND */}
            <div
                className="absolute inset-x-2 bottom-2 top-6 sm:inset-x-4 sm:bottom-4 sm:top-8 lg:inset-x-6 lg:bottom-6 lg:top-12 -z-10 rounded-[2rem] sm:rounded-[3.5rem] lg:rounded-[4.5rem] shadow-2xl overflow-hidden bg-primary"
                style={{
                    background: 'linear-gradient(135deg, #2E8BCB 0%, #1e6899 100%)',
                }}
            >
                {/* Stronger overlay for readability */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
                    }}
                />
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-20 flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 pt-16 sm:pt-24 pb-0 sm:pb-12 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                        {/* LEFT — TEXT CONTENT */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col relative z-20 lg:-mt-12"
                        >
                            {/* Overline Trust Pill — Hidden on Desktop */}
                            <motion.div
                                variants={fadeUp}
                                className="lg:hidden inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full mb-3 text-xs sm:text-[13px] font-semibold text-white border border-white/20 bg-white/10 backdrop-blur-sm"
                            >
                                <span className="text-white">✦</span>
                                <span className="hidden sm:inline">Official Invisalign® Provider · Kunnumpuram's Multi-Speciality Clinic</span>
                                <span className="sm:hidden">Invisalign® Provider · Kunnumpuram</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="text-[2.4rem] sm:text-[2.6rem] md:text-5xl lg:text-[3.1rem] font-extrabold text-white leading-[1.08] tracking-tight mb-4"
                            >
                                Dental Implants,{' '}
                                <span className="text-sky-300">
                                    Invisalign®
                                </span>
                                {' '}& Facial Aesthetics
                                <br />in Kunnumpuram
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="text-[1.05rem] sm:text-lg text-white/85 leading-relaxed mb-4 max-w-[500px]"
                            >
                                Expert care, clear treatment plans, and results you can trust — all in one clinic.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-2 mb-3"
                            >
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-white/95 font-semibold text-base sm:text-base">
                                    5.0 Google Rating
                                </span>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 mb-5"
                            >
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-base shadow-lg shadow-sky-900/40 hover:shadow-sky-500/40 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    Book An Appointment
                                    <ArrowRight size={15} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                </a>

                                <a
                                    href="tel:+918891494731"
                                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <Phone size={18} strokeWidth={2} />
                                    Call Now
                                </a>
                            </motion.div>

                        </motion.div>



                    </div>
                </div>
            </div>

            {/* HERO IMAGE — Mobile & Tablet (inline, bottom of section) */}
            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="show"
                className="lg:hidden relative z-10 flex items-end mt-auto w-full overflow-hidden"
            >
                <img
                    src="/images/smilingdoctor-hero.png"
                    alt="Smiling woman showing healthy dental results"
                    className="ml-[-48px] h-[400px] w-[880px] max-w-none sm:ml-0 sm:h-[550px] sm:w-[70%] sm:max-w-full sm:mx-auto md:h-[650px] md:w-[60%] object-contain object-bottom select-none pointer-events-none scale-105 origin-bottom"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                />
            </motion.div>

            {/* HERO IMAGE — Desktop (absolute, aligned to background level) */}
            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="show"
                className="hidden lg:flex absolute top-12 bottom-6 right-6 w-1/2 items-end justify-end z-10 pointer-events-none"
            >
                <img
                    src="/images/smilingdoctor-hero.png"
                    alt="Smiling woman showing healthy dental results"
                    className="h-full w-full object-contain object-bottom scale-125 origin-bottom select-none"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                />
            </motion.div>


        </section>
    );
}
