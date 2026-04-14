import React, { useState, useRef, useEffect, Suspense } from 'react';

/**
 * LazySection — Intersection Observer-powered component loader.
 * Defers mounting of heavy sections until they approach the viewport.
 *
 * Usage:
 *   <LazySection
 *     component={() => import('../components/BeforeAfter')}
 *     minHeight="500px"
 *     rootMargin="200px"
 *   />
 */
export default function LazySection({
    component,
    minHeight = '200px',
    rootMargin = '200px',
    threshold = 0,
    fallback = null,
    ...props
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [Component, setComponent] = useState(null);
    const sentinelRef = useRef(null);

    // Intersection Observer to detect when section approaches viewport
    useEffect(() => {
        const el = sentinelRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin, threshold]);

    // Dynamic import when visible
    useEffect(() => {
        if (!isVisible || Component) return;

        let cancelled = false;
        component().then((mod) => {
            if (!cancelled) {
                setComponent(() => mod.default || mod);
            }
        });
        return () => { cancelled = true; };
    }, [isVisible, component, Component]);

    // Skeleton placeholder while loading
    if (!Component) {
        return (
            <div
                ref={sentinelRef}
                style={{ minHeight }}
                className="relative overflow-hidden"
                aria-hidden="true"
            >
                {fallback || (
                    <div className="absolute inset-0 bg-gray-50">
                        <div
                            className="absolute inset-0 animate-pulse"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 50%, transparent 100%)',
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 1.5s ease-in-out infinite',
                            }}
                        />
                    </div>
                )}
                <style>{`
                    @keyframes shimmer {
                        0% { background-position: 200% 0; }
                        100% { background-position: -200% 0; }
                    }
                `}</style>
            </div>
        );
    }

    return <Component {...props} />;
}
