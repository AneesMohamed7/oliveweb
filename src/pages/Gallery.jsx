import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera, Sparkles, Building2, Stethoscope } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const galleryImages = [
    // ── Clinic (formerly Clinic + Infrastructure) ──────────────────────────
    {
        id: 1,
        src: '/images/oliveclinic-img1.webp',
        alt: 'Olive Dental Clinic Front',
        category: 'Clinic',
        title: 'Modern Clinic Entrance'
    },
    {
        id: 2,
        src: '/images/clinic-front-inside.webp',
        alt: 'Clinic Reception Area',
        category: 'Clinic',
        title: 'Welcoming Reception'
    },
    {
        id: 3,
        src: '/images/clinic-chair (1).jpg',
        alt: 'Advanced Dental Chair',
        category: 'Clinic',
        title: 'State-of-the-art Equipment'
    },
    {
        id: 4,
        src: '/images/clinic-chair (2).jpg',
        alt: 'Sterilized Treatment Room',
        category: 'Clinic',
        title: 'Hygienic Environment'
    },
    {
        id: 5,
        src: '/images/clinic-chair (3).webp',
        alt: 'Dental Care Unit',
        category: 'Clinic',
        title: 'Patient Comfort'
    },
    {
        id: 6,
        src: '/images/clinic-chair (4).webp',
        alt: 'Modern Treatment Suite',
        category: 'Clinic',
        title: 'Advanced Facilities'
    },

    // ── Dental Results ──────────────────────────────────────────────────────
    {
        id: 7,
        src: '/images/beforeafter6.webp',
        alt: 'Smile Makeover Result',
        category: 'Dental Results',
        title: 'Smile Makeover'
    },
    {
        id: 8,
        src: '/images/beforeafter5.webp',
        alt: 'Teeth Whitening Result',
        category: 'Dental Results',
        title: 'Professional Whitening'
    },
    {
        id: 11,
        src: '/images/beforeafter2.webp',
        alt: 'Dental Implant Solution',
        category: 'Dental Results',
        title: 'Dental Restoration'
    },
    {
        id: 12,
        src: '/images/beforeafter1.webp',
        alt: 'Veneers Solution',
        category: 'Dental Results',
        title: 'Veneers Excellence'
    },
    // 24 new dental result images
    {
        id: 13,
        src: '/images/beforeafter13.webp',
        alt: 'Dental Treatment Result 13',
        category: 'Dental Results',
        title: 'Dental Result 13'
    },
    {
        id: 14,
        src: '/images/beforeafter14.webp',
        alt: 'Dental Treatment Result 14',
        category: 'Dental Results',
        title: 'Dental Result 14'
    },
    {
        id: 15,
        src: '/images/beforeafter15.webp',
        alt: 'Dental Treatment Result 15',
        category: 'Dental Results',
        title: 'Dental Result 15'
    },
    {
        id: 16,
        src: '/images/beforeafter16.webp',
        alt: 'Dental Treatment Result 16',
        category: 'Dental Results',
        title: 'Dental Result 16'
    },
    {
        id: 17,
        src: '/images/beforeafter17.webp',
        alt: 'Dental Treatment Result 17',
        category: 'Dental Results',
        title: 'Dental Result 17'
    },
    {
        id: 18,
        src: '/images/beforeafter18.webp',
        alt: 'Dental Treatment Result 18',
        category: 'Dental Results',
        title: 'Dental Result 18'
    },
    {
        id: 19,
        src: '/images/beforeafter19.webp',
        alt: 'Dental Treatment Result 19',
        category: 'Dental Results',
        title: 'Dental Result 19'
    },
    {
        id: 20,
        src: '/images/beforeafter20.webp',
        alt: 'Dental Treatment Result 20',
        category: 'Dental Results',
        title: 'Dental Result 20'
    },
    {
        id: 21,
        src: '/images/beforeafter21.webp',
        alt: 'Dental Treatment Result 21',
        category: 'Dental Results',
        title: 'Dental Result 21'
    },
    {
        id: 22,
        src: '/images/beforeafter22.webp',
        alt: 'Dental Treatment Result 22',
        category: 'Dental Results',
        title: 'Dental Result 22'
    },
    {
        id: 23,
        src: '/images/beforeafter23.webp',
        alt: 'Dental Treatment Result 23',
        category: 'Dental Results',
        title: 'Dental Result 23'
    },
    {
        id: 24,
        src: '/images/beforeafter24.webp',
        alt: 'Dental Treatment Result 24',
        category: 'Dental Results',
        title: 'Dental Result 24'
    },
    {
        id: 25,
        src: '/images/beforeafter25.webp',
        alt: 'Dental Treatment Result 25',
        category: 'Dental Results',
        title: 'Dental Result 25'
    },
    {
        id: 26,
        src: '/images/beforeafter26.webp',
        alt: 'Dental Treatment Result 26',
        category: 'Dental Results',
        title: 'Dental Result 26'
    },
    {
        id: 27,
        src: '/images/beforeafter27.webp',
        alt: 'Dental Treatment Result 27',
        category: 'Dental Results',
        title: 'Dental Result 27'
    },
    {
        id: 28,
        src: '/images/beforeafter28.webp',
        alt: 'Dental Treatment Result 28',
        category: 'Dental Results',
        title: 'Dental Result 28'
    },
    {
        id: 29,
        src: '/images/beforeafter29.webp',
        alt: 'Dental Treatment Result 29',
        category: 'Dental Results',
        title: 'Dental Result 29'
    },
    {
        id: 30,
        src: '/images/beforeafter30.webp',
        alt: 'Dental Treatment Result 30',
        category: 'Dental Results',
        title: 'Dental Result 30'
    },
    {
        id: 31,
        src: '/images/beforeafter31.webp',
        alt: 'Dental Treatment Result 31',
        category: 'Dental Results',
        title: 'Dental Result 31'
    },
    {
        id: 32,
        src: '/images/beforeafter32.webp',
        alt: 'Dental Treatment Result 32',
        category: 'Dental Results',
        title: 'Dental Result 32'
    },
    {
        id: 33,
        src: '/images/beforeafter33.webp',
        alt: 'Dental Treatment Result 33',
        category: 'Dental Results',
        title: 'Dental Result 33'
    },
    {
        id: 34,
        src: '/images/beforeafter34.webp',
        alt: 'Dental Treatment Result 34',
        category: 'Dental Results',
        title: 'Dental Result 34'
    },
    {
        id: 35,
        src: '/images/beforeafter35.webp',
        alt: 'Dental Treatment Result 35',
        category: 'Dental Results',
        title: 'Dental Result 35'
    },
    {
        id: 36,
        src: '/images/beforeafter36.webp',
        alt: 'Dental Treatment Result 36',
        category: 'Dental Results',
        title: 'Dental Result 36'
    },

    // ── Face Results ────────────────────────────────────────────────────────
    {
        id: 9,
        src: '/images/beforeafter4.webp',
        alt: 'HydraFacial Treatment',
        category: 'Face Results',
        title: 'Facial Rejuvenation'
    },
    {
        id: 10,
        src: '/images/beforeafter3.webp',
        alt: 'Botox Treatment Result',
        category: 'Face Results',
        title: 'Aesthetic Excellence'
    },
];

const categories = ['All', 'Clinic', 'Dental Results', 'Face Results'];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Gallery | Olive Dental & Face Clinic — Kunnumpuram & Kondotty</title>
                <meta name="description" content="Take a virtual tour of Olive Dental & Face Clinic. See our modern facilities, advanced equipment, and real patient results." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-24 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/images/herobg-img.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-gray-900" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Visual Tour</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Clinic & Results</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Explore our state-of-the-art facilities and witness the transformative results we achieve for our patients.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 border-b border-gray-100 sticky top-[72px] lg:top-[88px] bg-white z-30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-md group-hover:shadow-xl transition-all duration-500">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                                            <h3 className="text-white font-bold text-xl">{image.title}</h3>
                                        </div>
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <Maximize2 size={20} className="text-white" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[101]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                            />
                            <div className="mt-6 text-center">
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">{selectedImage.category}</span>
                                <h2 className="text-white text-2xl md:text-3xl font-bold">{selectedImage.title}</h2>
                                <p className="text-gray-400 mt-2">{selectedImage.alt}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <ContactCTA />
        </div>
    );
}