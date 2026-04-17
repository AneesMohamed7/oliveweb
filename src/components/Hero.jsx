import React from 'react';
import {
    Phone,
    Star,
    ShieldCheck,
    Cpu,
    Heart,
    Users,
    ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import invisalignLogo from '../assets/invisalign-logo.png';



const TRUST_BADGES = [
    { icon: ShieldCheck, label: 'BDS & MDS Qualified' },
    { icon: Cpu, label: '3D Digital Scanning' },
    { icon: Heart, label: 'Pain-Free Protocols' },
];

const STATS = [
    { value: '4000+', label: 'Happy Patients' },
    { value: '4.9★', label: 'Google Rating' },
    { value: '4+', label: 'Years of Care' },
];

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
        <>


            <section className="relative min-h-screen flex flex-col overflow-hidden">

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

                {/* TOP NAV */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex items-center justify-end px-5 sm:px-8 lg:px-14 py-5"
                >

                </motion.div>

                {/* MAIN CONTENT */}
                <div className="relative z-10 flex-1 flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-12 lg:py-0">
                        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                            {/* LEFT */}
                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col"
                            >
                                {/* Overline Trust Pill */}
                                <motion.div
                                    variants={fadeUp}
                                    className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full mb-3 text-xs font-semibold text-sky-300 border border-sky-400/30 bg-sky-400/10 backdrop-blur-sm"
                                >
                                    <span className="text-sky-400">✦</span>
                                    Official Invisalign® Provider · Kunnumpuram's Multi-Specialty Clinic
                                </motion.div>

                                <motion.h1
                                    variants={fadeUp}
                                    className="text-4xl sm:text-5xl lg:text-[3.1rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4"
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
                                    className="flex items-center gap-2 mb-6 sm:hidden"
                                >
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-white/90 font-semibold text-sm">
                                        4.9 Google Rating
                                    </span>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    className="flex flex-col sm:flex-row gap-3.5 mb-5"
                                >
                                    <a
                                        href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20appointment"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm shadow-lg shadow-green-900/40 hover:shadow-green-500/40 transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        Book An Appointment
                                        <ArrowRight size={15} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                    </a>

                                    <a
                                        href="tel:+918891494731"
                                        className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        <Phone size={18} strokeWidth={2} />
                                        Call Now
                                    </a>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    className="hidden sm:flex flex-wrap gap-2"

                                >
                                    {TRUST_BADGES.map(({ icon: Icon, label }) => (
                                        <div
                                            key={label}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/85 text-xs font-medium"
                                        >
                                            <Icon size={13} className="text-sky-300" strokeWidth={2} />
                                            {label}
                                        </div>
                                    ))}
                                </motion.div>


                            </motion.div>

                            {/* RIGHT — image card */}
                            <motion.div
                                variants={scaleIn}
                                initial="hidden"
                                animate="show"
                                className="relative hidden lg:flex flex-col gap-4 items-center justify-center"
                            >
                                {/* Glow */}
                                <div
                                    className="absolute inset-6 rounded-3xl blur-2xl opacity-25 pointer-events-none"
                                    style={{ background: 'radial-gradient(ellipse, #38bdf8 0%, #1d4ed8 60%, transparent 100%)' }}
                                />

                                {/* Image */}
                                <div
                                    className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                                    style={{ aspectRatio: '4/3' }}
                                >
                                    <img
                                        src="/images/oliveclinic-img1.webp"
                                        alt="Dental specialist with patient at Olive Dental Clinic"
                                        className="w-full h-full object-cover object-top"
                                        loading="eager"
                                        decoding="async"
                                        width={800}
                                        height={600}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1840]/70 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                                            <div className="flex items-center justify-between gap-2">
                                                <div>
                                                    <p className="text-white font-semibold text-sm">Olive Dental &amp; Face Clinic</p>
                                                    <p className="text-sky-300 text-xs mt-0.5 font-medium">Official Invisalign® Provider · Kunnumpuram</p>
                                                </div>
                                                <div className="flex-shrink-0 bg-sky-400/20 border border-sky-400/30 rounded-lg px-2 py-1">
                                                    <img src={invisalignLogo} alt="Invisalign" className="h-5 w-auto brightness-0 invert opacity-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats row below image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                    className="w-full grid grid-cols-3 gap-3"
                                >
                                    {STATS.map(({ value, label }) => (
                                        <div
                                            key={label}
                                            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl py-4 px-3"
                                        >
                                            <span className="text-white font-extrabold text-xl tracking-tight">{value}</span>
                                            <span className="text-white/55 text-xs mt-1 text-center leading-tight">{label}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}