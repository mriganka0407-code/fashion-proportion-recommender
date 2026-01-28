import { clothingItems, priorityMatrix } from "../db/mockClothingDB.js";
import { generateExplanation } from "../db/ruleMetadata.js";

/**
 * Flattens active structure flags into a list of feature IDs
 */
function extractActiveFeatures(structureFlags) {
    const activeFeatures = [];

    for (const group in structureFlags) {
        for (const feature in structureFlags[group]) {
            if (structureFlags[group][feature] === true) {
                activeFeatures.push(feature);
            }
        }
    }

    return activeFeatures;
}

/**
 * Scores clothing items based on active body structure features
 * returns { top: [], bottom: [] } where each entry has item, score, and explanations
 */
export function scoreClothingItems(structureFlags) {
    const activeFeatures = extractActiveFeatures(structureFlags);
    const scores = {};

    // Initialize scores
    clothingItems.forEach(item => {
        scores[item.id] = {
            item,
            score: 0,
            reasons: [] // Raw data for explanation generation
        };
    });

    // Aggregate priority scores and reasons
    priorityMatrix.forEach(entry => {
        if (activeFeatures.includes(entry.featureId)) {
            if (scores[entry.clothingId]) {
                scores[entry.clothingId].score += entry.score;
                scores[entry.clothingId].reasons.push({
                    featureId: entry.featureId,
                    ruleType: entry.ruleType
                });
            }
        }
    });

    // Group, generate explanations, and sort results
    const result = {
        top: [],
        bottom: []
    };

    Object.values(scores).forEach(entry => {
        if (entry.score > 0) {
            // Convert raw reasons into human-readable strings
            entry.explanations = entry.reasons
                .map(r => generateExplanation(r.ruleType, entry.item.value, r.featureId))
                .filter(exp => exp !== null);

            // Cleanup raw data before returning
            delete entry.reasons;

            result[entry.item.category].push(entry);
        }
    });

    result.top.sort((a, b) => b.score - a.score);
    result.bottom.sort((a, b) => b.score - a.score);

    return result;
}
