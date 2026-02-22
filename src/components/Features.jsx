import React from 'react';
import { Users, Cpu, Scan, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            icon: Users,
            title: 'Multi-Specialty Dentists',
            text: 'Experts in every field under one roof.'
        },
        {
            icon: Cpu,
            title: 'Advanced Technology',
            text: 'Latest equipment for precise treatment.'
        },
        {
            icon: Scan,
            title: 'Digital X-Ray',
            text: 'Low radiation, instant results.'
        },
        {
            icon: Heart,
            title: 'Friendly, Painless Care',
            text: 'Anxiety-free dentistry for all ages.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="p-3 bg-blue-100 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors"
                            >
                                <feature.icon size={24} />
                            </motion.div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
