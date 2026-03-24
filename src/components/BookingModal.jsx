import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

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

export default function BookingModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        treatment: '',
        date: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    // Close on Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const treatmentText = formData.treatment
            ? `%0A*Treatment:* ${formData.treatment}`
            : '';

        const dateText = formData.date
            ? `%0A*Preferred Date:* ${formData.date}`
            : '';

        const messageText = formData.message
            ? `%0A*Message:* ${formData.message}`
            : '';

        const waMessage = `Hi Olive Dental, I would like to book an appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}${treatmentText}${dateText}${messageText}`;

        const whatsappUrl = `https://wa.me/918891494731?text=${waMessage}`;

        window.open(whatsappUrl, '_blank');

        setSubmitted(true);

        setTimeout(() => {
            setFormData({
                name: '',
                phone: '',
                treatment: '',
                date: '',
                message: '',
            });
            setSubmitted(false);
            onClose();
        }, 3000);
    };

    const inputClasses =
        "w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-gray-50/60 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder:text-gray-400";

    const selectArrow = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.25em 1.25em',
    };

    // Today's date in YYYY-MM-DD for min attribute
    const today = new Date().toISOString().split('T')[0];

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: '20%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '20%' }}
                        transition={{
                            type: 'spring',
                            damping: 32,
                            stiffness: 300,
                            mass: 0.8,
                        }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col pointer-events-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="px-6 pt-5 pb-4 border-b border-gray-100 text-center">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                                    Book An Appointment
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-3 leading-snug">
                                    Quick Consultation Booking
                                </h2>

                                <p className="text-sm text-gray-500 mt-2">
                                    Takes less than 10 seconds
                                </p>

                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                >
                                    <X size={16} className="text-gray-500" />
                                </button>
                            </div>

                            {/* Body — scrollable */}
                            <div className="px-6 py-6 flex-1 overflow-y-auto flex items-start justify-center">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-center w-full"
                                        >
                                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle size={32} className="text-green-500" />
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                Booking Sent!
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                We'll confirm your appointment on WhatsApp.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-4 w-full max-w-md mx-auto"
                                        >
                                            {/* Service — full width */}
                                            <select
                                                className={`${inputClasses} appearance-none text-gray-600`}
                                                value={formData.treatment}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, treatment: e.target.value })
                                                }
                                                style={selectArrow}
                                            >
                                                <option value="">Select Service</option>
                                                {treatments.map((t) => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>

                                            {/* Date + Name — side by side */}
                                            <div className="grid grid-cols-2 gap-3">
                                                {/* Date */}
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        min={today}
                                                        className={`${inputClasses} text-gray-600`}
                                                        value={formData.date}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, date: e.target.value })
                                                        }
                                                        style={!formData.date ? { color: '#9ca3af' } : {}}
                                                    />
                                                    {!formData.date && (
                                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
                                                            Date
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Name */}
                                                <input
                                                    type="text"
                                                    required
                                                    className={inputClasses}
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                />
                                            </div>

                                            {/* Phone — full width */}
                                            <input
                                                type="tel"
                                                required
                                                className={inputClasses}
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                            />

                                            {/* Message — full width */}
                                            <textarea
                                                rows={3}
                                                className={`${inputClasses} resize-none`}
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                            />

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                className="w-full max-w-xs mx-auto flex bg-primary text-white py-3.5 px-10 rounded-full font-bold hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all items-center justify-center gap-2 text-sm"
                                            >
                                                Book via WhatsApp
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}