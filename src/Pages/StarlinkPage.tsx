import { Typography } from "@mui/material";
import React from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import starback from "../Images/starlink-back.jpg";

export default function StarlinkPage() {
  return (
    <div>
      <HeroSectionSimple cover={starback} title="Starlink" />
      <Typography
        variant="h2"
        component={"h2"}
        color="white"
        align="center"
        marginTop={10}
      >
        A Live Map of all <br /> StarLink Satellites will be added here
      </Typography>
    </div>
  );
}
