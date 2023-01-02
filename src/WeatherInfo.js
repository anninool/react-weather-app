import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-3">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <ul className="atributes">
            <li>Feels like: {Math.round(props.data.feeltemp)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>

        <div className="col-6 d-flex flex-row-reverse">
          <div className="weather-card">
            <h1>{props.data.city} </h1>
            <ul className="card-atributes">
              <li className="text-capitalize">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
