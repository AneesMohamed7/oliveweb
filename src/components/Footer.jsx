import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

import oliveLogo from '../assets/olive-logo.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 pb-24 md:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={oliveLogo} alt="Olive Dental" className="h-12 w-auto object-contain brightness-0 invert" />
                            <h3 className="text-xl font-bold text-white">Olive Dental & Face Clinic</h3>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Advanced smile correction and dental care with clear aligners, veneers, and implants.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link to="/doctors" className="hover:text-primary">Our Doctors</Link></li>
                            <li><Link to="/treatments" className="hover:text-primary">Treatments</Link></li>
                            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Treatments</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/dental-treatments" className="hover:text-primary">Dental Treatments</Link></li>
                            <li><Link to="/facial-aesthetics" className="hover:text-primary">Facial Aesthetics</Link></li>
                            <li><Link to="/treatments/aligners" className="hover:text-primary">Clear Aligners</Link></li>
                            <li><Link to="/treatments/implants" className="hover:text-primary">Dental Implants</Link></li>
                            <li><Link to="/treatments/veneers" className="hover:text-primary">Veneers</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h4 className="text-lg font-bold text-white mb-4">Our Locations</h4>
                        <div className="space-y-6 text-sm">
                            <div>
                                <h5 className="font-semibold text-white mb-1">Kunnumpuram (HQ)</h5>
                                <p className="text-gray-400">Opp. Daru Shifa Hospital,</p>
                                <p className="text-gray-400">Kunnumpuram, Kondotty,</p>
                                <p className="text-gray-400">Malappuram - 676305</p>
                                <a href="tel:+918891494731" className="block mt-1 text-primary hover:text-white transition-colors">+91 88914 94731</a>
                            </div>

                            <div>
                                <h5 className="font-semibold text-white mb-1">Kottukkara Branch</h5>
                                <p className="text-gray-400">Opp. Taluk Supply Office,</p>
                                <p className="text-gray-400">Kottukkara, Kondotty.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
                    © {new Date().getFullYear()} Olive Dental & Face Clinic. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
