import React from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import starback from "../Images/starlink-back.jpg";

export default function StarlinkPage() {
  return (
    <div>
      <HeroSectionSimple cover={starback} title="Starlink" />
    </div>
  );
}
