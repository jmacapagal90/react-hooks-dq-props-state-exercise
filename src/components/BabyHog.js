import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`


function BabyHog({offspring, eyeColor,setWeight, weight}) {

  function babyEyeColor(){
    if (eyeColor === "sun"){
      return SunBaby
     } else if (eyeColor === "blue"){
        return BlueBaby
     } else if (eyeColor === "glowing"){
      return GlowingBaby
     } else {
      return normalBaby
     }
  }
  const HogCard = offspring.map((hog)=>(
      <li key={hog.id} className="hogbabies">
        <h1>Name: {hog.name}</h1>
        <h3>Weight: {weight} tons</h3>
        <h3>Hobby: {hog.hobby}</h3>
        <h4>Eye Color: {eyeColor}</h4>

      <button onClick={setWeight} name="+">Increase Weight</button>
      <button onClick={setWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={babyEyeColor()}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  ))
  
  return (
    <>
    {HogCard}
    </>
  )
}

export default BabyHog;
