import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';


import oliveLogo from '../assets/cliniclogo002.png';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [treatmentsOpen, setTreatmentsOpen] = useState(false);

    const location = useLocation();
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setTreatmentsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setTreatmentsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
    ];

    const treatmentLinks = [
        { name: 'Dental Services', path: '/dental-treatments' },
        { name: 'Facial Aesthetics', path: '/facial-aesthetics' },
    ];

    const rightLinks = [
        { name: 'Doctors', path: '/doctors' },
        { name: 'Contact', path: '/contact' },
    ];

    const isTreatmentsActive = location.pathname.startsWith('/treatments') || ['/dental-treatments', '/facial-aesthetics'].includes(location.pathname);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-1 lg:gap-2">
                            <img src={oliveLogo} alt="Olive Dental" className="h-[55px] sm:h-[70px] lg:h-[80px] w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "text-sm lg:text-base font-medium transition-colors hover:text-primary whitespace-nowrap",
                                    location.pathname === link.path ? "text-primary" : "text-text"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Treatments Dropdown */}
                        <div className="relative flex items-center gap-1" ref={dropdownRef}>
                            <Link
                                to="/treatments"
                                className={cn(
                                    "text-sm lg:text-base font-medium transition-colors hover:text-primary whitespace-nowrap",
                                    isTreatmentsActive ? "text-primary" : "text-text"
                                )}
                            >
                                Services
                            </Link>
                            <button
                                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                                className="p-1 hover:text-primary transition-colors focus:outline-none"
                                aria-label="Toggle Services Menu"
                            >
                                <ChevronDown size={16} className={cn("transition-transform duration-200", treatmentsOpen && "rotate-180")} />
                            </button>

                            {treatmentsOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                                    <div className="px-3 py-1.5 border-b border-gray-50 mb-1">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Our Specialisations</p>
                                    </div>
                                    {treatmentLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={cn(
                                                "block px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-primary transition-colors",
                                                location.pathname === link.path ? "text-primary bg-blue-50/50 font-medium" : "text-gray-700"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {rightLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "text-sm lg:text-base font-medium transition-colors hover:text-primary whitespace-nowrap",
                                    location.pathname === link.path ? "text-primary" : "text-text"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                        <a
                            href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 lg:px-5 lg:py-2.5 bg-accent text-white text-xs lg:text-sm font-medium rounded-full hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap cursor-pointer"
                        >
                            <MessageCircle size={16} />
                            <span className="hidden lg:inline">Book Appointment</span>
                            <span className="lg:hidden">Book</span>
                        </a>
                        <a
                            href="tel:+918891494731"
                            className="p-2 lg:p-2.5 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                            aria-label="Call Olive Dental"
                        >
                            <Phone size={16} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-text hover:text-primary focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl rounded-b-2xl sm:rounded-b-[2rem]">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "block px-3 py-3 rounded-md text-base font-medium",
                                    location.pathname === link.path ? "text-primary bg-blue-50" : "text-text hover:text-primary hover:bg-gray-50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Treatments Submenu */}
                        <div>
                            <div className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-50">
                                <Link
                                    to="/treatments"
                                    className={cn(
                                        "flex-grow text-base font-medium",
                                        location.pathname === "/treatments" ? "text-primary" : "text-text"
                                    )}
                                >
                                    Services
                                </Link>
                                <button
                                    onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                                    className="p-1 text-gray-400"
                                >
                                    <ChevronDown size={18} className={cn("transition-transform", treatmentsOpen && "rotate-180")} />
                                </button>
                            </div>
                            {treatmentsOpen && (
                                <div className="pl-6 space-y-1 mt-1 bg-gray-50/50 rounded-lg">
                                    {treatmentLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={cn(
                                                "block px-3 py-3 rounded-md text-base",
                                                location.pathname === link.path ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {rightLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "block px-3 py-3 rounded-md text-base font-medium",
                                    location.pathname === link.path ? "text-primary bg-blue-50" : "text-text hover:text-primary hover:bg-gray-50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile CTA */}
                        <div className="flex gap-2 pt-3">
                            <a
                                href="tel:+918891494731"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-medium"
                            >
                                <Phone size={18} />
                                Call
                            </a>
                            <a
                                href="https://wa.me/918891494731?text=Hi%20Olive%20Dental,%20I%20would%20like%20to%20book%20an%20appointment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white rounded-lg font-medium cursor-pointer"
                            >
                                <MessageCircle size={18} />
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            )}


        </nav>
    );
}
