import React from 'react';

export default function BeforeAfter() {
    // Placeholders
    const cases = [1, 2, 3];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Real Smile Transformations</h2>
                    <p className="text-gray-600">See the difference we make in our patients' lives.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer">
                            <img
                                src={`https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=400`}
                                alt="Smile Transformation"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-lg">View Transformation</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
