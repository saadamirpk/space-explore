import React from "react";
import DoubleSideCard from "../Components/DoubleSideCard";
import HeroSection from "../Components/HeroSection";
import launchpic from "../Images/launchpic.jpg";
import rockets from "../Images/rockets.jpg";
import starlinks from "../Images/starlink.jpg";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <DoubleSideCard
        dir={1}
        title="Starlink"
        subtitle="Some Info"
        desc="Some Desc"
        cardimg={starlinks}
        buttonLink="/starlink"
      />
      <DoubleSideCard
        dir={2}
        title="Launches"
        subtitle="Some Info"
        desc="Some Desc"
        cardimg={launchpic}
        buttonLink="/starlink"
      />
      <DoubleSideCard
        dir={1}
        title="Rockets"
        subtitle="Some Info"
        desc="Some Desc"
        cardimg={rockets}
        buttonLink="/starlink"
      />
    </div>
  );
}
