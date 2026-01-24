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
    /* ---------- BODY BALANCE ---------- */
    isShoulderDominant: ratios.shoulderHipRatio >= SHOULDER_DOMINANT,
    isHipDominant: ratios.shoulderHipRatio < HIP_DOMINANT,

    /* ---------- WAIST SHAPE ---------- */
    isStronglyCurvy: ratios.waistTaperRatio <= STRONG_CURVE,
    isModeratelyCurvy:
      ratios.waistTaperRatio > STRONG_CURVE &&
      ratios.waistTaperRatio <= MODERATE_CURVE,
    isBlocky: ratios.waistTaperRatio > MODERATE_CURVE,

    /* ---------- WAIST DEFINITION ---------- */
    hasStrongWaist: ratios.waistHipRatio <= STRONG_WAIST,
    hasLowWaistDefinition: ratios.waistHipRatio > LOW_WAIST_DEFINITION,

    /* ---------- CHEST STRUCTURE ---------- */
    hasLowChestProjection:
      ratios.chestProjectionRatio <= LOW_CHEST_PROJECTION,
    hasHighChestProjection:
      ratios.chestProjectionRatio >= HIGH_CHEST_PROJECTION,

    /* ---------- FRAME DENSITY ---------- */
    isBroadFrame: ratios.shoulderChestRatio >= BROAD_FRAME,

    /* ---------- THIGH STRUCTURE ---------- */
    isThighDominant: ratios.thighHipRatio >= THIGH_DOMINANT,
    isBalancedThigh:
      ratios.thighHipRatio >= THIGH_BALANCED &&
      ratios.thighHipRatio < THIGH_DOMINANT,

    /* ---------- THIGH TAPER ---------- */
    hasStraightThigh: ratios.thighTaperRatio >= STRAIGHT_THIGH,
    hasStrongThighTaper: ratios.thighTaperRatio < TAPERED_THIGH,

    /* ---------- VERTICAL PROPORTIONS ---------- */
    isShortTorso: ratios.torsoLegRatio < SHORT_TORSO,
    isLongTorso: ratios.torsoLegRatio >= LONG_TORSO
  };
}
