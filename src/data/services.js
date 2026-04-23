import {
    Smile, Anchor, Sparkles, HeartPulse, Sun, Crown, Baby, Syringe,
    Droplets, CircleDot, Waves, Leaf, Activity, Feather, Eye, Scissors
} from 'lucide-react';

// ─── DENTAL SERVICES ───────────────────────────────────────────────
export const dentalServices = [
    {
        id: 'implants',
        title: 'Dental Implants',
        category: 'dental',
        type: 'core',
        description: 'Precision-placed titanium implants using advanced digital planning for permanent, natural-looking tooth restoration with minimal discomfort and maximum longevity.',
        icon: Anchor,
        image: '/images/dentalimplant.webp',
        link: '/treatments/implants'
    },
    {
        id: 'aligners',
        title: 'Clear Aligners',
        category: 'dental',
        type: 'core',
        description: 'Digitally crafted invisible aligners for precise teeth straightening — comfortable, removable, and designed for predictable results without traditional braces.',
        icon: Smile,
        image: '/images/clearaligner-img (1).webp',
        link: '/treatments/aligners'
    },
    {
        id: 'smile-makeover',
        title: 'Smile Makeover',
        category: 'dental',
        type: 'core',
        description: 'Comprehensive smile transformation combining veneers, whitening, and alignment — tailored with digital design for a naturally stunning, confident smile.',
        icon: Sparkles,
        image: '/images/smileMakeOver-img.jpg',
        link: '/treatments/veneers'
    },
    {
        id: 'rct',
        title: 'Root Canal Treatment',
        category: 'dental',
        type: 'core',
        description: 'Advanced endodontic care using rotary instruments and apex locators for painless, precise root canal therapy that preserves your natural tooth structure.',
        icon: HeartPulse,
        image: '/images/rootCanal-img.png',
        link: '/treatments/root-canal'
    },
    {
        id: 'bridal-smile-design',
        title: 'Bridal Smile Design',
        category: 'dental',
        type: 'core',
        description: 'Pre-wedding smile enhancement plan including whitening, alignment, and aesthetic corrections designed for a confident bridal smile.',
        icon: Sparkles,
        image: '/images/bridal-smile.webp',
        link: '/treatments/bridal-smile'
    },
    {
        id: 'veneers',
        title: 'Veneers',
        category: 'dental',
        type: 'secondary',
        description: 'Ultra-thin porcelain shells custom-crafted to refine tooth shape, colour, and alignment for a flawless, natural-looking smile.',
        icon: Sparkles,
        image: '/images/veneers-treatment-img.webp',
        link: '/treatments/veneers'
    },
    {
        id: 'crowns',
        title: 'Crowns & Bridges',
        category: 'dental',
        type: 'secondary',
        description: 'High-quality Zirconia and ceramic restorations to rebuild damaged teeth and bridge gaps with precision-fitted, long-lasting results.',
        icon: Crown,
        image: '/images/crownbridge-treatment-img.webp',
        link: '/treatments/crowns-bridges'
    },
    {
        id: 'whitening',
        title: 'Teeth Whitening',
        category: 'dental',
        type: 'secondary',
        description: 'Professional laser whitening to brighten your smile by several shades in a single, comfortable clinical session.',
        icon: Sun,
        image: '/images/teethwhitening-img.webp',
        link: '/treatments/teeth-whitening'
    },
    {
        id: 'kids',
        title: 'Kids Dentistry',
        category: 'dental',
        type: 'secondary',
        description: 'Gentle, fearless dental care for children — including fluoride application, sealants, and early habit correction in a child-friendly environment.',
        icon: Baby,
        image: '/images/kidsdentistry-img.webp',
        link: '/treatments/kids-dentistry'
    },
    {
        id: 'surgery',
        title: 'Wisdom Tooth Removal',
        category: 'dental',
        type: 'secondary',
        description: 'Painless extraction of impacted wisdom teeth by expert oral surgeons using minimally invasive techniques.',
        icon: Syringe,
        image: '/images/wisdomtoothremoval-img.webp',
        link: '/treatments/wisdom-tooth'
    },
    {
        id: 'bonding',
        title: 'Composite Bonding',
        category: 'dental',
        type: 'secondary',
        description: 'Single-visit smile enhancement to repair chips, close gaps, and reshape teeth using artistic composite layering for immediate, natural results.',
        icon: Sparkles,
        image: '/images/beforeafter14.webp',
        link: '/treatments/bonding'
    },
];

// ─── FACIAL AESTHETIC SERVICES ─────────────────────────────────────
export const facialServices = [
    // CORE
    {
        id: 'prp',
        title: 'PRP Skin Rejuvenation',
        category: 'facial',
        type: 'core',
        description: 'Boosts collagen using your own growth factors for firmer, healthier skin.',
        icon: Droplets,
        image: '/images/prpskin-rejuvenation.webp',
        link: '/treatments/prp'
    },
    {
        id: 'botox',
        title: 'Botox & Dermal Fillers',
        category: 'facial',
        type: 'core',
        description: 'Smooths wrinkles and restores volume with precise, natural-looking results.',
        icon: Syringe,
        image: '/images/botox-img.webp',
        link: '/treatments/botox'
    },
    {
        id: 'microneedling',
        title: 'Microneedling',
        category: 'facial',
        type: 'core',
        description: 'Stimulates collagen to reduce scars, pores, and fine lines.',
        icon: CircleDot,
        image: '/images/microneedling-img.webp',
        link: '/treatments/microneedling'
    },
    {
        id: 'bridal-makeover',
        title: 'Bridal Makeover',
        category: 'facial',
        type: 'core',
        description: 'Comprehensive pre-wedding skin and smile transformation plan combining advanced facial treatments and dental aesthetics for a flawless, camera-ready look.',
        icon: Crown,
        image: '/images/bridal-makeover.webp',
        link: '/treatments/bridal-makeover'
    },
    {
        id: 'thread-lift',
        title: 'Thread Lift',
        category: 'facial',
        type: 'core',
        description: 'Lifts and tightens sagging skin without surgery.',
        icon: Sparkles,
        image: '/images/threadlift-img.webp',
        link: '/treatments/thread-lift'
    },
    {
        id: 'hydrafacial',
        title: 'HydraFacial',
        category: 'facial',
        type: 'core',
        description: 'Deep cleansing and hydration for instantly glowing skin.',
        icon: Waves,
        image: '/images/hydrafacial-img.webp',
        link: '/treatments/hydrafacial'
    },

    // ADVANCED
    {
        id: 'chemical-peels',
        title: 'Chemical Peels',
        category: 'facial',
        type: 'advanced',
        icon: Leaf,
        image: '/images/chemicalPeeling_converted.webp',
        description: 'Improves texture and reduces pigmentation with medical-grade exfoliation.'
    },
    {
        id: 'skin-resurfacing',
        title: 'Skin Resurfacing',
        category: 'facial',
        type: 'advanced',
        icon: Activity,
        image: '/images/skinResurfesing-converted-from-jpg.webp',
        description: 'Smoothens uneven skin and reduces scars for a refined appearance.'
    },
    {
        id: 'mesotherapy',
        title: 'Mesotherapy',
        category: 'facial',
        type: 'advanced',
        icon: Droplets,
        image: '/images/Mesotherapy.webp',
        description: 'Delivers nutrients deep into skin for hydration and glow.'
    },
    {
        id: 'lip-pigmentation',
        title: 'Lip Pigmentation',
        category: 'facial',
        type: 'advanced',
        icon: Feather,
        image: '/images/lippigmentation.jpg',
        description: 'Restores natural lip colour and improves tone evenly.'
    },
    {
        id: 'microblading',
        title: 'Microblading',
        category: 'facial',
        type: 'advanced',
        icon: Scissors,
        image: '/images/Microblading.webp',
        description: 'Creates fuller, natural-looking brows with fine strokes.'
    },

    // MINOR
    {
        id: 'wart-removal',
        title: 'Wart Removal',
        category: 'facial',
        type: 'minor',
        icon: CircleDot,
        image: '/images/Wart Removal1.webp',
        description: 'Safe and quick removal of unwanted skin growths.'
    },
    {
        id: 'mole-removal',
        title: 'Mole Removal',
        category: 'facial',
        type: 'minor',
        icon: CircleDot,
        image: '/images/moleRemove.webp',
        description: 'Precise removal with minimal scarring.'
    },
    {
        id: 'skin-tag',
        title: 'Skin Tag Removal',
        category: 'facial',
        type: 'minor',
        icon: CircleDot,
        image: '/images/prpskin-rejuvenation.webp',
        description: 'Quick and painless removal of skin tags.'
    },
    {
        id: 'dandruff',
        title: 'Dandruff Treatment',
        category: 'facial',
        type: 'minor',
        icon: Leaf,
        image: '/images/dandruffRemovalTreatment.webp',
        description: 'Targets scalp issues and controls recurring dandruff.'
    },
    {
        id: 'under-eye',
        title: 'Under Eye Treatment',
        category: 'facial',
        type: 'minor',
        icon: Eye,
        image: '/images/underEyeTreatment.webp',
        description: 'Reduces dark circles and under-eye puffiness.'
    },
    {
        id: 'dermaplaning',
        title: 'Dermaplaning',
        category: 'facial',
        type: 'minor',
        icon: Sparkles,
        image: '/images/dermaplaningtreatment.webp',
        description: 'Removes dead skin and peach fuzz for smoother skin.'
    }
];
// Combined for backwards compatibility
export const services = [...dentalServices.filter(s => s.type === 'core' || s.type === 'secondary'), ...facialServices.filter(s => s.type === 'core')];
