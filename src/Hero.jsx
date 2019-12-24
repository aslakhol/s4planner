import React, { useState, useEffect } from "react";
import { InputField } from "./InputField";
import {
  calculateTotalCards,
  calculatePotentialLevel,
  calculateGoldCost,
  calculateCardsTilNextLevel
} from "./calculator";

const Hero = props => {
  const { name, storedCards, storedLevel, rarity } = props;

  const [cards, setCards] = useState(storedCards);
  const [level, setLevel] = useState(storedLevel);

  const totalCards = calculateTotalCards(cards, level);
  const potentialLevel = calculatePotentialLevel(totalCards);
  const goldCost = calculateGoldCost(rarity, level, potentialLevel);
  const cardsTilNextLevel = calculateCardsTilNextLevel(totalCards);

  useEffect(() => {
    const heroObject = {
      name: name,
      rarity: rarity,
      cards: cards,
      level: level
    };

    localStorage.setItem("s4p-" + name, JSON.stringify(heroObject));
  }, [cards, level, name, rarity]);

  return (
    <div className={"hero " + rarity}>
      <h3>{name}</h3>
      <InputField name={name} type="cards" onChange={setCards} value={cards} />
      <InputField name={name} type="level" onChange={setLevel} value={level} />
      <span>Potential Level: {potentialLevel}</span>
      <br />
      <span>Gold cost: {goldCost}</span>
      <br />
      <span>
        Cards until {potentialLevel + 1}: {cardsTilNextLevel}
      </span>
    </div>
  );
};

export default Hero;
