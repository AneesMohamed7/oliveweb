import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import invisalignLogo from '../assets/invisalign-logo.png';


const highlights = [
    'invisible aligners',
    'Remove while eating & brushing',
    'Custom-fit using 3D scan',
    'Safe & clinically tested',
    'Results in months, not years',
    'EMI options available',
];

export default function InvisalignParallax() {
    return (
        <section className="relative overflow-hidden">
            {/* ── Parallax Background ── */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: "url('/images/parallax-h-img.png')" }}
            />
            {/* Deep premium overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 100%)'
                }}
            />
            <div className="absolute inset-0 backdrop-blur-[0.5x]" />

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── Left: Image Card ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
                            <img
                                src="images/smile-with-aligner.webp"
                                alt="Clear aligner trays at Olive Dental"
                                className="w-full aspect-[4/3] object-cover"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">1100+ Invisalign® Cases Completed</p>
                                        <p className="text-xs text-gray-500">Certified specialist · Digital precision planning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative accent dot */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    {/* ── Right: Content ── */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img src={invisalignLogo} alt="Invisalign" className="h-6 w-auto object-contain opacity-90" />
                                <span className="text-primary font-bold tracking-wider uppercase text-xs">
                                    Certified Treatment
                                </span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                Get a Straighter Smile withh{' '}
                                <span className="text-primary">Invisalign®</span>
                                {' '}—{' '}
                                Aligners
                            </h2>

                            {/* Authority Callout */}
                            <div className="flex items-start gap-3 bg-white/15 border-l-4 border-primary shadow-lg backdrop-blur-md rounded-r-xl px-4 py-3 mb-6">
                                <ShieldCheck size={18} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                                <div>
                                    <p className="text-sm font-bold text-white">Olive Dental is an Official Invisalign® Provider.</p>
                                    <p className="text-xs text-blue-200 mt-0.5">Treatment planned with certified digital precision — not generic aligners.</p>
                                </div>
                            </div>

                            <p className="text-white/85 text-lg leading-relaxed mb-8">
                                <p className="text-white/85 text-lg leading-relaxed mb-8">
                                    Straighten your teeth with Invisalign® clear aligners in Kunnumpuram. Get a 3D smile preview, clear treatment plan, and comfortable, nearly invisible results.
                                </p>
                            </p>
                        </motion.div>

                        {/* Checklist */}
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-3 mb-10"
                        >
                            {highlights.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-accent/25 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={14} className="text-accent" />
                                    </div>
                                    <span className="text-gray-200 font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col gap-3"
                        >
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="tel:+918891494731"
                                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <Phone size={16} />
                                    Book Your Invisalign® Consultation
                                </a>
                                <Link
                                    to="/treatments/aligners"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    See How Invisalign® Works
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
