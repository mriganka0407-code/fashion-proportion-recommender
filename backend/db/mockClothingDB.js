/* ================= NECKLINES ================= */

export const necklineItems = [
    // OPEN + VERTICAL (best for broad shoulders / dense upper torso)
    {
        id: 101, category: "top", featureType: "neckline", value: "v-neck",
        attributes: { openness: "open", vertical: "strong", shoulderEffect: "reduces", symmetry: "symmetric" }
    },

    {
        id: 102, category: "top", featureType: "neckline", value: "deep-v",
        attributes: { openness: "very-open", vertical: "strong", shoulderEffect: "reduces", symmetry: "symmetric" }
    },

    {
        id: 103, category: "top", featureType: "neckline", value: "plunging",
        attributes: { openness: "very-open", vertical: "strong", shoulderEffect: "reduces", symmetry: "symmetric" }
    },

    {
        id: 104, category: "top", featureType: "neckline", value: "surplice",
        attributes: { openness: "open", vertical: "diagonal", shoulderEffect: "reduces", symmetry: "diagonal" }
    },

    {
        id: 105, category: "top", featureType: "neckline", value: "u-neck",
        attributes: { openness: "open", vertical: "moderate", shoulderEffect: "neutral", symmetry: "symmetric" }
    },

    {
        id: 106, category: "top", featureType: "neckline", value: "scoop",
        attributes: { openness: "semi-open", vertical: "moderate", shoulderEffect: "neutral", symmetry: "symmetric" }
    },

    {
        id: 107, category: "top", featureType: "neckline", value: "keyhole",
        attributes: { openness: "semi-open", vertical: "moderate", shoulderEffect: "neutral", symmetry: "symmetric" }
    },

    // BALANCED / STRUCTURED
    {
        id: 108, category: "top", featureType: "neckline", value: "square",
        attributes: { openness: "semi-open", vertical: "low", shoulderEffect: "balanced", symmetry: "symmetric" }
    },

    {
        id: 109, category: "top", featureType: "neckline", value: "sweetheart",
        attributes: { openness: "open", vertical: "curved", shoulderEffect: "balanced", symmetry: "symmetric" }
    },

    {
        id: 110, category: "top", featureType: "neckline", value: "queen-anne",
        attributes: { openness: "semi-open", vertical: "structured", shoulderEffect: "balanced", symmetry: "symmetric" }
    },

    {
        id: 111, category: "top", featureType: "neckline", value: "apron",
        attributes: { openness: "semi-open", vertical: "structured", shoulderEffect: "neutral", symmetry: "symmetric" }
    },

    // CLOSED / SHOULDER-EMPHASIZING
    {
        id: 112, category: "top", featureType: "neckline", value: "crew",
        attributes: { openness: "closed", vertical: "none", shoulderEffect: "increases", symmetry: "symmetric" }
    },

    {
        id: 113, category: "top", featureType: "neckline", value: "round",
        attributes: { openness: "closed", vertical: "none", shoulderEffect: "increases", symmetry: "symmetric" }
    },

    {
        id: 114, category: "top", featureType: "neckline", value: "boat",
        attributes: { openness: "closed", vertical: "horizontal", shoulderEffect: "strongly-increases", symmetry: "symmetric" }
    },

    {
        id: 115, category: "top", featureType: "neckline", value: "jewel",
        attributes: { openness: "closed", vertical: "none", shoulderEffect: "neutral", symmetry: "symmetric" }
    },

    {
        id: 116, category: "top", featureType: "neckline", value: "mock",
        attributes: { openness: "closed", vertical: "blocked", shoulderEffect: "increases", symmetry: "symmetric" }
    },

    {
        id: 117, category: "top", featureType: "neckline", value: "turtleneck",
        attributes: { openness: "closed", vertical: "blocked", shoulderEffect: "strongly-increases", symmetry: "symmetric" }
    },

    {
        id: 118, category: "top", featureType: "neckline", value: "halter",
        attributes: { openness: "open", vertical: "none", shoulderEffect: "very-high", symmetry: "symmetric" }
    },

    // ASYMMETRIC / DIRECTIONAL
    {
        id: 119, category: "top", featureType: "neckline", value: "one-shoulder",
        attributes: { openness: "open", vertical: "diagonal", shoulderEffect: "high", symmetry: "asymmetric" }
    },

    {
        id: 120, category: "top", featureType: "neckline", value: "asymmetrical",
        attributes: { openness: "semi-open", vertical: "diagonal", shoulderEffect: "variable", symmetry: "asymmetric" }
    },

    {
        id: 121, category: "top", featureType: "neckline", value: "off-shoulder",
        attributes: { openness: "open", vertical: "horizontal", shoulderEffect: "very-high", symmetry: "symmetric" }
    },

    // SOFT / DRAPED / ILLUSION
    {
        id: 122, category: "top", featureType: "neckline", value: "cowl",
        attributes: { openness: "open", vertical: "soft", shoulderEffect: "adds-bulk", symmetry: "symmetric" }
    },

    {
        id: 123, category: "top", featureType: "neckline", value: "illusion",
        attributes: { openness: "visual-open", vertical: "moderate", shoulderEffect: "neutral", symmetry: "symmetric" }
    },

    {
        id: 124, category: "top", featureType: "neckline", value: "tie-neck",
        attributes: { openness: "closed", vertical: "blocked", shoulderEffect: "adds-bulk", symmetry: "symmetric" }
    },

    // EXTRA VARIANTS
    {
        id: 125, category: "top", featureType: "neckline", value: "strapless",
        attributes: { openness: "very-open", vertical: "none", shoulderEffect: "very-high", symmetry: "symmetric" }
    },

    {
        id: 126, category: "top", featureType: "neckline", value: "scalloped",
        attributes: { openness: "semi-open", vertical: "curved", shoulderEffect: "neutral", symmetry: "symmetric" }
    },

    {
        id: 127, category: "top", featureType: "neckline", value: "convertible",
        attributes: { openness: "variable", vertical: "variable", shoulderEffect: "variable", symmetry: "variable" }
    }
];


/* ================= JEANS ================= */

export const jeansItems = [
    // VERY SLIM
    {
        id: 201, category: "bottom", featureType: "fit", value: "skinny",
        attributes: { volume: "very-slim", taper: "strong", structure: "structured" }
    },

    {
        id: 202, category: "bottom", featureType: "fit", value: "super-skinny",
        attributes: { volume: "very-slim", taper: "extreme", structure: "structured" }
    },

    {
        id: 203, category: "bottom", featureType: "fit", value: "jeggings",
        attributes: { volume: "very-slim", taper: "strong", structure: "stretch" }
    },

    {
        id: 204, category: "bottom", featureType: "fit", value: "cigarette",
        attributes: { volume: "slim", taper: "mild", structure: "structured" }
    },

    // STRAIGHT
    {
        id: 205, category: "bottom", featureType: "fit", value: "straight",
        attributes: { volume: "straight", taper: "none", structure: "structured" }
    },

    {
        id: 206, category: "bottom", featureType: "fit", value: "classic-straight",
        attributes: { volume: "straight", taper: "none", structure: "rigid" }
    },

    {
        id: 207, category: "bottom", featureType: "fit", value: "mom",
        attributes: { volume: "straight", taper: "mild", structure: "structured" }
    },

    // RELAXED
    {
        id: 208, category: "bottom", featureType: "fit", value: "boyfriend",
        attributes: { volume: "wide", taper: "none", structure: "relaxed" }
    },

    {
        id: 209, category: "bottom", featureType: "fit", value: "girlfriend",
        attributes: { volume: "wide", taper: "mild", structure: "relaxed" }
    },

    {
        id: 210, category: "bottom", featureType: "fit", value: "dad",
        attributes: { volume: "wide", taper: "none", structure: "relaxed" }
    },

    {
        id: 211, category: "bottom", featureType: "fit", value: "baggy",
        attributes: { volume: "very-wide", taper: "none", structure: "unstructured" }
    },

    // WIDE / DRAMATIC
    {
        id: 212, category: "bottom", featureType: "fit", value: "wide-leg",
        attributes: { volume: "wide", taper: "none", structure: "structured" }
    },

    {
        id: 213, category: "bottom", featureType: "fit", value: "palazzo",
        attributes: { volume: "very-wide", taper: "none", structure: "flowy" }
    },

    {
        id: 214, category: "bottom", featureType: "fit", value: "barrel",
        attributes: { volume: "curved", taper: "inward", structure: "structured" }
    },

    {
        id: 215, category: "bottom", featureType: "fit", value: "balloon",
        attributes: { volume: "curved", taper: "strong", structure: "structured" }
    },

    // FLARED
    {
        id: 216, category: "bottom", featureType: "fit", value: "flare",
        attributes: { volume: "wide-hem", taper: "reverse", structure: "structured" }
    },

    {
        id: 217, category: "bottom", featureType: "fit", value: "bell-bottom",
        attributes: { volume: "very-wide-hem", taper: "reverse", structure: "structured" }
    },

    {
        id: 218, category: "bottom", featureType: "fit", value: "bootcut",
        attributes: { volume: "mild-wide-hem", taper: "reverse", structure: "structured" }
    },

    {
        id: 219, category: "bottom", featureType: "fit", value: "kick-flare",
        attributes: { volume: "wide-hem", taper: "reverse", structure: "cropped" }
    },

    // CROPPED / LENGTH
    {
        id: 220, category: "bottom", featureType: "length", value: "cropped",
        attributes: { length: "cropped", visualBreak: "high" }
    },

    {
        id: 221, category: "bottom", featureType: "length", value: "ankle",
        attributes: { length: "ankle", visualBreak: "medium" }
    },

    {
        id: 222, category: "bottom", featureType: "length", value: "full",
        attributes: { length: "full", visualBreak: "low" }
    },

    // RISE
    {
        id: 223, category: "bottom", featureType: "rise", value: "low-rise",
        attributes: { waistPlacement: "low", torsoEffect: "elongates" }
    },

    {
        id: 224, category: "bottom", featureType: "rise", value: "mid-rise",
        attributes: { waistPlacement: "mid", torsoEffect: "neutral" }
    },

    {
        id: 225, category: "bottom", featureType: "rise", value: "high-rise",
        attributes: { waistPlacement: "high", torsoEffect: "shortens" }
    },

    {
        id: 226, category: "bottom", featureType: "rise", value: "ultra-high-rise",
        attributes: { waistPlacement: "very-high", torsoEffect: "strongly-shortens" }
    }
];

export const clothingItems = [
    ...necklineItems,
    ...jeansItems
];

/* ================= PRIORITY MATRIX ================= */
/*
  Each entry = relationship between
  ONE clothing feature (clothingId)
  and ONE body structure feature (featureId)
*/

export const priorityMatrix = [
    /* ---------- NECKLINES vs SHOULDERS ---------- */
    { clothingId: 101, featureId: "strongShoulderDominant", score: 10, ruleType: "MINIMIZE_WIDTH" }, // v-neck
    { clothingId: 112, featureId: "strongShoulderDominant", score: 2, ruleType: "MAXIMIZE_WIDTH" },  // crew
    { clothingId: 114, featureId: "strongShoulderDominant", score: 1, ruleType: "MAXIMIZE_WIDTH" },  // boat
    { clothingId: 108, featureId: "strongShoulderDominant", score: 6, ruleType: "MINIMIZE_WIDTH" },  // square
    { clothingId: 118, featureId: "strongShoulderDominant", score: 1, ruleType: "MAXIMIZE_WIDTH" },  // halter

    /* ---------- NECKLINES vs CHEST ---------- */
    { clothingId: 101, featureId: "lowProjection", score: 9, ruleType: "ELONGATE_VERTICAL" },
    { clothingId: 109, featureId: "lowProjection", score: 8, ruleType: "SOFTEN_FRAME" },
    { clothingId: 117, featureId: "lowProjection", score: 2, ruleType: "MAXIMIZE_WIDTH" }, // turtleneck

    /* ---------- BOTTOM FIT vs THIGHS ---------- */
    { clothingId: 212, featureId: "voluminousThighs", score: 9, ruleType: "ACCOMMODATE_VOLUME" }, // wide-leg
    { clothingId: 216, featureId: "voluminousThighs", score: 8, ruleType: "BALANCE_VOLUME" },     // flare
    { clothingId: 201, featureId: "voluminousThighs", score: 2, ruleType: "BALANCE_VOLUME" },     // skinny
    { clothingId: 211, featureId: "voluminousThighs", score: 5, ruleType: "ACCOMMODATE_VOLUME" }, // baggy

    /* ---------- RISE vs TORSO ---------- */
    { clothingId: 223, featureId: "shortTorso", score: 9, ruleType: "ELONGATE_VERTICAL" }, // low-rise
    { clothingId: 224, featureId: "shortTorso", score: 6, ruleType: "ELONGATE_VERTICAL" }, // mid-rise
    { clothingId: 225, featureId: "shortTorso", score: 2, ruleType: "SHORTEN_VERTICAL" },  // high-rise

    { clothingId: 225, featureId: "longTorso", score: 9, ruleType: "SHORTEN_VERTICAL" }   // high-rise
];
