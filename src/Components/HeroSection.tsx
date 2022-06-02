import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import back from "../Images/back.png";
import fore_smoke from "../Images/fore-smoke.png";
import fore_tower from "../Images/fore-tower.png";
import mid_rocket from "../Images/mid-rocket.png";
import mid_tower from "../Images/mid-tower.png";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseMove = (e: any) => {
    setOffsetY(e.screenY);
    setOffsetX(e.screenX);
  };

  return (
    <>
      <section onMouseMove={handleMouseMove} className="parallax">
        <img
          src={back}
          style={{
            transform: `translateX(${(offsetX * 1) / 100}px) translateY(${
              (offsetY * 2) / 100
            }px)`,
          }}
          alt="Background Image"
        />
        <img
          src={mid_rocket}
          style={{
            transform: `translateX(${(offsetX * 2) / 100}px) translateY(${
              (offsetY * 3) / 100
            }px)`,
          }}
          alt="Background Image"
          data-speed="3"
        />
        <img
          src={mid_tower}
          style={{
            transform: `translateX(${(offsetX * 4) / 100}px) translateY(${
              (offsetY * -2) / 100
            }px)`,
          }}
          alt="Background Image"
          data-speed="4"
        />
        <img
          src={fore_tower}
          style={{
            transform: `translateX(${(offsetX * -1) / 100}px) translateY(${
              (offsetY * 1) / 100
            }px)`,
          }}
          alt="Background Image"
          data-speed="-5"
        />
        <img
          src={fore_smoke}
          style={{
            transform: `translateX(${(offsetX * -2) / 100}px) translateY(${
              (offsetY * 2) / 100
            }px)`,
          }}
          alt="Background Image"
          data-speed="7"
        />
        <h2
        /*style={{
            transform: `translateX(${(offsetX * -1) / 100}px) translateY(${
              (offsetY * -1) / 100
            }px)`,
          }}
          */
        >
          Where do aliens go for a drink?
          <br />
          The space bar.
        </h2>
      </section>
      <div className="border"></div>
    </>
  );
}
