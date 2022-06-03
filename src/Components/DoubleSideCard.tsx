import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
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
    <motion.div
      className="main-card"
      initial={{ x: props.dir, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      {props.dir == 100 && (
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
          <Button variant="contained" color="secondary" size="small">
            {props.title}
          </Button>
        </div>
      </div>
      {props.dir == -100 && (
        <img
          className="card-img right-radius"
          src={props.cardimg}
          alt="Rocket Launch"
        />
      )}
    </motion.div>
  );
}
