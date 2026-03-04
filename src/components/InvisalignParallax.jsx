import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const highlights = [
    'Virtually invisible — no metal wires',
    'Removable for eating & brushing',
    'Comfortable, custom-fit trays',
    'FDA-approved technology',
    'Results in as little as 6 months',
];

export default function InvisalignParallax() {
    return (
        <section className="relative overflow-hidden">
            {/* ── Parallax Background ── */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: "url('/images/invisalign-parallax-bg.png')" }}
            />
            {/* Soft clinical overlay */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

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
                                src="/images/aligners-product.jpg"
                                alt="Clear aligner trays at Olive Dental"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">200+ Aligners Delivered</p>
                                        <p className="text-xs text-gray-500">Trusted by patients across Kondotty</p>
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
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">
                                Clear Aligner Treatment
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                Straighten Your Teeth{' '}
                                <span className="text-primary">Without Metal Braces</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Get the smile you've always wanted with clear, removable aligners.
                                Our certified specialists use 3D digital scanning to plan your
                                treatment with precision — results you can preview before you begin.
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
                                    <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={14} className="text-accent" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <Link
                                to="/aligners"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-md"
                            >
                                Learn More
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+918891494731"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-primary/20 text-primary font-semibold rounded-xl hover:bg-primary/5 transition-all duration-300"
                            >
                                <Phone size={16} />
                                Book Consultation
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
