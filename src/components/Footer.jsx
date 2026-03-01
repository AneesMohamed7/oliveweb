import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import oliveLogo from '../assets/olive-logo.png';

function EmailForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;
        setLoading(true);
        // Opens a mailto with pre-filled subject/body
        const subject = encodeURIComponent(`Enquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:olivedentalkondotty@gmail.com?subject=${subject}&body=${body}`;
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setName('');
            setEmail('');
            setMessage('');
        }, 800);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 border border-gray-100">
            {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h4 className="text-gray-900 font-bold text-xl mb-2">Message Prepared!</h4>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto mb-6">Your email client has opened with your message ready to send. We'll get back to you shortly.</p>
                    <button
                        onClick={() => setSent(false)}
                        className="text-primary font-semibold text-sm hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a message</h3>
                    <p className="text-sm text-gray-500 mb-6">Fill out the form below and we'll reply directly to your email.</p>

                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-gray-700">
                            How can we help?
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about the dental or facial treatment you're looking for..."
                            rows={4}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors duration-200 text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <Send size={18} />
                        )}
                        {loading ? 'Opening email...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
}

export default function Footer() {
    return (
        <footer>
            {/* ── Email CTA Section (Light Medical Theme) ── */}
            <div className="bg-blue-50 py-16 lg:py-20 border-t border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left — content */}
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
                                Contact Our Clinic
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Ready to schedule your visit? We're here to help.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                                Whether you have a question about our treatments, need a second opinion, or want to book an appointment, our team at Olive Dental is ready to assist you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                                        <Phone size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium mb-1">Call Us Directly</p>
                                        <a href="tel:+918891494731" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">
                                            +91 88914 94731
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                                        <Mail size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium mb-1">Send an Email</p>
                                        <a href="mailto:olivedentalkondotty@gmail.com" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">
                                            olivedentalkondotty@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Clean White Form */}
                        <div className="relative">
                            {/* Decorative background circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10">
                                <EmailForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Footer Grid (Classic Dark Blue) ── */}
            <div className="bg-[#0f172a] text-gray-300 pt-16 pb-8 md:pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

                        {/* Brand Column */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-6">
                                <img src={oliveLogo} alt="Olive Dental" className="h-14 w-auto object-contain brightness-0 invert" />
                                <h3 className="text-2xl font-bold text-white">Olive Dental</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                                Advanced multi-specialty dental and facial aesthetic clinic in Kondotty, Malappuram. Committed to ethical practice, precision, and patient trust.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About the Clinic</Link></li>
                                <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Specialists</Link></li>
                                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">Patient FAQS</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Treatments */}
                        <div className="lg:col-span-3">
                            <h4 className="text-white font-bold mb-6">Our Services</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/dental-treatments" className="text-gray-400 hover:text-white transition-colors">General Dentistry</Link></li>
                                <li><Link to="/treatments/implants" className="text-gray-400 hover:text-white transition-colors">Dental Implants</Link></li>
                                <li><Link to="/treatments/aligners" className="text-gray-400 hover:text-white transition-colors">Clear Aligners</Link></li>
                                <li><Link to="/treatments/veneers" className="text-gray-400 hover:text-white transition-colors">Veneers & Smile Makeover</Link></li>
                                <li><Link to="/facial-aesthetics" className="text-gray-400 hover:text-white transition-colors">Facial Aesthetics</Link></li>
                            </ul>
                        </div>

                        {/* Locations */}
                        <div className="lg:col-span-3">
                            <h4 className="text-white font-bold mb-6">Our Locations</h4>
                            <div className="space-y-6 text-sm">
                                <div className="border-l-2 border-primary pl-4">
                                    <h5 className="font-semibold text-white mb-1">Kunnumpuram (HQ)</h5>
                                    <p className="text-gray-400 leading-relaxed mb-2">
                                        Opp. Daru Shifa Hospital,<br />
                                        Kondotty, Malappuram 676305
                                    </p>
                                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-primary hover:text-blue-400 font-medium inline-flex items-center gap-1">
                                        Get Directions <ArrowRight size={14} />
                                    </a>
                                </div>

                                <div className="border-l-2 border-slate-700 pl-4">
                                    <h5 className="font-semibold text-white mb-1">Kottukkara Branch</h5>
                                    <p className="text-gray-400 leading-relaxed mb-2">
                                        Opp. Taluk Supply Office,<br />
                                        Kondotty, Malappuram
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <p>© {new Date().getFullYear()} Olive Dental & Face Clinic. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
