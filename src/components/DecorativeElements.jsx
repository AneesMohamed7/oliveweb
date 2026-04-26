import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated background blobs for a modern mesh gradient effect.
 */
export function MeshGlow({ className = "" }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-sky-400/5 blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -70, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-blue-400/5 blur-[110px]"
            />
        </div>
    );
}

/**
 * Subtle dotted grid pattern for background texture.
 */
export function GridPattern({ className = "", opacity = 0.4 }) {
    return (
        <div 
            className={`absolute inset-0 pointer-events-none -z-10 ${className}`}
            style={{ 
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
                opacity: opacity
            }}
        />
    );
}

/**
 * Large background text for a high-end editorial feel.
 */
export function BackgroundText({ text, className = "" }) {
    return (
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10 ${className}`}>
            <span className="text-[20vw] font-black text-gray-200/30 leading-none whitespace-nowrap tracking-tighter">
                {text}
            </span>
        </div>
    );
}

/**
 * Wrapper for subtle floating animations.
 */
export function FloatingElement({ children, delay = 0, duration = 6, yOffset = 20, className = "" }) {
    return (
        <motion.div
            animate={{
                y: [0, yOffset, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
