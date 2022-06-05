import React from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import launchback from "../Images/launches-back.jpg";

export default function UpcomingLaunchesPage() {
  return (
    <div>
      <HeroSectionSimple cover={launchback} title="Launches" />
    </div>
  );
}
