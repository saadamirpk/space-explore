import React from "react";
import "../css/rocketcard.css";

export default function RocketCard(props: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="top"
          style={{
            background: `url(${props.img})`,
          }}
        ></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">info_outline</i>
        </div>
        <div className="contents">
          <table>
            <tr>
              <th>Success Rate</th>
              <th>First Flight</th>
            </tr>
            <tr>
              <td>100%</td>
              <td>2018-02-06</td>
            </tr>
            <tr>
              <th>Boosters</th>
              <th>Mass</th>
            </tr>
            <tr>
              <td>2</td>
              <td>1420788 kg</td>
            </tr>
            <tr>
              <th>Height</th>
              <th>Diameter</th>
            </tr>
            <tr>
              <td>70 meters</td>
              <td>12.2 meters</td>
            </tr>
            <tr>
              <th>Cost Per Launch</th>
              <th>Company</th>
            </tr>
            <tr>
              <td>$90 million</td>
              <td>SpaceX</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
