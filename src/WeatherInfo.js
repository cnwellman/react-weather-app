import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="clearfix d-flex align-items-center">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
