import React from 'react';

const transformations = [
    {
        img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Smile Makeover',
    },
    {
        img: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Teeth Whitening',
    },
    {
        img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Implant Restoration',
    },
    {
        img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Veneer Transformation',
    },
    {
        img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Orthodontic Result',
    },
    {
        img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600&h=400',
        label: 'Full Mouth Rehab',
    },
];

// Duplicate the items so the scroll loops seamlessly
const doubledItems = [...transformations, ...transformations];

export default function BeforeAfter() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Real Smile Transformations
                    </h2>
                    <p className="text-gray-600">
                        See the difference we make in our patients' lives.
                    </p>
                </div>
            </div>

            {/* Auto-scrolling carousel */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex gap-6 w-max"
                    style={{
                        animation: 'marquee 40s linear infinite',
                    }}
                >
                    {doubledItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[340px] md:w-[400px] group"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="w-full h-full object-cover"
                                />
                                {/* Label overlay */}
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                                    <span className="text-white font-semibold text-sm">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Keyframes injected via style tag */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
