import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Mubashir Parakkal",
        initials: "MP",
        color: "#4285F4",
        date: "7 months ago",
        rating: 5,
        text: "Friendly staff and expert doctors. The best dental care I've received. Best Clinic in Kunnumpuram."
    },
    {
        id: 2,
        name: "Mohammad Jasil MV",
        initials: "MJ",
        color: "#EA4335",
        date: "8 months ago",
        rating: 5,
        text: "I had great experience and well service from this clinic for my tooth fixture. Am totally happy and fully satisfied with their service and procedures. Highly recommendable."
    },
    {
        id: 3,
        name: "Jamsheena Jamshi",
        initials: "JJ",
        color: "#34A853",
        date: "1 year ago",
        rating: 5,
        text: "Excellent service. Quality treatment. Friendly atmosphere. Best dental clinic in Kunnumpuram."
    },
    {
        id: 4,
        name: "Fouziya Salih",
        initials: "FS",
        color: "#FBBC04",
        date: "2 years ago",
        rating: 5,
        text: "Best dental care I ever experienced. Especially the doctor's skill to attend little patients. Recommended for everyone."
    },
    {
        id: 5,
        name: "Ashique Chukkan",
        initials: "AC",
        color: "#9C27B0",
        date: "2 years ago",
        rating: 5,
        text: "I have done root canal and PRP facial therapy from Olive Clinic. Good service and better work techniques. Now my face pimples issues are solved. Thank you! 👍"
    },
    {
        id: 6,
        name: "Samsu Dheen",
        initials: "SD",
        color: "#00ACC1",
        date: "1 year ago",
        rating: 5,
        text: "Really appreciating the care and effort given to each patient. Responding to all phone calls whenever required, doubts are cleared with care. Well appreciated to the care taken! 🤗👍"
    },
    {
        id: 7,
        name: "Ashbal",
        initials: "AS",
        color: "#E91E63",
        date: "Recent",
        rating: 5,
        text: "Best dental clinic in Kondotty. Good service. Best in best. Dr. Shahana is professional and friendly."
    }
];

function ReviewCard({ review }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                {/* Google-style avatar */}
                <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: review.color }}
                >
                    {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                {/* Google logo */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="h-4 opacity-70 flex-shrink-0"
                    loading="lazy"
                    decoding="async"
                    width={59}
                    height={16}
                />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBC04" color="#FBBC04" />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "{review.text}"
            </p>
        </div>
    );
}

export default function GoogleReviews() {
    const [startIndex, setStartIndex] = useState(0);
    const visible = 3;

    const prev = () => setStartIndex(Math.max(0, startIndex - 1));
    const next = () => setStartIndex(Math.min(reviews.length - visible, startIndex + 1));

    const visibleReviews = reviews.slice(startIndex, startIndex + visible);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center gap-2 bg-white border border-gray-100 rounded-2xl shadow-sm px-5 py-2.5 mb-5">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="Google"
                            className="h-5"
                            loading="lazy"
                            decoding="async"
                            width={74}
                            height={20}
                        />
                        <span className="font-semibold text-gray-700">Reviews</span>
                        <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2.5 py-0.5 rounded-full text-sm font-bold border border-yellow-100">
                            <Star size={12} fill="currentColor" />
                            5.0
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say</h2>
                    <p className="text-gray-500 mt-2 text-sm">Real reviews from verified Google Maps patients</p>
                </div>

                {/* Review Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {visibleReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prev}
                        disabled={startIndex === 0}
                        className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="flex gap-1.5">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setStartIndex(Math.min(i, reviews.length - visible))}
                                className={`w-2 h-2 rounded-full transition-all ${i >= startIndex && i < startIndex + visible
                                        ? 'bg-primary w-4'
                                        : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        disabled={startIndex >= reviews.length - visible}
                        className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                    <a
                        href="https://share.google/gfImGck8QmoYMjJni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
                    >
                        Read all reviews on Google Maps →
                    </a>
                </div>
            </div>
        </section>
    );
}
