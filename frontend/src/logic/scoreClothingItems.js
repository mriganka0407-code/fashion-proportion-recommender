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
                // Only push explanation reasons if the score is positive
                if (entry.score > 0) {
                    scores[entry.clothingId].reasons.push({
                        featureId: entry.featureId,
                        ruleType: entry.ruleType
                    });
                }
            }
        }
    });

    // Group, generate explanations, and sort results
    const result = {
        top: [],
        bottom: []
    };

    Object.values(scores).forEach(entry => {
        // Filter out items that have no positive matches or too many negatives
        if (entry.score <= 0) return;

        // Convert raw reasons into human-readable strings
        entry.explanations = entry.reasons
            .map(r => generateExplanation(r.ruleType, entry.item.value, r.featureId))
            .filter(exp => exp !== null);

        // Cleanup raw data
        delete entry.reasons;

        result[entry.item.category].push(entry);
    });

    // Sort by score
    result.top.sort((a, b) => b.score - a.score);
    result.bottom.sort((a, b) => b.score - a.score);

    // Calculate Match Percentages based on Category Max
    // We add a safety offset so 1 single match doesn't always equal 100%
    const SCALING_FACTOR = 25; // An item needs approx 25 points for a "perfect" score

    result.top = result.top.map(item => ({
        ...item,
        matchScore: Math.min(100, Math.round((item.score / SCALING_FACTOR) * 100))
    }));

    result.bottom = result.bottom.map(item => ({
        ...item,
        matchScore: Math.min(100, Math.round((item.score / SCALING_FACTOR) * 100))
    }));

    return result;
}
