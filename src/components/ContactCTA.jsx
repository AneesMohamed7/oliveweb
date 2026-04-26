import React, { useState } from 'react';
import { Phone, MapPin, Send, Clock, Navigation, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
    const [formData, setFormData] = useState({ name: '', phone: '', treatment: '' });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const treatmentText = formData.treatment ? `%0A*Interested in:* ${formData.treatment}` : '';
        const message = `Hi Olive Dental, I would like to request a callback.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}${treatmentText}`;
        const whatsappUrl = `https://wa.me/918891494731?text=${message}`;
        window.open(whatsappUrl, '_blank');
        setFormData({ name: '', phone: '', treatment: '' });
    };

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden text-white" id="contact">
            {/* Background Curve Container - Matching Hero Aesthetic */}
            <div
                className="absolute inset-x-2 inset-y-2 sm:inset-x-4 sm:inset-y-4 lg:inset-x-6 lg:inset-y-6 -z-10 rounded-[2.5rem] sm:rounded-[4rem] lg:rounded-[5rem] shadow-2xl overflow-hidden bg-blue-900"
                style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
                }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Visit Our Clinics</h2>

                        <div className="grid sm:grid-cols-2 gap-8 mb-10">
                            {/* Kunnumpuram Location */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                        <MapPin size={18} className="text-primary-light" />
                                    </div>
                                    <h3 className="font-bold text-lg">Kunnumpuram</h3>
                                </div>
                                <p className="text-blue-100/70 text-sm leading-relaxed">
                                    Opp. Daru Shifa Hospital,<br />
                                    Kolappuram Road, Kunnumpuram,
                                    Malappuram 676305
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/Ydk2WzBThgPht2nD7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-medium"
                                >
                                    <Navigation size={14} /> Get Directions <ChevronRight size={14} />
                                </a>
                            </div>

                            {/* Kottukkara Location */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                        <MapPin size={18} className="text-primary-light" />
                                    </div>
                                    <h3 className="font-bold text-lg">Kottukkara</h3>
                                </div>
                                <p className="text-blue-100/70 text-sm leading-relaxed">
                                    Opp. Taluk Supply Office,<br />
                                    Near AMH Hospital, Kondotty,
                                    Malappuram
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/kLnwhGppMxWsA1Pi6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-medium"
                                >
                                    <Navigation size={14} /> Get Directions <ChevronRight size={14} />
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6 text-blue-100">
                            <div className="flex items-center gap-4">
                                <Phone className="shrink-0 text-primary-light" />
                                <a href="tel:+918891494731" className="text-white hover:text-accent transition-colors font-semibold text-xl">
                                    +91 88914 94731
                                </a>
                                <a href="tel:+918848072635" className="text-white hover:text-accent transition-colors font-semibold text-xl">
                                    | +91 88480 72635
                                </a>
                            </div>

                            <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                                <Clock size={20} className="shrink-0 mt-1 text-primary-light" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Clinic Timings</h4>
                                    <p className="text-sm text-blue-100/70">Mon – Sat: 9:00 AM – 9:00 PM</p>
                                    <p className="text-sm text-blue-100/70">Sunday: By Appointment Only</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-2">Book Your Appointment</h3>
                        <p className="text-gray-500 mb-6">Leave your details and we'll call you back instantly to confirm your visit.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Treatment Interest</label>
                                <select
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-600 bg-white"
                                    value={formData.treatment}
                                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                >
                                    <option value="">Select treatment (optional)</option>
                                    {treatments.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-2"
                            >
                                <Send size={18} />
                                Send Request via WhatsApp
                            </button>
                            <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                                Open WhatsApp with your details pre-filled and get quick guidance from our team.                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
