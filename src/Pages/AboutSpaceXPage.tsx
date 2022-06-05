import React from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import spaceback from "../Images/spacex-back.jpg";

export default function AboutSpaceXPage() {
  return (
    <div>
      <HeroSectionSimple cover={spaceback} title="SpaceX" />
    </div>
  );
}
