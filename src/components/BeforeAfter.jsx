import React, { useRef, useState, useCallback } from 'react';
import LazyImage from './LazyImage';

const transformations = [
    { img: '/images/beforeafter1.webp' },
    { img: '/images/beforeafter2.webp' },
    { img: '/images/beforeafter3.webp' },
    { img: '/images/beforeafter4.webp' },
    { img: '/images/beforeafter5.webp' },
    { img: '/images/beforeafter6.webp' },
    { img: '/images/beforeafter7.webp' },
    { img: '/images/beforeafter8.webp' },
    { img: '/images/beforeafter9.webp' },
    { img: '/images/beforeafter10.webp' },
];

const doubledItems = [...transformations, ...transformations];

export default function BeforeAfter() {
    const [paused, setPaused] = useState(false);
    const scrollRef = useRef(null);
    const touchStartX = useRef(null);
    const scrollStartLeft = useRef(null);

    // Touch drag to scroll
    const handleTouchStart = useCallback((e) => {
        setPaused(true);
        touchStartX.current = e.touches[0].clientX;
        scrollStartLeft.current = scrollRef.current.scrollLeft;
    }, []);

    const handleTouchMove = useCallback((e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.touches[0].clientX;
        scrollRef.current.scrollLeft = scrollStartLeft.current + delta;
    }, []);

    const handleTouchEnd = useCallback(() => {
        touchStartX.current = null;
        setPaused(false);
    }, []);

    // Mouse drag to scroll
    const isDragging = useRef(false);
    const mouseStartX = useRef(null);
    const mouseScrollLeft = useRef(null);

    const handleMouseDown = useCallback((e) => {
        isDragging.current = true;
        setPaused(true);
        mouseStartX.current = e.clientX;
        mouseScrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging.current) return;
        const delta = mouseStartX.current - e.clientX;
        scrollRef.current.scrollLeft = mouseScrollLeft.current + delta;
    }, []);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
        setPaused(false);
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    }, []);

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

            <div
                ref={scrollRef}
                className="relative w-full overflow-x-auto"
                style={{
                    cursor: 'grab',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => { setPaused(false); handleMouseUp(); }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex gap-6 w-max px-6"
                    style={{
                        animation: `marquee 70s linear infinite`,
                        animationPlayState: paused ? 'paused' : 'running',
                    }}
                >
                    {doubledItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[340px] md:w-[400px]"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                                <LazyImage
                                    src={item.img}
                                    alt={`Smile transformation ${(idx % transformations.length) + 1}`}
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={300}
                                    blur
                                    draggable={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                div::-webkit-scrollbar { display: none; }
            `}</style>
        </section>
    );
}