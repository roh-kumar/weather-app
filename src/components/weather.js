import React from "react";
import "./weather.css";
import moon from "./moon.png";
import sun from "./sun.png";

const Weather = (props) => {
  let date = Math.round(new Date().getTime() / 1000);
  return (
    <div className="weather">
      <br />

      <div
        className="container"
        style={{ border: "1px solid transparent", backgroundColor: "#7dcc93" }}
      >
        <br />
        <div className="container today">
          <p>
            {date >= props.sunset_ts && (
              <img src={moon} className="image" alt="moon" />
            )}{" "}
          </p>
          <p>
            {date < props.sunset_ts && (
              <img src={sun} className="image" alt="sun" />
            )}
          </p>
          <p>
            {props.forecast_temp[0] && (
              <p className="today-temp">{props.forecast_temp[0]}°</p>
            )}
          </p>
          <p>
            {props.country && props.city && (
              <p className="location">
                {props.city}, {props.country}
              </p>
            )}
          </p>
          <p>{props.desc && <p>{props.desc}</p>}</p>
        </div>
        <div className="container main">
          <br />
          <p>{props.city && <p className="label1">Additional Info</p>}</p>
          <p>
            {props.forecast_humi[0] && (
              <p className="label">
                Humidity: <b>{props.forecast_humi[0]}</b> %
              </p>
            )}
          </p>
          <p>
            {props.forecast_preci[0] >= 0 && (
              <p className="label">
                Precipitation: <b>{props.forecast_preci[0]}</b> mm
              </p>
            )}
          </p>
        </div>
      </div>
      <br />
      <div
        className="container"
        style={{ border: "1px solid transparent", backgroundColor: "#f76160" }}
      >
        <br />
        <div>
          {props.forecast_temp[1] && (
            <p>
              <b className="label1">Next 3 Days</b>
            </p>
          )}
        </div>
        <div className=" container main">
          <br />
          <p>
            {props.forecast_date[1] && (
              <p className="label1">{props.forecast_date[1]}</p>
            )}
          </p>
          <p>
            {props.forecast_temp[1] && (
              <p className="label">
                <b>{props.forecast_temp[1]}</b>°
              </p>
            )}
          </p>
          <p>
            {props.forecast_humi[1] && (
              <p className="label">
                Humidity: <b>{props.forecast_humi[1]}</b> %
              </p>
            )}
          </p>
          <p>
            {props.forecast_preci[1] >= 0 && (
              <p className="label">
                Precipitation: <b>{props.forecast_preci[1]}</b> mm
              </p>
            )}
          </p>
        </div>
        <div className=" container main">
          <br />
          <p>
            {props.forecast_date[2] && (
              <p className="label1">{props.forecast_date[2]}</p>
            )}
          </p>
          <p>
            {props.forecast_temp[2] && (
              <p className="label">
                <b>{props.forecast_temp[2]}</b>°
              </p>
            )}
          </p>
          <p>
            {props.forecast_humi[2] && (
              <p className="label">
                Humidity: <b>{props.forecast_humi[2]}</b> %
              </p>
            )}
          </p>
          <p>
            {props.forecast_preci[2] >= 0 && (
              <p className="label">
                Precipitation: <b>{props.forecast_preci[2]}</b> mm
              </p>
            )}
          </p>
        </div>
        <div className=" container main">
          <br />
          <p>
            {props.forecast_date[3] && (
              <p className="label1">{props.forecast_date[3]}</p>
            )}
          </p>
          <p>
            {props.forecast_temp[3] && (
              <p className="label">
                <b>{props.forecast_temp[3]}</b>°
              </p>
            )}
          </p>
          <p>
            {props.forecast_humi[3] && (
              <p className="label">
                Humidity: <b>{props.forecast_humi[3]}</b> %
              </p>
            )}
          </p>
          <p>
            {props.forecast_preci[3] >= 0 && (
              <p className="label">
                Precipitation: <b>{props.forecast_preci[3]}</b> mm
              </p>
            )}
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Weather;
