import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera, Sparkles, Building2, Stethoscope } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import LazyImage from '../components/LazyImage';

const galleryImages = [
    // ── Clinic (formerly Clinic + Infrastructure) ──────────────────────────

    {
        id: 1,
        src: '/images/oliveclinic-img1.webp',
        alt: 'Olive Dental Clinic Front',
        category: 'Clinic',

    },
    {
        id: 2,
        src: '/images/clinic-front-inside.webp',
        alt: 'Clinic Reception Area',
        category: 'Clinic',

    },

    {
        id: 3,
        src: '/images/clinic-chair (3).webp',
        alt: 'Dental Care Unit',
        category: 'Clinic',

    },
    {
        id: 4,
        src: '/images/clinic-chair (4).webp',
        alt: 'Modern Treatment Suite',
        category: 'Clinic',

    },
    {
        id: 5,
        src: '/images/clinic-img1.webp',
        alt: 'Olive Dental Clinic Exterior',
        category: 'Clinic',
    },
    {
        id: 6,
        src: '/images/clinic-img2.webp',
        alt: 'Clinic Interior View',
        category: 'Clinic',
    },

    // ── Dental Results ─────────────────────────────────
    {
        id: 7,
        src: '/images/beforeafter1.webp',
        alt: 'Smile Makeover Result',
        category: 'Dental Results',
        title: 'Smile Makeover'
    },
    { id: 8, src: '/images/beforeafter2.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 9, src: '/images/beforeafter3.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 10, src: '/images/beforeafter4.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 11, src: '/images/beforeafter5.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 12, src: '/images/beforeafter6.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },

    { id: 13, src: '/images/beforeafter7.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 14, src: '/images/beforeafter8.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 15, src: '/images/beforeafter9.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 16, src: '/images/beforeafter10.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 17, src: '/images/beforeafter11.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 18, src: '/images/beforeafter12.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 19, src: '/images/beforeafter13.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 20, src: '/images/beforeafter14.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 21, src: '/images/beforeafter15.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 22, src: '/images/beforeafter16.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 25, src: '/images/beforeafter19.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 27, src: '/images/beforeafter21.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 28, src: '/images/beforeafter22.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },
    { id: 29, src: '/images/beforeafter23.webp', alt: 'Smile Makeover Result', category: 'Dental Results', title: 'Smile Makeover' },

    // ── Face Results ───────────────────────────────────
    {
        id: 37,
        src: '/images/beforeafter31.webp',
        alt: 'HydraFacial Treatment',
        category: 'Face Results',
        title: 'Facial Rejuvenation'
    },
    {
        id: 38,
        src: '/images/beforeafter32.webp', // ⚠️ FIXED (was empty)
        alt: 'Botox Treatment Result',
        category: 'Face Results',
        title: 'Aesthetic Excellence'
    }
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
            <section className="relative py-24 bg-gray-900 overflow-hidden min-h-[400px] flex items-center">
                <div className="absolute inset-0 opacity-40">
                    <LazyImage
                        src="/images/herobg-img.webp"
                        alt="Background"
                        width={1920}
                        height={1080}
                        eager={true}
                        fetchPriority="high"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/80 to-gray-900" />

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
                                        <LazyImage
                                            src={image.src}
                                            alt={image.alt}
                                            width={500}
                                            height={375}
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