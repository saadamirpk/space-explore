import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import back from "../Images/back.png";
import fore_smoke from "../Images/fore-smoke.png";
import fore_tower from "../Images/fore-tower.png";
import mid_rocket from "../Images/mid-rocket.png";
import mid_tower from "../Images/mid-tower.png";

export default function HeroSection(props: { offY: number; offX: number }) {
  return (
    <>
      <section className="parallax p-margins">
        <img
          src={back}
          style={{
            transform: `translateX(${(props.offX * 1) / 100}px) translateY(${
              (props.offY * 2) / 100
            }px)`,
          }}
          className="back"
          alt="Background Image"
        />
        <img
          src={mid_rocket}
          style={{
            transform: `translateX(${(props.offX * 2) / 100}px) translateY(${
              (props.offY * 3) / 100
            }px)`,
          }}
          alt="Background Image"
          className="back"
          data-speed="3"
        />
        <img
          src={mid_tower}
          style={{
            transform: `translateX(${(props.offX * 4) / 100}px) translateY(${
              (props.offY * -2) / 100
            }px)`,
          }}
          alt="Background Image"
          className="back"
          data-speed="4"
        />
        <img
          src={fore_tower}
          style={{
            transform: `translateX(${(props.offX * -1) / 100}px) translateY(${
              (props.offY * 1) / 100
            }px)`,
          }}
          alt="Background Image"
          className="back"
          data-speed="-5"
        />
        <img
          src={fore_smoke}
          style={{
            transform: `translateX(${(props.offX * -2) / 100}px) translateY(${
              (props.offY * 2) / 100
            }px)`,
          }}
          alt="Background Image"
          className="back"
          data-speed="7"
        />
        <h2
        /*style={{
            transform: `translateX(${(props.offX * -1) / 100}px) translateY(${
              (props.offY * -1) / 100
            }px)`,
          }}
          */
        >
          Where do aliens go for a drink?
          <br />
          The space bar.
        </h2>
      </section>
    </>
  );
}
