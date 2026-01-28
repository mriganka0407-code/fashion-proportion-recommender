/**
 * Metadata for rules that connect clothing features to body structural features.
 * These templates are used to generate human-readable explanations.
 */

export const ruleMetadata = {
    // Frames & Shoulders
    "MINIMIZE_WIDTH": {
        label: "Width Minimization",
        explanation: "The {clothingValue} creates a narrowing effect that balances the width of your {bodyFeature}."
    },
    "MAXIMIZE_WIDTH": {
        label: "Width Emphasis",
        explanation: "The horizontal lines of the {clothingValue} add structure and presence to your {bodyFeature}."
    },

    // Vertical Proportions
    "ELONGATE_VERTICAL": {
        label: "Vertical Elongation",
        explanation: "This {clothingValue} extends the vertical line, visually lengthening your {bodyFeature}."
    },
    "SHORTEN_VERTICAL": {
        label: "Vertical Sectioning",
        explanation: "The placement of this {clothingValue} breaks up the vertical line, which helps balance a {bodyFeature}."
    },

    // Volume & Thighs
    "ACCOMMODATE_VOLUME": {
        label: "Volume Accommodation",
        explanation: "The cut of this {clothingValue} provides ample room for {bodyFeature} without creating pulling or tension."
    },
    "BALANCE_VOLUME": {
        label: "Volume Balancing",
        explanation: "The silhouette of this {clothingValue} helps offset the volume in your {bodyFeature}, creating a more proportional line."
    },

    // Waist & Torso
    "DEFINE_WAIST": {
        label: "Waist Definition",
        explanation: "The structured taper of this {clothingValue} helps define and accentuate your {bodyFeature}."
    },
    "SOFTEN_FRAME": {
        label: "Frame Softening",
        explanation: "The organic or draped lines of the {clothingValue} help soften a more {bodyFeature} silhouette."
    }
};

/**
 * Helper to generate a human-readable string from a rule.
 * In a real system, this might use a translation/i18n engine.
 */
export function generateExplanation(ruleType, clothingValue, bodyFeatureLabel) {
    const rule = ruleMetadata[ruleType];
    if (!rule) return null;

    // Mapping raw technical feature names to human-friendly labels if needed
    // e.g., 'strongShoulderDominant' -> 'broad shoulders'
    const featureLabels = {
        "strongShoulderDominant": "shoulders",
        "lowProjection": "chest profile",
        "voluminousThighs": "thighs",
        "shortTorso": "torso",
        "longTorso": "torso"
    };

    const label = featureLabels[bodyFeatureLabel] || bodyFeatureLabel;

    return rule.explanation
        .replace("{clothingValue}", clothingValue)
        .replace("{bodyFeature}", label);
}
