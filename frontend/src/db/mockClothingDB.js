/* ================= TOPS (NECKLINES + STRUCTURE) ================= */

export const necklineItems = [
    // OPEN + VERTICAL
    {
        id: 101, category: "top", featureType: "neckline", value: "v-neck",
        attributes: {
            openness: "open", vertical: "strong", shoulderEffect: "reduces", symmetry: "symmetric",
            sleeve: "short", length: "waist", fit: "regular", color: "navy", print: "none", printType: "solid"
        }
    },
    {
        id: 102, category: "top", featureType: "neckline", value: "deep-v",
        attributes: {
            openness: "very-open", vertical: "strong", shoulderEffect: "reduces", symmetry: "symmetric",
            sleeve: "sleeveless", length: "cropped", fit: "slim", color: "black", print: "none"
        }
    },
    {
        id: 103, category: "top", featureType: "neckline", value: "plunging",
        attributes: {
            openness: "very-open", vertical: "strong", shoulderEffect: "reduces", symmetry: "symmetric",
            sleeve: "long", length: "hip", fit: "relaxed", color: "emerald", print: "none"
        }
    },
    {
        id: 104, category: "top", featureType: "neckline", value: "surplice",
        attributes: {
            openness: "open", vertical: "diagonal", shoulderEffect: "reduces", symmetry: "diagonal",
            sleeve: "three-quarter", length: "waist", fit: "wrap", color: "burgundy", print: "floral", printType: "dainty", printColor: "white"
        }
    },
    {
        id: 105, category: "top", featureType: "neckline", value: "u-neck",
        attributes: {
            openness: "open", vertical: "moderate", shoulderEffect: "neutral", symmetry: "symmetric",
            sleeve: "short", length: "hip", fit: "slim", color: "white", print: "none"
        }
    },
    {
        id: 106, category: "top", featureType: "neckline", value: "scoop",
        attributes: {
            openness: "semi-open", vertical: "moderate", shoulderEffect: "neutral", symmetry: "symmetric",
            sleeve: "cap", length: "waist", fit: "regular", color: "blush", print: "none"
        }
    },
    {
        id: 107, category: "top", featureType: "neckline", value: "keyhole",
        attributes: {
            openness: "semi-open", vertical: "moderate", shoulderEffect: "neutral", symmetry: "symmetric",
            sleeve: "long", length: "waist", fit: "regular", color: "ivory", print: "none"
        }
    },

    // BALANCED / STRUCTURED
    {
        id: 108, category: "top", featureType: "neckline", value: "square",
        attributes: {
            openness: "semi-open", vertical: "low", shoulderEffect: "balanced", symmetry: "symmetric",
            sleeve: "puff", length: "cropped", fit: "structured", color: "lavender", print: "toile", printType: "delicate", printColor: "blue"
        }
    },
    {
        id: 109, category: "top", featureType: "neckline", value: "sweetheart",
        attributes: {
            openness: "open", vertical: "curved", shoulderEffect: "balanced", symmetry: "symmetric",
            sleeve: "sleeveless", length: "waist", fit: "corset", color: "red", print: "none"
        }
    },
    {
        id: 110, category: "top", featureType: "neckline", value: "queen-anne",
        attributes: {
            openness: "semi-open", vertical: "structured", shoulderEffect: "balanced", symmetry: "symmetric",
            sleeve: "long", length: "waist", fit: "structured", color: "charcoal", print: "none"
        }
    },

    // CLOSED / SHOULDER-EMPHASIZING
    {
        id: 112, category: "top", featureType: "neckline", value: "crew",
        attributes: {
            openness: "closed", vertical: "none", shoulderEffect: "increases", symmetry: "symmetric",
            sleeve: "short", length: "hip", fit: "relaxed", color: "grey-melange", print: "graphic", printType: "bold", printColor: "black"
        }
    },
    {
        id: 114, category: "top", featureType: "neckline", value: "boat",
        attributes: {
            openness: "closed", vertical: "horizontal", shoulderEffect: "strongly-increases", symmetry: "symmetric",
            sleeve: "three-quarter", length: "waist", fit: "slim", color: "striped-navy", print: "breton", printType: "classic", printColor: "white"
        }
    },
    {
        id: 117, category: "top", featureType: "neckline", value: "turtleneck",
        attributes: {
            openness: "closed", vertical: "blocked", shoulderEffect: "strongly-increases", symmetry: "symmetric",
            sleeve: "long", length: "hip", fit: "fitted", color: "camel", print: "none"
        }
    },
    {
        id: 118, category: "top", featureType: "neckline", value: "halter",
        attributes: {
            openness: "open", vertical: "none", shoulderEffect: "very-high", symmetry: "symmetric",
            sleeve: "sleeveless", length: "cropped", fit: "fitted", color: "gold", print: "none"
        }
    },

    // ASYMMETRIC / DIRECTIONAL
    {
        id: 119, category: "top", featureType: "neckline", value: "one-shoulder",
        attributes: {
            openness: "open", vertical: "diagonal", shoulderEffect: "high", symmetry: "asymmetric",
            sleeve: "sleeveless", length: "waist", fit: "slim", color: "black", print: "none"
        }
    },
    {
        id: 121, category: "top", featureType: "neckline", value: "off-shoulder",
        attributes: {
            openness: "open", vertical: "horizontal", shoulderEffect: "very-high", symmetry: "symmetric",
            sleeve: "long-flared", length: "waist", fit: "relaxed", color: "white", print: "none"
        }
    }
];


/* ================= BOTTOMS (FIT + RISE + STYLE) ================= */

export const bottomItems = [
    // JEANS & DENIM
    {
        id: 201, category: "bottom", featureType: "fit", value: "skinny-jeans",
        attributes: { volume: "very-slim", taper: "strong", structure: "structured", rise: "high", color: "dark-indigo", design: "plain", wash: "raw-indigo" }
    },
    {
        id: 205, category: "bottom", featureType: "fit", value: "straight-jeans",
        attributes: { volume: "straight", taper: "none", structure: "structured", rise: "mid", color: "classic-blue", design: "plain", wash: "medium-wash" }
    },
    {
        id: 211, category: "bottom", featureType: "fit", value: "baggy-jeans",
        attributes: { volume: "very-wide", taper: "none", structure: "unstructured", rise: "low", color: "light-blue", design: "plain", wash: "acid-wash" }
    },
    {
        id: 212, category: "bottom", featureType: "fit", value: "wide-leg-jeans",
        attributes: { volume: "wide", taper: "none", structure: "structured", rise: "high", color: "black", design: "plain", wash: "dark-wash" }
    },
    {
        id: 216, category: "bottom", featureType: "fit", value: "flare-jeans",
        attributes: { volume: "wide-hem", taper: "reverse", structure: "structured", rise: "high", color: "vintage-blue", design: "plain", wash: "distressed" }
    },

    // CARGOS & PARACHUTE (NEW)
    {
        id: 230, category: "bottom", featureType: "fit", value: "utility-cargos",
        attributes: { volume: "wide", taper: "cuffed", structure: "heavy-cotton", rise: "mid", color: "olive-drab", design: "cargo-pockets", wash: "enzyme-wash" }
    },
    {
        id: 231, category: "bottom", featureType: "fit", value: "parachute-pants",
        attributes: { volume: "extreme-wide", taper: "adjustable", structure: "lightweight", rise: "low", color: "sand", design: "toggle-drawstrings", wash: "matte" }
    },

    // TAILORED & CHINOS
    {
        id: 232, category: "bottom", featureType: "fit", value: "trouser-pants",
        attributes: { volume: "straight", taper: "none", structure: "tailored", rise: "high", color: "beige", design: "front-pleat", wash: "crisp-linen" }
    },
    {
        id: 233, category: "bottom", featureType: "fit", value: "tapered-chinos",
        attributes: { volume: "slim", taper: "moderate", structure: "twill", rise: "mid", color: "navy", design: "plain", wash: "not-denim" }
    },

    // SKIRTS & DRESSES (AS BOTTOMS)
    {
        id: 240, category: "bottom", featureType: "fit", value: "slip-midi-skirt",
        attributes: { volume: "fluid", taper: "none", structure: "bias-cut", rise: "high", color: "champagne", design: "satin-finish", wash: "silk" }
    },
    {
        id: 241, category: "bottom", featureType: "fit", value: "tennis-skirt",
        attributes: { volume: "a-line", taper: "flared", structure: "pleated", rise: "high", color: "white", design: "knife-pleats", wash: "sporty" }
    },
    {
        id: 242, category: "bottom", featureType: "fit", value: "denim-maxi-skirt",
        attributes: { volume: "straight", taper: "none", structure: "rigid", rise: "mid", color: "distressed-blue", design: "front-slit", wash: "heavy-fading" }
    },

    // ATHLEISURE
    {
        id: 250, category: "bottom", featureType: "fit", value: "flare-leggings",
        attributes: { volume: "slim-to-flare", taper: "reverse", structure: "stretch", rise: "ultra-high", color: "black", design: "plain", wash: "performance-matte" }
    },
    {
        id: 251, category: "bottom", featureType: "fit", value: "baggy-joggers",
        attributes: { volume: "relaxed", taper: "cuffed", structure: "fleece", rise: "mid", color: "heather-grey", design: "chunky-drawstring", wash: "soft-brushed" }
    }
];

export const clothingItems = [
    ...necklineItems,
    ...bottomItems
];

/* ================= PRIORITY MATRIX ================= */

export const priorityMatrix = [
    /* ================= TOPS ================= */
    { clothingId: 101, featureId: "strongShoulderDominant", score: 10, ruleType: "MINIMIZE_WIDTH" },
    { clothingId: 101, featureId: "denseUpperTorso", score: 8, ruleType: "MINIMIZE_WIDTH" },
    { clothingId: 101, featureId: "shortTorso", score: 8, ruleType: "ELONGATE_VERTICAL" },

    { clothingId: 104, featureId: "strongShoulderDominant", score: 9, ruleType: "MINIMIZE_WIDTH" },
    { clothingId: 104, featureId: "stronglyCurvy", score: 10, ruleType: "DEFINE_WAIST" },

    { clothingId: 105, featureId: "denseUpperTorso", score: 10, ruleType: "MINIMIZE_WIDTH" },
    { clothingId: 108, featureId: "blocky", score: 9, ruleType: "MAXIMIZE_WIDTH" },
    { clothingId: 109, featureId: "blocky", score: 10, ruleType: "MAXIMIZE_WIDTH" },

    { clothingId: 114, featureId: "strongHipDominant", score: 12, ruleType: "MAXIMIZE_WIDTH" },
    { clothingId: 114, featureId: "narrowPelvis", score: 8, ruleType: "MAXIMIZE_WIDTH" },

    { clothingId: 117, featureId: "longTorso", score: 10, ruleType: "SHORTEN_VERTICAL" },
    { clothingId: 117, featureId: "lightUpperTorso", score: 8, ruleType: "MAXIMIZE_WIDTH" },

    { clothingId: 121, featureId: "strongHipDominant", score: 10, ruleType: "MAXIMIZE_WIDTH" },

    /* ================= TOPS: AVOIDANCE MATCHES ================= */
    { clothingId: 114, featureId: "strongShoulderDominant", score: -15, ruleType: "MINIMIZE_EMPHASIS" },
    { clothingId: 114, featureId: "denseUpperTorso", score: -10, ruleType: "MINIMIZE_EMPHASIS" },

    { clothingId: 117, featureId: "shortTorso", score: -10, ruleType: "AVOID_VERTICAL_BREAK" },
    { clothingId: 117, featureId: "denseUpperTorso", score: -8, ruleType: "AVOID_VOLUME_OVERLOAD" },

    { clothingId: 121, featureId: "strongShoulderDominant", score: -12, ruleType: "MINIMIZE_EMPHASIS" },
    { clothingId: 112, featureId: "denseUpperTorso", score: -7, ruleType: "MINIMIZE_EMPHASIS" },
    { clothingId: 118, featureId: "strongShoulderDominant", score: -8, ruleType: "MINIMIZE_EMPHASIS" },

    /* ================= BOTTOMS ================= */
    { clothingId: 212, featureId: "strongShoulderDominant", score: 15, ruleType: "SILHOUETTE_ANCHOR" },
    { clothingId: 212, featureId: "voluminousThighs", score: 12, ruleType: "ACCOMMODATE_VOLUME" },
    { clothingId: 212, featureId: "strongHipDominant", score: 10, ruleType: "BALANCE_VOLUME" },

    { clothingId: 216, featureId: "strongShoulderDominant", score: 12, ruleType: "SILHOUETTE_ANCHOR" },
    { clothingId: 216, featureId: "strongHipDominant", score: 12, ruleType: "BALANCE_VOLUME" },
    { clothingId: 216, featureId: "voluminousThighs", score: 10, ruleType: "BALANCE_VOLUME" },

    { clothingId: 230, featureId: "strongShoulderDominant", score: 14, ruleType: "SILHOUETTE_ANCHOR" },
    { clothingId: 230, featureId: "narrowPelvis", score: 10, ruleType: "MAXIMIZE_WIDTH" },

    { clothingId: 231, featureId: "strongShoulderDominant", score: 12, ruleType: "SILHOUETTE_ANCHOR" },

    { clothingId: 232, featureId: "shortLegs", score: 10, ruleType: "ELONGATE_VERTICAL" },
    { clothingId: 232, featureId: "straightThigh", score: 12, ruleType: "COLUMN_EFFECT" },

    { clothingId: 201, featureId: "balancedFrame", score: 8, ruleType: "DEFINE_WAIST" },
    { clothingId: 205, featureId: "blocky", score: 10, ruleType: "COLUMN_EFFECT" },

    /* ================= BOTTOMS: AVOIDANCE MATCHES ================= */
    { clothingId: 201, featureId: "strongShoulderDominant", score: -15, ruleType: "AVOID_VOLUME_OVERLOAD" },
    { clothingId: 201, featureId: "voluminousThighs", score: -10, ruleType: "MINIMIZE_EMPHASIS" },

    { clothingId: 211, featureId: "shortLegs", score: -8, ruleType: "AVOID_VERTICAL_BREAK" },

    { clothingId: 232, featureId: "voluminousThighs", score: -5, ruleType: "MINIMIZE_EMPHASIS" }
];
