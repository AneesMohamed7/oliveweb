import React from 'react';

/**
 * PageSkeleton — Branded loading state for Suspense fallback.
 * Prevents white flash during route chunk loading.
 * Uses site brand colors and a subtle shimmer animation.
 */
export default function PageSkeleton() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                {/* Animated brand dot */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                    <div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        style={{
                            animation: 'skeleton-pulse 1.2s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="w-8 h-8 rounded-full bg-primary/40"
                        style={{
                            animation: 'skeleton-pulse 1.2s ease-in-out infinite 0.3s',
                        }}
                    />
                </div>

                {/* Shimmer bars */}
                <div className="space-y-3 w-64 mx-auto">
                    <div
                        className="h-3 bg-gray-200 rounded-full"
                        style={{
                            animation: 'skeleton-shimmer 1.5s ease-in-out infinite',
                            background: 'linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)',
                            backgroundSize: '200% 100%',
                        }}
                    />
                    <div
                        className="h-3 bg-gray-200 rounded-full w-3/4 mx-auto"
                        style={{
                            animation: 'skeleton-shimmer 1.5s ease-in-out infinite 0.2s',
                            background: 'linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)',
                            backgroundSize: '200% 100%',
                        }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes skeleton-pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.15); opacity: 1; }
                }
                @keyframes skeleton-shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </div>
    );
}
