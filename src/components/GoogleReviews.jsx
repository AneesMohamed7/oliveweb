import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Aisha R.",
        date: "2 months ago",
        rating: 5,
        text: "Olive Dental is hands down the best clinic in Kerala! I got my veneers done here, and the results are stunning. Dr. Experienced and the team were so patient and professional. Highly recommend!",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Rahul K.",
        date: "1 month ago",
        rating: 5,
        text: "I was terrified of root canals, but the procedure here was completely painless. The clinic looks like a 5-star hotel, and the staff makes you feel at ease immediately.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Sarah J.",
        date: "3 weeks ago",
        rating: 5,
        text: "Excellent service for my kids' braces. They are very good with children. The progress has been amazing in just 4 months. Thank you Olive Dental!",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export default function GoogleReviews() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-white border border-gray-100 rounded-2xl shadow-sm mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                        <span className="ml-2 font-bold text-gray-700">Reviews</span>
                        <span className="ml-3 flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-sm font-bold">
                            4.9 <Star size={12} fill="currentColor" />
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-xs text-gray-500">{review.date}</p>
                                </div>
                                <div className="ml-auto flex text-yellow-500">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="https://share.google/gfImGck8QmoYMjJni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                        Read all 500+ reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
}
