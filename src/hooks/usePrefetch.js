import { useCallback, useRef } from 'react';

/**
 * Route chunk prefetch map.
 * Maps route paths to their dynamic import functions.
 * Used by usePrefetch to preload route chunks on hover/focus.
 */
const routeImportMap = {
    '/about': () => import('../pages/About'),
    '/doctors': () => import('../pages/Doctors'),
    '/treatments': () => import('../pages/Treatments'),
    '/contact': () => import('../pages/Contact'),
    '/faq': () => import('../pages/FAQ'),
    '/gallery': () => import('../pages/Gallery'),
    '/dental-treatments': () => import('../pages/DentalTreatments'),
    '/facial-aesthetics': () => import('../pages/FacialAesthetics'),
    '/treatments/aligners': () => import('../pages/Aligners'),
    '/treatments/veneers': () => import('../pages/Veneers'),
    '/treatments/implants': () => import('../pages/Implants'),
    '/treatments/root-canal': () => import('../pages/RootCanal'),
    '/treatments/crowns-bridges': () => import('../pages/CrownsAndBridges'),
    '/treatments/teeth-whitening': () => import('../pages/TeethWhitening'),
    '/treatments/kids-dentistry': () => import('../pages/KidsDentistry'),
    '/treatments/wisdom-tooth': () => import('../pages/WisdomTooth'),
    '/treatments/prp': () => import('../pages/PRP'),
    '/treatments/botox': () => import('../pages/Botox'),
    '/treatments/microneedling': () => import('../pages/Microneedling'),
    '/treatments/thread-lift': () => import('../pages/ThreadLift'),
    '/treatments/hydrafacial': () => import('../pages/HydraFacial'),
};

// Track which routes have already been prefetched to avoid duplicate calls
const prefetchedRoutes = new Set();

/**
 * usePrefetch — Custom hook for route chunk prefetching.
 *
 * Returns event handlers to attach to Link components:
 *   const prefetchHandlers = usePrefetch('/about');
 *   <Link to="/about" {...prefetchHandlers}>About</Link>
 *
 * Prefetches:
 *   - On mouseEnter (hover) — instant load
 *   - On focus — keyboard nav support
 */
export default function usePrefetch(path) {
    const prefetched = useRef(false);

    const triggerPrefetch = useCallback(() => {
        if (prefetched.current || prefetchedRoutes.has(path)) return;

        const importFn = routeImportMap[path];
        if (importFn) {
            prefetched.current = true;
            prefetchedRoutes.add(path);
            importFn(); // Fire and forget — Webpack/Vite caches the chunk
        }
    }, [path]);

    return {
        onMouseEnter: triggerPrefetch,
        onFocus: triggerPrefetch,
    };
}

/**
 * prefetchOnIdle — Prefetch likely routes during idle time.
 * Call this once in App.jsx or main.jsx after initial render.
 */
export function prefetchOnIdle(routes = ['/about', '/treatments', '/contact', '/doctors']) {
    const idleCallback = typeof requestIdleCallback !== 'undefined'
        ? requestIdleCallback
        : (cb) => setTimeout(cb, 1000);

    idleCallback(() => {
        routes.forEach((path) => {
            if (prefetchedRoutes.has(path)) return;
            const importFn = routeImportMap[path];
            if (importFn) {
                prefetchedRoutes.add(path);
                importFn();
            }
        });
    });
}
