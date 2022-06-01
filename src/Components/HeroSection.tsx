import React from "react";
import earth from "../Images/mid-earth.png";
import rocket from "../Images/front-rocket.png";
import stars from "../Images/back-stars.png";
import space from "../Images/spacex.jpg";

export default function HeroSection() {
  //Where do aliens go for a drink? The space bar.
  return (
    <>
      <div className="img-holder">
        <h2 className="object" data-value="3">
          My Text
        </h2>

        <img src={space} alt="Stars" id="star" />
        {/** 
      <img src={earth} alt="Earth" id="earth" />
      <img src={rocket} alt="Rocket" id="rocket" />
    */}
      </div>
      <div className="data"></div>
    </>
  );
}
