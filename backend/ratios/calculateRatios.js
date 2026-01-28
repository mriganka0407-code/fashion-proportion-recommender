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
    /* ---------- VERTICAL ---------- */
    torsoLegRatio: torso / leg,
    legHeightRatio: leg / height,

    /* ---------- FRAME BALANCE ---------- */
    shoulderHipRatio: shoulder / hip,
    pelvisHeightRatio: hip / height,

    /* ---------- WAIST ---------- */
    waistTaperRatio: upperWaist / lowerWaist,
    waistHipRatio: upperWaist / hip,
    waistSoftnessRatio: lowerWaist / hip,

    /* ---------- CHEST / UPPER TORSO ---------- */
    chestProjectionRatio: bust / underbust,
    upperTorsoDensityRatio: (shoulder + bust) / height,

    /* ---------- LOWER BODY ---------- */
    thighHipRatio: upperThigh / hip,
    thighHeightRatio: upperThigh / height,
    thighTaperRatio: lowerThigh / upperThigh
  };
}