export function calculateRatios(measurements) {
  const {
    shoulder,
    bust,
    underbust,
    upperWaist,
    lowerWaist,
    hip,
    upperThigh,
    lowerThigh,
    height,
    torso
  } = measurements;

  const leg = height - torso;

  return {
    // Upper vs lower body balance
    shoulderHipRatio: shoulder / hip,

    // Bust distribution
    bustHipRatio: bust / hip,

    // Waist structure
    waistTaperRatio: upperWaist / lowerWaist,
    waistHipRatio: upperWaist / hip,

    // Chest structure
    chestProjectionRatio: bust / underbust,
    shoulderChestRatio: shoulder / bust,

    // Thigh structure
    thighHipRatio: upperThigh / hip,
    thighTaperRatio: lowerThigh / upperThigh,

    // Vertical proportions
    torsoLegRatio: torso / leg
  };
}
