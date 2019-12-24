import * as costs from "./costs.js";

export const calculateTotalCards = (cards, level) => {
  const totalCards = cardsInvested(level) + cards;
  return totalCards;
};

const cardsInvested = level => {
  return costs.cardCostPerLevel.slice(0, level + 1).reduce((a, b) => a + b, 0);
};

export const levelUp = totalCards => {
  let cardsNotYetSpent = totalCards;
  let levelReached = 0;
  for (let i = 0; i < costs.cardCostPerLevel.length; i++) {
    if (cardsNotYetSpent >= costs.cardCostPerLevel[i]) {
      cardsNotYetSpent -= costs.cardCostPerLevel[i];
      levelReached = i;
    }
  }
  return [levelReached, cardsNotYetSpent];
};

export const calculatePotentialLevel = totalCards => {
  return levelUp(totalCards)[0];
};

export const calculateCardsTilNextLevel = totalCards => {
  const [levelReached, leftOverCards] = levelUp(totalCards);
  return costs.cardCostPerLevel[levelReached + 1] - leftOverCards;
};

export const calculateGoldCost = (rarity, currentLevel, targetLevel) => {
  if (rarity === "common") {
    return costs.goldCostPerLevelForCommon
      .slice(currentLevel + 1, targetLevel + 1)
      .reduce((a, b) => a + b, 0);
  } else if (rarity === "rare") {
    return costs.goldCostPerLevelForRare
      .slice(currentLevel + 1, targetLevel + 1)
      .reduce((a, b) => a + b, 0);
  } else if (rarity === "epic") {
    return costs.goldCostPerLevelForEpic
      .slice(currentLevel + 1, targetLevel + 1)
      .reduce((a, b) => a + b, 0);
  }
};
