export function calculateRatios(measurements) {
  // Map simplified frontend keys to the calculation logic
  const {
    height = 170,
    shoulderWidth = 40,
    bust = 90,
    waist = 70,
    hip = 95,
    torsoLength = 50,
    legLength = 80,

    // Fallbacks for more granular details if they become available
    underbust = measurements.bust * 0.85,
    upperWaist = measurements.waist,
    lowerWaist = measurements.waist * 1.05,
    upperThigh = measurements.hip * 0.6,
    lowerThigh = measurements.hip * 0.5
  } = measurements;

  const leg = legLength || (height - torsoLength);
  const torso = torsoLength;

  return {
    /* ---------- VERTICAL ---------- */
    torsoLegRatio: torso / leg,
    legHeightRatio: leg / height,

    /* ---------- FRAME BALANCE ---------- */
    shoulderHipRatio: shoulderWidth / hip,
    pelvisHeightRatio: hip / height,

    /* ---------- WAIST ---------- */
    waistTaperRatio: upperWaist / lowerWaist,
    waistHipRatio: upperWaist / hip,
    waistSoftnessRatio: lowerWaist / hip,

    /* ---------- CHEST / UPPER TORSO ---------- */
    chestProjectionRatio: bust / underbust,
    upperTorsoDensityRatio: (shoulderWidth + bust) / height,

    /* ---------- LOWER BODY ---------- */
    thighHipRatio: upperThigh / hip,
    thighHeightRatio: upperThigh / height,
    thighTaperRatio: lowerThigh / upperThigh
  };
}