export function getRecommendations(flags) {
  const recommendations = {
    tops: {
      wear: [],
      avoid: []
    },
    bottoms: {
      wear: [],
      avoid: []
    }
  };

  /* ---------- TOPS ---------- */

  if (flags.isShoulderDominant) {
    recommendations.tops.wear.push(
      "open necklines",
      "v-neck",
      "wrap tops"
    );
    recommendations.tops.avoid.push(
      "crew neck",
      "high neck",
      "puff sleeves",
      "cap sleeves"
    );
  }

  if (flags.hasLowChestProjection && flags.isBroadFrame) {
    recommendations.tops.wear.push(
      "vertical necklines",
      "draped tops"
    );
    recommendations.tops.avoid.push(
      "tight high-neck tops"
    );
  }

  if (flags.isShortTorso) {
    recommendations.tops.wear.push(
      "regular length tops",
      "longline tops"
    );
    recommendations.tops.avoid.push(
      "crop tops"
    );
  }

  /* ---------- BOTTOMS ---------- */

  if (flags.isShortTorso) {
    recommendations.bottoms.wear.push(
      "low rise",
      "mid rise"
    );
    recommendations.bottoms.avoid.push(
      "high rise"
    );
  }

  if (flags.isThighDominant) {
    recommendations.bottoms.wear.push(
      "flared jeans",
      "wide leg pants"
    );
    recommendations.bottoms.avoid.push(
      "ultra skinny jeans"
    );
  }

  return recommendations;
}
