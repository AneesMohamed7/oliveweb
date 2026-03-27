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
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/implants'
    },
    {
        id: 'aligners',
        title: 'Clear Aligners',
        category: 'dental',
        type: 'core',
        description: 'Digitally crafted invisible aligners for precise teeth straightening — comfortable, removable, and designed for predictable results without traditional braces.',
        icon: Smile,
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/aligners'
    },
    {
        id: 'smile-makeover',
        title: 'Smile Makeover',
        category: 'dental',
        type: 'core',
        description: 'Comprehensive smile transformation combining veneers, whitening, and alignment — tailored with digital design for a naturally stunning, confident smile.',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/veneers'
    },
    {
        id: 'rct',
        title: 'Root Canal Treatment',
        category: 'dental',
        type: 'core',
        description: 'Advanced endodontic care using rotary instruments and apex locators for painless, precise root canal therapy that preserves your natural tooth structure.',
        icon: HeartPulse,
        image: 'https://images.unsplash.com/photo-1583912267550-d44d7a125e7e?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/root-canal'
    },
    {
        id: 'veneers',
        title: 'Veneers',
        category: 'dental',
        type: 'secondary',
        description: 'Ultra-thin porcelain shells custom-crafted to refine tooth shape, colour, and alignment for a flawless, natural-looking smile.',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/veneers'
    },
    {
        id: 'crowns',
        title: 'Crowns & Bridges',
        category: 'dental',
        type: 'secondary',
        description: 'High-quality Zirconia and ceramic restorations to rebuild damaged teeth and bridge gaps with precision-fitted, long-lasting results.',
        icon: Crown,
        image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/crowns-bridges'
    },
    {
        id: 'whitening',
        title: 'Teeth Whitening',
        category: 'dental',
        type: 'secondary',
        description: 'Professional laser whitening to brighten your smile by several shades in a single, comfortable clinical session.',
        icon: Sun,
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/teeth-whitening'
    },
    {
        id: 'kids',
        title: 'Kids Dentistry',
        category: 'dental',
        type: 'secondary',
        description: 'Gentle, fearless dental care for children — including fluoride application, sealants, and early habit correction in a child-friendly environment.',
        icon: Baby,
        image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/kids-dentistry'
    },
    {
        id: 'surgery',
        title: 'Wisdom Tooth Removal',
        category: 'dental',
        type: 'secondary',
        description: 'Painless extraction of impacted wisdom teeth by expert oral surgeons using minimally invasive techniques.',
        icon: Syringe,
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/wisdom-tooth'
    },
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
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/prp'
    },
    {
        id: 'botox',
        title: 'Botox & Dermal Fillers',
        category: 'facial',
        type: 'core',
        description: 'Precision-administered anti-ageing injections to smooth fine lines and restore volume — delivering subtle, natural-looking facial refinement under clinical supervision.',
        icon: Syringe,
        image: 'https://images.unsplash.com/photo-1522335789203-aa9fb3ad2fda?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/botox'
    },
    {
        id: 'microneedling',
        title: 'Microneedling',
        category: 'facial',
        type: 'core',
        description: 'Controlled micro-injuries trigger the skin\'s natural healing response, boosting collagen and reducing scars, pores, and fine lines with minimal downtime.',
        icon: CircleDot,
        image: 'https://images.unsplash.com/photo-1614806687383-29471f0084ba?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/microneedling'
    },
    {
        id: 'thread-lift',
        title: 'Thread Lift',
        category: 'facial',
        type: 'core',
        description: 'Non-surgical face lifting using dissolvable threads to tighten sagging skin and stimulate collagen — a minimally invasive alternative to traditional surgery.',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/thread-lift'
    },
    {
        id: 'hydrafacial',
        title: 'HydraFacial',
        category: 'facial',
        type: 'core',
        description: 'Multi-step facial treatment combining deep cleansing, exfoliation, extraction, and hydration for instantly radiant, revitalised skin in a single session.',
        icon: Waves,
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
        link: '/treatments/hydrafacial'
    },
    // ADVANCED
    {
        id: 'chemical-peels',
        title: 'Chemical Peels',
        category: 'facial',
        type: 'advanced',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
        description: 'Medical-grade peels to improve skin texture, reduce pigmentation, and promote cellular renewal.'
    },
    {
        id: 'skin-resurfacing',
        title: 'Skin Resurfacing',
        category: 'facial',
        type: 'advanced',
        image: 'https://images.unsplash.com/photo-1614806687383-29471f0084ba?q=80&w=800&auto=format&fit=crop',
        description: 'Advanced techniques to smooth uneven skin tone, reduce scarring, and restore a youthful complexion.'
    },
    {
        id: 'mesotherapy',
        title: 'Mesotherapy',
        category: 'facial',
        type: 'advanced',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=80&w=800&auto=format&fit=crop',
        description: 'Targeted microinjections delivering vitamins and hyaluronic acid deep into the skin for intensive hydration and glow.'
    },
    {
        id: 'lip-pigmentation',
        title: 'Lip Pigmentation',
        category: 'facial',
        type: 'advanced',
        image: 'https://images.unsplash.com/photo-1629532661574-8b8941fc360b?q=80&w=800&auto=format&fit=crop',
        description: 'Gentle depigmentation therapy to restore natural, even-toned lip colour with clinical precision.'
    },
    {
        id: 'microblading',
        title: 'Microblading',
        category: 'facial',
        type: 'advanced',
        image: 'https://images.unsplash.com/photo-1588698125556-9cd593845bbf?q=80&w=800&auto=format&fit=crop',
        description: 'Semi-permanent eyebrow enhancement using fine strokes for naturally defined, fuller brows.'
    },
    // MINOR
    {
        id: 'wart-removal',
        title: 'Wart Removal',
        category: 'facial',
        type: 'minor',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
        description: 'Safe clinical removal of warts.'
    },
    {
        id: 'mole-removal',
        title: 'Mole Removal',
        category: 'facial',
        type: 'minor',
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop',
        description: 'Precise mole excision with minimal scarring.'
    },
    {
        id: 'skin-tag',
        title: 'Skin Tag Removal',
        category: 'facial',
        type: 'minor',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
        description: 'Quick, painless skin tag removal.'
    },
    {
        id: 'dandruff',
        title: 'Dandruff Treatment',
        category: 'facial',
        type: 'minor',
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
        description: 'Clinical scalp therapy for persistent dandruff.'
    },
    {
        id: 'under-eye',
        title: 'Under Eye Treatment',
        category: 'facial',
        type: 'minor',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=80&w=800&auto=format&fit=crop',
        description: 'Targeted treatment for dark circles and puffiness.'
    },
    {
        id: 'dermaplaning',
        title: 'Dermaplaning',
        category: 'facial',
        type: 'minor',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
        description: 'Professional exfoliation for smooth, radiant skin.'
    }
];

// Combined for backwards compatibility
export const services = [...dentalServices.filter(s => s.type === 'core' || s.type === 'secondary'), ...facialServices.filter(s => s.type === 'core')];
