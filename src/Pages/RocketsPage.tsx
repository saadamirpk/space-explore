import React from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import rocketback from "../Images/rocket-back.jpg";

export default function RocketsPage() {
  return (
    <div>
      <HeroSectionSimple cover={rocketback} title="Rockets" />
    </div>
  );
}
