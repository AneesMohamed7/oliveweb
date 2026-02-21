import React, { useState } from 'react';
import { Phone, MapPin, Send } from 'lucide-react';

export default function ContactCTA() {
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create WhatsApp message
        const message = `Hi Olive Dental, I would like to request a callback.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}`;
        const whatsappUrl = `https://wa.me/918891494731?text=${message}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Reset form
        setFormData({ name: '', phone: '' });
    };

    return (
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden" id="contact">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Visit Olive Dental & Face Clinic</h2>
                        <div className="space-y-6 text-blue-100">
                            <div className="flex items-start gap-4">
                                <MapPin className="shrink-0 mt-1" />
                                <p>
                                    Kunnumpuram, Kerala<br />
                                    <a
                                        href="https://share.google/gfImGck8QmoYMjJni"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:text-white transition-colors underline mt-1 inline-block"
                                    >
                                        View on Google Maps
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="shrink-0" />
                                <a href="tel:+918891494731" className="text-white hover:text-accent transition-colors font-semibold text-lg">
                                    +91 88914 94731
                                </a>
                            </div>

                            <div className="pt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.968037618991!2d76.9535!3d8.5085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMzAuNiJOIDc2wrA1NyczMi42IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '1rem', opacity: 0.9 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Clinic Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-2">Book Your Appointment</h3>
                        <p className="text-gray-500 mb-6">Leave your details and we'll call you back instantly.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Request Callback via WhatsApp
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
