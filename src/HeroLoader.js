import React from "react";
import Hero from "./Hero";

const HeroLoader = props => {
  const { name, rarity } = props;
  const hero = JSON.parse(localStorage.getItem("s4p-" + name));
  return hero ? (
    <Hero
      name={name}
      rarity={rarity}
      storedCards={hero.cards}
      storedLevel={hero.level}
    />
  ) : (
    <Hero name={name} rarity={rarity} storedCards={0} storedLevel={0} />
  );
};

export default HeroLoader;
