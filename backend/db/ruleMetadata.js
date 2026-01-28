/**
 * Metadata for rules that connect clothing features to body structural features.
 * These templates are used to generate simple, diplomatic explanations.
 */

export const ruleMetadata = {
    // Frames & Shoulders
    "MINIMIZE_WIDTH": {
        label: "Balancing",
        explanation: "The {clothingValue} draws the eye inward to balance your {bodyFeature}."
    },
    "MAXIMIZE_WIDTH": {
        label: "Structure",
        explanation: "The {clothingValue} adds nice structure and focus to your {bodyFeature}."
    },

    // Vertical Proportions
    "ELONGATE_VERTICAL": {
        label: "Elongating",
        explanation: "The {clothingValue} creates a longer, continuous line along your {bodyFeature}."
    },
    "SHORTEN_VERTICAL": {
        label: "Sectioning",
        explanation: "The {clothingValue} adds a nice break in the vertical line of your {bodyFeature}."
    },

    // Volume & Thighs
    "ACCOMMODATE_VOLUME": {
        label: "Comfort Fit",
        explanation: "The {clothingValue} is designed to fit comfortably and relaxed around your {bodyFeature}."
    },
    "BALANCE_VOLUME": {
        label: "Harmonizing",
        explanation: "The {clothingValue} has a shape that harmonizes well with your {bodyFeature}."
    },

    // Waist & Torso
    "DEFINE_WAIST": {
        label: "Definition",
        explanation: "The {clothingValue} helps highlight the natural line of your {bodyFeature}."
    },
    "SOFTEN_FRAME": {
        label: "Softening",
        explanation: "The {clothingValue} has soft lines that complement your {bodyFeature}."
    },

    // NEW: Denim Specific Mechanics from Task 1
    "TORSO_COMPRESSION": {
        label: "Compression",
        explanation: "The high placement of the {clothingValue} compresses the vertical space of your {bodyFeature}."
    },
    "SILHOUETTE_ANCHOR": {
        label: "Anchoring",
        explanation: "The base of the {clothingValue} provides a visual anchor that balances the weight of your {bodyFeature}."
    },
    "COLUMN_EFFECT": {
        label: "Columnar",
        explanation: "The {clothingValue} creates a consistent vertical column that neutralizes software in your {bodyFeature}."
    }
};

/**
 * Helper to generate a human-readable string from a rule.
 */
export function generateExplanation(ruleType, clothingValue, bodyFeatureLabel) {
    const rule = ruleMetadata[ruleType];
    if (!rule) return null;

    const featureLabels = {
        "strongShoulderDominant": "upper frame",
        "mildShoulderDominant": "upper frame",
        "lowProjection": "chest profile",
        "voluminousThighs": "lower proportions",
        "shortTorso": "waistline",
        "longTorso": "upper body line",
        "straightThigh": "leg line",
        "blocky": "midsection",
        "stronglyCurvy": "natural curves",
        "largePelvis": "hip area",
        "narrowPelvis": "lower frame",
        "shortLegs": "leg length",
        "longLegs": "leg length"
    };

    const label = featureLabels[bodyFeatureLabel] || bodyFeatureLabel;

    return rule.explanation
        .replace("{clothingValue}", clothingValue)
        .replace("{bodyFeature}", label);
}
