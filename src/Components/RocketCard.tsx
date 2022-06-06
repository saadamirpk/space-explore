import React from "react";
import "../css/rocketcard.css";

export default function RocketCard(props: any) {
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
              <td>{props.success}%</td>
              <td>{props.flight}</td>
            </tr>
            <tr>
              <th>Boosters</th>
              <th>Mass</th>
            </tr>
            <tr>
              <td>{props.boosters}</td>
              <td>{props.mass} kg</td>
            </tr>
            <tr>
              <th>Height</th>
              <th>Diameter</th>
            </tr>
            <tr>
              <td>{props.height} meters</td>
              <td>{props.diameter} meters</td>
            </tr>
            <tr>
              <th>Cost Per Launch</th>
              <th>Company</th>
            </tr>
            <tr>
              <td>${props.cost} million</td>
              <td>{props.company}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
