import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage — Production-grade image component with:
 * - Native loading="lazy" (overridable with eager prop)
 * - Required width/height to prevent CLS
 * - Optional LQIP blur-up effect
 * - Smooth fade-in on load
 * - fetchPriority support for LCP images
 */
export default function LazyImage({
    src,
    alt = '',
    width,
    height,
    className = '',
    eager = false,
    blur = false,
    fetchPriority,
    decoding = 'async',
    draggable,
    style = {},
    ...rest
}) {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef(null);

    // If the image is already cached, mark as loaded immediately
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
            setLoaded(true);
        }
    }, []);

    const blurStyle = blur
        ? {
            filter: loaded ? 'blur(0px)' : 'blur(20px)',
            transform: loaded ? 'scale(1)' : 'scale(1.1)',
            transition: 'filter 0.6s ease-out, transform 0.6s ease-out, opacity 0.6s ease-out',
            opacity: loaded ? 1 : 0.6,
            backgroundColor: '#e5e7eb', // gray-200 placeholder
        }
        : {
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
        };

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? 'eager' : 'lazy'}
            decoding={decoding}
            fetchpriority={fetchPriority}
            draggable={draggable}
            className={className}
            onLoad={() => setLoaded(true)}
            style={{ ...blurStyle, ...style }}
            {...rest}
        />
    );
}
