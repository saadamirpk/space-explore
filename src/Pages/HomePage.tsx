import Typography from "@mui/material/Typography";
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
      <br />
      <br />
      <Typography
        className="bring-up"
        variant="h2"
        component="h2"
        align="center"
        color="white"
      >
        SPACEX On The Fly
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        align="center"
        color="white"
      >
        Mission for Space Exploration
      </Typography>
      <br />
      <br />
      <hr />
      <br />
      <DoubleSideCard
        dir={100}
        title="Starlink"
        subtitle="The company has launched more than 2,400 Starlink spacecraft to date, many of them this year; 10 of SpaceX's 18 launches in 2022 have been dedicated Starlink missions. Friday's launch marked the 45th Starlink mission since launches began in 2019, SpaceX sales manager Ian McCullough said during live launch commentary."
        desc="Starlink is on the leading edge of on-orbit debris mitigation, meeting or exceeding all regulatory and industry standards. At end of life, the satellites will utilize their on-board propulsion system to deorbit over the course of a few months."
        cardimg={starlinks}
        buttonLink="/starlink"
      />
      <DoubleSideCard
        dir={-100}
        title="Launches"
        subtitle="The company has launched more than 2,400 Starlink spacecraft to date, many of them this year; 10 of SpaceX's 18 launches in 2022 have been dedicated Starlink missions. Friday's launch marked the 45th Starlink mission since launches began in 2019, SpaceX sales manager Ian McCullough said during live launch commentary."
        desc="The company has launched more than 2,400 Starlink spacecraft to date, many of them this year; 10 of SpaceX's 18 launches in 2022 have been dedicated Starlink missions. Friday's launch marked the 45th Starlink mission since launches began in 2019, SpaceX sales manager Ian McCullough said during live launch commentary."
        cardimg={launchpic}
        buttonLink="/starlink"
      />
      <DoubleSideCard
        dir={100}
        title="Rockets"
        subtitle="Most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb) Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy. Falcon Heavy is composed of three Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft."
        desc="The company has launched more than 2,400 Starlink spacecraft to date, many of them this year; 10 of SpaceX's 18 launches in 2022 have been dedicated Starlink missions. Friday's launch marked the 45th Starlink mission since launches began in 2019, SpaceX sales manager Ian McCullough said during live launch commentary."
        cardimg={rockets}
        buttonLink="/starlink"
      />
    </div>
  );
}
