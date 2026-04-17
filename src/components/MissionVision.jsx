import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2, Sparkles, ShieldCheck, Users, Heart, Star } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } })
};

const missionPoints = [
    'Deliver safe, precise, and pain-free dental treatments',
    'Provide medically guided facial aesthetic care — not cosmetic shortcuts',
    'Maintain complete transparency in diagnosis, pricing, and procedures',
    'Make advanced dentistry accessible to families in Malappuram district',
    'Build lasting relationships through honest, patient-first care',
];

const visionPoints = [
    'Become the most trusted dental clinic in Kondotty and Kunnumpuram',
    'Expand multi-specialty dental services across Malappuram',
    'Set the benchmark for clinical hygiene and ethical dentistry in Kerala',
    'Be the first choice for families seeking comprehensive oral and facial care',
];

const values = [
    {
        icon: ShieldCheck,
        title: 'Patient Safety First',
        desc: 'Every procedure at Olive Dental follows strict sterilization and infection control protocols. Your safety is non-negotiable.',
        color: 'from-blue-50 to-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        icon: Target,
        title: 'Clinical Precision',
        desc: 'We use digital diagnostics and modern dental technology to plan and deliver accurate, predictable results for every patient.',
        color: 'from-green-50 to-green-100',
        iconColor: 'text-green-600',
    },
    {
        icon: Heart,
        title: 'Compassionate Care',
        desc: 'We understand dental anxiety. Our team takes time to explain every step, so patients feel confident and comfortable throughout.',
        color: 'from-rose-50 to-rose-100',
        iconColor: 'text-rose-600',
    },
    {
        icon: Users,
        title: 'Community Trust',
        desc: "Olive Dental's growth in Kondotty is built on real patient referrals, repeat visits, and honest word-of-mouth — never just advertising.",
        color: 'from-amber-50 to-amber-100',
        iconColor: 'text-amber-600',
    },
    {
        icon: Star,
        title: 'Ethical Transparency',
        desc: 'We give honest consultations. If a treatment is not needed, we will tell you. No unnecessary procedures, ever.',
        color: 'from-purple-50 to-purple-100',
        iconColor: 'text-purple-600',
    },
    {
        icon: Sparkles,
        title: 'Holistic Excellence',
        desc: 'From routine check-ups to full smile makeovers and facial aesthetics — we bring comprehensive care under one roof.',
        color: 'from-teal-50 to-teal-100',
        iconColor: 'text-teal-600',
    },
];

export default function MissionVision() {
    return (
        /* AEO: itemscope + itemtype lets AI engines and search understand this as an Organization description */
        <section
            className="py-24 bg-white"
            itemScope
            itemType="https://schema.org/Organization"
            aria-label="Mission and Vision of Olive Dental and Face Clinic"
        >
            {/* Hidden SEO schema fields */}
            <meta itemProp="name" content="Olive Dental & Face Clinic" />
            <meta itemProp="description" content="Olive Dental & Face Clinic in Kondotty, Malappuram provides trusted multi-specialty dental care including implants, aligners, root canals, veneers, and facial aesthetics." />
            <meta itemProp="areaServed" content="Kondotty, Kunnumpuram, Malappuram, Kerala" />
            <meta itemProp="url" content="https://olivedental.in" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
                        Who We Are
                    </span>
                    {/* AEO: Clear H2 with location + specialty keywords for featured snippet eligibility */}
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                        Our Mission & Vision
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        At <strong className="text-gray-800">Olive Dental & Face Clinic</strong>, Kondotty — everything
                        we do is guided by a clear purpose: to make advanced, ethical dental care accessible to every
                        family in Malappuram.
                    </p>
                </motion.div>

                {/* Mission + Vision Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">

                    {/* MISSION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="relative bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/10 rounded-3xl overflow-hidden"
                    >
                        {/* Mission image header */}
                        <div className="h-52 overflow-hidden relative">
                            <img
                                src="/images/purpose-family-care.png"
                                alt="Olive Dental doctors consulting with a family in Kondotty"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-blue-50/30 to-transparent" />
                        </div>

                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="p-8 lg:p-10 pt-4">
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                                    <Target size={26} className="text-white" />
                                </div>
                                <div>
                                    {/* AEO: Clear, direct answer format for "What is Olive Dental's mission?" */}
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Our Mission</p>
                                    <h3 className="text-2xl font-bold text-gray-900">What We Do & Why</h3>
                                </div>
                            </div>

                            {/* AEO: Direct summary — structured for featured snippets */}
                            <p
                                className="text-gray-700 text-lg leading-relaxed mb-6 font-medium relative z-10"
                                itemProp="knowsAbout"
                            >
                                The mission of Olive Dental & Face Clinic is to provide safe, transparent, and
                                technology-driven dental and facial treatments to patients in Kondotty and across
                                Malappuram — combining specialist expertise with compassionate, affordable care.
                            </p>

                            <ul className="space-y-3 relative z-10">
                                {missionPoints.map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={i * 0.08}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 size={17} className="text-primary mt-0.5 shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* VISION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0.1}
                        className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden text-white"
                    >
                        {/* Vision image header */}
                        <div className="h-52 overflow-hidden relative">
                            <img
                                src="/images/vision-clinic-future.png"
                                alt="Modern, premium interior of Olive Dental clinic Kondotty"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                        </div>

                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full -translate-y-1/3 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <div className="p-8 lg:p-10 pt-4">
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                    <Eye size={26} className="text-primary" />
                                </div>
                                <div>
                                    {/* AEO: Direct answer for "What is Olive Dental's vision?" */}
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Our Vision</p>
                                    <h3 className="text-2xl font-bold text-white">Where We Are Going</h3>
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium relative z-10">
                                Our vision is to become the most trusted multi-specialty dental and facial clinic in
                                Malappuram district — known for clinical excellence, ethical practice, and genuine
                                patient outcomes that stand the test of time.
                            </p>

                            <ul className="space-y-3 relative z-10">
                                {visionPoints.map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={i * 0.08}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        </div>
                                        <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* AEO: Stat chips */}
                            <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                                {['5★ Rated on Google', '10,000+ Patients', 'Est. Kondotty 2023', '7+ Specialists'].map((stat) => (
                                    <span
                                        key={stat}
                                        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold backdrop-blur-sm"
                                    >
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
                        Our Foundation
                    </span>
                    {/* AEO: Direct answer for "What are Olive Dental's core values?" */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        The Values That Guide Every Treatment
                    </h3>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                        These six principles define how we practise dentistry and facial care at every appointment,
                        for every patient — from Kondotty to Kunnumpuram.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((val, i) => (
                        <motion.article
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i * 0.08}
                            className={`bg-gradient-to-br ${val.color} rounded-2xl p-6 border border-white/80 hover:shadow-lg transition-all duration-300 group`}
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            <meta itemProp="position" content={String(i + 1)} />
                            <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                                <val.icon size={22} className={val.iconColor} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-base mb-2" itemProp="name">{val.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">{val.desc}</p>
                        </motion.article>
                    ))}
                </div>

                {/* AEO: FAQ-style Q&A block — structured for "People Also Ask" and AI answer boxes */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0.2}
                    className="mt-20 bg-gray-50 border border-gray-100 rounded-3xl p-8 lg:p-12"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
                        Frequently Asked Questions About Olive Dental
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                q: 'What is the mission of Olive Dental & Face Clinic?',
                                a: 'Olive Dental & Face Clinic\'s mission is to deliver safe, transparent, and affordable dental and facial treatments in Kondotty and Kunnumpuram, Malappuram — with specialist doctors, modern technology, and a patient-first approach.',
                            },
                            {
                                q: 'What is the vision of Olive Dental Kondotty?',
                                a: 'Our vision is to become the most trusted multi-specialty dental clinic in Malappuram district, setting the standard for clinical hygiene, ethical dentistry, and long-term patient care in Kerala.',
                            },
                            {
                                q: 'Which dental specialists are available at Olive Dental Kondotty?',
                                a: 'Olive Dental has a full panel of specialists including a Chief Dental Surgeon (BDS), Periodontist & Implantologist, Orthodontist, Oral & Maxillofacial Surgeon, Endodontist, and Pedodontist — all under one roof.',
                            },
                            {
                                q: 'Where is Olive Dental & Face Clinic located?',
                                a: 'Olive Dental & Face Clinic has two clinics: the main clinic in Kunnumpuram opposite Daru Shifa Hospital, Kondotty, Malappuram, and a clinic at Kottukkara, Kondotty.',
                            },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                <h4
                                    className="font-semibold text-gray-900 text-sm mb-2 leading-snug"
                                    itemProp="name"
                                >
                                    {faq.q}
                                </h4>
                                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                    <p className="text-gray-500 text-sm leading-relaxed" itemProp="text">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
