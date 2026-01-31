import {
  SHOULDER_DOMINANT,
  HIP_DOMINANT,
  STRONG_CURVE,
  MODERATE_CURVE,
  STRONG_WAIST,
  LOW_WAIST_DEFINITION,
  LOW_CHEST_PROJECTION,
  HIGH_CHEST_PROJECTION,
  BROAD_FRAME,
  THIGH_DOMINANT,
  THIGH_BALANCED,
  STRAIGHT_THIGH,
  TAPERED_THIGH,
  SHORT_TORSO,
  LONG_TORSO
} from "../ratios/ratioConstants.js";

export function classifyStructure(ratios) {
  return {
    /* ---------- VERTICAL PROPORTIONS ---------- */
    vertical: {
      veryShortTorso: ratios.torsoLegRatio < 0.82,
      shortTorso: ratios.torsoLegRatio >= 0.82 && ratios.torsoLegRatio < 0.85,
      balancedTorso:
        ratios.torsoLegRatio >= 0.85 && ratios.torsoLegRatio <= 0.94,
      longTorso: ratios.torsoLegRatio > 0.94,
      longLegs: ratios.legHeightRatio > 0.52,
      shortLegs: ratios.legHeightRatio < 0.48
    },

    /* ---------- FRAME BALANCE ---------- */
    frame: {
      strongShoulderDominant: ratios.shoulderHipRatio >= 1.08,
      mildShoulderDominant:
        ratios.shoulderHipRatio >= 1.05 && ratios.shoulderHipRatio < 1.08,
      balancedFrame:
        ratios.shoulderHipRatio >= 0.95 && ratios.shoulderHipRatio < 1.05,
      mildHipDominant:
        ratios.shoulderHipRatio >= 0.92 && ratios.shoulderHipRatio < 0.95,
      strongHipDominant: ratios.shoulderHipRatio < 0.92,

      largePelvis: ratios.pelvisHeightRatio > 0.30,
      narrowPelvis: ratios.pelvisHeightRatio < 0.27
    },

    /* ---------- WAIST STRUCTURE ---------- */
    waist: {
      stronglyCurvy: ratios.waistTaperRatio <= 0.88,
      moderatelyCurvy:
        ratios.waistTaperRatio > 0.88 && ratios.waistTaperRatio <= 0.94,
      blocky: ratios.waistTaperRatio > 0.94,

      softMidsection: ratios.waistSoftnessRatio > 0.90,
      firmMidsection: ratios.waistSoftnessRatio < 0.85
    },

    /* ---------- CHEST / UPPER TORSO ---------- */
    chest: {
      lowProjection: ratios.chestProjectionRatio <= 1.06,
      highProjection: ratios.chestProjectionRatio >= 1.12,

      denseUpperTorso: ratios.upperTorsoDensityRatio > 0.55,
      lightUpperTorso: ratios.upperTorsoDensityRatio < 0.50
    },

    /* ---------- LOWER BODY ---------- */
    lowerBody: {
      thighDominant: ratios.thighHipRatio >= 0.62,
      pelvisDominant: ratios.thighHipRatio < 0.55,

      voluminousThighs: ratios.thighHeightRatio > 0.36,
      slimThighs: ratios.thighHeightRatio < 0.32,

      straightThigh: ratios.thighTaperRatio >= 0.90,
      stronglyTaperedThigh: ratios.thighTaperRatio < 0.80
    }
  };

}
