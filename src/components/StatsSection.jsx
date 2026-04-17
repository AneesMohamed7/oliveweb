import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Smile, Anchor, Users } from 'lucide-react';

function Counter({ from, to, label, suffix = "+", icon: Icon, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(from);
    const rounded = useTransform(count, latest => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(from);

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, { duration: 2.5, ease: "easeOut", delay: delay });
            return controls.stop;
        }
    }, [inView, from, to, count, delay]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });
        return () => unsubscribe();
    }, [rounded]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay }}
            className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center group hover:bg-white/15 transition-all duration-300"
        >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon size={28} />}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                    {displayValue}<span className="text-primary-light text-4xl align-top">{suffix}</span>
                </h3>
                <p className="text-blue-100 font-medium text-lg uppercase tracking-wider text-sm">{label}</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {Icon && <Icon size={60} />}
            </div>
        </motion.div>
    );
}

export default function StatsSection() {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Animated Glow Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"
            />

            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Impact</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Transforming Smiles Everyday</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Trusted by thousands for our commitment to excellence and patient satisfaction.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    <Counter from={0} to={100} label="Aligners Delivered" icon={Smile} delay={0} />
                    <Counter from={0} to={75} label="Dental Implants" icon={Anchor} delay={0.2} />
                    <Counter from={0} to={4000} label="Happy Patients" icon={Users} delay={0.4} />
                </div>
            </div>

        </section>

    );
}
