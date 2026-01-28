import { scoreClothingItems } from "./logic/scoreClothingItems.js";

const mockStructure = {
    vertical: { longTorso: true },
    frame: { mildShoulderDominant: true },
    waist: { blocky: true },
    chest: { lowProjection: true },
    lowerBody: { straightThigh: true }
};

const result = scoreClothingItems(mockStructure);

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

printCategory("ALL NECKLINES", result.top, "Necklines");
printCategory("ALL BOTTOMS", result.bottom, "Bottoms");

