import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroSectionSimple from "../Components/HeroSectionSimple";
import starback from "../Images/starlink-back.jpg";
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function StarlinkPage() {
  const [starLinkData, setStarLinkData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchStars();
    })();
  }, []);

  async function fetchStars() {
    fetch("https://api.spacexdata.com/v4/starlink")
      .then((res) => res.json())
      .then((res) => {
        setStarLinkData(res);
        setLoading(false);
      });
  }

  const DisplayMarkers = starLinkData.map((satellite) => {
    if (satellite.latitude === null || satellite.longitude === null) {
      return;
    }
    return (
      <CircleMarker center={[satellite.latitude, satellite.longitude]}>
        <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
          <span>
            {satellite.spaceTrack.OBJECT_NAME + " - " + satellite.version}
            <br />
            Launched: {satellite.spaceTrack.LAUNCH_DATE}
          </span>
        </Tooltip>
      </CircleMarker>
    );
  });

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
        A Live Map of all StarLink Satellites with Name and Launch Date
      </Typography>
      <br />
      <br />
      <br />
      <MapContainer
        style={{ height: "480px", width: "100%" }}
        zoom={4}
        center={[30.3753, 69.3451]}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {!loading && DisplayMarkers}
      </MapContainer>
    </div>
  );
}
