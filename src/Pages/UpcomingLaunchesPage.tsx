import React, { useEffect, useState } from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import launchback from "../Images/launches-back.jpg";
import LaunchCard from "../Components/LaunchCard";

export default function UpcomingLaunchesPage() {
  const [launchData, setLaunchData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchLaunches();
    })();
  }, []);

  useEffect(() => {
    console.log(launchData);
  }, [launchData]);

  async function fetchLaunches() {
    fetch("https://api.spacexdata.com/v5/launches")
      .then((res) => res.json())
      .then((res) => {
        setLaunchData(res);
        setLoading(false);
      });
  }

  const DisplayLaunches = launchData.map((launch: any) => {
    return (
      <Grid item sm={12} md={6} key={launch.id}>
        <LaunchCard
          title={launch.name}
          desc={launch.details}
          date={launch.date_local}
          rocket={launch.rocket}
        />
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
          {loading ? <p>Loading...</p> : DisplayLaunches}
        </Grid>
      </Box>
    </>
  );
}
