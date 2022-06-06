import Typography from "@mui/material/Typography";
import React from "react";
import DisplaySection from "../Components/DisplaySection";
import HeroSection from "../Components/HeroSection";
import launchpic from "../Images/launchpic.jpg";
import rockets from "../Images/rockets.jpg";
import starlinks from "../Images/starlink.jpg";
import star_back from "../Images/starlink-backdrop.jpg";
import launch_back from "../Images/launchpad-backdrop.jpeg";
import rocket_back from "../Images/rockets-backdrop.jpeg";

export default function HomePage(props: { offY: number; offX: number }) {
  return (
    <div>
      <HeroSection offY={props.offY} offX={props.offX} />

      <DisplaySection
        left={false}
        back={star_back}
        display={starlinks}
        title="Starlink"
        subtitle="The company has launched more than 2,400 Starlink spacecraft to date, many of them this year; 10 of SpaceX's 18 launches in 2022 have been dedicated Starlink missions. Friday's launch marked the 45th Starlink mission since launches began in 2019, SpaceX sales manager Ian McCullough said during live launch commentary."
        desc="Starlink is on the leading edge of on-orbit debris mitigation, meeting or exceeding all regulatory and industry standards."
        buttonLink="/starlink"
      />

      <DisplaySection
        left={true}
        back={launch_back}
        display={launchpic}
        title="Launches"
        subtitle="The company has launched more than 2,400 Starlink spacecraft to date, many of them this year. Friday's launch marked the 45th Starlink mission since launches began in 2019."
        desc="The company has launched more than 2,400 Starlink spacecraft to date, many of them this year; 10 of SpaceX's 18 launches in 2022 have been dedicated Starlink missions."
        buttonLink="/launches"
      />

      <DisplaySection
        left={false}
        back={rocket_back}
        display={rockets}
        title="Rockets"
        subtitle="Most powerful operational rocket in the world by a factor of two. Generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft."
        desc="TFriday's launch marked the 45th Starlink mission since launches began in 2019, SpaceX sales manager Ian McCullough said during live launch commentary."
        buttonLink="/rockets"
      />
    </div>
  );
}
