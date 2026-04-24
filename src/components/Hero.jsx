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

            {/* BG IMAGE */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/images/herobg-img.webp"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={1920}
                    height={1080}
                />
            </div>

            {/* DARK OVERLAY */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: 'linear-gradient(135deg, rgba(10,24,60,0.92) 0%, rgba(10,40,80,0.82) 50%, rgba(5,20,50,0.75) 100%)',
                }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-20 flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 pt-24 pb-0 sm:pb-12 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                        {/* LEFT — TEXT CONTENT */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col relative z-20"
                        >
                            {/* Overline Trust Pill */}
                            <motion.div
                                variants={fadeUp}
                                className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full mb-3 text-[11px] sm:text-[13px] font-semibold text-sky-300 border border-sky-400/30 bg-sky-400/10 backdrop-blur-sm"
                            >
                                <span className="text-sky-400">✦</span>
                                <span className="hidden sm:inline">Official Invisalign® Provider · Kunnumpuram's Multi-Speciality Clinic</span>
                                <span className="sm:hidden">Invisalign® Provider · Kunnumpuram</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="text-[2rem] sm:text-[2.6rem] md:text-5xl lg:text-[3.1rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4"
                            >
                                Dental Implants,{' '}
                                <span
                                    style={{
                                        background: 'linear-gradient(95deg, #7dd3fc 0%, #38bdf8 50%, #bae6fd 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Invisalign®
                                </span>
                                {' '}& Facial Aesthetics
                                <br />in Kunnumpuram
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="text-base sm:text-lg text-white/70 leading-relaxed mb-5 max-w-[500px]"
                            >
                                Expert care, clear treatment plans, and results you can trust — all in one clinic.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-2 mb-6"
                            >
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-white/90 font-semibold text-sm sm:text-base">
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
                                    className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-green-900/40 hover:shadow-green-500/40 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    Book An Appointment
                                    <ArrowRight size={15} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                </a>

                                <a
                                    href="tel:+918891494731"
                                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
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
                    src="/images/smiling-women1.png"
                    alt="Smiling woman showing healthy dental results"
                    className="ml-[-140px] h-[355px] w-[480px] max-w-none sm:ml-0 sm:h-[400px] sm:w-[70%] sm:max-w-full sm:mx-auto md:h-[450px] md:w-[60%] object-contain object-bottom select-none pointer-events-none"
                    loading="eager"
                    decoding="async"
                />
            </motion.div>

            {/* HERO IMAGE — Desktop (absolute, grounded to bottom-right) */}
            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="show"
                className="hidden lg:flex absolute bottom-0 right-0 w-1/2 h-full items-end justify-end z-10 pointer-events-none"
            >
                <img
                    src="/images/smiling-women1.png"
                    alt="Smiling woman showing healthy dental results"
                    className="h-[500px] w-full object-contain object-bottom scale-125 origin-bottom select-none"
                    loading="eager"
                    decoding="async"
                />
            </motion.div>
        </section>
    );
}