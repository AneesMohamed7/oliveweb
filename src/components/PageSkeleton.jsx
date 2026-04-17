import React from 'react';
import oliveLogo from '../assets/olive-logo.png';

export default function PageSkeleton() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center text-center">

                {/* Logo */}
                <img
                    src={oliveLogo}
                    alt="Olive Dental"
                    style={{
                        height: "55px",
                        marginBottom: "20px",
                        objectFit: "contain",
                        opacity: 0.9
                    }}
                />

                {/* Loader Ring */}
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "3px solid #e5e7eb",
                        borderTop: "3px solid #0ea5e9", // primary color
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                        marginBottom: "16px"
                    }}
                />

                {/* Loading Text */}
                <p
                    style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        fontWeight: 500,
                        letterSpacing: "0.3px"
                    }}
                >
                    Loading your experience...
                </p>

                {/* Sub shimmer line */}
                <div
                    style={{
                        marginTop: "12px",
                        width: "160px",
                        height: "6px",
                        borderRadius: "999px",
                        background: "linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.5s infinite"
                    }}
                />

            </div>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </div>
    );
}