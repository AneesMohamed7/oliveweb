import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, Navigation, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const clinicImg = "/images/clinic-front-inside.webp";

export default function Contact() {
    const [formData, setFormData] = useState({ 
        name: '', 
        phone: '', 
        email: '', 
        treatment: '', 
        date: '',
        time: '',
        message: '' 
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setError(null);
        
        try {
            const response = await fetch('/api/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({ name: '', phone: '', email: '', treatment: '', date: '', time: '', message: '' });
            } else {
                setError(data.message || 'Something went wrong. Please try again or call us.');
            }
        } catch (err) {
            console.error('Submission Error:', err);
            setError('Something went wrong. Please try again or call us.');
        } finally {
            setIsSending(false);
        }
    };

    const timeSlots = [
        'Morning (9:00 AM - 12:00 PM)',
        'Afternoon (12:00 PM - 4:00 PM)',
        'Evening (4:00 PM - 9:00 PM)',
    ];

    const treatments = [
        'Clear Aligners',
        'Dental Implants',
        'Veneers / Smile Makeover',
        'Root Canal Treatment',
        'Teeth Whitening',
        'Facial Aesthetics (PRP/Botox)',
        'Kids Dentistry',
        'General Check-up',
        'Tooth Extraction',
        'Wisdom Tooth Removal',
        'Dental Crown & Bridge',
        'Dentures / Removable Prosthetics',
        'Scaling & Polishing',
        'Gum Treatment (Periodontology)',
        'Orthodontic Braces',
        'Composite Bonding',
        'Fluoride Treatment',
        'Dental X-Ray',
        'Mouth Guard / Night Guard',
        'Smile Consultation',
        'Other',
    ];



    const hours = [
        { day: 'Monday – Saturday', time: '9:00 AM – 9:00 PM' },
        { day: 'Sunday', time: 'By Appointment Only' },
    ];

    return (
        <>
            <Helmet>
                <title>Contact Olive Dental & Face Clinic | Kunnumpuram</title>
                <meta
                    name="description"
                    content="Visit Olive Dental & Face Clinic in Kunnumpuram. Call +91 88914 94731 or WhatsApp to book your appointment."
                />

                <link rel="canonical" href="https://olivedentalofficial.in/contact" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact Olive Dental & Face Clinic" />
                <meta property="og:description" content="Call or WhatsApp Olive Dental & Face Clinic in Kunnumpuram to schedule your visit." />
                <meta property="og:url" content="https://olivedentalofficial.in/contact" />
                <meta property="og:image" content="https://olivedentalofficial.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* ═══════════════════════════════════════════════
                SECTION 1: HERO — Full-width split with form above fold
               ═══════════════════════════════════════════════ */}
            <section className="relative min-h-[70vh] lg:min-h-[65vh] flex items-center overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                    <img
                        src={clinicImg}
                        alt="Olive Dental & Face Clinic interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/30" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left — Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold tracking-wider uppercase mb-5">
                                <ShieldCheck size={14} />
                                ISO 9001:2015 Certified Clinic
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-4">
                                Book Your Appointment
                            </h1>

                            <p className="text-base text-gray-300 mb-5 max-w-md leading-relaxed">
                                Multi-specialty dental and facial aesthetic care. Walk in or schedule your visit today.
                            </p>

                            {/* Location lines */}
                            <div className="flex flex-col gap-1.5 mb-8 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-primary-light shrink-0" />
                                    <span>Kunnumpuram <span className="text-gray-500">(Opp. Darushifa Hospital)</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-primary-light shrink-0" />
                                    <span>Kottukara, Kondotty</span>
                                </div>
                            </div>

                            {/* Quick contact pills */}
                            <div className="flex flex-col sm:flex-row gap-3 mb-10">
                                <a
                                    href="tel:+918891494731"
                                    className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4 hover:bg-white/20 transition-all"
                                >
                                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                                        <Phone size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Call Us</p>
                                        <p className="text-white font-bold">+91 88914 94731</p>
                                    </div>
                                </a>
                                <a
                                    href="https://wa.me/918891494731?text=Hi%20Olive%20Dental"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4 hover:bg-white/20 transition-all"
                                >
                                    <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center shrink-0">
                                        <MessageCircle size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">WhatsApp</p>
                                        <p className="text-white font-bold">Message Us</p>
                                    </div>
                                </a>
                            </div>

                            {/* Google rating */}
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FBBC04" color="#FBBC04" />)}
                                </div>
                                <span className="text-gray-300 font-semibold">5.0</span>
                                <span>Google Rating</span>
                            </div>
                        </motion.div>

                        {/* Right — Booking Form Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-7 sm:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-1">Request a Callback</h2>
                                <p className="text-sm text-gray-400 mb-6">We'll respond as soon as possible</p>

                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-center py-12"
                                        >
                                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle size={34} className="text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                                            <p className="text-sm text-gray-500 mb-6">
                                                Your appointment request has been received. Our team will contact you shortly.
                                            </p>
                                            <button
                                                onClick={() => setSubmitted(false)}
                                                className="text-primary font-bold hover:underline"
                                            >
                                                Book another appointment
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            {error && (
                                                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 mb-2">
                                                    {error}
                                                </div>
                                            )}
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                                        placeholder="+91 98765 43210"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Treatment Interest</label>
                                                    <select
                                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-gray-600 appearance-none"
                                                        value={formData.treatment}
                                                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                                        style={{
                                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                                            backgroundPosition: 'right 0.75rem center',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: '1.25em 1.25em'
                                                        }}
                                                    >
                                                        <option value="">Select treatment (optional)</option>
                                                        {treatments.map((t) => (
                                                            <option key={t} value={t}>{t}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-gray-600"
                                                        value={formData.date}
                                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Time</label>
                                                    <select
                                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-gray-600 appearance-none"
                                                        value={formData.time}
                                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                        style={{
                                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                                            backgroundPosition: 'right 0.75rem center',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: '1.25em 1.25em'
                                                        }}
                                                    >
                                                        <option value="">Select time slot</option>
                                                        {timeSlots.map((t) => (
                                                            <option key={t} value={t}>{t}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message (Optional)</label>
                                                <textarea
                                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                                    placeholder="How can we help you?"
                                                    rows="3"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSending}
                                                className={`w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 mt-2 text-sm ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                {isSending ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                        Sending...
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Send size={16} />
                                                        Book Appointment
                                                    </>
                                                )}
                                            </button>
                                            <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                                                By submitting, you agree to be contacted by Olive Dental regarding your request.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 2: Info Cards — Location, Hours, Emergency
               ═══════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-white relative">
                {/* Subtle top curve */}
                <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section title */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Our Clinic</h2>
                        <p className="text-gray-500 text-sm">Two convenient locations in Kondotty, Malappuram</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Card 1: Main Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="group bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/10 rounded-2xl p-7 hover:shadow-lg hover:shadow-primary/5 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <MapPin size={22} className="text-primary" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">Main Clinic</span>
                                        <h3 className="font-bold text-gray-900 mt-1">Kunnumpuram</h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                    Opp. Daru Shifa Hospital,<br />
                                    Kondotty, Malappuram 676305
                                </p>
                                <div className="space-y-3">
                                    <a href="tel:+918891494731" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                                        <Phone size={15} /> +91 88914 94731
                                    </a>
                                    <a
                                        href="https://www.google.com/maps/search/Olive+Dental+%26+Face+Clinic+Kunnumpuram+Kondotty"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                                    >
                                        <Navigation size={15} /> Get Directions <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Branch Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:shadow-gray-100 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 bg-gray-200/60 rounded-xl flex items-center justify-center">
                                        <MapPin size={22} className="text-gray-600" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">Branch</span>
                                        <h3 className="font-bold text-gray-900 mt-1">Kottukkara</h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                    Opp. Taluk Supply Office,<br />
                                    Kondotty, Malappuram
                                </p>
                                <div className="space-y-3">
                                    <a href="tel:+918891494731" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                                        <Phone size={15} /> +91 88914 94731
                                    </a>
                                    <a
                                        href="https://www.google.com/maps/search/Kottukkara+Kondotty+Malappuram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                                    >
                                        <Navigation size={15} /> Get Directions <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Clinic Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-900 text-white rounded-2xl p-7 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        <Clock size={22} className="text-primary-light" />
                                    </div>
                                    <h3 className="font-bold text-white text-lg">Clinic Hours</h3>
                                </div>

                                <div className="space-y-4 mt-2">
                                    {hours.map((h, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between text-sm"
                                        >
                                            <span className="font-semibold text-white">{h.day}</span>
                                            <span className={`font-mono text-xs ${h.time === 'By Appointment Only' ? 'text-amber-300' : 'text-gray-300'}`}>
                                                {h.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <p className="text-sm text-gray-300">
                                        🚨 <span className="font-semibold text-white">Emergency?</span>{' '}
                                        Call{' '}
                                        <a href="tel:+918891494731" className="text-primary-light hover:text-white transition-colors font-bold">
                                            +91 88914 94731
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 3: Full-width Map
               ═══════════════════════════════════════════════ */}
            <section className="relative">
                <div className="h-[400px] sm:h-[450px] lg:h-[500px] w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.0555!3d11.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzMwLjYiTiA3NsKwMDMnMTkuOCJF!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Olive Dental & Face Clinic Location - Kunnumpuram, Kondotty"
                    />
                </div>
                {/* Floating info card over map */}
                <div className="absolute bottom-6 left-4 sm:left-8 lg:left-12 z-10">
                    <a
                        href="https://www.google.com/maps/search/Olive+Dental+%26+Face+Clinic+Kunnumpuram+Kondotty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all group"
                    >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <Navigation size={18} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">Open in Google Maps</p>
                            <p className="text-xs text-gray-400">Get directions to our clinic</p>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 ml-2" />
                    </a>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 4: Bottom CTA
               ═══════════════════════════════════════════════ */}
            <section className="py-14 lg:py-16 bg-gradient-to-r from-primary to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Still Have Questions?</h2>
                        <p className="text-blue-100 text-sm mb-8 max-w-lg mx-auto">
                            Our team is happy to answer any questions about treatments, pricing, or your first visit. No pressure, no commitment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20have%20a%20question%20about%20my%20treatment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={18} />
                                Chat on WhatsApp
                            </a>
                            <a
                                href="tel:+918891494731"
                                className="px-8 py-4 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-all border border-white/20 flex items-center justify-center gap-2"
                            >
                                <Phone size={18} />
                                Call +91 88914 94731
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
