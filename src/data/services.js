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
        image: '/images/smile-with-aligner.webp',
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
        type: 'secondary',
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
        description: 'Harnesses your own platelet-rich plasma to stimulate collagen production, leaving skin firmer, brighter, and visibly younger with zero synthetic additives.',
        icon: Droplets,
        image: '/images/prpskin-rejuvenation.webp',
        link: '/treatments/prp'
    },
    {
        id: 'botox',
        title: 'Botox & Dermal Fillers',
        category: 'facial',
        type: 'core',
        description: 'Expertly placed injections smooth expression lines and restore lost facial volume, delivering refreshed, natural-looking results that move with you.',
        icon: Syringe,
        image: '/images/botox-img.webp',
        link: '/treatments/botox'
    },
    {
        id: 'microneedling',
        title: 'Microneedling',
        category: 'facial',
        type: 'core',
        description: 'Controlled micro-injuries trigger your skin\'s natural repair process, visibly reducing acne scars, enlarged pores, and fine lines over a series of sessions.',
        icon: CircleDot,
        image: '/images/microneedling-img.webp',
        link: '/treatments/microneedling'
    },
    {
        id: 'bridal-makeover',
        title: 'Bridal Makeover',
        category: 'facial',
        type: 'core',
        description: 'A personalised pre-wedding transformation combining advanced facial treatments and dental aesthetics — designed so you look and feel flawless from every angle on your most important day.',
        icon: Crown,
        image: '/images/bridal-makeover.webp',
        link: '/treatments/bridal-makeover'
    },
    {
        id: 'thread-lift',
        title: 'Thread Lift',
        category: 'facial',
        type: 'core',
        description: 'Dissolvable threads are placed beneath the skin to lift and contour sagging areas, giving a subtle surgical-like result with minimal downtime.',
        icon: Sparkles,
        image: '/images/threadlift-img.webp',
        link: '/treatments/thread-lift'
    },
    {
        id: 'hydrafacial',
        title: 'HydraFacial',
        category: 'facial',
        type: 'core',
        description: 'A multi-step treatment that cleanses, extracts, and floods skin with nourishing serums — leaving your complexion deeply hydrated and visibly radiant in under an hour.',
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
        description: 'Medical-grade acids exfoliate damaged surface layers to fade pigmentation, smooth texture, and reveal fresher, more even-toned skin underneath.'
    },
    {
        id: 'skin-resurfacing',
        title: 'Skin Resurfacing',
        category: 'facial',
        type: 'advanced',
        icon: Activity,
        image: '/images/skinResurfesing-converted-from-jpg.webp',
        description: 'Targets uneven tone, acne scarring, and rough texture with precision resurfacing techniques that refine skin and restore a naturally smooth appearance.'
    },
    {
        id: 'mesotherapy',
        title: 'Mesotherapy',
        category: 'facial',
        type: 'advanced',
        icon: Droplets,
        image: '/images/Mesotherapy.webp',
        description: 'A blend of vitamins, minerals, and hyaluronic acid is microinjected into the skin to deeply hydrate, boost radiance, and slow visible signs of ageing.'
    },
    {
        id: 'lip-pigmentation',
        title: 'Lip Pigmentation',
        category: 'facial',
        type: 'advanced',
        icon: Feather,
        image: '/images/lippigmentation.jpg',
        description: 'Corrects uneven or darkened lip tone using targeted treatment, restoring a naturally fuller, healthier colour with long-lasting results.'
    },
    {
        id: 'microblading',
        title: 'Microblading',
        category: 'facial',
        type: 'advanced',
        icon: Scissors,
        image: '/images/Microblading.webp',
        description: 'Ultra-fine hair-stroke technique deposits pigment into the brows to create realistic, fuller-looking brows tailored precisely to your face shape.'
    },

    // MINOR
    {
        id: 'wart-removal',
        title: 'Wart Removal',
        category: 'facial',
        type: 'minor',
        icon: CircleDot,
        image: '/images/Wart Removal1.webp',
        description: 'Fast, safe, and effective removal of common and plantar warts using clinically proven methods with minimal discomfort and quick recovery.'
    },
    {
        id: 'mole-removal',
        title: 'Mole Removal',
        category: 'facial',
        type: 'minor',
        icon: CircleDot,
        image: '/images/moleRemove.webp',
        description: 'Precise surgical or laser removal of unwanted moles, performed with careful attention to minimise scarring and ensure clean, smooth healing.'
    },
    {
        id: 'skin-tag',
        title: 'Skin Tag Removal',
        category: 'facial',
        type: 'minor',
        icon: CircleDot,
        image: '/images/prpskin-rejuvenation.webp',
        description: 'Quick in-clinic procedure to painlessly remove skin tags from the face or body, leaving the surrounding skin completely unaffected.'
    },
    {
        id: 'dandruff',
        title: 'Dandruff Treatment',
        category: 'facial',
        type: 'minor',
        icon: Leaf,
        image: '/images/dandruffRemovalTreatment.webp',
        description: 'A targeted scalp therapy that addresses the root causes of dandruff, reducing flaking, itchiness, and irritation for long-term scalp health.'
    },
    {
        id: 'under-eye',
        title: 'Under Eye Treatment',
        category: 'facial',
        type: 'minor',
        icon: Eye,
        image: '/images/underEyeTreatment.webp',
        description: 'Combines targeted fillers or topical therapy to reduce dark circles, fine lines, and puffiness for a more rested, refreshed appearance.'
    },
    {
        id: 'dermaplaning',
        title: 'Dermaplaning',
        category: 'facial',
        type: 'minor',
        icon: Sparkles,
        image: '/images/dermaplaningtreatment.webp',
        description: 'A gentle blade exfoliation technique that removes dead skin cells and vellus hair, instantly revealing smoother, brighter skin with better product absorption.'
    }
];

// Combined for backwards compatibility
export const services = [...dentalServices.filter(s => s.type === 'core' || s.type === 'secondary'), ...facialServices.filter(s => s.type === 'core')];
