import React from "react";
import HeroLoader from "./HeroLoader";
import { heroes } from "./costs";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      {heroes.map((hero, index) => (
        <HeroLoader key={index} name={hero.name} rarity={hero.rarity} />
      ))}
    </div>
  );
};

export default App;
