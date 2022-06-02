import { Button, Typography } from "@mui/material";
import React from "react";

export default function DoubleSideCard(props: {
  dir: number;
  title: string;
  subtitle: string;
  desc: string;
  buttonLink: string;
  cardimg: string;
}) {
  return (
    <div className="main-card">
      {props.dir == 1 && (
        <img
          className="card-img left-radius"
          src={props.cardimg}
          alt="Rocket Launch"
        />
      )}
      <div className="card-content">
        <div className="card-container">
          <Typography variant="h2" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="span">
            {props.subtitle}
          </Typography>
          <br />
          <Typography variant="body2" component="span">
            {props.desc}
          </Typography>
          <br />
          <br />
          <Button variant="contained" color="secondary" size="small">
            {props.title}
          </Button>
        </div>
      </div>
      {props.dir == 2 && (
        <img
          className="card-img right-radius"
          src={props.cardimg}
          alt="Rocket Launch"
        />
      )}
    </div>
  );
}
