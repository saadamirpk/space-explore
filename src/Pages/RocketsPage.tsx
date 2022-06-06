import React, { useEffect, useState } from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import rocketback from "../Images/rocket-back.jpg";
import RocketCard from "../Components/RocketCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function RocketsPage() {
  const [rocketsData, setrocketsData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchRockets();
    })();
  }, []);

  useEffect(() => {
    console.log(rocketsData);
  }, [rocketsData]);

  async function fetchRockets() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((res) => res.json())
      .then((res) => {
        setrocketsData(res);
        setLoading(false);
      });
  }

  const DisplayRockets = rocketsData.map((rocket: any) => {
    return (
      <Grid item sm={12} md={6} key={rocket.id}>
        <RocketCard
          title={rocket.name}
          desc={rocket.description}
          img={rocket.flickr_images[0]}
          success={rocket.success_rate_pct}
          boosters={rocket.boosters}
          height={rocket.height.meters}
          diameter={rocket.diameter.meters}
          cost={rocket.cost_per_launch / 100000}
          flight={rocket.first_flight}
          mass={rocket.mass.kg}
          company={rocket.company}
        />
      </Grid>
    );
  });

  return (
    <>
      <HeroSectionSimple cover={rocketback} title="Rockets" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop={"20px"}
          spacing={1}
        >
          {loading ? <p>Loading...</p> : DisplayRockets}
        </Grid>
      </Box>
    </>
  );
}
