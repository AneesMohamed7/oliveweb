import React from 'react';
import { dentalServices, facialServices } from '../data/services';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function ServiceCard({ service, variant = 'dental' }) {
    const isDental = variant === 'dental';
    return (
        <motion.div
            variants={itemVariants}
            className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 flex flex-col ${isDental
                    ? 'bg-white border-gray-100 hover:shadow-xl'
                    : 'bg-white border-amber-100/60 hover:shadow-xl hover:shadow-amber-100/30'
                }`}
        >
            <div className="h-52 overflow-hidden relative flex-shrink-0">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDental ? 'from-blue-900/60' : 'from-amber-900/50'
                    } to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                <span className={`absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full ${isDental
                        ? 'bg-primary/90 text-white'
                        : 'bg-amber-600/90 text-white'
                    }`}>
                    {isDental ? 'Dental' : 'Aesthetic'}
                </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 -mt-11 relative z-10 border-2 border-white shadow-md transition-colors duration-300 ${isDental
                        ? 'bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white'
                        : 'bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white'
                    }`}>
                    <service.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                </p>
                {service.link && (
                    <Link
                        to={service.link}
                        className={`inline-flex items-center text-sm font-semibold mt-auto group/link transition-colors ${isDental ? 'text-primary hover:text-primary-dark' : 'text-amber-700 hover:text-amber-900'
                            }`}
                    >
                        Learn More <ArrowRight size={14} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
}

export default function Services() {
    const coreDental = dentalServices.filter(s => s.type === 'core');
    const coreFacial = facialServices.filter(s => s.type === 'core').slice(0, 4);

    return (
        <>
            {/* ─── SECTION 1: DENTAL ─── */}
            <section className="py-20 bg-background-soft" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Dental Excellence</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Dental Care</h2>
                        <p className="text-gray-500 max-w-2xl text-lg">
                            Precision-driven dental treatments for long-term oral health and confident smiles — trusted by families across Kunnumpuram.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"
                    >
                        {coreDental.map((service) => (
                            <ServiceCard key={service.id} service={service} variant="dental" />
                        ))}
                    </motion.div>

                    <div className="mt-10 text-center">
                        <Link
                            to="/dental-treatments"
                            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            View All Dental Treatments <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: FACIAL AESTHETICS ─── */}
            <section className="py-20 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <span className="text-amber-700 font-bold tracking-wider uppercase text-xs mb-3 block">Advanced Aesthetics</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Facial Aesthetic Treatments</h2>
                        <p className="text-gray-500 max-w-2xl text-lg">
                            Medically supervised skin rejuvenation and anti-ageing solutions designed for natural, refined results — the premier aesthetic clinic in Kunnumpuram.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"
                    >
                        {coreFacial.map((service) => (
                            <ServiceCard key={service.id} service={service} variant="facial" />
                        ))}
                    </motion.div>

                    <div className="mt-10 text-center">
                        <Link
                            to="/facial-aesthetics"
                            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-amber-700 text-amber-700 font-semibold rounded-xl hover:bg-amber-700 hover:text-white transition-all duration-300"
                        >
                            View All Aesthetic Treatments <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── CLOSING CTA ─── */}
            <section className="py-14 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        Book a Consultation at Olive Dental & Face Clinic
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Experience precision care and premium results. Our specialists are ready to guide your journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/dental-treatments"
                            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg"
                        >
                            Book Dental Consultation
                        </Link>
                        <Link
                            to="/facial-aesthetics"
                            className="px-8 py-3.5 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all shadow-lg"
                        >
                            Book Aesthetic Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
