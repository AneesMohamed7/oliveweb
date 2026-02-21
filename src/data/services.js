import { Smile, Anchor, Sparkles, HeartPulse, Sun, Crown, Baby, Syringe, Droplets, CircleDot, Waves } from 'lucide-react';

// ─── DENTAL SERVICES ───────────────────────────────────────────────
export const dentalServices = [
    {
        id: 'implants',
        title: 'Dental Implants',
        category: 'dental',
        type: 'core',
        description: 'Precision-placed titanium implants using advanced digital planning for permanent, natural-looking tooth restoration with minimal discomfort and maximum longevity.',
        icon: Anchor,
        image: '/images/implants-solution.jpg',
        link: '/treatments/implants'
    },
    {
        id: 'aligners',
        title: 'Clear Aligners',
        category: 'dental',
        type: 'core',
        description: 'Digitally crafted invisible aligners for precise teeth straightening — comfortable, removable, and designed for predictable results without traditional braces.',
        icon: Smile,
        image: '/images/aligner-lifestyle.jpg',
        link: '/treatments/aligners'
    },
    {
        id: 'smile-makeover',
        title: 'Smile Makeover',
        category: 'dental',
        type: 'core',
        description: 'Comprehensive smile transformation combining veneers, whitening, and alignment — tailored with digital design for a naturally stunning, confident smile.',
        icon: Sparkles,
        image: '/images/veneers-solution.jpg',
        link: '/treatments/veneers'
    },
    {
        id: 'rct',
        title: 'Root Canal Treatment',
        category: 'dental',
        type: 'core',
        description: 'Advanced endodontic care using rotary instruments and apex locators for painless, precise root canal therapy that preserves your natural tooth structure.',
        icon: HeartPulse,
        image: '/images/service-rct.jpg',
        link: '/dental-treatments'
    },
    {
        id: 'veneers',
        title: 'Veneers',
        category: 'dental',
        type: 'secondary',
        description: 'Ultra-thin porcelain shells custom-crafted to refine tooth shape, colour, and alignment for a flawless, natural-looking smile.',
        icon: Sparkles,
        image: '/images/veneers-solution.jpg',
        link: '/treatments/veneers'
    },
    {
        id: 'crowns',
        title: 'Crowns & Bridges',
        category: 'dental',
        type: 'secondary',
        description: 'High-quality Zirconia and ceramic restorations to rebuild damaged teeth and bridge gaps with precision-fitted, long-lasting results.',
        icon: Crown,
        image: '/images/service-bridges.jpg',
        link: '/dental-treatments'
    },
    {
        id: 'whitening',
        title: 'Teeth Whitening',
        category: 'dental',
        type: 'secondary',
        description: 'Professional laser whitening to brighten your smile by several shades in a single, comfortable clinical session.',
        icon: Sun,
        image: '/images/service-whitening.jpg',
        link: '/dental-treatments'
    },
    {
        id: 'kids',
        title: 'Kids Dentistry',
        category: 'dental',
        type: 'secondary',
        description: 'Gentle, fearless dental care for children — including fluoride application, sealants, and early habit correction in a child-friendly environment.',
        icon: Baby,
        image: '/images/service-kids.jpg',
        link: '/dental-treatments'
    },
    {
        id: 'surgery',
        title: 'Wisdom Tooth Removal',
        category: 'dental',
        type: 'secondary',
        description: 'Painless extraction of impacted wisdom teeth by expert oral surgeons using minimally invasive techniques.',
        icon: Syringe,
        image: '/images/service-surgery.jpg',
        link: '/dental-treatments'
    }
];

// ─── FACIAL AESTHETIC SERVICES ─────────────────────────────────────
export const facialServices = [
    // CORE (high-ticket, premium)
    {
        id: 'prp',
        title: 'PRP Skin Rejuvenation',
        category: 'facial',
        type: 'core',
        description: 'Platelet-rich plasma therapy stimulates deep collagen production for natural skin tightening and rejuvenation — medically supervised for safe, lasting results.',
        icon: Droplets,
        image: '/images/facial-prp.jpg',
        link: '/facial-aesthetics'
    },
    {
        id: 'botox',
        title: 'Botox & Dermal Fillers',
        category: 'facial',
        type: 'core',
        description: 'Precision-administered anti-ageing injections to smooth fine lines and restore volume — delivering subtle, natural-looking facial refinement under clinical supervision.',
        icon: Syringe,
        image: '/images/facial-botox.jpg',
        link: '/facial-aesthetics'
    },
    {
        id: 'microneedling',
        title: 'Microneedling',
        category: 'facial',
        type: 'core',
        description: 'Controlled micro-injuries trigger the skin\'s natural healing response, boosting collagen and reducing scars, pores, and fine lines with minimal downtime.',
        icon: CircleDot,
        image: '/images/facial-microneedling.jpg',
        link: '/facial-aesthetics'
    },
    {
        id: 'thread-lift',
        title: 'Thread Lift',
        category: 'facial',
        type: 'core',
        description: 'Non-surgical face lifting using dissolvable threads to tighten sagging skin and stimulate collagen — a minimally invasive alternative to traditional surgery.',
        icon: Sparkles,
        image: '/images/facial-threadlift.jpg',
        link: '/facial-aesthetics'
    },
    {
        id: 'hydrafacial',
        title: 'HydraFacial',
        category: 'facial',
        type: 'core',
        description: 'Multi-step facial treatment combining deep cleansing, exfoliation, extraction, and hydration for instantly radiant, revitalised skin in a single session.',
        icon: Waves,
        image: '/images/facial-hydrafacial.jpg',
        link: '/facial-aesthetics'
    },
    // ADVANCED
    {
        id: 'chemical-peels',
        title: 'Chemical Peels',
        category: 'facial',
        type: 'advanced',
        description: 'Medical-grade peels to improve skin texture, reduce pigmentation, and promote cellular renewal.'
    },
    {
        id: 'skin-resurfacing',
        title: 'Skin Resurfacing',
        category: 'facial',
        type: 'advanced',
        description: 'Advanced techniques to smooth uneven skin tone, reduce scarring, and restore a youthful complexion.'
    },
    {
        id: 'mesotherapy',
        title: 'Mesotherapy',
        category: 'facial',
        type: 'advanced',
        description: 'Targeted microinjections delivering vitamins and hyaluronic acid deep into the skin for intensive hydration and glow.'
    },
    {
        id: 'lip-pigmentation',
        title: 'Lip Pigmentation',
        category: 'facial',
        type: 'advanced',
        description: 'Gentle depigmentation therapy to restore natural, even-toned lip colour with clinical precision.'
    },
    {
        id: 'microblading',
        title: 'Microblading',
        category: 'facial',
        type: 'advanced',
        description: 'Semi-permanent eyebrow enhancement using fine strokes for naturally defined, fuller brows.'
    },
    // MINOR
    {
        id: 'wart-removal',
        title: 'Wart Removal',
        category: 'facial',
        type: 'minor',
        description: 'Safe clinical removal of warts.'
    },
    {
        id: 'mole-removal',
        title: 'Mole Removal',
        category: 'facial',
        type: 'minor',
        description: 'Precise mole excision with minimal scarring.'
    },
    {
        id: 'skin-tag',
        title: 'Skin Tag Removal',
        category: 'facial',
        type: 'minor',
        description: 'Quick, painless skin tag removal.'
    },
    {
        id: 'dandruff',
        title: 'Dandruff Treatment',
        category: 'facial',
        type: 'minor',
        description: 'Clinical scalp therapy for persistent dandruff.'
    },
    {
        id: 'under-eye',
        title: 'Under Eye Treatment',
        category: 'facial',
        type: 'minor',
        description: 'Targeted treatment for dark circles and puffiness.'
    },
    {
        id: 'dermaplaning',
        title: 'Dermaplaning',
        category: 'facial',
        type: 'minor',
        description: 'Professional exfoliation for smooth, radiant skin.'
    }
];

// Combined for backwards compatibility
export const services = [...dentalServices.filter(s => s.type === 'core' || s.type === 'secondary'), ...facialServices.filter(s => s.type === 'core')];
