import { scoreClothingItems } from "./logic/scoreClothingItems.js";

const mockStructure = {
    vertical: { shortTorso: true },
    frame: { strongShoulderDominant: true },
    waist: { stronglyCurvy: true },
    chest: { lowProjection: true },
    lowerBody: { voluminousThighs: true }
};

const result = scoreClothingItems(mockStructure);

console.log("=== RECOMMENDED TOPS ===");
result.top.forEach(r => {
    console.log(`\n[${r.score}] ${r.item.value.toUpperCase()}`);
    r.explanations.forEach(exp => console.log(`   - ${exp}`));
});

console.log("\n=== RECOMMENDED BOTTOMS ===");
result.bottom.forEach(r => {
    console.log(`\n[${r.score}] ${r.item.value.toUpperCase()}`);
    r.explanations.forEach(exp => console.log(`   - ${exp}`));
});

