import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Anchor, Smile, Users } from 'lucide-react';


/* =========================
   COUNTER COMPONENT
========================= */
function Counter({ from, to, label, suffix = "+", icon: Icon, delay = 0, accent = "text-primary bg-sky-50 ring-primary/15" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const count = useMotionValue(from);
    const rounded = useTransform(count, latest => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(from);

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, {
                duration: 2.2,
                ease: "easeOut",
                delay,
            });
            return controls.stop;
        }
    }, [inView, to, count, delay]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", latest => {
            setDisplayValue(latest);
        });
        return () => unsubscribe();
    }, [rounded]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group flex flex-col items-center justify-center py-8 px-4 text-center"
        >
            {/* ICON */}
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${accent}`}
            >
                {Icon && <Icon size={22} strokeWidth={2.2} />}
            </div>

            {/* NUMBER */}
            <h3 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                {displayValue}
                <span className="text-primary text-2xl sm:text-3xl align-top font-black">
                    {suffix}
                </span>
            </h3>

            {/* LABEL */}
            <p className="mt-2 text-sm font-semibold text-slate-600 max-w-[140px]">
                {label}
            </p>
        </motion.div>
    );
}

/* =========================
   STATS SECTION
========================= */
export default function StatsSection() {
    return (
        <section className="relative z-30 -mt-12 sm:-mt-16 lg:-mt-20 pb-16">

            <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 relative">


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="
                        backdrop-blur-xl
                        bg-white
                        border border-slate-200
                        rounded-[2rem]
                        shadow-[0_20px_80px_rgba(15,23,42,0.16)]
                        overflow-hidden
                    "
                >
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">

                        <Counter
                            from={0}
                            to={3500}
                            label="Smile Trasformed"
                            icon={Smile}
                            accent="bg-sky-50 text-primary ring-primary/15"
                        />

                        <Counter
                            from={0}
                            to={1100}
                            label="Dental Implants"
                            icon={Anchor}
                            delay={0.15}
                            accent="bg-green-50 text-accent ring-accent/15"
                        />

                        <Counter
                            from={0}
                            to={8000}
                            label="Happy Patients"
                            icon={Users}
                            delay={0.3}
                            accent="bg-slate-100 text-slate-700 ring-slate-200"
                        />

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
