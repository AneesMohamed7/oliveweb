import React, { useState } from 'react';
import { Phone, MapPin, Send, Clock, Navigation, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactCTA() {
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
        'Gap Correction',
        'Fluoride Treatment',
        'Dental X-Ray',
        'Mouth Guard / Night Guard',
        'Smile Consultation',
        'Other',
    ];

    const timeSlots = [
        'Morning (9:00 AM - 12:00 PM)',
        'Afternoon (12:00 PM - 4:00 PM)',
        'Evening (4:00 PM - 9:00 PM)',
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setError(null);

        try {
            // Replace these with your actual EmailJS credentials
            const SERVICE_ID = 'service_14r5omd';
            const TEMPLATE_ID = 'template_bec8swb';
            const PUBLIC_KEY = 'fMbAqMb_XqkFrBC1U';

            const templateParams = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                treatment: formData.treatment,
                date: formData.date,
                time: formData.time,
                message: formData.message,
                to_email: 'olivedental31@gmail.com'
            };

            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (result.status === 200) {
                setSubmitted(true);
                setFormData({ name: '', phone: '', email: '', treatment: '', date: '', time: '', message: '' });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (err) {
            console.error('Submission Error:', err);
            setError('Something went wrong. Please try again or call us at +91 88914 94731.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="py-16 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl overflow-hidden shadow-2xl text-white relative"
                >
                    {/* Stronger overlay matching Hero section */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
                        }}
                    />

                    <div className="relative z-10 p-8 md:p-12 lg:p-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Visit Today</h2>
                                <p className="text-blue-100/70 text-lg leading-relaxed mb-10">
                                    Schedule a consultation to discuss your dental or skin care needs. We'll get back to you immediately to confirm your appointment.
                                </p>
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
                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Send size={24} />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                                            <p className="text-gray-500 mb-6">Your appointment request has been received. Our team will contact you shortly.</p>
                                            <button
                                                onClick={() => setSubmitted(false)}
                                                className="text-primary font-bold hover:underline"
                                            >
                                                Book another appointment
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <>
                                            {error && (
                                                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100">
                                                    {error}
                                                </div>
                                            )}
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
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-600 bg-white"
                                                        value={formData.date}
                                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Treatment Interest</label>
                                                    <select
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-600 bg-white"
                                                        value={formData.treatment}
                                                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                                    >
                                                        <option value="">Select treatment</option>
                                                        {treatments.map((t) => (
                                                            <option key={t} value={t}>{t}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Time</label>
                                                    <select
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-600 bg-white"
                                                        value={formData.time}
                                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                    >
                                                        <option value="">Select time slot</option>
                                                        {timeSlots.map((t) => (
                                                            <option key={t} value={t}>{t}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message (Optional)</label>
                                                <textarea
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                                                    placeholder="Tell us more about your requirements..."
                                                    rows="3"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSending}
                                                className={`w-full bg-primary text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-2 ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'}`}
                                            >
                                                {isSending ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                        Sending...
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Send size={18} />
                                                        Book Appointment
                                                    </>
                                                )}
                                            </button>
                                            <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                                                By submitting, you agree to be contacted by Olive Dental regarding your request.
                                            </p>
                                        </>
                                    )}
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
