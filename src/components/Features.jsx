import { ArrowRight, Users, ShieldCheck, Stethoscope, ClipboardCheck, Wallet, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Features() {
    const features = [
        {
            icon: Users,
            title: "Dental & Skin Treatments in One Clinic",
            text: "Implants, aligners, PRP and facial care in one place."
        },
        {
            icon: ShieldCheck,
            title: "Safe & Sterile Procedures",
            text: "Strict hygiene protocols for every treatment."
        },
        {
            icon: BadgeCheck,
            title: "Certified Invisalign Provider",
            text: "Planned aligner treatments with digital precision."
        },
        {
            icon: Stethoscope,
            title: "Modern Diagnostic Technology",
            text: "Digital X-rays and tools for accurate results."
        }
    ];
    const containerVariants = {
        hidden: { opacity: 1 }, // Ensure container is visible
        visible: {
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content and Features Grid */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                                Why Choose Olive Clinic
                            </span>
                            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 mb-6 leading-[1.2]">
                                Trusted Dental & Facial Care <br className="hidden md:block" />  <span className="text-primary">in Kunnumpuram</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Looking for a trusted dental and facial clinic in Kunnumpuram? We provide implants, aligners, PRP and skin treatments using modern technology and clear treatment planning.
                                </p>
                            </p>
                            {/* Subtle Separator Line */}
                            <div className="h-px w-full bg-gray-200 mt-10"></div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                        >
                            {features.map((feature, idx) => {
                                const isGreen = idx % 2 === 1; // Alternating colors
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="flex items-start gap-4 p-2 rounded-xl transition-colors duration-300">
                                            <div className={`mt-1 flex-shrink-0 p-2 rounded-lg transition-colors duration-300 ${isGreen
                                                ? 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                                                }`}>
                                                <feature.icon size={18} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 leading-relaxed">
                                                    {feature.text}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-10"
                        >
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold text-base rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/10 transition-all duration-200 group"
                            >
                                Learn More About Us
                                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side: Image and Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Decorative Background Shape */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070"
                                alt="Modern Dental Clinic"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Modern Technology</p>
                                        <p className="text-xs text-gray-500">Advanced diagnostic tools for precise care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}