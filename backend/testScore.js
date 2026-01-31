import { calculateRatios } from "./ratios/calculateRatios.js";
import { classifyStructure } from "./logic/classifyStructure.js";
import { scoreClothingItems } from "./logic/scoreClothingItems.js";

/**
 * ENTER YOUR MEASUREMENTS HERE (Inches or CM - the results are ratio-based)
 */
const myMeasurements = {
    height: 64,          // e.g., 5'4"
    shoulderWidth: 16,
    bust: 34,
    waist: 28,
    hip: 38,
    torsoLength: 18,
    legLength: 30
};

// 1. Calculate Proportions
const ratios = calculateRatios(myMeasurements);

// 2. Classify Body Structure
const structure = classifyStructure(ratios);

// 3. Score Clothing Items
const result = scoreClothingItems(structure);

// Helper to print results
const printCategory = (label, items, categoryName) => {
    console.log(`\n=== ${label} (Sorted by Match) ===`);
    const active = items.filter(r => r.matchScore > 0);
    const avoid = items.filter(r => r.matchScore === 0);

    active.forEach(r => {
        console.log(`\n[${r.matchScore}% Match] ${r.item.value.toUpperCase()} (Score: ${r.score})`);
        r.explanations.forEach(exp => console.log(`   - ${exp}`));
    });

    if (avoid.length > 0) {
        console.log(`\n${categoryName} to Avoid:`);
        console.log(`> ${avoid.map(n => n.item.value).join(", ")}`);
    }
};

console.log("--- FASHION PROPORTION RECOMMENDER: TERMINAL TEST ---");
console.log("Measurements used:", myMeasurements);

printCategory("TOP RECOMMENDATIONS", result.top, "Necklines");
printCategory("BOTTOM RECOMMENDATIONS", result.bottom, "Bottoms");
