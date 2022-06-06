import React, { ReactNode } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function DisplaySection(props: {
  left: boolean;
  back: string;
  display: string;
  title: string;
  subtitle: string;
  desc: string;
  buttonLink: string;
}) {
  return (
    <Box sx={{ flexGrow: 1 }} className="parallax">
      <img className="back" src={props.back} alt="Background Image" />
      <div className="overlay" />
      <Grid
        container
        className="top"
        justifyContent={"center"}
        alignItems="center"
      >
        {props.left ? (
          <>
            <Grid
              item
              sm={12}
              md={4}
              sx={{ display: { sm: "none", md: "block" } }}
            >
              <div className="display-img-holder">
                <img
                  className="display-img"
                  src={props.display}
                  alt="Display Image"
                />
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="h2" component="h2">
                {props.title}
              </Typography>
              <br />
              <br />
              <Typography variant="body2" component="span">
                {props.subtitle}
              </Typography>
              <br />
              <br />
              <Typography
                variant="body2"
                component="span"
                textAlign={"justify"}
              >
                {props.desc}
              </Typography>
              <br />
              <br />
              <br />
              <Link to={props.buttonLink} style={{ textDecoration: "none" }}>
                <Button className="btn" variant="contained" size="large">
                  {props.title}
                </Button>
              </Link>
            </Grid>
          </>
        ) : (
          <>
            <Grid item sm={12} md={6}>
              <Typography variant="h2" component="h2">
                {props.title}
              </Typography>
              <br />
              <br />
              <Typography variant="body2" component="span">
                {props.subtitle}
              </Typography>
              <br />
              <br />
              <Typography variant="body2" component="span">
                {props.desc}
              </Typography>
              <br />
              <br />
              <br />
              <Link to={props.buttonLink} style={{ textDecoration: "none" }}>
                <Button className="btn" variant="contained" size="large">
                  {props.title}
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              sx={{ display: { sm: "none", md: "block" } }}
            >
              <div className="display-img-holder">
                <img
                  className="display-img"
                  src={props.display}
                  alt="Display Image"
                />
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
