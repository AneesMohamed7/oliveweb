import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import oliveLogo from '../assets/olive-logo.png';

export default function Footer() {
    return (
        <footer>

            {/* ── Main Footer Grid (Classic Dark Blue) ── */}
            <div className="bg-[#0f172a] text-gray-300 pt-16 pb-8 md:pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

                        {/* Brand Column */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src={oliveLogo}
                                    alt="Olive Dental & Face Clinic"
                                    className="h-14 w-auto object-contain brightness-0 invert"
                                />
                                <h3 className="text-2xl font-bold text-white">
                                    Olive Dental & Face Clinic
                                </h3>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                                Multi-specialty dental and facial aesthetic clinic serving
                                Kunnumpuram and Kondotty, Malappuram. Focused on ethical
                                treatment, precision, and long-term patient trust.
                            </p>

                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/olivedentalofficial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="https://www.instagram.com/olivedentalofficial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="mailto:olivedentalofficial@gmail.com"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                                    aria-label="Email"
                                >
                                    <Mail size={18} />
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
                                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">Patient FAQs</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
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
                                    <h5 className="font-semibold text-white mb-1 flex items-center gap-1">
                                        <MapPin size={14} className="text-primary" />
                                        Kunnumpuram
                                    </h5>
                                    <p className="text-gray-400 leading-relaxed mb-2">
                                        Opp. Daru Shifa Hospital,<br />
                                        Kondotty, Malappuram 676305
                                    </p>
                                    <a
                                        href="tel:+918891494731"
                                        className="text-primary hover:text-white transition-colors text-sm block"
                                    >
                                        +91 88914 94731
                                    </a>
                                    <a
                                        href="mailto:olivedentalofficial@gmail.com"
                                        className="text-gray-400 hover:text-white transition-colors text-sm block mt-1"
                                    >
                                        olivedentalofficial@gmail.com
                                    </a>
                                </div>

                                <div className="border-l-2 border-slate-700 pl-4">
                                    <h5 className="font-semibold text-white mb-1 flex items-center gap-1">
                                        <MapPin size={14} className="text-primary" />
                                        Kottukkara
                                    </h5>
                                    <p className="text-gray-400 leading-relaxed">
                                        Opp. Taluk Supply Office,<br />
                                        Kondotty, Malappuram
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <p>
                            © {new Date().getFullYear()} Olive Dental & Face Clinic. All rights reserved.
                        </p>
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