import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

//console.log(offspring)
function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");
  const [weight,setWeight] = useState(0);

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }
  function handleChangeWeight(e) {
    if (e.target.name === "+"){
      setWeight(weight + 1)
    } else if (e.target.name === "-"){
      setWeight(weight - 1)
    }
  }
  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
        <BabyHog eyeColor={eyeColor} offspring={offspring} weight={weight} setWeight={handleChangeWeight}/>
      </ul>
    </div>
  );
}

export default HogBoss;
