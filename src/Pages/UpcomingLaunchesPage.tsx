import React from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import RocketCard from "../Components/RocketCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import launchback from "../Images/launches-back.jpg";

export default function UpcomingLaunchesPage() {
  const cardData = [
    {
      title: "Falcon Heavy",
      desc: "With the ability to lift into orbit over 54 metric tons a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      img: "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
    },
    {
      title: "Dragon Delight",
      desc: "With the ability to lift into orbit over 54 metric tons a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      img: "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg",
    },
    {
      title: "Eagle Light",
      desc: "With the ability to lift into orbit over 54 metric tons a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      img: "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg",
    },
    {
      title: "Storm Trooper",
      desc: "With the ability to lift into orbit over 54 metric tons a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      img: "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
    },
    {
      title: "Space Delight",
      desc: "With the ability to lift into orbit over 54 metric tons a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      img: "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
    },
  ];

  const DisplayRockets = cardData.map((rocket) => {
    return (
      <Grid item sm={12} md={6}>
        <RocketCard title={rocket.title} desc={rocket.desc} img={rocket.img} />
      </Grid>
    );
  });

  return (
    <>
      <HeroSectionSimple cover={launchback} title="Launches" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop={"20px"}
          spacing={1}
        >
          {DisplayRockets}
        </Grid>
      </Box>
    </>
  );
}
