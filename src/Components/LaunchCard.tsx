import React, { useEffect, useState } from "react";
import "../css/rocketcard.css";

export default function LaunchCard(props: any) {
  const [rocket, setRocket] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchRocket();
    })();
  }, []);

  useEffect(() => {
    console.log(rocket);
  }, [rocket]);

  async function fetchRocket() {
    fetch(`https://api.spacexdata.com/v4/rockets/${props.rocket}`)
      .then((res) => res.json())
      .then((res) => {
        setRocket(res);
        setLoading(false);
      });
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="top"
          style={{
            background: loading ? `` : `url(${rocket.flickr_images[0]})`,
          }}
        ></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>
                {props.title}
                {loading ? "" : " - " + rocket.name}
              </h1>
              <p>
                {props.desc}
                <br />
                <br />
                {props.date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">info_outline</i>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="contents">
            <table>
              <tr>
                <th>Success Rate</th>
                <th>First Flight</th>
              </tr>
              <tr>
                <td>{rocket.success_rate_pct}%</td>
                <td>{rocket.first_flight}</td>
              </tr>
              <tr>
                <th>Boosters</th>
                <th>Mass</th>
              </tr>
              <tr>
                <td>{rocket.boosters}</td>
                <td>{rocket.mass.kg} kg</td>
              </tr>
              <tr>
                <th>Height</th>
                <th>Diameter</th>
              </tr>
              <tr>
                <td>{rocket.height.meters} meters</td>
                <td>{rocket.diameter.meters} meters</td>
              </tr>
              <tr>
                <th>Cost Per Launch</th>
                <th>Company</th>
              </tr>
              <tr>
                <td>${rocket.cost_per_launch / 100000} million</td>
                <td>{rocket.company}</td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
